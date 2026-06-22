import type { Metadata } from "next";
import Link from "next/link";
import { Header, Reveal, Interactions, SiteFooter } from "@/components/ClientSections";

export const metadata: Metadata = {
  title: "How It Works | I'm Frustrated dot Org",
  description:
    "How I'm Frustrated dot Org connects people with volunteer attorneys for a free, no-pressure conversation before hiring a lawyer. The 3-step process explained.",
  alternates: { canonical: "https://imfrustrated.org/how-it-works" },
  openGraph: {
    type: "article",
    url: "https://imfrustrated.org/how-it-works",
    title: "How It Works | I'm Frustrated dot Org",
    description:
      "How I'm Frustrated dot Org connects people with volunteer attorneys for a free, no-pressure conversation before hiring a lawyer.",
  },
};

const chapters = [
  {
    numeral: "I",
    n: "1",
    eyebrow: "you talk",
    title: "You talk, we listen",
    paragraphs: [
      "You start by emailing info@imfrustrated.org and telling us what's going on. Plain English. No legal jargon. Treat it like you're writing to a friend. Tell us what happened, who's involved, what worries you, what you're hoping for, and any deadlines or court dates you're aware of.",
      "The more honest you are, the more useful we can be. There's no expectation of polish. People come to us mid-crisis — a lease that just blew up, an inheritance fight, a small business contract that turned sideways, a denial letter that doesn't make sense. We've heard it all and we'd rather hear it raw than rehearsed.",
    ],
  },
  {
    numeral: "II",
    n: "2",
    eyebrow: "we read",
    title: "We break it down",
    paragraphs: [
      "A volunteer attorney with relevant experience reviews your situation and writes back. We'll explain where you actually stand legally, what your realistic options look like, and what questions you should be asking before you take any next step. If we think you have a strong case, we'll say so. If we think the situation is more complicated than you realize, we'll say that too.",
      "What we won't do is sugarcoat it or upsell you on services. We're not trying to capture you as a client — we just want you to make your next decision from a place of clarity instead of panic. If your situation is urgent, we'll flag that. If it's not as urgent as you fear, we'll tell you that too.",
    ],
  },
  {
    numeral: "III",
    n: "3",
    eyebrow: "you decide",
    title: "You decide what's next",
    paragraphs: [
      "Once you have a clearer picture, the choice is yours. Some people walk away realizing they don't need a lawyer at all — the situation can be handled with a well-written letter, a phone call, or simply waiting it out. Some people walk away realizing they need to hire a specialist immediately, and they're now equipped with the right vocabulary and the right questions to interview attorneys.",
      "Either way, you're no longer making decisions in the dark. You know what your options are, what the realistic outcomes look like, and what each path will cost you in time and money. That clarity is the whole point.",
    ],
  },
];

export default function HowItWorksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get a Free Legal Conversation Before Hiring a Lawyer",
    description:
      "Three-step process for getting a free, informed legal perspective from a volunteer attorney through I'm Frustrated dot Org.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "You Talk, We Listen",
        text: "Email info@imfrustrated.org with what's going on — plain English, no legalese required. Tell us the situation, what you're worried about, and what outcome would feel like a win.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "We Break It Down",
        text: "A volunteer attorney reviews your situation and explains where you stand legally, what your options look like, and what questions you should be asking next.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "You Decide What's Next",
        text: "Walk away informed. Maybe you need to hire a lawyer, maybe you don't. Either way, you'll know what you're dealing with and won't get taken for a ride.",
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
              The conversation you have
              <br className="hidden sm:block" /> before you hire a lawyer.
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-sage-2 text-lg md:text-xl leading-[1.6] max-w-2xl mx-auto mt-7">
              Most legal problems start with one bad assumption: that you need to hire a lawyer to know
              whether you need to hire a lawyer. You don&rsquo;t. Before you spend a dollar on
              representation, you should have a clear, honest conversation with someone who actually
              understands the law and isn&rsquo;t billing you by the minute.
            </p>
          </Reveal>
          <Reveal delay={4}>
            <p className="text-sage-2 text-lg leading-[1.6] max-w-2xl mx-auto mt-5">
              That&rsquo;s what I&rsquo;m Frustrated dot Org is. We&rsquo;re a group of practicing
              attorneys who volunteer time to give people a real, informed perspective on their situation —
              the way a friend who happens to be a lawyer would, over a cup of coffee. There&rsquo;s no
              fee, no contract, and no judgment. Here&rsquo;s exactly how it works.
            </p>
          </Reveal>
        </section>

        {/* ─── Chapters ─── */}
        <section className="relative max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-16">
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
                              {c.numeral === "I" && j === 0 ? (
                                <>
                                  You start by emailing{" "}
                                  <a href="mailto:info@imfrustrated.org" className="text-sage underline decoration-clay/70 decoration-[1.5px] underline-offset-[5px] hover:text-clay transition-colors duration-300">
                                    info@imfrustrated.org
                                  </a>
                                  {" "}and telling us what&rsquo;s going on. Plain English. No legal jargon.
                                  Treat it like you&rsquo;re writing to a friend. Tell us what happened,
                                  who&rsquo;s involved, what worries you, what you&rsquo;re hoping for, and
                                  any deadlines or court dates you&rsquo;re aware of.
                                </>
                              ) : (
                                p
                              )}
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

        {/* ─── CTA ─── */}
        <section id="contact" className="relative max-w-5xl mx-auto px-6 md:px-8 pb-24">
          <Reveal>
            <div className="bg-sage rounded-[32px] px-6 sm:px-10 md:px-14 py-14 md:py-16 text-center">
              <div className="max-w-xl mx-auto">
                <p className="font-accent italic text-xl text-clay-soft">chapter one starts with an email</p>
                <h2 className="font-disp font-semibold text-bg text-3xl md:text-[2.6rem] tracking-[-0.03em] leading-tight mt-1.5">
                  Ready to talk it out?
                </h2>
                <p className="text-[#cdd6cd] text-lg leading-relaxed mt-4 mb-8">
                  No commitment, no invoice, no judgment. Just an honest conversation with someone who
                  understands the law and actually wants to help.
                </p>
                <a href="mailto:info@imfrustrated.org" className="btn-clay mag">
                  info@imfrustrated.org
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ar" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
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
