import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import * as C from "../../src/app/letter-chat/copy";

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

// U8 draft A (approved CONTROL 2026-11-08, beta-hold line struck), character-for-character.
test("U8-A: the ack is the approved text, in order, with the link between prompt and note", () => {
  const ack = `${C.ackLine("Ohio")}\n\n${C.ACK_LINK_PROMPT} [link]\n${C.ACK_LINK_NOTE}`;
  assert.equal(
    ack,
    "Got it. We're looking up the law for Ohio and drafting your letter. This usually takes 10-20 minutes.\n\n" +
      "Keep this page open, or save this private link to come back later: [link]\n" +
      "Anyone with the link can see your case, so keep it to yourself.",
  );
  const ui = readFileSync(join(DIR, "LetterChat.tsx"), "utf8");
  assert.match(ui, /\{C\.ackLine\(stateLabel\)\}[\s\S]*\{C\.ACK_LINK_PROMPT\}[\s\S]*\{linkBox\}[\s\S]*\{C\.ACK_LINK_NOTE\}/);
});

test("U8-A: the struck beta-hold line is gone from copy.ts and LetterChat.tsx", () => {
  for (const f of ["copy.ts", "LetterChat.tsx"]) {
    const src = readFileSync(join(DIR, f), "utf8");
    assert.doesNotMatch(src, /BETA_HOLD/, f);
    assert.doesNotMatch(src, /checks every letter before you see it/, f);
    assert.doesNotMatch(src, /up to 2 days/, f);
  }
});
