import type { Metadata } from "next";
import Link from "next/link";
import { Header, Reveal, SiteFooter } from "@/components/ClientSections";

export const metadata: Metadata = {
  title: "FAQ | I'm Frustrated dot Org",
  description:
    "Common questions about I'm Frustrated dot Org — what we do, who we are, what it costs, what we won't do, and when to reach out.",
  alternates: { canonical: "https://imfrustrated.org/faq" },
  openGraph: {
    type: "article",
    url: "https://imfrustrated.org/faq",
    title: "FAQ | I'm Frustrated dot Org",
    description:
      "Common questions about I'm Frustrated dot Org — what we do, who we are, what it costs, what we won't do, and when to reach out.",
  },
};

const FAQS: { question: string; answer: string }[] = [
  {
    question: "What does I'm Frustrated dot Org actually do?",
    answer:
      "We connect people with volunteer attorneys for a free, no-pressure conversation about a legal situation. We don't represent you. We won't be your lawyers. We'll listen to your situation, explain where you stand legally, walk you through your realistic options, and help you decide what to do next — whether that means hiring an attorney, handling it yourself, or something in between.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Nothing. There's no fee, no retainer, no invoice, and no obligation to do anything afterward. The volunteer attorneys donate their time because they believe people shouldn't have to spend money to find out whether they need to spend money on a lawyer.",
  },
  {
    question: "Who are the attorneys?",
    answer:
      "Practicing lawyers who volunteer their time. Backgrounds vary — some focus on small business and contracts, some on landlord-tenant and housing, some on family law, some on estate planning, some on consumer protection. When you reach out, we route your situation to whoever has relevant experience.",
  },
  {
    question: "What's the catch?",
    answer:
      "There isn't one. We're not a lead-generation funnel for a law firm. We don't sell your information. We're not trying to sign you up for anything. The model is simple: experienced attorneys donate a few hours a week to help people who'd otherwise be making big decisions in the dark. The catch, if there is one, is that we can't always respond instantly — we're volunteers, not a 24/7 hotline.",
  },
  {
    question: "Will you represent me in court?",
    answer:
      "No. I'm Frustrated dot Org is not a law firm and we don't take cases or appear in court on your behalf. If your situation needs representation, we'll tell you that, and we'll help you understand what to look for when you interview lawyers. We can sometimes point you toward attorneys we trust, but we don't take referral fees or get any kickback if you hire someone.",
  },
  {
    question: "Is this legal advice?",
    answer:
      "Technically, no. We provide informational guidance and a perspective from someone who understands the law. We're upfront about this in our disclaimers because the formal definition of legal advice requires an attorney-client relationship, which we deliberately don't form. In practice, you'll get a much clearer picture of your situation than you would from Google or a friend who watches a lot of legal TV.",
  },
  {
    question: "What kinds of problems do you help with?",
    answer:
      "Anything that has you frustrated with a system or a person and you don't know what to do next. Common ones: landlord-tenant disputes, small business questions, contract confusion, denial letters from insurance or government agencies, family law situations that haven't escalated yet, estate planning questions, employment issues, and consumer disputes. If we can't help with your specific issue, we'll tell you and try to point you in the right direction.",
  },
  {
    question: "Can you help me write a will or plan my estate?",
    answer:
      "Yes, in two different ways depending on what you need. If your situation is simple — a basic will leaving things to obvious people, no contested family dynamics, no special-needs beneficiaries, no complicated business interests — we built a free self-help tool at idonthaveawill.com that lets you draft a state-specific will in about ten minutes, entirely in your browser. No account, no fees, no data stored. If your situation is more complicated than that, email us and a volunteer attorney with estate planning experience will help you think through what you actually need before you go pay an estate planning specialist.",
  },
  {
    question: "How fast will I hear back?",
    answer:
      "Usually within a few days. Volunteers have day jobs, so we don't promise an immediate response — but we try to get to every email within a week. If your situation is genuinely time-sensitive (a court date, an eviction notice, a contract deadline), say so in your first email and we'll triage accordingly.",
  },
  {
    question: "Can I share what we discussed?",
    answer:
      "Yes. There's no NDA. The conversation is for you to use however you want. If you decide to hire an attorney later, feel free to tell them what we discussed — it'll save you time and probably money.",
  },
  {
    question: "What if I'm in a different state?",
    answer:
      "Reach out anyway. While individual attorneys are licensed in specific states, the legal frameworks for many common issues are similar across states, and we can usually still give you a meaningful perspective. If your situation is jurisdiction-specific in a way we can't help with, we'll tell you.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://imfrustrated.org" },
      { "@type": "ListItem", position: 2, name: "FAQ", item: "https://imfrustrated.org/faq" },
    ],
  };

  const pad2 = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="amb" aria-hidden="true"><i></i><i></i><i></i></div>
      <Header />
      <main className="relative">
        {/* Hero */}
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-12 md:pb-16">
          <Reveal delay={1}>
            <nav className="text-[0.7rem] uppercase tracking-[0.22em] text-sage-2 mb-8 font-medium">
              <Link href="/" className="hover:text-sage transition-colors duration-300">Home</Link>
              <span className="mx-3 text-rule">/</span>
              <span className="text-clay">FAQ</span>
            </nav>
          </Reveal>
          <Reveal delay={2}>
            <p className="font-accent italic text-xl text-clay">questions, answered</p>
          </Reveal>
          <Reveal delay={3}>
            <h1 className="font-disp font-semibold text-sage text-[2.4rem] sm:text-5xl lg:text-[3.75rem] leading-[1.05] tracking-[-0.03em] mt-2 mb-7">
              Honest answers to the things people ask first.
            </h1>
          </Reveal>
          <Reveal delay={4}>
            <p className="text-sage-2 text-lg leading-[1.7] max-w-2xl">
              Below are the questions we get most often. If your question isn&rsquo;t here, just email{" "}
              <a
                href="mailto:info@imfrustrated.org"
                className="text-sage underline decoration-clay/70 decoration-[1.5px] underline-offset-[5px] hover:text-clay transition-colors duration-300"
              >
                info@imfrustrated.org
              </a>
              {" "}and ask.
            </p>
            <p className="font-accent italic text-clay text-2xl md:text-[1.7rem] mt-7">
              We read every one.
            </p>
          </Reveal>
        </section>

        {/* Q&A list */}
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <div className="space-y-5">
            {FAQS.map((faq, i) => (
              <Reveal key={i}>
                <article className="bg-card border border-rule rounded-2xl p-7 md:p-8">
                  <div className="grid grid-cols-[auto,1fr] gap-x-5 md:gap-x-6 items-baseline">
                    <span
                      className="font-accent italic text-[1.4rem] text-clay select-none leading-none"
                      aria-hidden="true"
                    >
                      {pad2(i + 1)}
                    </span>
                    <h2 className="font-disp font-semibold text-sage text-xl md:text-[1.5rem] leading-snug tracking-[-0.03em]">
                      {faq.question}
                    </h2>
                  </div>
                  <p className="text-sage-2 text-base md:text-lg leading-[1.7] mt-4 md:pl-[3.1rem]">
                    {faq.answer}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative max-w-5xl mx-auto px-6 md:px-8 pb-24">
          <Reveal>
            <div className="bg-sage rounded-[32px] px-6 sm:px-10 md:px-14 py-14 md:py-16 text-center">
              <h2 className="font-disp font-semibold text-bg text-3xl md:text-[2.6rem] tracking-[-0.03em] leading-tight mb-3">
                Still have a question?
              </h2>
              <p className="font-accent italic text-clay-soft text-2xl md:text-[1.7rem] mb-5">
                Just ask. No form required.
              </p>
              <p className="text-[#cdd6cd] text-lg leading-relaxed max-w-xl mx-auto mb-8">
                There&rsquo;s no form, no funnel, no signup. Email is the best way to reach us.
              </p>
              <a href="mailto:info@imfrustrated.org" className="btn-clay">
                info@imfrustrated.org
              </a>
              <div className="mt-10 flex justify-center gap-6 text-sm flex-wrap text-[#cdd6cd]">
                <Link href="/how-it-works" className="hover:text-clay-soft transition-colors duration-300">How it works</Link>
                <Link href="/free-tools" className="hover:text-clay-soft transition-colors duration-300">Free tools</Link>
                <Link href="/about" className="hover:text-clay-soft transition-colors duration-300">About us</Link>
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
