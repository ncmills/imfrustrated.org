import Link from "next/link";

/**
 * The small two-choice box that replaces every old "Get a draft letter" / #contact
 * entry point below the fold (front-door PR, 2026-11-24). Chat first, collection
 * second. On /letters itself the collection is where the visitor already is, so
 * `showCollection={false}` leaves just the chatbot link.
 */
export function TwoChoiceBox({
  showCollection = true,
  tone = "light",
  chatPublic = false,
}: {
  showCollection?: boolean;
  chatPublic?: boolean;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="max-w-xl mx-auto">
      <p className={`text-lg leading-relaxed ${dark ? "text-[#cdd6cd]" : "text-sage-2"}`}>
        {chatPublic
          ? "No letter fits? Use the chatbot. It asks a few questions and writes a letter for your situation and state. Both ways are free, and you send the letter yourself."
          : "Browse the collection of ready-made letters. It is free, and you send the letter yourself."}
      </p>
      <p className={`text-sm leading-relaxed mt-3 ${dark ? "text-[#cdd6cd]" : "text-sage-2"}`}>
        If a deadline is close, contact your local legal aid office or your state bar&rsquo;s lawyer
        referral service.
      </p>
      {(chatPublic || showCollection) && (
      <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
        {chatPublic && (
          <Link href="/letter-chat" className="btn-clay mag">
            Use the chatbot
          </Link>
        )}
        {showCollection && (
          <Link href="/letters" className={dark ? "btn-ghost mag !text-bg !border-bg/40" : "btn-ghost mag"}>
            Browse the collection
          </Link>
        )}
      </div>
      )}
      <p className={`text-sm leading-relaxed mt-5 ${dark ? "text-[#cdd6cd]" : "text-sage-2"}`}>
        Prefer email? <Link href="/#contact" className="underline decoration-clay/70 underline-offset-4">Tell us what happened</Link> and
        we&rsquo;ll try to email you a draft self-help letter to send yourself (legal information, not legal advice).
      </p>
    </div>
  );
}
