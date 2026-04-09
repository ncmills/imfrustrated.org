import Image from "next/image";
import { Header, FadeInSection } from "@/components/ClientSections";

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
    title: "You Talk, We Listen",
    description:
      "Tell us what's going on — plain English, no legalese required. We'll hear you out the way a friend would, except this friend went to law school.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 32V16a2 2 0 012-2h20a2 2 0 012 2v12a2 2 0 01-2 2H16l-8 6z" />
        <circle cx="16" cy="22" r="1.5" fill="currentColor" />
        <circle cx="22" cy="22" r="1.5" fill="currentColor" />
        <circle cx="28" cy="22" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "We Break It Down",
    description:
      "We'll explain where you stand legally, what your options look like, and what questions you should be asking — so you can walk into any next step informed.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="16" />
        <path d="M24 16v8l6 4" />
      </svg>
    ),
  },
  {
    title: "You Decide What's Next",
    description:
      "Maybe you need to hire a lawyer. Maybe you don't. Either way, you'll know what you're dealing with and won't get taken for a ride.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 24l8 8 16-16" />
        <rect x="6" y="6" width="36" height="36" rx="4" />
      </svg>
    ),
  },
];

/* ─── Page (Server Component) ─── */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          id="top"
          className="relative min-h-[100vh] flex items-center justify-center noise-overlay overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-warm-white to-cream" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-coral/[0.04] rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-coral/[0.06] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

          <div className="absolute inset-0 max-w-6xl mx-auto px-10 hidden lg:block">
            <div className="absolute top-0 bottom-0 left-10 w-px bg-border/40" />
            <div className="absolute top-0 bottom-0 right-10 w-px bg-border/40" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
            <div className="animate-fade-in-up">
              <div className="decorative-rule mx-auto mb-8" />
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-charcoal leading-[1.05] tracking-tight">
                Friends who are
                <br />
                also lawyers<span className="text-coral">.</span>
              </h1>
            </div>

            <p className="animate-fade-in-up delay-200 mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Ring an attorney friend to get their take on your issue
              <br className="hidden sm:block" /> and how best to proceed. Because everyone needs a friend who is a lawyer.
            </p>

            <div className="animate-fade-in-up delay-400 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#mission"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-charcoal text-warm-white text-sm font-medium rounded-full hover:bg-coral transition-colors duration-300"
              >
                Learn More
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="mailto:info@imfrustrated.org"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-charcoal text-sm font-medium rounded-full hover:border-coral hover:text-coral transition-colors duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in delay-700">
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-coral/40 to-coral/10 mx-auto" />
          </div>
        </section>

        {/* Mission */}
        <section id="mission" className="relative py-28 md:py-36 bg-cream noise-overlay">
          <div className="absolute inset-0 bg-gradient-to-b from-warm-white via-transparent to-warm-white opacity-40" />
          <FadeInSection className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 text-center">
            <p className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-charcoal tracking-tight mb-12">
              I&rsquo;m Frustrated
              <Image src="/logo.svg" alt="I'm Frustrated dot Org logo" width={80} height={80} className="inline-block align-middle w-16 sm:w-20 md:w-24 lg:w-28 h-auto mx-2" />
            </p>
            <p className="text-coral text-sm font-semibold uppercase tracking-[0.2em] mb-6">
              What We Do
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-charcoal leading-snug">
              The conversation you have before
              you hire a lawyer.
            </h2>
            <div className="decorative-rule mx-auto my-10" />
            <p className="text-muted text-lg md:text-xl leading-relaxed">
              Legal problems are stressful enough without walking into them blind.
              We&rsquo;re a group of practicing attorneys who volunteer our time to give
              people a real, informed perspective on their situation — before they
              spend a dime on representation.
            </p>
            <p className="text-muted text-base md:text-lg leading-relaxed mt-6">
              We don&rsquo;t represent you. We won&rsquo;t be your lawyers. What we
              will do is sit down with you, hear you out, and help you understand
              what you&rsquo;re actually dealing with — the way a friend who happens
              to be an attorney would over a cup of coffee. That way, when it&rsquo;s
              time to hire someone or make a decision, you&rsquo;re doing it with
              clarity, not confusion.
            </p>
          </FadeInSection>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-28 md:py-36 bg-warm-white">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <FadeInSection className="text-center mb-16">
              <p className="text-coral text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                How It Works
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal">
                Simple as calling a friend<span className="text-coral">.</span>
              </h2>
            </FadeInSection>

            <FadeInSection>
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {howItWorks.map((step) => (
                  <div
                    key={step.title}
                    className="group relative bg-cream/60 border border-border/60 rounded-2xl p-8 md:p-10 hover:border-coral/30 hover:shadow-lg hover:shadow-coral/[0.04] transition-all duration-500"
                  >
                    <div className="text-coral mb-6 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted text-[0.95rem] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="relative py-28 md:py-36 bg-charcoal noise-overlay overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-coral/[0.05] rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
            <FadeInSection className="text-center mb-16" threshold={0.05}>
              <p className="text-coral text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                Testimonials
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-warm-white">
                From frustration to resolution<span className="text-coral">.</span>
              </h2>
            </FadeInSection>

            <FadeInSection threshold={0.05}>
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    className="relative bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm rounded-2xl p-8 md:p-10 hover:bg-white/[0.08] transition-all duration-500"
                  >
                    <div className="quote-mark">&ldquo;</div>
                    <blockquote className="relative z-10 text-white/80 text-[0.95rem] leading-relaxed mb-6 pl-4">
                      &ldquo;{t.text}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3 pl-4">
                      <div className="w-8 h-px bg-coral/60" />
                      <span className="text-coral-light text-sm font-medium">
                        {t.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="relative py-28 md:py-36 bg-cream noise-overlay overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-coral/[0.04] rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3" />
          <FadeInSection className="relative z-10 max-w-2xl mx-auto px-6 md:px-10 text-center">
            <p className="text-coral text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Get In Touch
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal leading-tight">
              Frustrated? <br className="hidden sm:block" />
              Let&rsquo;s talk it out<span className="text-coral">.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mt-6 mb-10">
              No commitment, no invoice, no judgment. Just an honest conversation
              with someone who understands the law and actually wants to help.
            </p>
            <a
              href="mailto:info@imfrustrated.org"
              className="inline-flex items-center gap-3 px-10 py-4 bg-coral text-white text-base font-medium rounded-full hover:bg-coral-dark hover:shadow-xl hover:shadow-coral/20 transition-all duration-300 group"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 group-hover:scale-110 transition-transform"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              info@imfrustrated.org
            </a>
          </FadeInSection>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <a
                href="#top"
                className="flex items-center gap-2.5 font-serif text-xl font-semibold text-warm-white tracking-tight"
              >
                I&rsquo;m Frustrated{" "}
                <Image src="/logo.svg" alt="I'm Frustrated dot Org logo" width={28} height={28} className="w-7 h-7 inline-block align-middle" />
              </a>
              <p className="font-serif italic text-white/40 text-sm mt-2">
                Friends who are also lawyers.
              </p>
            </div>

            <div className="flex items-center gap-8 text-sm text-white/40">
              <a href="#mission" className="hover:text-coral transition-colors duration-300">
                What We Do
              </a>
              <a href="#how-it-works" className="hover:text-coral transition-colors duration-300">
                How It Works
              </a>
              <a href="#testimonials" className="hover:text-coral transition-colors duration-300">
                Testimonials
              </a>
              <a href="mailto:info@imfrustrated.org" className="hover:text-coral transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.06] text-center">
            <p className="text-white/25 text-xs">
              &copy; {new Date().getFullYear()} I&rsquo;m Frustrated{" "}
              <Image src="/logo.svg" alt="I'm Frustrated dot Org logo" width={16} height={16} className="w-4 h-4 inline-block align-middle" />.
              All rights reserved.
            </p>
            <p className="text-white/20 text-[0.65rem] leading-relaxed mt-4 max-w-2xl mx-auto">
              Disclaimer: I&rsquo;m Frustrated <Image src="/logo.svg" alt="I'm Frustrated dot Org logo" width={12} height={12} className="w-3 h-3 inline-block align-middle" /> is not a law firm and does not provide legal representation.
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
