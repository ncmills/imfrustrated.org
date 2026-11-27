// /api/intake must fail loudly when the row is not saved. Run: npm run test:intake-loud (tsc + node --test).
// Insert error / exception / no store -> 503 ok:false + plain message, ONE console.error line
// starting with INTAKE_INSERT_FAILED (no email, no IP), and no notification email.
import test, { afterEach, beforeEach } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import fs from "node:fs";

const ROOT = path.resolve(__dirname, "../..");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const Module = require("module");
const origResolve = Module._resolveFilename;
Module._resolveFilename = function (req: string, ...rest: unknown[]) {
  return origResolve.call(this, req.startsWith("@/") ? path.join(ROOT, "src", req.slice(2)) : req, ...rest);
};

import {
  INTAKE_INSERT_FAILED_TAG,
  INTAKE_SAVE_FAILED_MESSAGE,
  readIntakeResponse,
} from "../../src/lib/intake-outcome";

const IP = "198.51.100.42";
const EMAIL = "sentinel_loud_k3@realdomain.com";
const MSG = "SENTINEL_LOUD_BODY";
const METHODS = ["log", "info", "warn", "error", "debug"] as const;
const calls: unknown[][] = [];
const originals: Record<string, (...a: unknown[]) => void> = {};
const sends: unknown[] = [];
const prevKey = process.env.RESEND_API_KEY;

beforeEach(() => {
  calls.length = 0;
  sends.length = 0;
  process.env.RESEND_API_KEY = "re_fake_for_tests"; // never reaches the network: Resend is stubbed
  for (const m of METHODS) {
    originals[m] = console[m];
    console[m] = (...a: unknown[]) => void calls.push([m, ...a]);
  }
});
afterEach(() => {
  for (const m of METHODS) console[m] = originals[m];
  if (prevKey === undefined) delete process.env.RESEND_API_KEY;
  else process.env.RESEND_API_KEY = prevKey;
});

function stub(id: string, exports: unknown) {
  const filename = require.resolve(id);
  require.cache[filename] = { id: filename, filename, loaded: true, exports, children: [], paths: [] } as unknown as NodeJS.Module;
}
class FakeResend {
  emails = {
    send: async (m: unknown) => {
      sends.push(m);
      return { data: { id: "fake" }, error: null };
    },
  };
}
function load(supabase: unknown): typeof import("../../src/app/api/intake/route") {
  stub("next/headers", { headers: async () => new Headers({ "x-forwarded-for": IP }) });
  stub("@/lib/supabase", { supabase });
  stub("resend", { Resend: FakeResend });
  delete require.cache[require.resolve("../../src/app/api/intake/route")];
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require("../../src/app/api/intake/route");
}
const post = (body: unknown) =>
  new Request("https://imfrustrated.org/api/intake", { method: "POST", body: JSON.stringify(body) });
const good = { email: EMAIL, state: "oh", issueType: "housing", message: MSG };
const inserts: unknown[] = [];
const storeWith = (insert: (row: unknown) => Promise<{ error: unknown }>) => ({
  from: (t: string) => {
    assert.equal(t, "imfrustrated_intake");
    return { insert };
  },
});

const tagLines = () => calls.filter((c) => typeof c[1] === "string" && (c[1] as string).startsWith(INTAKE_INSERT_FAILED_TAG));
const logged = () => JSON.stringify(calls).toLowerCase();

async function assertLoudFailure(res: Response, code: string) {
  assert.equal(res.status, 503);
  assert.deepEqual(await res.json(), { ok: false, error: INTAKE_SAVE_FAILED_MESSAGE });
  const tags = tagLines();
  assert.equal(tags.length, 1, "exactly one tag line");
  assert.equal(tags[0][0], "error", "tag line is console.error");
  assert.equal(tags[0].length, 2, "tag line is a single string");
  assert.ok((tags[0][1] as string).startsWith(`${INTAKE_INSERT_FAILED_TAG} code=${code} message=`), String(tags[0][1]));
  assert.equal(sends.length, 0, "no notification email");
  const all = logged();
  for (const s of [EMAIL, IP, MSG]) assert.ok(!all.includes(s.toLowerCase()), `leaked ${s}`);
}

test("tag is the fixed string fleet-truth counts", () => {
  assert.equal(INTAKE_INSERT_FAILED_TAG, "INTAKE_INSERT_FAILED");
});

test("insert error -> 503 ok:false, one tag line with code+message, no email", async () => {
  const { POST } = load(storeWith(async () => ({ error: { code: "42P01", message: "relation does not exist" } })));
  const res = await POST(post(good));
  await assertLoudFailure(res, "42P01");
  assert.ok((tagLines()[0][1] as string).includes("relation does not exist"));
});

test("insert error whose message echoes the email/IP is scrubbed", async () => {
  const { POST } = load(storeWith(async () => ({ error: { code: "23514", message: `bad row ${EMAIL} from ${IP}` } })));
  await assertLoudFailure(await POST(post(good)), "23514");
  assert.ok((tagLines()[0][1] as string).includes("bad row [email] from [ip]"));
});

test("insert exception -> same loud failure, code EXCEPTION", async () => {
  const { POST } = load(storeWith(async () => { throw new Error("fetch failed"); }));
  const res = await POST(post(good));
  await assertLoudFailure(res, "EXCEPTION");
  assert.ok((tagLines()[0][1] as string).includes("fetch failed"));
});

test("no store (supabase null) -> same loud failure, code NO_STORE", async () => {
  const { POST } = load(null);
  await assertLoudFailure(await POST(post(good)), "NO_STORE");
});

test("success unchanged: 200 {ok:true}, row inserted, one email, no tag line", async () => {
  inserts.length = 0;
  const { POST } = load(storeWith(async (row) => { inserts.push(row); return { error: null }; }));
  const res = await POST(post(good));
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), { ok: true });
  assert.equal(inserts.length, 1);
  assert.deepEqual(inserts[0], { email: EMAIL, state: "OH", issue_type: "housing", message: MSG, ip: IP, is_test: false });
  assert.equal(sends.length, 1);
  assert.equal(tagLines().length, 0);
});

test("honeypot / reserved email still answer ok:true test:true without touching the store", async () => {
  const { POST } = load(null); // no store: these paths must not fail, they never write
  const a = await POST(post({ ...good, website: "x" }));
  const b = await POST(post({ ...good, email: "a@example.com" }));
  assert.deepEqual([a.status, await a.json()], [200, { ok: true, test: true }]);
  assert.deepEqual([b.status, await b.json()], [200, { ok: true, test: true }]);
  assert.equal(tagLines().length, 0);
});

// --- the form side ---
test("form reads 503 ok:false as an error carrying the server's message, not success", () => {
  const o = readIntakeResponse(503, { ok: false, error: INTAKE_SAVE_FAILED_MESSAGE });
  assert.deepEqual(o, { kind: "error", message: INTAKE_SAVE_FAILED_MESSAGE, reason: "api" });
  // body unreadable (proxy page) on 503 -> still the plain save-failed message
  assert.deepEqual(readIntakeResponse(503, {}), { kind: "error", message: INTAKE_SAVE_FAILED_MESSAGE, reason: "api" });
  // a 2xx without ok:true is never success
  assert.equal(readIntakeResponse(200, { ok: false }).kind, "error");
  assert.deepEqual(readIntakeResponse(400, { error: "Valid email required" }), { kind: "error", message: "Valid email required", reason: "validation" });
});

test("form reads 200 ok:true as success (test flag passed through)", () => {
  assert.deepEqual(readIntakeResponse(200, { ok: true }), { kind: "success", test: false });
  assert.deepEqual(readIntakeResponse(200, { ok: true, test: true }), { kind: "success", test: true });
});

test("IntakeForm routes the outcome through readIntakeResponse and renders errorMsg in the error state", () => {
  const src = fs.readFileSync(path.join(process.cwd(), "src/components/IntakeForm.tsx"), "utf8") // npm runs from the repo root;
  assert.match(src, /readIntakeResponse\(res\.status, data\)/);
  assert.match(src, /throw new Error\(outcome\.message\)/);
  assert.match(src, /setErrorMsg\(err instanceof Error \? err\.message/);
  assert.match(src, /status === "error" && \(\s*<p[^>]*>\{errorMsg\}<\/p>/);
  // success state is only reached after the error branch has thrown
  assert.ok(src.indexOf("throw new Error(outcome.message)") < src.indexOf('setStatus("success")'));
});
