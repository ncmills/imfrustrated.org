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
        <section className="relative py-24 md:py-32 bg-cream noise-overlay">
          <FadeInSection className="relative z-10 max-w-3xl mx-auto px-6 md:px-10">
            <nav className="text-xs text-muted mb-6">
              <Link href="/" className="hover:text-forest">Home</Link>
              <span className="mx-2">/</span>
              <span>About</span>
            </nav>
            <p className="text-coral text-sm font-semibold uppercase tracking-[0.2em] mb-4">About</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tight mb-8">
              We started this because <br /> the alternative was worse<span className="text-coral">.</span>
            </h1>
            <div className="decorative-rule mb-10" />
            <p className="text-muted text-lg leading-relaxed">
              I&rsquo;m Frustrated dot Org exists for one reason: too many people make irreversible legal decisions because they couldn&rsquo;t afford to ask a question first. Lawyers are expensive. Initial consultations vary. Most people facing a legal problem feel like they have two options — pay a stranger by the hour to hear the same story they&rsquo;re afraid to tell, or do nothing and hope it works out. Both are bad.
            </p>
          </FadeInSection>
        </section>

        <section className="py-20 md:py-28 bg-warm-white">
          <div className="max-w-3xl mx-auto px-6 md:px-10 space-y-10">
            <FadeInSection>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mb-4">
                What we are
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed mb-4">
                A volunteer network of practicing attorneys who donate time to give people honest, informed perspective on their legal situation before they spend money on representation. The model is intentionally simple. People email us. Lawyers respond. Nothing is billed. No retainer is signed. No relationship is formed beyond a single useful conversation.
              </p>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                We&rsquo;re not a law firm. We&rsquo;re not a legal aid clinic. We&rsquo;re not a lead-gen funnel. We&rsquo;re a thin layer of help between &ldquo;something is wrong&rdquo; and &ldquo;I just signed a five-figure retainer for a problem I didn&rsquo;t fully understand.&rdquo;
              </p>
            </FadeInSection>

            <FadeInSection>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mb-4">
                What we&rsquo;re not
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed mb-4">
                We&rsquo;re not your lawyers. We don&rsquo;t take cases. We don&rsquo;t go to court. We don&rsquo;t draft contracts on your behalf. We don&rsquo;t form attorney-client relationships, and the conversation we have with you isn&rsquo;t legal advice in the formal sense. (For the same reason a hospital cafeteria isn&rsquo;t a hospital.)
              </p>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                We&rsquo;re also not free legal aid. There are excellent organizations that handle legal aid for people who qualify financially, and we&rsquo;ll point you toward them when that&rsquo;s the right fit. What we offer is different — a conversation, not representation.
              </p>
            </FadeInSection>

            <FadeInSection>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mb-4">
                Why we don&rsquo;t charge
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed mb-4">
                Because the moment money changes hands, the conversation changes shape. When a lawyer is on the clock, the incentive is to keep the meter running. When a lawyer is donating time, the only incentive is to be useful. We wanted the second kind of conversation to exist for people who needed it.
              </p>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                Our volunteers are practicing attorneys with their own firms and clients. They aren&rsquo;t doing this for exposure or a referral pipeline. They&rsquo;re doing it because they remember being on the other side of a confusing legal situation themselves, and they know what an hour of clarity is worth when you&rsquo;re scared.
              </p>
            </FadeInSection>

            <FadeInSection>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mb-4">
                How to reach us
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed mb-4">
                Email <a href="mailto:info@imfrustrated.org" className="text-coral hover:underline">info@imfrustrated.org</a> with whatever&rsquo;s going on. There&rsquo;s no form, no portal, no triage chatbot. Just write to us the way you&rsquo;d write to a friend who happens to be an attorney, and a real person will read it.
              </p>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                If you&rsquo;d like to know more about how the conversation actually goes, see <Link href="/how-it-works" className="text-coral hover:underline">How It Works</Link>. If you have questions before reaching out, see the <Link href="/faq" className="text-coral hover:underline">FAQ</Link>.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-cream">
          <FadeInSection className="max-w-2xl mx-auto px-6 md:px-10 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal leading-snug mb-6">
              Frustrated<span className="text-coral">?</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Reach out. The first conversation is the most important one, and it&rsquo;s the one we exist for.
            </p>
            <a
              href="mailto:info@imfrustrated.org"
              className="inline-flex items-center gap-3 px-10 py-4 bg-forest text-paper text-base font-medium rounded-full hover:bg-forest-deep transition-all duration-300"
            >
              info@imfrustrated.org
            </a>
            <div className="mt-12 flex justify-center gap-6 text-sm flex-wrap">
              <Link href="/how-it-works" className="text-muted hover:text-forest">How it works</Link>
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
