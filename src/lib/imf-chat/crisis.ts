// IFDO-CHATBOX crisis screen (spec §1.4, F5/F6, N3/N4). Deterministic, no model.
// Runs on the RAW visitor text (before redaction), before anything is queued.
// The term list is a byte-identical copy of second-nick ops/imf_crisis_terms.json.
import terms from "./crisis-terms.json";

export type CrisisTier = "A" | "B" | null;

export interface CrisisTerms {
  tier_a: string[];
  tier_b: string[];
}

/** Lower-case; hyphens, underscores and whitespace runs collapse to one space. */
export function normaliseCrisisText(raw: string): string {
  return raw.toLowerCase().replace(/[-_\s]+/g, " ").trim();
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** `term` -> \bterm\b ; `stem*` -> \bstem\w* ; case-insensitive. */
export function termRegex(term: string): RegExp {
  const t = normaliseCrisisText(term);
  if (t.endsWith("*")) return new RegExp(`\\b${escapeRe(t.slice(0, -1))}\\w*`, "i");
  return new RegExp(`\\b${escapeRe(t)}\\b`, "i");
}

function compile(list: CrisisTerms) {
  return { a: list.tier_a.map(termRegex), b: list.tier_b.map(termRegex) };
}

const COMPILED = compile(terms as CrisisTerms);

/** Tier A (first-person self-harm) stops the case; tier B shows the 911/988 line and continues. */
export function crisisTier(raw: string, list?: CrisisTerms): CrisisTier {
  if (!raw) return null;
  const re = list ? compile(list) : COMPILED;
  const text = normaliseCrisisText(raw);
  if (re.a.some((r) => r.test(text))) return "A";
  if (re.b.some((r) => r.test(text))) return "B";
  return null;
}

export const CRISIS_CARD = {
  kind: "crisis",
  text:
    "If you or someone else is in danger right now, call 911. If you are thinking about hurting yourself, call or text 988 (Suicide & Crisis Lifeline) to talk to someone now. We've paused this letter.",
} as const;

export const RESOURCES_LINE =
  "If anyone is in danger, call 911. To talk to someone now, call or text 988.";
