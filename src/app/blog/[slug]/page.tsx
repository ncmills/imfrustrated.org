import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Header, Reveal, SiteFooter } from "@/components/ClientSections";
import { buildOpenGraph, SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/og";
import { getPost, getAllSlugs, getRelatedPosts, formatPostDate } from "@/lib/blog";
import { mdxComponents } from "@/components/blog/mdxComponents";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    keywords: [post.primaryKeyword, ...(post.secondaryKeywords ?? [])],
    openGraph: buildOpenGraph({
      path: `/blog/${slug}`,
      title: post.title,
      description: post.description,
      // src/app/blog/[slug]/ has no colocated opengraph-image file.
      hasRouteImage: false,
    }),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  // The page renders post.title as the <h1>; drop a duplicate leading H1 from the body.
  const body = post.content.replace(/^\s*#\s+.+\n+/, "");
  const { content } = await compileMDX({
    source: body,
    components: mdxComponents,
    options: { parseFrontmatter: false, mdxOptions: { remarkPlugins: [remarkGfm] } },
  });
  const related = getRelatedPosts(post);
  const url = absoluteUrl(`/blog/${slug}`);

  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      datePublished: post.datePublished,
      dateModified: post.dateModified ?? post.datePublished,
      publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      ...(post.citations.length
        ? { citation: post.citations.map((c) => ({ "@type": "CreativeWork", name: c.label, url: c.url })) }
        : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];
  if (post.faqs && post.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <div className="amb" aria-hidden="true"><i></i><i></i><i></i></div>
      <Header />
      <main className="relative">
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-8">
          <Reveal delay={1}>
            <nav className="text-[0.7rem] uppercase tracking-[0.22em] text-sage-2 mb-8 font-medium">
              <Link href="/" className="hover:text-sage transition-colors duration-300">Home</Link>
              <span className="mx-3 text-rule">/</span>
              <Link href="/blog" className="hover:text-sage transition-colors duration-300">Blog</Link>
            </nav>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="font-disp font-semibold text-sage text-[2.1rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.08] tracking-[-0.03em] mb-6">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-sage-2 text-lg leading-[1.7]">{post.description}</p>
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-clay mt-6">
              {formatPostDate(post.dateModified ?? post.datePublished)} · {post.readingMinutes} min read
            </p>
          </Reveal>
        </section>

        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pb-12">
          <article>{content}</article>

          {post.citations.length > 0 && (
            <div className="mt-12 pt-8 border-t border-rule">
              <h2 className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-sage-2 mb-3">Sources</h2>
              <ul className="space-y-2">
                {post.citations.map((c) => (
                  <li key={c.url}>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sage underline decoration-clay/70 underline-offset-[5px] hover:text-clay transition-colors duration-300"
                    >
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="mt-10 text-sm text-sage-2 leading-relaxed">
            General information, not legal advice. If your situation has a deadline, email{" "}
            <a href="mailto:info@imfrustrated.org" className="text-sage underline decoration-clay/70 underline-offset-[5px]">
              info@imfrustrated.org
            </a>{" "}
            and a volunteer attorney can talk it through with you, free.
          </p>

          {related.length > 0 && (
            <div className="mt-12 pt-8 border-t border-rule">
              <h2 className="font-disp font-semibold text-sage text-2xl tracking-[-0.03em] mb-5">Keep reading</h2>
              <ul className="space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/blog/${r.slug}`} className="text-sage hover:text-clay transition-colors duration-300 font-medium">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
