import type { Metadata } from "next";
import Link from "next/link";
import { Header, Reveal, SiteFooter } from "@/components/ClientSections";
import { buildOpenGraph } from "@/lib/og";

export const metadata: Metadata = {
  title: "About | I'm Frustrated dot Org",
  description:
    "I'm Frustrated dot Org publishes free legal information, self-help guides, tools, and template letters. Our mission, our model, and why it's free.",
  alternates: { canonical: "https://imfrustrated.org/about" },
  openGraph: buildOpenGraph({
    path: "/about",
    title: "About | I'm Frustrated dot Org",
    description:
      "I'm Frustrated dot Org publishes free legal information, self-help guides, tools, and template letters.",
    // src/app/about/ has no colocated opengraph-image file.
    hasRouteImage: false,
  }),
};

const sections = [
  {
    marker: "§ I",
    title: "What we are",
    paragraphs: [
      "Free legal information and self-help tools: plain-English guides, template letters, and simple tools that help you understand where you stand and take the first step yourself. The model is intentionally simple. You find the letter or guide that fits. You fill it in with your facts. You send it yourself. Nothing is billed.",
      "We're not a law firm. We're not a legal aid clinic. We're not a lead-gen funnel. We're a thin layer of help between “something is wrong” and “I just signed a five-figure retainer for a problem I didn't fully understand.”",
    ],
  },
  {
    marker: "§ II",
    title: "What we're not",
    paragraphs: [
      "We're not your lawyers. We don't take cases. We don't go to court. We don't give legal advice, and using this site doesn't create an attorney-client relationship. What we publish is legal information: general explanations and templates you adapt to your own situation.",
      "We're also not free legal aid. There are excellent legal aid organizations for people who qualify financially, and our guides point you toward them, and toward your state bar's lawyer referral service, when your situation needs a lawyer.",
    ],
  },
  {
    marker: "§ III",
    title: "Why it's free",
    paragraphs: [
      "Because the first step in most everyday legal problems is a clear, well-written letter and a basic sense of your rights, and nobody should have to pay by the hour for that. A demand letter, a dispute letter, a records request: these follow patterns, and the patterns can be shared.",
      "So we publish them, free, for anyone who needs them. If your problem turns out to be bigger than a letter, you'll at least walk into a lawyer's office knowing what to ask.",
    ],
  },
];

export default function AboutPage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "I'm Frustrated dot Org",
    url: "https://imfrustrated.org",
    description:
      "Publishes free legal information, self-help guides, tools, and template letters for people facing everyday legal problems. Not a law firm; does not give legal advice.",
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
              I&rsquo;m Frustrated dot Org exists for one reason: too many people give up on a fair claim, or make an irreversible legal decision, because they didn&rsquo;t know where to start. Lawyers are expensive. Most people facing an everyday legal problem feel like they have two options — pay by the hour before they even understand the problem, or do nothing and hope it works out. Both are bad.
            </p>
            <p className="font-accent italic text-clay text-2xl md:text-[1.7rem] mt-7">
              We built the third option: free, self-help.
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
                  {" "}with questions about the site, a broken link, or a letter or guide you wish we had. We can&rsquo;t give legal advice about your situation; for that, contact a licensed attorney or your local legal aid office.
                </p>
                <p className="text-sage-2 text-base md:text-lg leading-[1.7]">
                  To see how the self-help tools work, see{" "}
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
        <section className="relative max-w-6xl mx-auto px-6 md:px-8 pb-24">
          <Reveal>
            <div className="bg-sage rounded-[32px] px-6 sm:px-10 md:px-14 py-14 md:py-16 text-center">
              <h2 className="font-disp font-semibold text-bg text-3xl md:text-[2.6rem] tracking-[-0.03em] leading-tight mb-3">
                Frustrated?
              </h2>
              <p className="font-accent italic text-clay-soft text-2xl md:text-[1.7rem] mb-5">
                Start with a free letter.
              </p>
              <p className="text-[#cdd6cd] text-lg leading-relaxed max-w-xl mx-auto mb-8">
                The first step is usually the hardest one, and it&rsquo;s the one we exist for.
              </p>
              <Link href="/letters" className="btn-clay">
                Browse free letters
              </Link>
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
