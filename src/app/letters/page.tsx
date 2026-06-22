import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Header, Reveal, Interactions, SiteFooter } from "@/components/ClientSections";
import { getAllLetters, getAvailableCategories } from "@/data/letters";

export const metadata: Metadata = {
  title: "Letter Templates That Get You What You're Owed | I'm Frustrated dot Org",
  description:
    "Free, plain-English letter templates that invoke real statutes — security deposits, billing errors, debt validation, medical records, credit-report disputes. Written by attorneys, free to use.",
  alternates: {
    canonical: "https://imfrustrated.org/letters",
    types: {
      "application/rss+xml": [
        { url: "https://imfrustrated.org/letters/rss.xml", title: "Letter Templates RSS Feed" },
      ],
    },
  },
  openGraph: {
    type: "article",
    url: "https://imfrustrated.org/letters",
    title: "Letter Templates | I'm Frustrated dot Org",
    description:
      "Free, plain-English letter templates that invoke real statutes — security deposits, billing errors, debt validation, medical records, credit-report disputes.",
  },
};

const categoryIconPaths: Record<string, ReactNode> = {
  landlord: (
    <>
      <path d="M6 22V12L24 6l18 6v10" />
      <path d="M10 22v18a2 2 0 002 2h24a2 2 0 002-2V22" />
      <path d="M20 42v-10h8v10" />
    </>
  ),
  "credit-card": (
    <>
      <rect x="6" y="12" width="36" height="24" rx="2" />
      <path d="M6 20h36" />
      <path d="M12 30h6" strokeLinecap="round" />
    </>
  ),
  consumer: (
    <>
      <path d="M10 8h28l-2 22a2 2 0 01-2 2H14a2 2 0 01-2-2L10 8z" />
      <path d="M6 8h4" strokeLinecap="round" />
      <path d="M18 38a2 2 0 100 4 2 2 0 000-4z" />
      <path d="M32 38a2 2 0 100 4 2 2 0 000-4z" />
    </>
  ),
  neighbor: (
    <>
      <path d="M4 22l8-8 8 8v18H4V22z" />
      <path d="M28 22l8-8 8 8v18H28V22z" />
      <path d="M20 40h8" strokeLinecap="round" />
    </>
  ),
  hoa: (
    <>
      <path d="M8 42V14l8-6 8 6v28" />
      <path d="M24 42V22l8-6 8 6v20" />
      <path d="M14 22h4M14 30h4M30 30h4" strokeLinecap="round" />
    </>
  ),
  airline: (
    <>
      <path d="M6 28l14-4 8-14 4 2-4 14 14 4-2 4-14-4-4 8-4-2 2-8-14 4z" strokeLinejoin="round" />
    </>
  ),
  hotel: (
    <>
      <path d="M6 36V14" strokeLinecap="round" />
      <path d="M6 22h28a8 8 0 018 8v6" />
      <path d="M6 36h36" strokeLinecap="round" />
      <circle cx="14" cy="18" r="3" />
    </>
  ),
  employer: (
    <>
      <rect x="6" y="14" width="36" height="24" rx="2" />
      <path d="M18 14V10a2 2 0 012-2h8a2 2 0 012 2v4" />
      <path d="M6 24h36" />
    </>
  ),
};

function CategoryIcon({ slug }: { slug: string }) {
  const paths = categoryIconPaths[slug];
  if (!paths) return null;
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-10 h-10 mb-5 text-sage group-hover:text-clay transition-colors duration-300"
      aria-hidden="true"
    >
      {paths}
    </svg>
  );
}

export default function LettersHubPage() {
  const letters = getAllLetters();
  const categories = getAvailableCategories();

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://imfrustrated.org" },
      { "@type": "ListItem", position: 2, name: "Letters", item: "https://imfrustrated.org/letters" },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Letter Templates by I'm Frustrated dot Org",
    url: "https://imfrustrated.org/letters",
    description:
      "A free library of plain-English letter templates that invoke real federal and state statutes — written by practicing attorneys, free to use without an account.",
    isPartOf: { "@type": "WebSite", name: "I'm Frustrated dot Org", url: "https://imfrustrated.org" },
    hasPart: letters.map((l) => ({
      "@type": "Article",
      name: l.title,
      url: `https://imfrustrated.org/letters/${l.category}/${l.slug}`,
      description: l.metaDescription,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <div className="amb" aria-hidden="true"><i></i><i></i><i></i></div>
      <Header />
      <Interactions />
      <main className="relative">
        {/* Hero */}
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-14">
          <Reveal>
            <nav className="text-sm font-medium text-sage-2 mb-7">
              <Link href="/" className="hover:text-clay transition-colors duration-300">Home</Link>
              <span className="mx-2.5 text-rule">/</span>
              <span className="text-clay">Letters</span>
            </nav>
          </Reveal>
          <Reveal delay={1}>
            <span className="eyebrow"><span className="pulse" />Free letter templates</span>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="font-disp font-semibold text-sage text-[2.7rem] md:text-6xl lg:text-[4rem] leading-[1.04] tracking-[-0.03em] mt-7">
              The letter is <br className="hidden sm:block" />usually{" "}
              <em className="font-accent not-italic text-clay" style={{ fontStyle: "italic" }}>enough.</em>
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-sage-2 text-lg leading-[1.6] mt-7">
              Most legal problems don&rsquo;t need a lawyer. They need a clear, properly written letter — one that quotes the statute, sets the deadline, and tells the other side what happens if they ignore it. Sent by certified mail, that letter resolves a surprising number of disputes within a week.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-sage-2 text-lg leading-[1.6] mt-5">
              Below is a free library of plain-English templates that invoke real federal and state statutes. Every citation is verified. Every template was written by an attorney. Take them, customize them, send them. No account, no upsell, no catch.
            </p>
            <p className="font-accent italic text-xl text-clay mt-7">friends who went to law school, written down.</p>
          </Reveal>
        </section>

        {/* Categories */}
        <section className="relative max-w-5xl mx-auto px-6 md:px-8 py-14 md:py-16">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="font-accent italic text-xl text-clay">by situation</p>
            <h2 className="font-disp font-semibold text-sage text-3xl md:text-[2.5rem] tracking-[-0.03em] mt-1.5">
              Browse by category
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => {
              const count = letters.filter((l) => l.category === cat.slug).length;
              return (
                <Reveal key={cat.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <Link
                    href={`/letters/${cat.slug}`}
                    className="tool-card group block p-7 h-full"
                  >
                    <CategoryIcon slug={cat.slug} />
                    <p className="text-clay text-[0.72rem] font-semibold uppercase tracking-[0.2em] mb-2">
                      {count} {count === 1 ? "letter" : "letters"}
                    </p>
                    <h2 className="font-disp font-semibold text-sage text-2xl tracking-[-0.02em]">
                      {cat.label}
                    </h2>
                    <p className="text-sage-2 mt-2.5 leading-relaxed">{cat.blurb}</p>
                    <span className="inline-flex items-center gap-2 mt-5 font-semibold text-[0.95rem] text-clay">
                      See letters
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ar group-hover:translate-x-1 transition-transform duration-300">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* All letters */}
        <section className="relative max-w-4xl mx-auto px-6 md:px-8 py-14 md:py-16">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="font-accent italic text-xl text-clay">every template</p>
            <h2 className="font-disp font-semibold text-sage text-3xl md:text-[2.5rem] tracking-[-0.03em] mt-1.5">
              All letters
            </h2>
          </Reveal>

          <Reveal>
            <ul className="divide-y divide-rule">
              {letters.map((l) => (
                <li key={`${l.category}/${l.slug}`}>
                  <Link
                    href={`/letters/${l.category}/${l.slug}`}
                    className="group block py-5"
                  >
                    <p className="text-clay text-[0.7rem] font-semibold uppercase tracking-[0.2em] mb-1">
                      {l.category.replace(/-/g, " ")}
                    </p>
                    <p className="font-disp font-semibold text-sage text-lg md:text-xl tracking-[-0.02em] group-hover:text-clay transition-colors duration-300">
                      {l.title}
                    </p>
                    <p className="text-sage-2 text-sm mt-1 leading-relaxed max-w-prose">
                      {l.metaDescription}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="relative max-w-5xl mx-auto px-6 md:px-8 pb-24">
          <Reveal>
            <div className="bg-sage rounded-[32px] px-6 sm:px-10 md:px-14 py-14 md:py-16 text-center">
              <p className="font-accent italic text-xl text-clay-soft">if the letter isn&rsquo;t enough</p>
              <h2 className="font-disp font-semibold text-bg text-3xl md:text-[2.6rem] tracking-[-0.03em] leading-tight mt-1.5">
                We can still talk it out.
              </h2>
              <p className="text-[#cdd6cd] text-lg leading-relaxed mt-4 max-w-xl mx-auto mb-9">
                Send us the situation and a volunteer attorney will write back. No commitment, no invoice, no judgment.
              </p>
              <a href="mailto:info@imfrustrated.org" className="btn-clay mag">
                info@imfrustrated.org
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ar">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <div className="mt-11 flex justify-center gap-6 text-sm flex-wrap text-[#cdd6cd]">
                <Link href="/how-it-works" className="hover:text-clay-soft transition-colors duration-300">How it works</Link>
                <Link href="/free-tools" className="hover:text-clay-soft transition-colors duration-300">Free tools</Link>
                <Link href="/about" className="hover:text-clay-soft transition-colors duration-300">About us</Link>
                <Link href="/" className="hover:text-clay-soft transition-colors duration-300">Home</Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
