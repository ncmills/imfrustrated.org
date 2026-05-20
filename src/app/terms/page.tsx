import type { Metadata } from "next";
import Link from "next/link";
import { Header, FadeInSection } from "@/components/ClientSections";

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
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-paper">
          <FadeInSection className="relative z-10 max-w-3xl mx-auto px-6 md:px-10">
            <nav className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-warm mb-8 font-medium">
              <Link href="/" className="hover:text-forest transition-colors">Home</Link>
              <span className="mx-3 text-rule">/</span>
              <span className="text-amber">Terms</span>
            </nav>
            <p className="text-amber text-[0.72rem] font-semibold uppercase tracking-[0.3em] mb-4">Terms of Use</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-ink leading-[1.05] tracking-[-0.02em] mb-8">
              What this is, <br className="hidden sm:block" /> what it isn&rsquo;t, and the rules for both<span className="text-amber">.</span>
            </h1>
            <div className="decorative-rule mb-8" />
            <p className="text-muted-warm text-lg leading-relaxed">
              I&rsquo;m Frustrated dot Org is not a law firm, and using it does not make us your lawyers. These terms describe the service honestly so the line between &ldquo;informational&rdquo; and &ldquo;legal representation&rdquo; stays visible.
            </p>
            <p className="text-muted-warm text-sm mt-8 italic">
              Last updated: {LAST_UPDATED}
            </p>
          </FadeInSection>
        </section>

        {/* Body */}
        <section className="py-20 md:py-24 bg-paper-deep">
          <div className="max-w-3xl mx-auto px-6 md:px-10 space-y-14 md:space-y-16">
            {sections.map((s, i) => (
              <FadeInSection key={s.marker}>
                <div>
                  <p className="font-serif text-amber text-lg tracking-[0.1em] mb-3">{s.marker}</p>
                  <h2 className="font-serif text-2xl md:text-[1.875rem] font-semibold text-ink mb-5 tracking-[-0.01em]">
                    {s.title}
                  </h2>
                  <div className="space-y-4">
                    {s.paragraphs.map((p, j) => (
                      <p key={j} className="text-muted-warm text-base md:text-lg leading-[1.7]">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
                {i < sections.length - 1 && (
                  <div className="mt-14 md:mt-16 flex items-center gap-4" aria-hidden="true">
                    <span className="h-px flex-1 bg-rule" />
                    <svg viewBox="0 0 20 20" className="w-2 h-2 text-amber" fill="currentColor">
                      <circle cx="10" cy="10" r="3" />
                    </svg>
                    <span className="h-px flex-1 bg-rule" />
                  </div>
                )}
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-paper">
          <FadeInSection className="max-w-2xl mx-auto px-6 md:px-10 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink leading-snug mb-5 tracking-[-0.01em]">
              Frustrated<span className="text-amber">?</span>
            </h2>
            <p className="text-muted-warm text-lg leading-relaxed mb-8">
              The terms above describe the rules. The conversation itself is free.
            </p>
            <a href="mailto:info@imfrustrated.org" className="btn-forest">
              info@imfrustrated.org
            </a>
            <div className="mt-12 flex justify-center gap-6 text-sm flex-wrap text-muted-warm">
              <Link href="/privacy" className="hover:text-forest transition-colors">Privacy</Link>
              <Link href="/about" className="hover:text-forest transition-colors">About</Link>
              <Link href="/faq" className="hover:text-forest transition-colors">FAQ</Link>
              <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            </div>
          </FadeInSection>
        </section>
      </main>
    </>
  );
}
