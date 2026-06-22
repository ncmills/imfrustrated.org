import type { Metadata } from "next";
import Link from "next/link";
import { Header, Reveal, SiteFooter } from "@/components/ClientSections";

export const metadata: Metadata = {
  title: "Terms | I'm Frustrated dot Org",
  description:
    "Plain-English terms of use for I'm Frustrated dot Org: who we are, what the service does, what it doesn't, and the legal posture around the letter library and volunteer attorney intake.",
  alternates: { canonical: "https://imfrustrated.org/terms" },
  openGraph: {
    type: "article",
    url: "https://imfrustrated.org/terms",
    title: "Terms | I'm Frustrated dot Org",
    description:
      "Plain-English terms of use for I'm Frustrated dot Org.",
  },
};

const LAST_UPDATED = "May 20, 2026";

const sections = [
  {
    marker: "§ I",
    title: "What this service is",
    paragraphs: [
      "I'm Frustrated dot Org is a volunteer attorney intake and a library of letter templates. The intake is a single email-based conversation with a practicing attorney who is donating their time. The letters are documents you can copy, edit, and send yourself. Neither is a lawyer-for-hire arrangement, and using the site does not create an attorney-client relationship with us or with any volunteer who responds to you.",
      "We are not a law firm. We do not appear in court on your behalf. We do not draft documents on your behalf. We do not sign retainer agreements. When the right next step is hiring a lawyer, we will tell you that, and you will hire your own.",
    ],
  },
  {
    marker: "§ II",
    title: "The letter templates",
    paragraphs: [
      "Every letter in the library cites real federal or state statutes and reflects the regulatory framework that was in force at the time the template was published or last updated. The cite-verification standard is primary-source: federal cites are verified against Cornell Legal Information Institute or the relevant agency's official .gov publication, and state cites are verified against the official state legislature site or agency .gov. We do not freehand statutes from training data; templates that cannot be verified are not published.",
      "That said, statutes change. Court decisions reinterpret them. The facts of your situation can flip which statute applies. The templates are informational starting points, not legal advice tailored to your circumstances. If a letter does not resolve your problem, the next move is usually to talk to a lawyer in your state — that is exactly what the intake form is for.",
      "You are welcome to copy, modify, and send any letter in the library for your own non-commercial use. You may not republish the templates as a competing library, white-label them as your own legal product, or sell them as a paid service.",
    ],
  },
  {
    marker: "§ III",
    title: "The volunteer attorney conversation",
    paragraphs: [
      "When you submit the intake form, a practicing attorney reads your message and writes back. The conversation is informational. The attorney is not representing you, is not in an attorney-client relationship with you, and cannot be held to the duties of one based on the exchange. They are a person who happens to know the area giving you a more informed lens on it.",
      "Anything you tell us in the intake form should be assumed to be a non-privileged communication. Do not send us anything you would not be willing to repeat under oath, and do not send us anything that needs to stay sealed for an active matter. If you are already represented in a matter, talk to your existing lawyer instead — we will not step on that relationship.",
    ],
  },
  {
    marker: "§ IV",
    title: "Disclaimers and liability",
    paragraphs: [
      "The site, the letter library, the intake conversation, and any tools linked from /free-tools are provided on an as-is basis without warranties of any kind, express or implied, including fitness for a particular purpose and non-infringement. We do not warrant that the information is current to the second or applicable to your specific facts.",
      "To the maximum extent permitted by law, neither I'm Frustrated dot Org nor any volunteer attorney is liable for indirect, incidental, consequential, or punitive damages arising out of your use of the site or reliance on anything you read or receive through it. Where liability cannot be fully disclaimed, total aggregate liability is capped at one hundred US dollars.",
    ],
  },
  {
    marker: "§ V",
    title: "Governing law and changes",
    paragraphs: [
      "These terms are governed by the laws of the State of New York, where the operating not-for-profit is in formation. Any dispute arising out of these terms or your use of the site will be brought in the state or federal courts located in New York County, New York, and you consent to that forum.",
      "We will update these terms when the service changes — for example, when the corporate entity is formally incorporated and an EIN issues. Material changes will be noted with an updated date at the top of this page; continued use of the site after a change constitutes acceptance.",
    ],
  },
  {
    marker: "§ VI",
    title: "Contact",
    paragraphs: [
      "Questions about these terms go to info@imfrustrated.org. The service operator is I'm Frustrated dot Org, a New York not-for-profit initiative in formation as a 501(c)(3) charitable corporation.",
    ],
  },
];

export default function TermsPage() {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://imfrustrated.org" },
      { "@type": "ListItem", position: 2, name: "Terms", item: "https://imfrustrated.org/terms" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="amb" aria-hidden="true"><i></i><i></i><i></i></div>
      <Header />
      <main className="relative">
        {/* Hero */}
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-10 md:pb-14">
          <Reveal delay={1}>
            <nav className="text-[0.7rem] uppercase tracking-[0.22em] text-sage-2 mb-8 font-medium">
              <Link href="/" className="hover:text-sage transition-colors duration-300">Home</Link>
              <span className="mx-3 text-rule">/</span>
              <span className="text-clay">Terms</span>
            </nav>
          </Reveal>
          <Reveal delay={2}>
            <p className="font-accent italic text-xl text-clay">terms of use</p>
          </Reveal>
          <Reveal delay={3}>
            <h1 className="font-disp font-semibold text-sage text-[2.2rem] sm:text-4xl lg:text-[3.25rem] leading-[1.07] tracking-[-0.03em] mt-2 mb-7">
              What this is, what it isn&rsquo;t, and the rules for both.
            </h1>
          </Reveal>
          <Reveal delay={4}>
            <p className="text-sage-2 text-lg leading-[1.7] max-w-2xl">
              I&rsquo;m Frustrated dot Org is not a law firm, and using it does not make us your lawyers. These terms describe the service honestly so the line between &ldquo;informational&rdquo; and &ldquo;legal representation&rdquo; stays visible.
            </p>
            <p className="text-sage-2 text-sm mt-6 font-accent italic">
              Last updated: {LAST_UPDATED}
            </p>
          </Reveal>
        </section>

        {/* Body */}
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <div className="space-y-5">
            {sections.map((s) => (
              <Reveal key={s.marker}>
                <div className="bg-card border border-rule rounded-2xl p-7 md:p-9">
                  <p className="font-accent italic text-clay text-lg mb-2">{s.marker}</p>
                  <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.75rem] tracking-[-0.03em] mb-5">
                    {s.title}
                  </h2>
                  <div className="space-y-4">
                    {s.paragraphs.map((p, j) => (
                      <p key={j} className="text-sage-2 text-base md:text-lg leading-[1.7]">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative max-w-5xl mx-auto px-6 md:px-8 pb-24">
          <Reveal>
            <div className="bg-sage rounded-[32px] px-6 sm:px-10 md:px-14 py-14 md:py-16 text-center">
              <h2 className="font-disp font-semibold text-bg text-3xl md:text-[2.6rem] tracking-[-0.03em] leading-tight mb-4">
                Frustrated?
              </h2>
              <p className="text-[#cdd6cd] text-lg leading-relaxed max-w-xl mx-auto mb-8">
                The terms above describe the rules. The conversation itself is free.
              </p>
              <a href="mailto:info@imfrustrated.org" className="btn-clay">
                info@imfrustrated.org
              </a>
              <div className="mt-10 flex justify-center gap-6 text-sm flex-wrap text-[#cdd6cd]">
                <Link href="/privacy" className="hover:text-clay-soft transition-colors duration-300">Privacy</Link>
                <Link href="/about" className="hover:text-clay-soft transition-colors duration-300">About</Link>
                <Link href="/faq" className="hover:text-clay-soft transition-colors duration-300">FAQ</Link>
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
