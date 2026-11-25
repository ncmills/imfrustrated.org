import Link from "next/link";
import { Header, Reveal, Interactions, SiteFooter } from "@/components/ClientSections";
import { chatPublic } from "@/lib/imf-chat/flags";
import { getAllLetters } from "@/data/letters";
import { getAllParkingCities } from "@/data/parking";
import { testimonials } from "@/data/testimonials";

/* ─── Data ─── */

/* Hero dispute chips — each links straight to its real letter category. */
const disputes: { label: string; slug: string }[] = [
  { label: "Landlord", slug: "landlord" },
  { label: "Credit card", slug: "credit-card" },
  { label: "HOA", slug: "hoa" },
  { label: "Airline", slug: "airline" },
  { label: "Employer", slug: "employer" },
  { label: "Neighbor", slug: "neighbor" },
  { label: "Hotel", slug: "hotel" },
];

/* Live letter categories + counts, DERIVED from src/data/letters — never hand-typed.
 * These were hardcoded until 2026-08-07 and had already drifted: the page advertised
 * "74 letters" with Consumer at 18 when the library actually held 75 with Consumer at
 * 19. A count that is typed by hand is a count that goes stale the next time someone
 * drops a template into a category file, and the homepage is the one place a visitor
 * checks the number against nothing. Reading it from the data layer means adding a
 * letter updates the badge, the body copy, the CTA and the chips at once. */
const letterCount = getAllLetters().length;

/* Parking library counts — DERIVED for the same reason the letter counts are.
 * The /letters card hardcoded "10 cities" against a 22-city library. */
const parkingCities = getAllParkingCities();
const parkingCityCount = parkingCities.length;
const parkingDefenseCount = parkingCities.reduce((n, c) => n + c.defenses.length, 0);
/* Biggest-first, so the chips show the cities most people are searching for. */
const featuredParkingCities = [...parkingCities]
  .sort((a, b) => b.defenses.length - a.defenses.length || a.city.localeCompare(b.city))
  .slice(0, 8);

const steps = [
  {
    n: "1",
    title: "Pick your way in",
    body: "Tell the chatbot what happened, or browse the collection for the letter that fits.",
  },
  {
    n: "2",
    title: "Review your letter",
    body: "Check the facts, fill in the blanks. Plain English, real statute behind it.",
  },
  {
    n: "3",
    title: "Send it yourself",
    body: "You send the letter. If a deadline is close, talk to a licensed attorney or legal aid.",
  },
];


/* Small inline arrow used on links + CTAs. */
function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ar ${className}`}>
      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function Home() {
  const chatOn = chatPublic(process.env);
  return (
    <>
      <div className="amb" aria-hidden="true"><i></i><i></i><i></i></div>
      <Header chatPublic={chatOn} />
      <Interactions />

      <main id="top" className="relative">
        {/* ─── Front door: exactly two ways to start (Nick 2026-11-24) ─── */}
        <section className="relative max-w-3xl mx-auto px-6 sm:px-10 pt-28 md:pt-36 pb-14">
          <Reveal delay={1}>
            <span className="eyebrow"><span className="pulse" />Free legal information & self-help letters</span>
          </Reveal>
          <Reveal delay={2}>
            <h1
              className="font-disp font-bold text-sage leading-[1.05] tracking-[-0.04em] mt-6"
              style={{ fontSize: "clamp(2.2rem, 9vw, 3.75rem)" }}
            >
              Got a problem a letter could fix?
              {chatOn && <em className="block font-accent text-clay tracking-[-0.02em]" style={{ fontStyle: "italic", fontWeight: 400 }}>Two ways to start.</em>}
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-sage-2 text-lg leading-[1.55] mt-5">
              {chatOn ? "Both are free. Either way, you send the letter yourself." : "It is free, and you send the letter yourself."}
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className={`mt-8 grid gap-5 ${chatOn ? "md:grid-cols-2" : ""}`}>
              {/* Choice 1 — the chatbot (only when the chat is public; /letter-chat 404s otherwise) */}
              {chatOn && (
                <div className="rounded-[20px] bg-sage text-bg p-6 flex flex-col">
                  <p className="text-clay-soft text-[0.7rem] font-bold uppercase tracking-[0.18em]">Choice 1 &middot; Chatbot</p>
                  <h2 className="font-disp font-bold text-[1.45rem] leading-[1.15] tracking-[-0.02em] mt-2">
                    Use the chatbot to generate your own letter
                  </h2>
                  <p className="text-[#cdd6cd] leading-relaxed mt-3">
                    Tell it what happened, in plain words. It asks a few questions and writes a
                    letter for your situation and state. Save the private link to come back to it.
                  </p>
                  <div className="mt-auto pt-5">
                    <Link href="/letter-chat" className="btn-clay mag">
                      Start the chat
                      <Arrow />
                    </Link>
                  </div>
                </div>
              )}

              {/* Choice 2 — the collection */}
              <div className="rounded-[20px] bg-card border border-rule p-6 flex flex-col">
                <p className="text-clay text-[0.7rem] font-bold uppercase tracking-[0.18em]">{chatOn ? <>Choice 2 &middot; The collection</> : "The collection"}</p>
                <h2 className="font-disp font-bold text-sage text-[1.45rem] leading-[1.15] tracking-[-0.02em] mt-2">
                  Browse the collection
                </h2>
                <p className="text-sage-2 leading-relaxed mt-3">
                  {letterCount} ready-made letters with the statutes already cited, plus parking
                  appeals for {parkingCityCount} cities. Pick one, fill in the blanks.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {disputes.slice(0, 4).map((d) => (
                    <Link key={d.slug} href={`/letters/${d.slug}`} className="chip">{d.label}</Link>
                  ))}
                  <Link href="/letters/parking" className="chip">Parking</Link>
                  <Link href="/letters" className="chip">All &rsaquo;</Link>
                </div>
                <div className="mt-auto pt-5">
                  <Link href="/letters" className="btn-ghost mag">Browse letters</Link>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <p className="text-sage-2 text-[0.8rem] leading-relaxed mt-7 pt-4 border-t border-rule">
              I&rsquo;m Frustrated is not a law firm and nothing here is legal advice. Court date,
              eviction or deadline in the next 7 days? Contact a licensed attorney or{" "}
              <a href="https://www.lawhelp.org" rel="noopener" className="underline decoration-clay/70 underline-offset-4">LawHelp.org</a> now.
            </p>
          </Reveal>
        </section>

        {/* ─── Parking chips (kept below the two choices) ─── */}
        <section id="offerings" className="relative max-w-6xl mx-auto px-6 md:px-8 py-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="flex-1">
                <p className="text-clay text-[0.72rem] font-semibold uppercase tracking-[0.2em] mb-1.5">
                  {parkingCityCount} cities&nbsp;·&nbsp;{parkingDefenseCount} defenses
                </p>
                <h3 className="font-disp font-semibold text-sage text-xl tracking-[-0.02em]">
                  <Link href="/letters/parking" className="hover:text-clay transition-colors duration-300">
                    Fight a parking ticket in your city
                  </Link>
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5 md:justify-end md:max-w-[56%]">
                {featuredParkingCities.map((c) => (
                  <Link key={c.slug} href={`/letters/parking/${c.slug}`} className="chip">
                    {c.city}
                  </Link>
                ))}
                <Link href="/letters/parking" className="chip font-semibold text-clay">
                  All {parkingCityCount} &rarr;
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ─── How it works ─── */}
        <section id="how" className="relative max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <Reveal>
            <div className="bg-bg-2 rounded-[32px] px-8 md:px-12 py-14">
              <div className="text-center max-w-xl mx-auto mb-10">
                <p className="font-accent italic text-xl text-clay">it&rsquo;s simpler than you think</p>
                <h2 className="font-disp font-semibold text-sage text-3xl md:text-[2.75rem] tracking-[-0.03em] mt-1.5">How it works</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {steps.map((s) => (
                  <div key={s.n} className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-5">
                      <svg viewBox="0 0 64 64" className="step-ring absolute inset-0 w-full h-full">
                        <circle cx="32" cy="32" r="31" />
                      </svg>
                      <span className="absolute inset-0 grid place-items-center font-accent italic text-2xl text-clay">{s.n}</span>
                    </div>
                    <h4 className="font-disp font-semibold text-sage text-xl">{s.title}</h4>
                    <p className="text-sage-2 text-[0.97rem] mt-2 max-w-[30ch] mx-auto">{s.body}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link href="/how-it-works" className="text-sm font-semibold text-clay hover:text-sage transition-colors duration-300">
                  Read the full walkthrough →
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ─── Testimonials ─── */}
        <section id="testimonials" className="relative max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-accent italic text-xl text-clay">in their own words</p>
            <h2 className="font-disp font-semibold text-sage text-3xl md:text-[2.75rem] tracking-[-0.03em] mt-1.5">
              From frustration to resolution
            </h2>
          </Reveal>
          <Reveal>
            <div className="columns-1 md:columns-2 gap-5">
              {testimonials.map((t) => (
                <figure key={t.name} className="break-inside-avoid mb-5 bg-card border border-rule rounded-2xl p-6">
                  <span className="font-accent text-clay text-4xl leading-none block -mb-2" style={{ fontStyle: "italic" }} aria-hidden>&ldquo;</span>
                  <blockquote className="text-sage-2 leading-relaxed">{t.text}</blockquote>
                  <figcaption className="text-clay font-semibold text-xs tracking-[0.08em] uppercase mt-4">{t.name}</figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter chatPublic={chatOn} />
    </>
  );
}
