import type { Metadata } from "next";
import Link from "next/link";
import { Header, Reveal, SiteFooter } from "@/components/ClientSections";
import { buildOpenGraph } from "@/lib/og";

export const metadata: Metadata = {
  title: "FAQ | I'm Frustrated dot Org",
  description:
    "Common questions about I'm Frustrated dot Org — what we publish, what it costs, what we won't do, and when to talk to a lawyer.",
  alternates: { canonical: "https://imfrustrated.org/faq" },
  openGraph: buildOpenGraph({
    path: "/faq",
    title: "FAQ | I'm Frustrated dot Org",
    description:
      "Common questions about I'm Frustrated dot Org — what we publish, what it costs, what we won't do, and when to talk to a lawyer.",
    // src/app/faq/ has no colocated opengraph-image file.
    hasRouteImage: false,
  }),
};

const FAQS: { question: string; answer: string }[] = [
  {
    question: "What does I'm Frustrated dot Org actually do?",
    answer:
      "We're a nonprofit that publishes free legal information and self-help tools: plain-English guides, template letters, and simple tools for everyday legal problems. You find the letter or guide that fits your situation, fill it in with your own facts, and send it yourself. We don't represent anyone, we don't give legal advice, and no one acts as your lawyer.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Nothing. There's no fee, no account, no invoice, and no obligation to do anything afterward. The letters, guides, and tools are free because the first step in most everyday legal problems shouldn't cost money.",
  },
  {
    question: "What's the draft-letter request?",
    answer:
      "If you can't find a letter that fits, you can tell us what happened using the form on our home page, and we'll email you a draft self-help letter you can edit and send yourself. This is legal information, not legal advice; no one acts as your lawyer and no attorney-client relationship is formed. Read it carefully and change anything that isn't accurate before you send it.",
  },
  {
    question: "What's the catch?",
    answer:
      "There isn't one. We're not a lead-generation funnel for a law firm. We don't sell your information. We're not trying to sign you up for anything. The catch, if there is one, is that self-help has limits: a letter is a good first step, but some situations need a lawyer, and our guides say when.",
  },
  {
    question: "Will you represent me in court?",
    answer:
      "No. I'm Frustrated dot Org is not a law firm and we don't take cases or appear in court on anyone's behalf. If your situation needs representation, contact a licensed attorney, your local legal aid office, or your state bar's lawyer referral service.",
  },
  {
    question: "Is this legal advice?",
    answer:
      "No. Everything on this site, including any draft letter we email you, is general legal information and a self-help tool, not legal advice. Using this site does not create an attorney-client relationship. For advice about your situation, contact a licensed attorney or your local legal aid office.",
  },
  {
    question: "What kinds of problems do your tools cover?",
    answer:
      "Everyday problems where a clear letter or a basic understanding of your rights is the first step. Common ones: landlord-tenant disputes, security deposits, contract confusion, denial letters from insurance or government agencies, employment issues, and consumer disputes. If we don't have a letter or guide for your issue yet, a local legal aid office or your state bar's lawyer referral service is a good place to start.",
  },
  {
    question: "Can you help me write a will or plan my estate?",
    answer:
      "If your situation is simple — a basic will leaving things to obvious people, no contested family dynamics, no special-needs beneficiaries, no complicated business interests — we built a free self-help tool at idonthaveawill.com that lets you draft a state-specific will in about ten minutes, entirely in your browser. No account, no fees, no data stored. If your situation is more complicated than that, talk to an estate planning attorney.",
  },
  {
    question: "I was denied Social Security disability — can you help?",
    answer:
      "Don't take the denial as the final word — a large share of disability cases that ultimately win are won on appeal. We built a set of free tools at aissdi.com that turn public SSA data into plain answers: estimate the approval odds for a claim like yours, look up the approval rate of the administrative law judge assigned to your hearing, and — if you've already been denied — weigh your appeal options at aissdi.com/appeal-decision, which lays out the Appeals Council's actual remand rates and the top reasons cases get sent back. No account, built for claimants representing themselves and for the attorneys who help them. Appeal deadlines are short, so if one is close, talk to a lawyer or a legal aid office.",
  },
  {
    question: "What if my deadline is close?",
    answer:
      "Don't wait on a template. If you have a court date, an eviction notice, or a filing deadline coming up, contact a licensed attorney or your local legal aid office now. Many legal aid offices and state bar referral services can respond quickly to urgent situations.",
  },
  {
    question: "Can I change the letters?",
    answer:
      "Yes, and you should. The templates are starting points. Fill them in with your own facts, remove anything that doesn't apply, and keep a copy of whatever you send. If you later hire an attorney, bring your letters and any replies with you — it'll save time.",
  },
  {
    question: "What if I'm in a different state?",
    answer:
      "Many everyday legal problems work similarly across states, so most of our letters and guides are written to be useful anywhere. Some rules — deadlines, deposit limits, notice periods — vary by state, so check your state's rules before you send anything, and talk to a lawyer licensed in your state if you're unsure.",
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
              Below are the questions we get most often. If your question about the site isn&rsquo;t here, email{" "}
              <a
                href="mailto:info@imfrustrated.org"
                className="text-sage underline decoration-clay/70 decoration-[1.5px] underline-offset-[5px] hover:text-clay transition-colors duration-300"
              >
                info@imfrustrated.org
              </a>
              {" "}and ask. We can&rsquo;t give legal advice about your situation.
            </p>
            <p className="font-accent italic text-clay text-2xl md:text-[1.7rem] mt-7">
              Information, not advice.
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
        <section className="relative max-w-6xl mx-auto px-6 md:px-8 pb-24">
          <Reveal>
            <div className="bg-sage rounded-[32px] px-6 sm:px-10 md:px-14 py-14 md:py-16 text-center">
              <h2 className="font-disp font-semibold text-bg text-3xl md:text-[2.6rem] tracking-[-0.03em] leading-tight mb-3">
                Still have a question?
              </h2>
              <p className="font-accent italic text-clay-soft text-2xl md:text-[1.7rem] mb-5">
                Start with the free letters.
              </p>
              <p className="text-[#cdd6cd] text-lg leading-relaxed max-w-xl mx-auto mb-8">
                For questions about the site, email is the best way to reach us. For advice about your situation, contact a licensed attorney or your local legal aid office.
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
