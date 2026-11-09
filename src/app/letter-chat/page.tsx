import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PAUSED_LINE } from "./copy";
import { LetterChat } from "./LetterChat";

// Beta-only, never indexed (robots noindex,nofollow). Own minimal header on purpose: the shared site header is not used here.
export const metadata: Metadata = {
  title: "Letter chat",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export default async function LetterChatPage({ searchParams }: Props) {
  const sp = await searchParams;
  const beta = typeof sp.beta === "string" ? sp.beta : "";
  const token = process.env.IMF_CHAT_BETA_TOKEN ?? "";
  if (!token || beta !== token) notFound();

  const enabled = process.env.IMF_CHAT_ENABLED === "1";

  return (
    <div className="min-h-screen">
      <header className="border-b px-4 py-3">
        <Link href="/" className="font-semibold">
          I&apos;m Frustrated
        </Link>
      </header>
      <main className="mx-auto max-w-2xl px-4 py-8">
        {enabled ? (
          <LetterChat beta={beta} />
        ) : (
          <div>
            <p>{PAUSED_LINE}</p>
            <p className="mt-4">
              <Link href="/letters" className="underline">
                Browse the letter library
              </Link>
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
