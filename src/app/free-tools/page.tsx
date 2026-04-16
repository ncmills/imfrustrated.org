import type { Metadata } from "next";
import Link from "next/link";
import { Header, FadeInSection } from "@/components/ClientSections";

export const metadata: Metadata = {
  title: "Free Tools | I'm Frustrated dot Org",
  description:
    "Free legal tools built by I'm Frustrated dot Org for the people we serve. Currently featuring I Don't Have a Will — a free, private, state-specific will generator that runs entirely in your browser.",
  alternates: { canonical: "https://imfrustrated.org/free-tools" },
  openGraph: {
    type: "article",
    url: "https://imfrustrated.org/free-tools",
    title: "Free Tools | I'm Frustrated dot Org",
    description:
      "Free legal tools built by I'm Frustrated dot Org for the people we serve. Currently featuring I Don't Have a Will — a free, private, state-specific will generator.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Tools | I'm Frustrated dot Org",
    description:
      "Free legal tools built by I'm Frustrated dot Org for the people we serve.",
  },
};

export default function FreeToolsPage() {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://imfrustrated.org" },
      { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://imfrustrated.org/free-tools" },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Free Legal Tools by I'm Frustrated dot Org",
    url: "https://imfrustrated.org/free-tools",
    description:
      "A collection of free legal tools published by I'm Frustrated dot Org for people who need to handle a legal task themselves rather than hire a lawyer.",
    isPartOf: { "@type": "WebSite", name: "I'm Frustrated dot Org", url: "https://imfrustrated.org" },
    hasPart: [
      {
        "@type": "WebApplication",
        name: "I Don't Have a Will",
        url: "https://idonthaveawill.com",
        applicationCategory: "LegalApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description:
          "A free self-help tool to draft a simple will in about 10 minutes. Covers all 50 US states and DC. Runs entirely in your browser — no account, no fees, no data stored on a server.",
        provider: {
          "@type": "NGO",
          name: "I'm Frustrated dot Org",
          url: "https://imfrustrated.org",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-24 md:py-32 bg-cream noise-overlay">
          <div className="absolute inset-0 bg-gradient-to-b from-warm-white via-transparent to-cream opacity-40" />
          <FadeInSection className="relative z-10 max-w-3xl mx-auto px-6 md:px-10">
            <nav className="text-xs text-muted mb-6">
              <Link href="/" className="hover:text-coral">Home</Link>
              <span className="mx-2">/</span>
              <span>Free Tools</span>
            </nav>
            <p className="text-coral text-sm font-semibold uppercase tracking-[0.2em] mb-4">Free Tools</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tight mb-8">
              Free legal tools, built for <br /> the people we serve<span className="text-coral">.</span>
            </h1>
            <div className="decorative-rule mb-10" />
            <p className="text-muted text-lg leading-relaxed mb-6">
              I&rsquo;m Frustrated dot Org started as a free conversation with a volunteer attorney. But some legal tasks don&rsquo;t need a conversation — they just need a tool. So we&rsquo;re building those too, and giving them away the same way: no fees, no signup, no catch.
            </p>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              Below is what&rsquo;s live today. More are on the way.
            </p>
          </FadeInSection>
        </section>

        {/* Featured tool — IDHAW */}
        <section className="py-20 md:py-28 bg-warm-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <FadeInSection>
              <a
                href="https://idonthaveawill.com"
                target="_blank"
                rel="noopener"
                className="group block bg-cream/60 border border-border/60 rounded-2xl p-8 md:p-12 hover:border-coral/40 hover:shadow-xl hover:shadow-coral/[0.06] transition-all duration-500"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="text-coral group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 6h18l8 8v28a2 2 0 01-2 2H12a2 2 0 01-2-2V8a2 2 0 012-2z" />
                      <path d="M30 6v8h8" />
                      <path d="M16 32l5 5 11-11" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-coral text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                      Free Will Generator
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal">
                      I Don&rsquo;t Have a Will
                    </h2>
                  </div>
                </div>

                <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
                  A free self-help tool to draft a simple will in about ten minutes. The whole thing runs in your browser — your name, your beneficiaries, your assets — none of it is sent to a server, none of it is stored anywhere. When you&rsquo;re done, download the document and follow the state-specific signing instructions. That&rsquo;s it.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Free forever — no account, no upsell, no premium tier",
                    "Covers all 50 US states and DC, with state-specific signing, witness, and notary requirements",
                    "Privacy-first — your data never leaves your browser",
                    "Plain-English questionnaire designed to take about 10 minutes",
                    "Download as Word or PDF when you’re done",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 text-muted text-[0.95rem] leading-relaxed">
                      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-coral shrink-0 mt-0.5" stroke="currentColor" strokeWidth="2">
                        <path d="M5 10l3.5 3.5L15 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-2 px-8 py-3.5 bg-coral text-white text-sm font-medium rounded-full group-hover:bg-coral-dark transition-colors duration-300">
                  Open the tool at idonthaveawill.com
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>

                <p className="text-muted/70 text-xs mt-6 leading-relaxed">
                  This tool generates a self-prepared will. It is not legal advice and does not replace consultation with a licensed estate-planning attorney for complex situations (significant assets, blended families, special-needs beneficiaries, business interests, or contested family dynamics). For situations like those, email <span className="text-coral">info@imfrustrated.org</span> for a free conversation first.
                </p>
              </a>
            </FadeInSection>
          </div>
        </section>

        {/* More tools coming */}
        <section className="py-20 md:py-24 bg-cream">
          <FadeInSection className="max-w-2xl mx-auto px-6 md:px-10 text-center">
            <p className="text-coral text-sm font-semibold uppercase tracking-[0.2em] mb-4">More on the way</p>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal leading-snug mb-6">
              We&rsquo;re building more tools like this<span className="text-coral">.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              If there&rsquo;s a legal task you wish had a free tool — a letter you wish you didn&rsquo;t have to pay a lawyer to draft, a document you wish you could fill in yourself — tell us. We pick what to build next based on what people actually ask for.
            </p>
            <a
              href="mailto:info@imfrustrated.org?subject=Free%20tool%20idea"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-charcoal text-sm font-medium rounded-full hover:border-coral hover:text-coral transition-colors duration-300"
            >
              Send us an idea
            </a>
          </FadeInSection>
        </section>

        {/* Cross-links */}
        <section className="py-16 md:py-20 bg-warm-white">
          <FadeInSection className="max-w-2xl mx-auto px-6 md:px-10 text-center">
            <p className="text-muted text-base leading-relaxed mb-6">
              Need to actually talk to an attorney? That&rsquo;s our other thing.
            </p>
            <a
              href="mailto:info@imfrustrated.org"
              className="inline-flex items-center gap-3 px-10 py-4 bg-coral text-white text-base font-medium rounded-full hover:bg-coral-dark transition-all duration-300"
            >
              info@imfrustrated.org
            </a>
            <div className="mt-12 flex justify-center gap-6 text-sm flex-wrap">
              <Link href="/how-it-works" className="text-muted hover:text-coral">How it works</Link>
              <Link href="/about" className="text-muted hover:text-coral">About us</Link>
              <Link href="/faq" className="text-muted hover:text-coral">FAQ</Link>
              <Link href="/" className="text-muted hover:text-coral">Home</Link>
            </div>
          </FadeInSection>
        </section>
      </main>
    </>
  );
}
