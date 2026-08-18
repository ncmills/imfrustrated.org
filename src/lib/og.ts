import type { Metadata } from "next";

/**
 * Canonical Open Graph identity for imfrustrated.org.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * In the Next.js App Router a page-level `openGraph` object REPLACES the root
 * layout's `openGraph` — it does not merge field-by-field. So any page that
 * declares its own `openGraph` block silently loses `siteName`, `locale`, and
 * anything else it does not restate. Twelve pages here had drifted that way.
 *
 * THE `images` RULE IS ASYMMETRIC — READ BEFORE EDITING
 * ----------------------------------------------------
 * Static metadata files (`opengraph-image.tsx`) ARE merged in, but only when
 * the page's own `openGraph` object does not have an `images` key at all.
 * See next/dist/lib/metadata/resolve-metadata.js:147 —
 *
 *   if (openGraph && !source?.openGraph?.hasOwnProperty('images')) { ...merge... }
 *
 * It is a `hasOwnProperty` check, so `images: undefined` still counts as
 * "specified" and suppresses the colocated file. That is why `hasRouteImage`
 * drives a CONDITIONAL SPREAD rather than a value.
 *
 *   hasRouteImage: true  -> omit `images` entirely so the route's own
 *                           `opengraph-image.tsx` merges in. Passing a static
 *                           image here would OVERRIDE the per-route dynamic
 *                           image — a regression, not a fix.
 *   hasRouteImage: false -> fall back to the root `/opengraph-image`, because
 *                           the segment has no colocated file and would
 *                           otherwise render no `og:image` at all.
 */

export const SITE_NAME = "I'm Frustrated dot Org";
export const SITE_URL = "https://imfrustrated.org";
export const SITE_LOCALE = "en_US";

/** Root-level dynamic OG image (src/app/opengraph-image.tsx), 1200x630. */
export const ROOT_OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "I'm Frustrated dot Org — you don't always need a lawyer",
} as const;

export type BuildOpenGraphArgs = {
  title: string;
  description: string;
  /** Route path, leading slash, e.g. "/about" or "/letters/parking/nyc". Use "/" for the homepage. */
  path: string;
  /** og:type. Defaults to "article"; the homepage uses "website". */
  type?: "website" | "article";
  /**
   * Does THIS route segment have its own colocated `opengraph-image.*` file?
   * Required on purpose — getting it wrong is the one way to break a working card.
   */
  hasRouteImage: boolean;
};

export function absoluteUrl(path: string): string {
  if (path === "/" || path === "") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildOpenGraph({
  title,
  description,
  path,
  type = "article",
  hasRouteImage,
}: BuildOpenGraphArgs): Metadata["openGraph"] {
  const common = {
    title,
    description,
    url: absoluteUrl(path),
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    // Conditional spread, NOT `images: undefined` — see the hasOwnProperty note above.
    ...(hasRouteImage ? {} : { images: [ROOT_OG_IMAGE] }),
  };

  return type === "website"
    ? { ...common, type: "website" as const }
    : { ...common, type: "article" as const };
}
