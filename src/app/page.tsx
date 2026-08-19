import Link from "next/link";
import { Header, Reveal, Interactions, SiteFooter } from "@/components/ClientSections";
import IntakeForm from "@/components/IntakeForm";
import {
  getAllLetters,
  getAvailableCategories,
  getLettersByCategory,
} from "@/data/letters";
import { getAllParkingCities } from "@/data/parking";

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
const letterCategories: { label: string; slug: string; n: number }[] =
  getAvailableCategories()
    .map((c) => ({ label: c.label, slug: c.slug, n: getLettersByCategory(c.slug).length }))
    .sort((a, b) => b.n - a.n || a.label.localeCompare(b.label));

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

/* Self-help tools (sister sites). Letter Library + Ask-an-attorney are handled
 * separately below so all five offerings sit in one scannable section. */
const tools: {
  n: string;
  badge: string;
  name: string;
  href: string;
  desc: string;
}[] = [
  {
    n: "02",
    badge: "Free will generator",
    name: "I Don’t Have A Will",
    href: "https://idonthaveawill.com",
    desc: "Draft a simple, state-specific will in about ten minutes. Free, no account — and it never leaves your browser.",
  },
  {
    n: "03",
    badge: "Free disability tools",
    name: "A.I. SSDI",
    href: "https://aissdi.com",
    desc: "Denied Social Security disability? Estimate your approval odds, look up your assigned judge, and weigh your appeal — from public SSA data.",
  },
  {
    n: "04",
    badge: "Free voice rewriter",
    name: "DoppelWriter",
    href: "https://doppelwriter.com",
    desc: "Make a form letter sound like you. Paste a draft and it rewrites the letter in your own voice — so it reads like a real person, not a template.",
  },
];

const steps = [
  {
    n: "1",
    title: "Find your situation",
    body: "Pick the dispute you’re facing. We’ll point you to the right letter or tool.",
  },
  {
    n: "2",
    title: "Use the letter or tool",
    body: "Fill in the blanks, follow the steps. Plain English, real statute behind it.",
  },
  {
    n: "3",
    title: "Still stuck? Ask",
    body: "A real attorney reads your note and tells you the next step — free, no pressure.",
  },
];

/* Real, named testimonials — trimmed to the dispute-resolution ones that match
 * what IFDO actually offers (LLC-formation quotes removed as off-message). */
const testimonials = [
  { name: "Chloe H.", text: "I’m Frustrated dot Org’s attorneys are the epitome of efficient professionals. They are easy to communicate with and quickly come up with solutions. I would not have been able to navigate my landlord situation without them!" },
  { name: "Riley S. & Isabella H.", text: "Thank you so much for your quick and effective help with our landlord-tenant dispute! We are no longer ‘frustrated.’" },
  { name: "Johnluke L.", text: "I came to the team with a simple but critical family-law issue and needed a solution ASAP. They stepped up, gave excellent advice, and guided me toward resolution quicker than I thought possible!" },
  { name: "Stella B.", text: "After another professional gave me advice that turned out to be inaccurate, a colleague recommended I reach out. Their guidance has been invaluable — genuine concern for others’ wellbeing. If you need advice on a serious legal matter, I’m confident they’ll do their absolute best to help." },
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
  return (
    <>
      <div className="amb" aria-hidden="true"><i></i><i></i><i></i></div>
      <Header />
      <Interactions />

      <main id="top" className="relative">
        {/* ─── Hero ─── */}
        <section className="relative px-6 sm:px-10 lg:px-20 pt-32 md:pt-40 pb-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            {/* Headline block — left (stays centered below lg, matches prior layout) */}
            <div className="text-center lg:text-left">
              <Reveal delay={1}>
                <span className="eyebrow"><span className="pulse" />Free legal tools, built by volunteer attorneys</span>
              </Reveal>
              <Reveal delay={2}>
                <h1 className="font-disp font-semibold text-sage text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[4.4rem] leading-[1.03] tracking-[-0.038em] mt-7">
                  Free legal help&mdash;
                  <br />
                  <em className="font-accent text-clay" style={{ fontStyle: "italic" }}>before you pay for a lawyer.</em>
                </h1>
              </Reveal>
              <Reveal delay={3}>
                <p className="text-sage-2 text-lg md:text-xl leading-[1.6] max-w-2xl mx-auto lg:mx-0 mt-7">
                  Attorney-written letters, self-help tools, and a real lawyer you can
                  actually ask. All free. Start with the problem you&rsquo;re facing.
                </p>
              </Reveal>
              <Reveal delay={4}>
                {/* GTM scoreboard, 2026-08-18: the primary hero CTA was an
                    #offerings anchor scroll, not a link to /letters — the
                    letter library itself. Category chips below already went
                    to /letters/<category>, but there was no generic /letters
                    link anywhere in the hero. Legal-tool voice: the reader's
                    first move should be the tool, not a scroll past it. The
                    anchor is kept, demoted to secondary, so a reader who
                    wants the overview before committing still has it. */}
                <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mt-9">
                  <Link href="/letters" className="btn-clay mag">
                    Browse the {letterCount}-letter library
                    <Arrow />
                  </Link>
                  <a href="#offerings" className="btn-soft mag">See everything we offer</a>
                  <a href="#contact" className="btn-soft mag">Ask an attorney — free</a>
                </div>
              </Reveal>
              <Reveal delay={4}>
                <div className="mt-11 max-w-2xl mx-auto lg:mx-0">
                  <p className="font-accent italic text-lg text-sage-2 mb-4">jump straight to the letter for your&hellip;</p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                    {disputes.map((d) => (
                      <Link key={d.slug} href={`/letters/${d.slug}`} className="chip">{d.label}</Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sample-letter preview card — visual, right, reaches toward the edge */}
            <Reveal delay={3} className="hidden sm:block">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-2xl bg-bg-2 translate-x-2 translate-y-3"
                />
                <article
                  aria-label="Sample dispute letter preview"
                  className="relative bg-card border border-rule rounded-2xl p-8 md:p-10 leading-relaxed"
                >
                  <div className="flex items-center justify-between text-[11px] tracking-[0.18em] uppercase text-sage-2 pb-5 mb-5 border-b border-rule">
                    <span>Sample &middot; Landlord dispute</span>
                    <span className="chip !py-0.5 !px-2 text-[10px]">Editable</span>
                  </div>
                  <p className="font-disp text-sage text-lg font-semibold">
                    Re: Return of Security Deposit
                  </p>
                  <p className="mt-4 text-sage-2">
                    Dear <span className="text-clay font-medium">[Landlord Name]</span>,
                  </p>
                  <p className="mt-3 text-sage-2">
                    I am writing regarding the security deposit for my former
                    residence at <span className="text-clay font-medium">[Property Address]</span>.
                    As of today it has been <span className="text-clay font-medium">[X]</span> days
                    since I vacated, and I have not received either the deposit
                    or an itemized statement of deductions&hellip;
                  </p>
                  <p className="mt-5 text-xs uppercase tracking-[0.14em] text-sage-2/70">
                    Illustrative sample &mdash; every letter is filled in for your
                    situation and state.
                  </p>
                </article>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─── Everything IFDO gives you (all five offerings, scannable) ─── */}
        <section id="offerings" className="relative max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-accent italic text-xl text-clay">everything in one place</p>
            <h2 className="font-disp font-semibold text-sage text-3xl md:text-[2.75rem] tracking-[-0.03em] mt-1.5">
              Everything IFDO gives you
            </h2>
            <p className="text-sage-2 mt-4 leading-relaxed">
              Five free ways to handle a legal headache without a retainer &mdash; send a
              letter, use a self-help tool, or just ask a volunteer attorney.
            </p>
          </Reveal>

          {/* Offering 01 — featured: The Letter Library.
             Not a single wrapping <Link> — the CTA and each category are their own
             links, so no invalid nested anchors. */}
          <Reveal delay={1}>
            <div className="tool-card group p-8 md:p-10 mb-5">
              <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-[14px] bg-clay-soft/30 text-clay grid place-items-center font-disp font-bold text-base">01</div>
                    <p className="text-clay text-[0.72rem] font-semibold uppercase tracking-[0.2em]">Free letter library&nbsp;·&nbsp;{letterCount} letters</p>
                  </div>
                  <h3 className="font-disp font-semibold text-sage text-[1.7rem] md:text-3xl tracking-[-0.02em]">
                    <Link href="/letters" className="hover:text-clay transition-colors duration-300">The Letter Library</Link>
                  </h3>
                  <p className="text-sage-2 mt-3 leading-relaxed">
                    {letterCount} ready-to-send letters that quietly cite real statute &mdash; security
                    deposits, billing errors, HOA fines, delayed flights, and more. Every
                    citation verified by an attorney. Fill in the blanks and send. No lawyer required.
                  </p>
                  <Link href="/letters" className="inline-flex items-center gap-2 mt-5 font-semibold text-[0.95rem] text-clay hover:gap-3 transition-all duration-300">
                    Browse all {letterCount} letters
                    <Arrow />
                  </Link>
                </div>
                {/* Category quick-links — makes the depth visible at a glance */}
                <div className="flex flex-wrap gap-2.5 md:justify-end">
                  {letterCategories.map((c) => (
                    <Link key={c.slug} href={`/letters/${c.slug}`} className="chip">
                      {c.label}&nbsp;<span className="text-clay font-semibold">{c.n}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Parking library — the largest content set on the site (137 of 228
                 sitemap URLs) and, until 2026-08-10, invisible from here: the homepage
                 did not contain the word "parking" once, and the only way in was a
                 single card two clicks deep on /letters. Counts derived, never typed. */}
              <div className="mt-8 pt-7 border-t border-sage/10">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex-1">
                    <p className="text-clay text-[0.72rem] font-semibold uppercase tracking-[0.2em] mb-1.5">
                      Also free&nbsp;·&nbsp;{parkingCityCount} cities&nbsp;·&nbsp;{parkingDefenseCount} defenses
                    </p>
                    <h4 className="font-disp font-semibold text-sage text-xl tracking-[-0.02em]">
                      <Link href="/letters/parking" className="hover:text-clay transition-colors duration-300">
                        Fight a parking ticket in your city
                      </Link>
                    </h4>
                    <p className="text-sage-2 mt-2 leading-relaxed">
                      City-specific dispute statements checked against each city&rsquo;s own
                      contest rules and deadlines &mdash; {parkingCityCount} cities so far.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2.5 md:justify-end md:max-w-[46%]">
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
              </div>
            </div>
          </Reveal>

          {/* Offerings 02–04 — self-help tools (sister sites) */}
          <div className="grid md:grid-cols-3 gap-5">
            {tools.map((t, i) => (
              <Reveal key={t.name} delay={((i + 2) as 2 | 3 | 4)}>
                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener"
                  className="tool-card group block p-8 md:p-9 h-full"
                >
                  <div className="w-12 h-12 rounded-[14px] bg-mist text-sage grid place-items-center font-disp font-bold text-base mb-5">{t.n}</div>
                  <p className="text-clay text-[0.72rem] font-semibold uppercase tracking-[0.2em] mb-2">{t.badge}</p>
                  <h3 className="font-disp font-semibold text-sage text-2xl tracking-[-0.02em]">{t.name}</h3>
                  <p className="text-sage-2 mt-2.5 leading-relaxed">{t.desc}</p>
                  <span className="inline-flex items-center gap-2 mt-5 font-semibold text-[0.95rem] text-clay">
                    Open the tool
                    <Arrow className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Offering 05 — the human option: Ask a Volunteer Attorney */}
          <Reveal delay={2}>
            <a href="#contact" className="group block mt-5 rounded-[24px] bg-sage text-bg p-8 md:p-9 hover:bg-evergreen transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
                <div className="w-12 h-12 rounded-[14px] bg-clay text-white grid place-items-center font-disp font-bold text-base shrink-0">05</div>
                <div className="flex-1">
                  <p className="text-clay-soft text-[0.72rem] font-semibold uppercase tracking-[0.2em] mb-1.5">Free · talk to a person</p>
                  <h3 className="font-disp font-semibold text-bg text-2xl tracking-[-0.02em]">Ask a Volunteer Attorney</h3>
                  <p className="text-[#cdd6cd] mt-2.5 leading-relaxed max-w-2xl">
                    Not sure a letter or tool fits? Tell us what&rsquo;s going on. A real lawyer
                    reads every note and tells you your next step &mdash; free, no retainer, no
                    attorney-client relationship formed.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 font-semibold text-[0.95rem] text-clay-soft shrink-0">
                  Ask now
                  <Arrow className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </a>
          </Reveal>

          <Reveal className="text-center mt-9">
            <Link href="/free-tools" className="text-sm text-sage-2 hover:text-clay transition-colors duration-300">
              More about each tool, plus guides &amp; further reading →
            </Link>
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

        {/* ─── Contact ─── */}
        <section id="contact" className="relative max-w-6xl mx-auto px-6 md:px-8 pb-24">
          <Reveal>
            <div className="bg-sage rounded-[32px] px-6 sm:px-10 md:px-14 py-14 md:py-16">
              <div className="text-center max-w-xl mx-auto mb-10">
                <h2 className="font-disp font-semibold text-bg text-3xl md:text-[2.6rem] tracking-[-0.03em] leading-tight">
                  Still stuck? <em className="font-accent text-clay-soft" style={{ fontStyle: "italic" }}>Ask a lawyer.</em>
                </h2>
                <p className="text-[#cdd6cd] mt-4 leading-relaxed">
                  Tell us what&rsquo;s going on. A real attorney reads every note — usually within
                  a day. No bill, no pressure to hire anyone.
                </p>
              </div>
              <div className="max-w-2xl mx-auto">
                <IntakeForm />
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
