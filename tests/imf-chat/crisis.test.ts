import { test } from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { crisisTier, normaliseCrisisText } from "../../src/lib/imf-chat/crisis";

// Tests run from the compiled outDir, so locate the repo copy by walking from cwd.
const SITE_COPY = join(process.cwd(), "src/lib/crisis-terms.json");
const SN_CANDIDATES = [
  process.env.IMF_CRISIS_TERMS_SN,
  join(homedir(), "second-nick/ops/imf_crisis_terms.json"),
  join(homedir(), "work/.worktrees/sn-ifdo-chatbox/ops/imf_crisis_terms.json"),
].filter((p): p is string => !!p);

const sha = (b: Buffer) => createHash("sha256").update(b).digest("hex");

test("parity: site copy is byte-identical to the SN source (F5)", (t) => {
  const sn = SN_CANDIDATES.find((p) => existsSync(p));
  if (!sn) return t.skip("SN crisis-terms source not on this machine");
  assert.equal(sha(readFileSync(SITE_COPY)), sha(readFileSync(sn)));
});

test("parity positive control: a one-character edit changes the hash", () => {
  const b = readFileSync(SITE_COPY);
  const edited = Buffer.from(b.toString("utf8").replace("overdose", "overdosf"), "utf8");
  assert.notEqual(sha(edited), sha(b));
});

test("normalise collapses case, hyphens, underscores, space runs", () => {
  assert.equal(normaliseCrisisText("Self-Harm  __ now"), "self harm now");
});

test("tier A: first-person self-harm stops (e, e2, i)", () => {
  for (const s of [
    "I want to kill myself",
    "I want to KILL  myself",
    "self-harm",
    "self_harm",
    "thinking about suicide",
    "Suicidal",
    "I'll kill myself if I lose this apartment",
  ]) assert.equal(crisisTier(s), "A", s);
});

test("word boundary: no false hits", () => {
  for (const s of ["skill myself up", "my landlord kept the deposit", "endmylife.com promo", ""])
    assert.equal(crisisTier(s), null, s);
});

test("tier B: context terms show resources but never stop", () => {
  assert.equal(crisisTier("I'm in danger of eviction"), "B");
  assert.equal(crisisTier("overdose charge on my pharmacy bill"), "B");
});

test("tier A wins over tier B in the same text", () => {
  assert.equal(crisisTier("I'm in danger and want to die"), "A");
});
