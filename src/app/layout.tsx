import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PostHogProvider from "@/components/PostHogProvider";
import { buildOpenGraph } from "@/lib/og";
import "./globals.css";

// Self-hosted (src/fonts) so builds never fetch from Google.
const bricolage = localFont({
  src: [
    { path: "../fonts/bricolage-grotesque/bricolage-grotesque-variable.woff2", weight: "400", style: "normal" },
    { path: "../fonts/bricolage-grotesque/bricolage-grotesque-variable.woff2", weight: "500", style: "normal" },
    { path: "../fonts/bricolage-grotesque/bricolage-grotesque-variable.woff2", weight: "600", style: "normal" },
    { path: "../fonts/bricolage-grotesque/bricolage-grotesque-variable.woff2", weight: "700", style: "normal" },
    { path: "../fonts/bricolage-grotesque/bricolage-grotesque-variable.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-bricolage",
  display: "swap",
});

const hanken = localFont({
  src: [
    { path: "../fonts/hanken-grotesk/hanken-grotesk-variable.woff2", weight: "400", style: "normal" },
    { path: "../fonts/hanken-grotesk/hanken-grotesk-variable.woff2", weight: "500", style: "normal" },
    { path: "../fonts/hanken-grotesk/hanken-grotesk-variable.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-hanken",
  display: "swap",
});

const instrument = localFont({
  src: [
    { path: "../fonts/instrument-serif/instrument-serif-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/instrument-serif/instrument-serif-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = localFont({
  src: [
    { path: "../fonts/jetbrains-mono/jetbrains-mono-variable.woff2", weight: "400", style: "normal" },
    { path: "../fonts/jetbrains-mono/jetbrains-mono-variable.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "I'm Frustrated dot Org — Free Legal Letters & Self-Help Tools",
  description:
    "Free legal information and self-help tools: template letters, plain-English guides, and simple tools you use yourself. Not a law firm; not legal advice.",
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
      "Free legal information and self-help tools: template letters, plain-English guides, and simple tools you use yourself.",
    // src/app/opengraph-image.tsx exists — omit `images` so it merges in.
    hasRouteImage: true,
  }),
  twitter: {
    card: "summary_large_image",
    title: "I'm Frustrated dot Org — Free Legal Letters & Self-Help Tools",
    description:
      "Free legal information and self-help tools: template letters, plain-English guides, and simple tools you use yourself.",
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
            "@type": "LegalService",
            "name": "I'm Frustrated dot Org",
            "description": "Publishes free legal information, self-help guides, tools, and template letters. Not a law firm; does not give legal advice.",
            "url": "https://imfrustrated.org",
            "email": "info@imfrustrated.org",
            "areaServed": "US",
            "priceRange": "Free",
            "serviceType": "Legal Guidance and Referrals"
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
                  "text": "We publish free legal information and self-help tools: template letters, plain-English guides, and simple tools. You find the letter that fits, fill it in with your facts, and send it yourself."
                }
              },
              {
                "@type": "Question",
                "name": "Is I'm Frustrated dot Org a law firm?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. I'm Frustrated dot Org is not a law firm and does not provide legal representation. No attorney-client relationship is formed through our service. We provide informational guidance only."
                }
              },
              {
                "@type": "Question",
                "name": "How much does it cost to get legal guidance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our service is completely free. There is no commitment, no invoice, and no judgment — just an honest conversation with someone who understands the law and wants to help."
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
                "name": "How do I get in touch?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Email us at info@imfrustrated.org. We'll get back to you and set up a conversation."
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
            "legalName": "Imfrustrated.org, Inc.",
            "url": "https://imfrustrated.org",
            "email": "info@imfrustrated.org",
            "sameAs": ["https://idonthaveawill.com", "https://aissdi.com", "https://doppelwriter.com"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Free Legal Resources",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Free Self-Help Letters: Chatbot or Collection",
                    "url": "https://imfrustrated.org/how-it-works",
                    "description": "Use the chatbot to write a letter for your situation, or browse the collection of ready-made letters, then send it yourself (legal information, not legal advice)."
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
