import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, FadeInSection } from "@/components/ClientSections";
import {
  categoryMeta,
  getAvailableCategories,
  getLettersByCategory,
  type LetterCategory,
} from "@/data/letters";

type Params = { category: string };

export function generateStaticParams() {
  return getAvailableCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const meta = categoryMeta[category as LetterCategory];
  if (!meta) return {};
  const letters = getLettersByCategory(meta.slug);
  if (letters.length === 0) return {};
  return {
    title: `${meta.label} Letter Templates | I'm Frustrated dot Org`,
    description: `Free ${meta.label.toLowerCase()} letter templates that invoke real statutes — written by attorneys, free to use. ${meta.blurb}`,
    alternates: { canonical: `https://imfrustrated.org/letters/${meta.slug}` },
    openGraph: {
      type: "article",
      url: `https://imfrustrated.org/letters/${meta.slug}`,
      title: `${meta.label} Letter Templates | I'm Frustrated dot Org`,
      description: meta.blurb,
    },
  };
}

export default async function CategoryHubPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const meta = categoryMeta[category as LetterCategory];
  if (!meta) notFound();
  const letters = getLettersByCategory(meta.slug);
  if (letters.length === 0) notFound();

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
        item: `https://imfrustrated.org/letters/${meta.slug}`,
      },
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
              <Link href="/letters" className="hover:text-forest transition-colors">Letters</Link>
              <span className="mx-3 text-rule">/</span>
              <span className="text-amber">{meta.label}</span>
            </nav>
            <p className="text-amber text-[0.72rem] font-semibold uppercase tracking-[0.3em] mb-4">
              {meta.label} Letters
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-ink leading-[1.05] tracking-[-0.02em] mb-8">
              {meta.label} letters that get a response<span className="text-amber">.</span>
            </h1>
            <div className="decorative-rule mb-10" />
            <p className="text-muted-warm text-lg leading-relaxed">{meta.hubLede}</p>
          </FadeInSection>
        </section>

        {/* Letter list */}
        <section className="py-16 md:py-24 bg-paper-deep">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <FadeInSection>
              <ul className="space-y-4">
                {letters.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/letters/${l.category}/${l.slug}`}
                      className="group block bg-paper-lift border border-rule rounded-[6px] p-6 md:p-7 hover:border-forest/40 transition-all duration-500 hover:shadow-[0_18px_36px_-24px_rgba(45,74,62,0.25)]"
                    >
                      <h2 className="font-serif text-xl md:text-2xl font-semibold text-ink group-hover:text-forest transition-colors tracking-[-0.01em] mb-3">
                        {l.title}
                      </h2>
                      <p className="text-muted-warm text-[0.95rem] leading-relaxed mb-4">
                        {l.lede}
                      </p>
                      <p className="text-forest text-sm font-medium">Read the template →</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-paper">
          <FadeInSection className="max-w-2xl mx-auto px-6 md:px-10 text-center">
            <p className="text-muted-warm text-base leading-relaxed mb-6">
              Need an attorney to look at your specific situation before you send a letter?
            </p>
            <a href="mailto:info@imfrustrated.org" className="btn-forest">
              info@imfrustrated.org
            </a>
            <div className="mt-10 flex justify-center gap-6 text-sm flex-wrap text-muted-warm">
              <Link href="/letters" className="hover:text-forest transition-colors">All letters</Link>
              <Link href="/how-it-works" className="hover:text-forest transition-colors">How it works</Link>
              <Link href="/free-tools" className="hover:text-forest transition-colors">Free tools</Link>
              <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            </div>
          </FadeInSection>
        </section>
      </main>
    </>
  );
}
