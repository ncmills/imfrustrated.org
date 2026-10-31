import type { Metadata } from "next";
import Link from "next/link";
import { Header, Reveal, Interactions, SiteFooter } from "@/components/ClientSections";
import { buildOpenGraph } from "@/lib/og";

export const metadata: Metadata = {
  title: "How It Works | I'm Frustrated dot Org",
  description:
    "How I'm Frustrated dot Org's free self-help letters and tools work: find your letter, fill it in with your facts, send it yourself — and when to get a lawyer instead.",
  alternates: { canonical: "https://imfrustrated.org/how-it-works" },
  openGraph: buildOpenGraph({
    path: "/how-it-works",
    title: "How It Works | I'm Frustrated dot Org",
    description:
      "How I'm Frustrated dot Org's free self-help letters and tools work: find it, fill it in, send it yourself.",
    // src/app/how-it-works/ has no colocated opengraph-image file.
    hasRouteImage: false,
  }),
};

const chapters = [
  {
    numeral: "I",
    n: "1",
    eyebrow: "you find",
    title: "Find your letter or tool",
    paragraphs: [
      "Start with the free letters and tools. Each one covers a common, everyday problem — a security deposit that never came back, a bill you don't owe, a denial letter that doesn't make sense, a contract that turned sideways — and explains in plain English what the letter does and when it fits.",
      "If nothing fits, you can tell us what happened using the form on our home page, and we'll email you a draft self-help letter you can send yourself. This is legal information, not legal advice; no one acts as your lawyer and no attorney-client relationship is formed.",
    ],
  },
  {
    numeral: "II",
    n: "2",
    eyebrow: "you fill it in",
    title: "Fill it in with your facts",
    paragraphs: [
      "Every template has blanks for the details that make it yours: names, dates, amounts, what was promised and what happened. Be specific and stick to facts you can back up. Dates, receipts, photos, and earlier emails make a letter much harder to ignore.",
      "Read the whole letter before you use it. Remove anything that doesn't apply to you, and check your state's rules on deadlines and notice periods — they vary. The template is a starting point, not a finished answer.",
    ],
  },
  {
    numeral: "III",
    n: "3",
    eyebrow: "you send it",
    title: "Send it yourself",
    paragraphs: [
      "You send the letter yourself, by email, mail, or both. For anything important, use a method that proves delivery, like certified mail, and keep a copy of everything you send and every reply you get.",
      "A lot of everyday problems end here: a clear, calm, well-documented letter is often all it takes. If it doesn't work, you've built a paper trail that will help with whatever comes next.",
    ],
  },
];

export default function HowItWorksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use a Free Self-Help Legal Letter",
    description:
      "Three steps to using I'm Frustrated dot Org's free self-help letters and tools: find the right one, fill it in with your facts, and send it yourself.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Find Your Letter or Tool",
        text: "Browse the free letters and tools and pick the one that fits your situation, or request a draft self-help letter by email.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Fill It In With Your Facts",
        text: "Add your names, dates, amounts, and what happened. Remove anything that doesn't apply and check your state's deadlines.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Send It Yourself",
        text: "Send the letter by a method that proves delivery and keep copies. If a deadline is close or the stakes are high, talk to a lawyer.",
      },
    ],
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://imfrustrated.org" },
      { "@type": "ListItem", position: 2, name: "How It Works", item: "https://imfrustrated.org/how-it-works" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="amb" aria-hidden="true"><i></i><i></i><i></i></div>
      <Header />
      <Interactions />

      <main className="relative">
        {/* ─── Hero ─── */}
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-12 md:pb-16 text-center">
          <Reveal delay={1}>
            <nav className="text-[0.72rem] uppercase tracking-[0.2em] text-sage-2 mb-7 font-semibold">
              <Link href="/" className="hover:text-clay transition-colors duration-300">Home</Link>
              <span className="mx-3 text-rule">/</span>
              <span className="text-clay">How It Works</span>
            </nav>
          </Reveal>
          <Reveal delay={2}>
            <p className="font-accent italic text-xl text-clay">it&rsquo;s simpler than you think</p>
            <h1 className="font-disp font-semibold text-sage text-[2.4rem] sm:text-5xl md:text-6xl leading-[1.04] tracking-[-0.03em] mt-2">
              Find it, fill it in,
              <br className="hidden sm:block" /> send it yourself.
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-sage-2 text-lg md:text-xl leading-[1.6] max-w-2xl mx-auto mt-7">
              Most everyday legal problems start the same way: with a letter. Asking for your deposit back,
              disputing a charge, appealing a denial. You don&rsquo;t need to pay by the hour to write one.
              You need to know what to say, what to include, and when a letter isn&rsquo;t enough.
            </p>
          </Reveal>
          <Reveal delay={4}>
            <p className="text-sage-2 text-lg leading-[1.6] max-w-2xl mx-auto mt-5">
              That&rsquo;s what I&rsquo;m Frustrated dot Org is: a nonprofit that publishes free legal
              information, self-help guides, tools, and template letters. It&rsquo;s legal information, not
              legal advice. There&rsquo;s no fee, no account, and no judgment. Here&rsquo;s exactly how it works.
            </p>
          </Reveal>
        </section>

        {/* ─── Chapters ─── */}
        <section className="relative max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <Reveal>
            <div className="bg-bg-2 rounded-[32px] px-7 md:px-12 py-14 md:py-16">
              <div className="space-y-14 md:space-y-16">
                {chapters.map((c) => (
                  <Reveal key={c.numeral}>
                    <article className="grid md:grid-cols-[auto,1fr] gap-x-8 md:gap-x-12 gap-y-5 items-start">
                      <div className="relative w-16 h-16 shrink-0" aria-hidden="true">
                        <svg viewBox="0 0 64 64" className="step-ring absolute inset-0 w-full h-full">
                          <circle cx="32" cy="32" r="31" />
                        </svg>
                        <span className="absolute inset-0 grid place-items-center font-accent italic text-2xl text-clay">{c.numeral}</span>
                      </div>
                      <div>
                        <p className="font-accent italic text-lg text-clay mb-1">{c.eyebrow}</p>
                        <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.85rem] tracking-[-0.02em] mb-4">
                          {c.title}
                        </h2>
                        <div className="space-y-4">
                          {c.paragraphs.map((p, j) => (
                            <p key={j} className="text-sage-2 text-base md:text-lg leading-[1.65]">
                              {p}
                            </p>
                          ))}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ─── When to get a lawyer ─── */}
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pb-12 md:pb-16">
          <Reveal>
            <div className="bg-card border border-rule rounded-2xl p-7 md:p-9">
              <p className="font-accent italic text-clay text-lg mb-2">when a letter isn&rsquo;t enough</p>
              <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.875rem] tracking-[-0.03em] mb-5">
                When to get a lawyer instead
              </h2>
              <div className="space-y-4">
                <p className="text-sage-2 text-base md:text-lg leading-[1.7]">
                  Self-help has limits. Talk to a licensed attorney or your local legal aid office if you&rsquo;ve
                  been sued or served, if a court date or filing deadline is close, if you&rsquo;re facing eviction,
                  arrest, or the loss of a job or benefits, or if a lot of money or your safety is at stake.
                </p>
                <p className="text-sage-2 text-base md:text-lg leading-[1.7]">
                  If you can&rsquo;t afford a lawyer, legal aid offices help people who qualify financially, and your
                  state bar&rsquo;s lawyer referral service can connect you with an attorney.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ─── CTA ─── */}
        <section id="contact" className="relative max-w-6xl mx-auto px-6 md:px-8 pb-24">
          <Reveal>
            <div className="bg-sage rounded-[32px] px-6 sm:px-10 md:px-14 py-14 md:py-16 text-center">
              <div className="max-w-xl mx-auto">
                <p className="font-accent italic text-xl text-clay-soft">step one starts with a letter</p>
                <h2 className="font-disp font-semibold text-bg text-3xl md:text-[2.6rem] tracking-[-0.03em] leading-tight mt-1.5">
                  Ready to find your letter?
                </h2>
                <p className="text-[#cdd6cd] text-lg leading-relaxed mt-4 mb-8">
                  No account, no invoice, no judgment. Free letters and tools you fill in and send yourself.
                </p>
                <Link href="/letters" className="btn-clay mag">
                  Browse free letters
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ar" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
                <div className="mt-12 flex justify-center gap-6 text-sm flex-wrap text-[#cdd6cd]">
                  <Link href="/about" className="hover:text-clay-soft transition-colors duration-300">About us</Link>
                  <Link href="/free-tools" className="hover:text-clay-soft transition-colors duration-300">Free tools</Link>
                  <Link href="/faq" className="hover:text-clay-soft transition-colors duration-300">FAQ</Link>
                  <Link href="/" className="hover:text-clay-soft transition-colors duration-300">Home</Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
