import type { Metadata } from "next";
import Link from "next/link";
import { Header, Reveal, SiteFooter } from "@/components/ClientSections";

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
      "Intake submissions are written to a Supabase database and emailed to info@imfrustrated.org via Resend, a transactional email provider. From there a volunteer attorney reads your message and writes back. Nothing else happens with it. Your email is not added to a marketing list, not sold, not syndicated to lead-gen partners, not handed to legal-marketing firms. There is no marketing list.",
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
      <div className="amb" aria-hidden="true"><i></i><i></i><i></i></div>
      <Header />
      <main className="relative">
        {/* Hero */}
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-10 md:pb-14">
          <Reveal delay={1}>
            <nav className="text-[0.7rem] uppercase tracking-[0.22em] text-sage-2 mb-8 font-medium">
              <Link href="/" className="hover:text-sage transition-colors duration-300">Home</Link>
              <span className="mx-3 text-rule">/</span>
              <span className="text-clay">Privacy</span>
            </nav>
          </Reveal>
          <Reveal delay={2}>
            <p className="font-accent italic text-xl text-clay">privacy</p>
          </Reveal>
          <Reveal delay={3}>
            <h1 className="font-disp font-semibold text-sage text-[2.2rem] sm:text-4xl lg:text-[3.25rem] leading-[1.07] tracking-[-0.03em] mt-2 mb-7">
              What we collect, where it goes, and what we don&rsquo;t do with it.
            </h1>
          </Reveal>
          <Reveal delay={4}>
            <p className="text-sage-2 text-lg leading-[1.7] max-w-2xl">
              This is not a template lifted from a generator. It describes what the site actually does: a homepage intake form, a library of letter templates, two analytics tools, and one email address.
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
                Questions?
              </h2>
              <p className="text-[#cdd6cd] text-lg leading-relaxed max-w-xl mx-auto mb-8">
                Privacy questions, deletion requests, and corrections all go to the same address.
              </p>
              <a href="mailto:info@imfrustrated.org" className="btn-clay">
                info@imfrustrated.org
              </a>
              <div className="mt-10 flex justify-center gap-6 text-sm flex-wrap text-[#cdd6cd]">
                <Link href="/terms" className="hover:text-clay-soft transition-colors duration-300">Terms</Link>
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
