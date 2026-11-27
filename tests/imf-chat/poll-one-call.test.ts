// SWEEP-1615: one poll = one Supabase request (two only for a queued case whose job is queued,
// which must also read imf_day_paused), bodies identical to the fake-store path, and the
// client cadence: 10 s for the first minute, then 20/40/60 capped, reset on state change,
// silent while hidden.
import { test, mock } from "node:test";
import assert from "node:assert/strict";
import { hashToken } from "../../src/lib/imf-chat/case-api";
import { handleCasePoll } from "../../src/lib/imf-chat/poll-api";
import { supabaseStore } from "../../src/lib/imf-chat/store";
import { createPollLoop, pollDelayMs } from "../../src/lib/imf-chat/poll-schedule";
import { fakeStore } from "./fake-store";

const TOKEN = "u".repeat(43);
const T0 = Date.parse("2026-11-26T12:00:00Z");
const LETTER = "Dear Landlord, please return my deposit.";

type Job = { status: string; created_at: string; kind: string };
/** A SupabaseClient stand-in that counts every network round trip (one per terminal call / rpc) and
 *  HONOURS the embedded order/limit (SN F4): without `order created_at desc` + `limit 1` on the
 *  embedded imf_chat_jobs it returns every job oldest-first, like PostgREST with no ordering. */
function mockDb(row: Record<string, unknown> | null, jobs: Job[], paused: string | null, beat: string | null = null) {
  const calls: string[] = [];
  const db = {
    from(table: string) {
      let desc = false; let lim: number | null = null;
      const q = {
        select: () => q, eq: () => q,
        order: (col: string, o: { ascending?: boolean; referencedTable?: string }) => {
          if (o?.referencedTable === "imf_chat_jobs" && col === "created_at" && o.ascending === false) desc = true;
          return q;
        },
        limit: (n: number, o?: { referencedTable?: string }) => { if (o?.referencedTable === "imf_chat_jobs") lim = n; return q; },
        maybeSingle: async () => {
          calls.push(`from:${table}`);
          if (table === "imf_chat_worker_state") return { data: beat ? { beat_at: beat } : null, error: null };
          if (table !== "imf_chat_cases") throw new Error("poll must only read imf_chat_cases / imf_chat_worker_state");
          let js = [...jobs].sort((x, y) => Date.parse(x.created_at) - Date.parse(y.created_at));
          if (desc) js.reverse();
          if (lim != null) js = js.slice(0, lim);
          return { data: row ? { ...row, imf_chat_jobs: js } : null, error: null };
        },
      };
      return q;
    },
    rpc: async (name: string) => { calls.push(`rpc:${name}`); return { data: paused, error: null }; },
  };
  return { db: db as never, calls };
}

const base = { id: "c1", created_at: new Date(T0).toISOString(), is_test: false, held_for_nick: false, letter_version: 1,
  review: null, followups: [], cover: null, sources: null, letter: null, turns: [], state: "CA", category: "landlord",
  counterparty: null, amount_usd: null, key_dates: null, token_hash: hashToken(TOKEN) };
const STATES: Array<{ name: string; row: Record<string, unknown> | null; jobs: Job[]; paused: "day_cap" | null; calls: number }> = [
  { name: "unknown token", row: null, jobs: [], paused: null, calls: 1 },
  { name: "intake", row: { ...base, status: "intake" }, jobs: [], paused: null, calls: 1 },
  { name: "queued, job queued", row: { ...base, status: "queued" }, jobs: [{ status: "queued", created_at: new Date(T0).toISOString(), kind: "letter" }], paused: null, calls: 3 },
  { name: "queued, no job", row: { ...base, status: "queued" }, jobs: [], paused: null, calls: 1 },
  { name: "running", row: { ...base, status: "queued" }, jobs: [{ status: "claimed", created_at: new Date(T0).toISOString(), kind: "letter" }], paused: null, calls: 1 },
  { name: "held", row: { ...base, status: "pass", letter: LETTER, held_for_nick: true }, jobs: [{ status: "done", created_at: new Date(T0).toISOString(), kind: "letter" }], paused: null, calls: 1 },
  { name: "done", row: { ...base, status: "pass", letter: LETTER }, jobs: [{ status: "done", created_at: new Date(T0).toISOString(), kind: "letter" }], paused: null, calls: 1 },
  { name: "day-paused", row: { ...base, status: "queued" }, jobs: [{ status: "queued", created_at: new Date(T0).toISOString(), kind: "letter" }], paused: "day_cap", calls: 2 },
];

for (const st of STATES) {
  test(`poll (${st.name}): ${st.calls} Supabase request(s), body equal to the fake-store path`, async () => {
    const m = mockDb(st.row, st.jobs, st.paused);
    const real = await handleCasePoll(TOKEN, supabaseStore(m.db), T0 + 60_000);
    assert.equal(m.calls.length, st.calls, m.calls.join(","));
    assert.equal(m.calls.filter((c) => c === "from:imf_chat_cases").length <= 1, true);
    // Same data through the in-memory store (the pre-change reference path).
    const f = fakeStore(() => T0);
    if (st.row) {
      const { id } = await f.insertCase({ token_hash: hashToken(TOKEN) });
      const { token_hash: _t, id: _i, ...rest } = st.row as Record<string, unknown>;
      await f.updateCase(id, { ...rest } as never);
      for (const j of st.jobs) { f.jobs.push({ case_id: id, kind: j.kind, is_test: false, status: j.status, created_at: j.created_at }); }
    }
    f.paused.reason = st.paused;
    const ref = await handleCasePoll(TOKEN, f, T0 + 60_000);
    assert.deepEqual(real, ref);
  });
}

test("beta-test poll reads the case once and still returns test_letter", async () => {
  const m = mockDb({ ...base, status: "pass", letter: LETTER, is_test: true, held_for_nick: true }, [], null);
  const r = await handleCasePoll(TOKEN, supabaseStore(m.db), T0, true);
  assert.equal(m.calls.length, 1);
  assert.equal((r.body.test_letter as { letter: string }).letter, LETTER);
});

test("pollDelayMs: 6 x 10 s, then 20, 40, 60 capped", () => {
  const seq = Array.from({ length: 12 }, (_, i) => pollDelayMs(i) / 1000);
  assert.deepEqual(seq, [10, 10, 10, 10, 10, 10, 20, 40, 60, 60, 60, 60]);
});

const clock = { t: 0 };
function harness() {
  clock.t = 0;
  mock.timers.enable({ apis: ["setTimeout"], now: 0 });
  const polls: number[] = [];
  let hidden = false;
  const loop = createPollLoop({
    setTimeout: (fn, ms) => setTimeout(fn, ms),
    clearTimeout: (h) => clearTimeout(h as never),
    hidden: () => hidden,
    poll: () => { polls.push(clock.t); },
  });
  return { loop, polls, setHidden: (h: boolean) => { hidden = h; } };
}
const tick = async (ms: number) => { clock.t += ms; mock.timers.tick(ms); await Promise.resolve(); await Promise.resolve(); await Promise.resolve(); };

test("loop: 10 s until 60 s, then 20/40/60 capped", async () => {
  const h = harness();
  h.loop.start();
  for (let i = 0; i < 200; i++) await tick(1000);
  h.loop.stop();
  mock.timers.reset();
  assert.deepEqual(h.polls.map((t) => t / 1000), [10, 20, 30, 40, 50, 60, 80, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720, 780, 840, 900, 960, 1020, 1080, 1140, 1200].filter((t) => t <= 200));
});

test("loop: state change resets to 10 s; hidden = no polls; visible = reset + immediate poll", async () => {
  const h = harness();
  h.loop.start();
  for (let i = 0; i < 100; i++) await tick(1000);   // deep into backoff (last poll at 60,80)
  const before = h.polls.length;
  h.loop.reset();
  const t = clock.t;
  await tick(10_000);
  assert.equal(h.polls.length, before + 1);
  assert.equal(h.polls.at(-1), t + 10_000);
  h.setHidden(true); h.loop.visibilityChanged();
  const n = h.polls.length;
  for (let i = 0; i < 300; i++) await tick(1000);
  assert.equal(h.polls.length, n, "no polls while hidden");
  h.setHidden(false); h.loop.visibilityChanged();
  await tick(0);
  assert.equal(h.polls.length, n + 1, "immediate poll on visible");
  const t2 = clock.t;
  await tick(10_000);
  assert.equal(h.polls.at(-1), t2 + 10_000, "back at 10 s after becoming visible");
  h.loop.stop();
  mock.timers.reset();
});

test("latest job is the embedded one: an old failed job + a new queued job reads as queued (F4)", async () => {
  const jobs: Job[] = [
    { status: "queued", created_at: new Date(T0).toISOString(), kind: "letter" },
    { status: "failed", created_at: new Date(T0 - 3600_000).toISOString(), kind: "letter" },
  ];
  const m = mockDb({ ...base, status: "queued" }, jobs, null);
  const r = await handleCasePoll(TOKEN, supabaseStore(m.db), T0 + 60_000);
  assert.equal(r.body.progress, "Checking your situation");
});

test("workerBeatAt: read failure or missing row is null (unknown), never a throw", async () => {
  const bad = { from: () => ({ select: () => ({ eq: () => ({ maybeSingle: async () => ({ data: null, error: { message: "permission denied" } }) }) }) }) };
  assert.equal(await supabaseStore(bad as never).workerBeatAt(), null);
  const boom = { from: () => { throw new Error("x"); } };
  assert.equal(await supabaseStore(boom as never).workerBeatAt(), null);
  const m = mockDb(null, [], null, "2026-11-26T12:00:00Z");
  assert.equal(await supabaseStore(m.db).workerBeatAt(), "2026-11-26T12:00:00Z");
});
