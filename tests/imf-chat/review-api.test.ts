import { test } from "node:test";
import assert from "node:assert/strict";
import { handleReviewPost } from "../../src/lib/imf-chat/review-api";
import type { ApiIn, Env } from "../../src/lib/imf-chat/case-api";
import { fakeStore } from "./fake-store";

const ENV: Env = { IMF_CHAT_REVIEW_SECRET: "rev-secret" };
const ID = "00000000-0000-4000-8000-000000000001";

async function setup(env: Env = ENV) {
  const store = fakeStore();
  const { id } = await store.insertCase({ token_hash: "a".repeat(64), status: "pass", letter: "LETTER", held_for_nick: true });
  const row = store.cases.get(id)!;
  store.cases.delete(id); row.id = ID; store.cases.set(ID, row);
  const post = (body: unknown, secret: string | null = "rev-secret") => {
    const req: ApiIn = { body, ip: "203.0.113.1", header: (n) => (n === "x-imf-review-secret" ? secret : null) };
    return handleReviewPost(req, store, env);
  };
  return { store, post, row };
}

test("ok releases nothing but the review; letter text untouched (N2)", async () => {
  const s = await setup();
  const r = await s.post({ case_id: ID, letter_version: 1, review: "ok" });
  assert.equal(r.status, 200);
  assert.equal(s.row.review, "ok");
  assert.equal(s.row.letter, "LETTER");
  assert.equal(s.store.jobs.length, 0);
});

test("rerun with an enum code queues one rerun job; note is stored only", async () => {
  const s = await setup();
  const r = await s.post({ case_id: ID, letter_version: 1, review: "rerun", rerun_reason: "missed_fact", note: "SENTINEL" });
  assert.equal(r.status, 200);
  assert.deepEqual(s.store.jobs.map((j) => j.kind), ["rerun"]);
  assert.equal(s.store.reviews[0].note, "SENTINEL");
});

test("close closes the case, no job", async () => {
  const s = await setup();
  assert.equal((await s.post({ case_id: ID, letter_version: 1, review: "close" })).status, 200);
  assert.equal(s.row.status, "closed");
  assert.equal(s.store.jobs.length, 0);
});

test("enum only: bad review, free-text reason, reason on ok, missing reason, letter/cover keys", async () => {
  const s = await setup();
  const bad: Array<[unknown, string]> = [
    [{ case_id: ID, letter_version: 1, review: "edit" }, "bad_review"],
    [{ case_id: ID, letter_version: 1, review: "rerun", rerun_reason: "please make it nicer" }, "bad_rerun_reason"],
    [{ case_id: ID, letter_version: 1, review: "rerun" }, "bad_rerun_reason"],
    [{ case_id: ID, letter_version: 1, review: "ok", rerun_reason: "tone" }, "bad_rerun_reason"],
    [{ case_id: ID, letter_version: 1, review: "ok", letter: "my edit" }, "unknown_field"],
    [{ case_id: ID, letter_version: 1, review: "ok", cover: "x" }, "unknown_field"],
    [{ case_id: "1; drop", letter_version: 1, review: "ok" }, "bad_case_id"],
    [{ case_id: ID, letter_version: 0, review: "ok" }, "bad_letter_version"],
    [{ case_id: ID, letter_version: 1, review: "ok", note: "n".repeat(501) }, "bad_note"],
  ];
  for (const [body, e] of bad) {
    const r = await s.post(body);
    assert.equal(r.status, 400, JSON.stringify(body));
    assert.equal(r.body.error, e);
  }
  assert.equal(s.store.reviews.length, 0);
  assert.equal(s.row.letter, "LETTER");
});

test("secret header: missing/wrong -> 403, unset env -> 503, nothing written", async () => {
  const s = await setup();
  const body = { case_id: ID, letter_version: 1, review: "ok" };
  assert.equal((await s.post(body, null)).status, 403);
  assert.equal((await s.post(body, "rev-secreT")).status, 403);
  assert.equal((await s.post(body, "beta-tok")).status, 403);
  const off = await setup({});
  assert.equal((await off.post(body)).status, 503);
  assert.equal(s.store.reviews.length + off.store.reviews.length, 0);
});

test("stale letter_version and a second review of the same version -> 409", async () => {
  const s = await setup();
  assert.equal((await s.post({ case_id: ID, letter_version: 2, review: "ok" })).status, 409);
  assert.equal((await s.post({ case_id: ID, letter_version: 1, review: "ok" })).status, 200);
  assert.equal((await s.post({ case_id: ID, letter_version: 1, review: "close" })).status, 409);
});

test("id-only logging: no note or reviewer text in logs", async () => {
  const s = await setup();
  const lines: string[] = [];
  const orig = console.log;
  console.log = (...a: unknown[]) => { lines.push(a.join(" ")); };
  try {
    await s.post({ case_id: ID, letter_version: 1, review: "rerun", rerun_reason: "tone", note: "SENTINEL-NOTE" });
  } finally { console.log = orig; }
  assert.ok(lines.length > 0);
  assert.ok(lines.every((l) => !l.includes("SENTINEL")));
});
