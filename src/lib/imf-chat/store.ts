// Injectable data access for the chat API, so route logic is testable with no network.
import type { SupabaseClient } from "@supabase/supabase-js";

export interface CaseRow {
  id: string;
  created_at: string;
  is_test: boolean;
  review_fixture: boolean;
  disclaimer_v: string | null;
  state: string | null;
  category: string | null;
  counterparty: string | null;
  amount_usd: number | null;
  key_dates: unknown;
  turns: Array<{ step: string; text?: string; at: string; [k: string]: unknown }>;
  status: string;
  stop_reason: string | null;
  verdict: string | null;
  letter: string | null;
  cover: string | null;
  sources: unknown;
  /** held: stored on a held_for_nick case, shown only after review ok (F1). close never shows. */
  followups: Array<{ q: string; a: string | null; status?: string; held?: boolean; review?: "ok" | "close" }>;
  held_for_nick: boolean;
  letter_version: number;
  review: string | null;
}

export interface JobInfo { status: string; created_at: string; kind: string }

export interface ChatStore {
  rlHit(key: string, scope: string, windowSecs: number, limit: number): Promise<boolean>;
  insertCase(row: Partial<CaseRow> & { token_hash: string }): Promise<{ id: string; created_at: string }>;
  getCaseByTokenHash(tokenHash: string): Promise<CaseRow | null>;
  updateCase(id: string, patch: Partial<CaseRow>): Promise<void>;
  /** false when a unique index refused it (F7: one active letter job per case). */
  insertJob(job: { case_id: string; kind: "letter" | "followup" | "rerun"; is_test: boolean }): Promise<boolean>;
  latestJob(caseId: string): Promise<JobInfo | null>;
  /** The poll's read: the case AND its latest job in ONE round trip (embedded select on the
   *  imf_chat_jobs.case_id FK). Null when no case has that token hash. */
  getCaseWithLatestJob(tokenHash: string): Promise<{ c: CaseRow; job: JobInfo | null } | null>;
  /** imf_day_paused(): "day_cap" when the worker hit today's spend cap (current UTC day only), else null. */
  dayPaused(): Promise<"day_cap" | null>;
  /** Worker liveness timestamp via rpc imf_worker_beat_at(), ISO string. Null = unknown: no function/column
   *  yet, or the call failed. Never throws; read-only. */
  workerBeatAt(): Promise<string | null>;
  review(r: ReviewIn): Promise<void>;
  reviewFollowup(r: FollowupReviewIn): Promise<void>;
}

export interface FollowupReviewIn {
  case_id: string;
  idx: number;
  review: "ok" | "close";
}

export interface ReviewIn {
  case_id: string;
  letter_version: number;
  review: "ok" | "rerun" | "close";
  rerun_reason: string | null;
  note: string | null;
}

export function supabaseStore(db: SupabaseClient): ChatStore {
  const must = <T>(r: { data: T; error: { message: string } | null }, what: string): T => {
    if (r.error) throw new Error(`${what}: ${r.error.message}`);
    return r.data;
  };
  return {
    async rlHit(key, scope, windowSecs, limit) {
      const r = await db.rpc("imf_rl_hit", { p_key: key, p_scope: scope, p_window_secs: windowSecs, p_limit: limit });
      return must(r, "imf_rl_hit") === true;
    },
    async insertCase(row) {
      const r = await db.from("imf_chat_cases").insert(row).select("id, created_at").single();
      return must(r, "insert case") as { id: string; created_at: string };
    },
    async getCaseByTokenHash(tokenHash) {
      const r = await db.from("imf_chat_cases").select("*").eq("token_hash", tokenHash).maybeSingle();
      return must(r, "get case") as CaseRow | null;
    },
    async updateCase(id, patch) {
      must(await db.from("imf_chat_cases").update(patch).eq("id", id), "update case");
    },
    async insertJob(job) {
      const r = await db.from("imf_chat_jobs").insert(job);
      if ((r.error as { code?: string } | null)?.code === "23505") return false;  // unique_violation
      must(r, "insert job");
      return true;
    },
    async latestJob(caseId) {
      const r = await db.from("imf_chat_jobs").select("status, created_at, kind")
        .eq("case_id", caseId).order("created_at", { ascending: false }).limit(1).maybeSingle();
      return must(r, "latest job") as JobInfo | null;
    },
    async getCaseWithLatestJob(tokenHash) {
      // One PostgREST request: the case plus its newest job (embedded via the case_id FK, ordered
      // and limited on the embedded table only). Replaces getCaseByTokenHash + latestJob per poll.
      const r = await db.from("imf_chat_cases").select("*, imf_chat_jobs(status, created_at, kind)")
        .eq("token_hash", tokenHash)
        .order("created_at", { ascending: false, referencedTable: "imf_chat_jobs" })
        .limit(1, { referencedTable: "imf_chat_jobs" })
        .maybeSingle();
      const row = must(r, "get case") as (CaseRow & { imf_chat_jobs?: JobInfo[] | null }) | null;
      if (!row) return null;
      const { imf_chat_jobs, ...c } = row;
      return { c: c as CaseRow, job: imf_chat_jobs?.[0] ?? null };
    },
    async dayPaused() {
      const r = await db.rpc("imf_day_paused");
      return must(r, "imf_day_paused") === "day_cap" ? "day_cap" : null;
    },
    async workerBeatAt() {
      try {
        // service_role has no table grant; SN's imf_worker_beat_at() RPC returns timestamptz or null.
        // Any error (incl. PGRST202 missing function) or non-string/unparseable value = unknown.
        const r = await db.rpc("imf_worker_beat_at");
        const v = r.data as unknown;
        return r.error || typeof v !== "string" || Number.isNaN(Date.parse(v)) ? null : v;
      } catch {
        return null;
      }
    },
    async review(x) {
      must(await db.rpc("imf_chat_review", {
        p_case_id: x.case_id, p_letter_version: x.letter_version, p_review: x.review,
        p_rerun_reason: x.rerun_reason, p_note: x.note,
      }), "imf_chat_review");
    },
    async reviewFollowup(x) {
      must(await db.rpc("imf_chat_review_followup", { p_case: x.case_id, p_idx: x.idx, p_verdict: x.review }),
        "imf_chat_review_followup");
    },
  };
}
