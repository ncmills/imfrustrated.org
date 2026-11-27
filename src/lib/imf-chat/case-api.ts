// POST /api/chat/case logic (spec §1, §5, U5). Framework-free: the route wraps it.
// Order per request: kill switch -> beta gate -> honeypot -> validation -> crisis screen
// on RAW text (before rate limit and before any queueing) -> turn limit -> redaction ->
// store. New-case limits are spent only when a letter is queued (submit), so a case
// stopped by the crisis screen or a safety chip never counts against the IP (F6).
import { createHash, createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { CRISIS_CARD, RESOURCES_LINE, crisisTierTurns } from "./crisis";
import { chatEnabled, chatIsPublic } from "./flags";
import { redact } from "./redact";
import {
  applyAnswer, confirmLine, guardFacts, mergeFacts, planNext, rulesExtract, stepsFor,
  type Answers, type ExtractPass, type Facts,
} from "./intake";
import type { CaseRow, ChatStore } from "./store";

export type Env = Record<string, string | undefined>;
export interface ApiIn { body: unknown; ip: string; header(name: string): string | null }
export interface ApiOut { status: number; body: Record<string, unknown>; headers?: Record<string, string> }

export const STATES = new Set(
  ("AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ " +
   "NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY").split(" "),
);
export const CATEGORIES = new Set(["deposit", "refund", "wages", "credit", "repair", "insurance", "other"]);
// IFDO-INTAKE-ASK-MISSING: every step the planner (intake.planNext) can ask, plus its one follow-up.
const PLAN_STEPS = ["story", "counterparty", "address", "moveout", "amount", "asked", "forwarding", "deductions", "want", "dates", "tried"];
const TEXT_STEPS = new Set([...PLAN_STEPS, ...PLAN_STEPS.map((s) => s + "_more"), "confirm", "confirm_more"]);
const CONTROL_STEPS = new Set(["state", "safety", "category", "submit"]);
const TURN_MAX = 2000;
const STORY_MAX = 6000;
const MIN_FIRST_TURN_MS = 3000;
export const LIMITS = {
  // 30 turns per FIXED, epoch-aligned hour per IP (imf_rl_hit floors now() to the window start;
  // the window is NOT sliding and NOT per case). Which POSTs count: every create, every turn that
  // reaches the limiter (state/safety/category/each text step/submit) and every accepted follow-up.
  // Not counted: requests refused earlier (bad body/token/step, crisis screen, too_fast, GET polls).
  // Consequence, by design of a fixed window: a burst that straddles an hour boundary can pass up to
  // 2 x 30 = 60 counted calls before the first 429 (an adversarial run saw ~58). Values unchanged.
  turnsPerHour: 30,
  casesPer24h: 1,
  casesPer30d: 3,
  globalCasesPerDay: 10,
  // Hard bound on real-pipeline beta-test letters (both secrets) per fixed day; separate counter.
  testLettersPerDay: 12,
};

export type Next = { step: string; prompt: string; kind?: string };
const NEXT: Record<string, Next> = {
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
/** Facts so far: the stored story-pass output plus each later answer, folded in turn order. */
export function factsFrom(c: Pick<CaseRow, "state" | "category" | "turns">, skip?: string): Facts {
  const ctx = { state: c.state, category: c.category };
  let f: Facts = { state: c.state, category: c.category };
  for (const t of c.turns ?? []) {
    if (!t.text || t.step === skip || !TEXT_STEPS.has(t.step)) continue;
    if (t.step === "story") f = mergeFacts(f, guardFacts((t.facts as Facts | undefined) ?? rulesExtract(t.text, ctx)));
    else f = applyAnswer(f, t.step, t.text);
  }
  return guardFacts(f);
}
function answersFrom(turns: CaseRow["turns"]): Answers {
  const a: Answers = {};
  for (const t of turns ?? []) if (t.text && TEXT_STEPS.has(t.step)) a[t.step] = t.text;
  return a;
}
function planned(facts: Facts, answers: Answers, category: string | null): Next {
  const n = planNext(facts, answers, category);
  if (n === "submit") return NEXT.submit;
  if (n === "confirm") return { step: "confirm", prompt: confirmLine(facts), kind: "text" };
  return n;
}
/** The question a text step asks, given the facts known before it was answered (stored as q). */
function promptFor(step: string, f: Facts, category: string | null): string {
  if (step === "confirm") return confirmLine(f);
  if (step === "confirm_more") return "Thanks, noted. Anything else to fix?";
  const base = step.replace(/_more$/, "");
  const def = stepsFor(category).find((s) => s.id === base);
  if (!def) return step;
  return base === step ? def.prompt(f) : def.more(f);
}
/** U6 resume: the planner's next step for this intake case, by the same rules handleCaseTurn uses. */
export function nextStepFor(c: Pick<CaseRow, "state" | "category" | "turns">): Next {
  if (!c.state) return NEXT.state;
  const done = new Set((c.turns ?? []).map((t) => t.step));
  if (!done.has("safety")) return NEXT.safety;
  if (!c.category) return NEXT.category;
  return planned(factsFrom(c), answersFrom(c.turns), c.category);
}
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

/** N8: review_fixture is set only by the control-only header, never by the beta token. */
export function isFixtureReq(req: ApiIn, env: Env): boolean {
  return secretEq(req.header("x-imf-review-fixture"), env.IMF_REVIEW_FIXTURE_SECRET?.trim());
}

export const err = (status: number, error: string): ApiOut => ({ status, body: { error } });

/** Seconds left in the epoch-aligned fixed window (the same alignment imf_rl_hit uses); >= 1. */
export function retryAfterSecs(windowSecs: number, nowMs: number): number {
  return Math.max(1, windowSecs - (Math.floor(nowMs / 1000) % windowSecs));
}
/** A 429 carrying Retry-After (seconds). The JSON body keeps its error code. */
export function limited(error: string, retryAfter: number): ApiOut {
  return { status: 429, body: { error }, headers: { "Retry-After": String(Math.max(1, Math.ceil(retryAfter))) } };
}
export const log = (event: string, caseId?: string) =>
  console.log("[imf-chat]", JSON.stringify(caseId ? { event, case: caseId } : { event }));

/** IFDO-PASS-2: a "beta test" request carries BOTH a valid beta token and a valid test-run header.
 *  Only such a request skips the per-IP limits (hourly turns, per-IP case caps). The test header
 *  alone never does, even when the chat is public. */
export function isBetaTestReq(req: ApiIn, body: Record<string, unknown>, env: Env): boolean {
  if (!isTestReq(req, env)) return false;
  const beta = req.header("x-imf-beta") ?? (typeof body.beta === "string" ? body.beta : null);
  return secretEq(beta, env.IMF_CHAT_BETA_TOKEN?.trim());
}

export function gate(req: ApiIn, body: Record<string, unknown>, env: Env): ApiOut | null {
  if (!chatEnabled(env)) return err(503, "chat_paused");
  if (chatIsPublic(env)) return null;
  const beta = req.header("x-imf-beta") ?? (typeof body.beta === "string" ? body.beta : null);
  return secretEq(beta, env.IMF_CHAT_BETA_TOKEN?.trim()) ? null : err(403, "beta_only");
}

export async function handleCasePost(
  req: ApiIn, store: ChatStore, env: Env, now = Date.now(), opts: { extract?: ExtractPass } = {},
): Promise<ApiOut> {
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
  const bypass = isBetaTestReq(req, body, env);

  if (body.action === "create") {
    const dv = body.disclaimer_v;
    if (typeof dv !== "string" || !/^[\w.-]{1,32}$/.test(dv)) return err(400, "disclaimer_required");
    if (!bypass && !(await store.rlHit(key, "turn", 3600, LIMITS.turnsPerHour))) return limited("rate_limited", retryAfterSecs(3600, now));
    const token = randomBytes(32).toString("base64url");
    const fixture = !test && isFixtureReq(req, env);  // is_test and review_fixture are never both true
    const row = await store.insertCase({ token_hash: hashToken(token), disclaimer_v: dv, is_test: test, review_fixture: fixture });
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
  if (typeof step !== "string" || !(CONTROL_STEPS.has(step) || TEXT_STEPS.has(step))) return err(400, "bad_step");
  const done = new Set(c.turns.map((t) => t.step));
  if (step !== "state" && !c.state) return err(400, "state_first");
  if (step !== "state" && step !== "safety" && !done.has("safety")) return err(400, "safety_first");
  if ((TEXT_STEPS.has(step) || step === "submit") && !c.category) return err(400, "category_first");
  if (step === "state" && now - Date.parse(c.created_at) < MIN_FIRST_TURN_MS) return limited("too_fast", Math.ceil((MIN_FIRST_TURN_MS - (now - Date.parse(c.created_at))) / 1000));

  // Crisis screen on the raw text, first: a crisis message always gets the card.
  const raw = body.value;
  let resources = false;
  if (TEXT_STEPS.has(step)) {
    if (typeof raw !== "string" && typeof raw !== "number") return err(400, "value_required");
    const text = String(raw);
    if (!text.trim() || text.length > TURN_MAX) return err(400, "turn_length");
    // Current + previous visitor text turn (a phrase split across two turns still stops).
    const prev = [...c.turns].reverse().find((t) => TEXT_STEPS.has(t.step) && t.text)?.text;
    const tier = crisisTierTurns(text, prev);
    if (tier === "A") {
      await store.updateCase(c.id, { status: "crisis", stop_reason: "crisis_screen" });
      log("crisis_stop", c.id);
      return { status: 200, body: { ok: true, status: "crisis", card: CRISIS_CARD } };
    }
    resources = tier === "B";
  }
  if (!bypass && !(await store.rlHit(key, "turn", 3600, LIMITS.turnsPerHour))) return limited("rate_limited", retryAfterSecs(3600, now));
  const at = new Date(now).toISOString();
  const turns = [...c.turns];
  const patch: Partial<CaseRow> = {};
  let next: Next = NEXT.submit;
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
    next = planned({ state: c.state, category: raw }, {}, raw);
  } else if (step === "submit") {
    return submit(store, c, key, test, bypass, now);
  } else {
    const r = redact(String(raw).trim());
    redacted = r.redacted;
    // F4: each text step is kept once (a resend replaces it), and STORY_MAX caps the total of
    // ALL visitor text turns, so neither repeated steps nor spreading text across steps bypass it.
    const kept = turns.filter((t) => t.step !== step);
    const used = kept.filter((t) => TEXT_STEPS.has(t.step)).reduce((n, t) => n + (t.text?.length ?? 0), 0);
    if (used + r.text.length > STORY_MAX) return err(400, "story_length");
    turns.splice(0, turns.length, ...kept);
    const ctx = { state: c.state, category: c.category };
    const before = factsFrom({ ...c, turns: kept });
    const turn: CaseRow["turns"][number] = { step, text: r.text, at, q: promptFor(step, before, c.category) };
    if (step === "story") {
      // One extract pass per story, on redacted text only; its output is stored so the poll replays it.
      let facts: Facts;
      try {
        facts = guardFacts(await (opts.extract ?? rulesExtract)(r.text, ctx));
      } catch {
        facts = guardFacts(rulesExtract(r.text, ctx));
      }
      turn.facts = facts;
    }
    turns.push(turn);
    const view = { ...c, turns };
    const facts = factsFrom(view);
    patch.counterparty = facts.counterparty ?? null;
    patch.amount_usd = facts.amount_usd ?? null;
    patch.key_dates = facts.key_dates?.length ? facts.key_dates : null;
    next = planned(facts, answersFrom(turns), c.category);
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

async function submit(store: ChatStore, c: CaseRow, key: string, test: boolean, bypass: boolean, now: number): Promise<ApiOut> {
  const named = !!c.counterparty || c.turns.some((t) => (t.step === "counterparty" || t.step === "counterparty_more") && t.text);
  if (!named || !c.turns.some((t) => t.step === "story")) return err(400, "intake_incomplete");
  // Per-IP case caps: skipped only for a beta test request (valid beta token + test header) or a
  // review fixture. The public site-wide letters-per-day cap is skipped ONLY for a beta test request
  // (both secrets); those are bounded instead by their own hard counter (testLettersPerDay), so
  // test letters neither consume nor are blocked by the public 10-a-day. A review fixture or a plain
  // is_test request WITHOUT both secrets still takes the public cap.
  if (!bypass && !c.review_fixture) {
    if (!(await store.rlHit(key, "case_24h", 86400, LIMITS.casesPer24h))) return limited("case_limit", retryAfterSecs(86400, now));
    if (!(await store.rlHit(key, "case_30d", 2592000, LIMITS.casesPer30d))) return limited("case_limit", retryAfterSecs(2592000, now));
  }
  if (bypass) {
    if (!(await store.rlHit(sha256("imf-chat-test-global"), "test_case_day", 86400, LIMITS.testLettersPerDay))) {
      return limited("test_day_limit", retryAfterSecs(86400, now));
    }
  } else if (!(await store.rlHit(sha256("imf-chat-global"), "case_day", 86400, LIMITS.globalCasesPerDay))) {
    return limited("day_limit", retryAfterSecs(86400, now));
  }
  if (!(await store.insertJob({ case_id: c.id, kind: "letter", is_test: test }))) {
    // F7: a concurrent submit already queued this case's letter (unique index refused a 2nd job).
    await store.updateCase(c.id, { status: "queued" });
    log("already_queued", c.id);
    return { status: 202, body: { ok: true, status: "queued", already: true } };
  }
  await store.updateCase(c.id, { status: "queued" });
  log("queued", c.id);
  return { status: 202, body: { ok: true, status: "queued" } };
}
