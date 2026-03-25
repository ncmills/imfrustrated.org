import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "I'm Frustrated dot Org — Friends Who Are Also Lawyers",
  description:
    "Talk to a real attorney before you hire one. We're the friends who happen to be lawyers — free, honest legal guidance to help you figure out your next step.",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
