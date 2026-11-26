// IFDO-DB-FAULT: the poll route must never 500 or hang on a database blip.
import { test } from "node:test";
import assert from "node:assert/strict";
import { hashToken } from "../../src/lib/imf-chat/case-api";
import { safeCasePoll, POLL_TRANSIENT_LINE } from "../../src/lib/imf-chat/poll-api";
import { fakeStore } from "./fake-store";

const TOKEN = "t".repeat(43);
const STILL = { ok: true, transient: true, line: POLL_TRANSIENT_LINE };

test("store throws -> 200 still-working, error class only", async () => {
  const s = fakeStore();
  s.getCaseByTokenHash = async () => { throw new Error("stmt_timeout for token " + TOKEN); };
  const seen: string[] = [];
  const r = await safeCasePoll(TOKEN, s, Date.now(), false, { onError: (k) => seen.push(k) });
  assert.equal(r.status, 200);
  assert.deepEqual(r.body, STILL);
  assert.deepEqual(seen, ["Error"]);
  assert.ok(!JSON.stringify([r, seen]).includes(TOKEN));
});

test("store hangs -> still-working within the bound", async () => {
  const s = fakeStore();
  s.getCaseByTokenHash = () => new Promise(() => {});
  const t0 = Date.now();
  const seen: string[] = [];
  const r = await safeCasePoll(TOKEN, s, Date.now(), false, { timeoutMs: 50, onError: (k) => seen.push(k) });
  assert.ok(Date.now() - t0 < 1000);
  assert.equal(r.status, 200);
  assert.deepEqual(r.body, STILL);
  assert.deepEqual(seen, ["timeout"]);
});

test("a later call (latestJob) failing is also contained", async () => {
  const s = fakeStore();
  const { id } = await s.insertCase({ token_hash: hashToken(TOKEN) });
  await s.updateCase(id, { status: "queued" });
  s.latestJob = async () => { throw new Error("conn_limit"); };
  assert.deepEqual((await safeCasePoll(TOKEN, s, Date.now(), false)).body, STILL);
});

test("unknown token still 404", async () => {
  const r = await safeCasePoll(TOKEN, fakeStore(), Date.now(), false);
  assert.deepEqual(r, { status: 404, body: { error: "not_found" } });
});

test("bad token still 400", async () => {
  const r = await safeCasePoll("short", fakeStore(), Date.now(), false);
  assert.equal(r.status, 400);
});

test("done case still returns the letter", async () => {
  const s = fakeStore();
  const { id } = await s.insertCase({ token_hash: hashToken(TOKEN) });
  await s.updateCase(id, { status: "pass", letter: "Dear Acme,\n\nReturn my deposit.", cover: "Mail it.", held_for_nick: false, followups: [] });
  const r = await safeCasePoll(TOKEN, s, Date.now(), false);
  assert.equal(r.status, 200);
  assert.equal(r.body.letter, "Dear Acme,\n\nReturn my deposit.");
});
