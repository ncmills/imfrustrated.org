import { test } from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { handleCasePost, LIMITS, type ApiIn, type Env } from "../../src/lib/imf-chat/case-api";
import { fakeStore } from "./fake-store";

// SWEEP-2350: beta-test requests (BOTH secrets) skip the public 10-a-day count and are bounded by a
// separate hard 12/day counter. Everyone else keeps the public counter, unchanged.
const ENV: Env = { IMF_CHAT_ENABLED: "1", IMF_CHAT_BETA_TOKEN: "beta-tok", SIGNAL_TEST_SECRET: "sn-secret", IMF_CHAT_IP_SALT: "salt-1", IMF_REVIEW_FIXTURE_SECRET: "fx-secret" };
const BOTH = { "x-imf-beta": "beta-tok", "x-sn-test-run": "sn-secret" };
const PUBLIC = { "x-imf-beta": "beta-tok" };                       // beta gate only: a normal public-path request
const FIXTURE = { "x-imf-beta": "beta-tok", "x-imf-review-fixture": "fx-secret" };  // review_fixture, NOT both secrets
const T0 = Date.UTC(2026, 10, 1, 12);
const sha = (s: string) => createHash("sha256").update(s).digest("hex");

function harness() {
  let now = T0;
  const store = fakeStore(() => now);
  let ipN = 0;
  const fullCase = async (h: Record<string, string>) => {
    const ip = `203.0.113.${++ipN}`;  // distinct IP each time: isolates the site-wide counters from per-IP caps
    const call = (body: unknown) => handleCasePost({ body, ip, header: (n: string) => h[n.toLowerCase()] ?? null } as ApiIn, store, ENV, now);
    const c = await call({ action: "create", disclaimer_v: "d1" });
    assert.equal(c.status, 201);
    const token = c.body.token as string;
    now += 4000;
    for (const [step, value] of [["state", "CA"], ["safety", { danger: false, deadline: false, lawyer: false }], ["category", "deposit"],
      ["counterparty", "Acme LLC"], ["story", "They kept my deposit."]] as const) assert.equal((await call({ action: "turn", token, step, value })).status, 200);
    return call({ action: "turn", token, step: "submit" });
  };
  const prime = async (name: string, scope: string, n: number) => { for (let i = 0; i < n; i++) await store.rlHit(sha(name), scope, 86400, 1e9); };
  return { fullCase, prime };
}
const primeGlobal = (h: ReturnType<typeof harness>, n: number) => h.prime("imf-chat-global", "case_day", n);
const primeTest = (h: ReturnType<typeof harness>, n: number) => h.prime("imf-chat-test-global", "test_case_day", n);

test("(a) public count at 10: a beta-test request (both secrets) still queues", async () => {
  const h = harness();
  await primeGlobal(h, LIMITS.globalCasesPerDay);
  const r = await h.fullCase(BOTH);
  assert.equal(r.status, 202);
  assert.equal(r.body.status, "queued");
});

test("(b) public count at 10: a normal public request gets day_limit", async () => {
  const h = harness();
  await primeGlobal(h, LIMITS.globalCasesPerDay);
  const r = await h.fullCase(PUBLIC);
  assert.equal(r.status, 429);
  assert.equal(r.body.error, "day_limit");
});

test("(c) public count at 10: a review_fixture request without both secrets gets day_limit", async () => {
  const h = harness();
  await primeGlobal(h, LIMITS.globalCasesPerDay);
  const r = await h.fullCase(FIXTURE);
  assert.equal(r.status, 429);
  assert.equal(r.body.error, "day_limit");
});

test("(d) test counter at 12: a beta-test request gets test_day_limit with Retry-After", async () => {
  const h = harness();
  await primeTest(h, LIMITS.testLettersPerDay);
  const r = await h.fullCase(BOTH);
  assert.equal(r.status, 429);
  assert.equal(r.body.error, "test_day_limit");
  assert.ok(Number(r.headers?.["Retry-After"]) >= 1);
  assert.equal(LIMITS.testLettersPerDay, 12);
});

test("(e) 12 beta letters queue, the 13th is refused, and none consumed the public counter", async () => {
  const h = harness();
  for (let i = 0; i < LIMITS.testLettersPerDay; i++) assert.equal((await h.fullCase(BOTH)).status, 202);
  assert.equal((await h.fullCase(BOTH)).body.error, "test_day_limit");
  const pub = await h.fullCase(PUBLIC);   // public count was 0 -> still queues
  assert.equal(pub.status, 202);
});
