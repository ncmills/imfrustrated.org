// GET /api/chat/case/[token] logic (spec §1.7-1.10, M2, F2). Held-letter suppression:
// a letter, cover, sources or follow-up answers are returned ONLY for a `pass` case
// that is not held, or whose CURRENT letter_version has review = ok (the case guard
// clears review on every version bump, so a stale ok can never unlock a new version).
import { hashToken, type ApiOut } from "./case-api";
import { CRISIS_CARD } from "./crisis";
import type { CaseRow, ChatStore } from "./store";

const OFFLINE_MS = 20 * 60 * 1000;
// Extra deterministic check on top of the audit: no case citations are ever displayed.
const CASE_CITE = /\b[A-Z][\w.'&-]*(?: [A-Z][\w.'&-]*)* v\. [A-Z]/;

const STATUS_LINE: Record<string, string> = {
  held: "We need a person to look at this; check back within 2 days.",
  flag: "We couldn't check every citation on this one. A person will look at it.",
  research_failed: "We couldn't check every citation on this one. A person will look at it.",
  failed: "We couldn't check every citation on this one. A person will look at it.",
  urgent: "A deadline this close needs local help now: find free legal aid at LawHelp.org, or call your state bar's lawyer-referral service.",
  lawyer: "Since you already have a lawyer or a court case, talk to your lawyer or the court clerk about this.",
  out: "This is outside what we can help with. LawHelp.org lists free legal aid in every state.",
  closed: "This case is closed. LawHelp.org lists free legal aid in every state.",
};

export function letterVisible(c: CaseRow): boolean {
  if (c.status !== "pass" || !c.letter) return false;
  if (c.held_for_nick && c.review !== "ok") return false;
  return !CASE_CITE.test(`${c.letter}\n${c.cover ?? ""}`);
}

export async function handleCasePoll(token: string, store: ChatStore, now = Date.now()): Promise<ApiOut> {
  if (typeof token !== "string" || token.length < 20 || token.length > 64) return { status: 400, body: { error: "bad_token" } };
  const c = await store.getCaseByTokenHash(hashToken(token));
  if (!c) return { status: 404, body: { error: "not_found" } };
  const base = { ok: true, status: c.status, letter_version: c.letter_version };

  if (c.status === "crisis") return { status: 200, body: { ...base, card: CRISIS_CARD } };
  if (c.status === "intake") return { status: 200, body: base };
  if (c.status === "queued") {
    const j = await store.latestJob(c.id);
    const offline = !!j && j.status === "queued" && now - Date.parse(j.created_at) > OFFLINE_MS;
    const progress = !j || j.status === "queued" ? "Checking your situation" : "Researching your state's law and drafting";
    return {
      status: 200,
      body: {
        ...base,
        progress,
        ...(offline ? { line: "Our letter writer is offline right now. Your case is saved and will run when it's back. Save this private link." } : {}),
      },
    };
  }
  if (letterVisible(c)) {
    return {
      status: 200,
      body: { ...base, letter: c.letter, cover: c.cover, sources: c.sources, followups: c.followups },
    };
  }
  // Held, unreviewed, flagged, failed or a stop card: status + fixed line only, never the draft.
  const line = c.status === "pass" ? STATUS_LINE.held : STATUS_LINE[c.status] ?? STATUS_LINE.held;
  return { status: 200, body: { ...base, status: c.status === "pass" ? "held" : c.status, line } };
}
