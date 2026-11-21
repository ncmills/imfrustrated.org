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

// Letter pages name a personal situation in the slug (CAPTURE-GAPS-1121): PostHog gets
// /letters/<category> only, e.g. /letters/landlord/<slug> -> /letters/landlord and
// /letters/parking/<city>/<defense> -> /letters/parking. Query and hash are kept.
export function redactLetterPath(path: string): string {
  return path.replace(/^(\/letters\/[^/?#]+)\/[^?#]*/, "$1");
}

/** Redact the letter path of an absolute URL or a bare path; other urls pass through. */
export function redactLetterUrl(url: string): string {
  if (typeof url !== "string" || !url) return url;
  const m = url.match(/^([a-z][a-z0-9+.-]*:\/\/[^/?#]*)(.*)$/i);
  return m ? m[1] + redactLetterPath(m[2]) : redactLetterPath(url);
}

/** URL- and path-valued PostHog properties that can carry the page path. */
export const POSTHOG_URL_PROPS = [
  "$current_url",
  "$referrer",
  "$initial_referrer",
  "$prev_pageview_url",
  "$session_entry_url",
] as const;
export const POSTHOG_PATH_PROPS = [
  "$pathname",
  "$prev_pageview_pathname",
  "$session_entry_pathname",
  "$initial_pathname",
] as const;

/** Apply query allowlist + letter-path redaction to an event's properties, in place. */
export function sanitizeEventProps(props: Record<string, unknown> | undefined): void {
  if (!props) return;
  for (const k of POSTHOG_URL_PROPS) {
    const v = props[k];
    if (typeof v === "string") props[k] = redactLetterUrl(sanitizePageviewUrl(v));
  }
  for (const k of POSTHOG_PATH_PROPS) {
    const v = props[k];
    if (typeof v === "string") props[k] = redactLetterPath(v);
  }
}
