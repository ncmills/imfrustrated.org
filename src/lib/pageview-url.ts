// Query-string allowlist for URLs sent to PostHog (MAX-DATA-NO-COOKIES ruling).
// Capture source and landing page, never anything else from the query.
export const POSTHOG_QUERY_ALLOWLIST: ReadonlySet<string> = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "ref",
  "gclid",
  "fbclid",
]);

/** Filter a query string (with or without leading "?") down to allowlisted keys. */
export function filterQuery(search: string): string {
  const out = new URLSearchParams();
  new URLSearchParams(search).forEach((v, k) => {
    if (POSTHOG_QUERY_ALLOWLIST.has(k)) out.append(k, v);
  });
  return out.toString();
}

/** Filter the query of an absolute or relative URL string. Hash is preserved. */
export function sanitizePageviewUrl(url: string): string {
  if (typeof url !== "string" || !url) return url;
  const qi = url.indexOf("?");
  if (qi === -1) return url;
  const hi = url.indexOf("#", qi);
  const base = url.slice(0, qi);
  const search = url.slice(qi + 1, hi === -1 ? undefined : hi);
  const hash = hi === -1 ? "" : url.slice(hi);
  const kept = filterQuery(search);
  return base + (kept ? "?" + kept : "") + hash;
}

// Letter pages name a personal situation in the slug (CAPTURE-GAPS-1121, IMF-PATH-REDACT-1121):
// PostHog gets /letters/<category> only, e.g. /letters/landlord/<slug> -> /letters/landlord and
// /letters/parking/<city>/<defense> -> /letters/parking. On letter paths the hash is dropped too
// (it can carry a slug). Odd forms (encoded, uppercase, doubled slashes, dot segments) are
// normalised first; an unknown category becomes /letters. Non-letter paths pass through.
import type { LetterCategory } from "../data/letters/types";

// Record<> makes tsc fail if a LetterCategory is added and not listed here.
const LETTER_CATEGORIES: Record<LetterCategory | "parking", true> = {
  landlord: true, employer: true, neighbor: true, hoa: true, airline: true, hotel: true,
  "credit-card": true, insurance: true, government: true, school: true, family: true,
  consumer: true, parking: true,
};

function decodeFully(s: string): string {
  let cur = s;
  // Decode until stable (REDACT-FOLLOWUP-1121: %252e%252e etc.); the cap only stops pathological input.
  for (let i = 0; i < 16; i++) {
    let next: string;
    try { next = decodeURIComponent(cur); } catch { break; }
    if (next === cur) break;
    cur = next;
  }
  return cur;
}

/** Normalised path segments (decoded, lowercased, no empty or dot segments). */
function normSegments(path: string): string[] {
  const out: string[] = [];
  for (const seg of decodeFully(path).toLowerCase().replace(/\\/g, "/").split("/")) {
    if (!seg || seg === ".") continue;
    if (seg === "..") { out.pop(); continue; }
    out.push(seg);
  }
  return out;
}

/** "/letters/<category>" or "/letters" if `path` (no query/hash) is a letter path, else null. */
export function letterPathFor(path: string): string | null {
  const segs = normSegments(path);
  if (segs[0] !== "letters") {
    // A path that starts under /letters but escapes it with dot segments (e.g. /letters/%252e%252e/landlord/slug)
    // is still a letter path: send only /letters (REDACT-FOLLOWUP-1121).
    const first = decodeFully(path).toLowerCase().replace(/\\/g, "/").split("/").find((x) => x && x !== ".");
    return first === "letters" ? "/letters" : null;
  }
  if (segs.length === 1) return "/letters";
  if (segs.length === 2 && segs[1] === "rss.xml") return "/letters/rss.xml";
  return Object.prototype.hasOwnProperty.call(LETTER_CATEGORIES, segs[1]) ? "/letters/" + segs[1] : "/letters";
}

/** Bare path with optional query/hash: letter paths are cut and lose their hash. */
export function redactLetterPath(path: string): string {
  if (typeof path !== "string" || !path) return path;
  const qi = path.search(/[?#]/);
  const p = qi === -1 ? path : path.slice(0, qi);
  const rest = qi === -1 ? "" : path.slice(qi);
  const cut = letterPathFor(p);
  if (cut === null) {
    // A hash that itself names a letter path (e.g. "#/letters/landlord/slug") is dropped.
    const hi = rest.indexOf("#");
    if (hi !== -1 && /letters/i.test(decodeFully(rest.slice(hi)))) return p + rest.slice(0, hi);
    return path;
  }
  const query = rest.startsWith("?") ? rest.split("#")[0] : "";
  return cut + query;
}

/** Redact the letter path of an absolute URL or a bare path; other urls pass through. */
export function redactLetterUrl(url: string): string {
  if (typeof url !== "string" || !url) return url;
  const m = url.match(/^([a-z][a-z0-9+.-]*:\/\/[^/?#]*)(.*)$/i);
  return m ? m[1] + redactLetterPath(m[2]) : redactLetterPath(url);
}

/** Hash fragments never reach the vendor on any URL/path prop (IMF-PATH-REDACT-2). */
export function stripHash(url: string): string {
  const hi = url.indexOf("#");
  return hi === -1 ? url : url.slice(0, hi);
}

/** URL- and path-valued PostHog properties that can carry the page path. */
export const POSTHOG_URL_PROPS = [
  "$current_url",
  "$referrer",
  "$initial_referrer",
  "$prev_pageview_url",
  "$session_entry_url",
  "$initial_current_url",
] as const;
export const POSTHOG_PATH_PROPS = [
  "$pathname",
  "$prev_pageview_pathname",
  "$session_entry_pathname",
  "$initial_pathname",
] as const;

/** Apply query allowlist + letter-path redaction to an event's properties, in place.
 * posthog-js adds `title` (document.title) to every $pageview; letter titles name the
 * situation, so on a letter page the title becomes the cut path. */
export function sanitizeEventProps(props: Record<string, unknown> | undefined): void {
  if (!props) return;
  if (typeof props.title === "string") {
    const cur = [props.$current_url, props.$pathname].find((v) => typeof v === "string") as string | undefined;
    const path = cur ? cur.replace(/^[a-z][a-z0-9+.-]*:\/\/[^/?#]*/i, "").split(/[?#]/)[0] : "";
    const cut = path ? letterPathFor(path) : null;
    if (cut !== null) props.title = cut;
  }
  for (const k of POSTHOG_URL_PROPS) {
    const v = props[k];
    if (typeof v === "string") props[k] = stripHash(redactLetterUrl(sanitizePageviewUrl(v)));
  }
  for (const k of POSTHOG_PATH_PROPS) {
    const v = props[k];
    if (typeof v === "string") props[k] = stripHash(redactLetterPath(v));
  }
}

/** before_send body: properties plus $set / $set_once, in place. */
export function sanitizeEvent(event: { properties?: Record<string, unknown>; $set?: Record<string, unknown>; $set_once?: Record<string, unknown> } | null | undefined): void {
  if (!event) return;
  sanitizeEventProps(event.properties);
  sanitizeEventProps(event.$set);
  sanitizeEventProps(event.$set_once);
}
