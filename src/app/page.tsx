import Link from "next/link";
import { Header, Reveal, Interactions, SiteFooter } from "@/components/ClientSections";
import IntakeForm from "@/components/IntakeForm";

/* ─── Data ─── */
const disputes = [
  "Landlord", "Credit card", "HOA", "Airline", "Employer", "Neighbor", "Hotel",
];

const testimonials = [
  { name: "Chloe H.", text: "I'm Frustrated dot Org's attorneys are the epitome of efficient professionals. They are easy to communicate with and quickly come up with solutions. I would not have been able to navigate my landlord situation without them!" },
  { name: "Riley S. & Isabella H.", text: "Thank you so much for your quick and effective help with our landlord-tenant dispute! We are no longer 'frustrated.'" },
  { name: "Todd E.", text: "I came to Nick with some half-baked research. With professionalism and excitement he educated me, helping me form my LLC the proper way. It helps that he's as excited for you as you are for finally taking the step!" },
  { name: "Sidnee L.", text: "I was completely overwhelmed by licensing a new LLC, but Nick made the process palatable and easy. As a freelancer in creative industries, legal jargon often goes over my head. His confidence handling the pieces I was unsure about put me at ease — highly recommend working with him and his team." },
  { name: "Johnluke L.", text: "I came to the team with a simple but critical family-law issue and needed a solution ASAP. They stepped up, gave excellent advice, and guided me toward resolution quicker than I thought possible!" },
  { name: "Stella B.", text: "After another professional gave me advice that turned out to be inaccurate, a colleague recommended I reach out. Their guidance has been invaluable. The team has demonstrated genuine concern for others' wellbeing — if you need advice on a serious legal matter, I'm confident they'll do their absolute best to help." },
];

const steps = [
  {
    n: "1",
    title: "Find your situation",
    body: "Pick the dispute you're facing. We'll point you to the right tool or letter.",
  },
  {
    n: "2",
    title: "Use the tool",
    body: "Fill in the blanks, follow the steps. Plain English, real statute behind it.",
  },
  {
    n: "3",
    title: "Still stuck? Ask",
    body: "A real attorney reads your note and tells you the next step — free, no pressure.",
  },
];

export default function Home() {
  return (
    <>
      <div className="amb" aria-hidden="true"><i></i><i></i><i></i></div>
      <Header />
      <Interactions />

      <main id="top" className="relative">
        {/* ─── Hero ─── */}
        <section className="relative max-w-5xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-16 text-center">
          <Reveal delay={1}>
            <span className="eyebrow"><span className="pulse" />Friends who are also lawyers</span>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="font-disp font-semibold text-sage text-[2.7rem] sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[1.02] tracking-[-0.038em] mt-7">
              You don&rsquo;t always
              <br />
              <em className="font-accent not-italic text-clay" style={{ fontStyle: "italic" }}>need</em> a lawyer.
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-sage-2 text-lg md:text-xl leading-[1.6] max-w-2xl mx-auto mt-7">
              Most disputes get resolved with the right letter, the right words, and a
              steady hand — not a retainer. We&rsquo;re the friends who happen to be lawyers,
              here with free tools to help you handle it yourself.
            </p>
          </Reveal>
          <Reveal delay={4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">
              <a href="#tools" className="btn-clay mag">
                Browse the free tools
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ar">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#contact" className="btn-soft mag">Talk to an attorney</a>
            </div>
          </Reveal>
          <Reveal delay={4}>
            <div className="mt-11 max-w-2xl mx-auto">
              <p className="font-accent italic text-lg text-sage-2 mb-4">handle a dispute with your…</p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {disputes.map((d, i) => (
                  <span key={d} className={`chip ${i === 0 ? "on" : ""}`}>{d}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ─── Free Tools ─── */}
        <section id="tools" className="relative max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-accent italic text-xl text-clay">do it yourself</p>
            <h2 className="font-disp font-semibold text-sage text-3xl md:text-[2.75rem] tracking-[-0.03em] mt-1.5">
              Free tools to resolve it yourself
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            <Reveal delay={1}>
              <a
                href="https://idonthaveawill.com"
                target="_blank"
                rel="noopener"
                className="tool-card group block p-8 md:p-9 h-full"
              >
                <div className="w-12 h-12 rounded-[14px] bg-mist text-sage grid place-items-center font-disp font-bold text-base mb-5">01</div>
                <p className="text-clay text-[0.72rem] font-semibold uppercase tracking-[0.2em] mb-2">Free will generator</p>
                <h3 className="font-disp font-semibold text-sage text-2xl tracking-[-0.02em]">I Don&rsquo;t Have A Will</h3>
                <p className="text-sage-2 mt-2.5 leading-relaxed">
                  A gentle, plain-language walk to a simple will — for everyone who keeps
                  meaning to and never does. 50 states + DC, about ten minutes, stays on your device.
                </p>
                <span className="inline-flex items-center gap-2 mt-5 font-semibold text-[0.95rem] text-clay">
                  Open the tool
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ar group-hover:translate-x-1 transition-transform duration-300">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </a>
            </Reveal>

            <Reveal delay={2}>
              <Link href="/letters" className="tool-card group block p-8 md:p-9 h-full">
                <div className="w-12 h-12 rounded-[14px] bg-clay-soft/30 text-clay grid place-items-center font-disp font-bold text-base mb-5">02</div>
                <p className="text-clay text-[0.72rem] font-semibold uppercase tracking-[0.2em] mb-2">Free letter templates</p>
                <h3 className="font-disp font-semibold text-sage text-2xl tracking-[-0.02em]">The Letter Library</h3>
                <p className="text-sage-2 mt-2.5 leading-relaxed">
                  60+ ready-to-send letters that quietly cite real statute — landlords, credit
                  cards, HOAs, airlines, employers. Fill the blanks, send. No lawyer required.
                </p>
                <span className="inline-flex items-center gap-2 mt-5 font-semibold text-[0.95rem] text-clay">
                  Find your letter
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ar group-hover:translate-x-1 transition-transform duration-300">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </Reveal>

            <Reveal delay={3}>
              <a
                href="https://aissdi.com"
                target="_blank"
                rel="noopener"
                className="tool-card group block p-8 md:p-9 h-full"
              >
                <div className="w-12 h-12 rounded-[14px] bg-mist text-sage grid place-items-center font-disp font-bold text-base mb-5">03</div>
                <p className="text-clay text-[0.72rem] font-semibold uppercase tracking-[0.2em] mb-2">Free disability tools</p>
                <h3 className="font-disp font-semibold text-sage text-2xl tracking-[-0.02em]">A.I. SSDI</h3>
                <p className="text-sage-2 mt-2.5 leading-relaxed">
                  Denied Social Security disability? Estimate the approval odds for a claim like yours,
                  look up your assigned judge&rsquo;s approval rate, and weigh your appeal options — all
                  from public SSA data, free, no account. Know what you&rsquo;re walking into.
                </p>
                <span className="inline-flex items-center gap-2 mt-5 font-semibold text-[0.95rem] text-clay">
                  Open the tool
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ar group-hover:translate-x-1 transition-transform duration-300">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal className="text-center mt-9">
            <Link href="/free-tools" className="text-sm text-sage-2 hover:text-clay transition-colors duration-300">
              See all free tools →
            </Link>
          </Reveal>
        </section>

        {/* ─── How it works ─── */}
        <section id="how" className="relative max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">
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
            </div>
          </Reveal>
        </section>

        {/* ─── Testimonials ─── */}
        <section id="testimonials" className="relative max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-accent italic text-xl text-clay">in their own words</p>
            <h2 className="font-disp font-semibold text-sage text-3xl md:text-[2.75rem] tracking-[-0.03em] mt-1.5">
              From frustration to resolution
            </h2>
          </Reveal>
          <Reveal>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
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
        <section id="contact" className="relative max-w-5xl mx-auto px-6 md:px-8 pb-24">
          <Reveal>
            <div className="bg-sage rounded-[32px] px-6 sm:px-10 md:px-14 py-14 md:py-16">
              <div className="text-center max-w-xl mx-auto mb-10">
                <h2 className="font-disp font-semibold text-bg text-3xl md:text-[2.6rem] tracking-[-0.03em] leading-tight">
                  Stuck? <em className="font-accent text-clay-soft" style={{ fontStyle: "italic" }}>Talk it through.</em>
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
