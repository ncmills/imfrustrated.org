// Front-door guard (2026-11-24): the home page offers exactly two ways in
// (chatbot, collection); the old email-a-draft form is not an entry point.
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
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
  assert.match(header, /href="\/letter-chat"/);
  assert.match(header, /Write my letter/);
  assert.ok(!/Get a draft letter/.test(src), "old CTA text still present");
});

test("no page links to the removed #contact entry point", () => {
  for (const f of ["src/app/letters/page.tsx", "src/app/faq/page.tsx", "src/components/ClientSections.tsx", "src/app/blog/[slug]/page.tsx"]) {
    assert.ok(!/#contact/.test(read(f)), f);
  }
});
