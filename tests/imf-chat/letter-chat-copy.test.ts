import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

// N1: the /letter-chat tree must never carry these words. Run from the repo root.
const DIR = resolve(process.cwd(), "src/app/letter-chat");
const BANNED = /nonprofit|501\(c\)|not-for-profit|ask an attorney|talk to an? (attorney|lawyer)|volunteer/i;
const ALLOWED = [/no attorney reviews/gi, /not legal advice/gi];

function banned(text: string): RegExpMatchArray | null {
  let t = text;
  for (const a of ALLOWED) t = t.replace(a, "");
  return t.match(BANNED);
}

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

test("no banned words anywhere under src/app/letter-chat", () => {
  const files = walk(DIR);
  assert.ok(files.length >= 3, `expected files under ${DIR}`);
  for (const f of files) {
    const m = banned(readFileSync(f, "utf8"));
    assert.equal(m, null, `${f} contains banned phrase: ${m?.[0]}`);
  }
});

test("positive control: matcher catches planted bad strings, spares allowed ones", () => {
  for (const bad of ["We are a nonprofit.", "A 501(c)(3) group", "Talk to a lawyer today", "talk to an attorney", "Ask an attorney", "our volunteers"]) {
    assert.notEqual(banned(bad), null, `matcher missed: ${bad}`);
  }
  assert.equal(banned("No attorney reviews your letter; this is not legal advice."), null);
});

test("page.tsx is noindex and avoids the shared Header/SiteFooter", () => {
  const src = readFileSync(join(DIR, "page.tsx"), "utf8");
  assert.ok(src.includes("noindex"), "page.tsx must mention noindex");
  assert.match(src, /robots:\s*\{\s*index:\s*false,\s*follow:\s*false/);
  assert.doesNotMatch(src, /import[^;]*\bHeader\b/);
  assert.doesNotMatch(src, /SiteFooter/);
});
