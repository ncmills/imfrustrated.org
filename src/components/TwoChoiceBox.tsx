import Link from "next/link";

/**
 * The small two-choice box ADDED above each existing "Get a draft letter" / #contact
 * block (front-door PR, additive per CONTROL PR62-ADDITIVE-ONLY 2026-11-26). It never
 * replaces or removes the existing block. Chat first, collection second. On /letters itself the collection is where the visitor already is, so
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
  if (!chatPublic && !showCollection) return null;
  return (
    <div className="max-w-xl mx-auto mb-8">
      <p className={`text-lg leading-relaxed ${dark ? "text-[#cdd6cd]" : "text-sage-2"}`}>
        {chatPublic
          ? "No letter fits? Use the chatbot. It asks a few questions and writes a letter for your situation and state. Both ways are free, and you send the letter yourself."
          : "Browse the collection of ready-made letters. It is free, and you send the letter yourself."}
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
    </div>
  );
}
