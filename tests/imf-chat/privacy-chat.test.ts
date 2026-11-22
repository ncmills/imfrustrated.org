import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { privacySections, type Section } from "../../src/app/privacy/sections";

// U8 draft D (approved CONTROL 2026-11-08): the "The letter chat" section on /privacy, verbatim.
// CONTROL REVIEWS-1121-2030 (2)e: the section appears ONLY when the chat is public
// (IMF_CHAT_ENABLED=1 AND IMF_CHAT_PUBLIC=1); otherwise /privacy is exactly main's text + numbering.
const MAIN = JSON.parse(readFileSync(join(process.cwd(), "tests/imf-chat/fixtures/privacy-main.json"), "utf8"))
  .sections as Section[];
const PAGE = readFileSync(join(process.cwd(), "src/app/privacy/page.tsx"), "utf8");
const PUBLIC = { IMF_CHAT_ENABLED: "1", IMF_CHAT_PUBLIC: "1" };
const plain = (s: unknown) => JSON.parse(JSON.stringify(s));

const APPROVED: Array<[string, string]> = [
  ["What we store.", "What you type into the letter chat is saved so we can draft your letter, after we automatically remove anything that looks like a Social Security number, card or account number, phone number, email address or date of birth. It is tied to a private link that only you hold. We don't ask for your name or address, and the letter leaves blanks for them."],
  ["Who processes it.", "Your answers are sent from our own server to Anthropic, the AI provider we use, to look up the law that applies and draft your letter. Anthropic processes them only to do that. We also look up laws on official public websites."],
  ["How long we keep it.", "Your case, including your letter, is deleted 30 days after you started it, or 7 days after you started if you never finish the questions. This happens whether or not a person has checked it. Save or print your letter before then."],
  ["Your IP address.", "To stop abuse, we keep a scrambled (hashed) form of your IP address for 31 days to count how often the chat is used from one connection. We do not keep the address itself."],
  ["During our early test.", "While the letter chat is in its early test, a person at I'm Frustrated reads your case before you see the letter. That person is not your lawyer and does not change your letter: they either release it or decide we can't help with this one."],
  ["If you ask for an email (when offered).", "If you choose \"email me when it's ready,\" we keep that one address with your case, use it to send you one email with your private link, and delete it when your case is deleted. It is never added to a list or used for anything else."],
];

test("flags unset: /privacy is exactly main's sections, text and numbering (no letter-chat section)", () => {
  assert.equal(MAIN.length, 6);
  assert.deepEqual(plain(privacySections({})), MAIN);
  assert.ok(!privacySections({}).some((s) => s.title === "The letter chat"));
});

test("not public unless BOTH flags are 1: enabled-only, public-only and junk values give main's page", () => {
  for (const env of [{ IMF_CHAT_ENABLED: "1" }, { IMF_CHAT_PUBLIC: "1" },
                     { IMF_CHAT_ENABLED: "1", IMF_CHAT_PUBLIC: "0" }, { IMF_CHAT_ENABLED: "true", IMF_CHAT_PUBLIC: "1" }]) {
    assert.deepEqual(plain(privacySections(env)), MAIN, JSON.stringify(env));
  }
});

test("public: section present right after \"What we collect\", before \"Where it goes\", renumbered I-VII", () => {
  const s = privacySections(PUBLIC);
  assert.deepEqual(s.map((x) => x.title), [MAIN[0].title, "The letter chat", ...MAIN.slice(1).map((x) => x.title)]);
  assert.deepEqual(s.map((x) => x.marker), ["§ I", "§ II", "§ III", "§ IV", "§ V", "§ VI", "§ VII"]);
  // the other sections keep main's text verbatim
  assert.deepEqual(plain(s.filter((x) => x.title !== "The letter chat").map((x) => x.paragraphs)), MAIN.map((x) => x.paragraphs));
});

test("public: every approved lead + paragraph is present verbatim, in order", () => {
  const chat = privacySections(PUBLIC).find((x) => x.title === "The letter chat")!;
  assert.deepEqual(chat.paragraphs, APPROVED.map(([lead, text]) => ({ lead, text })));
  for (const [, text] of APPROVED) {
    for (const sentence of text.split(/(?<=\.)\s+/)) {
      assert.ok(chat.paragraphs.some((p) => typeof p !== "string" && p.text.includes(sentence)), `missing: ${sentence}`);
    }
  }
});

test("page.tsx renders privacySections(process.env) with the lead in bold", () => {
  assert.match(PAGE, /privacySections\(process\.env\)/);
  assert.ok(PAGE.includes("<strong") && PAGE.includes("{p.lead}"), "lead is rendered in bold");
});
