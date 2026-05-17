import type { Metadata } from "next";
import Link from "next/link";
import { Header, FadeInSection } from "@/components/ClientSections";
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
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-paper">
          <FadeInSection className="relative z-10 max-w-3xl mx-auto px-6 md:px-10">
            <nav className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-warm mb-8 font-medium">
              <Link href="/" className="hover:text-forest transition-colors">Home</Link>
              <span className="mx-3 text-rule">/</span>
              <span className="text-amber">Letters</span>
            </nav>
            <p className="text-amber text-[0.72rem] font-semibold uppercase tracking-[0.3em] mb-4">Free Letter Templates</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.75rem] font-semibold text-ink leading-[1.05] tracking-[-0.02em] mb-8">
              The letter is <br className="hidden sm:block" /> usually enough<span className="text-amber">.</span>
            </h1>
            <div className="decorative-rule mb-10" />
            <p className="text-muted-warm text-lg leading-relaxed mb-6">
              Most legal problems don&rsquo;t need a lawyer. They need a clear, properly written letter — one that quotes the statute, sets the deadline, and tells the other side what happens if they ignore it. Sent by certified mail, that letter resolves a surprising number of disputes within a week.
            </p>
            <p className="text-muted-warm text-lg leading-relaxed">
              Below is a free library of plain-English templates that invoke real federal and state statutes. Every citation is verified. Every template was written by an attorney. Take them, customize them, send them. No account, no upsell, no catch.
            </p>
            <p className="script text-2xl md:text-3xl mt-8 -rotate-1">friends who went to law school, written down.</p>
          </FadeInSection>
        </section>

        {/* Categories */}
        <section className="py-20 md:py-28 bg-paper-deep">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <FadeInSection className="mb-12 text-center">
              <p className="text-amber text-[0.72rem] font-semibold uppercase tracking-[0.3em] mb-3">Categories</p>
              <div className="decorative-rule mx-auto" />
            </FadeInSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat) => {
                const count = letters.filter((l) => l.category === cat.slug).length;
                return (
                  <FadeInSection key={cat.slug}>
                    <Link
                      href={`/letters/${cat.slug}`}
                      className="block bg-paper-lift border border-rule rounded-[6px] p-7 h-full hover:border-forest/40 transition-all duration-500 hover:shadow-[0_18px_36px_-24px_rgba(45,74,62,0.25)]"
                    >
                      <p className="text-amber text-[0.68rem] font-semibold uppercase tracking-[0.28em] mb-3">
                        {count} {count === 1 ? "letter" : "letters"}
                      </p>
                      <h2 className="font-serif text-2xl font-semibold text-ink tracking-[-0.01em] mb-3">
                        {cat.label}
                      </h2>
                      <p className="text-muted-warm text-[0.95rem] leading-relaxed">{cat.blurb}</p>
                      <p className="text-forest text-sm mt-5 font-medium">See letters →</p>
                    </Link>
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* All letters */}
        <section className="py-20 md:py-28 bg-paper">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <FadeInSection className="mb-12 text-center">
              <p className="text-amber text-[0.72rem] font-semibold uppercase tracking-[0.3em] mb-3">All Letters</p>
              <div className="decorative-rule mx-auto" />
            </FadeInSection>

            <FadeInSection>
              <ul className="space-y-1">
                {letters.map((l) => (
                  <li key={`${l.category}/${l.slug}`}>
                    <Link
                      href={`/letters/${l.category}/${l.slug}`}
                      className="group block py-5 border-b border-rule/70 hover:border-forest/40 transition-colors"
                    >
                      <p className="text-amber text-[0.65rem] font-semibold uppercase tracking-[0.28em] mb-1">
                        {l.category.replace(/-/g, " ")}
                      </p>
                      <p className="font-serif text-lg md:text-xl text-ink group-hover:text-forest transition-colors">
                        {l.title}
                      </p>
                      <p className="text-muted-warm text-sm mt-1 leading-relaxed max-w-prose">
                        {l.metaDescription}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-paper-deep">
          <FadeInSection className="max-w-2xl mx-auto px-6 md:px-10 text-center">
            <p className="text-amber text-[0.72rem] font-semibold uppercase tracking-[0.3em] mb-4">If the letter isn&rsquo;t enough</p>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink leading-snug mb-5 tracking-[-0.01em]">
              We can still talk it out<span className="text-amber">.</span>
            </h2>
            <p className="text-muted-warm text-lg leading-relaxed mb-8">
              Send us the situation and a volunteer attorney will write back. No commitment, no invoice, no judgment.
            </p>
            <a href="mailto:info@imfrustrated.org" className="btn-forest">
              info@imfrustrated.org
            </a>
            <div className="mt-12 flex justify-center gap-6 text-sm flex-wrap text-muted-warm">
              <Link href="/how-it-works" className="hover:text-forest transition-colors">How it works</Link>
              <Link href="/free-tools" className="hover:text-forest transition-colors">Free tools</Link>
              <Link href="/about" className="hover:text-forest transition-colors">About us</Link>
              <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            </div>
          </FadeInSection>
        </section>
      </main>
    </>
  );
}
