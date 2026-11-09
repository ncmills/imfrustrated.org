import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// U8 draft D (approved CONTROL 2026-11-08): the "The letter chat" section on /privacy, verbatim.
const SRC = readFileSync(join(process.cwd(), "src/app/privacy/page.tsx"), "utf8").replace(/\\"/g, '"');

const APPROVED: Array<[string, string]> = [
  ["What we store.", "What you type into the letter chat is saved so we can draft your letter, after we automatically remove anything that looks like a Social Security number, card or account number, phone number, email address or date of birth. It is tied to a private link that only you hold. We don't ask for your name or address, and the letter leaves blanks for them."],
  ["Who processes it.", "Your answers are sent from our own server to Anthropic, the AI provider we use, to look up the law that applies and draft your letter. Anthropic processes them only to do that. We also look up laws on official public websites."],
  ["How long we keep it.", "Your case, including your letter, is deleted 30 days after you started it, or 7 days after you started if you never finish the questions. This happens whether or not a person has checked it. Save or print your letter before then."],
  ["Your IP address.", "To stop abuse, we keep a scrambled (hashed) form of your IP address for 31 days to count how often the chat is used from one connection. We do not keep the address itself."],
  ["During our early test.", "While the letter chat is in its early test, a person at I'm Frustrated reads your case before you see the letter. That person is not your lawyer and does not change your letter: they either release it or decide we can't help with this one."],
  ["If you ask for an email (when offered).", "If you choose \"email me when it's ready,\" we keep that one address with your case, use it to send you one email with your private link, and delete it when your case is deleted. It is never added to a list or used for anything else."],
];

test("U8-D: every approved lead + paragraph is present verbatim, in order", () => {
  let at = SRC.indexOf('title: "The letter chat"');
  assert.ok(at > 0, "section heading missing");
  for (const [lead, text] of APPROVED) {
    const needle = `{ lead: "${lead}", text: "${text}" }`;
    const i = SRC.indexOf(needle, at);
    assert.ok(i > at, `missing or out of order: ${lead}`);
    at = i;
  }
});

test("U8-D: every approved sentence appears (sentence-level check)", () => {
  for (const [, text] of APPROVED) {
    for (const sentence of text.split(/(?<=\.)\s+/)) assert.ok(SRC.includes(sentence), `missing: ${sentence}`);
  }
});

test("U8-D: the section sits right after \"What we collect\" and before \"Where it goes\"", () => {
  const a = SRC.indexOf('title: "What we collect"');
  const b = SRC.indexOf('title: "The letter chat"');
  const c = SRC.indexOf('title: "Where it goes"');
  assert.ok(a > 0 && a < b && b < c);
  assert.ok(SRC.includes("<strong") && SRC.includes("{p.lead}"), "lead is rendered in bold");
});
