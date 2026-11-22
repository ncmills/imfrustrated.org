// First-party per-page counts (ALLOWLIST-KEEP-DETAIL ruling, 2026-11-21).
// PostHog keeps templates only on this site; per-page detail is counted here, in our own
// store: rows of (path, day, count). No visitor id, IP, user agent, query or referrer is
// ever stored or logged.

const SLUG = "[a-z0-9][a-z0-9-]{0,119}";
const STATIC = ["about", "blog", "faq", "free-tools", "how-it-works", "letters", "letters/parking", "privacy", "terms"];

// Real public routes (src/app page.tsx tree). Concrete slugs are counted as-is because the
// counts never leave our store.
const ROUTES: ReadonlyArray<RegExp> = [
  /^\/$/,
  ...STATIC.map((p) => new RegExp("^/" + p.replace(/[-/]/g, (c) => "\\" + c) + "$")),
  new RegExp(`^/blog/${SLUG}$`),
  new RegExp(`^/letters/${SLUG}$`),
  new RegExp(`^/letters/${SLUG}/${SLUG}$`),
  new RegExp(`^/letters/parking/${SLUG}/${SLUG}$`),
];

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
 * backslashes, and anything that is not one of the site's real routes.
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
  return ROUTES.some((re) => re.test(path)) ? path : null;
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
