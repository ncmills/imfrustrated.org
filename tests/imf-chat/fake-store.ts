import type { CaseRow, ChatStore, FollowupReviewIn, JobInfo, ReviewIn } from "../../src/lib/imf-chat/store";

export interface Fake extends ChatStore {
  cases: Map<string, CaseRow & { token_hash: string; cost_usd?: number }>;
  /** Mirrors imf_write_followup (U7 F1): answers the first open slot, held iff the case is held_for_nick. */
  writeFollowup(caseId: string, answer: string): number;
  jobs: Array<{ case_id: string; kind: string; is_test: boolean; status: string; created_at: string }>;
  rl: Map<string, number>;
  reviews: ReviewIn[];
  /** Mirrors imf_chat_worker_state; dayPaused() returns it (the fake has no UTC-day staleness). */
  paused: { reason: "day_cap" | null };
}

/** In-memory ChatStore mirroring imf_rl_hit (count then compare, returns count <= limit). */
export function fakeStore(clock: () => number = () => Date.now()): Fake {
  const cases: Fake["cases"] = new Map();
  const jobs: Fake["jobs"] = [];
  const rl = new Map<string, number>();
  const reviews: ReviewIn[] = [];
  let n = 0;
  const paused: Fake["paused"] = { reason: null };
  return {
    cases, jobs, rl, reviews, paused,
    async dayPaused() {
      return paused.reason;
    },
    /** Mirrors imf_chat_review: current version only, one per version, rerun -> job, close -> closed. */
    async review(x) {
      const c = cases.get(x.case_id);
      if (!c) throw new Error("no such case");
      if (c.letter_version !== x.letter_version) throw new Error("review must target the current letter_version");
      if (x.review === "rerun" && 2.0 - (c.cost_usd ?? 0) < 0.75) throw new Error("rerun does not fit the $2.00 case cap");
      if (reviews.some((r) => r.case_id === x.case_id && r.letter_version === x.letter_version)) throw new Error("duplicate");
      reviews.push({ ...x });
      c.review = x.review;
      if (x.review === "rerun") jobs.push({ case_id: c.id, kind: "rerun", is_test: c.is_test, status: "queued", created_at: new Date(clock()).toISOString() });
      if (x.review === "close") c.status = "closed";
    },
    /** Mirrors imf_chat_review_followup: answered + held + unreviewed slot only; ok | close. */
    async reviewFollowup(x: FollowupReviewIn) {
      if (x.review !== "ok" && x.review !== "close") throw new Error("followup verdict must be ok or close");
      const f = cases.get(x.case_id)?.followups[x.idx];
      if (!f) throw new Error("no such follow-up");
      if (f.a == null) throw new Error("not answered yet");
      if (f.held === false) throw new Error("not held");
      if (f.review) throw new Error("already reviewed");
      f.review = x.review;
    },
    writeFollowup(caseId, answer) {
      const c = cases.get(caseId)!;
      const i = c.followups.findIndex((f) => f.a == null);
      if (i < 0) throw new Error("case has no unanswered follow-up");
      const { review: _r, ...rest } = c.followups[i];
      c.followups[i] = { ...rest, a: answer, status: "ok", held: c.held_for_nick };
      return i;
    },
    async rlHit(key, scope, win, limit) {
      if (!/^[0-9a-f]{64}$/.test(key)) throw new Error("rl key must be 64-hex");
      const w = Math.floor(clock() / 1000 / win);
      const k = `${key}|${scope}|${win}|${w}`;
      const c = (rl.get(k) ?? 0) + 1;
      rl.set(k, c);
      return c <= limit;
    },
    async insertCase(row) {
      const id = `case-${++n}`;
      const created_at = new Date(clock()).toISOString();
      cases.set(id, {
        id, created_at, is_test: false, review_fixture: false, disclaimer_v: null, state: null,
        category: null, counterparty: null, amount_usd: null, key_dates: null, turns: [], status: "intake",
        stop_reason: null, verdict: null, letter: null, cover: null, sources: null, followups: [],
        held_for_nick: false, letter_version: 1, review: null, ...row,
      } as CaseRow & { token_hash: string });
      return { id, created_at };
    },
    async getCaseByTokenHash(h) {
      for (const c of cases.values()) if (c.token_hash === h) return structuredClone(c);
      return null;
    },
    async updateCase(id, patch) {
      Object.assign(cases.get(id)!, patch);
    },
    async insertJob(job) {
      // Mirrors imf_chat_jobs_one_active_letter (F7).
      if (job.kind === "letter" && jobs.some((j) => j.case_id === job.case_id && j.kind === "letter" && (j.status === "queued" || j.status === "claimed"))) return false;
      jobs.push({ ...job, status: "queued", created_at: new Date(clock()).toISOString() });
      return true;
    },
    async latestJob(caseId): Promise<JobInfo | null> {
      const j = jobs.filter((x) => x.case_id === caseId).at(-1);
      return j ? { status: j.status, created_at: j.created_at, kind: j.kind } : null;
    },
  };
}
