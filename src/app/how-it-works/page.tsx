import type { Metadata } from "next";
import Link from "next/link";
import { TwoChoiceBox } from "@/components/TwoChoiceBox";
import { Header, Reveal, Interactions, SiteFooter } from "@/components/ClientSections";
import { chatPublic } from "@/lib/imf-chat/flags";
import { buildOpenGraph } from "@/lib/og";

export const metadata: Metadata = {
  title: "How It Works | I'm Frustrated dot Org",
  description:
    "How I'm Frustrated dot Org's free self-help letters and tools work: find your letter, fill it in with your facts, send it yourself, and when to get a lawyer instead.",
  alternates: { canonical: "https://imfrustrated.org/how-it-works" },
  openGraph: buildOpenGraph({
    path: "/how-it-works",
    title: "How It Works | I'm Frustrated dot Org",
    description:
      "How I'm Frustrated dot Org's free self-help letters and tools work: find it, fill it in, send it yourself.",
    // src/app/how-it-works/ has no colocated opengraph-image file.
    hasRouteImage: false,
  }),
};

const chatSteps = [
  { title: "Tell it what happened", body: "Plain English, like you're writing to a friend: who's involved, what worries you, what you're hoping for, and any deadlines or court dates." },
  { title: "It asks a few questions and writes the letter", body: "The chatbot asks what it needs to know, then writes a letter for your situation and state. Save the private link to come back to it." },
  { title: "Review it and send it yourself", body: "Read the whole letter, fix anything that's off, and send it yourself." },
];

const collectionSteps = [
  { title: "Pick a letter", body: "Browse the collection by situation: landlord, credit card, employer, airline, parking tickets in your city, and more." },
  { title: "Fill in the blanks", body: "Every template has blanks for names, dates, amounts, and what happened. Stick to facts you can back up, and remove anything that doesn't apply." },
  { title: "Send it yourself", body: "The statutes are already cited. You send the letter, by email, mail, or both." },
];

const sendTips = [
  "You send the letter yourself, by email, mail, or both. For anything important, use a method that proves delivery, like certified mail, and keep a copy of everything you send and every reply you get.",
  "A lot of everyday problems end here: a clear, calm, well-documented letter is often all it takes. If it doesn't work, you've built a paper trail that will help with whatever comes next.",
  "Read the whole letter before you use it, and check your state's rules on deadlines and notice periods. They vary. A letter is a starting point, not a finished answer.",
];

export default function HowItWorksPage() {
  const chatOn = chatPublic(process.env);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use a Free Self-Help Legal Letter",
    description:
      "Three steps to using I'm Frustrated dot Org's free self-help letters and tools: find the right one, fill it in with your facts, and send it yourself.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Find Your Letter or Tool",
        text: chatOn
          ? "Browse the free letters and tools and pick the one that fits your situation, or have the chatbot write a letter for your situation."
          : "Browse the free letters and tools and pick the one that fits your situation.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Fill It In With Your Facts",
        text: "Add your names, dates, amounts, and what happened. Remove anything that doesn't apply and check your state's deadlines.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Send It Yourself",
        text: "Send the letter by a method that proves delivery and keep copies. If a deadline is close or the stakes are high, talk to a lawyer.",
      },
    ],
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://imfrustrated.org" },
      { "@type": "ListItem", position: 2, name: "How It Works", item: "https://imfrustrated.org/how-it-works" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="amb" aria-hidden="true"><i></i><i></i><i></i></div>
      <Header chatPublic={chatOn} />
      <Interactions />

      <main className="relative">
        {/* ─── Hero ─── */}
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-12 md:pb-16 text-center">
          <Reveal delay={1}>
            <nav className="text-[0.72rem] uppercase tracking-[0.2em] text-sage-2 mb-7 font-semibold">
              <Link href="/" className="hover:text-clay transition-colors duration-300">Home</Link>
              <span className="mx-3 text-rule">/</span>
              <span className="text-clay">How It Works</span>
            </nav>
          </Reveal>
          <Reveal delay={2}>
            <p className="font-accent italic text-xl text-clay">it&rsquo;s simpler than you think</p>
            <h1 className="font-disp font-semibold text-sage text-[2.4rem] sm:text-5xl md:text-6xl leading-[1.04] tracking-[-0.03em] mt-2">
              The letter you send
              <br className="hidden sm:block" /> before you hire a lawyer.
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-sage-2 text-lg md:text-xl leading-[1.6] max-w-2xl mx-auto mt-7">
              Most everyday legal problems start the same way: with a letter. Asking for your deposit back,
              disputing a charge, appealing a denial. You don&rsquo;t need to pay by the hour to write one.
              You need to know what to say, what to include, and when a letter isn&rsquo;t enough.
            </p>
          </Reveal>
          <Reveal delay={4}>
            <p className="text-sage-2 text-lg leading-[1.6] max-w-2xl mx-auto mt-5">
              That&rsquo;s what I&rsquo;m Frustrated dot Org is: free legal
              information, self-help guides, tools, and template letters. It&rsquo;s legal information, not
              legal advice. There&rsquo;s no fee, no account, and no judgment. Here&rsquo;s exactly how it works.
            </p>
          </Reveal>
        </section>

        {/* ─── Two paths, side by side ─── */}
        <section className="relative max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <Reveal>
            <div className="bg-bg-2 rounded-[32px] px-6 md:px-12 py-12 md:py-14">
              <div className={`grid gap-8 md:gap-10 ${chatOn ? "md:grid-cols-2" : "max-w-xl mx-auto"}`}>
                {[
                  ...(chatOn ? [{ key: "chat", eyebrow: "choice 1", title: "Use the chatbot", steps: chatSteps, href: "/letter-chat", cta: "Start the chat" }] : []),
                  { key: "collection", eyebrow: chatOn ? "choice 2" : "the collection", title: "Browse the collection", steps: collectionSteps, href: "/letters", cta: "Browse letters" },
                ].map((p) => (
                  <div key={p.key} className="bg-card border border-rule rounded-2xl p-6 md:p-7">
                    <p className="font-accent italic text-lg text-clay">{p.eyebrow}</p>
                    <h2 className="font-disp font-semibold text-sage text-2xl tracking-[-0.02em] mb-5">{p.title}</h2>
                    <ol className="space-y-5">
                      {p.steps.map((st, i) => (
                        <li key={st.title} className="flex gap-4">
                          <span className="font-accent italic text-2xl text-clay w-6 shrink-0">{i + 1}</span>
                          <div>
                            <h3 className="font-disp font-semibold text-sage text-lg">{st.title}</h3>
                            <p className="text-sage-2 text-base leading-[1.6] mt-1">{st.body}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                    <Link href={p.href} className="btn-ghost mag mt-6">{p.cta}</Link>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ─── Send it yourself ─── */}
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pb-12 md:pb-16">
          <Reveal>
            <div className="space-y-4">
              <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.85rem] tracking-[-0.02em]">Either way, you send it yourself</h2>
              {sendTips.map((t) => (
                <p key={t} className="text-sage-2 text-base md:text-lg leading-[1.65]">{t}</p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ─── Or email us (kept from the original chapter I) ─── */}
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pb-12 md:pb-16">
          <Reveal>
            <div className="space-y-4">
              <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.85rem] tracking-[-0.02em]">Or start with an email</h2>
              <p className="text-sage-2 text-base md:text-lg leading-[1.65]">
                You can also start by emailing{" "}
                <a href="mailto:info@imfrustrated.org" className="text-sage underline decoration-clay/70 decoration-[1.5px] underline-offset-[5px] hover:text-clay transition-colors duration-300">
                  info@imfrustrated.org
                </a>{" "}
                and telling us what&rsquo;s going on. Plain English. No legal jargon. Tell us what happened,
                who&rsquo;s involved, what worries you, what you&rsquo;re hoping for, and any deadlines or court
                dates you&rsquo;re aware of.
              </p>
              <p className="text-sage-2 text-base md:text-lg leading-[1.65]">
                The more honest you are, the more useful we can be. There&rsquo;s no expectation of polish. People
                come to us mid-crisis &mdash; a lease that just blew up, an inheritance fight, a small business
                contract that turned sideways, a denial letter that doesn&rsquo;t make sense. We&rsquo;d rather hear it
                raw than rehearsed.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ─── When to get a lawyer ─── */}
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pb-12 md:pb-16">
          <Reveal>
            <div className="bg-card border border-rule rounded-2xl p-7 md:p-9">
              <p className="font-accent italic text-clay text-lg mb-2">when a letter isn&rsquo;t enough</p>
              <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.875rem] tracking-[-0.03em] mb-5">
                When to get a lawyer instead
              </h2>
              <div className="space-y-4">
                <p className="text-sage-2 text-base md:text-lg leading-[1.7]">
                  Self-help has limits. Talk to a licensed attorney or your local legal aid office if you&rsquo;ve
                  been sued or served, if a court date or filing deadline is close, if you&rsquo;re facing eviction,
                  arrest, or the loss of a job or benefits, or if a lot of money or your safety is at stake.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ─── CTA ─── */}
        <section className="relative max-w-6xl mx-auto px-6 md:px-8 pb-24">
          <Reveal>
            <div className="bg-sage rounded-[32px] px-6 sm:px-10 md:px-14 py-14 md:py-16 text-center">
              <h2 className="font-disp font-semibold text-bg text-3xl md:text-[2.6rem] tracking-[-0.03em] leading-tight mb-6">
                Not sure which letter fits?
              </h2>
              <TwoChoiceBox chatPublic={chatOn} tone="dark" />
              <a href="mailto:info@imfrustrated.org" className="btn-clay mag mt-6">info@imfrustrated.org</a>
              <div className="mt-12 flex justify-center gap-6 text-sm flex-wrap text-[#cdd6cd]">
                <Link href="/about" className="hover:text-clay-soft transition-colors duration-300">About us</Link>
                <Link href="/free-tools" className="hover:text-clay-soft transition-colors duration-300">Free tools</Link>
                <Link href="/faq" className="hover:text-clay-soft transition-colors duration-300">FAQ</Link>
                <Link href="/" className="hover:text-clay-soft transition-colors duration-300">Home</Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter chatPublic={chatOn} />
    </>
  );
}
