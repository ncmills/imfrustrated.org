import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(join(root, p), "utf8");

/* Ruling IFDO-IMPACT-PAGE (2026-11-22): no donations language anywhere on the site.
 * Whole words only, so letter text such as "the vehicle was ... donated" is not a hit. */
const DONATION = /\b(donate|donates|donating|donation|donations|donor|donors|give now)\b|\/donate\b/i;
const TEXT_EXT = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".json", ".md", ".mdx", ".txt", ".html", ".xml"]);
// Letter templates are the visitor's own letters (a landlord may "donate" abandoned property,
// a car may be "donated"): that is letter content, not the site asking for donations.
const LETTER_DIRS = [join(root, "src/data/letters"), join(root, "src/data/parking")];
function walk(dir, out = []) {
  if (LETTER_DIRS.includes(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (TEXT_EXT.has(extname(name).toLowerCase())) out.push(p);
  }
  return out;
}

const MONEY = ["<form", "<button", 'href="http', "stripe", "paypal", "venmo"];
const findMoney = (text) => MONEY.filter((b) => text.toLowerCase().includes(b));

test("positive control: donation matcher finds each form, skips 'donated'", () => {
  for (const s of ["Donate", "donations are not open", "a donor", 'href="/donate"', "Give now", "Donating"]) {
    assert.ok(DONATION.test(s), `matcher missed: ${s}`);
  }
  assert.ok(!DONATION.test("the vehicle was sold, gifted, donated, or leased"));
});

test("no donations language in src/ or public/", () => {
  const hits = [];
  for (const f of [...walk(join(root, "src")), ...walk(join(root, "public"))]) {
    readFileSync(f, "utf8").split("\n").forEach((l, i) => {
      if (DONATION.test(l)) hits.push(`${f.slice(root.length + 1)}:${i + 1}: ${l.trim().slice(0, 120)}`);
    });
  }
  assert.deepEqual(hits, []);
});

test("positive control: the walk still reads site pages", () => {
  const files = walk(join(root, "src")).map((f) => f.slice(root.length + 1));
  assert.ok(files.includes("src/app/about/page.tsx") && files.includes("src/components/ClientSections.tsx"));
  assert.ok(!files.some((f) => f.startsWith("src/data/letters/")));
});

test("no /donate route", () => {
  assert.ok(!existsSync(join(root, "src/app/donate")));
});

test("impact page: says dozens, no count, no way to give money", () => {
  const src = read("src/app/impact/page.tsx");
  assert.ok(src.includes("Dozens of people helped so far."));
  assert.ok(!/source:/i.test(src), "no source line");
  assert.deepEqual(findMoney(src), []);
  assert.ok(src.includes("testimonials.map"));
});

test("testimonials: none mention attorneys, lawyers or advice", () => {
  const src = read("src/data/testimonials.ts");
  const body = src.slice(src.indexOf("= ["));
  assert.ok(/text: "/.test(body), "at least one testimonial");
  assert.ok(!/attorney|lawyer|advice/i.test(body));
});

test("About, header and footer no longer link to /impact (front-door PR); sitemap drops it", () => {
  for (const f of ["src/app/about/page.tsx", "src/components/ClientSections.tsx"]) {
    assert.ok(!/href="\/impact"/.test(read(f)), f);
  }
  assert.ok(!/\/impact/.test(read("src/app/sitemap.ts")), "sitemap");
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
