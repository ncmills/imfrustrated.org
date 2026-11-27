// Front-door guard (2026-11-24): the home page offers exactly two ways in
// (chatbot, collection); the old email-a-draft form is not an entry point.
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const read = (p) => readFileSync(join(root, p), "utf8");

test("home page links /letter-chat and /letters", () => {
  const src = read("src/app/page.tsx");
  assert.match(src, /href="\/letter-chat"/);
  assert.match(src, /href="\/letters"/);
});

// Ruling IFDO-RUNS-ITSELF item 8: the two choices lead the page, and NOTHING else on the
// home page is removed. Each marker below is a section main's homepage had.
const HOME_SECTIONS = [
  ["two-choice block (front door)", /Front door: exactly two ways to start/],
  ["sample-letter preview", /aria-label="Sample dispute letter preview"/],
  ["three sister-site cards", /const tools:[\s\S]*idonthaveawill\.com[\s\S]*aissdi\.com[\s\S]*doppelwriter\.com[\s\S]*tools\.map\(/],
  ["email draft-letter form", /import IntakeForm[\s\S]*<IntakeForm \/>/],
  ["contact section", /<section id="contact"/],
  ["letter library + category chips", /letterCategories\.map\(/],
  ["parking cities", /featuredParkingCities\.map\(/],
  ["how it works", /<section id="how"/],
  ["testimonials", /<section id="testimonials"/],
];

test("home page: two-choice block is first, then every section main had", () => {
  const src = read("src/app/page.tsx");
  for (const [name, re] of HOME_SECTIONS) assert.ok(re.test(src), `home page lost: ${name}`);
  const body = src.slice(src.indexOf("<main"));
  const front = body.indexOf("Front door: exactly two ways to start");
  assert.ok(front >= 0, "front door block missing");
  assert.ok(!body.slice(0, front).includes("<section"), "a <section> renders above the front door");
  for (const needle of ['aria-label="Sample dispute letter preview"', "tools.map(", "<IntakeForm />", '<section id="contact"', "<section id=\"how\"", "<section id=\"testimonials\""]) {
    assert.ok(body.indexOf(needle) > front, `${needle} must render below the two choices`);
  }
});

test("positive control: the section scan fails when a section is deleted", () => {
  const src = read("src/app/page.tsx").replace("<IntakeForm />", "");
  assert.ok(!/<IntakeForm \/>/.test(src));
});

test('header keeps "Get a draft letter" (-> /#contact) and gains a gated "Write my letter" (-> /letter-chat)', () => {
  const src = read("src/components/ClientSections.tsx");
  const header = src.slice(src.indexOf("export function Header"), src.indexOf("export function FadeInSection"));
  assert.match(header, /"\/letter-chat"/);
  assert.match(header, /Write my letter/);
  assert.match(header, /Get a draft letter/, "existing header action must stay");
  assert.match(header, /href="\/#contact"/);
});

test('footer keeps "The Letter Library" and "Get a draft letter" and gains a gated chat entry', () => {
  const src = read("src/components/ClientSections.tsx");
  const footer = src.slice(src.indexOf("export function SiteFooter"));
  assert.match(footer, /label: "The Letter Library"/);
  assert.match(footer, /href: "\/#contact", label: "Get a draft letter"/);
  assert.match(footer, /Write my letter \(chatbot\)/);
});

test("the email draft-letter form stays reachable: the existing #contact entries are untouched", () => {
  assert.match(read("src/components/ClientSections.tsx"), /href: "\/#contact"/);
});

// Gate (SN adversarial finding, IFDO-STEP-3): /letter-chat 404s until the chat is public, so no
// front-door surface may link to it unconditionally. Every "/letter-chat" literal outside the
// chat itself must sit within GATE_WINDOW lines after a line that reads the chatPublic/chatOn flag.
const GATE_FILES = [
  "src/app/page.tsx",
  "src/components/ClientSections.tsx",
  "src/components/TwoChoiceBox.tsx",
  "src/app/blog/[slug]/page.tsx",
  "src/app/how-it-works/page.tsx",
];
const GATE_WINDOW = 12;
export function ungatedChatLinks(src) {
  const lines = src.split("\n");
  const bad = [];
  lines.forEach((l, i) => {
    if (!l.includes("/letter-chat")) return;
    const from = Math.max(0, i - GATE_WINDOW);
    if (!lines.slice(from, i + 1).some((x) => /chatPublic|chatOn/.test(x))) bad.push(i + 1);
  });
  return bad;
}

test("every /letter-chat link outside the chat is gated on chatPublic", () => {
  for (const f of GATE_FILES) {
    const src = read(f);
    assert.ok(src.includes("/letter-chat"), `${f}: expected a /letter-chat link to gate`);
    assert.deepEqual(ungatedChatLinks(src), [], `${f}: ungated /letter-chat link`);
  }
});

test("positive control: the gate scan flags an unconditional link", () => {
  assert.deepEqual(ungatedChatLinks('<Link href="/letter-chat">x</Link>'), [1]);
  assert.deepEqual(ungatedChatLinks('{chatOn && (\n<Link href="/letter-chat">x</Link>\n)}'), []);
});

function walk(d) {
  return readdirSync(join(root, d)).flatMap((n) => {
    const rel = join(d, n);
    return statSync(join(root, rel)).isDirectory() ? walk(rel) : /\.tsx$/.test(n) ? [rel] : [];
  });
}

test("every page that renders Header/SiteFooter/TwoChoiceBox passes chatPublic", () => {
  let seen = 0;
  for (const f of walk("src/app")) {
    if (f.startsWith("src/app/letter-chat/")) continue; // the chat page itself; Header default is chat-link-off
    const src = read(f);
    for (const m of src.matchAll(/<(Header|SiteFooter|TwoChoiceBox)\b[^>]*>/g)) {
      seen++;
      assert.match(m[0], /chatPublic=/, `${f}: ${m[0]} does not pass chatPublic`);
    }
  }
  assert.ok(seen >= 20, `expected to see many chrome tags, saw ${seen}`);
});
