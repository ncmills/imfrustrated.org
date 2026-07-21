import type { Metadata } from "next";
import Link from "next/link";
import { Header, Reveal, Interactions, SiteFooter } from "@/components/ClientSections";
import { getAllParkingCities } from "@/data/parking";

export const metadata: Metadata = {
  title: "How to Fight a Parking Ticket, City by City | I'm Frustrated dot Org",
  description:
    "Free, city-specific parking-ticket dispute statements — the exact defense to write, where to submit it, and the deadline that matters. Verified against each city's official rules.",
  alternates: { canonical: "https://imfrustrated.org/letters/parking" },
  openGraph: {
    type: "article",
    url: "https://imfrustrated.org/letters/parking",
    title: "How to Fight a Parking Ticket, City by City",
    description: "City-specific parking-ticket dispute statements, verified against each city's official rules.",
  },
};

export default function ParkingIndexPage() {
  const cities = getAllParkingCities();
  return (
    <>
      <div className="amb" aria-hidden="true"><i></i><i></i><i></i></div>
      <Header />
      <Interactions />
      <main className="relative">
        <section className="relative max-w-4xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-10">
          <Reveal>
            <nav className="text-sm font-medium text-sage-2 mb-7">
              <Link href="/" className="hover:text-clay transition-colors duration-300">Home</Link>
              <span className="mx-2.5 text-rule">/</span>
              <Link href="/letters" className="hover:text-clay transition-colors duration-300">Letters</Link>
              <span className="mx-2.5 text-rule">/</span>
              <span className="text-clay">Parking tickets</span>
            </nav>
          </Reveal>
          <Reveal delay={1}>
            <span className="eyebrow"><span className="pulse" />Parking ticket disputes</span>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="font-disp font-semibold text-sage text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] mt-7">
              Fight a parking ticket — the right way for your city.
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-sage-2 text-lg leading-[1.6] mt-6 max-w-2xl">
              Every city hears disputes differently — different portal, different deadline, different accepted defenses.
              Pick your city for the exact statement to submit, where it goes, and how long you have.
            </p>
          </Reveal>
        </section>

        <section className="relative max-w-4xl mx-auto px-6 md:px-8 py-10">
          <Reveal>
            <ul className="grid sm:grid-cols-2 gap-5">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/letters/parking/${c.slug}`} className="tool-card group block p-6 h-full">
                    <p className="text-clay text-[0.7rem] font-semibold uppercase tracking-[0.2em] mb-2">{c.state}</p>
                    <p className="font-disp font-semibold text-sage text-lg md:text-xl tracking-[-0.02em] group-hover:text-clay transition-colors duration-300">
                      Fight a parking ticket in {c.city}
                    </p>
                    <p className="text-sage-2 text-sm mt-2">
                      {c.recognizedDefenses.length} defenses · {c.contestDeadlineDays}-day window
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            {cities.length === 0 && (
              <p className="text-sage-2">Cities coming soon.</p>
            )}
            <p className="text-sage-2 text-sm mt-8">
              Don&rsquo;t see your city? Email <a href="mailto:info@imfrustrated.org" className="text-clay underline">info@imfrustrated.org</a> — we&rsquo;re adding cities. In the meantime, most cities let you plead not guilty online and submit a written defense; the same defenses (broken meter, obscured signs, valid payment, wrong ticket details) apply.
            </p>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
