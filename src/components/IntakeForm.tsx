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
      <div className="rounded-2xl border border-coral/20 bg-coral/5 p-8 text-center">
        <p className="font-serif text-2xl text-charcoal font-semibold">Got it.</p>
        <p className="text-muted mt-3">
          We&rsquo;ll read every word and reply within a day or two — no automated nonsense.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2">Your email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-lg border border-charcoal/15 bg-white focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral text-charcoal"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">State</label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-charcoal/15 bg-white focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral text-charcoal"
          >
            <option value="">Pick your state</option>
            {US_STATES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">Type of issue</label>
          <select
            value={issueType}
            onChange={(e) => setIssueType(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-charcoal/15 bg-white focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral text-charcoal"
          >
            <option value="">Pick a category</option>
            {ISSUE_TYPES.map((it) => (
              <option key={it.value} value={it.value}>{it.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-charcoal mb-2">
          What&rsquo;s going on?
        </label>
        <textarea
          rows={4}
          maxLength={2000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="A few sentences is enough. The more we know, the better we can point you in the right direction."
          className="w-full px-4 py-3 rounded-lg border border-charcoal/15 bg-white focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral text-charcoal resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-8 py-4 bg-coral text-white text-base font-semibold rounded-full hover:bg-coral-dark hover:shadow-xl hover:shadow-coral/20 transition-all duration-300 disabled:opacity-50"
      >
        {status === "loading" ? "Sending…" : "Send it"}
      </button>

      {status === "error" && (
        <p className="text-coral text-sm text-center">{errorMsg}</p>
      )}

      <p className="text-xs text-muted text-center">
        Free. Confidential. Not legal advice — just real human help finding your next step.
      </p>
    </form>
  );
}
