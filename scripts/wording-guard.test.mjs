import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const PHRASES = [
  "volunteer attorney",
  "written by attorneys",
  "attorney-written",
  "friends who are also lawyers",
  "IMFRUSTRATEDORG INC",
  "501(c)",
  "tax-exempt",
  "tax deductible",
  "tax-deductible",
];
// EXEMPT (2026-11-22, CONTROL ruling SWEEP-1122-1335): these two strings are outside the
// 58 rows Nick approved. They stay until Nick approves replacement wording (leftovers table),
// then the entry is removed. Each entry must still match, so a stale exemption fails the test.
const EXEMPT = [
  { file: "src/app/free-tools/page.tsx", phrase: "volunteer attorney", contains: "volunteer attorney." }, // line wraps; preceding line: "for a free conversation with a"
  { file: "src/app/terms/page.tsx", phrase: "volunteer attorney", contains: "volunteer attorney intake" },
];
const isExempt = (file, h) => EXEMPT.some((e) => e.file === file && e.phrase === h.phrase && h.full.toLowerCase().includes(e.contains));

const TEXT_EXT = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".json", ".md", ".mdx", ".txt", ".html", ".css", ".xml", ".svg", ".webmanifest"]);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (TEXT_EXT.has(extname(name).toLowerCase())) out.push(p);
  }
  return out;
}

function findHits(text) {
  const hits = [];
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    const low = line.toLowerCase();
    for (const ph of PHRASES) if (low.includes(ph.toLowerCase())) hits.push({ line: i + 1, phrase: ph, text: line.trim().slice(0, 160), full: line });
  });
  return hits;
}

test("positive control: matcher finds every banned phrase", () => {
  const fixture = PHRASES.map((p) => `x ${p.toUpperCase()} y`).join("\n");
  const hits = findHits(fixture);
  for (const ph of PHRASES) assert.ok(hits.some((h) => h.phrase === ph), `matcher missed: ${ph}`);
});

test("walk is non-empty", () => {
  const files = [...walk(join(root, "src")), ...walk(join(root, "public"))];
  assert.ok(files.length > 20, `only ${files.length} files walked`);
});

test("no banned phrases in src/ or public/", () => {
  const files = [...walk(join(root, "src")), ...walk(join(root, "public"))];
  const found = [];
  for (const f of files) for (const h of findHits(readFileSync(f, "utf8"))) if (!isExempt(f.slice(root.length + 1), h)) found.push(`${f.slice(root.length + 1)}:${h.line} [${h.phrase}] ${h.text}`);
  assert.equal(found.length, 0, "banned wording found:\n" + found.join("\n"));
});

// The /privacy body lives in src/app/privacy/sections.ts (privacySections()), not page.tsx, so the
// guard reads every source file that renders the page's text (CONTROL SWEEP-1122-1555 (7)).
const LEGAL_NAME_SOURCES = {
  privacy: ["src/app/privacy/page.tsx", "src/app/privacy/sections.ts"],
  terms: ["src/app/terms/page.tsx"],
};

test("legal name present in privacy and terms", () => {
  for (const [page, files] of Object.entries(LEGAL_NAME_SOURCES)) {
    const src = files.map((f) => readFileSync(join(root, f), "utf8")).join("\n");
    assert.ok(src.includes("Imfrustrated.org, Inc."), `${page} missing legal name`);
  }
});

test("every exemption still matches (remove it once the wording is replaced)", () => {
  for (const e of EXEMPT) {
    const hits = findHits(readFileSync(join(root, e.file), "utf8")).filter((h) => isExempt(e.file, h));
    assert.equal(hits.length, 1, `exemption ${e.file} [${e.contains}] matched ${hits.length}`);
  }
});
