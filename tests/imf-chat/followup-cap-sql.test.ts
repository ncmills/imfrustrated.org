import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { FOLLOWUPS_PER_CASE } from "../../src/lib/imf-chat/followup-api";

// CONTROL REVIEWS-1121-2030 (2)c: the SQL follow-up cap and the API cap are one number.
const DIR = join(process.cwd(), "supabase/migrations");
const CAP = /jsonb_array_length\(followups\)\s*<=\s*(\d+)/gi;

function latestCap(): { file: string; cap: number } {
  let hit: { file: string; cap: number } | null = null;
  for (const f of readdirSync(DIR).filter((f) => f.endsWith(".sql")).sort()) {
    for (const m of readFileSync(join(DIR, f), "utf8").matchAll(CAP)) hit = { file: f, cap: Number(m[1]) };
  }
  assert.ok(hit, "no migration caps imf_chat_cases.followups");
  return hit;
}

test("follow-up cap: latest SQL check == FOLLOWUPS_PER_CASE == 2", () => {
  const { file, cap } = latestCap();
  assert.equal(FOLLOWUPS_PER_CASE, 2);
  assert.equal(cap, FOLLOWUPS_PER_CASE, `${file} caps followups at ${cap}`);
});

test("follow-up cap: the fix is a NEW migration; the applied 20261101120000 file is untouched (<= 5)", () => {
  const old = readFileSync(join(DIR, "20261101120000_imf_chat.sql"), "utf8");
  assert.match(old, /jsonb_array_length\(followups\) <= 5/);
  const { file } = latestCap();
  assert.notEqual(file, "20261101120000_imf_chat.sql");
  assert.match(readFileSync(join(DIR, file), "utf8"), /drop constraint if exists imf_chat_cases_followups_check/i);
});
