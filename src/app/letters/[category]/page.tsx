import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Reveal, Interactions, SiteFooter } from "@/components/ClientSections";
import {
  categoryMeta,
  getAvailableCategories,
  getLettersByCategory,
  type LetterCategory,
} from "@/data/letters";

type Params = { category: string };

export function generateStaticParams() {
  return getAvailableCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const meta = categoryMeta[category as LetterCategory];
  if (!meta) return {};
  const letters = getLettersByCategory(meta.slug);
  if (letters.length === 0) return {};
  return {
    title: `${meta.label} Letter Templates | I'm Frustrated dot Org`,
    description: `Free ${meta.label.toLowerCase()} letter templates that invoke real statutes — written by attorneys, free to use. ${meta.blurb}`,
    alternates: { canonical: `https://imfrustrated.org/letters/${meta.slug}` },
    openGraph: {
      type: "article",
      url: `https://imfrustrated.org/letters/${meta.slug}`,
      title: `${meta.label} Letter Templates | I'm Frustrated dot Org`,
      description: meta.blurb,
    },
  };
}

export default async function CategoryHubPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const meta = categoryMeta[category as LetterCategory];
  if (!meta) notFound();
  const letters = getLettersByCategory(meta.slug);
  if (letters.length === 0) notFound();

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://imfrustrated.org" },
      { "@type": "ListItem", position: 2, name: "Letters", item: "https://imfrustrated.org/letters" },
      {
        "@type": "ListItem",
        position: 3,
        name: meta.label,
        item: `https://imfrustrated.org/letters/${meta.slug}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="amb" aria-hidden="true"><i></i><i></i><i></i></div>
      <Header />
      <Interactions />
      <main className="relative">
        {/* Hero */}
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-12">
          <Reveal>
            <nav className="text-sm font-medium text-sage-2 mb-7">
              <Link href="/" className="hover:text-clay transition-colors duration-300">Home</Link>
              <span className="mx-2.5 text-rule">/</span>
              <Link href="/letters" className="hover:text-clay transition-colors duration-300">Letters</Link>
              <span className="mx-2.5 text-rule">/</span>
              <span className="text-clay">{meta.label}</span>
            </nav>
          </Reveal>
          <Reveal delay={1}>
            <span className="eyebrow"><span className="pulse" />{meta.label} letters</span>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="font-disp font-semibold text-sage text-[2.6rem] md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-[-0.03em] mt-7">
              {meta.label} letters that get a{" "}
              <em className="font-accent not-italic text-clay" style={{ fontStyle: "italic" }}>response.</em>
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-sage-2 text-lg leading-[1.6] mt-7">{meta.hubLede}</p>
          </Reveal>
        </section>

        {/* Letter list */}
        <section className="relative max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <div className="grid gap-5">
            {letters.map((l, i) => (
              <Reveal key={l.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <Link
                  href={`/letters/${l.category}/${l.slug}`}
                  className="tool-card group block p-7 md:p-8 h-full"
                >
                  <h2 className="font-disp font-semibold text-sage text-xl md:text-2xl tracking-[-0.02em] group-hover:text-clay transition-colors duration-300 mb-3">
                    {l.title}
                  </h2>
                  <p className="text-sage-2 leading-relaxed mb-4">
                    {l.lede}
                  </p>
                  <span className="inline-flex items-center gap-2 font-semibold text-[0.95rem] text-clay">
                    Read the template
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ar group-hover:translate-x-1 transition-transform duration-300">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative max-w-5xl mx-auto px-6 md:px-8 pb-24">
          <Reveal>
            <div className="bg-bg-2 rounded-[32px] px-6 sm:px-10 md:px-14 py-12 md:py-14 text-center">
              <p className="text-sage-2 text-lg leading-relaxed mb-7 max-w-xl mx-auto">
                Need an attorney to look at your specific situation before you send a letter?
              </p>
              <a href="mailto:info@imfrustrated.org" className="btn-clay mag">
                info@imfrustrated.org
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ar">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <div className="mt-10 flex justify-center gap-6 text-sm flex-wrap text-sage-2">
                <Link href="/letters" className="hover:text-clay transition-colors duration-300">All letters</Link>
                <Link href="/how-it-works" className="hover:text-clay transition-colors duration-300">How it works</Link>
                <Link href="/free-tools" className="hover:text-clay transition-colors duration-300">Free tools</Link>
                <Link href="/" className="hover:text-clay transition-colors duration-300">Home</Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
