// POST /api/chat/followup logic (spec §1.9, §3 FOLLOWUP_RULES, U5; N3, N4).
// Order: kill switch -> beta gate -> salt -> token -> letter must be visible -> crisis
// screen on the RAW question (before rate limit, redaction and any queueing) -> limits
// (5 per case, one unanswered at a time, per-IP turns) -> redaction -> append {q, a: null}
// + one followup job. The per-case $ cap is enforced by the worker, not here.
import { CRISIS_CARD, RESOURCES_LINE, crisisTier } from "./crisis";
import { err, gate, hashToken, ipKey, isTestReq, LIMITS, log, type ApiIn, type ApiOut, type Env } from "./case-api";
import { letterVisible } from "./poll-api";
import { redact } from "./redact";
import type { ChatStore } from "./store";

export const FOLLOWUPS_PER_CASE = 5;
const Q_MAX = 2000;

export async function handleFollowupPost(req: ApiIn, store: ChatStore, env: Env): Promise<ApiOut> {
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
  const tier = crisisTier(q);
  if (tier === "A") {
    log("followup_crisis", c.id);
    return { status: 200, body: { ok: true, status: "crisis", card: CRISIS_CARD } };
  }
  const followups = c.followups ?? [];
  if (followups.length >= FOLLOWUPS_PER_CASE) return err(429, "followup_limit");
  if (followups.some((f) => f.a === null)) return err(409, "followup_pending");
  if (!(await store.rlHit(key, "turn", 3600, LIMITS.turnsPerHour))) return err(429, "rate_limited");

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
