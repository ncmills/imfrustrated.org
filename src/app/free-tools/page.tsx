import type { Metadata } from "next";
import Link from "next/link";
import { Header, Reveal, Interactions, SiteFooter } from "@/components/ClientSections";

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
      {
        "@type": "CollectionPage",
        name: "Letter Templates",
        url: "https://imfrustrated.org/letters",
        description:
          "A free, attorney-written library of plain-English letter templates that invoke real federal and state statutes — security deposits, billing errors, debt validation, medical records, credit-report disputes, and more.",
        provider: {
          "@type": "NGO",
          name: "I'm Frustrated dot Org",
          url: "https://imfrustrated.org",
        },
      },
      {
        "@type": "WebApplication",
        name: "AISSDI",
        url: "https://aissdi.com",
        applicationCategory: "LegalApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description:
          "Free Social Security disability decision tools for claimants and their attorneys. Estimate the approval odds for a claim like yours, look up any administrative law judge's approval rate and hearing-office wait times, and weigh your appeal options (Appeals Council remand rates) — all built from public SSA data. No account required.",
        provider: {
          "@type": "NGO",
          name: "I'm Frustrated dot Org",
          url: "https://imfrustrated.org",
        },
      },
    ],
  };

  const willFeatures = [
    "Free forever — no account, no upsell, no premium tier",
    "Covers all 50 US states and DC, with state-specific signing, witness, and notary requirements",
    "Privacy-first — your data never leaves your browser",
    "Plain-English questionnaire designed to take about 10 minutes",
    "Download as Word or PDF when you’re done",
  ];

  const letterFeatures = [
    "Verified statute citations — federal and state",
    "Written by practicing attorneys, free to use",
    "Plain-English explanations of what the law actually says",
    "State-by-state notes where the law varies",
    "No account, no upsell, no catch",
  ];

  const ssdiFeatures = [
    "Approval-odds estimator — base rates for a claim like yours by condition, state, age, and stage",
    "Look up any administrative law judge's approval rate and your hearing-office wait times",
    "Appeal-decision guide — Appeals Council remand rates and the top reasons cases get sent back",
    "Built entirely from public SSA data, updated quarterly",
    "Free, no account — for claimants representing themselves and the attorneys who help them",
  ];

  const dwFeatures = [
    "Learns your writing voice from a short sample",
    "Rewrites a stiff form letter so it sounds like you",
    "Good for complaints, disputes, and hard emails",
    "Free to use — optional upgrade for heavy use",
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <div className="amb" aria-hidden="true"><i></i><i></i><i></i></div>
      <Header />
      <Interactions />

      <main className="relative">
        {/* ─── Hero ─── */}
        <section className="relative max-w-5xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-12 md:pb-16 text-center">
          <Reveal delay={1}>
            <nav className="text-[0.72rem] uppercase tracking-[0.2em] text-sage-2 mb-7 font-semibold">
              <Link href="/" className="hover:text-clay transition-colors duration-300">Home</Link>
              <span className="mx-3 text-rule">/</span>
              <span className="text-clay">Free Tools</span>
            </nav>
          </Reveal>
          <Reveal delay={2}>
            <p className="font-accent italic text-xl text-clay">do it yourself</p>
            <h1 className="font-disp font-semibold text-sage text-[2.4rem] sm:text-5xl md:text-6xl leading-[1.04] tracking-[-0.03em] mt-2">
              Free legal tools, built for
              <br className="hidden sm:block" /> the people we serve.
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-sage-2 text-lg md:text-xl leading-[1.6] max-w-2xl mx-auto mt-7">
              I&rsquo;m Frustrated dot Org started as a free conversation with a volunteer attorney.
              But some legal tasks don&rsquo;t need a conversation — they just need a tool. So we&rsquo;re
              building those too — plus a couple more we trust. Free to use, no fine print.
            </p>
          </Reveal>
        </section>

        {/* ─── Featured tools ─── */}
        <section id="tools" className="relative max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-accent italic text-xl text-clay">what&rsquo;s live today</p>
            <h2 className="font-disp font-semibold text-sage text-3xl md:text-[2.75rem] tracking-[-0.03em] mt-1.5">
              The free tools
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {/* No.01 — IDHAW */}
            <Reveal delay={1}>
              <a
                href="https://idonthaveawill.com"
                target="_blank"
                rel="noopener"
                className="tool-card group block p-8 md:p-9 h-full"
              >
                <div className="w-12 h-12 rounded-[14px] bg-mist text-sage grid place-items-center font-disp font-bold text-base mb-5">01</div>
                <p className="text-clay text-[0.72rem] font-semibold uppercase tracking-[0.2em] mb-2">Free will generator</p>
                <h3 className="font-disp font-semibold text-sage text-2xl tracking-[-0.02em]">I Don&rsquo;t Have a Will</h3>
                <p className="text-sage-2 mt-2.5 leading-relaxed">
                  A free self-help tool to draft a simple will in about ten minutes. The whole thing runs
                  in your browser — your name, your beneficiaries, your assets — none of it is sent to a
                  server or stored anywhere. When you&rsquo;re done, download the document and follow the
                  state-specific signing instructions. That&rsquo;s it.
                </p>
                <ul className="space-y-2.5 mt-6">
                  {willFeatures.map((line) => (
                    <li key={line} className="flex items-start gap-3 text-sage-2 text-[0.95rem] leading-relaxed">
                      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-clay shrink-0 mt-0.5" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 10l3.5 3.5L15 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 mt-6 font-semibold text-[0.95rem] text-clay">
                  Open the tool at idonthaveawill.com
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ar group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <p className="text-sage-2/80 text-xs mt-7 leading-relaxed">
                  This tool generates a self-prepared will. It is not legal advice and does not replace
                  consultation with a licensed estate-planning attorney for complex situations (significant
                  assets, blended families, special-needs beneficiaries, business interests, or contested
                  family dynamics). For situations like those, email{" "}
                  <span className="text-sage">info@imfrustrated.org</span> for a free conversation first.
                </p>
              </a>
            </Reveal>

            {/* No.02 — Letters */}
            <Reveal delay={2}>
              <Link href="/letters" className="tool-card group block p-8 md:p-9 h-full">
                <div className="w-12 h-12 rounded-[14px] bg-clay-soft/30 text-clay grid place-items-center font-disp font-bold text-base mb-5">02</div>
                <p className="text-clay text-[0.72rem] font-semibold uppercase tracking-[0.2em] mb-2">Free letter library</p>
                <h3 className="font-disp font-semibold text-sage text-2xl tracking-[-0.02em]">Letters That Get a Response</h3>
                <p className="text-sage-2 mt-2.5 leading-relaxed">
                  Most legal problems don&rsquo;t need a lawyer. They need a clear, properly written letter —
                  one that quotes the statute, sets the deadline, and tells the other side what happens if
                  they ignore it. We&rsquo;ve written a library of them. Security deposits, billing-error
                  disputes, debt validation, medical records, credit-report errors. Every citation verified.
                  Free to copy, customize, send.
                </p>
                <ul className="space-y-2.5 mt-6">
                  {letterFeatures.map((line) => (
                    <li key={line} className="flex items-start gap-3 text-sage-2 text-[0.95rem] leading-relaxed">
                      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-clay shrink-0 mt-0.5" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 10l3.5 3.5L15 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 mt-6 font-semibold text-[0.95rem] text-clay">
                  Browse the library
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ar group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <p className="text-sage-2/80 text-xs mt-7 leading-relaxed">
                  Each template is for informational use only — not legal advice. For situations that are
                  urgent, complicated, or high-stakes, email{" "}
                  <span className="text-sage">info@imfrustrated.org</span> for a free conversation with a
                  volunteer attorney before you send.
                </p>
              </Link>
            </Reveal>

            {/* No.03 — AISSDI */}
            <Reveal delay={3}>
              <a
                href="https://aissdi.com"
                target="_blank"
                rel="noopener"
                className="tool-card group block p-8 md:p-9 h-full"
              >
                <div className="w-12 h-12 rounded-[14px] bg-mist text-sage grid place-items-center font-disp font-bold text-base mb-5">03</div>
                <p className="text-clay text-[0.72rem] font-semibold uppercase tracking-[0.2em] mb-2">Free disability tools</p>
                <h3 className="font-disp font-semibold text-sage text-2xl tracking-[-0.02em]">A.I. SSDI</h3>
                <p className="text-sage-2 mt-2.5 leading-relaxed">
                  A Social Security disability denial isn&rsquo;t the end of the road — most cases that win,
                  win on appeal. AISSDI turns public SSA data into plain decision tools: estimate the
                  approval odds for a claim like yours, look up the administrative law judge assigned to
                  your hearing, and weigh your appeal paths — Appeals Council or federal court — with the
                  actual remand rates. Free, no account, for claimants and the attorneys who help them.
                </p>
                <ul className="space-y-2.5 mt-6">
                  {ssdiFeatures.map((line) => (
                    <li key={line} className="flex items-start gap-3 text-sage-2 text-[0.95rem] leading-relaxed">
                      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-clay shrink-0 mt-0.5" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 10l3.5 3.5L15 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 mt-6 font-semibold text-[0.95rem] text-clay">
                  Open the tool at aissdi.com
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ar group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <p className="text-sage-2/80 text-xs mt-7 leading-relaxed">
                  AISSDI provides research and statistics, not legal advice, and using it does not create an
                  attorney-client relationship. If you&rsquo;ve been denied and want to talk through your
                  appeal options first, email{" "}
                  <span className="text-sage">info@imfrustrated.org</span> for a free conversation with a
                  volunteer attorney.
                </p>
              </a>
            </Reveal>

            {/* No.04 — DoppelWriter (a trusted writing tool; free to use). dofollow. */}
            <Reveal delay={4}>
              <a
                href="https://doppelwriter.com"
                target="_blank"
                rel="noopener"
                className="tool-card group block p-8 md:p-9 h-full"
              >
                <div className="w-12 h-12 rounded-[14px] bg-clay-soft/30 text-clay grid place-items-center font-disp font-bold text-base mb-5">04</div>
                <p className="text-clay text-[0.72rem] font-semibold uppercase tracking-[0.2em] mb-2">Write it in your voice</p>
                <h3 className="font-disp font-semibold text-sage text-2xl tracking-[-0.02em]">DoppelWriter</h3>
                <p className="text-sage-2 mt-2.5 leading-relaxed">
                  Our letter library gives you the words. DoppelWriter makes them sound like <em>you</em>.
                  Paste a draft — a complaint, a billing dispute, a hard email you&rsquo;ve been putting off —
                  and it learns your voice and rewrites it in your own words, so a form letter reads like a
                  real person wrote it. Free to use; an optional upgrade unlocks heavier use.
                </p>
                <ul className="space-y-2.5 mt-6">
                  {dwFeatures.map((line) => (
                    <li key={line} className="flex items-start gap-3 text-sage-2 text-[0.95rem] leading-relaxed">
                      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-clay shrink-0 mt-0.5" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 10l3.5 3.5L15 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 mt-6 font-semibold text-[0.95rem] text-clay">
                  Open DoppelWriter at doppelwriter.com
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ar group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <p className="text-sage-2/80 text-xs mt-7 leading-relaxed">
                  DoppelWriter is a separate writing app (free to start, quick signup). It helps you say
                  things in your own words — it isn&rsquo;t legal advice. For anything urgent or high-stakes,
                  email{" "}
                  <span className="text-sage">info@imfrustrated.org</span> first.
                </p>
              </a>
            </Reveal>
          </div>
        </section>

        {/* ─── More on the way ─── */}
        <section className="relative max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <Reveal>
            <div className="bg-bg-2 rounded-[32px] px-8 md:px-12 py-14 text-center">
              <div className="max-w-xl mx-auto">
                <p className="font-accent italic text-xl text-clay">what should we build next?</p>
                <h2 className="font-disp font-semibold text-sage text-3xl md:text-[2.4rem] tracking-[-0.03em] mt-1.5">
                  We&rsquo;re building more tools like this.
                </h2>
                <p className="text-sage-2 text-lg leading-relaxed mt-5 mb-8">
                  If there&rsquo;s a legal task you wish had a free tool — a letter you wish you didn&rsquo;t
                  have to pay a lawyer to draft, a document you wish you could fill in yourself — tell us.
                  We pick what to build next based on what people actually ask for.
                </p>
                <a href="mailto:info@imfrustrated.org?subject=Free%20tool%20idea" className="btn-clay mag">
                  Send us an idea
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ar" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ─── Cross-links ─── */}
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pb-24 text-center">
          <Reveal>
            <p className="text-sage-2 text-base leading-relaxed mb-6">
              Need to actually talk to an attorney? That&rsquo;s our other thing.
            </p>
            <a href="mailto:info@imfrustrated.org" className="btn-soft mag">info@imfrustrated.org</a>
            <div className="mt-12 flex justify-center gap-6 text-sm flex-wrap text-sage-2">
              <Link href="/how-it-works" className="hover:text-clay transition-colors duration-300">How it works</Link>
              <Link href="/about" className="hover:text-clay transition-colors duration-300">About us</Link>
              <Link href="/faq" className="hover:text-clay transition-colors duration-300">FAQ</Link>
              <Link href="/" className="hover:text-clay transition-colors duration-300">Home</Link>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
