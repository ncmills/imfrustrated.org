import { test } from "node:test";
import assert from "node:assert/strict";
import { handleCasePost, ipKey, type ApiIn, type Env } from "../../src/lib/imf-chat/case-api";
import { redact } from "../../src/lib/imf-chat/redact";
import { fakeStore } from "./fake-store";

const ENV: Env = { IMF_CHAT_ENABLED: "1", IMF_CHAT_BETA_TOKEN: "beta-tok", SIGNAL_TEST_SECRET: "sn-secret", IMF_CHAT_IP_SALT: "salt-1" };
const IP = "203.0.113.7";

function harness(env: Env = ENV) {
  let now = Date.UTC(2026, 10, 1, 12);
  const store = fakeStore(() => now);
  const call = (body: unknown, hdrs: Record<string, string> = {}, ip = IP) => {
    const h: Record<string, string> = { "x-imf-beta": "beta-tok", ...hdrs };
    const req: ApiIn = { body, ip, header: (n) => h[n.toLowerCase()] ?? null };
    return handleCasePost(req, store, env, now);
  };
  const tick = (ms: number) => { now += ms; };
  const create = async (hdrs?: Record<string, string>, ip?: string) => {
    const r = await call({ action: "create", disclaimer_v: "d1" }, hdrs, ip);
    assert.equal(r.status, 201);
    tick(4000);
    return r.body.token as string;
  };
  const turn = (token: string, step: string, value?: unknown, hdrs?: Record<string, string>, ip?: string) =>
    call({ action: "turn", token, step, value }, hdrs, ip);
  const toStory = async (token: string, hdrs?: Record<string, string>, ip?: string) => {
    assert.equal((await turn(token, "state", "CA", hdrs, ip)).status, 200);
    assert.equal((await turn(token, "safety", { danger: false, deadline: false, lawyer: false }, hdrs, ip)).status, 200);
    assert.equal((await turn(token, "category", "deposit", hdrs, ip)).status, 200);
    assert.equal((await turn(token, "counterparty", "Acme Rentals LLC", hdrs, ip)).status, 200);
  };
  const fullCase = async (hdrs?: Record<string, string>, ip?: string) => {
    const t = await create(hdrs, ip);
    await toStory(t, hdrs, ip);
    assert.equal((await turn(t, "story", "They kept my $1,250 deposit after I moved out.", hdrs, ip)).status, 200);
    return turn(t, "submit", undefined, hdrs, ip);
  };
  return { store, call, tick, create, turn, toStory, fullCase };
}
const only = (s: ReturnType<typeof harness>) => [...s.store.cases.values()][0];

test("kill switch off -> 503; beta token missing -> 403", async () => {
  const off = harness({ ...ENV, IMF_CHAT_ENABLED: "0" });
  assert.equal((await off.call({ action: "create", disclaimer_v: "d1" })).status, 503);
  const h = harness();
  assert.equal((await h.call({ action: "create", disclaimer_v: "d1" }, { "x-imf-beta": "wrong" })).status, 403);
});

test("disclaimer required; state first; safety first", async () => {
  const h = harness();
  assert.equal((await h.call({ action: "create" })).status, 400);
  const t = await h.create();
  assert.equal((await h.turn(t, "story", "something")).body.error, "state_first");
  await h.turn(t, "state", "CA");
  assert.equal((await h.turn(t, "category", "deposit")).body.error, "safety_first");
});

test("honeypot pretends success and stores nothing", async () => {
  const h = harness();
  const r = await h.call({ action: "create", disclaimer_v: "d1", website: "http://spam" });
  assert.equal(r.status, 200);
  assert.equal(h.store.cases.size, 0);
});

test("bot guard: first turn under 3 s is refused", async () => {
  const h = harness();
  const r = await h.call({ action: "create", disclaimer_v: "d1" });
  assert.equal((await h.turn(r.body.token as string, "state", "CA")).body.error, "too_fast");
});

test("happy path queues one letter job; no strategy field anywhere", async () => {
  const h = harness();
  const r = await h.fullCase();
  assert.equal(r.status, 202);
  assert.equal(h.store.jobs.length, 1);
  assert.equal(h.store.jobs[0].kind, "letter");
  assert.equal(only(h).status, "queued");
  assert.ok(!JSON.stringify(r.body).includes("strategy"));
});

for (const s of ["I want to kill myself", "I want to KILL  myself", "self-harm", "thinking about suicide"]) {
  test(`crisis tier A in intake text -> card in same response, 0 jobs: ${s}`, async () => {
    const h = harness();
    const t = await h.create();
    await h.toStory(t);
    const r = await h.turn(t, "story", s);
    assert.equal(r.body.status, "crisis");
    assert.ok(r.body.card);
    assert.equal(h.store.jobs.length, 0);
    assert.equal(only(h).status, "crisis");
    assert.ok(!JSON.stringify(only(h).turns).includes("myself"), "crisis text is not stored");
    assert.equal((await h.turn(t, "submit")).status, 409);
  });
}

test("tier B: resources line, case continues, job created", async () => {
  for (const s of ["I'm in danger of eviction", "overdose charge on my pharmacy bill"]) {
    const h = harness();
    const t = await h.create();
    await h.toStory(t);
    const r = await h.turn(t, "story", s);
    assert.equal(r.body.status, "intake");
    assert.ok(r.body.resources);
    assert.equal((await h.turn(t, "submit")).status, 202);
    assert.equal(h.store.jobs.length, 1);
  }
});

test("safety chips: danger -> crisis, deadline -> urgent, lawyer -> lawyer; 0 jobs", async () => {
  const cases: Array<[Record<string, boolean>, string]> = [
    [{ danger: true, deadline: false, lawyer: false }, "crisis"],
    [{ danger: false, deadline: true, lawyer: false }, "urgent"],
    [{ danger: false, deadline: false, lawyer: true }, "lawyer"],
  ];
  for (const [v, want] of cases) {
    const h = harness();
    const t = await h.create();
    await h.turn(t, "state", "TX");
    const r = await h.turn(t, "safety", v);
    assert.equal(r.body.status, want);
    assert.equal(h.store.jobs.length, 0);
  }
});

test("non-US and parking are not accepted as intake paths", async () => {
  const h = harness();
  const t = await h.create();
  assert.equal((await h.turn(t, "state", "non_us")).body.status, "out");
  const h2 = harness();
  const t2 = await h2.create();
  await h2.turn(t2, "state", "NY");
  await h2.turn(t2, "safety", { danger: false, deadline: false, lawyer: false });
  assert.equal((await h2.turn(t2, "category", "parking")).body.error, "bad_category");
});

test("rate limit: 2nd case from one IP in 24 h -> 429; crisis stop does not count (F6)", async () => {
  const h = harness();
  const t = await h.create();
  await h.toStory(t);
  assert.equal((await h.turn(t, "story", "I want to kill myself")).body.status, "crisis");
  h.tick(60_000);
  assert.equal((await h.fullCase()).status, 202, "new case after a tier A stop in the same hour is accepted");
  assert.equal((await h.fullCase()).status, 429);
});

test("rate limit: 31st turn in an hour -> 429", async () => {
  const h = harness();
  const t = await h.create(); // 1 turn
  await h.toStory(t); // 4 turns
  let last = 0;
  for (let i = 0; i < 26; i++) last = (await h.turn(t, "want", `option ${i}`)).status;
  assert.equal(last, 429);
});

test("is_test traffic is exempt from the per-IP case limit and stamped", async () => {
  const h = harness();
  const hdr = { "x-sn-test-run": "sn-secret" };
  assert.equal((await h.fullCase(hdr)).status, 202);
  assert.equal((await h.fullCase(hdr)).status, 202);
  assert.ok([...h.store.cases.values()].every((c) => c.is_test));
  assert.ok(h.store.jobs.every((j) => j.is_test));
  const bad = await h.call({ action: "create", disclaimer_v: "d1" }, { "x-sn-test-run": "guess" });
  assert.equal(h.store.cases.get(`case-3`)?.is_test, false, String(bad.status));
});

test("no raw IP stored: rl keys are 64-hex and no case field holds the IP", async () => {
  const h = harness();
  await h.fullCase();
  for (const k of h.store.rl.keys()) assert.match(k.split("|")[0], /^[0-9a-f]{64}$/);
  assert.ok(!JSON.stringify([...h.store.cases.values()]).includes(IP));
  assert.match(ipKey(IP, { IMF_CHAT_IP_SALT: "s" }) ?? "", /^[0-9a-f]{64}$/);
  assert.equal(ipKey(IP, {}), null);
  assert.equal(ipKey(IP, { IMF_CHAT_IP_SALT: "  " }), null);
  assert.notEqual(ipKey(IP, { IMF_CHAT_IP_SALT: "s" }), ipKey(IP, { IMF_CHAT_IP_SALT: "t" }));
});

test("redaction: SSN, Luhn card, 10-digit account, email, phone, DOB; amount and date survive", () => {
  const cases = ["SSN 123-45-6789", "card 4111 1111 1111 1111", "acct 1234567890", "me@example.com",
    "call (555) 123-4567", "DOB: 04/12/1988"];
  for (const s of cases) assert.ok(redact(s).text.includes("[REDACTED]"), s);
  const keep = redact("They owe me $1,250 since 03/15/2026.");
  assert.equal(keep.redacted, false);
});

test("redaction applies to stored intake text", async () => {
  const h = harness();
  const t = await h.create();
  await h.toStory(t);
  const r = await h.turn(t, "story", "My account 1234567890 was charged $1,250.");
  assert.equal(r.body.redacted, true);
  const story = only(h).turns.find((x) => x.step === "story")!;
  assert.equal(story.text, "My account [REDACTED] was charged $1,250.");
});

test("turn and story length limits", async () => {
  const h = harness();
  const t = await h.create();
  await h.toStory(t);
  assert.equal((await h.turn(t, "story", "x".repeat(2001))).body.error, "turn_length");
  for (let i = 0; i < 3; i++) assert.equal((await h.turn(t, "story", "y".repeat(2000))).status, 200);
  assert.equal((await h.turn(t, "story", "z")).body.error, "story_length");
});

test("no IMF_CHAT_IP_SALT: fails closed with 503 and writes no row (create and turn)", async () => {
  const { IMF_CHAT_IP_SALT: _drop, ...noSalt } = ENV;
  const ok = harness();
  const tok = await ok.create();
  const h = harness(noSalt);
  const r = await h.call({ action: "create", disclaimer_v: "d1" });
  assert.equal(r.status, 503);
  assert.equal(h.store.cases.size, 0);
  assert.equal(h.store.rl.size, 0);
  // positive control: same request with the salt set succeeds
  assert.equal(ok.store.cases.size, 1);
  assert.equal((await h.turn(tok, "state", "CA")).status, 503);
});

test("N8: control fixture header stamps review_fixture; beta token alone does not; 3 fixtures from one IP all queue", async () => {
  const env = { ...ENV, IMF_REVIEW_FIXTURE_SECRET: "fix-secret" };
  const plain = harness(env);
  await plain.create({ "x-imf-review-fixture": "beta-tok" });
  assert.equal(only(plain).review_fixture, false);
  const h = harness(env);
  const fx = { "x-imf-review-fixture": "fix-secret" };
  for (let i = 0; i < 3; i++) assert.equal((await h.fullCase(fx)).status, 202);
  assert.ok([...h.store.cases.values()].every((c) => c.review_fixture && !c.is_test));
  // positive control: the 2nd non-fixture case from one IP in 24 h is limited
  const p = harness(env);
  assert.equal((await p.fullCase()).status, 202);
  assert.equal((await p.fullCase()).status, 429);
  // is_test and review_fixture are never both true
  const both = harness(env);
  await both.create({ ...fx, "x-sn-test-run": "sn-secret" });
  assert.equal(only(both).is_test, true);
  assert.equal(only(both).review_fixture, false);
});
