import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Reveal, Interactions, SiteFooter } from "@/components/ClientSections";
import { getAllParkingCities, getParkingCity } from "@/data/parking";

type Params = { city: string };

export function generateStaticParams() {
  return getAllParkingCities().map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city } = await params;
  const c = getParkingCity(city);
  if (!c) return {};
  const url = `https://imfrustrated.org/letters/parking/${c.slug}`;
  const title = `How to Fight a Parking Ticket in ${c.city} | I'm Frustrated dot Org`;
  const description = `Contest a ${c.city} parking ticket yourself: the exact defense statement, where to submit it (${c.agency}), and your ${c.contestDeadlineDays}-day deadline. Verified against ${c.state} rules.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title, description },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ParkingCityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city } = await params;
  const c = getParkingCity(city);
  if (!c) notFound();

  const url = `https://imfrustrated.org/letters/parking/${c.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `How to Fight a Parking Ticket in ${c.city}`,
    description: `Contest a ${c.city} parking ticket: the exact defense, where to submit it, and the deadline that matters.`,
    url,
    datePublished: c.publishedAt,
    dateModified: c.updatedAt ?? c.publishedAt,
    author: { "@type": "Organization", name: "I'm Frustrated dot Org", url: "https://imfrustrated.org" },
    publisher: {
      "@type": "Organization",
      name: "I'm Frustrated dot Org",
      url: "https://imfrustrated.org",
    },
    isAccessibleForFree: true,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const howToSchema = c.howToContest.length
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: `How to contest a parking ticket in ${c.city}`,
        description: c.contestDeadlineNote,
        totalTime: "PT15M",
        step: c.howToContest.map((text, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: `Step ${i + 1}`,
          text,
        })),
      }
    : null;

  const faqSchema = c.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: c.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://imfrustrated.org" },
      { "@type": "ListItem", position: 2, name: "Letters", item: "https://imfrustrated.org/letters" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Parking tickets",
        item: "https://imfrustrated.org/letters/parking",
      },
      { "@type": "ListItem", position: 4, name: c.city, item: url },
    ],
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "#how-to-contest", "#faq"],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      {howToSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      )}
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="amb" aria-hidden="true"><i></i><i></i><i></i></div>
      <Header />
      <Interactions />
      <main className="relative">
        {/* Hero */}
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-10">
          <Reveal>
            <nav className="text-sm font-medium text-sage-2 mb-7">
              <Link href="/" className="hover:text-clay transition-colors duration-300">Home</Link>
              <span className="mx-2.5 text-rule">/</span>
              <Link href="/letters" className="hover:text-clay transition-colors duration-300">Letters</Link>
              <span className="mx-2.5 text-rule">/</span>
              <Link href="/letters/parking" className="hover:text-clay transition-colors duration-300">
                Parking tickets
              </Link>
              <span className="mx-2.5 text-rule">/</span>
              <span className="text-clay">{c.city}</span>
            </nav>
          </Reveal>
          <Reveal delay={1}>
            <span className="eyebrow"><span className="pulse" />{c.state} · Parking ticket dispute</span>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="font-disp font-semibold text-sage text-3xl md:text-4xl lg:text-[2.9rem] leading-[1.1] tracking-[-0.03em] mt-7">
              How to fight a parking ticket in {c.city}
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-7 bg-clay/10 border border-clay/30 rounded-2xl px-6 py-5">
              <p className="font-disp font-semibold text-sage text-lg">
                You have about {c.contestDeadlineDays} days from the date on the ticket.
              </p>
              <p className="text-sage-2 text-base leading-[1.6] mt-1">{c.contestDeadlineNote}</p>
              <p className="text-sage-2 text-sm mt-2">{c.penaltyNote}</p>
            </div>
          </Reveal>
        </section>

        {/* Where it goes */}
        <section id="how-to-contest" className="relative max-w-3xl mx-auto px-6 md:px-8 py-12">
          <Reveal className="mb-7">
            <p className="font-accent italic text-xl text-clay">how to dispute it in {c.city}</p>
            <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.85rem] tracking-[-0.03em] mt-1">
              Where it goes.
            </h2>
          </Reveal>
          <Reveal>
            <div className="bg-card border border-rule rounded-3xl p-7 md:p-9 space-y-3">
              <p className="text-sage-2">
                <span className="font-semibold text-sage">Agency:</span> {c.agency}
              </p>
              <p className="text-sage-2">
                <span className="font-semibold text-sage">Online:</span>{" "}
                <a
                  href={c.submitOnlineUrl}
                  className="text-clay underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {c.submitOnlineUrl}
                </a>
              </p>
              <p className="text-sage-2">
                <span className="font-semibold text-sage">By mail:</span> {c.submitMailAddress}
              </p>
              {c.submitInPerson && (
                <p className="text-sage-2">
                  <span className="font-semibold text-sage">In person:</span> {c.submitInPerson}
                </p>
              )}
            </div>
            <ol className="mt-7 space-y-4">
              {c.howToContest.map((s, i) => (
                <li key={i} className="flex gap-4 text-sage-2 text-base md:text-lg leading-[1.7]">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-mist text-sage grid place-items-center font-disp font-bold">
                    {i + 1}
                  </span>
                  <span className="pt-1">{s}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        {/* Defense grid */}
        <section id="defenses" className="relative max-w-4xl mx-auto px-6 md:px-8 py-12">
          <Reveal className="mb-7 text-center max-w-2xl mx-auto">
            <p className="font-accent italic text-xl text-clay">pick your defense</p>
            <h2 className="font-disp font-semibold text-sage text-3xl md:text-[2.4rem] tracking-[-0.03em] mt-1.5">
              What actually happened?
            </h2>
          </Reveal>
          <Reveal>
            <ul className="grid sm:grid-cols-2 gap-5">
              {c.defenses.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/letters/parking/${c.slug}/${d.slug}`}
                    className="tool-card group block p-6 h-full"
                  >
                    <p className="font-disp font-semibold text-sage text-lg group-hover:text-clay transition-colors duration-300">
                      {d.title}
                    </p>
                    <p className="text-sage-2 text-sm mt-2">{d.whenItApplies}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* FAQs */}
        <section id="faq" className="relative max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-14">
          <Reveal className="mb-8">
            <p className="font-accent italic text-xl text-clay">questions people ask</p>
            <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.85rem] tracking-[-0.03em] mt-1">
              FAQ.
            </h2>
          </Reveal>
          <Reveal>
            <div className="space-y-4">
              {c.faqs.map((f, i) => (
                <div key={i} className="bg-card border border-rule rounded-2xl p-6">
                  <h3 className="font-disp font-semibold text-sage text-lg md:text-xl tracking-[-0.02em] mb-2">
                    {f.question}
                  </h3>
                  <p className="text-sage-2 text-base leading-[1.7]">{f.answer}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Disclaimer */}
        <section className="relative max-w-3xl mx-auto px-6 md:px-8 pb-4">
          <p className="text-sage-2 text-xs italic leading-relaxed max-w-prose">
            This page is for informational use only. It is not legal advice and does not create an
            attorney-client relationship. Square-bracketed placeholders in any linked defense must be
            replaced with your specific facts. Rules and deadlines can change; if your situation is
            urgent, complicated, or high-stakes, email{" "}
            <a
              href="mailto:info@imfrustrated.org"
              className="text-clay underline decoration-clay/40 decoration-[1.5px] underline-offset-[5px] hover:decoration-clay transition-colors duration-300"
            >
              info@imfrustrated.org
            </a>{" "}
            for a free conversation with a volunteer attorney before you send it.
          </p>
        </section>

        {/* CTA */}
        <section className="relative max-w-5xl mx-auto px-6 md:px-8 py-14 md:py-16 pb-24">
          <Reveal>
            <div className="bg-sage rounded-[32px] px-6 sm:px-10 md:px-14 py-14 md:py-16 text-center">
              <h2 className="font-disp font-semibold text-bg text-3xl md:text-[2.4rem] tracking-[-0.03em] leading-tight">
                Nervous about sending it yourself?
              </h2>
              <p className="font-accent italic text-clay-soft text-2xl md:text-3xl mt-3">we&rsquo;ll read it over with you.</p>
              <p className="text-[#cdd6cd] text-lg leading-relaxed mt-5 max-w-xl mx-auto mb-9">
                Email the situation and a volunteer attorney will respond. No commitment, no invoice, no judgment — just an honest second pair of eyes from someone who actually understands the law.
              </p>
              <a href="mailto:info@imfrustrated.org" className="btn-clay mag">
                info@imfrustrated.org
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ar">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <div className="mt-11 flex justify-center gap-6 text-sm flex-wrap text-[#cdd6cd]">
                <Link href="/letters/parking" className="hover:text-clay-soft transition-colors duration-300">
                  Other cities
                </Link>
                <Link href="/letters" className="hover:text-clay-soft transition-colors duration-300">All letters</Link>
                <Link href="/free-tools" className="hover:text-clay-soft transition-colors duration-300">Free tools</Link>
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
