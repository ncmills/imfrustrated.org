import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, FadeInSection } from "@/components/ClientSections";
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
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 bg-paper">
          <FadeInSection className="relative z-10 max-w-3xl mx-auto px-6 md:px-10">
            <nav className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-warm mb-8 font-medium">
              <Link href="/" className="hover:text-forest transition-colors">Home</Link>
              <span className="mx-3 text-rule">/</span>
              <Link href="/letters" className="hover:text-forest transition-colors">Letters</Link>
              <span className="mx-3 text-rule">/</span>
              <Link href={`/letters/${letter.category}`} className="hover:text-forest transition-colors">
                {meta.label}
              </Link>
              <span className="mx-3 text-rule">/</span>
              <span className="text-amber">Template</span>
            </nav>
            <p className="text-amber text-[0.72rem] font-semibold uppercase tracking-[0.3em] mb-4">
              {meta.label} Letter Template
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-[1.1] tracking-[-0.02em] mb-8">
              {letter.title}
            </h1>
            <div className="decorative-rule mb-8" />
            <p className="text-muted-warm text-lg leading-relaxed mb-6">{letter.lede}</p>
            <p className="text-muted-warm/70 text-xs uppercase tracking-[0.22em]">
              <time dateTime={letter.updatedAt ?? letter.publishedAt}>
                {letter.updatedAt ? "Updated" : "Published"}{" "}
                {new Date(letter.updatedAt ?? letter.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </time>
              <span className="mx-3 text-rule">·</span>
              <a href="#letter" className="hover:text-forest transition-colors">Jump to letter</a>
              <span className="mx-3 text-rule">·</span>
              <a href="#how-to-use" className="hover:text-forest transition-colors">How to use</a>
              {letter.stateNotes && letter.stateNotes.length > 0 && (
                <>
                  <span className="mx-3 text-rule">·</span>
                  <a href="#state-notes" className="hover:text-forest transition-colors">State notes</a>
                </>
              )}
              <span className="mx-3 text-rule">·</span>
              <a href="#faq" className="hover:text-forest transition-colors">FAQ</a>
            </p>
          </FadeInSection>
        </section>

        {/* The letter */}
        <section id="letter" className="py-12 md:py-16 bg-paper-deep">
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <FadeInSection className="mb-8">
              <p className="text-amber text-[0.7rem] font-semibold uppercase tracking-[0.28em] mb-3">The letter</p>
              <h2 className="font-serif text-2xl md:text-[1.75rem] font-semibold text-ink tracking-[-0.01em]">
                Copy, customize, send<span className="text-amber">.</span>
              </h2>
            </FadeInSection>
            <FadeInSection>
              <div className="letter-card">
                <pre className="font-serif text-[0.95rem] md:text-base leading-[1.7] text-ink whitespace-pre-wrap break-words">
                  {letter.body}
                </pre>
              </div>
              <p className="text-muted-warm text-xs italic leading-relaxed mt-6 max-w-prose">
                This template is for informational use only. It is not legal advice and does not create an attorney-client relationship. Square-bracketed placeholders must be replaced with your specific facts. State law and procedural details vary; if your situation is urgent, complicated, or high-stakes, email{" "}
                <a href="mailto:info@imfrustrated.org" className="text-forest underline decoration-amber/70 decoration-[1.5px] underline-offset-[5px] hover:text-amber transition-colors">
                  info@imfrustrated.org
                </a>{" "}
                for a free conversation with a volunteer attorney before you send it.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* How to use it */}
        <section id="how-to-use" className="py-16 md:py-20 bg-paper">
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <FadeInSection className="mb-8">
              <p className="text-amber text-[0.7rem] font-semibold uppercase tracking-[0.28em] mb-3">How to use it</p>
              <h2 className="font-serif text-2xl md:text-[1.75rem] font-semibold text-ink tracking-[-0.01em]">
                A few things before you send<span className="text-amber">.</span>
              </h2>
            </FadeInSection>
            <FadeInSection>
              <ul className="space-y-4">
                {letter.howToUse.map((item, i) => (
                  <li key={i} className="flex gap-4 text-muted-warm text-base md:text-lg leading-[1.7]">
                    <span className="font-serif text-amber text-xl shrink-0 leading-[1.5]">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </div>
        </section>

        {/* What the law says */}
        <section id="legal-context" className="py-16 md:py-20 bg-paper-deep">
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <FadeInSection className="mb-8">
              <p className="text-amber text-[0.7rem] font-semibold uppercase tracking-[0.28em] mb-3">What the law actually says</p>
              <h2 className="font-serif text-2xl md:text-[1.75rem] font-semibold text-ink tracking-[-0.01em]">
                Why this letter works<span className="text-amber">.</span>
              </h2>
            </FadeInSection>
            <FadeInSection>
              <div className="space-y-5">
                {letter.legalContext.map((para, i) => (
                  <p key={i} className="text-muted-warm text-base md:text-lg leading-[1.7]">
                    {para}
                  </p>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* State notes */}
        {letter.stateNotes && letter.stateNotes.length > 0 && (
          <section id="state-notes" className="py-16 md:py-20 bg-paper">
            <div className="max-w-3xl mx-auto px-6 md:px-10">
              <FadeInSection className="mb-8">
                <p className="text-amber text-[0.7rem] font-semibold uppercase tracking-[0.28em] mb-3">State variations</p>
                <h2 className="font-serif text-2xl md:text-[1.75rem] font-semibold text-ink tracking-[-0.01em]">
                  What changes by state<span className="text-amber">.</span>
                </h2>
                <p className="text-muted-warm text-sm leading-relaxed mt-3">
                  Not a comprehensive list. Confirm your state&rsquo;s current statute before sending.
                </p>
              </FadeInSection>
              <FadeInSection>
                <dl className="space-y-5">
                  {letter.stateNotes.map((s) => (
                    <div key={s.state} className="border-l-2 border-amber/50 pl-5">
                      <dt className="font-serif text-lg font-semibold text-ink mb-1">{s.state}</dt>
                      <dd className="text-muted-warm text-base leading-[1.65]">{s.note}</dd>
                    </div>
                  ))}
                </dl>
              </FadeInSection>
            </div>
          </section>
        )}

        {/* If this doesn't work */}
        <section id="escalation" className="py-16 md:py-20 bg-paper-deep">
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <FadeInSection className="mb-6">
              <p className="text-amber text-[0.7rem] font-semibold uppercase tracking-[0.28em] mb-3">If this doesn&rsquo;t work</p>
              <h2 className="font-serif text-2xl md:text-[1.75rem] font-semibold text-ink tracking-[-0.01em]">
                Your next move<span className="text-amber">.</span>
              </h2>
            </FadeInSection>
            <FadeInSection>
              <p className="text-muted-warm text-base md:text-lg leading-[1.7]">
                {letter.ifThisDoesntWork}
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* FAQs */}
        <section id="faq" className="py-16 md:py-20 bg-paper">
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <FadeInSection className="mb-8">
              <p className="text-amber text-[0.7rem] font-semibold uppercase tracking-[0.28em] mb-3">Questions people ask</p>
              <h2 className="font-serif text-2xl md:text-[1.75rem] font-semibold text-ink tracking-[-0.01em]">
                FAQ<span className="text-amber">.</span>
              </h2>
            </FadeInSection>
            <FadeInSection>
              <div className="space-y-7">
                {letter.faqs.map((f, i) => (
                  <div key={i}>
                    <h3 className="font-serif text-lg md:text-xl font-semibold text-ink tracking-[-0.005em] mb-2">
                      {f.question}
                    </h3>
                    <p className="text-muted-warm text-base leading-[1.7]">{f.answer}</p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Related letters */}
        {related.length > 0 && (
          <section id="related" className="py-16 md:py-20 bg-paper-deep">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <FadeInSection className="mb-8 text-center">
                <p className="text-amber text-[0.72rem] font-semibold uppercase tracking-[0.3em] mb-3">Related templates</p>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink tracking-[-0.01em]">
                  Other letters in this library<span className="text-amber">.</span>
                </h2>
              </FadeInSection>
              <FadeInSection>
                <ul className="grid md:grid-cols-2 gap-4">
                  {related.map((r) => (
                    <li key={`${r.category}/${r.slug}`}>
                      <Link
                        href={`/letters/${r.category}/${r.slug}`}
                        className="group block bg-paper-lift border border-rule rounded-[6px] p-5 h-full hover:border-forest/40 transition-all duration-500"
                      >
                        <p className="text-amber text-[0.65rem] font-semibold uppercase tracking-[0.28em] mb-2">
                          {r.category.replace(/-/g, " ")}
                        </p>
                        <p className="font-serif text-base md:text-lg text-ink group-hover:text-forest transition-colors leading-snug">
                          {r.title}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </FadeInSection>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 md:py-20 bg-paper">
          <FadeInSection className="max-w-2xl mx-auto px-6 md:px-10 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink leading-snug mb-5 tracking-[-0.01em]">
              Nervous about sending it yourself<span className="text-amber">?</span>
            </h2>
            <p className="script text-2xl md:text-3xl mb-6 -rotate-1">we&rsquo;ll read it over with you.</p>
            <p className="text-muted-warm text-lg leading-relaxed mb-8">
              Email the situation and a volunteer attorney will respond. No commitment, no invoice, no judgment — just an honest second pair of eyes from someone who actually understands the law.
            </p>
            <a href="mailto:info@imfrustrated.org" className="btn-forest">
              info@imfrustrated.org
            </a>
            <div className="mt-12 flex justify-center gap-6 text-sm flex-wrap text-muted-warm">
              <Link href={`/letters/${letter.category}`} className="hover:text-forest transition-colors">
                More {meta.label.toLowerCase()} letters
              </Link>
              <Link href="/letters" className="hover:text-forest transition-colors">All letters</Link>
              <Link href="/free-tools" className="hover:text-forest transition-colors">Free tools</Link>
              <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            </div>
          </FadeInSection>
        </section>
      </main>
    </>
  );
}
