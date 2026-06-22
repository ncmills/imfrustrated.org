import type { Metadata } from "next";
import Link from "next/link";
import { Header, Reveal, SiteFooter } from "@/components/ClientSections";

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
      <div className="amb" aria-hidden="true"><i></i><i></i><i></i></div>
      <Header />
      <main className="relative">
        {/* Hero */}
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-12 md:pb-16">
          <Reveal delay={1}>
            <nav className="text-[0.7rem] uppercase tracking-[0.22em] text-sage-2 mb-8 font-medium">
              <Link href="/" className="hover:text-sage transition-colors duration-300">Home</Link>
              <span className="mx-3 text-rule">/</span>
              <span className="text-clay">About</span>
            </nav>
          </Reveal>
          <Reveal delay={2}>
            <p className="font-accent italic text-xl text-clay">about us</p>
          </Reveal>
          <Reveal delay={3}>
            <h1 className="font-disp font-semibold text-sage text-[2.4rem] sm:text-5xl lg:text-[3.75rem] leading-[1.05] tracking-[-0.03em] mt-2 mb-7">
              We started this because the alternative was worse.
            </h1>
          </Reveal>
          <Reveal delay={4}>
            <p className="text-sage-2 text-lg leading-[1.7] max-w-2xl">
              I&rsquo;m Frustrated dot Org exists for one reason: too many people make irreversible legal decisions because they couldn&rsquo;t afford to ask a question first. Lawyers are expensive. Initial consultations vary. Most people facing a legal problem feel like they have two options — pay a stranger by the hour to hear the same story they&rsquo;re afraid to tell, or do nothing and hope it works out. Both are bad.
            </p>
            <p className="font-accent italic text-clay text-2xl md:text-[1.7rem] mt-7">
              We built the third option.
            </p>
          </Reveal>
        </section>

        {/* Body sections */}
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <div className="space-y-6">
            {sections.map((s) => (
              <Reveal key={s.marker}>
                <div className="bg-card border border-rule rounded-2xl p-7 md:p-9">
                  <p className="font-accent italic text-clay text-lg mb-2">{s.marker}</p>
                  <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.875rem] tracking-[-0.03em] mb-5">
                    {s.title}
                  </h2>
                  <div className="space-y-4">
                    {s.paragraphs.map((p, j) => (
                      <p key={j} className="text-sage-2 text-base md:text-lg leading-[1.7]">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Last section — how to reach us (with inline link emphasis) */}
            <Reveal>
              <div className="bg-card border border-rule rounded-2xl p-7 md:p-9">
                <p className="font-accent italic text-clay text-lg mb-2">§ IV</p>
                <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.875rem] tracking-[-0.03em] mb-5">
                  How to reach us
                </h2>
                <p className="text-sage-2 text-base md:text-lg leading-[1.7] mb-4">
                  Email{" "}
                  <a
                    href="mailto:info@imfrustrated.org"
                    className="text-sage underline decoration-clay/70 decoration-[1.5px] underline-offset-[5px] hover:text-clay transition-colors duration-300"
                  >
                    info@imfrustrated.org
                  </a>
                  {" "}with whatever&rsquo;s going on. There&rsquo;s no form, no portal, no triage chatbot. Just write to us the way you&rsquo;d write to a friend who happens to be an attorney, and a real person will read it.
                </p>
                <p className="text-sage-2 text-base md:text-lg leading-[1.7]">
                  If you&rsquo;d like to know more about how the conversation actually goes, see{" "}
                  <Link href="/how-it-works" className="text-sage underline decoration-clay/70 decoration-[1.5px] underline-offset-[5px] hover:text-clay transition-colors duration-300">
                    How It Works
                  </Link>
                  . If you have questions before reaching out, see the{" "}
                  <Link href="/faq" className="text-sage underline decoration-clay/70 decoration-[1.5px] underline-offset-[5px] hover:text-clay transition-colors duration-300">
                    FAQ
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative max-w-5xl mx-auto px-6 md:px-8 pb-24">
          <Reveal>
            <div className="bg-sage rounded-[32px] px-6 sm:px-10 md:px-14 py-14 md:py-16 text-center">
              <h2 className="font-disp font-semibold text-bg text-3xl md:text-[2.6rem] tracking-[-0.03em] leading-tight mb-3">
                Frustrated?
              </h2>
              <p className="font-accent italic text-clay-soft text-2xl md:text-[1.7rem] mb-5">
                Reach out. We read every word.
              </p>
              <p className="text-[#cdd6cd] text-lg leading-relaxed max-w-xl mx-auto mb-8">
                The first conversation is the most important one, and it&rsquo;s the one we exist for.
              </p>
              <a href="mailto:info@imfrustrated.org" className="btn-clay">
                info@imfrustrated.org
              </a>
              <div className="mt-10 flex justify-center gap-6 text-sm flex-wrap text-[#cdd6cd]">
                <Link href="/how-it-works" className="hover:text-clay-soft transition-colors duration-300">How it works</Link>
                <Link href="/free-tools" className="hover:text-clay-soft transition-colors duration-300">Free tools</Link>
                <Link href="/faq" className="hover:text-clay-soft transition-colors duration-300">FAQ</Link>
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
