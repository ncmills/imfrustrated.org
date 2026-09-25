// Blog content layer — reads MDX posts from /content/blog at build time.
// The render target for the Second Nick blog engine, which writes MDX into
// content/blog. Data shape ported from plan-my-party/src/lib/blog.ts (via
// offsite-outpost); styled for I'm Frustrated dot Org in the route files.
// No "server-only" import: sitemap.ts (unit-tested under vitest) reads it too.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface Citation {
  label: string;
  url: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface PostFrontmatter {
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords?: string[];
  datePublished: string;
  dateModified?: string;
  citations?: Citation[];
  faqs?: Faq[];
  related?: string[];
  readingMinutes?: number;
  draft?: boolean;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
  citations: Citation[];
  readingMinutes: number;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function estimateReadingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

function readPostFile(fileName: string): Post {
  const slug = fileName.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), "utf8");
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;
  return {
    ...fm,
    slug,
    content,
    citations: fm.citations ?? [],
    dateModified: fm.dateModified ?? fm.datePublished,
    readingMinutes: fm.readingMinutes ?? estimateReadingMinutes(content),
  };
}

let _cache: Post[] | null = null;

/** All published posts, newest first. Drafts excluded outside development. */
export function getAllPosts(): Post[] {
  if (_cache) return _cache;
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f));
  const posts = files
    .map(readPostFile)
    .filter((p) => process.env.NODE_ENV === "development" || !p.draft)
    .sort((a, b) => String(b.datePublished).localeCompare(String(a.datePublished)));
  _cache = posts;
  return posts;
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

/** Resolve `related` slugs; backfill with recent posts. Never includes the post itself. */
export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const explicit = (post.related ?? [])
    .map((s) => getPost(s))
    .filter((p): p is Post => Boolean(p) && p!.slug !== post.slug);
  if (explicit.length >= limit) return explicit.slice(0, limit);
  const fill = getAllPosts()
    .filter((p) => p.slug !== post.slug && !explicit.some((e) => e.slug === p.slug))
    .slice(0, limit - explicit.length);
  return [...explicit, ...fill];
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
