import { test } from "node:test";
import assert from "node:assert/strict";
import {
  parseAmount, parseDates, isNameLike, rulesExtract, guardFacts, planNext, confirmLine, applyAnswer,
  DEPOSIT_STEPS, type Facts, type Answers, type ExtractPass,
} from "../../src/lib/imf-chat/intake";

// SYNTHETIC text only (written for these tests), shaped like the first real run.
const STORY = "my landlord wont pay my 3k deposit back, I moved out in october";

type Step = { step: string; prompt: string };
const stepOf = (n: ReturnType<typeof planNext>): string => (typeof n === "string" ? n : n.step);

/** Drives planNext/applyAnswer the way Part B will: ask, answer, fold, repeat. */
function replay(category: string, reply: (step: string) => string, facts0: Facts = { state: "AZ", category }) {
  let facts: Facts = { ...facts0 };
  const answers: Answers = {};
  const asked: Step[] = [];
  for (let i = 0; i < 40; i++) {
    const n = planNext(facts, answers, category);
    if (n === "submit") return { asked, facts, done: true };
    const s: Step = n === "confirm" ? { step: "confirm", prompt: confirmLine(facts) } : n;
    asked.push(s);
    const text = reply(s.step);
    answers[s.step] = text;
    facts = applyAnswer(facts, s.step, text);
  }
  return { asked, facts, done: false };
}

// ---------- F3: amount parser ----------
test("F3: parseAmount reads every money shape from the run", () => {
  const cases: [string, number][] = [
    ["3k", 3000], ["3K", 3000], ["3,000", 3000], ["$3000", 3000], ["$3,000.50", 3000.5],
    ["three thousand", 3000], ["3 grand", 3000], ["about 3k", 3000], ["he owes me 3k", 3000],
    ["$1.5k", 1500], ["two thousand five hundred dollars", 2500], ["1200", 1200],
  ];
  for (const [t, want] of cases) assert.equal(parseAmount(t), want, t);
});

test("F3: parseAmount never invents a number", () => {
  for (const t of ["", "Pay me", "I moved out in october", "a lot", "no idea", "my landlord wont pay"]) {
    assert.equal(parseAmount(t), null, t);
  }
  // In a story (not the amount step) a bare number, a year or a date is not money.
  for (const t of ["I lived there 3 years", "moved out 10/15/2025", "since 2024", "unit 12"]) {
    assert.equal(parseAmount(t, { bare: false }), null, t);
  }
});

test("F3: a figure in the story fills amount_usd and the amount is never asked", () => {
  const f = rulesExtract(STORY, { state: "AZ" });
  assert.equal(f.amount_usd, 3000);
  const r = replay("deposit", syntheticDeposit, { state: "AZ" });
  assert.ok(r.done);
  assert.ok(!r.asked.some((s) => s.step.startsWith("amount")), r.asked.map((s) => s.step).join(","));
  assert.equal(r.facts.amount_usd, 3000);
});

// ---------- F2: counterparty guard ----------
test("F2: a complaint sentence is never stored as the counterparty", () => {
  for (const t of [
    "My landlord wont pay my deposit back", "he won't give me my money", "landlord", "my landlord",
    "They kept my deposit and refuse to answer", "the property manager",
    "A very long sentence that goes on and on about what happened to me last year",
  ]) assert.equal(isNameLike(t), false, t);
  for (const t of ["Acme Property Management", "Sunrise Apartments LLC", "John Smith", "Desert Rentals, Inc."]) {
    assert.equal(isNameLike(t), true, t);
  }
  const f = applyAnswer({ category: "deposit" }, "counterparty", "My landlord wont pay my deposit back");
  assert.equal(f.counterparty ?? null, null);
  const n = planNext(f, { story: STORY, counterparty: "My landlord wont pay my deposit back" }, "deposit");
  assert.equal(stepOf(n), "counterparty_more"); // asks for the name instead
});

test("F2: guardFacts strips a sentence any extract pass puts in counterparty", async () => {
  const sloppy: ExtractPass = async () => ({ counterparty: "my landlord wont pay", amount_usd: 3000 });
  const g = guardFacts(await sloppy("x", {}));
  assert.equal(g.counterparty ?? null, null);
  assert.equal(g.amount_usd, 3000);
  assert.equal(guardFacts({ counterparty: "Acme Rentals" }).counterparty, "Acme Rentals");
});

// ---------- F4: dates carry a year; deposit facts are asked ----------
test("F4: parseDates keeps raw text and never guesses a year", () => {
  const d = parseDates("I moved out in october");
  assert.equal(d.length, 1);
  assert.equal(d[0].what, "moved out");
  assert.equal(d[0].year, null);
  assert.match(d[0].date, /october/i);
  assert.equal(d[0].raw, "I moved out in october");
  const y = parseDates("I asked for it back on November 3, 2025");
  assert.equal(y[0].year, 2025);
  assert.equal(y[0].what, "asked");
  assert.equal(parseDates("10/15/2025")[0].year, 2025);
  assert.equal(parseDates("10/15")[0].year, null);
  assert.equal(parseDates("I may call them").length, 0);
});

test("F4: a date without a year makes the chat ask for the year", () => {
  const f = guardFacts(rulesExtract(STORY, { state: "AZ" }));
  const ans: Answers = { story: STORY, counterparty: "Desert Rentals LLC", address: "12 Palm Rd, Tempe, AZ 85281" };
  const f2 = applyAnswer(applyAnswer(f, "counterparty", ans.counterparty), "address", ans.address);
  const n = planNext(f2, ans, "deposit") as Step;
  assert.equal(n.step, "moveout");
  assert.match(n.prompt, /year/i);
  const f3 = applyAnswer(f2, "moveout", "2025");
  const mo = (f3.key_dates ?? []).find((k) => k.what === "moved out");
  assert.equal(mo?.year, 2025);
  assert.match(mo?.raw ?? "", /october/i);
});

test("F4: the deposit flow asks move-out, date asked and forwarding address", () => {
  const ids = DEPOSIT_STEPS.map((s) => s.id);
  assert.deepEqual(ids, ["counterparty", "address", "moveout", "amount", "asked", "forwarding", "deductions", "want"]);
  for (const s of DEPOSIT_STEPS) {
    assert.ok(s.prompt({}).length > 5, s.id);
    assert.doesNotMatch(s.prompt({}), /\b[A-Z]{2,}\b|_/, s.id);
  }
  const r = replay("deposit", syntheticDeposit, { state: "AZ" });
  const steps = r.asked.map((s) => s.step);
  for (const want of ["moveout", "asked", "forwarding", "deductions", "address"]) assert.ok(steps.includes(want), want);
});

// ---------- F1: no step ignores an earlier answer ----------
test("F1: planNext skips every step whose answer is already known", () => {
  const known: Facts = {
    state: "AZ", category: "deposit", counterparty: "Desert Rentals LLC", address: "12 Palm Rd, Tempe, AZ 85281",
    amount_usd: 3000, key_dates: [{ what: "moved out", date: "October 2025", raw: "October 2025", year: 2025 }],
    asked: "emailed them November 3, 2025", forwarding: "yes", deductions: "none", want: "return the full deposit",
  };
  assert.equal(planNext(known, { story: STORY }, "deposit"), "confirm");
  assert.equal(planNext(known, { story: STORY, confirm: "yes" }, "deposit"), "submit");
  // amount alone known: everything but amount is asked
  const n = planNext({ amount_usd: 3000 }, { story: STORY }, "deposit");
  assert.equal(stepOf(n), "counterparty");
});

test("F1: other categories keep the generic steps but skip known ones", () => {
  const n0 = planNext({}, {}, "wages");
  assert.equal(stepOf(n0), "story");
  const f = guardFacts(rulesExtract("my boss owes me $800 in wages from March 2025", { category: "wages" }));
  assert.equal(f.amount_usd, 800);
  const r = replay("wages", (s) => ({
    story: "x", counterparty: "Blue Cafe LLC", dates: "March 2025", want: "pay my final check this week",
    tried: "I emailed the owner twice in April", confirm: "yes",
  } as Record<string, string>)[s] ?? "unused", { ...f, category: "wages" });
  const steps = r.asked.map((s) => s.step);
  assert.ok(r.done);
  assert.ok(!steps.includes("amount"), steps.join(","));
  assert.ok(!steps.includes("dates"), steps.join(","));
  assert.ok(steps.includes("tried"));
});

// ---------- F5: thin answers get exactly one follow-up ----------
test("F5: a one- or two-word answer gets exactly one follow-up", () => {
  const base: Facts = { counterparty: "Desert Rentals LLC", address: "12 Palm Rd, Tempe, AZ 85281", amount_usd: 3000,
    key_dates: [{ what: "moved out", date: "October 2025", raw: "x", year: 2025 }],
    asked: "emailed November 3, 2025", forwarding: "yes", deductions: "none" };
  const a1: Answers = { story: STORY, want: "Pay me" };
  const f1 = applyAnswer(base, "want", "Pay me");
  assert.equal(stepOf(planNext(f1, a1, "deposit")), "want_more");
  const a2: Answers = { ...a1, want_more: "ok" };
  const f2 = applyAnswer(f1, "want_more", "ok");
  assert.equal(planNext(f2, a2, "deposit"), "confirm"); // never a second follow-up
  // a full answer gets none
  const f3 = applyAnswer(base, "want", "return my full deposit within 14 days");
  assert.equal(planNext(f3, { story: STORY, want: "return my full deposit within 14 days" }, "deposit"), "confirm");
});

test("F5: 'Emailed and called' with no date gets one follow-up asking when", () => {
  const base: Facts = { counterparty: "Desert Rentals LLC", address: "12 Palm Rd, Tempe, AZ 85281", amount_usd: 3000,
    key_dates: [{ what: "moved out", date: "October 2025", raw: "x", year: 2025 }] };
  const f = applyAnswer(base, "asked", "Emailed and called");
  const n = planNext(f, { story: STORY, asked: "Emailed and called" }, "deposit") as Step;
  assert.equal(n.step, "asked_more");
  assert.match(n.prompt, /when/i);
});

test("confirm: one correctable plain line, then one confirm_more at most", () => {
  const f = guardFacts(rulesExtract(STORY, { state: "AZ" }));
  const line = confirmLine(f);
  assert.equal(line, "So far: your landlord, Arizona, a $3,000 deposit, moved out in October. Fix anything that's wrong.");
  assert.doesNotMatch(line, /\b[A-Z]{2,}\b|_|USD|null|undefined/);
  const done: Facts = { ...f, counterparty: "Desert Rentals LLC", address: "12 Palm Rd, Tempe, AZ 85281",
    key_dates: [{ what: "moved out", date: "october", raw: "x", year: 2025 }], asked: "emailed November 3, 2025",
    forwarding: "yes", deductions: "none", want: "return the full deposit" };
  assert.equal(stepOf(planNext(done, { story: STORY, confirm: "the amount is 3,200" }, "deposit")), "confirm_more");
  assert.equal(planNext(done, { story: STORY, confirm: "the amount is 3,200", confirm_more: "that's all" }, "deposit"), "submit");
  assert.equal(applyAnswer(done, "confirm", "the amount is $3,200").amount_usd, 3200);
});

// Synthetic answers for the deposit replay (Nick's shape: "Pay me", "Emailed and called").
function syntheticDeposit(step: string): string {
  const a: Record<string, string> = {
    story: STORY,
    counterparty: "Desert Rentals LLC",
    address: "12 Palm Rd, Tempe, AZ 85281",
    moveout: "2025",
    asked: "Emailed and called",
    asked_more: "November 3, 2025",
    forwarding: "Yes, I gave them my new address",
    deductions: "They said cleaning but sent no list",
    want: "Pay me",
    want_more: "Return the whole $3,000 within two weeks",
    confirm: "yes",
  };
  return a[step] ?? `UNEXPECTED STEP ${step}`;
}

test("replay: Nick's intake shape, questions in order, amount never asked", () => {
  const r = replay("deposit", syntheticDeposit, { state: "AZ" });
  assert.ok(r.done);
  const steps = r.asked.map((s) => s.step);
  assert.deepEqual(steps, [
    "story", "counterparty", "address", "moveout", "asked", "asked_more", "forwarding", "deductions", "want", "want_more", "confirm",
  ]);
  if (process.env.INTAKE_REPLAY) for (const s of r.asked) console.log(`${s.step}\t${s.prompt}`);
});
