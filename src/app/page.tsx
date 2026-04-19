import Link from "next/link";
import { Header, FadeInSection, Wordmark } from "@/components/ClientSections";
import IntakeForm from "@/components/IntakeForm";

/* ─── Data ─── */
const testimonials = [
  {
    name: "Chloe H.",
    text: "I'm Frustrated dot Org's attorneys are the epitome of efficient professionals. They are easy to communicate with and quickly come up with solutions. I would have not been able to navigate my landlord situation with out them!",
  },
  {
    name: "Todd E.",
    text: "I didn't know what I was doing and came to Nick with some half-baked research. With professionalism and excitement he educated me, helping me form my LLC in a proper fashion. It also helps that he is as excited for you as you are for finally taking the step!",
  },
  {
    name: "Sidnee L.",
    text: "I was completely overwhelmed by the process of beginning and licensing a new LLC, but Nick made the process palatable and easy. He's professional, efficient, and a great communicator. As a freelancer working in creative industries, legal jargon is often beyond my realm and goes over my head. Nick's confidence in handling the pieces I was unsure about put me at ease, and I would highly recommend working with him and his team!",
  },
  {
    name: "Riley S. & Isabella H.",
    text: "Thank you so much for your quick and effective help with our landlord-tenant dispute! We are no longer 'frustrated.'",
  },
  {
    name: "Stella B.",
    text: "Recently, a legal professional gave me advice under the guise that it was factual. However, it was later discovered that some of the information provided was inaccurate and opposite of what the actual legal documents provided. After expressing frustration, a colleague recommended I reach out to I'm Frustrated dot Org. Their guidance and services have been invaluable even within the first few weeks of working with them. Unfortunately, we live in a world typically driven by money as the main incentive. The team from this organization has demonstrated a genuine concern for the wellbeing of others, and have exemplified inspiring altruistic efforts to give back to their community. If you need any advice for a serious legal matter, I am confident that they will do their absolute best to assist.",
  },
  {
    name: "Johnluke L.",
    text: "I came to the I'm Frustrated dot Org team with a simple but critical family-law legal issue, and I needed a solution ASAP. They stepped-up to the challenge, provided excellent advice, and guided me towards resolution quicker than I thought possible!",
  },
];

const howItWorks = [
  {
    numeral: "I",
    title: "You Talk, We Listen",
    description:
      "Tell us what's going on — plain English, no legalese required. We'll hear you out the way a friend would, except this friend went to law school.",
  },
  {
    numeral: "II",
    title: "We Break It Down",
    description:
      "We'll explain where you stand legally, what your options look like, and what questions you should be asking — so you can walk into any next step informed.",
  },
  {
    numeral: "III",
    title: "You Decide What's Next",
    description:
      "Maybe you need to hire a lawyer. Maybe you don't. Either way, you'll know what you're dealing with and won't get taken for a ride.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        {/* ─── Hero ─── */}
        <section
          id="top"
          className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-paper-lift via-paper to-paper" />
          <div className="absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-forest/[0.05] blur-[140px]" />
          <div className="absolute bottom-0 -left-32 w-[420px] h-[420px] rounded-full bg-amber/[0.08] blur-[120px]" />

          {/* Side rules */}
          <div className="absolute inset-0 max-w-6xl mx-auto px-10 hidden lg:block pointer-events-none">
            <div className="absolute top-0 bottom-0 left-10 w-px bg-rule/60" />
            <div className="absolute top-0 bottom-0 right-10 w-px bg-rule/60" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center pt-28 pb-16">
            <div className="animate-fade-in-up">
              <h1 className="font-serif text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold text-ink leading-[1.02] tracking-[-0.028em]">
                Friends who are
                <br />
                also lawyers<span className="text-amber">.</span>
              </h1>
              <p className="script text-[1.75rem] sm:text-3xl md:text-4xl mt-6 -rotate-1">
                the conversation you have
                <br className="sm:hidden" /> before you hire a lawyer
              </p>
            </div>

            <div className="animate-fade-in-up delay-200">
              <div className="decorative-rule mx-auto my-10" />
              <p className="text-muted-warm text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Ring an attorney friend to get their take on your issue
                <br className="hidden sm:block" /> and how best to proceed. Because everyone needs a friend who is a lawyer.
              </p>
            </div>

            <div className="animate-fade-in-up delay-400 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="btn-forest">
                Get In Touch
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                </svg>
              </a>
              <a href="#mission" className="btn-ghost">
                Learn More
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in delay-700">
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-amber/40 to-amber/10 mx-auto" />
          </div>
        </section>

        {/* ─── Mission ─── */}
        <section id="mission" className="relative py-28 md:py-36 bg-paper">
          <FadeInSection className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 text-center">
            <div className="mb-10 flex justify-center">
              <Wordmark size="lg" />
            </div>
            <p className="text-amber text-[0.72rem] font-semibold uppercase tracking-[0.3em] mb-6">
              What We Do
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-snug tracking-[-0.01em]">
              The conversation you have before
              <br className="hidden sm:block" /> you hire a lawyer.
            </h2>
            <div className="decorative-rule mx-auto my-10" />
            <p className="text-muted-warm text-lg md:text-xl leading-relaxed">
              Legal problems are stressful enough without walking into them blind.
              We&rsquo;re a group of practicing attorneys who volunteer our time to give
              people a real, informed perspective on their situation — before they
              spend a dime on representation.
            </p>
            <p className="text-muted-warm text-base md:text-lg leading-relaxed mt-6">
              We don&rsquo;t represent you. We won&rsquo;t be your lawyers. What we
              will do is sit down with you, hear you out, and help you understand
              what you&rsquo;re actually dealing with — the way a friend who happens
              to be an attorney would over a cup of coffee. That way, when it&rsquo;s
              time to hire someone or make a decision, you&rsquo;re doing it with
              clarity, not confusion.
            </p>
          </FadeInSection>
        </section>

        {/* ─── How It Works — as numbered chapters ─── */}
        <section id="how-it-works" className="relative py-28 md:py-36 bg-paper-deep">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <FadeInSection className="text-center mb-20">
              <p className="text-amber text-[0.72rem] font-semibold uppercase tracking-[0.3em] mb-4">
                How It Works
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink tracking-[-0.01em]">
                Simple as calling a friend<span className="text-amber">.</span>
              </h2>
            </FadeInSection>

            <div className="space-y-16 md:space-y-20">
              {howItWorks.map((step, i) => (
                <FadeInSection key={step.title}>
                  <article className="grid md:grid-cols-[auto,1fr] gap-x-10 md:gap-x-14 gap-y-4 items-start">
                    <div
                      className="chapter-numeral relative"
                      aria-hidden="true"
                    >
                      {step.numeral}
                      <span className="absolute -bottom-2 left-0 h-[2px] w-10 bg-amber" />
                    </div>
                    <div className="md:pt-4">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-amber mb-3">
                        Chapter {step.numeral}
                      </p>
                      <h3 className="font-serif text-2xl md:text-[1.85rem] font-semibold text-ink mb-4 tracking-[-0.01em]">
                        {step.title}
                      </h3>
                      <p className="text-muted-warm text-lg leading-[1.65] max-w-prose">
                        {step.description}
                      </p>
                    </div>
                  </article>
                  {i < howItWorks.length - 1 && (
                    <div className="mt-16 md:mt-20 flex items-center gap-4" aria-hidden="true">
                      <span className="h-px flex-1 bg-rule" />
                      <svg viewBox="0 0 20 20" className="w-3 h-3 text-amber" fill="currentColor">
                        <circle cx="10" cy="10" r="4" />
                      </svg>
                      <span className="h-px flex-1 bg-rule" />
                    </div>
                  )}
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Free Tools (preserved card, restyled to palette) ─── */}
        <section id="tools" className="relative py-28 md:py-36 bg-paper overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber/[0.05] rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">
            <FadeInSection className="text-center mb-14">
              <p className="text-amber text-[0.72rem] font-semibold uppercase tracking-[0.3em] mb-4">
                Free Tools
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink tracking-[-0.01em]">
                More than a conversation<span className="text-amber">.</span>
              </h2>
              <p className="text-muted-warm text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
                Sometimes you don&rsquo;t need advice. You need the thing itself. Here are the free tools we&rsquo;ve built for people who&rsquo;d rather just handle it.
              </p>
            </FadeInSection>

            <FadeInSection>
              <a
                href="https://idonthaveawill.com"
                target="_blank"
                rel="noopener"
                className="group block bg-paper-lift border border-rule rounded-[6px] p-8 md:p-12 hover:border-forest/40 transition-all duration-500 hover:shadow-[0_24px_48px_-28px_rgba(45,74,62,0.35)]"
              >
                <div className="grid md:grid-cols-[auto,1fr,auto] items-center gap-8">
                  <div className="text-forest group-hover:text-amber transition-colors duration-300">
                    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 6h18l8 8v28a2 2 0 01-2 2H12a2 2 0 01-2-2V8a2 2 0 012-2z" />
                      <path d="M30 6v8h8" />
                      <path d="M16 32l5 5 11-11" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-amber text-[0.7rem] font-semibold uppercase tracking-[0.28em] mb-2">
                      Free Will Generator
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold text-ink mb-3 tracking-[-0.01em]">
                      I Don&rsquo;t Have a Will
                    </h3>
                    <p className="text-muted-warm text-[0.95rem] md:text-base leading-relaxed">
                      A free self-help tool to draft a simple will in about ten minutes. Covers all 50 US states and DC. No account, no fees, no data stored — everything happens in your browser.
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-warm">
                      <span className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-amber" />
                        50 states + DC
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-amber" />
                        About 10 minutes
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-amber" />
                        Stays on your device
                      </span>
                    </div>
                  </div>

                  <div className="md:justify-self-end">
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-paper text-sm font-medium rounded-full group-hover:bg-forest-deep transition-colors duration-300">
                      Open the tool
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </FadeInSection>

            <FadeInSection className="text-center mt-10">
              <Link href="/free-tools" className="text-sm text-muted-warm hover:text-forest transition-colors duration-300">
                See all free tools →
              </Link>
            </FadeInSection>
          </div>
        </section>

        {/* ─── Testimonials — newspaper pull-quotes ─── */}
        <section
          id="testimonials"
          className="relative py-28 md:py-36 bg-paper-deep overflow-hidden"
        >
          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
            <FadeInSection className="text-center mb-20" threshold={0.05}>
              <p className="text-amber text-[0.72rem] font-semibold uppercase tracking-[0.3em] mb-4">
                In Their Own Words
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink tracking-[-0.01em]">
                From frustration to resolution<span className="text-amber">.</span>
              </h2>
            </FadeInSection>

            <FadeInSection threshold={0.05}>
              <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-14 md:gap-y-20">
                {testimonials.map((t, i) => {
                  // alternate sizes for visual rhythm
                  const isLarge = i === 0 || i === 4;
                  const isSmall = i === 3;
                  const textSize = isLarge
                    ? "text-[1.5rem] md:text-[1.8rem] leading-[1.35]"
                    : isSmall
                    ? "text-lg md:text-[1.2rem] leading-[1.5]"
                    : "text-[1.2rem] md:text-[1.35rem] leading-[1.45]";
                  // slight column offset on every other card for editorial rhythm
                  const offset = i % 2 === 1 ? "md:pt-16" : "";
                  return (
                    <figure
                      key={t.name}
                      className={`pullquote ${offset}`}
                    >
                      <span className="pullquote__open" aria-hidden="true">&ldquo;</span>
                      <blockquote className={`pullquote__body ${textSize}`}>
                        {t.text}
                      </blockquote>
                      <figcaption className="pullquote__byline">
                        <span>{t.name}</span>
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ─── Contact — the letter ─── */}
        <section
          id="contact"
          className="relative py-28 md:py-36 bg-paper-deep overflow-hidden"
        >
          {/* Horizontal rule separating from testimonials */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-rule" />

          <FadeInSection className="relative z-10 max-w-2xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <p className="text-amber text-[0.72rem] font-semibold uppercase tracking-[0.3em] mb-4">
                Get In Touch
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-ink leading-tight tracking-[-0.015em]">
                Frustrated? <br className="hidden sm:block" />
                Let&rsquo;s talk it out<span className="text-amber">.</span>
              </h2>
              <p className="text-muted-warm text-lg leading-relaxed mt-6 max-w-lg mx-auto">
                No commitment, no invoice, no judgment. Just an honest conversation
                with someone who understands the law and actually wants to help.
              </p>
            </div>
            <IntakeForm />
          </FadeInSection>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-ink relative">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <a href="#top" className="inline-block">
                <Wordmark size="md" color="paper" />
              </a>
              <p className="font-serif italic text-paper/50 text-sm mt-3">
                Friends who are also lawyers.
              </p>
            </div>

            <div className="flex items-center gap-8 text-sm text-paper/50">
              <a href="#mission" className="hover:text-amber transition-colors duration-300">
                What We Do
              </a>
              <a href="#how-it-works" className="hover:text-amber transition-colors duration-300">
                How It Works
              </a>
              <Link href="/free-tools" className="hover:text-amber transition-colors duration-300">
                Free Tools
              </Link>
              <a href="#testimonials" className="hover:text-amber transition-colors duration-300">
                Testimonials
              </a>
              <a href="mailto:info@imfrustrated.org" className="hover:text-amber transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-paper/[0.08] text-center">
            <p className="text-paper/30 text-xs">
              &copy; {new Date().getFullYear()} I&rsquo;m Frustrated
              <span className="ml-1 font-mono text-amber">.org</span>. All rights reserved.
            </p>
            <p className="text-paper/25 text-[0.7rem] leading-relaxed mt-4 max-w-2xl mx-auto">
              Disclaimer: I&rsquo;m Frustrated
              <span className="mx-1 font-mono text-amber/80">.org</span>
              is not a law firm and does not provide legal representation.
              The information and guidance provided through our services are for informational purposes only and
              should not be construed as legal advice. No attorney-client relationship is formed through your
              use of this service. For legal representation, please consult a licensed attorney in your jurisdiction.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
