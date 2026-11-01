// POST /api/chat/review logic (spec §2 L82, U5; N2, F1, N8). Control-only: the header
// x-imf-review-secret must equal env IMF_CHAT_REVIEW_SECRET (constant time). The body
// carries ONLY case_id, letter_version, review (ok | rerun | close), a rerun_reason code
// from RERUN_REASONS, and an optional sheet note. Any other key (letter, cover, text...)
// is refused, so no reviewer text can reach the letter or a model. Logs ids only.
import { err, log, secretEq, type ApiIn, type ApiOut, type Env } from "./case-api";
import type { ChatStore, ReviewIn } from "./store";

/** Codes only; the fixed instruction strings live with the pipeline (spec F1). */
export const RERUN_REASONS = new Set(["wrong_state_law", "missed_fact", "wrong_remedy", "tone", "format"]);
const REVIEWS = new Set(["ok", "rerun", "close"]);
const ALLOWED_KEYS = new Set(["case_id", "letter_version", "review", "rerun_reason", "note"]);
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function handleReviewPost(req: ApiIn, store: ChatStore, env: Env): Promise<ApiOut> {
  const secret = env.IMF_CHAT_REVIEW_SECRET?.trim();
  if (!secret) return err(503, "review_disabled");
  if (!secretEq(req.header("x-imf-review-secret"), secret)) return err(403, "forbidden");
  const b = (req.body && typeof req.body === "object" && !Array.isArray(req.body) ? req.body : null) as Record<string, unknown> | null;
  if (!b) return err(400, "invalid_json");
  if (Object.keys(b).some((k) => !ALLOWED_KEYS.has(k))) return err(400, "unknown_field");
  const { case_id, letter_version, review, rerun_reason, note } = b;
  if (typeof case_id !== "string" || !UUID.test(case_id)) return err(400, "bad_case_id");
  if (typeof letter_version !== "number" || !Number.isInteger(letter_version) || letter_version < 1) return err(400, "bad_letter_version");
  if (typeof review !== "string" || !REVIEWS.has(review)) return err(400, "bad_review");
  const reason = rerun_reason ?? null;
  if (review === "rerun" ? typeof reason !== "string" || !RERUN_REASONS.has(reason) : reason !== null) return err(400, "bad_rerun_reason");
  if (note != null && (typeof note !== "string" || note.length > 500)) return err(400, "bad_note");
  const x: ReviewIn = {
    case_id, letter_version, review: review as ReviewIn["review"],
    rerun_reason: reason as string | null, note: (note as string | undefined) ?? null,
  };
  try {
    await store.review(x);
  } catch {
    log("review_rejected", case_id);
    return err(409, "review_rejected");
  }
  log(`review_${review}`, case_id);
  return { status: 200, body: { ok: true, review } };
}
