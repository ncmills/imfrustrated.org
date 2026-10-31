import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PostHogProvider from "@/components/PostHogProvider";
import { buildOpenGraph } from "@/lib/og";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "I'm Frustrated dot Org — Free Legal Letters & Self-Help Tools",
  description:
    "Free legal information and self-help tools from a nonprofit: template letters, plain-English guides, and simple tools you use yourself. Not a law firm; not legal advice.",
  metadataBase: new URL("https://imfrustrated.org"),
  alternates: {
    canonical: "/",
  },
  icons: {
    // `apple` pointed at /logo.svg and iOS IGNORES SVG apple-touch-icons —
    // "Add to Home Screen" fell back to a screenshot of the page. It has to be
    // a real PNG, opaque (iOS composites transparency onto black) and 180×180.
    // `src/app/favicon.ico` is NOT listed here: Next special-cases the root
    // favicon and emits its link even when `icons` is declared — verified in
    // the served HTML, where listing it too produced two identical <link>s.
    // Everything else does need declaring, because an explicit `icons` object
    // suppresses auto-detection of the other app-dir icon files, and that
    // suppression is not scoped to `icon` — it drops `apple` as well.
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: buildOpenGraph({
    path: "/",
    type: "website",
    title: "I'm Frustrated dot Org — Free Legal Letters & Self-Help Tools",
    description:
      "Free legal information and self-help tools from a nonprofit: template letters, plain-English guides, and simple tools you use yourself.",
    // src/app/opengraph-image.tsx exists — omit `images` so it merges in.
    hasRouteImage: true,
  }),
  twitter: {
    card: "summary_large_image",
    title: "I'm Frustrated dot Org — Free Legal Letters & Self-Help Tools",
    description:
      "Free legal information and self-help tools from a nonprofit: template letters, plain-English guides, and simple tools you use yourself.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Scroll-reveal gate: the hidden pre-reveal state in globals.css only
            applies under `html.js`, so SSR/no-JS/crawlers/captures see finished
            content by default (2026-08-20 design review caught half-faded
            sections on every capture). This must run before first paint —
            hence a plain inline script in <head>, not an effect. */}
        <script
          dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add("js")` }}
        />
      </head>
      <body
        className={`${bricolage.variable} ${hanken.variable} ${instrument.variable} ${jetbrains.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "I'm Frustrated dot Org",
            "url": "https://imfrustrated.org",
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            "name": "I'm Frustrated dot Org",
            "description": "New York nonprofit that publishes free legal information, self-help guides, tools, and template letters. Not a law firm; does not give legal advice.",
            "url": "https://imfrustrated.org",
            "email": "info@imfrustrated.org",
            "areaServed": "US",
            "nonprofitStatus": "Nonprofit"
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What does I'm Frustrated dot Org do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We're a nonprofit that publishes free legal information and self-help tools: template letters, plain-English guides, and simple tools. You find the letter that fits, fill it in with your facts, and send it yourself."
                }
              },
              {
                "@type": "Question",
                "name": "Is I'm Frustrated dot Org a law firm?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. I'm Frustrated dot Org is not a law firm and does not give legal advice. Using this site does not create an attorney-client relationship. For advice about your situation, contact a licensed attorney or your local legal aid office."
                }
              },
              {
                "@type": "Question",
                "name": "How much do the letters and tools cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nothing. The letters, guides, and tools are free, with no account and no invoice."
                }
              },
              {
                "@type": "Question",
                "name": "How does the process work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "(1) Find the letter or tool that fits your situation. (2) Fill it in with your own facts. (3) Send it yourself. If a deadline is close or the stakes are high, talk to a licensed attorney or your local legal aid office."
                }
              },
              {
                "@type": "Question",
                "name": "Is this legal advice?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Everything on the site, including any draft letter we email you, is legal information and a self-help tool, not legal advice. No one acts as your lawyer and no attorney-client relationship is formed."
                }
              }
            ]
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "I'm Frustrated dot Org",
            "url": "https://imfrustrated.org",
            "email": "info@imfrustrated.org",
            "nonprofitStatus": "Nonprofit501c3",
            "sameAs": ["https://idonthaveawill.com", "https://aissdi.com", "https://doppelwriter.com"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Free Legal Resources",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Free Draft Self-Help Letter by Email",
                    "url": "https://imfrustrated.org/#contact",
                    "description": "Tell us what happened and we'll try to email you a draft self-help letter you can send yourself. Legal information, not legal advice; no one acts as your lawyer."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "CreativeWork",
                    "name": "Free Letter Templates",
                    "url": "https://imfrustrated.org/letters",
                    "description": "Plain-English letter templates citing real federal and state statutes — security deposits, billing errors, debt validation, medical records, and more."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "WebApplication",
                    "name": "I Don't Have a Will",
                    "url": "https://idonthaveawill.com",
                    "description": "Free self-help will generator covering all 50 US states + DC. Runs entirely in the browser."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "WebApplication",
                    "name": "AISSDI",
                    "url": "https://aissdi.com",
                    "description": "Free Social Security disability decision tools — estimate your approval odds, look up any administrative law judge's approval rate and hearing-office wait time, and weigh your appeal options, all from public SSA data."
                  }
                }
              ]
            }
          }) }}
        />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <PostHogProvider>
          <div id="main-content">{children}</div>
        </PostHogProvider>
        {/* No <footer> here. Every page renders SiteFooter (ClientSections), which
            carries the brand line, both nav groups, the legal pair and the network
            strip inside one landmark. This block used to add a SECOND <footer> under
            it holding a duplicate Privacy/Terms and the cross-site links at 10px /
            40% opacity — two footers per page, and the whole network outside the
            one a reader actually reaches. */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
