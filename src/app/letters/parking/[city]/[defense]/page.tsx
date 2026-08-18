import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Reveal, Interactions, SiteFooter } from "@/components/ClientSections";
import { CopyLetterButton } from "@/components/CopyLetterButton";
import { getAllParkingCities, getParkingCity, getParkingDefense } from "@/data/parking";
import { buildOpenGraph } from "@/lib/og";

type Params = { city: string; defense: string };

export function generateStaticParams() {
  return getAllParkingCities().flatMap((c) =>
    c.defenses.map((d) => ({ city: c.slug, defense: d.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city, defense } = await params;
  const c = getParkingCity(city);
  const d = getParkingDefense(city, defense);
  if (!c || !d) return {};
  const url = `https://imfrustrated.org/letters/parking/${c.slug}/${d.slug}`;
  return {
    title: `${d.title} | I'm Frustrated dot Org`,
    description: d.metaDescription,
    alternates: { canonical: url },
    openGraph: buildOpenGraph({
      path: `/letters/parking/${c.slug}/${d.slug}`,
      title: d.title,
      description: d.metaDescription,
      // src/app/letters/parking/[city]/[defense]/opengraph-image.tsx exists — omit `images` so it merges in.
      hasRouteImage: true,
    }),
    twitter: {
      card: "summary_large_image",
      title: d.title,
      description: d.metaDescription,
    },
  };
}

export default async function ParkingDefensePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city, defense } = await params;
  const c = getParkingCity(city);
  const d = c ? getParkingDefense(city, defense) : undefined;
  if (!c || !d) notFound();

  const url = `https://imfrustrated.org/letters/parking/${c.slug}/${d.slug}`;
  const cityUrl = `https://imfrustrated.org/letters/parking/${c.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: d.title,
    description: d.metaDescription,
    url,
    datePublished: d.publishedAt,
    dateModified: d.updatedAt ?? d.publishedAt,
    author: { "@type": "Organization", name: "I'm Frustrated dot Org", url: "https://imfrustrated.org" },
    publisher: {
      "@type": "Organization",
      name: "I'm Frustrated dot Org",
      url: "https://imfrustrated.org",
    },
    isAccessibleForFree: true,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const howToSchema = d.howToSubmit?.length
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: `How to submit the ${d.title} defense in ${c.city}`,
        description: d.whenItApplies,
        totalTime: "PT15M",
        step: d.howToSubmit.map((text, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: `Step ${i + 1}`,
          text,
        })),
      }
    : null;

  const faqSchema = d.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: d.faqs.map((f) => ({
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
      { "@type": "ListItem", position: 4, name: c.city, item: cityUrl },
      { "@type": "ListItem", position: 5, name: d.title, item: url },
    ],
  };

  const legalDocumentSchema = {
    "@context": "https://schema.org",
    "@type": "LegalDocument",
    name: d.title,
    description: d.metaDescription,
    url,
    datePublished: d.publishedAt,
    dateModified: d.updatedAt ?? d.publishedAt,
    inLanguage: "en-US",
    creator: { "@type": "Organization", name: "I'm Frustrated dot Org", url: "https://imfrustrated.org" },
    isAccessibleForFree: true,
    audience: {
      "@type": "Audience",
      audienceType: "Individual drivers contesting a parking ticket without a lawyer",
    },
    about: {
      "@type": "Thing",
      name: `${c.city} parking ticket dispute`,
      description: d.whenItApplies,
    },
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "#how-to-submit", "#faq"],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalDocumentSchema) }} />
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
              <Link href={`/letters/parking/${c.slug}`} className="hover:text-clay transition-colors duration-300">
                {c.city}
              </Link>
              <span className="mx-2.5 text-rule">/</span>
              <span className="text-clay">{d.title}</span>
            </nav>
          </Reveal>
          <Reveal delay={1}>
            <span className="eyebrow"><span className="pulse" />{c.city} parking defense</span>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="font-disp font-semibold text-sage text-3xl md:text-4xl lg:text-[2.9rem] leading-[1.1] tracking-[-0.03em] mt-7">
              {d.title}
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-sage-2 text-lg leading-[1.6] mt-6 mb-7">{d.whenItApplies}</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-sage-2 pt-5 border-t border-rule">
              <time dateTime={d.updatedAt ?? d.publishedAt} className="font-medium text-sage">
                {d.updatedAt ? "Updated" : "Published"}{" "}
                {new Date(d.updatedAt ?? d.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </time>
              <span className="text-rule" aria-hidden>·</span>
              <a href="#statement" className="hover:text-clay transition-colors duration-300">Jump to statement</a>
              <span className="text-rule" aria-hidden>·</span>
              <a href="#how-to-submit" className="hover:text-clay transition-colors duration-300">How to submit</a>
              <span className="text-rule" aria-hidden>·</span>
              <a href="#evidence" className="hover:text-clay transition-colors duration-300">Evidence</a>
              <span className="text-rule" aria-hidden>·</span>
              <a href="#legal-basis" className="hover:text-clay transition-colors duration-300">Legal basis</a>
              <span className="text-rule" aria-hidden>·</span>
              <a href="#if-this-doesnt-work" className="hover:text-clay transition-colors duration-300">If this doesn&rsquo;t work</a>
              <span className="text-rule" aria-hidden>·</span>
              <a href="#faq" className="hover:text-clay transition-colors duration-300">FAQ</a>
            </div>
          </Reveal>
        </section>

        {/* The statement */}
        <section id="statement" className="relative max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-14">
          <Reveal className="mb-7">
            <p className="font-accent italic text-xl text-clay">the statement</p>
            <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.85rem] tracking-[-0.03em] mt-1">
              Copy, customize, submit.
            </h2>
          </Reveal>
          <Reveal>
            <div className="bg-card border border-rule rounded-3xl p-7 md:p-10 shadow-[0_20px_40px_-28px_rgba(45,74,62,0.2)]">
              <pre className="font-body text-[0.95rem] md:text-base leading-[1.7] text-ink whitespace-pre-wrap break-words">
                {d.body}
              </pre>
            </div>
            <CopyLetterButton text={d.body} label="Copy statement" />
            <p className="text-sage-2 text-xs italic leading-relaxed mt-6 max-w-prose">
              This template is for informational use only. It is not legal advice and does not create an attorney-client relationship. Square-bracketed placeholders must be replaced with your specific facts. Rules and deadlines can change; if your situation is urgent, complicated, or high-stakes, email{" "}
              <a href="mailto:info@imfrustrated.org" className="text-clay underline decoration-clay/40 decoration-[1.5px] underline-offset-[5px] hover:decoration-clay transition-colors duration-300">
                info@imfrustrated.org
              </a>{" "}
              for a free conversation with a volunteer attorney before you send it.
            </p>
          </Reveal>
        </section>

        {/* How to submit */}
        <section id="how-to-submit" className="relative max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-14">
          <Reveal>
            <div className="bg-bg-2 rounded-[32px] px-7 md:px-12 py-12 md:py-14">
              <div className="mb-8">
                <p className="font-accent italic text-xl text-clay">how to submit it</p>
                <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.85rem] tracking-[-0.03em] mt-1">
                  A few things before you send.
                </h2>
              </div>
              <ul className="space-y-5">
                {d.howToSubmit.map((item, i) => (
                  <li key={i} className="flex gap-4 text-sage-2 text-base md:text-lg leading-[1.7]">
                    <span className="shrink-0 w-9 h-9 rounded-full bg-mist text-sage grid place-items-center font-disp font-bold text-base">{i + 1}</span>
                    <span className="pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* Evidence */}
        <section id="evidence" className="relative max-w-3xl mx-auto px-6 md:px-8 py-12">
          <Reveal className="mb-7">
            <p className="font-accent italic text-xl text-clay">bring receipts</p>
            <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.85rem] tracking-[-0.03em] mt-1">Attach this evidence.</h2>
          </Reveal>
          <Reveal>
            <ul className="space-y-3">
              {d.evidenceChecklist.map((e, i) => (
                <li key={i} className="flex gap-3 text-sage-2 text-base md:text-lg leading-[1.7]">
                  <span className="text-clay mt-1">✓</span><span>{e}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Legal basis */}
        <section id="legal-basis" className="relative max-w-3xl mx-auto px-6 md:px-8 py-12">
          <Reveal className="mb-7">
            <p className="font-accent italic text-xl text-clay">what {c.city} rules say</p>
            <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.85rem] tracking-[-0.03em] mt-1">The rule this rests on.</h2>
          </Reveal>
          <Reveal>
            <div className="border-l-2 border-clay/50 pl-5">
              <p className="font-disp font-semibold text-sage text-lg">{d.codeCite.label}</p>
              <p className="text-sage-2 mt-1">
                <a href={d.codeCite.url} className="text-clay underline" target="_blank" rel="noopener noreferrer">{d.codeCite.citation}</a>
              </p>
            </div>
            <p className="text-sage-2 text-base leading-[1.7] mt-5">{d.cityNotes}</p>
            <div className="mt-6 text-sm text-sage-2">
              <p className="font-semibold text-sage mb-1">Sources</p>
              <ul className="space-y-1">
                {d.sources.map((s, i) => (
                  <li key={i}><a href={s.url} className="text-clay underline" target="_blank" rel="noopener noreferrer">{s.label}</a></li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* If this doesn't work */}
        <section id="if-this-doesnt-work" className="relative max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-14">
          <Reveal className="mb-6">
            <p className="font-accent italic text-xl text-clay">if this doesn&rsquo;t work</p>
            <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.85rem] tracking-[-0.03em] mt-1">
              Your next move.
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-sage-2 text-base md:text-lg leading-[1.7]">
              {d.ifThisDoesntWork}
            </p>
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
              {d.faqs.map((f, i) => (
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

        {/* CTA */}
        <section className="relative max-w-6xl mx-auto px-6 md:px-8 py-14 md:py-16 pb-24">
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
                <Link href={`/letters/parking/${c.slug}`} className="hover:text-clay-soft transition-colors duration-300">
                  More {c.city} letters
                </Link>
                <Link href="/letters/parking" className="hover:text-clay-soft transition-colors duration-300">Other cities</Link>
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
