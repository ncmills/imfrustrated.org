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
  title: "I'm Frustrated dot Org — Friends Who Are Also Lawyers",
  description:
    "Talk to a real attorney before you hire one. We're the friends who happen to be lawyers — free, honest legal guidance to help you figure out your next step.",
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
    title: "I'm Frustrated dot Org — Friends Who Are Also Lawyers",
    description:
      "Talk to a real attorney before you hire one. Free, honest legal guidance to help you figure out your next step.",
    // src/app/opengraph-image.tsx exists — omit `images` so it merges in.
    hasRouteImage: true,
  }),
  twitter: {
    card: "summary_large_image",
    title: "I'm Frustrated dot Org — Friends Who Are Also Lawyers",
    description:
      "Talk to a real attorney before you hire one. Free, honest legal guidance to help you figure out your next step.",
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
        {/* No-JS fallback: scroll-reveal content is opacity:0 until the
            IntersectionObserver adds `.in`. Without JS that never runs, so
            force revealed content visible. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
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
            "description": "Free legal guidance and referrals from volunteer attorneys. We help people understand their legal situation before hiring a lawyer.",
            "url": "https://imfrustrated.org",
            "email": "info@imfrustrated.org",
            "areaServed": "US",
            "priceRange": "Free",
            "serviceType": "Legal Guidance and Referrals",
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
                  "text": "We're a group of practicing attorneys who volunteer our time to give people a real, informed perspective on their legal situation before they spend a dime on representation. We provide free, honest legal guidance to help you figure out your next step."
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
                  "text": "It's simple: (1) You tell us what's going on in plain English. (2) We explain where you stand legally, what your options are, and what questions to ask. (3) You decide what's next — whether that's hiring a lawyer or handling it yourself, you'll be informed."
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
                    "name": "Free Conversation with a Volunteer Attorney",
                    "url": "https://imfrustrated.org/how-it-works",
                    "description": "Email info@imfrustrated.org to talk through your situation with a volunteer attorney. No commitment, no invoice."
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
