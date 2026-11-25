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

test("home page does not import or render IntakeForm", () => {
  const src = read("src/app/page.tsx");
  assert.ok(!/IntakeForm/.test(src), "IntakeForm still referenced on the home page");
  assert.ok(!/id="contact"/.test(src), "#contact section is back on the home page");
});

test('header CTA text is "Write my letter" and points at /letter-chat', () => {
  const src = read("src/components/ClientSections.tsx");
  const header = src.slice(src.indexOf("export function Header"), src.indexOf("export function FadeInSection"));
  assert.match(header, /"\/letter-chat"/);
  assert.match(header, /Write my letter/);
  assert.ok(!/Get a draft letter/.test(src), "old CTA text still present");
});

test("no page links to the removed #contact entry point", () => {
  for (const f of ["src/app/letters/page.tsx", "src/app/faq/page.tsx", "src/components/ClientSections.tsx", "src/app/blog/[slug]/page.tsx"]) {
    assert.ok(!/#contact/.test(read(f)), f);
  }
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
