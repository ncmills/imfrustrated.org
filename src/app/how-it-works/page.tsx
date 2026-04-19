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
        <section className="relative py-24 md:py-32 bg-cream noise-overlay">
          <div className="absolute inset-0 bg-gradient-to-b from-warm-white via-transparent to-cream opacity-40" />
          <FadeInSection className="relative z-10 max-w-3xl mx-auto px-6 md:px-10">
            <nav className="text-xs text-muted mb-6">
              <Link href="/" className="hover:text-forest">Home</Link>
              <span className="mx-2">/</span>
              <span>How It Works</span>
            </nav>
            <p className="text-coral text-sm font-semibold uppercase tracking-[0.2em] mb-4">How It Works</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tight mb-8">
              The conversation you have <br /> before you hire a lawyer<span className="text-coral">.</span>
            </h1>
            <div className="decorative-rule mb-10" />
            <p className="text-muted text-lg leading-relaxed mb-6">
              Most legal problems start with one bad assumption: that you need to hire a lawyer to know whether you need to hire a lawyer. You don&rsquo;t. Before you spend a dollar on representation, you should have a clear, honest conversation with someone who actually understands the law and isn&rsquo;t billing you by the minute.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              That&rsquo;s what I&rsquo;m Frustrated dot Org is. We&rsquo;re a group of practicing attorneys who volunteer time to give people a real, informed perspective on their situation — the way a friend who happens to be a lawyer would, over a cup of coffee. There&rsquo;s no fee, no contract, and no judgment. Here&rsquo;s exactly how it works.
            </p>
          </FadeInSection>
        </section>

        <section className="py-20 md:py-28 bg-warm-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10 space-y-16">
            <FadeInSection>
              <div className="flex items-start gap-6">
                <div className="text-coral font-serif text-5xl font-bold leading-none w-16 shrink-0">01</div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mb-4">You talk, we listen</h2>
                  <p className="text-muted text-base md:text-lg leading-relaxed mb-4">
                    You start by emailing <a href="mailto:info@imfrustrated.org" className="text-coral hover:underline">info@imfrustrated.org</a> and telling us what&rsquo;s going on. Plain English. No legal jargon. Treat it like you&rsquo;re writing to a friend. Tell us what happened, who&rsquo;s involved, what worries you, what you&rsquo;re hoping for, and any deadlines or court dates you&rsquo;re aware of.
                  </p>
                  <p className="text-muted text-base md:text-lg leading-relaxed">
                    The more honest you are, the more useful we can be. There&rsquo;s no expectation of polish. People come to us mid-crisis — a lease that just blew up, an inheritance fight, a small business contract that turned sideways, a denial letter that doesn&rsquo;t make sense. We&rsquo;ve heard it all and we&rsquo;d rather hear it raw than rehearsed.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="flex items-start gap-6">
                <div className="text-coral font-serif text-5xl font-bold leading-none w-16 shrink-0">02</div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mb-4">We break it down</h2>
                  <p className="text-muted text-base md:text-lg leading-relaxed mb-4">
                    A volunteer attorney with relevant experience reviews your situation and writes back. We&rsquo;ll explain where you actually stand legally, what your realistic options look like, and what questions you should be asking before you take any next step. If we think you have a strong case, we&rsquo;ll say so. If we think the situation is more complicated than you realize, we&rsquo;ll say that too.
                  </p>
                  <p className="text-muted text-base md:text-lg leading-relaxed">
                    What we won&rsquo;t do is sugarcoat it or upsell you on services. We&rsquo;re not trying to capture you as a client — we just want you to make your next decision from a place of clarity instead of panic. If your situation is urgent, we&rsquo;ll flag that. If it&rsquo;s not as urgent as you fear, we&rsquo;ll tell you that too.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="flex items-start gap-6">
                <div className="text-coral font-serif text-5xl font-bold leading-none w-16 shrink-0">03</div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mb-4">You decide what&rsquo;s next</h2>
                  <p className="text-muted text-base md:text-lg leading-relaxed mb-4">
                    Once you have a clearer picture, the choice is yours. Some people walk away realizing they don&rsquo;t need a lawyer at all — the situation can be handled with a well-written letter, a phone call, or simply waiting it out. Some people walk away realizing they need to hire a specialist immediately, and they&rsquo;re now equipped with the right vocabulary and the right questions to interview attorneys.
                  </p>
                  <p className="text-muted text-base md:text-lg leading-relaxed">
                    Either way, you&rsquo;re no longer making decisions in the dark. You know what your options are, what the realistic outcomes look like, and what each path will cost you in time and money. That clarity is the whole point.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-cream">
          <FadeInSection className="max-w-2xl mx-auto px-6 md:px-10 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal leading-snug mb-6">
              Ready to talk it out<span className="text-coral">?</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              No commitment, no invoice, no judgment. Just an honest conversation with someone who understands the law and actually wants to help.
            </p>
            <a
              href="mailto:info@imfrustrated.org"
              className="inline-flex items-center gap-3 px-10 py-4 bg-forest text-paper text-base font-medium rounded-full hover:bg-forest-deep transition-all duration-300"
            >
              info@imfrustrated.org
            </a>
            <div className="mt-12 flex justify-center gap-6 text-sm flex-wrap">
              <Link href="/about" className="text-muted hover:text-forest">About us</Link>
              <Link href="/free-tools" className="text-muted hover:text-forest">Free tools</Link>
              <Link href="/faq" className="text-muted hover:text-forest">FAQ</Link>
              <Link href="/" className="text-muted hover:text-forest">Home</Link>
            </div>
          </FadeInSection>
        </section>
      </main>
    </>
  );
}
