import type { Metadata } from "next";
import { Source_Serif_4, Inter, Caveat, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PostHogProvider from "@/components/PostHogProvider";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600"],
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
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "I'm Frustrated dot Org — Friends Who Are Also Lawyers",
    description:
      "Talk to a real attorney before you hire one. Free, honest legal guidance to help you figure out your next step.",
    url: "https://imfrustrated.org",
    siteName: "I'm Frustrated dot Org",
    type: "website",
    locale: "en_US",
  },
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
      <head />
      <body
        className={`${sourceSerif.variable} ${inter.variable} ${caveat.variable} ${jetbrains.variable}`}
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
            "sameAs": ["https://idonthaveawill.com"]
          }) }}
        />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <PostHogProvider>
          <div id="main-content">{children}</div>
        </PostHogProvider>
        <footer className="py-4 text-center">
          <p className="text-[10px] text-muted-warm/40">
            <a href="https://whatpeptidesdo.com" rel="nofollow" className="hover:text-muted-warm transition-colors">whatpeptidesdo.com</a>
            {" · "}
            <a href="https://idonthaveawill.com" rel="nofollow" className="hover:text-muted-warm transition-colors">idonthaveawill.com</a>
            {" · "}
            <a href="https://doppelwriter.com" rel="nofollow" className="hover:text-muted-warm transition-colors">doppelwriter.com</a>
            {" · "}
            <a href="https://tourdefore.com" rel="nofollow" className="hover:text-muted-warm transition-colors">tourdefore.com</a>
          </p>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
