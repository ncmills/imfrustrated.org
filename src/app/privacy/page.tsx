import type { Metadata } from "next";
import Link from "next/link";
import { Header, FadeInSection } from "@/components/ClientSections";

export const metadata: Metadata = {
  title: "Privacy | I'm Frustrated dot Org",
  description:
    "What we collect, where it goes, and what we don't do with it. Plain-English privacy practice for the volunteer attorney intake form, letter library, and analytics.",
  alternates: { canonical: "https://imfrustrated.org/privacy" },
  openGraph: {
    type: "article",
    url: "https://imfrustrated.org/privacy",
    title: "Privacy | I'm Frustrated dot Org",
    description:
      "What we collect, where it goes, and what we don't do with it.",
  },
};

const LAST_UPDATED = "May 20, 2026";

const sections = [
  {
    marker: "§ I",
    title: "What we collect",
    paragraphs: [
      "When you use the intake form on the homepage, we collect what you give us: your email address, your two-letter US state, the issue category you select, and the free-text message you write (capped at 2,000 characters). We do not ask for a phone number, a date of birth, a Social Security number, a government ID, or any payment information. We have no use for those, and the form does not have fields for them.",
      "We also briefly capture the IP address your request comes from. It is used in memory to rate-limit submissions (five per hour per address) so the form is not flooded by bots, and it is stored alongside the intake record in our database for the same reason. We do not use it to fingerprint you, follow you across sites, or assemble a behavioral profile.",
      "Across the rest of the site we use two analytics tools: PostHog for product analytics (page views, which letter templates get opened, which buttons get clicked) and Vercel Analytics + Speed Insights for traffic and performance measurement. Both are configured for aggregate measurement, not individual identification.",
    ],
  },
  {
    marker: "§ II",
    title: "Where it goes",
    paragraphs: [
      "Intake submissions are written to a Supabase database hosted in the United States and emailed to info@imfrustrated.org via Resend, a transactional email provider. From there a volunteer attorney reads your message and writes back. Nothing else happens with it. Your email is not added to a marketing list, not sold, not syndicated to lead-gen partners, not handed to legal-marketing firms. There is no marketing list.",
      "PostHog and Vercel each receive the analytics events described above. Both providers have their own privacy disclosures and act as processors for us — we control what is sent and we do not authorize them to sell or share what they collect.",
    ],
  },
  {
    marker: "§ III",
    title: "What we don't do",
    paragraphs: [
      "We do not sell your information. We do not run advertising on this site, so there are no ad-network trackers to ride along. We do not embed third-party social media pixels. We do not share intake content with anyone outside the volunteer attorney who responds to you. We do not retain analytics tied to a personal identifier beyond what is necessary to operate the site.",
      "We also do not knowingly collect information from children under 16. The service is built for adults navigating their own legal questions; if you are a minor, please ask a parent or guardian to reach out for you.",
    ],
  },
  {
    marker: "§ IV",
    title: "Your rights",
    paragraphs: [
      "If you want a copy of what we have on you, or you want it deleted, email info@imfrustrated.org from the address you submitted with and we will handle it. There is no portal and no form; a real person on our end will do it manually. We will respond within thirty days.",
      "If you are a resident of California, the EEA, the UK, or another jurisdiction with statutory data-subject rights, those rights apply here as well. Same email, same person, same response.",
    ],
  },
  {
    marker: "§ V",
    title: "Cookies and storage",
    paragraphs: [
      "PostHog and Vercel Analytics may set their own cookies or use browser storage to support measurement. We do not set cookies for advertising or for tracking you across other sites. The site itself does not require an account, does not log you in, and does not store anything in your browser for the purposes of identification.",
    ],
  },
  {
    marker: "§ VI",
    title: "Contact",
    paragraphs: [
      "Reach us at info@imfrustrated.org for any privacy question, deletion request, or correction. The service operator is I'm Frustrated dot Org, a New York not-for-profit initiative in formation as a 501(c)(3) charitable corporation; this notice will be updated to reflect the formal entity once the incorporation is filed and the EIN issues.",
    ],
  },
];

export default function PrivacyPage() {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://imfrustrated.org" },
      { "@type": "ListItem", position: 2, name: "Privacy", item: "https://imfrustrated.org/privacy" },
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
              <span className="text-amber">Privacy</span>
            </nav>
            <p className="text-amber text-[0.72rem] font-semibold uppercase tracking-[0.3em] mb-4">Privacy</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-ink leading-[1.05] tracking-[-0.02em] mb-8">
              What we collect, <br className="hidden sm:block" />where it goes, and what we don&rsquo;t do with it<span className="text-amber">.</span>
            </h1>
            <div className="decorative-rule mb-8" />
            <p className="text-muted-warm text-lg leading-relaxed">
              This is not a template lifted from a generator. It describes what the site actually does: a homepage intake form, a library of letter templates, two analytics tools, and one email address.
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
              Questions<span className="text-amber">?</span>
            </h2>
            <p className="text-muted-warm text-lg leading-relaxed mb-8">
              Privacy questions, deletion requests, and corrections all go to the same address.
            </p>
            <a href="mailto:info@imfrustrated.org" className="btn-forest">
              info@imfrustrated.org
            </a>
            <div className="mt-12 flex justify-center gap-6 text-sm flex-wrap text-muted-warm">
              <Link href="/terms" className="hover:text-forest transition-colors">Terms</Link>
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
