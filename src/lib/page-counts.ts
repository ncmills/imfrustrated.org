// First-party per-page counts (ALLOWLIST-KEEP-DETAIL ruling, 2026-11-21).
// PostHog keeps templates only on this site; per-page detail is counted here, in our own
// store: rows of (path, day, count). No visitor id, IP, user agent, query or referrer is
// ever stored or logged.

import published from "@/generated/published-paths.json";

// Static public routes (src/app page.tsx tree): a fixed list.
const STATIC: ReadonlySet<string> = new Set([
  "/",
  ...["about", "blog", "faq", "free-tools", "how-it-works", "letters", "letters/parking", "privacy", "terms"].map((p) => "/" + p),
]);

// Published concrete paths (DRV SWEEP-1121-2115 (2)): only pages the build really publishes, from
// src/generated/published-paths.json (scripts/gen-published-paths.ts, prebuild). Every template's
// params are trailing, so "/letters/:category/:slug" + "airline/x" -> "/letters/airline/x".
const PUBLISHED: ReadonlySet<string> = new Set(
  Object.entries(published as Record<string, string[]>).flatMap(([tpl, slugs]) =>
    slugs.map((s) => tpl.slice(0, tpl.indexOf(":")) + s),
  ),
);

const MAX_RAW = 512;

/** Decode until stable; null on any decode error or if it never stabilises. */
function decodeStable(s: string): string | null {
  let cur = s;
  for (let i = 0; i < 4; i++) {
    let next: string;
    try { next = decodeURIComponent(cur); } catch { return null; }
    if (next === cur) return cur;
    cur = next;
  }
  return null;
}

/**
 * Server-side normaliser. Returns the path to count, or null to count nothing.
 * Drops: non-strings, decode errors, whitespace, control chars, ; % ? # (after decoding),
 * backslashes, and anything that is not exactly a static route or a published concrete path.
 */
export function pathToCount(raw: unknown): string | null {
  if (typeof raw !== "string" || !raw || raw.length > MAX_RAW || raw[0] !== "/") return null;
  const decoded = decodeStable(raw);
  if (decoded === null) return null;
  // eslint-disable-next-line no-control-regex
  if (/[\s\u0000-\u001f\u007f;%?#\\]/.test(decoded)) return null;
  const out: string[] = [];
  for (const seg of decoded.toLowerCase().split("/")) {
    if (!seg || seg === ".") continue;
    if (seg === "..") { out.pop(); continue; }
    out.push(seg);
  }
  const path = "/" + out.join("/");
  return STATIC.has(path) || PUBLISHED.has(path) ? path : null;
}

/** Today's date (UTC) as YYYY-MM-DD. */
export function utcDay(now: Date = new Date()): string {
  return now.toISOString().slice(0, 10);
}

type Rpc = (fn: string, args: { p_path: string; p_day: string }) => PromiseLike<unknown>;

/** Count one pageview from a raw request body. Best-effort; never throws. Returns whether it counted. */
export async function countPageview(rawBody: string, rpc: Rpc | null, now: Date = new Date()): Promise<boolean> {
  let body: unknown;
  try { body = JSON.parse(rawBody); } catch { return false; }
  const path = pathToCount((body as { path?: unknown } | null)?.path);
  if (!path || !rpc) return false;
  try {
    await rpc("imfrustrated_increment_page_count", { p_path: path, p_day: utcDay(now) });
    return true;
  } catch {
    return false;
  }
}
