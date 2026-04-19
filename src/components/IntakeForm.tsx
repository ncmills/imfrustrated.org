"use client";

import { useState } from "react";
import posthog from "posthog-js";

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC",
];

const ISSUE_TYPES: { value: string; label: string }[] = [
  { value: "consumer", label: "Consumer / billing / fraud" },
  { value: "housing", label: "Housing / landlord / eviction" },
  { value: "employment", label: "Employment / wages" },
  { value: "family", label: "Family / divorce / custody" },
  { value: "immigration", label: "Immigration" },
  { value: "criminal", label: "Criminal / minor offense" },
  { value: "civil-rights", label: "Civil rights / discrimination" },
  { value: "small-claims", label: "Small claims / contracts" },
  { value: "other", label: "Something else" },
];

export default function IntakeForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [issueType, setIssueType] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, state, issueType, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }
      try {
        posthog.capture("intake_submitted", { state, issueType });
      } catch {}
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="letter-card text-center">
        <p className="font-serif text-3xl text-ink font-semibold mb-3">Got it.</p>
        <p className="text-muted-warm leading-relaxed">
          We&rsquo;ll read every word and reply within a day or two — no automated nonsense.
        </p>
        <p className="script text-2xl mt-5">Thanks for writing.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="letter-card text-left">
      <p
        className="script text-2xl md:text-[1.75rem] mb-1"
        aria-hidden="true"
      >
        Dear friend,
      </p>
      <p className="text-muted-warm text-sm mb-7 leading-relaxed">
        Tell us a little about what&rsquo;s going on. A few sentences is plenty — we read every one.
      </p>

      <div className="space-y-5">
        <div>
          <label className="letter-label">Your email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="letter-input"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="letter-label">Your state</label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="letter-select"
            >
              <option value="">Pick your state</option>
              {US_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="letter-label">Type of issue</label>
            <select
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
              className="letter-select"
            >
              <option value="">Pick a category</option>
              {ISSUE_TYPES.map((it) => (
                <option key={it.value} value={it.value}>{it.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="letter-label">What&rsquo;s going on?</label>
          <textarea
            rows={5}
            maxLength={2000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="A few sentences is enough. The more we know, the better we can point you in the right direction."
            className="letter-textarea"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-forest min-w-[12rem]"
        >
          {status === "loading" ? "Sending…" : "Send it"}
          {status !== "loading" && (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          )}
        </button>

        <p className="script text-xl mt-1">
          we reply within a day, usually the same one.
        </p>
      </div>

      {status === "error" && (
        <p className="text-amber text-sm text-center mt-4">{errorMsg}</p>
      )}

      <p className="text-[0.72rem] text-muted-warm/80 text-center mt-6 leading-relaxed">
        Free. Confidential. Not legal advice — just real human help finding your next step.
      </p>
    </form>
  );
}
