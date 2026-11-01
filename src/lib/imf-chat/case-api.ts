// POST /api/chat/case logic (spec §1, §5, U5). Framework-free: the route wraps it.
// Order per request: kill switch -> beta gate -> honeypot -> validation -> crisis screen
// on RAW text (before rate limit and before any queueing) -> turn limit -> redaction ->
// store. New-case limits are spent only when a letter is queued (submit), so a case
// stopped by the crisis screen or a safety chip never counts against the IP (F6).
import { createHash, createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { CRISIS_CARD, RESOURCES_LINE, crisisTier } from "./crisis";
import { redact } from "./redact";
import type { CaseRow, ChatStore } from "./store";

export type Env = Record<string, string | undefined>;
export interface ApiIn { body: unknown; ip: string; header(name: string): string | null }
export interface ApiOut { status: number; body: Record<string, unknown> }

export const STATES = new Set(
  ("AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ " +
   "NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY").split(" "),
);
export const CATEGORIES = new Set(["deposit", "refund", "wages", "credit", "repair", "insurance", "other"]);
const TEXT_STEPS = new Set(["counterparty", "story", "amount", "dates", "want", "tried"]);
const TURN_MAX = 2000;
const STORY_MAX = 6000;
const MIN_FIRST_TURN_MS = 3000;
export const LIMITS = {
  turnsPerHour: 30,
  casesPer24h: 1,
  casesPer30d: 3,
  globalCasesPerDay: 10,
};

const NEXT: Record<string, { step: string; prompt: string }> = {
  state: { step: "state", prompt: "Which state is this in?" },
  safety: { step: "safety", prompt: "A few quick safety questions first." },
  category: { step: "category", prompt: "What is this about?" },
  counterparty: { step: "counterparty", prompt: "Who is this with? (the business name)" },
  story: { step: "story", prompt: "What happened?" },
  amount: { step: "amount", prompt: "How much money is involved?" },
  dates: { step: "dates", prompt: "What are the key dates?" },
  want: { step: "want", prompt: "What do you want them to do?" },
  tried: { step: "tried", prompt: "What have you already tried?" },
  submit: { step: "submit", prompt: "Ready to write your letter?" },
};
const STOP_CARDS: Record<string, string> = {
  urgent: "A deadline this close needs local help now: find free legal aid at LawHelp.org, or call your state bar's lawyer-referral service.",
  lawyer: "Since you already have a lawyer or a court case, talk to your lawyer or the court clerk about this.",
  out: "This is outside what we can help with. LawHelp.org lists free legal aid in every state.",
};

const sha256 = (s: string) => createHash("sha256").update(s).digest("hex");
export const hashToken = sha256;

/** 64-hex key for imf_rl_hit: HMAC-SHA256(IMF_CHAT_IP_SALT, ip). No salt -> null; callers
 *  fail closed. Never a plain sha256: an unsalted IPv4 hash is reversible by enumeration. */
export function ipKey(ip: string, env: Env): string | null {
  const salt = env.IMF_CHAT_IP_SALT?.trim();
  return salt ? createHmac("sha256", salt).update(ip).digest("hex") : null;
}

export function secretEq(a: string | null | undefined, b: string | null | undefined): boolean {
  if (!a || !b) return false;
  const x = Buffer.from(a), y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

export function isTestReq(req: ApiIn, env: Env): boolean {
  return secretEq(req.header("x-sn-test-run"), env.SIGNAL_TEST_SECRET?.trim());
}

export const err = (status: number, error: string): ApiOut => ({ status, body: { error } });
export const log = (event: string, caseId?: string) =>
  console.log("[imf-chat]", JSON.stringify(caseId ? { event, case: caseId } : { event }));

export function gate(req: ApiIn, body: Record<string, unknown>, env: Env): ApiOut | null {
  if (env.IMF_CHAT_ENABLED?.trim() !== "1") return err(503, "chat_paused");
  if (env.IMF_CHAT_PUBLIC?.trim() === "1") return null;
  const beta = req.header("x-imf-beta") ?? (typeof body.beta === "string" ? body.beta : null);
  return secretEq(beta, env.IMF_CHAT_BETA_TOKEN?.trim()) ? null : err(403, "beta_only");
}

export async function handleCasePost(req: ApiIn, store: ChatStore, env: Env, now = Date.now()): Promise<ApiOut> {
  const body = (req.body && typeof req.body === "object" ? req.body : null) as Record<string, unknown> | null;
  if (!body) return err(400, "invalid_json");
  const g = gate(req, body, env);
  if (g) return g;
  if (typeof body.website === "string" && body.website.trim()) {
    log("honeypot");
    return { status: 200, body: { ok: true } };
  }
  const key = ipKey(req.ip, env);
  if (!key) {
    log("ip_salt_missing");
    return err(503, "chat_paused");
  }
  const test = isTestReq(req, env);

  if (body.action === "create") {
    const dv = body.disclaimer_v;
    if (typeof dv !== "string" || !/^[\w.-]{1,32}$/.test(dv)) return err(400, "disclaimer_required");
    if (!(await store.rlHit(key, "turn", 3600, LIMITS.turnsPerHour))) return err(429, "rate_limited");
    const token = randomBytes(32).toString("base64url");
    const row = await store.insertCase({ token_hash: hashToken(token), disclaimer_v: dv, is_test: test });
    log("create", row.id);
    return { status: 201, body: { ok: true, token, next: NEXT.state } };
  }

  if (body.action !== "turn") return err(400, "bad_action");
  if (typeof body.token !== "string" || body.token.length < 20 || body.token.length > 64) return err(400, "bad_token");
  const c = await store.getCaseByTokenHash(hashToken(body.token));
  if (!c) return err(404, "not_found");
  if (!c.disclaimer_v) return err(400, "disclaimer_required");
  if (c.status !== "intake") return err(409, "case_closed");
  const step = body.step;
  if (typeof step !== "string" || !(step in NEXT)) return err(400, "bad_step");
  const done = new Set(c.turns.map((t) => t.step));
  if (step !== "state" && !c.state) return err(400, "state_first");
  if (step !== "state" && step !== "safety" && !done.has("safety")) return err(400, "safety_first");
  if ((TEXT_STEPS.has(step) || step === "submit") && !c.category) return err(400, "category_first");
  if (step === "state" && now - Date.parse(c.created_at) < MIN_FIRST_TURN_MS) return err(429, "too_fast");

  // Crisis screen on the raw text, first: a crisis message always gets the card.
  const raw = body.value;
  let resources = false;
  if (TEXT_STEPS.has(step)) {
    if (typeof raw !== "string" && typeof raw !== "number") return err(400, "value_required");
    const text = String(raw);
    if (!text.trim() || text.length > TURN_MAX) return err(400, "turn_length");
    const tier = crisisTier(text);
    if (tier === "A") {
      await store.updateCase(c.id, { status: "crisis", stop_reason: "crisis_screen" });
      log("crisis_stop", c.id);
      return { status: 200, body: { ok: true, status: "crisis", card: CRISIS_CARD } };
    }
    resources = tier === "B";
  }
  if (!(await store.rlHit(key, "turn", 3600, LIMITS.turnsPerHour))) return err(429, "rate_limited");
  const at = new Date(now).toISOString();
  const turns = [...c.turns];
  const patch: Partial<CaseRow> = {};
  let next = NEXT.submit;
  let redacted = false;

  if (step === "state") {
    if (raw === "non_us") return stop(store, c.id, "out", "non_us");
    if (typeof raw !== "string" || !STATES.has(raw)) return err(400, "bad_state");
    patch.state = raw;
    next = NEXT.safety;
  } else if (step === "safety") {
    const v = (raw ?? {}) as Record<string, unknown>;
    if (![v.danger, v.deadline, v.lawyer].every((x) => typeof x === "boolean")) return err(400, "bad_safety");
    if (v.danger) {
      await store.updateCase(c.id, { status: "crisis", stop_reason: "safety_chip" });
      log("crisis_stop", c.id);
      return { status: 200, body: { ok: true, status: "crisis", card: CRISIS_CARD } };
    }
    if (v.deadline) return stop(store, c.id, "urgent", "deadline_chip");
    if (v.lawyer) return stop(store, c.id, "lawyer", "lawyer_chip");
    turns.push({ step: "safety", at });
    next = NEXT.category;
  } else if (step === "category") {
    if (typeof raw !== "string" || !CATEGORIES.has(raw)) return err(400, "bad_category");
    patch.category = raw;
    next = NEXT.counterparty;
  } else if (step === "submit") {
    return submit(store, c, key, test);
  } else {
    const r = redact(String(raw).trim());
    redacted = r.redacted;
    if (step === "story") {
      const used = c.turns.filter((t) => t.step === "story").reduce((n, t) => n + (t.text?.length ?? 0), 0);
      if (used + r.text.length > STORY_MAX) return err(400, "story_length");
    }
    if (step === "counterparty") patch.counterparty = r.text.slice(0, 200);
    if (step === "amount") {
      const n = Number(r.text.replace(/[$,\s]/g, ""));
      if (Number.isFinite(n) && n >= 0 && n < 1e10) patch.amount_usd = Math.round(n * 100) / 100;
    }
    if (step === "dates") patch.key_dates = { text: r.text };
    turns.push({ step, text: r.text, at });
    const order = ["counterparty", "story", "amount", "dates", "want", "tried", "submit"];
    next = NEXT[order[order.indexOf(step) + 1]];
  }
  patch.turns = turns;
  await store.updateCase(c.id, patch);
  log(`turn_${step}`, c.id);
  return {
    status: 200,
    body: { ok: true, status: "intake", next, ...(resources ? { resources: RESOURCES_LINE } : {}), ...(redacted ? { redacted: true } : {}) },
  };
}

async function stop(store: ChatStore, id: string, status: string, reason: string): Promise<ApiOut> {
  await store.updateCase(id, { status, stop_reason: reason });
  log(`stop_${status}`, id);
  return { status: 200, body: { ok: true, status, card: { kind: status, text: STOP_CARDS[status] } } };
}

async function submit(store: ChatStore, c: CaseRow, key: string, test: boolean): Promise<ApiOut> {
  if (!c.counterparty || !c.turns.some((t) => t.step === "story")) return err(400, "intake_incomplete");
  if (!test && !c.review_fixture) {
    if (!(await store.rlHit(key, "case_24h", 86400, LIMITS.casesPer24h))) return err(429, "case_limit");
    if (!(await store.rlHit(key, "case_30d", 2592000, LIMITS.casesPer30d))) return err(429, "case_limit");
  }
  if (!test && !(await store.rlHit(sha256("imf-chat-global"), "case_day", 86400, LIMITS.globalCasesPerDay))) {
    return err(429, "day_limit");
  }
  await store.insertJob({ case_id: c.id, kind: "letter", is_test: test });
  await store.updateCase(c.id, { status: "queued" });
  log("queued", c.id);
  return { status: 202, body: { ok: true, status: "queued" } };
}
