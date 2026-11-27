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
  const ack = `${C.ackLine("Ohio")}\n${C.WAIT_TIME_LINE}\n\n${C.ACK_LINK_PROMPT} [link]\n${C.ACK_LINK_NOTE}`;
  assert.equal(
    ack,
    "Got it. We're looking up the law for Ohio and drafting your letter.\nWriting a letter takes up to about 20 minutes once it starts. If others are ahead of yours, it can take longer.\n\n" +
      "Your private link keeps working for 30 days. Bookmark it or copy it here: [link]\n" +
      "Anyone with the link can see your case, so keep it to yourself.",
  );
  const ui = readFileSync(join(DIR, "LetterChat.tsx"), "utf8");
  assert.match(ui, /\{C\.ackLine\(stateLabel\)\}[\s\S]*\{C\.WAIT_TIME_LINE\}[\s\S]*\{C\.ACK_LINK_PROMPT\}[\s\S]*\{linkBox\}[\s\S]*\{C\.ACK_LINK_NOTE\}/);
});

test("U8-A: the struck beta-hold line is gone from copy.ts and LetterChat.tsx", () => {
  for (const f of ["copy.ts", "LetterChat.tsx"]) {
    const src = readFileSync(join(DIR, f), "utf8");
    assert.doesNotMatch(src, /BETA_HOLD/, f);
    assert.doesNotMatch(src, /checks every letter before you see it/, f);
    assert.doesNotMatch(src, /up to 2 days/, f);
  }
});

// U8 draft C field (approved CONTROL 2026-11-08). Constants only; the field is rendered in U9.
test("U8-C: the email opt-in label + help text are the approved text", () => {
  assert.equal(
    `${C.NOTIFY_OPT_IN_LABEL} ${C.NOTIFY_OPT_IN_HELP}`,
    "Email me when it's ready (optional). We'll send one email with your private link, then delete your address when your case is deleted.",
  );
});

// CONTROL REVIEWS-1121-2030 (2)d: /letter-chat visibly says self-help, not legal advice, not a law firm.
test("(2)d: PAGE_NOTICE says self-help, not a law firm, not legal advice — and passes the banned-words check", () => {
  assert.match(C.PAGE_NOTICE, /self-help/i);
  assert.match(C.PAGE_NOTICE, /not a law firm/i);
  assert.match(C.PAGE_NOTICE, /not legal advice|nothing [^.]* is legal advice/i);
  assert.equal(banned(C.PAGE_NOTICE), null);
});

test("(2)d: page.tsx renders PAGE_NOTICE in <main> before the open/paused branch, so both states show it", () => {
  const page = readFileSync(join(DIR, "page.tsx"), "utf8");
  const main = page.indexOf("<main");
  const notice = page.indexOf("{PAGE_NOTICE}");
  const branch = page.indexOf("{enabled ?");
  assert.ok(main > 0 && main < notice && notice < branch, "PAGE_NOTICE must render inside <main>, above {enabled ? ...}");
  assert.equal(page.match(/\{PAGE_NOTICE\}/g)?.length, 1);
});

// IFDO-PASS-7B-2: the waiting block shows only while queued or being written.
import { showWaitingBlock } from "../../src/app/letter-chat/waiting";
test("waiting block: shown for queued/running and first moments; hidden on held, flag, failed, done, day-paused", () => {
  assert.equal(showWaitingBlock(null), true);
  assert.equal(showWaitingBlock({ status: "queued" }), true);
});
for (const st of ["held", "flag", "failed", "research_failed", "pass"]) {
  test(`waiting block hidden when status is ${st}`, () => {
    assert.equal(showWaitingBlock({ status: st }), false);
  });
}
test("waiting block hidden when day-paused", () => {
  assert.equal(showWaitingBlock({ status: "queued", paused: "day_cap" }), false);
});
test("waiting copy truths: once-it-starts wording, 30-day retention, no 'any time', no speed words; UI gates every element", () => {
  assert.match(C.WAIT_TIME_LINE, /up to about 20 minutes once it starts/);
  assert.match(C.WAIT_TIME_LINE, /others are ahead.*longer/);
  assert.match(C.ACK_LINK_PROMPT, /private link keeps working for 30 days/);
  assert.doesNotMatch(C.ACK_LINK_PROMPT, /any time/i);
  assert.match(C.WAIT_CLOSE_LINE, /don't need to keep this page open/);
  for (const t of [C.WAIT_TIME_LINE, C.ACK_LINK_PROMPT, C.WAIT_CLOSE_LINE, C.WAITING_IN_LINE_LINE, C.ackLine("Ohio")]) {
    assert.doesNotMatch(t, /!|few minutes|seconds|quick|fast|soon|shortly/i, t);
  }
  const ui = readFileSync(join(DIR, "LetterChat.tsx"), "utf8");
  for (const k of ["WAIT_TIME_LINE", "WAIT_CLOSE_LINE", "ACK_LINK_PROMPT", "ackLine"]) {
    assert.match(ui, new RegExp(`showWaitingBlock\\(poll\\)[^\\n]*C\\.${k}`), `${k} not gated`);
  }
  assert.doesNotMatch(ui, /OFFLINE_MS/, "no client-side age rule contradicting the server");
});
