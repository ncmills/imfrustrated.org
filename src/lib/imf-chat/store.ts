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
  followups: Array<{ q: string; a: string | null }>;
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
  insertJob(job: { case_id: string; kind: "letter" | "followup" | "rerun"; is_test: boolean }): Promise<void>;
  latestJob(caseId: string): Promise<JobInfo | null>;
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
      must(await db.from("imf_chat_jobs").insert(job), "insert job");
    },
    async latestJob(caseId) {
      const r = await db.from("imf_chat_jobs").select("status, created_at, kind")
        .eq("case_id", caseId).order("created_at", { ascending: false }).limit(1).maybeSingle();
      return must(r, "latest job") as JobInfo | null;
    },
  };
}
