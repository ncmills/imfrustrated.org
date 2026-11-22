import type { Metadata } from "next";
import Link from "next/link";
import { Header, Reveal, SiteFooter } from "@/components/ClientSections";
import { buildOpenGraph } from "@/lib/og";
import { privacySections } from "./sections";

export const metadata: Metadata = {
  title: "Privacy | I'm Frustrated dot Org",
  description:
    "What we collect, where it goes, and what we don't do with it. Plain-English privacy practice for the draft-letter form, letter library, and analytics.",
  alternates: { canonical: "https://imfrustrated.org/privacy" },
  openGraph: buildOpenGraph({
    path: "/privacy",
    title: "Privacy | I'm Frustrated dot Org",
    description:
      "What we collect, where it goes, and what we don't do with it.",
    // src/app/privacy/ has no colocated opengraph-image file.
    hasRouteImage: false,
  }),
};

const LAST_UPDATED = "May 20, 2026";

const sections = privacySections(process.env);

export default function PrivacyPage() {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://imfrustrated.org" },
      { "@type": "ListItem", position: 2, name: "Privacy", item: "https://imfrustrated.org/privacy" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="amb" aria-hidden="true"><i></i><i></i><i></i></div>
      <Header />
      <main className="relative">
        {/* Hero */}
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-10 md:pb-14">
          <Reveal delay={1}>
            <nav className="text-[0.7rem] uppercase tracking-[0.22em] text-sage-2 mb-8 font-medium">
              <Link href="/" className="hover:text-sage transition-colors duration-300">Home</Link>
              <span className="mx-3 text-rule">/</span>
              <span className="text-clay">Privacy</span>
            </nav>
          </Reveal>
          <Reveal delay={2}>
            <p className="font-accent italic text-xl text-clay">privacy</p>
          </Reveal>
          <Reveal delay={3}>
            <h1 className="font-disp font-semibold text-sage text-[2.2rem] sm:text-4xl lg:text-[3.25rem] leading-[1.07] tracking-[-0.03em] mt-2 mb-7">
              What we collect, where it goes, and what we don&rsquo;t do with it.
            </h1>
          </Reveal>
          <Reveal delay={4}>
            <p className="text-sage-2 text-lg leading-[1.7] max-w-2xl">
              This is not a template lifted from a generator. It describes what the site actually does: a homepage intake form, a library of letter templates, two analytics tools, and one email address.
            </p>
            <p className="text-sage-2 text-sm mt-6 font-accent italic">
              Last updated: {LAST_UPDATED}
            </p>
          </Reveal>
        </section>

        {/* Body */}
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <div className="space-y-5">
            {sections.map((s) => (
              <Reveal key={s.marker}>
                <div className="bg-card border border-rule rounded-2xl p-7 md:p-9">
                  <p className="font-accent italic text-clay text-lg mb-2">{s.marker}</p>
                  <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.75rem] tracking-[-0.03em] mb-5">
                    {s.title}
                  </h2>
                  <div className="space-y-4">
                    {s.paragraphs.map((p, j) => (
                      <p key={j} className="text-sage-2 text-base md:text-lg leading-[1.7]">
                        {typeof p === "string" ? p : <><strong className="font-semibold text-sage">{p.lead}</strong> {p.text}</>}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative max-w-6xl mx-auto px-6 md:px-8 pb-24">
          <Reveal>
            <div className="bg-sage rounded-[32px] px-6 sm:px-10 md:px-14 py-14 md:py-16 text-center">
              <h2 className="font-disp font-semibold text-bg text-3xl md:text-[2.6rem] tracking-[-0.03em] leading-tight mb-4">
                Questions?
              </h2>
              <p className="text-[#cdd6cd] text-lg leading-relaxed max-w-xl mx-auto mb-8">
                Privacy questions, deletion requests, and corrections all go to the same address.
              </p>
              <a href="mailto:info@imfrustrated.org" className="btn-clay">
                info@imfrustrated.org
              </a>
              <div className="mt-10 flex justify-center gap-6 text-sm flex-wrap text-[#cdd6cd]">
                <Link href="/terms" className="hover:text-clay-soft transition-colors duration-300">Terms</Link>
                <Link href="/about" className="hover:text-clay-soft transition-colors duration-300">About</Link>
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
