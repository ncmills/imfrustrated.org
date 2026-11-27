// GET /api/chat/case/[token] logic (spec §1.7-1.10, M2, F2). Held-letter suppression:
// a letter, cover, sources or follow-up answers are returned ONLY for a `pass` case
// that is not held, or whose CURRENT letter_version has review = ok (the case guard
// clears review on every version bump, so a stale ok can never unlock a new version).
import { hashToken, nextStepFor, type ApiOut } from "./case-api";
import { CRISIS_CARD } from "./crisis";
import type { CaseRow, ChatStore, JobInfo } from "./store";
import { DAY_CAP_LINE, OFFLINE_LINE, WAITING_IN_LINE_LINE } from "../../app/letter-chat/copy";

// IFDO-PASS-7B-2: "offline" is keyed on worker liveness (imf_chat_worker_state, read by the service
// role). A liveness timestamp older than WORKER_STALE_MS means the writer is down. No timestamp
// (no row / column yet, or the read failed) is "unknown": the age of the visitor's own queued job
// decides, at OFFLINE_MS, so unknown is never "offline" sooner than that.
const WAITING_MS = 5 * 60 * 1000;
export const OFFLINE_MS = 30 * 60 * 1000;
export const WORKER_STALE_MS = 3 * 60 * 1000;

/** Pure: is the letter writer offline for a queued job of this age? `beatAt` null = unknown. */
export function workerOffline(beatAt: string | null, jobAgeMs: number, now: number): boolean {
  const beat = beatAt == null ? NaN : Date.parse(beatAt);
  if (Number.isNaN(beat)) return jobAgeMs > OFFLINE_MS;
  return now - beat > WORKER_STALE_MS;
}
// Extra deterministic check on top of the audit: no case citations are ever displayed.
const CASE_CITE = /\b[A-Z][\w.'&-]*(?: [A-Z][\w.'&-]*)* v\. [A-Z]/;

const STATUS_LINE: Record<string, string> = {
  held: "This is being checked before we show it. Check back within 2 days.",
  flag: "We couldn't check every citation in this letter against an official source, so it isn't ready to show. LawHelp.org lists free legal aid in every state.",
  research_failed: "We couldn't finish this letter and check its citations, so we aren't showing it. LawHelp.org lists free legal aid in every state.",
  failed: "We couldn't finish this letter and check its citations, so we aren't showing it. LawHelp.org lists free legal aid in every state.",
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

export const FOLLOWUP_CLOSED_LINE =
  "We can't answer this one here. LawHelp.org lists free legal aid in every state.";

/** F1 (spec §2 M2): an answer is shown only when it was never held, or a reviewer released it.
 *  A held, unreviewed answer shows the "being checked" line; a closed one never shows. A row
 *  with no `held` key fails closed (held). */
export function visibleFollowups(fs: CaseRow["followups"]) {
  return (fs ?? []).map((f) => {
    if (f.a == null) return { q: f.q, a: null };
    if (f.review === "close") return { q: f.q, a: null, line: FOLLOWUP_CLOSED_LINE };
    if (f.held === false || f.review === "ok") return { q: f.q, a: f.a };
    return { q: f.q, a: null, line: STATUS_LINE.held };
  });
}

export async function handleCasePoll(token: string, store: ChatStore, now = Date.now(), betaTest = false): Promise<ApiOut> {
  const { out, c } = await pollCore(token, store, now);
  if (!betaTest || out.status !== 200) return out;
  // IFDO-PASS-2 (4): a reviewer scoring a TEST case reads the draft without the database. Only for a
  // beta test request (valid beta token + test header, checked by the route) on a case stamped
  // is_test at creation, keyed by the case's own token; held cases included. Never for real cases.
  // The case read by the poll itself is reused: no second database call.
  if (!c || !c.is_test || !c.letter) return out;
  return { ...out, body: { ...out.body, test_letter: { letter: c.letter, cover: c.cover, sources: c.sources } } };
}

async function pollCore(token: string, store: ChatStore, now: number): Promise<{ out: ApiOut; c: CaseRow | null }> {
  if (typeof token !== "string" || token.length < 20 || token.length > 64) return { out: { status: 400, body: { error: "bad_token" } }, c: null };
  // ONE round trip: the case and its latest job. Only a queued case with a queued job costs a
  // second call (imf_day_paused, a different table; it changes the answer only there).
  const got = await store.getCaseWithLatestJob(hashToken(token));
  if (!got) return { out: { status: 404, body: { error: "not_found" } }, c: null };
  return { out: await pollBody(got.c, got.job, store, now), c: got.c };
}

async function pollBody(c: CaseRow, j: JobInfo | null, store: ChatStore, now: number): Promise<ApiOut> {
  const base = { ok: true, status: c.status, letter_version: c.letter_version };

  if (c.status === "crisis") return { status: 200, body: { ...base, card: CRISIS_CARD } };
  if (c.status === "intake") return { status: 200, body: { ...base, next: nextStepFor(c) } };
  if (c.status === "queued") {
    const queuedJob = !!j && j.status === "queued";
    const age = queuedJob ? now - Date.parse(j.created_at) : 0;
    const progress = !j || j.status === "queued" ? "Checking your situation" : "Researching your state's law and drafting";
    // U6 gap 1: the worker records a day-cap refusal; it outranks the offline line (same cause, truer copy).
    const dayCap = queuedJob && (await store.dayPaused()) === "day_cap";
    // At most one liveness read, only for a queued job that is not day-paused.
    const offline = queuedJob && !dayCap && workerOffline(await store.workerBeatAt(), age, now);
    const inLine = queuedJob && !dayCap && !offline && age > WAITING_MS;
    return {
      status: 200,
      body: {
        ...base,
        progress,
        ...(dayCap ? { paused: "day_cap", line: DAY_CAP_LINE } : offline ? { line: OFFLINE_LINE } : inLine ? { line: WAITING_IN_LINE_LINE } : {}),
      },
    };
  }
  if (letterVisible(c)) {
    return {
      status: 200,
      body: { ...base, letter: c.letter, cover: c.cover, sources: c.sources, followups: visibleFollowups(c.followups) },
    };
  }
  // Held, unreviewed, flagged, failed or a stop card: status + fixed line only, never the draft.
  const line = c.status === "pass" ? STATUS_LINE.held : STATUS_LINE[c.status] ?? STATUS_LINE.held;
  return { status: 200, body: { ...base, status: c.status === "pass" ? "held" : c.status, line } };
}

/** IFDO-DB-FAULT: how long one poll may wait on the database. Well under the function limit, so a
 *  hung store call becomes a clean answer instead of a platform timeout (empty reply). */
export const POLL_STORE_TIMEOUT_MS = 8000;

export const POLL_TRANSIENT_LINE = "Still working on it. This page keeps checking, and your private link stays good.";

/** A calm, cacheless body the client already keeps polling on. Never carries the token or case text. */
export function transientPollBody(): ApiOut {
  return { status: 200, body: { ok: true, transient: true, line: POLL_TRANSIENT_LINE } };
}

/** handleCasePoll that can never throw and never hangs: a store error or a call slower than
 *  `timeoutMs` returns the "still working" body (200). Unknown token (404), bad token (400) and a
 *  finished letter are untouched. `onError` receives the error CLASS only. */
export async function safeCasePoll(
  token: string, store: ChatStore, now: number, betaTest: boolean,
  opts: { timeoutMs?: number; onError?: (kind: string) => void } = {},
): Promise<ApiOut> {
  const ms = opts.timeoutMs ?? POLL_STORE_TIMEOUT_MS;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<"timeout">((resolve) => { timer = setTimeout(() => resolve("timeout"), ms); });
  try {
    const r = await Promise.race([handleCasePoll(token, store, now, betaTest), timeout]);
    if (r === "timeout") { opts.onError?.("timeout"); return transientPollBody(); }
    return r;
  } catch (e) {
    opts.onError?.(e instanceof Error ? e.name : "unknown");
    return transientPollBody();
  } finally {
    if (timer) clearTimeout(timer);
  }
}
