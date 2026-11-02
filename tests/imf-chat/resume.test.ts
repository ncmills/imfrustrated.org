import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { hashToken, nextStepFor } from "../../src/lib/imf-chat/case-api";
import { handleCasePoll } from "../../src/lib/imf-chat/poll-api";
import type { CaseRow } from "../../src/lib/imf-chat/store";
import { fakeStore } from "./fake-store";

// U6 gaps 2-4: a case resumed from its private link picks up at the first unanswered step,
// shows one welcome-back line, and the gate shows the disclaimer once.
const TOKEN = "r".repeat(43);
const at = "2026-11-02T12:00:00.000Z";
const T = (step: string, text?: string) => ({ step, at, ...(text ? { text } : {}) });

async function intake(patch: Partial<CaseRow>) {
  const s = fakeStore();
  const { id } = await s.insertCase({ token_hash: hashToken(TOKEN) });
  await s.updateCase(id, { status: "intake", ...patch });
  return s;
}

test("resume: poll on an intake case reports the first unanswered step", async () => {
  const cases: [Partial<CaseRow>, string][] = [
    [{}, "state"],
    [{ state: "OH" }, "safety"],
    [{ state: "OH", turns: [T("safety")] }, "category"],
    [{ state: "OH", category: "deposit", turns: [T("safety")] }, "counterparty"],
    [{ state: "OH", category: "deposit", turns: [T("safety"), T("counterparty", "Acme"), T("story", "x")] }, "amount"],
    // a skipped-over step is found even when a later one was answered
    [{ state: "OH", category: "deposit", turns: [T("safety"), T("counterparty", "Acme"), T("amount", "500")] }, "story"],
    [{ state: "OH", category: "deposit",
       turns: [T("safety"), ...["counterparty", "story", "amount", "dates", "want", "tried"].map((s) => T(s, "x"))] }, "submit"],
  ];
  for (const [patch, want] of cases) {
    const r = await handleCasePoll(TOKEN, await intake(patch));
    assert.equal((r.body.next as { step: string }).step, want, JSON.stringify(patch));
  }
});

test("resume positive control: nextStepFor agrees with the poll and a non-intake poll has no next", async () => {
  assert.equal(nextStepFor({ state: null, category: null, turns: [] } as never).step, "state");
  const s = await intake({ state: "OH" });
  const r = await handleCasePoll(TOKEN, s);
  assert.equal((r.body.next as { step: string }).step, "safety");
  const q = await intake({ status: "queued", state: "OH" });
  assert.equal("next" in (await handleCasePoll(TOKEN, q)).body, false);
});

const UI = readFileSync(join(process.cwd(), "src/app/letter-chat/LetterChat.tsx"), "utf8");
const COPY = readFileSync(join(process.cwd(), "src/app/letter-chat/copy.ts"), "utf8");

test("resume: the UI uses the server's next step and shows the welcome-back line once", () => {
  assert.match(COPY, /export const WELCOME_BACK = "Welcome back\. Picking up where you left off\.";/);
  assert.match(UI, /if \(!resumed\.current && p\.next\) \{\s*resumed\.current = true;\s*setLog\(\[\{ who: "bot", text: C\.WELCOME_BACK \}/);
  assert.doesNotMatch(UI, /restart at state/);
});

test("gate shows one disclaimer paragraph (the §1.1 text), not the near-duplicate", () => {
  assert.match(UI, /\{C\.DISCLAIMER\}/);
  assert.doesNotMatch(UI, /\{C\.ACK_SAFETY\}/);
});
