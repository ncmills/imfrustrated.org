// U7 fix round: F1 (held follow-up answers, spec §2 M2) and F2 (rerun fit under the $2.00 cap).
import { test } from "node:test";
import assert from "node:assert/strict";
import { hashToken, type ApiIn, type Env } from "../../src/lib/imf-chat/case-api";
import { FOLLOWUP_CLOSED_LINE, handleCasePoll } from "../../src/lib/imf-chat/poll-api";
import { handleReviewPost } from "../../src/lib/imf-chat/review-api";
import { fakeStore } from "./fake-store";

const TOKEN = "t".repeat(43);
const ID = "00000000-0000-4000-8000-000000000002";
const ANSWER = "SENTINEL-ANSWER: send it by certified mail.";
const ENV: Env = { IMF_CHAT_REVIEW_SECRET: "rev-secret" };

async function setup(held = true) {
  const s = fakeStore();
  const { id } = await s.insertCase({ token_hash: hashToken(TOKEN) });
  const row = s.cases.get(id)!;
  s.cases.delete(id); row.id = ID; s.cases.set(ID, row);
  Object.assign(row, {
    status: "pass", letter: "Dear Landlord,\n\nReturn my deposit.", held_for_nick: held, review: held ? "ok" : null,
    followups: [{ q: "how do I send it", a: null }],
  });
  const post = (body: unknown, secret: string | null = "rev-secret") => {
    const req: ApiIn = { body, ip: "203.0.113.1", header: (n) => (n === "x-imf-review-secret" ? secret : null) };
    return handleReviewPost(req, s, ENV);
  };
  const poll = async () => (await handleCasePoll(TOKEN, s)).body;
  return { s, row, post, poll };
}

test("F1: an unreviewed answer on a held case never appears in the poll body", async () => {
  const t = await setup(true);
  t.s.writeFollowup(ID, ANSWER);
  assert.equal(t.row.followups[0].held, true);
  const body = await t.poll();
  assert.ok(!JSON.stringify(body).includes("SENTINEL-ANSWER"));
  const f = (body.followups as Array<{ a: unknown; line?: string }>)[0];
  assert.equal(f.a, null);
  assert.match(String(f.line), /person to look at this/);
});

test("F1 positive control: a case that is not held shows its answer directly", async () => {
  const t = await setup(false);
  t.row.held_for_nick = false;
  t.s.writeFollowup(ID, ANSWER);
  assert.ok(JSON.stringify(await t.poll()).includes("SENTINEL-ANSWER"));
});

test("F1: a stored answer with no held key fails closed", async () => {
  const t = await setup(true);
  t.row.followups = [{ q: "q", a: ANSWER }];
  assert.ok(!JSON.stringify(await t.poll()).includes("SENTINEL-ANSWER"));
});

test("F1: review ok releases the answer", async () => {
  const t = await setup(true);
  const idx = t.s.writeFollowup(ID, ANSWER);
  const r = await t.post({ case_id: ID, followup_idx: idx, review: "ok" });
  assert.equal(r.status, 200);
  const f = ((await t.poll()).followups as Array<{ a: unknown }>)[0];
  assert.equal(f.a, ANSWER);
  assert.equal((await t.post({ case_id: ID, followup_idx: idx, review: "close" })).status, 409, "one review per answer");
});

test("F1: review close never shows the answer, now or after", async () => {
  const t = await setup(true);
  const idx = t.s.writeFollowup(ID, ANSWER);
  assert.equal((await t.post({ case_id: ID, followup_idx: idx, review: "close" })).status, 200);
  const body = await t.poll();
  assert.ok(!JSON.stringify(body).includes("SENTINEL-ANSWER"));
  assert.equal((body.followups as Array<{ line?: string }>)[0].line, FOLLOWUP_CLOSED_LINE);
  assert.equal((await t.post({ case_id: ID, followup_idx: idx, review: "ok" })).status, 409, "close is final");
  assert.ok(!JSON.stringify(await t.poll()).includes("SENTINEL-ANSWER"));
});

test("F1: follow-up review rejects any text, bad verdicts, bad index, wrong secret", async () => {
  const t = await setup(true);
  t.s.writeFollowup(ID, ANSWER);
  const bad: Array<[unknown, number, string]> = [
    [{ case_id: ID, followup_idx: 0, review: "ok", answer: "my edit" }, 400, "unknown_field"],
    [{ case_id: ID, followup_idx: 0, review: "ok", note: "x" }, 400, "unknown_field"],
    [{ case_id: ID, followup_idx: 0, review: "ok", text: "x" }, 400, "unknown_field"],
    [{ case_id: ID, followup_idx: 0, review: "ok", letter_version: 1 }, 400, "unknown_field"],
    [{ case_id: ID, followup_idx: 0, review: "rerun" }, 400, "bad_review"],
    [{ case_id: ID, followup_idx: 0, review: "release it please" }, 400, "bad_review"],
    [{ case_id: ID, followup_idx: "0", review: "ok" }, 400, "bad_followup_idx"],
    [{ case_id: ID, followup_idx: 5, review: "ok" }, 400, "bad_followup_idx"],
    [{ case_id: ID, followup_idx: 3, review: "ok" }, 409, "review_rejected"],
  ];
  for (const [body, st, e] of bad) {
    const r = await t.post(body);
    assert.equal(r.status, st, JSON.stringify(body));
    assert.equal(r.body.error, e);
  }
  assert.equal((await t.post({ case_id: ID, followup_idx: 0, review: "ok" }, "rev-secreT")).status, 403);
  assert.equal(t.row.followups[0].review, undefined);
  assert.equal(t.row.followups[0].a, ANSWER, "answer text untouched");
});

test("F2: rerun refused when less than $0.75 of the $2.00 case cap is left; fits at exactly $0.75", async () => {
  const t = await setup(true);
  t.row.review = null;
  t.row.cost_usd = 1.3;
  const r = await t.post({ case_id: ID, letter_version: 1, review: "rerun", rerun_reason: "tone" });
  assert.equal(r.status, 409);
  assert.equal(r.body.error, "rerun_over_case_cap");
  assert.equal(t.s.jobs.length, 0);
  assert.equal(t.s.reviews.length, 0);
  t.row.cost_usd = 1.25;
  assert.equal((await t.post({ case_id: ID, letter_version: 1, review: "rerun", rerun_reason: "tone" })).status, 200);
  assert.deepEqual(t.s.jobs.map((j) => j.kind), ["rerun"]);
});
