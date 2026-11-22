import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { IMF_DAY_CAP_USD } from "../../src/lib/imf-chat/limits";

// CONTROL REVIEWS-1121-2030 (2)b: one source of truth for the daily USD cap.
const DIR = join(process.cwd(), "supabase/migrations");
const DEF = /create or replace function public\.imf_claim_job_capped\(([^)]*)\)/i;

function latestDefault(): { file: string; cap: number } {
  const files = readdirSync(DIR).filter((f) => f.endsWith(".sql")).sort();
  let hit: { file: string; cap: number } | null = null;
  for (const f of files) {
    const m = readFileSync(join(DIR, f), "utf8").match(DEF);
    if (!m) continue;
    const d = m[1].match(/p_day_cap\s+numeric\s+default\s+([0-9.]+)/i);
    assert.ok(d, `${f}: p_day_cap has no default`);
    hit = { file: f, cap: Number(d[1]) };
  }
  assert.ok(hit, "no migration defines imf_claim_job_capped");
  return hit;
}

test("daily cap: latest SQL default == IMF_DAY_CAP_USD == 10.00", () => {
  const { file, cap } = latestDefault();
  assert.equal(IMF_DAY_CAP_USD, 10.0);
  assert.equal(cap, IMF_DAY_CAP_USD, `${file} default ${cap}`);
});

test("daily cap: the fix is a NEW migration; the applied 20261101130000 file is untouched (20.00)", () => {
  const old = readFileSync(join(DIR, "20261101130000_imf_chat_worker.sql"), "utf8").match(DEF)!;
  assert.match(old[1], /default 20\.00/);
  assert.notEqual(latestDefault().file, "20261101130000_imf_chat_worker.sql");
});
