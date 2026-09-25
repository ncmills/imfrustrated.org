import type { Metadata } from "next";
import Link from "next/link";
import { Header, Reveal, SiteFooter } from "@/components/ClientSections";
import { buildOpenGraph, SITE_URL, absoluteUrl } from "@/lib/og";
import { getAllPosts, formatPostDate } from "@/lib/blog";

const TITLE = "Blog | I'm Frustrated dot Org";
const DESCRIPTION =
  "Plain-language explainers on the statutes, letters and offices people get sent to: what the law actually says, and what to do next.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: buildOpenGraph({
    path: "/blog",
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    // src/app/blog/ has no colocated opengraph-image file.
    hasRouteImage: false,
  }),
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "I'm Frustrated dot Org Blog",
    url: `${SITE_URL}/blog`,
    blogPost: posts.slice(0, 25).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: absoluteUrl(`/blog/${p.slug}`),
      datePublished: p.datePublished,
      dateModified: p.dateModified,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <div className="amb" aria-hidden="true"><i></i><i></i><i></i></div>
      <Header />
      <main className="relative">
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-12 md:pb-16">
          <Reveal delay={1}>
            <nav className="text-[0.7rem] uppercase tracking-[0.22em] text-sage-2 mb-8 font-medium">
              <Link href="/" className="hover:text-sage transition-colors duration-300">Home</Link>
              <span className="mx-3 text-rule">/</span>
              <span className="text-clay">Blog</span>
            </nav>
          </Reveal>
          <Reveal delay={2}>
            <p className="font-accent italic text-xl text-clay">what the law actually says</p>
          </Reveal>
          <Reveal delay={3}>
            <h1 className="font-disp font-semibold text-sage text-[2.4rem] sm:text-5xl lg:text-[3.75rem] leading-[1.05] tracking-[-0.03em] mt-2 mb-7">
              Explainers for the letter you just got.
            </h1>
          </Reveal>
          <Reveal delay={4}>
            <p className="text-sage-2 text-lg leading-[1.7] max-w-2xl">{DESCRIPTION}</p>
          </Reveal>
        </section>

        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pb-24">
          {posts.length === 0 ? (
            <p className="text-sage-2">New posts are on the way.</p>
          ) : (
            <div className="space-y-5">
              {posts.map((post) => (
                <Reveal key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-card border border-rule rounded-2xl p-7 md:p-8 hover:border-clay/60 transition-colors duration-300"
                  >
                    <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-clay">
                      {formatPostDate(post.datePublished)} · {post.readingMinutes} min read
                    </p>
                    <h2 className="font-disp font-semibold text-sage text-xl md:text-[1.5rem] leading-snug tracking-[-0.03em] mt-3 group-hover:text-clay transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-sage-2 text-base leading-[1.7] mt-3">{post.description}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
