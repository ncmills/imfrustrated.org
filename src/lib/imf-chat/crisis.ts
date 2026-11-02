// IFDO-CHATBOX crisis screen (spec §1.4, F5/F6, N3/N4; U7 normalise spec). Deterministic, no model.
// Runs on the RAW visitor text (before redaction), before anything is queued. Callers screen the
// current visitor turn plus the previous visitor turn, joined with a space (crisisTierTurns).
// The term list is a byte-identical copy of second-nick ops/imf_crisis_terms.json; the matcher
// below is the same rule as ops/imf_letter_pipeline.py (_norm / match).
import terms from "../crisis-terms.json";

export type CrisisTier = "A" | "B" | null;

export interface CrisisTerms {
  tier_a: string[];
  tier_b: string[];
}

const ZERO_WIDTH = /[­​‌‍⁠﻿]/g;
const JOINED_MIN = 8;

/** NFKC -> lower -> drop zero-width/soft chars -> non [a-z0-9] to space -> collapse + trim. */
export function normaliseCrisisText(raw: string): string {
  return raw
    .normalize("NFKC")
    .toLowerCase()
    .replace(ZERO_WIDTH, "")
    .replace(/[^a-z0-9]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

interface Matcher { spaced: string; joined: string; prefix: boolean }

function compileTerm(term: string): Matcher {
  const prefix = term.trimEnd().endsWith("*");
  const spaced = normaliseCrisisText(prefix ? term.trimEnd().slice(0, -1) : term);
  return { spaced, joined: spaced.replace(/ /g, ""), prefix };
}

interface Joined { text: string; starts: Set<number>; ends: Set<number> }

/** Spaces removed, with the joined indices that were word starts and word ends in `text`. */
function joinText(text: string): Joined {
  const starts = new Set<number>();
  const ends = new Set<number>();
  let out = "";
  for (const w of text.split(" ")) {
    if (!w) continue;
    starts.add(out.length);
    out += w;
    ends.add(out.length);
  }
  return { text: out, starts, ends };
}

/** One matcher for every path (G5). `text` must already be normalised. */
function matches(text: string, joined: Joined, m: Matcher): boolean {
  if (!m.spaced) return false;
  const padded = ` ${text} `;
  if (m.prefix ? padded.includes(` ${m.spaced}`) : padded.includes(` ${m.spaced} `)) return true;
  // Joined form (Rev 2): must begin at a word start. A whole term must also be >= 8 chars joined
  // and end at a word end; a prefix stem needs neither.
  if (!m.prefix && m.joined.length < JOINED_MIN) return false;
  for (const start of joined.starts) {
    if (!joined.text.startsWith(m.joined, start)) continue;
    if (m.prefix || joined.ends.has(start + m.joined.length)) return true;
  }
  return false;
}

/** Exported for tests: does `raw` match `term` under the shared rule? */
export function crisisMatch(raw: string, term: string): boolean {
  const t = normaliseCrisisText(raw);
  return matches(t, joinText(t), compileTerm(term));
}

function compile(list: CrisisTerms) {
  return { a: list.tier_a.map(compileTerm), b: list.tier_b.map(compileTerm) };
}

const COMPILED = compile(terms as CrisisTerms);

/** Tier A (first-person self-harm) stops the case; tier B shows the 911/988 line and continues. */
export function crisisTier(raw: string, list?: CrisisTerms): CrisisTier {
  if (!raw) return null;
  const re = list ? compile(list) : COMPILED;
  const text = normaliseCrisisText(raw);
  if (!text) return null;
  const joined = joinText(text);
  if (re.a.some((m) => matches(text, joined, m))) return "A";
  if (re.b.some((m) => matches(text, joined, m))) return "B";
  return null;
}

/** Screen the current visitor turn plus the previous visitor turn, joined with a space. */
export function crisisTierTurns(current: string, previous?: string | null, list?: CrisisTerms): CrisisTier {
  return crisisTier(previous ? `${previous} ${current}` : current, list);
}

export const CRISIS_CARD = {
  kind: "crisis",
  text:
    "If you or someone else is in danger right now, call 911. If you are thinking about hurting yourself, call or text 988 (Suicide & Crisis Lifeline) to talk to someone now. We've paused this letter.",
} as const;

export const RESOURCES_LINE =
  "If anyone is in danger, call 911. To talk to someone now, call or text 988.";
