/**
 * IFDO-INTAKE-ASK-MISSING Part A: pure intake helpers. No I/O, no model call, no wiring.
 * The chat reads what the visitor already said (rulesExtract), then asks only what is still
 * missing (planNext), one follow-up at most per thin answer, and one correctable confirm line.
 *
 * Model seam: ExtractPass. rulesExtract is the deterministic pass; a later Claude pass can be
 * any (text, ctx) => Facts | Promise<Facts>. Every pass's output goes through guardFacts, then
 * mergeFacts (fills gaps only, never overwrites a known fact). Visitor text never goes to a
 * non-Claude model.
 */

export type KeyDate = { what: string; date: string; raw: string; year: number | null };
export type Facts = {
  state?: string | null;
  category?: string | null;
  counterparty?: string | null;
  /** "landlord", "employer"...: the role from the story, used only for prompts and the confirm line. */
  counterparty_role?: string | null;
  address?: string | null;
  amount_usd?: number | null;
  /** Worker's overlay_structured shape: date is the visitor's own words; raw is the whole answer. */
  key_dates?: KeyDate[];
  asked?: string | null;
  forwarding?: string | null;
  deductions?: string | null;
  want?: string | null;
  tried?: string | null;
};
export type Answers = Record<string, string>;
export type ExtractCtx = { state?: string | null; category?: string | null };
export type ExtractPass = (text: string, ctx: ExtractCtx) => Facts | Promise<Facts>;
export type StepDef = {
  id: string;
  prompt: (f: Facts) => string;
  /** The one follow-up asked when the answer is too thin. */
  more: (f: Facts) => string;
  known: (f: Facts) => boolean;
  thin: (answer: string, f: Facts) => boolean;
};
export type NextStep = { step: string; prompt: string; kind: "text" };

// ---------------------------------------------------------------- amounts

const ONES: Record<string, number> = {
  zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19,
};
const TENS: Record<string, number> = { twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90 };
const NUM_WORD = "zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand";
const MAX_USD = 10_000_000;

type Hit = { value: number; index: number; end: number };

const MONTH_RE =
  "(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|june?|july?|aug(?:ust)?|sep(?:t(?:ember)?)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\\.?";

/** Blank out date spans so "10/15/2025" or "October 2025" never reads as money. */
function maskDates(t: string): string {
  return t.replace(dateRegex(), (m) => " ".repeat(m.length));
}

function wordNumbers(t: string): Hit[] {
  const out: Hit[] = [];
  const re = new RegExp(`\\b(?:a|${NUM_WORD})(?:[\\s-]+(?:and|${NUM_WORD}))*\\b`, "gi");
  for (const m of t.matchAll(re)) {
    const ws = m[0].toLowerCase().split(/[\s-]+/).filter((w) => w !== "and");
    if (ws.length === 1 && ws[0] === "a") continue;
    let total = 0, cur = 0;
    for (const w of ws) {
      if (w === "a") cur = cur || 1;
      else if (w in ONES) cur += ONES[w];
      else if (w in TENS) cur += TENS[w];
      else if (w === "hundred") cur = (cur || 1) * 100;
      else if (w === "thousand") { total += (cur || 1) * 1000; cur = 0; }
    }
    out.push({ value: total + cur, index: m.index ?? 0, end: (m.index ?? 0) + m[0].length });
  }
  return out;
}

/** Every money figure in the text, in order. bare=false (story mode) needs a money marker. */
export function findAmounts(text: string, opts: { bare?: boolean } = {}): Hit[] {
  const bare = opts.bare ?? true;
  const t = maskDates(String(text ?? ""));
  const hits: Hit[] = [];
  const numRe = /(\$\s*)?(\d{1,3}(?:,\d{3})+|\d+)(\.\d{1,2})?(?:\s*(k|grand|thousand)\b|(k)(?![a-z]))?(\s*(?:dollars?|bucks|usd)\b)?/gi;
  for (const m of t.matchAll(numRe)) {
    const i = m.index ?? 0;
    if (i > 0 && /[\w./-]/.test(t[i - 1])) continue; // inside a word, unit number or date
    const dollar = !!m[1], mult = (m[4] ?? m[5])?.toLowerCase(), unit = !!m[6];
    const grouped = m[2].includes(",");
    if (!bare && !dollar && !mult && !unit) continue;
    if (!dollar && !mult && !unit && !grouped && !m[3] && /^(19|20)\d{2}$/.test(m[2])) continue; // a year
    let v = Number(m[2].replace(/,/g, "") + (m[3] ?? ""));
    if (mult) v *= 1000;
    if (Number.isFinite(v) && v >= 0 && v <= MAX_USD) hits.push({ value: Math.round(v * 100) / 100, index: i, end: i + m[0].length });
  }
  for (const w of wordNumbers(t)) {
    const after = t.slice(w.end, w.end + 12).toLowerCase();
    const marker = /^\s*(dollars?|bucks|grand)\b/.test(after);
    const v = /^\s*grand\b/.test(after) ? w.value * 1000 : w.value;
    const hasThousand = /thousand/i.test(t.slice(w.index, w.end));
    if (!bare && !marker && !hasThousand) continue;
    if (v > 0 && v <= MAX_USD) hits.push({ ...w, value: v });
  }
  return hits.sort((a, b) => a.index - b.index);
}

/** The first money figure in the text, or null. Never invents one. */
export function parseAmount(text: string, opts: { bare?: boolean } = {}): number | null {
  const h = findAmounts(text, opts);
  return h.length ? h[0].value : null;
}

// ---------------------------------------------------------------- dates

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function dateRegex(): RegExp {
  return new RegExp(
    "\\b(\\d{4})-(\\d{2})-(\\d{2})\\b" + // 1-3 ISO
    "|\\b(\\d{1,2})/(\\d{1,2})(?:/(\\d{4}|\\d{2}))?\\b" + // 4-6 m/d[/y]
    "|\\b" + MONTH_RE + "(?:\\s+(\\d{1,2})(?:st|nd|rd|th)?)?(?:,?\\s+(?:of\\s+)?((?:19|20)\\d{2}))?\\b", // 7-9
    "gi",
  );
}

function labelFor(before: string): string {
  const b = before.toLowerCase().slice(-40);
  if (/mov(ed|e|ing)[\s-]*out/.test(b)) return "moved out";
  if (/(asked|emailed|texted|called|wrote|sent|request|letter)/.test(b)) return "asked";
  if (/(lease|ended|end of)/.test(b)) return "lease ended";
  if (/mov(ed|e)[\s-]*in/.test(b)) return "moved in";
  return "date";
}

/** Dates in the visitor's words, each with the year only if the visitor gave one. */
export function parseDates(text: string): KeyDate[] {
  const raw = String(text ?? "").trim().slice(0, 300);
  const out: KeyDate[] = [];
  for (const m of raw.matchAll(dateRegex())) {
    let year: number | null = null;
    if (m[1]) {
      const mo = Number(m[2]), d = Number(m[3]);
      if (mo < 1 || mo > 12 || d < 1 || d > 31) continue;
      year = Number(m[1]);
    } else if (m[4]) {
      const mo = Number(m[4]), d = Number(m[5]);
      if (mo < 1 || mo > 12 || d < 1 || d > 31) continue;
      if (m[6]) year = m[6].length === 2 ? 2000 + Number(m[6]) : Number(m[6]);
    } else if (m[7]) {
      if (/^may$/i.test(m[7]) && !m[8] && !m[9]) continue; // "I may call them"
      if (m[8] && (Number(m[8]) < 1 || Number(m[8]) > 31)) continue;
      if (m[9]) year = Number(m[9]);
    } else continue;
    out.push({ what: labelFor(raw.slice(0, m.index ?? 0)), date: m[0].trim(), raw, year });
  }
  return out;
}

function niceDate(d: string): string {
  return d.replace(new RegExp("\\b" + MONTH_RE, "gi"), (w) => {
    const i = MONTHS.indexOf(w.toLowerCase().slice(0, 3));
    return i >= 0 ? MONTH_NAMES[i] : w;
  });
}

// ---------------------------------------------------------------- names

const ROLE_ONLY = /^(?:the |my |our |a )?(?:landlord|landlady|property manager|manager|owner|company|business|boss|employer|store|shop|insurer|insurance company|contractor|him|her|them|he|she|they|it)$/i;
const COMPLAINT = /\b(?:wont|won't|will not|wouldn't|refus\w*|owe[sd]?|pay|paid|give|gave|keep\w*|kept|return\w*|didn't|did not|doesn't|does not|isn't|stole|charged|ignor\w*|my|me|i|i'm|we|was|were|is|are|has|have|had)\b/i;

/** True only for something that reads like a name, never a complaint sentence or a bare role. */
export function isNameLike(text: string): boolean {
  const t = String(text ?? "").trim().replace(/\s+/g, " ");
  if (t.length < 2 || t.length > 60) return false;
  if (t.split(" ").length > 6) return false;
  if (/[?!]/.test(t)) return false;
  if (ROLE_ONLY.test(t)) return false;
  if (COMPLAINT.test(t)) return false;
  return /[a-z]/i.test(t);
}

// ---------------------------------------------------------------- extraction

const STATE_NAMES: Record<string, string> = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California", CO: "Colorado", CT: "Connecticut",
  DE: "Delaware", DC: "Washington, D.C.", FL: "Florida", GA: "Georgia", HI: "Hawaii", ID: "Idaho", IL: "Illinois",
  IN: "Indiana", IA: "Iowa", KS: "Kansas", KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland",
  MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi", MO: "Missouri", MT: "Montana",
  NE: "Nebraska", NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey", NM: "New Mexico", NY: "New York",
  NC: "North Carolina", ND: "North Dakota", OH: "Ohio", OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania",
  RI: "Rhode Island", SC: "South Carolina", SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah",
  VT: "Vermont", VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming",
};

const CATEGORY_RULES: [string, RegExp][] = [
  ["deposit", /\bdeposit\b/i],
  ["wages", /\b(wages?|paycheck|pay ?check|overtime|unpaid hours|final check)\b/i],
  ["repair", /\b(repairs?|leak\w*|mold|no heat)\b/i],
  ["insurance", /\b(insurance|insurer|claim denied|adjuster)\b/i],
  ["credit", /\b(credit report|credit bureau|debt collector)\b/i],
  ["refund", /\b(refund|money back)\b/i],
];
const ROLE_RULES: [string, RegExp][] = [
  ["landlord", /\b(landlord|landlady|property manager|property management|leasing office)\b/i],
  ["employer", /\b(boss|employer)\b/i],
  ["insurer", /\b(insurer|insurance company)\b/i],
];

/** Deterministic pass over the free-text story. Never guesses: unknown stays absent. */
export function rulesExtract(story: string, ctx: ExtractCtx = {}): Facts {
  const t = String(story ?? "");
  const f: Facts = {};
  if (ctx.state) f.state = ctx.state;
  else {
    for (const [code, name] of Object.entries(STATE_NAMES)) {
      if (code !== "DC" && new RegExp("\\b" + name + "\\b", "i").test(t)) { f.state = code; break; }
    }
  }
  f.category = ctx.category ?? CATEGORY_RULES.find(([, re]) => re.test(t))?.[0] ?? null;
  const role = ROLE_RULES.find(([, re]) => re.test(t));
  if (role) f.counterparty_role = role[0];
  const named = t.match(/\b(?:landlord|company|property manager|employer|boss)(?:\s+is|,)\s+([A-Z][\w&.'-]*(?:\s+[A-Z][\w&.'-]*){0,4})/);
  if (named) f.counterparty = named[1].replace(/[.,]$/, "");
  const amounts = findAmounts(t, { bare: false });
  const distinct = [...new Set(amounts.map((a) => a.value))];
  if (distinct.length === 1) f.amount_usd = distinct[0];
  else if (distinct.length > 1) {
    const near = amounts.find((a) => /\b(deposit|owe[sd]?|owed|wages?|refund)\b/i.test(t.slice(Math.max(0, a.index - 25), a.end + 15)));
    if (near) f.amount_usd = near.value; // ambiguous with no anchor: left for the amount step
  }
  const dates = parseDates(t);
  if (dates.length) f.key_dates = dates;
  return f;
}

/** Applied to any pass's output: a non-name counterparty is dropped, a non-finite amount too. */
export function guardFacts(f: Facts): Facts {
  const g: Facts = { ...f };
  if (g.counterparty != null && !isNameLike(g.counterparty)) g.counterparty = null;
  if (g.amount_usd != null && !(Number.isFinite(g.amount_usd) && g.amount_usd >= 0 && g.amount_usd <= MAX_USD)) g.amount_usd = null;
  if (g.key_dates) g.key_dates = g.key_dates.filter((k) => k && typeof k.date === "string" && (k.year === null || Number.isInteger(k.year)));
  return g;
}

/** Fill gaps in base from add; a known fact is never overwritten. key_dates merge by `what`. */
export function mergeFacts(base: Facts, add: Facts): Facts {
  const out: Facts = { ...base };
  for (const [k, v] of Object.entries(add) as [keyof Facts, unknown][]) {
    if (k === "key_dates") continue;
    if (v != null && (out[k] == null || out[k] === "")) (out as Record<string, unknown>)[k] = v;
  }
  if (add.key_dates?.length) {
    const have = [...(out.key_dates ?? [])];
    for (const d of add.key_dates) {
      const same = have.findIndex((h) => h.what === d.what && d.what !== "date");
      if (same < 0) have.push(d);
      else if (have[same].year == null && d.year != null) have[same] = d;
    }
    out.key_dates = have;
  }
  return out;
}

// ---------------------------------------------------------------- steps

const words = (s: string) => String(s ?? "").trim().split(/\s+/).filter(Boolean).length;
const dateWith = (f: Facts, what: string) => (f.key_dates ?? []).find((k) => k.what === what);
const askedDated = (f: Facts) => !!f.asked && (!!dateWith(f, "asked") || parseDates(f.asked).length > 0);
const textStep = (id: "deductions" | "want" | "tried", prompt: string, more: string): StepDef => ({
  id, prompt: () => prompt, more: () => more,
  known: (f) => f[id] != null && f[id] !== "",
  thin: (a) => words(a) <= 2,
});

const COUNTERPARTY: StepDef = {
  id: "counterparty",
  prompt: (f) => (f.counterparty_role === "landlord"
    ? "What is your landlord's name, or the name of the company that manages the place?"
    : "Who is this with? Their name or the business name."),
  more: () => "I need a name to address the letter to. What is the person's or company's name?",
  known: (f) => !!f.counterparty && isNameLike(f.counterparty),
  thin: (_a, f) => !(f.counterparty && isNameLike(f.counterparty)),
};
const AMOUNT: StepDef = {
  id: "amount",
  prompt: (f) => (f.category === "deposit" ? "How much was the deposit?" : "How much money is involved?"),
  more: () => "Roughly how much, in dollars? An estimate is fine.",
  known: (f) => f.amount_usd != null,
  thin: (_a, f) => f.amount_usd == null,
};

export const DEPOSIT_STEPS: StepDef[] = [
  COUNTERPARTY,
  {
    id: "address",
    prompt: (f) => `What is ${f.counterparty ? f.counterparty + "'s" : "their"} mailing address?`,
    more: () => "Can you add the street number, city and zip code?",
    known: (f) => !!f.address && /\d/.test(f.address),
    thin: (a) => !/\d/.test(a) || words(a) <= 2,
  },
  {
    id: "moveout",
    prompt: (f) => {
      const d = dateWith(f, "moved out");
      return d && d.year == null ? `You moved out in ${niceDate(d.date)}. What year was that?` : "When did you move out? A month and year is fine.";
    },
    more: () => "What month and year did you move out?",
    known: (f) => dateWith(f, "moved out")?.year != null,
    thin: (_a, f) => dateWith(f, "moved out")?.year == null,
  },
  AMOUNT,
  {
    id: "asked",
    prompt: () => "When did you ask for the deposit back, and how (email, text, letter, in person)?",
    more: () => "When did you ask, roughly? A month and year is fine.",
    known: (f) => askedDated(f),
    thin: (a, f) => words(a) <= 2 || !askedDated(f),
  },
  {
    id: "forwarding",
    prompt: () => "Did you give them a forwarding address in writing?",
    more: () => "Was that yes or no, and was it in writing?",
    known: (f) => !!f.forwarding,
    thin: (a) => words(a) === 0,
  },
  textStep("deductions", "Did they say why they kept any of it, or send a list of deductions?", "What did they say the deductions were for, if anything?"),
  textStep("want", "What do you want them to do?", "What exactly, and by when? For example, return the full deposit within 14 days."),
];

const STORY_STEP: StepDef = {
  id: "story",
  prompt: () => "What happened? Tell it in your own words.",
  more: () => "Can you say a bit more about what happened?",
  known: () => false,
  thin: (a) => words(a) <= 4,
};

const allDated = (f: Facts) => (f.key_dates ?? []).length > 0 && (f.key_dates ?? []).every((k) => k.year != null);
export const GENERIC_STEPS: StepDef[] = [
  COUNTERPARTY,
  AMOUNT,
  {
    id: "dates",
    prompt: (f) => {
      const d = (f.key_dates ?? []).find((k) => k.year == null);
      return d ? `What year was ${niceDate(d.date)}?` : "What are the key dates? A month and year is fine.";
    },
    more: () => "What month and year was that?",
    known: allDated,
    thin: (_a, f) => !allDated(f),
  },
  textStep("want", "What do you want them to do?", "What exactly, and by when?"),
  textStep("tried", "What have you already tried?", "Who did you contact, how, and roughly when?"),
];

export function stepsFor(category: string | null | undefined): StepDef[] {
  return [STORY_STEP, ...(category === "deposit" ? DEPOSIT_STEPS : GENERIC_STEPS)];
}

const NOTHING_TO_FIX = /^(?:yes|yep|yeah|y|ok|okay|correct|right|good|fine|all good|looks (?:good|right|fine)|that'?s (?:right|correct|all)|no|nope|none|nothing|no changes?)\b/i;

/** Next question: skip known answers, at most one `<step>_more` per step, then confirm, then submit. */
export function planNext(facts: Facts, answered: Answers, category: string | null | undefined): NextStep | "confirm" | "submit" {
  for (const s of stepsFor(category)) {
    const a = answered[s.id];
    if (a === undefined) {
      if (s.known(facts)) continue;
      return { step: s.id, prompt: s.prompt(facts), kind: "text" };
    }
    if (answered[s.id + "_more"] === undefined && s.thin(a, facts)) {
      return { step: s.id + "_more", prompt: s.more(facts), kind: "text" };
    }
  }
  const c = answered.confirm;
  if (c === undefined) return "confirm";
  if (!NOTHING_TO_FIX.test(c.trim()) && answered.confirm_more === undefined) {
    return { step: "confirm_more", prompt: "Thanks, noted. Anything else to fix?", kind: "text" };
  }
  return "submit";
}

const appendText = (old: string | null | undefined, t: string) => (old ? `${old}. ${t}` : t);

/** Folds one answer into the facts. Pure; Part B calls it once per turn. */
export function applyAnswer(facts: Facts, step: string, text: string): Facts {
  const t = String(text ?? "").trim();
  const base = step.replace(/_more$/, "");
  let f: Facts = { ...facts, key_dates: facts.key_dates ? [...facts.key_dates] : undefined };
  const yearOnly = (what: string | null) => {
    const y = t.match(/\b((?:19|20)\d{2})\b/);
    if (!y) return;
    f.key_dates = (f.key_dates ?? []).map((k) =>
      k.year == null && (what == null || k.what === what) ? { ...k, year: Number(y[1]), raw: `${k.raw} | ${t}` } : k);
  };
  const dated = (what: string) => {
    const ds = parseDates(t).map((d) => ({ ...d, what }));
    if (ds.length) f = mergeFacts(f, { key_dates: [ds[0]] });
    else yearOnly(what);
  };
  switch (base) {
    case "story":
      f = mergeFacts(f, guardFacts(rulesExtract(t, { state: f.state, category: f.category })));
      break;
    case "counterparty":
      if (isNameLike(t)) f.counterparty = t;
      break;
    case "address":
      f.address = step === base ? t : appendText(f.address, t);
      break;
    case "amount": {
      const v = parseAmount(t, { bare: true });
      if (v != null) f.amount_usd = v;
      break;
    }
    case "moveout":
      dated("moved out");
      break;
    case "asked":
      f.asked = appendText(f.asked, t);
      dated("asked");
      break;
    case "dates": {
      const ds = parseDates(t);
      if (ds.length) f = mergeFacts(f, { key_dates: ds });
      else yearOnly(null);
      break;
    }
    case "forwarding": case "deductions": case "want": case "tried":
      f[base] = appendText(f[base], t);
      break;
    case "confirm": {
      // A correction re-reads only the amount; other fixes reach the letter as the visitor's words.
      const v = parseAmount(t, { bare: false });
      if (v != null) f.amount_usd = v;
      break;
    }
  }
  return f;
}

// ---------------------------------------------------------------- confirm

const money = (n: number) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 });

/** One plain, correctable line: no ids, codes or all-caps. */
export function confirmLine(f: Facts): string {
  const parts: string[] = [];
  if (f.counterparty) parts.push(f.counterparty);
  else if (f.counterparty_role) parts.push(`your ${f.counterparty_role}`);
  if (f.state && STATE_NAMES[f.state]) parts.push(STATE_NAMES[f.state]);
  if (f.amount_usd != null) parts.push(f.category === "deposit" ? `a ${money(f.amount_usd)} deposit` : `${money(f.amount_usd)} at stake`);
  for (const d of f.key_dates ?? []) {
    const shown = niceDate(d.date) + (d.year != null && !d.date.includes(String(d.year)) ? ` ${d.year}` : "");
    const on = /\d/.test(d.date.replace(/\b(19|20)\d{2}\b/, "")) ? "on" : "in";
    parts.push(d.what === "date" ? shown : `${d.what} ${on} ${shown}`);
  }
  if (!parts.length) return "Before I write, is there anything you want to add or fix?";
  return `So far: ${parts.join(", ")}. Fix anything that's wrong.`;
}
