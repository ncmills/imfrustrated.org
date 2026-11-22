// SHARED ALLOWLIST-KEEP-DETAIL generator (copied from maid-of-honor-hq scripts/gen-published-paths.ts):
// builds src/generated/published-paths.json, the build-time list of PUBLISHED public content slugs per
// route template. /api/pc counts a concrete path only when it is a static route or its slug is in this
// list; anything else is dropped (DRV SWEEP-1121-2115 (2)). Runs as part of prebuild; the committed copy
// only needs to exist for tsc/tests (a stale copy drops a new page's counts, never stores a typed slug).
// Per-site part: the SOURCES block below, built from the same data the pages use in generateStaticParams.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { getAllLetters, getAvailableCategories } from "../src/data/letters";
import { getAllParkingCities } from "../src/data/parking";

const ROOT = path.resolve(__dirname, "..");

/** Mirrors src/lib/blog.ts getAllPosts/getAllSlugs (server-only, so not importable here): drafts excluded. */
function blogSlugs(): string[] {
  const dir = path.join(ROOT, "content", "blog");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.mdx?$/.test(f))
    .filter((f) => !(matter(fs.readFileSync(path.join(dir, f), "utf8")).data as { draft?: boolean }).draft)
    .map((f) => f.replace(/\.mdx?$/, ""));
}

// Per-site: template -> slugs, each from the page's own generateStaticParams source.
const SOURCES: Record<string, string[]> = {
  "/blog/:slug": blogSlugs(), // blog/[slug] (dynamicParams=false)
  "/letters/:category": getAvailableCategories().map((c) => c.slug), // letters/[category]
  "/letters/:category/:slug": getAllLetters().map((l) => `${l.category}/${l.slug}`), // letters/[category]/[slug]
  "/letters/parking/:city": getAllParkingCities().map((c) => c.slug), // letters/parking/[city]
  "/letters/parking/:city/:defense": getAllParkingCities().flatMap((c) => c.defenses.map((d) => `${c.slug}/${d.slug}`)), // letters/parking/[city]/[defense]
};

// SHARED: slugs only, lowercase, [a-z0-9-]{1,120} per param (multi-param values joined by "/"), sorted, deduped.
const SLUG = /^[a-z0-9-]{1,120}(\/[a-z0-9-]{1,120})*$/;
const out: Record<string, string[]> = {};
for (const [tpl, raw] of Object.entries(SOURCES).sort(([a], [b]) => a.localeCompare(b))) {
  out[tpl] = [...new Set(raw.map((s) => String(s).toLowerCase()))].filter((s) => SLUG.test(s)).sort();
}
const file = path.join(ROOT, "src", "generated", "published-paths.json");
fs.mkdirSync(path.dirname(file), { recursive: true });
fs.writeFileSync(file, "{\n" + Object.entries(out).map(([k, v]) => `${JSON.stringify(k)}: ${JSON.stringify(v)}`).join(",\n") + "\n}\n");
console.log(`gen-published-paths: ${Object.entries(out).map(([k, v]) => `${k}=${v.length}`).join(" ")}`);
