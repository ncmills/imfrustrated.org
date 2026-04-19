import type { Metadata } from "next";
import Link from "next/link";
import { Header, FadeInSection } from "@/components/ClientSections";

export const metadata: Metadata = {
  title: "About | I'm Frustrated dot Org",
  description:
    "I'm Frustrated dot Org is a volunteer attorney network providing free, no-pressure legal conversations. Our mission, our model, and why we don't take fees.",
  alternates: { canonical: "https://imfrustrated.org/about" },
  openGraph: {
    type: "article",
    url: "https://imfrustrated.org/about",
    title: "About | I'm Frustrated dot Org",
    description:
      "I'm Frustrated dot Org is a volunteer attorney network providing free, no-pressure legal conversations.",
  },
};

const sections = [
  {
    marker: "§ I",
    title: "What we are",
    paragraphs: [
      "A volunteer network of practicing attorneys who donate time to give people honest, informed perspective on their legal situation before they spend money on representation. The model is intentionally simple. People email us. Lawyers respond. Nothing is billed. No retainer is signed. No relationship is formed beyond a single useful conversation.",
      "We're not a law firm. We're not a legal aid clinic. We're not a lead-gen funnel. We're a thin layer of help between “something is wrong” and “I just signed a five-figure retainer for a problem I didn't fully understand.”",
    ],
  },
  {
    marker: "§ II",
    title: "What we're not",
    paragraphs: [
      "We're not your lawyers. We don't take cases. We don't go to court. We don't draft contracts on your behalf. We don't form attorney-client relationships, and the conversation we have with you isn't legal advice in the formal sense. (For the same reason a hospital cafeteria isn't a hospital.)",
      "We're also not free legal aid. There are excellent organizations that handle legal aid for people who qualify financially, and we'll point you toward them when that's the right fit. What we offer is different — a conversation, not representation.",
    ],
  },
  {
    marker: "§ III",
    title: "Why we don't charge",
    paragraphs: [
      "Because the moment money changes hands, the conversation changes shape. When a lawyer is on the clock, the incentive is to keep the meter running. When a lawyer is donating time, the only incentive is to be useful. We wanted the second kind of conversation to exist for people who needed it.",
      "Our volunteers are practicing attorneys with their own firms and clients. They aren't doing this for exposure or a referral pipeline. They're doing it because they remember being on the other side of a confusing legal situation themselves, and they know what an hour of clarity is worth when you're scared.",
    ],
  },
];

export default function AboutPage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "I'm Frustrated dot Org",
    url: "https://imfrustrated.org",
    description:
      "Volunteer attorney network providing free, no-pressure legal conversations to people facing legal frustration.",
    logo: "https://imfrustrated.org/logo.svg",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "general inquiry",
      email: "info@imfrustrated.org",
    },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://imfrustrated.org" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://imfrustrated.org/about" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-paper">
          <FadeInSection className="relative z-10 max-w-3xl mx-auto px-6 md:px-10">
            <nav className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-warm mb-8 font-medium">
              <Link href="/" className="hover:text-forest transition-colors">Home</Link>
              <span className="mx-3 text-rule">/</span>
              <span className="text-amber">About</span>
            </nav>
            <p className="text-amber text-[0.72rem] font-semibold uppercase tracking-[0.3em] mb-4">About</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.75rem] font-semibold text-ink leading-[1.05] tracking-[-0.02em] mb-8">
              We started this because <br className="hidden sm:block" /> the alternative was worse<span className="text-amber">.</span>
            </h1>
            <div className="decorative-rule mb-10" />
            <p className="text-muted-warm text-lg leading-relaxed">
              I&rsquo;m Frustrated dot Org exists for one reason: too many people make irreversible legal decisions because they couldn&rsquo;t afford to ask a question first. Lawyers are expensive. Initial consultations vary. Most people facing a legal problem feel like they have two options — pay a stranger by the hour to hear the same story they&rsquo;re afraid to tell, or do nothing and hope it works out. Both are bad.
            </p>
            <p className="script text-2xl md:text-3xl mt-8 -rotate-1">
              we built the third option.
            </p>
          </FadeInSection>
        </section>

        {/* Body sections */}
        <section className="py-20 md:py-28 bg-paper-deep">
          <div className="max-w-3xl mx-auto px-6 md:px-10 space-y-16 md:space-y-20">
            {sections.map((s, i) => (
              <FadeInSection key={s.marker}>
                <div>
                  <p className="font-serif text-amber text-lg tracking-[0.1em] mb-3">{s.marker}</p>
                  <h2 className="font-serif text-2xl md:text-[2rem] font-semibold text-ink mb-6 tracking-[-0.01em]">
                    {s.title}
                  </h2>
                  <div className="space-y-4">
                    {s.paragraphs.map((p, j) => (
                      <p key={j} className="text-muted-warm text-base md:text-lg leading-[1.7]">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
                {i < sections.length - 1 && (
                  <div className="mt-16 md:mt-20 flex items-center gap-4" aria-hidden="true">
                    <span className="h-px flex-1 bg-rule" />
                    <svg viewBox="0 0 20 20" className="w-2.5 h-2.5 text-amber" fill="currentColor">
                      <circle cx="10" cy="10" r="4" />
                    </svg>
                    <span className="h-px flex-1 bg-rule" />
                  </div>
                )}
              </FadeInSection>
            ))}

            {/* Last section — how to reach us (with inline link emphasis) */}
            <FadeInSection>
              <div className="flex items-center gap-4 mb-16" aria-hidden="true">
                <span className="h-px flex-1 bg-rule" />
                <svg viewBox="0 0 20 20" className="w-2.5 h-2.5 text-amber" fill="currentColor">
                  <circle cx="10" cy="10" r="4" />
                </svg>
                <span className="h-px flex-1 bg-rule" />
              </div>
              <p className="font-serif text-amber text-lg tracking-[0.1em] mb-3">§ IV</p>
              <h2 className="font-serif text-2xl md:text-[2rem] font-semibold text-ink mb-6 tracking-[-0.01em]">
                How to reach us
              </h2>
              <p className="text-muted-warm text-base md:text-lg leading-[1.7] mb-4">
                Email{" "}
                <a
                  href="mailto:info@imfrustrated.org"
                  className="text-forest underline decoration-amber/70 decoration-[1.5px] underline-offset-[5px] hover:text-amber transition-colors"
                >
                  info@imfrustrated.org
                </a>
                {" "}with whatever&rsquo;s going on. There&rsquo;s no form, no portal, no triage chatbot. Just write to us the way you&rsquo;d write to a friend who happens to be an attorney, and a real person will read it.
              </p>
              <p className="text-muted-warm text-base md:text-lg leading-[1.7]">
                If you&rsquo;d like to know more about how the conversation actually goes, see{" "}
                <Link href="/how-it-works" className="text-forest underline decoration-amber/70 decoration-[1.5px] underline-offset-[5px] hover:text-amber transition-colors">
                  How It Works
                </Link>
                . If you have questions before reaching out, see the{" "}
                <Link href="/faq" className="text-forest underline decoration-amber/70 decoration-[1.5px] underline-offset-[5px] hover:text-amber transition-colors">
                  FAQ
                </Link>
                .
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-paper">
          <FadeInSection className="max-w-2xl mx-auto px-6 md:px-10 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink leading-snug mb-5 tracking-[-0.01em]">
              Frustrated<span className="text-amber">?</span>
            </h2>
            <p className="script text-2xl md:text-3xl mb-7 -rotate-1">
              reach out. we read every word.
            </p>
            <p className="text-muted-warm text-lg leading-relaxed mb-8">
              The first conversation is the most important one, and it&rsquo;s the one we exist for.
            </p>
            <a href="mailto:info@imfrustrated.org" className="btn-forest">
              info@imfrustrated.org
            </a>
            <div className="mt-12 flex justify-center gap-6 text-sm flex-wrap text-muted-warm">
              <Link href="/how-it-works" className="hover:text-forest transition-colors">How it works</Link>
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
