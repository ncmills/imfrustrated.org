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
    for (const ph of PHRASES) if (low.includes(ph.toLowerCase())) hits.push({ line: i + 1, phrase: ph, text: line.trim().slice(0, 160) });
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
  for (const f of files) for (const h of findHits(readFileSync(f, "utf8"))) found.push(`${f.slice(root.length + 1)}:${h.line} [${h.phrase}] ${h.text}`);
  assert.equal(found.length, 0, "banned wording found:\n" + found.join("\n"));
});

test("legal name present in privacy and terms", () => {
  for (const page of ["privacy", "terms"]) {
    const src = readFileSync(join(root, "src/app", page, "page.tsx"), "utf8");
    assert.ok(src.includes("Imfrustrated.org, Inc."), `${page} missing legal name`);
  }
});
