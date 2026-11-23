import test from "node:test";
import assert from "node:assert/strict";
import { POST } from "../route";

// No Supabase env in tests, so the client is null: the handler must still answer 204,
// set no cookie, and never throw. RPC-once behaviour is covered in src/lib/__tests__/page-counts.test.ts.
test("POST /api/pc returns 204 with no cookie for good and bad bodies", async () => {
  for (const body of [JSON.stringify({ path: "/letters/landlord" }), "not json", JSON.stringify({ path: "/a;b" })]) {
    const res = await POST(new Request("https://imfrustrated.org/api/pc", { method: "POST", body }));
    assert.equal(res.status, 204);
    assert.equal(res.headers.get("set-cookie"), null);
  }
});
