import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Reveal, Interactions, SiteFooter } from "@/components/ClientSections";
import {
  categoryMeta,
  getAllLetters,
  getLetter,
  getRelatedLetters,
  type LetterCategory,
} from "@/data/letters";

type Params = { category: string; slug: string };

export function generateStaticParams() {
  return getAllLetters().map((l) => ({ category: l.category, slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const letter = getLetter(category as LetterCategory, slug);
  if (!letter) return {};
  const url = `https://imfrustrated.org/letters/${letter.category}/${letter.slug}`;
  return {
    title: `${letter.title} | I'm Frustrated dot Org`,
    description: letter.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: letter.title,
      description: letter.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: letter.title,
      description: letter.metaDescription,
    },
  };
}

export default async function LetterPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, slug } = await params;
  const letter = getLetter(category as LetterCategory, slug);
  if (!letter) notFound();

  const meta = categoryMeta[letter.category];
  const related = getRelatedLetters(letter);
  const url = `https://imfrustrated.org/letters/${letter.category}/${letter.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: letter.title,
    description: letter.metaDescription,
    url,
    datePublished: letter.publishedAt,
    dateModified: letter.updatedAt ?? letter.publishedAt,
    author: { "@type": "Organization", name: "I'm Frustrated dot Org", url: "https://imfrustrated.org" },
    publisher: {
      "@type": "Organization",
      name: "I'm Frustrated dot Org",
      url: "https://imfrustrated.org",
    },
    mainEntityOfPage: url,
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to use the ${letter.title}`,
    description: letter.lede,
    totalTime: "PT15M",
    step: letter.howToUse.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: `Step ${i + 1}`,
      text,
    })),
  };

  const legalDocumentSchema = {
    "@context": "https://schema.org",
    "@type": "LegalDocument",
    name: letter.title,
    description: letter.metaDescription,
    url,
    datePublished: letter.publishedAt,
    dateModified: letter.updatedAt ?? letter.publishedAt,
    inLanguage: "en-US",
    creator: { "@type": "Organization", name: "I'm Frustrated dot Org", url: "https://imfrustrated.org" },
    isAccessibleForFree: true,
    audience: {
      "@type": "Audience",
      audienceType: "Individual consumers seeking pre-litigation self-help",
    },
    about: {
      "@type": "Thing",
      name: meta.label,
      description: meta.blurb,
    },
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "#how-to-use", "#faq"],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: letter.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://imfrustrated.org" },
      { "@type": "ListItem", position: 2, name: "Letters", item: "https://imfrustrated.org/letters" },
      {
        "@type": "ListItem",
        position: 3,
        name: meta.label,
        item: `https://imfrustrated.org/letters/${letter.category}`,
      },
      { "@type": "ListItem", position: 4, name: letter.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalDocumentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
              <Link href={`/letters/${letter.category}`} className="hover:text-clay transition-colors duration-300">
                {meta.label}
              </Link>
              <span className="mx-2.5 text-rule">/</span>
              <span className="text-clay">Template</span>
            </nav>
          </Reveal>
          <Reveal delay={1}>
            <span className="eyebrow"><span className="pulse" />{meta.label} letter template</span>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="font-disp font-semibold text-sage text-3xl md:text-4xl lg:text-[2.9rem] leading-[1.1] tracking-[-0.03em] mt-7">
              {letter.title}
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-sage-2 text-lg leading-[1.6] mt-6 mb-7">{letter.lede}</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-sage-2 pt-5 border-t border-rule">
              <time dateTime={letter.updatedAt ?? letter.publishedAt} className="font-medium text-sage">
                {letter.updatedAt ? "Updated" : "Published"}{" "}
                {new Date(letter.updatedAt ?? letter.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </time>
              <span className="text-rule" aria-hidden>·</span>
              <a href="#letter" className="hover:text-clay transition-colors duration-300">Jump to letter</a>
              <span className="text-rule" aria-hidden>·</span>
              <a href="#how-to-use" className="hover:text-clay transition-colors duration-300">How to use</a>
              {letter.stateNotes && letter.stateNotes.length > 0 && (
                <>
                  <span className="text-rule" aria-hidden>·</span>
                  <a href="#state-notes" className="hover:text-clay transition-colors duration-300">State notes</a>
                </>
              )}
              <span className="text-rule" aria-hidden>·</span>
              <a href="#faq" className="hover:text-clay transition-colors duration-300">FAQ</a>
            </div>
          </Reveal>
        </section>

        {/* The letter */}
        <section id="letter" className="relative max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-14">
          <Reveal className="mb-7">
            <p className="font-accent italic text-xl text-clay">the letter</p>
            <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.85rem] tracking-[-0.03em] mt-1">
              Copy, customize, send.
            </h2>
          </Reveal>
          <Reveal>
            <div className="bg-card border border-rule rounded-3xl p-7 md:p-10 shadow-[0_20px_40px_-28px_rgba(45,74,62,0.2)]">
              <pre className="font-body text-[0.95rem] md:text-base leading-[1.7] text-ink whitespace-pre-wrap break-words">
                {letter.body}
              </pre>
            </div>
            <p className="text-sage-2 text-xs italic leading-relaxed mt-6 max-w-prose">
              This template is for informational use only. It is not legal advice and does not create an attorney-client relationship. Square-bracketed placeholders must be replaced with your specific facts. State law and procedural details vary; if your situation is urgent, complicated, or high-stakes, email{" "}
              <a href="mailto:info@imfrustrated.org" className="text-clay underline decoration-clay/40 decoration-[1.5px] underline-offset-[5px] hover:decoration-clay transition-colors duration-300">
                info@imfrustrated.org
              </a>{" "}
              for a free conversation with a volunteer attorney before you send it.
            </p>
          </Reveal>
        </section>

        {/* How to use it */}
        <section id="how-to-use" className="relative max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-14">
          <Reveal>
            <div className="bg-bg-2 rounded-[32px] px-7 md:px-12 py-12 md:py-14">
              <div className="mb-8">
                <p className="font-accent italic text-xl text-clay">how to use it</p>
                <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.85rem] tracking-[-0.03em] mt-1">
                  A few things before you send.
                </h2>
              </div>
              <ul className="space-y-5">
                {letter.howToUse.map((item, i) => (
                  <li key={i} className="flex gap-4 text-sage-2 text-base md:text-lg leading-[1.7]">
                    <span className="shrink-0 w-9 h-9 rounded-full bg-mist text-sage grid place-items-center font-disp font-bold text-base">{i + 1}</span>
                    <span className="pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* What the law says */}
        <section id="legal-context" className="relative max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-14">
          <Reveal className="mb-7">
            <p className="font-accent italic text-xl text-clay">what the law actually says</p>
            <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.85rem] tracking-[-0.03em] mt-1">
              Why this letter works.
            </h2>
          </Reveal>
          <Reveal>
            <div className="space-y-5">
              {letter.legalContext.map((para, i) => (
                <p key={i} className="text-sage-2 text-base md:text-lg leading-[1.7]">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* State notes */}
        {letter.stateNotes && letter.stateNotes.length > 0 && (
          <section id="state-notes" className="relative max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-14">
            <Reveal className="mb-7">
              <p className="font-accent italic text-xl text-clay">state variations</p>
              <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.85rem] tracking-[-0.03em] mt-1">
                What changes by state.
              </h2>
              <p className="text-sage-2 text-sm leading-relaxed mt-3">
                Not a comprehensive list. Confirm your state&rsquo;s current statute before sending.
              </p>
            </Reveal>
            <Reveal>
              <dl className="space-y-5">
                {letter.stateNotes.map((s) => (
                  <div key={s.state} className="border-l-2 border-clay/50 pl-5">
                    <dt className="font-disp font-semibold text-sage text-lg mb-1">{s.state}</dt>
                    <dd className="text-sage-2 text-base leading-[1.65]">{s.note}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </section>
        )}

        {/* If this doesn't work */}
        <section id="escalation" className="relative max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-14">
          <Reveal className="mb-6">
            <p className="font-accent italic text-xl text-clay">if this doesn&rsquo;t work</p>
            <h2 className="font-disp font-semibold text-sage text-2xl md:text-[1.85rem] tracking-[-0.03em] mt-1">
              Your next move.
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-sage-2 text-base md:text-lg leading-[1.7]">
              {letter.ifThisDoesntWork}
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
              {letter.faqs.map((f, i) => (
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

        {/* Related letters */}
        {related.length > 0 && (
          <section id="related" className="relative max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-14">
            <Reveal className="mb-8 text-center max-w-2xl mx-auto">
              <p className="font-accent italic text-xl text-clay">related templates</p>
              <h2 className="font-disp font-semibold text-sage text-3xl md:text-[2.5rem] tracking-[-0.03em] mt-1.5">
                Other letters in this library
              </h2>
            </Reveal>
            <Reveal>
              <ul className="grid md:grid-cols-2 gap-5">
                {related.map((r) => (
                  <li key={`${r.category}/${r.slug}`}>
                    <Link
                      href={`/letters/${r.category}/${r.slug}`}
                      className="tool-card group block p-6 h-full"
                    >
                      <p className="text-clay text-[0.7rem] font-semibold uppercase tracking-[0.2em] mb-2">
                        {r.category.replace(/-/g, " ")}
                      </p>
                      <p className="font-disp font-semibold text-sage text-base md:text-lg tracking-[-0.02em] group-hover:text-clay transition-colors duration-300 leading-snug">
                        {r.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
        )}

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
                <Link href={`/letters/${letter.category}`} className="hover:text-clay-soft transition-colors duration-300">
                  More {meta.label.toLowerCase()} letters
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
