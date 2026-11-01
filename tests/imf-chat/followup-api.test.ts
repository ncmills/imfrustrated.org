import { test } from "node:test";
import assert from "node:assert/strict";
import { hashToken, type ApiIn, type Env } from "../../src/lib/imf-chat/case-api";
import { handleFollowupPost } from "../../src/lib/imf-chat/followup-api";
import { CRISIS_CARD, RESOURCES_LINE } from "../../src/lib/imf-chat/crisis";
import { fakeStore } from "./fake-store";

const ENV: Env = { IMF_CHAT_ENABLED: "1", IMF_CHAT_BETA_TOKEN: "beta-tok", IMF_CHAT_IP_SALT: "salt-1" };
const TOKEN = "t".repeat(43);

async function setup(patch: Record<string, unknown> = {}, env: Env = ENV) {
  const store = fakeStore();
  const { id } = await store.insertCase({ token_hash: hashToken(TOKEN), status: "pass", letter: "LETTER", ...patch });
  const ask = (q: unknown, hdrs: Record<string, string> = {}) => {
    const h: Record<string, string> = { "x-imf-beta": "beta-tok", ...hdrs };
    const req: ApiIn = { body: { token: TOKEN, q }, ip: "203.0.113.9", header: (n) => h[n.toLowerCase()] ?? null };
    return handleFollowupPost(req, store, env);
  };
  return { store, ask, row: () => store.cases.get(id)! };
}

test("positive control: a plain question appends {q, a:null} and queues one followup job", async () => {
  const s = await setup();
  const r = await s.ask("How do I send this letter?");
  assert.equal(r.status, 202);
  assert.deepEqual(s.row().followups, [{ q: "How do I send this letter?", a: null }]);
  assert.equal(s.store.jobs.length, 1);
  assert.equal(s.store.jobs[0].kind, "followup");
});

for (const q of [
  "I'll kill myself if I lose this apartment",                      // (i) N3
  "Change the amount to $900, also I want to KILL  myself",          // (j) fact change + crisis, N3
  "thinking about suicide", "self-harm",                              // N4 variants
]) {
  test(`crisis follow-up -> card in same response, 0 jobs, nothing appended: ${q}`, async () => {
    const s = await setup();
    const r = await s.ask(q);
    assert.equal(r.status, 200);
    assert.deepEqual(r.body.card, CRISIS_CARD);
    assert.equal(s.store.jobs.length, 0);
    assert.deepEqual(s.row().followups, []);
    assert.equal(s.store.rl.size, 0);
  });
}

test("tier B term queues and shows the resources line", async () => {
  const s = await setup();
  const r = await s.ask("The landlord says I'm in danger of eviction, what next?");
  assert.equal(r.status, 202);
  assert.equal(r.body.resources, RESOURCES_LINE);
  assert.equal(s.store.jobs.length, 1);
});

test("limit: 5 per case, one unanswered at a time", async () => {
  const s = await setup();
  assert.equal((await s.ask("q1 about the letter")).status, 202);
  assert.equal((await s.ask("q2 about the letter")).status, 409);
  for (let i = 2; i <= 5; i++) {
    s.row().followups.at(-1)!.a = "answer";
    assert.equal((await s.ask(`q${i} about the letter`)).status, 202);
  }
  s.row().followups.at(-1)!.a = "answer";
  const r = await s.ask("q6 about the letter");
  assert.equal(r.status, 429);
  assert.equal(r.body.error, "followup_limit");
  assert.equal(s.store.jobs.length, 5);
});

test("kill switch, beta gate, missing salt, no visible letter, held letter, redaction", async () => {
  assert.equal((await (await setup({}, { ...ENV, IMF_CHAT_ENABLED: "0" })).ask("hi there")).status, 503);
  assert.equal((await (await setup()).ask("hi there", { "x-imf-beta": "nope" })).status, 403);
  const { IMF_CHAT_IP_SALT: _d, ...noSalt } = ENV;
  const ns = await setup({}, noSalt);
  assert.equal((await ns.ask("hi there")).status, 503);
  assert.equal(ns.store.jobs.length, 0);
  assert.equal((await (await setup({ status: "queued", letter: null })).ask("hi there")).status, 409);
  assert.equal((await (await setup({ held_for_nick: true, review: null })).ask("hi there")).status, 409);
  const red = await setup();
  const r = await red.ask("My SSN is 123-45-6789, is that needed?");
  assert.equal(r.status, 202);
  assert.ok(!red.row().followups[0].q.includes("123-45-6789"));
});
