"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** The full letter / statement text to copy. */
  text: string;
  /** Visible label; defaults to "Copy letter". */
  label?: string;
};

/**
 * One-tap "copy the whole letter" affordance for the template pages.
 *
 * The letter body is rendered inside a <pre>; on a phone that means a long
 * press + drag-select across a few hundred words to get it into Notes or Mail.
 * The section heading already promises "Copy, customize, send." — this is the
 * copy half. Uses the async Clipboard API with a textarea/execCommand fallback
 * for older WebViews; reports success/failure inline via aria-live.
 */
export function CopyLetterButton({ text, label = "Copy letter" }: Props) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  function flash(next: "copied" | "failed") {
    setState(next);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2200);
  }

  async function copy() {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        flash("copied");
        return;
      }
    } catch {
      // fall through to the legacy path
    }
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      flash(ok ? "copied" : "failed");
    } catch {
      flash("failed");
    }
  }

  const caption =
    state === "copied"
      ? "Copied — paste it into your email or document."
      : state === "failed"
        ? "Couldn’t copy automatically — select the letter text above and copy it manually."
        : "";

  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
      <button
        type="button"
        onClick={copy}
        className="btn-soft"
        aria-label={`${label} to clipboard`}
      >
        {state === "copied" ? "Copied" : label}
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4" aria-hidden="true">
          {state === "copied" ? (
            <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <>
              <rect x="7" y="7" width="9" height="10" rx="1.5" />
              <path d="M13 7V5.5A1.5 1.5 0 0011.5 4h-6A1.5 1.5 0 004 5.5v7A1.5 1.5 0 005.5 14H7" strokeLinecap="round" />
            </>
          )}
        </svg>
      </button>
      <span role="status" aria-live="polite" className="text-sm text-sage-2">
        {caption}
      </span>
    </div>
  );
}
