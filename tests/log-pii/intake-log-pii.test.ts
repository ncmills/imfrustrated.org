// Log hygiene for /api/intake. Run: npm run test:log-pii (tsc + node --test, no tsx).
// With the intake table as the record, no console call carries the email, IP or message.
// With no store (supabase null) the log line is the only record, so that path keeps the full line.
import test, { afterEach, beforeEach } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";

// Compiled by tsc (no path-alias rewrite): resolve "@/x" to the compiled src/x beside this test.
const ROOT = path.resolve(__dirname, "../..");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const Module = require("module");
const origResolve = Module._resolveFilename;
Module._resolveFilename = function (req: string, ...rest: unknown[]) {
  return origResolve.call(this, req.startsWith("@/") ? path.join(ROOT, "src", req.slice(2)) : req, ...rest);
};

const IP = "198.51.100.77";
const EMAIL = "sentinel_intake_q9@realdomain.com";
const MSG = "SENTINEL_MESSAGE_BODY";
const METHODS = ["log", "info", "warn", "error", "debug"] as const;
const calls: unknown[][] = [];
const originals: Record<string, (...a: unknown[]) => void> = {};

beforeEach(() => {
  calls.length = 0;
  for (const m of METHODS) {
    originals[m] = console[m];
    console[m] = (...a: unknown[]) => void calls.push([m, ...a]);
  }
});
afterEach(() => {
  for (const m of METHODS) console[m] = originals[m];
});
const logged = () => JSON.stringify(calls).toLowerCase();

function stub(id: string, exports: unknown) {
  const filename = require.resolve(id);
  require.cache[filename] = { id: filename, filename, loaded: true, exports, children: [], paths: [] } as unknown as NodeJS.Module;
}
function load(supabase: unknown): typeof import("../../src/app/api/intake/route") {
  stub("next/headers", { headers: async () => new Headers({ "x-forwarded-for": IP }) });
  stub("@/lib/supabase", { supabase });
  stub("resend", { Resend: class {} });
  delete require.cache[require.resolve("../../src/app/api/intake/route")]; // fresh in-memory rate limiter
  return require("../../src/app/api/intake/route");
}
const post = (body: unknown) =>
  new Request("https://imfrustrated.org/api/intake", { method: "POST", body: JSON.stringify(body) });
const fakeSupabase = { from: () => ({ insert: async () => ({ error: null }) }) };
const good = { email: EMAIL, state: "ca", issueType: "housing", message: MSG };

test("store available: no console call carries email, IP or message; [intake] line remains", async () => {
  const { POST } = load(fakeSupabase);
  assert.equal((await POST(post(good))).status, 200);
  const all = logged();
  for (const s of [EMAIL, IP, MSG]) assert.ok(!all.includes(s.toLowerCase()), `leaked ${s}`);
  const line = calls.find((c) => c[1] === "[intake]");
  assert.ok(line);
  assert.deepEqual(JSON.parse(line[2] as string), { state: "CA", issueType: "housing", hasMessage: true });
});

test("honeypot and reserved-email drops: prefixed line remains, no IP or email", async () => {
  const { POST } = load(fakeSupabase);
  await POST(post({ ...good, website: "http://spam.example" }));
  await POST(post({ ...good, email: "SENTINEL_x@example.com" }));
  const all = logged();
  assert.ok(!all.includes(IP) && !all.includes("sentinel_x@example.com"));
  assert.ok(calls.some((c) => String(c[1]).startsWith("[intake] honeypot triggered")));
  assert.ok(calls.some((c) => String(c[1]).startsWith("[intake] reserved/disposable email")));
});

test("store unavailable (supabase null): log is the only record, keeps email + IP, never the message", async () => {
  const { POST } = load(null);
  assert.equal((await POST(post(good))).status, 200);
  const line = calls.find((c) => c[1] === "[intake]");
  assert.ok(line);
  assert.deepEqual(JSON.parse(line[2] as string), { email: EMAIL, state: "CA", issueType: "housing", hasMessage: true, ip: IP });
  assert.ok(!logged().includes(MSG.toLowerCase()));
});
