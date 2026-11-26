import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { handleCasePost, hashToken, isBetaTestReq, LIMITS, type ApiIn, type Env } from "../../src/lib/imf-chat/case-api";
import { handleFollowupPost } from "../../src/lib/imf-chat/followup-api";
import { handleCasePoll } from "../../src/lib/imf-chat/poll-api";
import { fakeStore } from "./fake-store";

// IFDO-PASS-2: beta-test bypass of per-IP limits, Retry-After, fixed-window semantics, test_letter read.
const ENV: Env = { IMF_CHAT_ENABLED: "1", IMF_CHAT_BETA_TOKEN: "beta-tok", SIGNAL_TEST_SECRET: "sn-secret", IMF_CHAT_IP_SALT: "salt-1" };
const BETA = { "x-imf-beta": "beta-tok" };
const TEST = { "x-sn-test-run": "sn-secret" };
const BOTH = { ...BETA, ...TEST };
const IP = "203.0.113.7";
const T0 = Date.UTC(2026, 10, 1, 12);

function harness(env: Env = ENV) {
  let now = T0;
  const store = fakeStore(() => now);
  const call = (body: unknown, hdrs: Record<string, string>) => {
    const req: ApiIn = { body, ip: IP, header: (n) => hdrs[n.toLowerCase()] ?? null };
    return handleCasePost(req, store, env, now);
  };
  const tick = (ms: number) => { now += ms; };
  const fullCase = async (h: Record<string, string>) => {
    const c = await call({ action: "create", disclaimer_v: "d1" }, h);
    assert.equal(c.status, 201);
    const token = c.body.token as string;
    tick(4000);
    const turn = (step: string, value?: unknown) => call({ action: "turn", token, step, value }, h);
    for (const [s, v] of [["state", "CA"], ["safety", { danger: false, deadline: false, lawyer: false }], ["category", "deposit"],
      ["counterparty", "Acme LLC"], ["story", "They kept my deposit."]] as const) assert.equal((await turn(s, v)).status, 200);
    return { token, res: await turn("submit") };
  };
  return { store, call, tick, fullCase, now: () => now };
}
const create = (h: ReturnType<typeof harness>, hdrs: Record<string, string>) => h.call({ action: "create", disclaimer_v: "d1" }, hdrs);

const CASES: Array<[string, Record<string, string>, boolean, Env]> = [
  ["both valid", BOTH, true, ENV],
  ["beta only", BETA, false, ENV],
  ["test only (chat gated)", TEST, false, ENV],
  ["neither", {}, false, ENV],
  ["test only with the chat PUBLIC", TEST, false, { ...ENV, IMF_CHAT_PUBLIC: "1" }],
  ["both headers but WRONG test secret", { ...BETA, "x-sn-test-run": "nope" }, false, ENV],
  ["both headers but WRONG beta token", { "x-imf-beta": "nope", ...TEST }, false, { ...ENV, IMF_CHAT_PUBLIC: "1" }],
];

for (const [name, hdrs, bypass, env] of CASES) {
  test(`(1) hourly turn limit, ${name}: ${bypass ? "bypassed" : "limited"}`, async () => {
    const h = harness(env);
    const gated = !bypass && Object.keys(hdrs).length === 0 && !env.IMF_CHAT_PUBLIC;
    if (gated || (hdrs["x-sn-test-run"] && !hdrs["x-imf-beta"] && !env.IMF_CHAT_PUBLIC)) return; // 403 before any limiter (covered in the gate test)
    let last = 201;
    let r;
    for (let i = 0; i < LIMITS.turnsPerHour + 1; i++) { r = await create(h, hdrs); last = r.status; }
    assert.equal(last, bypass ? 201 : 429);
    if (!bypass) assert.equal(r!.body.error, "rate_limited");
    if (!bypass) assert.equal(r!.headers?.["Retry-After"], "3600");
  });
}

test("(1) gate unchanged: test header alone while the chat is gated is 403 beta_only", async () => {
  const h = harness();
  const r = await create(h, TEST);
  assert.equal(r.status, 403);
  assert.equal(r.body.error, "beta_only");
});

for (const [name, hdrs, bypass, env] of CASES) {
  test(`(1) per-IP case caps, ${name}: ${bypass ? "bypassed" : "limited"}`, async () => {
    const h = harness(env);
    if (Object.keys(hdrs).length === 0 && !env.IMF_CHAT_PUBLIC) return;
    if (hdrs["x-sn-test-run"] && !hdrs["x-imf-beta"] && !env.IMF_CHAT_PUBLIC) return;
    assert.equal((await h.fullCase(hdrs)).res.status, 202);
    h.tick(4000);
    const second = await h.fullCase(hdrs);
    assert.equal(second.res.status, bypass ? 202 : 429);
    if (!bypass) {
      assert.equal(second.res.body.error, "case_limit");
      const ra = Number(second.res.headers?.["Retry-After"]);
      assert.ok(ra >= 1 && ra <= 86400, `Retry-After ${ra}`);
    }
  });
}

test("(1) kill switch, honeypot, validation and crisis screen still apply to a beta test request", async () => {
  const off = harness({ ...ENV, IMF_CHAT_ENABLED: "0" });
  assert.equal((await create(off, BOTH)).status, 503);
  const h = harness();
  assert.equal((await h.call({ action: "create" }, BOTH)).body.error, "disclaimer_required");
  assert.equal((await h.call({ action: "create", disclaimer_v: "d1", website: "x" }, BOTH)).body.ok, true);
  assert.equal(h.store.cases.size, 0);
  const t = (await create(h, BOTH)).body.token as string;
  h.tick(4000);
  await h.call({ action: "turn", token: t, step: "state", value: "CA" }, BOTH);
  await h.call({ action: "turn", token: t, step: "safety", value: { danger: false, deadline: false, lawyer: false } }, BOTH);
  await h.call({ action: "turn", token: t, step: "category", value: "deposit" }, BOTH);
  const c = await h.call({ action: "turn", token: t, step: "story", value: "I want to kill myself" }, BOTH);
  assert.equal(c.body.status, "crisis");
  assert.equal(h.store.jobs.length, 0);
});

test("(1) turn-step limiter: bypassed for both headers, limited for beta only (turn path, not only create)", async () => {
  for (const [hdrs, expect429] of [[BOTH, false], [BETA, true]] as const) {
    const h = harness();
    const t = (await create(h, hdrs)).body.token as string;  // 1 hit
    h.tick(4000);
    let saw429: Record<string, unknown> | null = null;
    for (let i = 0; i < LIMITS.turnsPerHour + 2; i++) {
      const r = await h.call({ action: "turn", token: t, step: "state", value: "CA" }, hdrs);
      if (r.status === 429) { saw429 = r.body; assert.ok(Number(r.headers?.["Retry-After"]) >= 1); break; }
    }
    assert.equal(!!saw429, expect429);
    if (saw429) assert.equal(saw429.error, "rate_limited");
  }
});

test("(1) dollar cap still stops a beta test request: the queued test job reports paused day_cap, no letter", async () => {
  const h = harness();
  const { token, res } = await h.fullCase(BOTH);
  assert.equal(res.status, 202);
  h.store.paused.reason = "day_cap";  // the worker's imf_claim_job_capped refusal
  const p = await handleCasePoll(token, h.store, h.now(), true);
  assert.equal(p.body.paused, "day_cap");
  assert.ok(!("test_letter" in p.body));
});

test("(1) followup: hourly limit bypassed for both headers only; Retry-After on 429", async () => {
  for (const [hdrs, limitedExpected] of [[BOTH, false], [BETA, true], [TEST, true]] as const) {
    const store = fakeStore(() => T0);
    let last: Awaited<ReturnType<typeof handleFollowupPost>> | undefined;
    for (let i = 0; i <= LIMITS.turnsPerHour; i++) {
      const tok = String(i).padStart(2, "0").repeat(22).slice(0, 43);
      await store.insertCase({ token_hash: hashToken(tok), status: "pass", letter: "L" });
      const h: Record<string, string> = { ...BETA, ...hdrs };
      if (hdrs === TEST) delete h["x-imf-beta"];
      const env = hdrs === TEST ? { ...ENV, IMF_CHAT_PUBLIC: "1" } : ENV;
      last = await handleFollowupPost({ body: { token: tok, q: "how do I send it?" }, ip: IP, header: (n) => h[n.toLowerCase()] ?? null }, store, env, T0);
    }
    assert.equal(last!.status, limitedExpected ? 429 : 202);
    if (limitedExpected) {
      assert.equal(last!.body.error, "rate_limited");
      assert.equal(last!.headers?.["Retry-After"], "3600");
    }
  }
});

test("(2) Retry-After is the remaining epoch-aligned window, JSON error code kept", async () => {
  const h = harness();
  h.tick(20 * 60 * 1000);  // 12:20 -> 2400 s left in the 12:00-13:00 window
  let r;
  for (let i = 0; i <= LIMITS.turnsPerHour; i++) r = await create(h, BETA);
  assert.equal(r!.status, 429);
  assert.deepEqual(r!.body, { error: "rate_limited" });
  assert.equal(r!.headers?.["Retry-After"], "2400");
});

test("(2) too_fast 429 carries Retry-After; the route handlers forward ApiOut.headers", async () => {
  const h = harness();
  const t = (await create(h, BETA)).body.token as string;
  h.tick(1000);
  const r = await h.call({ action: "turn", token: t, step: "state", value: "CA" }, BETA);
  assert.equal(r.body.error, "too_fast");
  assert.equal(r.headers?.["Retry-After"], "2");
  for (const f of ["src/app/api/chat/case/route.ts", "src/app/api/chat/followup/route.ts"]) {
    assert.match(readFileSync(f, "utf8"), /headers: out\.headers/);
  }
});

test("(3) fixed window, by design: a burst straddling the hour boundary passes ~2 x limit before a 429", async () => {
  const h = harness();
  h.tick(59 * 60 * 1000);  // 12:59
  let ok = 0;
  for (let i = 0; i < LIMITS.turnsPerHour; i++) if ((await create(h, BETA)).status === 201) ok++;
  assert.equal((await create(h, BETA)).status, 429);   // window 1 exhausted
  h.tick(2 * 60 * 1000);                                 // 13:01, new window
  for (let i = 0; i < LIMITS.turnsPerHour; i++) if ((await create(h, BETA)).status === 201) ok++;
  assert.equal(ok, 2 * LIMITS.turnsPerHour);
  assert.equal((await create(h, BETA)).status, 429);
});

// ---- (4) test_letter on the poll route
const TOKEN = "t".repeat(43);
async function seed(is_test: boolean, patch: Record<string, unknown> = {}) {
  const s = fakeStore();
  await s.insertCase({ token_hash: hashToken(TOKEN), is_test });
  const id = [...s.cases.keys()][0];
  await s.updateCase(id, { status: "pass", letter: "Dear Acme, [S1]", cover: "Send certified.", sources: [{ n: 1 }], held_for_nick: true, review: null, ...patch } as never);
  return s;
}

test("(4) test case + both headers + drafted letter: test_letter even while held; visitor fields unchanged", async () => {
  const s = await seed(true);
  const plain = await handleCasePoll(TOKEN, s, T0, false);
  const r = await handleCasePoll(TOKEN, s, T0, true);
  assert.deepEqual(r.body.test_letter, { letter: "Dear Acme, [S1]", cover: "Send certified.", sources: [{ n: 1 }] });
  assert.equal(r.body.status, "held");
  assert.ok(!("letter" in r.body));
  const { test_letter: _t, ...rest } = r.body;
  assert.deepEqual(rest, plain.body);
});

test("(4) test case + beta only (betaTest false): no test_letter", async () => {
  assert.ok(!("test_letter" in (await handleCasePoll(TOKEN, await seed(true), T0, false)).body));
});

test("(4) real case + both headers: no test_letter, body identical to a plain poll", async () => {
  const s = await seed(false);
  const a = await handleCasePoll(TOKEN, s, T0, true);
  assert.ok(!("test_letter" in a.body));
  assert.deepEqual(a.body, (await handleCasePoll(TOKEN, s, T0, false)).body);
});

test("(4) test case with no drafted letter yet: no test_letter; other token: 404, no letter", async () => {
  const s = await seed(true, { status: "queued", letter: null, cover: null });
  assert.ok(!("test_letter" in (await handleCasePoll(TOKEN, s, T0, true)).body));
  const s2 = await seed(true);
  const other = await handleCasePoll("o".repeat(43), s2, T0, true);
  assert.equal(other.status, 404);
  assert.ok(!JSON.stringify(other.body).includes("Dear Acme"));
});

test("(4) a test case's is_test is persisted at create only for the test header; isBetaTestReq needs both", async () => {
  const h = harness();
  await create(h, BOTH);
  assert.equal([...h.store.cases.values()][0].is_test, true);
  const g = (hdrs: Record<string, string>, env: Env = ENV) => isBetaTestReq({ body: {}, ip: "", header: (n) => hdrs[n.toLowerCase()] ?? null }, {}, env);
  assert.equal(g(BOTH), true);
  assert.equal(g(BETA), false);
  assert.equal(g(TEST), false);
  assert.equal(g(TEST, { ...ENV, IMF_CHAT_PUBLIC: "1" }), false);
  assert.equal(g({}), false);
  assert.equal(g({ ...BETA, "x-sn-test-run": "bad" }), false);
});

test("(4) poll route wires isBetaTestReq into handleCasePoll", () => {
  const src = readFileSync("src/app/api/chat/case/[token]/route.ts", "utf8");
  assert.match(src, /isBetaTestReq\(/);
  assert.match(src, /process\.env/);
});
