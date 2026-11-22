import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(join(root, p), "utf8");

const BANNED = ["<form", "<button", 'href="http', "stripe", "paypal", "venmo", "give now", "donate now"];
const findBanned = (text) => BANNED.filter((b) => text.toLowerCase().includes(b));

test("positive control: matcher finds every banned donate-page string", () => {
  for (const b of BANNED) {
    assert.deepEqual(findBanned(`x ${b.toUpperCase()} y`), [b], `matcher missed: ${b}`);
  }
  assert.deepEqual(findBanned("<p>plain</p>"), []);
});

test("donate page has no way to give money", () => {
  assert.deepEqual(findBanned(read("src/app/donate/page.tsx")), []);
});

test("donate page carries the not-open line", () => {
  assert.ok(read("src/app/donate/page.tsx").includes("Donations are not open yet."));
});

test("About lists the three board members with titles", () => {
  const src = read("src/app/about/page.tsx");
  for (const [n, t] of [
    ["Nick Mills", "President and Director"],
    ["Yosef Schaffel", "Director"],
    ["Varsha Bhargava", "Director"],
  ]) {
    assert.ok(src.includes(`name: "${n}", title: "${t}"`), `missing ${n} / ${t}`);
  }
});

test("impact.json parses and every item has label/value/source", () => {
  const j = JSON.parse(read("src/data/impact.json"));
  assert.match(j.asOf, /^\d{4}-\d{2}-\d{2}$/);
  assert.ok(Array.isArray(j.items) && j.items.length > 0);
  for (const it of j.items) for (const k of ["label", "value", "source"]) {
    assert.ok(typeof it[k] === "string" && it[k].length > 0, `item missing ${k}`);
  }
});
