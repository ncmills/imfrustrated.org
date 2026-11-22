import { test } from "node:test";
import assert from "node:assert/strict";
import { hashToken } from "../../src/lib/imf-chat/case-api";
import { handleCasePoll } from "../../src/lib/imf-chat/poll-api";
import type { CaseRow } from "../../src/lib/imf-chat/store";
import { fakeStore } from "./fake-store";
import { DAY_CAP_LINE } from "../../src/app/letter-chat/copy";

const TOKEN = "t".repeat(43);
const LETTER = "Dear Acme Rentals LLC,\n\nUnder [S1] you must return my deposit.";

async function seed(patch: Partial<CaseRow>) {
  const s = fakeStore();
  const { id } = await s.insertCase({ token_hash: hashToken(TOKEN) });
  await s.updateCase(id, {
    status: "pass", letter: LETTER, cover: "Send it by certified mail.", sources: [{ n: 1, url: "https://example.gov" }],
    followups: [{ q: "how do I send it", a: null }], held_for_nick: true, review: null, ...patch,
  });
  return { s, id };
}
const leaks = (body: Record<string, unknown>) =>
  ["letter", "cover", "sources", "followups"].filter((k) => k in body).concat(JSON.stringify(body).includes("[S1]") ? ["text"] : []);

test("held + no review: status only, no letter/cover/sources (M2)", async () => {
  const { s } = await seed({});
  const r = await handleCasePoll(TOKEN, s);
  assert.equal(r.body.status, "held");
  assert.deepEqual(leaks(r.body), []);
});

test("held + review ok: letter returned byte-identical to the worker's write", async () => {
  const { s } = await seed({ review: "ok" });
  const r = await handleCasePoll(TOKEN, s);
  assert.equal(r.body.letter, LETTER);
  assert.deepEqual(r.body.followups, [{ q: "how do I send it", a: null }]);
});

test("review per letter version (F2): v2 with review cleared is suppressed again", async () => {
  const { s, id } = await seed({ review: "ok" });
  assert.equal((await handleCasePoll(TOKEN, s)).body.letter, LETTER);
  // the DB guard clears review on a version bump; mirror that write.
  await s.updateCase(id, { letter_version: 2, review: null, letter: LETTER + "\nRevised." });
  const r = await handleCasePoll(TOKEN, s);
  assert.equal(r.body.letter_version, 2);
  assert.deepEqual(leaks(r.body), []);
});

for (const status of ["flag", "research_failed", "held", "failed", "out", "urgent", "lawyer", "closed"]) {
  test(`status ${status}: never returns a draft, even with review ok and not held`, async () => {
    const { s } = await seed({ status, review: "ok", held_for_nick: false });
    const r = await handleCasePoll(TOKEN, s);
    assert.deepEqual(leaks(r.body), []);
    assert.equal(typeof r.body.line, "string");
  });
}

test("crisis: card only", async () => {
  const { s } = await seed({ status: "crisis" });
  const r = await handleCasePoll(TOKEN, s);
  assert.ok(r.body.card);
  assert.deepEqual(leaks(r.body), []);
});

test("no case citations shown: 'Smith v. Jones' blocks display; positive control clean letter passes", async () => {
  const bad = await seed({ review: "ok", letter: LETTER + "\nSee Smith v. Jones." });
  assert.deepEqual(leaks((await handleCasePoll(TOKEN, bad.s)).body), []);
  const good = await seed({ review: "ok", held_for_nick: false, review_fixture: false });
  assert.equal((await handleCasePoll(TOKEN, good.s)).body.letter, LETTER);
});

test("queued: progress line; offline line after 20 min queued; no strategy field", async () => {
  const t0 = Date.UTC(2026, 10, 1, 12);
  const s = fakeStore(() => t0);
  const { id } = await s.insertCase({ token_hash: hashToken(TOKEN) });
  await s.updateCase(id, { status: "queued" });
  await s.insertJob({ case_id: id, kind: "letter", is_test: false });
  const early = await handleCasePoll(TOKEN, s, t0 + 60_000);
  assert.equal(early.body.progress, "Checking your situation");
  assert.ok(!("line" in early.body));
  const late = await handleCasePoll(TOKEN, s, t0 + 21 * 60_000);
  assert.match(String(late.body.line), /offline/);
  assert.ok(!JSON.stringify(late.body).includes("strategy"));
});

test("bad and unknown tokens", async () => {
  const s = fakeStore();
  assert.equal((await handleCasePoll("short", s)).status, 400);
  assert.equal((await handleCasePoll("u".repeat(43), s)).status, 404);
});

test("U6 gap 1: queued + day pause -> paused: day_cap and DAY_CAP_LINE (outranks offline)", async () => {
  const t0 = Date.UTC(2026, 10, 1, 12);
  const s = fakeStore(() => t0);
  const { id } = await s.insertCase({ token_hash: hashToken(TOKEN) });
  await s.updateCase(id, { status: "queued" });
  await s.insertJob({ case_id: id, kind: "letter", is_test: false });
  s.paused.reason = "day_cap";
  for (const at of [t0 + 60_000, t0 + 21 * 60_000]) {
    const r = await handleCasePoll(TOKEN, s, at);
    assert.equal(r.body.paused, "day_cap");
    assert.equal(r.body.line, DAY_CAP_LINE);
  }
});

test("U6 gap 1: queued, not paused -> no paused field, no day-cap line", async () => {
  const t0 = Date.UTC(2026, 10, 1, 12);
  const s = fakeStore(() => t0);
  const { id } = await s.insertCase({ token_hash: hashToken(TOKEN) });
  await s.updateCase(id, { status: "queued" });
  await s.insertJob({ case_id: id, kind: "letter", is_test: false });
  const r = await handleCasePoll(TOKEN, s, t0 + 60_000);
  assert.ok(!("paused" in r.body));
  assert.ok(!("line" in r.body));
});

test("U6 gap 1: a non-queued status never shows the day-cap line, even when paused", async () => {
  for (const status of ["intake", "pass", "held", "crisis", "closed"]) {
    const { s } = await seed({ status, review: "ok", held_for_nick: false, review_fixture: false });
    s.paused.reason = "day_cap";
    const r = await handleCasePoll(TOKEN, s);
    assert.ok(!("paused" in r.body), status);
    assert.notEqual(r.body.line, DAY_CAP_LINE, status);
  }
});
