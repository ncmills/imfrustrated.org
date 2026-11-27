import type { Metadata } from "next";
import Link from "next/link";
import { Header, Reveal, SiteFooter } from "@/components/ClientSections";
import { chatPublic } from "@/lib/imf-chat/flags";
import { buildOpenGraph } from "@/lib/og";
import { testimonials } from "@/data/testimonials";

/* Ruling IFDO-IMPACT-PAGE (Nick, 2026-11-22): the number is the word "dozens", not a
 * count, with no source line; real testimonials only, words never edited. */
export const metadata: Metadata = {
  title: "Impact | I'm Frustrated dot Org",
  description: "Dozens of people helped so far, in their own words.",
  alternates: { canonical: "https://imfrustrated.org/impact" },
  openGraph: buildOpenGraph({
    path: "/impact",
    title: "Impact | I'm Frustrated dot Org",
    description: "Dozens of people helped so far, in their own words.",
    // src/app/impact/ has no colocated opengraph-image file.
    hasRouteImage: false,
  }),
};

export default function ImpactPage() {
  return (
    <>
      <div className="amb" aria-hidden="true"><i></i><i></i><i></i></div>
      <Header chatPublic={chatPublic(process.env)} />
      <main className="relative">
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-24">
          <Reveal delay={1}>
            <nav className="text-[0.7rem] uppercase tracking-[0.22em] text-sage-2 mb-8 font-medium">
              <Link href="/" className="hover:text-sage transition-colors duration-300">Home</Link>
              <span className="mx-3 text-rule">/</span>
              <span className="text-clay">Impact</span>
            </nav>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="font-disp font-semibold text-sage text-[2.4rem] sm:text-5xl lg:text-[3.75rem] leading-[1.05] tracking-[-0.03em] mb-10">
              Impact
            </h1>
          </Reveal>

          <Reveal delay={3}>
            <div className="bg-card border border-rule rounded-2xl p-7 md:p-9">
              <p className="font-disp font-semibold text-sage text-3xl md:text-4xl tracking-[-0.03em]">
                Dozens of people helped so far.
              </p>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-10">
              {testimonials.map((t) => (
                <figure key={t.name} className="mb-5 bg-card border border-rule rounded-2xl p-6">
                  <span className="font-accent text-clay text-4xl leading-none block -mb-2" style={{ fontStyle: "italic" }} aria-hidden>&ldquo;</span>
                  <blockquote className="text-sage-2 leading-relaxed">{t.text}</blockquote>
                  <figcaption className="text-clay font-semibold text-xs tracking-[0.08em] uppercase mt-4">{t.name}</figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter chatPublic={chatPublic(process.env)} />
    </>
  );
}
