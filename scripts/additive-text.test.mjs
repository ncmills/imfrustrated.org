// PR62-ADDITIVE-ONLY proof: every visible sentence on main must still be present on the branch.
// Compares prerendered HTML of two `next build` outputs (npx next build, NOT npm run build: no IndexNow).
//   MAIN_APP=<main>/.next/server/app BRANCH_APP=<branch>/.next/server/app node --test scripts/additive-text.test.mjs
// Skips (passes) when the main build output is not present, so CI without it is unaffected.
import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const MAIN = process.env.MAIN_APP || "../main-wt/.next/server/app";
const BRANCH = process.env.BRANCH_APP || ".next/server/app";

// EXACTLY two allowlist entries. Do not add more; report instead.
export const ALLOWLIST = [
  (s) => s.replace(/—$/, "") === "Free legal help" || s === "before you pay for a lawyer.", // old hero headline lines
  (s) => /^Browse the \d+-letter library$/.test(s),
];

const BLOCK = /<\/?(?:p|div|section|article|header|footer|nav|main|aside|ul|ol|li|h[1-6]|br|tr|td|th|table|form|label|button|blockquote|figure|figcaption|details|summary|dl|dt|dd|hr|option|select|textarea|address)\b[^>]*>/gi;
const ENT = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };

export function sentences(html) {
  let b = html.replace(/<head[\s\S]*?<\/head>/i, "");
  b = b.replace(/<!--[\s\S]*?-->/g, "").replace(/<(script|style|noscript|template|svg)\b[\s\S]*?<\/\1>/gi, "");
  b = b.replace(/<a\b[^>]*class="[^"]*\bbtn[^"]*"[^>]*>/gi, "\n").replace(BLOCK, "\n").replace(/<[^>]+>/g, "");
  b = b.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === "#") return String.fromCodePoint(e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
    return ENT[e.toLowerCase()] ?? m;
  });
  const out = [];
  for (const line of b.split("\n")) {
    const t = line.replace(/\s+/g, " ").trim();
    if (!t) continue;
    for (const s of t.split(/(?<=[.!?])\s+/)) {
      const u = s.trim();
      if (u) out.push(u);
    }
  }
  return out;
}

function htmlFiles(dir, base = dir, acc = []) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) htmlFiles(p, base, acc);
    else if (n.endsWith(".html") && !n.startsWith("_global-error")) acc.push(relative(base, p));
  }
  return acc.sort();
}

test("every sentence on main is present on the branch (two-entry allowlist)", { skip: !existsSync(MAIN) || !existsSync(BRANCH) }, () => {
  const routes = htmlFiles(MAIN);
  const skippedBranchMissing = [];
  let compared = 0, total = 0;
  const missing = [];
  const allowed = [];
  for (const r of routes) {
    if (!existsSync(join(BRANCH, r))) { skippedBranchMissing.push(r); continue; }
    const ms = sentences(readFileSync(join(MAIN, r), "utf8"));
    const bs = new Set(sentences(readFileSync(join(BRANCH, r), "utf8")));
    compared++;
    for (const s of new Set(ms)) {
      total++;
      if (bs.has(s)) continue;
      if (ALLOWLIST.some((f) => f(s))) { allowed.push(`${r}: ${s}`); continue; }
      missing.push(`${r}: ${s}`);
    }
  }
  console.log(`routes compared: ${compared}; main sentences: ${total}; allowlisted: ${allowed.length}; missing: ${missing.length}`);
  if (skippedBranchMissing.length) console.log("main routes absent on branch:", skippedBranchMissing.join(", "));
  for (const a of new Set(allowed.map((x) => x.split(": ").slice(1).join(": ")))) console.log("allowlisted:", a);
  assert.equal(skippedBranchMissing.length, 0, "branch lacks main routes: " + skippedBranchMissing.join(", "));
  assert.deepEqual(missing, [], `main sentences missing on branch:\n${missing.join("\n")}`);
});
