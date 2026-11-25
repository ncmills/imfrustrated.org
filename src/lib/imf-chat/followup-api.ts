// POST /api/chat/followup logic (spec §1.9, §3 FOLLOWUP_RULES, U5; N3, N4).
// Order: kill switch -> beta gate -> salt -> token -> letter must be visible -> crisis
// screen on the RAW question (before rate limit, redaction and any queueing) -> limits
// (2 per case, one unanswered at a time, per-IP turns) -> redaction -> append {q, a: null}
// + one followup job. The per-case $ cap is enforced by the worker, not here.
import { CRISIS_CARD, RESOURCES_LINE, crisisTierTurns } from "./crisis";
import { err, gate, hashToken, ipKey, isBetaTestReq, isTestReq, LIMITS, limited, log, retryAfterSecs, type ApiIn, type ApiOut, type Env } from "./case-api";
import { letterVisible } from "./poll-api";
import { redact } from "./redact";
import type { ChatStore } from "./store";

// 2, not the spec's 5: no Nick-approved text states 5 (CONTROL REVIEWS-1121-2030 (2)c). Worker:
// FOLLOWUPS_PER_CASE in second-nick ops/imf_letter_pipeline.py carries the same number.
export const FOLLOWUPS_PER_CASE = 2;
const Q_MAX = 2000;

export async function handleFollowupPost(req: ApiIn, store: ChatStore, env: Env, now = Date.now()): Promise<ApiOut> {
  const body = (req.body && typeof req.body === "object" ? req.body : null) as Record<string, unknown> | null;
  if (!body) return err(400, "invalid_json");
  const g = gate(req, body, env);
  if (g) return g;
  const key = ipKey(req.ip, env);
  if (!key) {
    log("ip_salt_missing");
    return err(503, "chat_paused");
  }
  if (typeof body.token !== "string" || body.token.length < 20 || body.token.length > 64) return err(400, "bad_token");
  const q = body.q;
  if (typeof q !== "string" || !q.trim() || q.length > Q_MAX) return err(400, "question_length");
  const c = await store.getCaseByTokenHash(hashToken(body.token));
  if (!c) return err(404, "not_found");
  if (!letterVisible(c)) return err(409, "no_letter");

  // Crisis screen on the raw text, first (N3): the card only, no job, nothing appended.
  // Current question + the previous visitor turn (last follow-up, else the last intake text turn).
  const prevQ = (c.followups ?? []).slice(-1)[0]?.q ?? [...c.turns].reverse().find((t) => t.text)?.text;
  const tier = crisisTierTurns(q, prevQ);
  if (tier === "A") {
    log("followup_crisis", c.id);
    return { status: 200, body: { ok: true, status: "crisis", card: CRISIS_CARD } };
  }
  const followups = c.followups ?? [];
  if (followups.length >= FOLLOWUPS_PER_CASE) return limited("followup_limit", 86400);  // lifetime per-case cap, no window: advisory only
  if (followups.some((f) => f.a === null)) return err(409, "followup_pending");
  if (!isBetaTestReq(req, body, env) && !(await store.rlHit(key, "turn", 3600, LIMITS.turnsPerHour))) {
    return limited("rate_limited", retryAfterSecs(3600, now));
  }

  const r = redact(q.trim());
  await store.updateCase(c.id, { followups: [...followups, { q: r.text, a: null }] });
  await store.insertJob({ case_id: c.id, kind: "followup", is_test: isTestReq(req, env) || c.is_test });
  log("followup_queued", c.id);
  return {
    status: 202,
    body: {
      ok: true, status: "queued", remaining: FOLLOWUPS_PER_CASE - followups.length - 1,
      ...(tier === "B" ? { resources: RESOURCES_LINE } : {}), ...(r.redacted ? { redacted: true } : {}),
    },
  };
}
