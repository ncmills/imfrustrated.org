import type { Metadata } from "next";
import Link from "next/link";
import { Header, Reveal, SiteFooter } from "@/components/ClientSections";
import { buildOpenGraph } from "@/lib/og";
import impact from "@/data/impact.json";

export const metadata: Metadata = {
  title: "Donate | I'm Frustrated dot Org",
  description: "Impact so far, and the status of donations to I'm Frustrated dot Org.",
  alternates: { canonical: "https://imfrustrated.org/donate" },
  openGraph: buildOpenGraph({
    path: "/donate",
    title: "Donate | I'm Frustrated dot Org",
    description: "Impact so far, and the status of donations to I'm Frustrated dot Org.",
    // src/app/donate/ has no colocated opengraph-image file.
    hasRouteImage: false,
  }),
};

type ImpactItem = { label: string; value: string; source: string };
const items = impact.items as ImpactItem[];

export default function DonatePage() {
  return (
    <>
      <div className="amb" aria-hidden="true"><i></i><i></i><i></i></div>
      <Header />
      <main className="relative">
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-24">
          <Reveal delay={1}>
            <nav className="text-[0.7rem] uppercase tracking-[0.22em] text-sage-2 mb-8 font-medium">
              <Link href="/" className="hover:text-sage transition-colors duration-300">Home</Link>
              <span className="mx-3 text-rule">/</span>
              <span className="text-clay">Donate</span>
            </nav>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="font-disp font-semibold text-sage text-[2.4rem] sm:text-5xl lg:text-[3.75rem] leading-[1.05] tracking-[-0.03em] mb-10">
              Donate
            </h1>
          </Reveal>

          <Reveal delay={3}>
            <div className="bg-card border border-rule rounded-2xl p-7 md:p-9">
              <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.875rem] tracking-[-0.03em] mb-5">
                Impact
              </h2>
              <ul className="space-y-6">
                {items.map((it) => (
                  <li key={it.label}>
                    <p className="font-disp font-semibold text-sage text-4xl tracking-[-0.03em]">{it.value}</p>
                    <p className="text-sage text-base md:text-lg font-semibold mt-1">{it.label}</p>
                    <p className="text-sage-2 text-sm leading-[1.6] mt-1">
                      Source: {it.source} As of {impact.asOf}.
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <p className="text-sage-2 text-base md:text-lg leading-[1.7] mt-8">
              When donations open, they will fund the free letters, guides and tools on this site.
            </p>
            <p className="text-sage text-base md:text-lg leading-[1.7] mt-3 font-semibold">
              Donations are not open yet.
            </p>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
