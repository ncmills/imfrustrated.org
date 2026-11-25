import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, SiteFooter } from "@/components/ClientSections";
import { chatEnabled, letterChatAccess } from "@/lib/imf-chat/flags";
import { PAGE_NOTICE, PAUSED_LINE } from "./copy";
import { LetterChat } from "./LetterChat";

// Beta token, or anyone once IMF_CHAT_PUBLIC=1 (flags.letterChatAccess). Never indexed (robots noindex,nofollow) until the front-door proposal says otherwise. Uses the normal site header + footer (front-door PR).
export const metadata: Metadata = {
  title: "Write your letter with the chatbot",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export default async function LetterChatPage({ searchParams }: Props) {
  const sp = await searchParams;
  const beta = typeof sp.beta === "string" ? sp.beta : "";
  // Public (ENABLED=1 and PUBLIC=1): anyone. Otherwise the beta token must match, else 404.
  if (letterChatAccess(process.env, beta) === "none") notFound();

  const enabled = chatEnabled(process.env);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-2xl px-4 pt-24 pb-10 md:pt-28">
        <p className="mb-6 rounded border px-3 py-2 text-sm" role="note" data-testid="letter-chat-notice">
          {PAGE_NOTICE}
        </p>
        {enabled ? (
          <LetterChat beta={beta} />
        ) : (
          <div>
            <p>{PAUSED_LINE}</p>
            <p className="mt-4">
              <Link href="/letters" className="underline">
                Browse the collection
              </Link>
            </p>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
