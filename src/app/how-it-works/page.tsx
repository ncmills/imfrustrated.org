import type { Metadata } from "next";
import Link from "next/link";
import { Header, FadeInSection } from "@/components/ClientSections";

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
    title: "You talk, we listen",
    paragraphs: [
      "You start by emailing info@imfrustrated.org and telling us what's going on. Plain English. No legal jargon. Treat it like you're writing to a friend. Tell us what happened, who's involved, what worries you, what you're hoping for, and any deadlines or court dates you're aware of.",
      "The more honest you are, the more useful we can be. There's no expectation of polish. People come to us mid-crisis — a lease that just blew up, an inheritance fight, a small business contract that turned sideways, a denial letter that doesn't make sense. We've heard it all and we'd rather hear it raw than rehearsed.",
    ],
  },
  {
    numeral: "II",
    title: "We break it down",
    paragraphs: [
      "A volunteer attorney with relevant experience reviews your situation and writes back. We'll explain where you actually stand legally, what your realistic options look like, and what questions you should be asking before you take any next step. If we think you have a strong case, we'll say so. If we think the situation is more complicated than you realize, we'll say that too.",
      "What we won't do is sugarcoat it or upsell you on services. We're not trying to capture you as a client — we just want you to make your next decision from a place of clarity instead of panic. If your situation is urgent, we'll flag that. If it's not as urgent as you fear, we'll tell you that too.",
    ],
  },
  {
    numeral: "III",
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
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-paper">
          <FadeInSection className="relative z-10 max-w-3xl mx-auto px-6 md:px-10">
            <nav className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-warm mb-8 font-medium">
              <Link href="/" className="hover:text-forest transition-colors">Home</Link>
              <span className="mx-3 text-rule">/</span>
              <span className="text-amber">How It Works</span>
            </nav>
            <p className="text-amber text-[0.72rem] font-semibold uppercase tracking-[0.3em] mb-4">How It Works</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.75rem] font-semibold text-ink leading-[1.05] tracking-[-0.02em] mb-8">
              The conversation you have <br className="hidden sm:block" /> before you hire a lawyer<span className="text-amber">.</span>
            </h1>
            <div className="decorative-rule mb-10" />
            <p className="text-muted-warm text-lg leading-relaxed mb-6">
              Most legal problems start with one bad assumption: that you need to hire a lawyer to know whether you need to hire a lawyer. You don&rsquo;t. Before you spend a dollar on representation, you should have a clear, honest conversation with someone who actually understands the law and isn&rsquo;t billing you by the minute.
            </p>
            <p className="text-muted-warm text-lg leading-relaxed">
              That&rsquo;s what I&rsquo;m Frustrated dot Org is. We&rsquo;re a group of practicing attorneys who volunteer time to give people a real, informed perspective on their situation — the way a friend who happens to be a lawyer would, over a cup of coffee. There&rsquo;s no fee, no contract, and no judgment. Here&rsquo;s exactly how it works.
            </p>
            <p className="script text-2xl md:text-3xl mt-8 -rotate-1">three chapters, one coffee.</p>
          </FadeInSection>
        </section>

        {/* Chapters */}
        <section className="py-20 md:py-28 bg-paper-deep">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <div className="space-y-16 md:space-y-20">
              {chapters.map((c, i) => (
                <FadeInSection key={c.numeral}>
                  <article className="grid md:grid-cols-[auto,1fr] gap-x-10 md:gap-x-14 gap-y-4 items-start">
                    <div className="chapter-numeral relative" aria-hidden="true">
                      {c.numeral}
                      <span className="absolute -bottom-2 left-0 h-[2px] w-10 bg-amber" />
                    </div>
                    <div className="md:pt-4">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-amber mb-3">
                        Chapter {c.numeral}
                      </p>
                      <h2 className="font-serif text-2xl md:text-[1.85rem] font-semibold text-ink mb-5 tracking-[-0.01em]">
                        {c.title}
                      </h2>
                      <div className="space-y-4">
                        {c.paragraphs.map((p, j) => (
                          <p key={j} className="text-muted-warm text-base md:text-lg leading-[1.65]">
                            {i === 0 && j === 0 ? (
                              <>
                                You start by emailing{" "}
                                <a href="mailto:info@imfrustrated.org" className="text-forest underline decoration-amber/70 decoration-[1.5px] underline-offset-[5px] hover:text-amber transition-colors">
                                  info@imfrustrated.org
                                </a>
                                {" "}and telling us what&rsquo;s going on. Plain English. No legal jargon. Treat it like you&rsquo;re writing to a friend. Tell us what happened, who&rsquo;s involved, what worries you, what you&rsquo;re hoping for, and any deadlines or court dates you&rsquo;re aware of.
                              </>
                            ) : (
                              p
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </article>
                  {i < chapters.length - 1 && (
                    <div className="mt-16 md:mt-20 flex items-center gap-4" aria-hidden="true">
                      <span className="h-px flex-1 bg-rule" />
                      <svg viewBox="0 0 20 20" className="w-3 h-3 text-amber" fill="currentColor">
                        <circle cx="10" cy="10" r="4" />
                      </svg>
                      <span className="h-px flex-1 bg-rule" />
                    </div>
                  )}
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-paper">
          <FadeInSection className="max-w-2xl mx-auto px-6 md:px-10 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink leading-snug mb-5 tracking-[-0.01em]">
              Ready to talk it out<span className="text-amber">?</span>
            </h2>
            <p className="script text-2xl md:text-3xl mb-7 -rotate-1">
              chapter one starts with an email.
            </p>
            <p className="text-muted-warm text-lg leading-relaxed mb-8">
              No commitment, no invoice, no judgment. Just an honest conversation with someone who understands the law and actually wants to help.
            </p>
            <a
              href="mailto:info@imfrustrated.org"
              className="btn-forest"
            >
              info@imfrustrated.org
            </a>
            <div className="mt-12 flex justify-center gap-6 text-sm flex-wrap text-muted-warm">
              <Link href="/about" className="hover:text-forest transition-colors">About us</Link>
              <Link href="/free-tools" className="hover:text-forest transition-colors">Free tools</Link>
              <Link href="/faq" className="hover:text-forest transition-colors">FAQ</Link>
              <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            </div>
          </FadeInSection>
        </section>
      </main>
    </>
  );
}
