import test from "node:test";
import assert from "node:assert/strict";
import { pathToCount, countPageview } from "../page-counts";

test("counts published routes as their concrete path", () => {
  assert.equal(pathToCount("/"), "/");
  assert.equal(pathToCount("/letters/parking/chicago/expired-meter"), "/letters/parking/chicago/expired-meter");
  assert.equal(pathToCount("/letters/landlord/security-deposit"), "/letters/landlord/security-deposit");
  assert.equal(pathToCount("/Blog/Some-Post/"), "/blog/some-post");
  assert.equal(pathToCount("/letters/%6Candlord"), "/letters/landlord");
  assert.equal(pathToCount("/letters/x/../y"), "/letters/y");
});

test("drops encoded, odd and unknown paths", () => {
  for (const p of [
    "/letters/%E0%A4%A", "/letters/a%2520b", "/letters/a b", "/letters/a\tb", "/letters/a\u0000b",
    "/letters/a;b", "/letters/a%3Bb", "/letters/a%25", "/letters/a?x=1", "/letters/a#h",
    "/letters\\a", "/api/pc", "/nope", "/letters/a/b/c/d", "letters", "", "/%25252525252525",
    "/" + "a".repeat(600),
  ]) assert.equal(pathToCount(p), null, p);
  assert.equal(pathToCount(42), null);
});

test("countPageview calls the RPC once with path + UTC day", async () => {
  const calls: unknown[][] = [];
  const rpc = async (...a: unknown[]) => { calls.push(a); };
  const ok = await countPageview(JSON.stringify({ path: "/letters/landlord" }), rpc, new Date("2026-11-21T23:59:00Z"));
  assert.equal(ok, true);
  assert.deepEqual(calls, [["imfrustrated_increment_page_count", { p_path: "/letters/landlord", p_day: "2026-11-21" }]]);
});

test("countPageview counts nothing for dropped paths, bad bodies or no client", async () => {
  const calls: unknown[][] = [];
  const rpc = async (...a: unknown[]) => { calls.push(a); };
  for (const b of [JSON.stringify({ path: "/letters/a%3Bb" }), "not json", "null", "{}"]) {
    assert.equal(await countPageview(b, rpc), false);
  }
  assert.equal(await countPageview(JSON.stringify({ path: "/" }), null), false);
  assert.equal(calls.length, 0);
  assert.equal(await countPageview(JSON.stringify({ path: "/" }), async () => { throw new Error("x"); }), false);
});
