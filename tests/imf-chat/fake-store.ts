import type { CaseRow, ChatStore, JobInfo, ReviewIn } from "../../src/lib/imf-chat/store";

export interface Fake extends ChatStore {
  cases: Map<string, CaseRow & { token_hash: string }>;
  jobs: Array<{ case_id: string; kind: string; is_test: boolean; status: string; created_at: string }>;
  rl: Map<string, number>;
  reviews: ReviewIn[];
}

/** In-memory ChatStore mirroring imf_rl_hit (count then compare, returns count <= limit). */
export function fakeStore(clock: () => number = () => Date.now()): Fake {
  const cases = new Map<string, CaseRow & { token_hash: string }>();
  const jobs: Fake["jobs"] = [];
  const rl = new Map<string, number>();
  const reviews: ReviewIn[] = [];
  let n = 0;
  return {
    cases, jobs, rl, reviews,
    /** Mirrors imf_chat_review: current version only, one per version, rerun -> job, close -> closed. */
    async review(x) {
      const c = cases.get(x.case_id);
      if (!c) throw new Error("no such case");
      if (c.letter_version !== x.letter_version) throw new Error("review must target the current letter_version");
      if (reviews.some((r) => r.case_id === x.case_id && r.letter_version === x.letter_version)) throw new Error("duplicate");
      reviews.push({ ...x });
      c.review = x.review;
      if (x.review === "rerun") jobs.push({ case_id: c.id, kind: "rerun", is_test: c.is_test, status: "queued", created_at: new Date(clock()).toISOString() });
      if (x.review === "close") c.status = "closed";
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
      jobs.push({ ...job, status: "queued", created_at: new Date(clock()).toISOString() });
    },
    async latestJob(caseId): Promise<JobInfo | null> {
      const j = jobs.filter((x) => x.case_id === caseId).at(-1);
      return j ? { status: j.status, created_at: j.created_at, kind: j.kind } : null;
    },
  };
}
