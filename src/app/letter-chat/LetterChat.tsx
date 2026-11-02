"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import * as C from "./copy";

// /letter-chat client flow (spec §1 steps 1-9). Every visible line comes from ./copy or from
// the server (cards, prompts, status lines). The token lives in the URL hash (#t=...), so it is
// never sent to the server in a page request or written to access logs; the API takes it in the
// POST body or the GET path.

type Card = { kind: string; text: string };
type Next = { step: string; prompt: string };
type Followup = { q: string; a: string | null };
type Bubble = { who: "bot" | "me"; text: string };
type Phase = "gate" | "intake" | "waiting" | "result" | "stopped";
type Poll = {
  ok?: boolean; error?: string; status?: string; progress?: string; line?: string; card?: Card;
  letter?: string; cover?: string | null; sources?: unknown; followups?: Followup[];
};

const POLL_MS = 10_000;
const OFFLINE_MS = 20 * 60 * 1000;
const TERMINAL = new Set(["crisis", "out", "urgent", "lawyer", "closed"]);
const TEXT_STEPS = new Set(["counterparty", "story", "amount", "dates", "want", "tried"]);

const btn =
  "inline-flex min-h-[44px] items-center justify-center rounded-lg px-4 py-2 font-semibold transition-colors " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay disabled:opacity-50";
const primary = `${btn} bg-sage text-card hover:bg-evergreen`;
const secondary = `${btn} border border-rule bg-card text-ink hover:bg-mist`;
const chip = (on: boolean) => `${btn} border ${on ? "border-sage bg-sage text-card" : "border-rule bg-card text-ink hover:bg-mist"}`;
const field =
  "w-full rounded-lg border border-rule bg-card px-3 py-2 text-base text-ink " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay";
const tapLink = "inline-flex min-h-[44px] items-center ";
const link = "underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-clay";

function errorText(code: string | undefined): string {
  if (code === "question_length") return C.ERRORS.turn_length;
  return (code && C.ERRORS[code]) || C.GENERIC_ERROR;
}

function readToken(): string | null {
  if (typeof window === "undefined") return null;
  const m = window.location.hash.match(/(?:^#|&)t=([\w-]{20,64})/);
  return m ? m[1] : null;
}

function privateLink(token: string): string {
  const { origin, pathname, search } = window.location;
  return `${origin}${pathname}${search}#t=${token}`;
}

function normSources(s: unknown): Array<{ href: string | null; label: string }> {
  if (!Array.isArray(s)) return [];
  return s.flatMap((x) => {
    if (typeof x === "string") return [{ href: /^https?:\/\//.test(x) ? x : null, label: x }];
    if (x && typeof x === "object") {
      const o = x as Record<string, unknown>;
      const url = typeof o.url === "string" ? o.url : typeof o.href === "string" ? o.href : "";
      const label = [o.title, o.name, o.label, url].find((v) => typeof v === "string" && v) as string | undefined;
      if (!label) return [];
      return [{ href: /^https?:\/\//.test(url) ? url : null, label }];
    }
    return [];
  });
}

function Highlighted({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\[[^\]\n]{1,80}\])/g).map((part, i) =>
        /^\[[^\]]+\]$/.test(part) ? (
          <mark key={i} className="rounded bg-clay-soft/50 px-0.5 text-ink">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function CardView({ card }: { card: Card }) {
  const crisis = card.kind === "crisis";
  return (
    <div role="alert" className={`rounded-xl border bg-card p-4 ${crisis ? "border-clay" : "border-rule"}`}>
      <p className="text-ink">{card.text}</p>
      {crisis ? (
        <div className="mt-3 flex flex-wrap gap-2">
          <a href="tel:911" className={primary}>{C.CALL_911}</a>
          <a href="tel:988" className={primary}>{C.CALL_988}</a>
          <a href="sms:988" className={secondary}>{C.TEXT_988}</a>
        </div>
      ) : card.kind === "urgent" || card.kind === "out" || card.kind === "closed" ? (
        <p className="mt-3">
          <a href={C.LEGAL_AID_LINK.href} className={`${tapLink}${link}`} target="_blank" rel="noopener noreferrer">{C.LEGAL_AID_LINK.label}</a>
        </p>
      ) : null}
    </div>
  );
}

export function LetterChat({ beta }: { beta: string }) {
  const [phase, setPhase] = useState<Phase>("gate");
  const [token, setToken] = useState<string | null>(null);
  const [next, setNext] = useState<Next | null>(null);
  const [log, setLog] = useState<Bubble[]>([]);
  const [card, setCard] = useState<Card | null>(null);
  const [resources, setResources] = useState<string | null>(null);
  const [redacted, setRedacted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [input, setInput] = useState("");
  const [stateSel, setStateSel] = useState("");
  const [safety, setSafety] = useState<Record<string, boolean | undefined>>({});
  const [poll, setPoll] = useState<Poll | null>(null);
  const [queuedSince, setQueuedSince] = useState<number | null>(null);
  const [now, setNow] = useState(() => Date.now());
  const [copied, setCopied] = useState<string | null>(null);
  const [question, setQuestion] = useState("");
  const [fuCard, setFuCard] = useState<Card | null>(null);
  const [fuNote, setFuNote] = useState<string | null>(null);
  const honeypot = useRef<HTMLInputElement>(null);
  const firstInput = useRef<HTMLElement | null>(null);

  const applyPoll = useCallback((p: Poll) => {
    setPoll(p);
    if (p.error) {
      setError(errorText(p.error));
      if (p.error === "not_found") setPhase("stopped");
      return;
    }
    setError(null);
    const st = p.status ?? "";
    if (st === "crisis" && p.card) {
      setCard(p.card);
      setPhase("stopped");
    } else if (TERMINAL.has(st)) {
      setCard({ kind: st, text: p.line ?? C.GENERIC_ERROR });
      setPhase("stopped");
    } else if (st === "intake") {
      // Resumed mid-intake: the poll does not say which step was reached, so restart at state
      // (the server accepts a re-sent state/safety/category turn while the case is in intake).
      setPhase((ph) => (ph === "gate" ? "intake" : ph));
      setNext((n) => n ?? { step: "state", prompt: C.STATE_PROMPT });
    } else if (p.letter) {
      setPhase("result");
    } else {
      setPhase("waiting");
    }
  }, []);

  const fetchPoll = useCallback(
    async (t: string) => {
      try {
        const r = await fetch(`/api/chat/case/${encodeURIComponent(t)}`, { cache: "no-store" });
        applyPoll((await r.json()) as Poll);
      } catch {
        setError(C.GENERIC_ERROR);
      }
    },
    [applyPoll],
  );

  // Resume from a private link.
  useEffect(() => {
    const t = readToken();
    if (t) {
      setToken(t);
      void fetchPoll(t);
    }
  }, [fetchPoll]);

  // Poll every 10 s while waiting for the letter, or while a follow-up answer is pending.
  const pendingFollowup = !!poll?.followups?.some((f) => f.a === null) || fuNote !== null;
  const shouldPoll = !!token && (phase === "waiting" || (phase === "result" && pendingFollowup));
  useEffect(() => {
    if (!shouldPoll || !token) return;
    const id = window.setInterval(() => {
      setNow(Date.now());
      void fetchPoll(token);
    }, POLL_MS);
    return () => window.clearInterval(id);
  }, [shouldPoll, token, fetchPoll]);

  // Clear the "question sent" note once the server shows every answer.
  useEffect(() => {
    if (fuNote !== null && poll?.followups?.length && poll.followups.every((f) => f.a !== null)) setFuNote(null);
  }, [poll, fuNote]);

  useEffect(() => {
    firstInput.current?.focus();
  }, [next?.step, phase]);

  async function post(url: string, body: Record<string, unknown>): Promise<Record<string, unknown>> {
    const r = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json", "x-imf-beta": beta },
      body: JSON.stringify(body),
    });
    try {
      return (await r.json()) as Record<string, unknown>;
    } catch {
      return { error: "server_error" };
    }
  }

  async function start() {
    setBusy(true);
    setError(null);
    try {
      const data = await post("/api/chat/case", {
        action: "create",
        disclaimer_v: C.DISCLAIMER_V,
        website: honeypot.current?.value ?? "",
      });
      if (typeof data.token !== "string") {
        setError(errorText(data.error as string | undefined));
        return;
      }
      setToken(data.token);
      window.history.replaceState(null, "", `#t=${data.token}`);
      setNext((data.next as Next) ?? { step: "state", prompt: C.STATE_PROMPT });
      setLog([{ who: "bot", text: C.STATE_PROMPT }]);
      setPhase("intake");
    } catch {
      setError(C.GENERIC_ERROR);
    } finally {
      setBusy(false);
    }
  }

  async function turn(step: string, value: unknown, shown: string) {
    if (!token) return;
    setBusy(true);
    setError(null);
    try {
      let d = await post("/api/chat/case", { action: "turn", token, step, value });
      if (d.error === "too_fast") {
        // The first turn must come at least 3 s after create; wait it out once.
        await new Promise((r) => setTimeout(r, 3000));
        d = await post("/api/chat/case", { action: "turn", token, step, value });
      }
      if (d.error) {
        setError(errorText(d.error as string));
        return;
      }
      setLog((l) => [...l, { who: "me", text: shown }]);
      setInput("");
      setResources(typeof d.resources === "string" ? d.resources : null);
      setRedacted(d.redacted === true);
      if (d.card && typeof d.card === "object") {
        setCard(d.card as Card);
        setPhase("stopped");
      } else if (d.status === "queued") {
        setQueuedSince(Date.now());
        setNow(Date.now());
        setPhase("waiting");
        void fetchPoll(token);
      } else if (d.next) {
        const n = d.next as Next;
        setNext(n);
        setLog((l) => [...l, { who: "bot", text: n.prompt }]);
      }
    } catch {
      setError(C.GENERIC_ERROR);
    } finally {
      setBusy(false);
    }
  }

  async function ask() {
    if (!token || !question.trim()) return;
    setBusy(true);
    setError(null);
    setFuCard(null);
    try {
      const data = await post("/api/chat/followup", { token, q: question });
      if (data.error) {
        setError(errorText(data.error as string));
        return;
      }
      setQuestion("");
      if (data.status === "crisis" && data.card) {
        // Tier A on a follow-up: the crisis card only; nothing was queued.
        setFuCard(data.card as Card);
        return;
      }
      setFuNote(typeof data.resources === "string" ? data.resources : "");
      setRedacted(data.redacted === true);
      void fetchPoll(token);
    } catch {
      setError(C.GENERIC_ERROR);
    } finally {
      setBusy(false);
    }
  }

  async function copyText(text: string, key: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      setError(C.GENERIC_ERROR);
    }
  }

  function downloadTxt(text: string) {
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "letter.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  const errorBox = error ? (
    <p role="alert" className="rounded-lg border border-clay bg-card p-3 text-ink">{error}</p>
  ) : null;

  // ---- 1. Disclaimer gate: nothing else is reachable until the button is tapped.
  if (phase === "gate") {
    return (
      <section className="space-y-4">
        <div className="rounded-xl border border-rule bg-card p-4">
          <p className="text-ink">{C.DISCLAIMER}</p>
          <p className="mt-3 text-ink-soft">{C.ACK_SAFETY}</p>
          <p className="mt-3 flex flex-wrap gap-x-4">
            {C.PAGE_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`${link} inline-flex min-h-[44px] items-center`}>{l.label}</a>
            ))}
          </p>
          {/* Honeypot: hidden from people and assistive tech; a bot that fills it gets a silent no-op. */}
          <input ref={honeypot} name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
          <button type="button" className={`${primary} mt-4 w-full`} onClick={start} disabled={busy || (!!token && !poll)}>
            {C.START_BUTTON}
          </button>
        </div>
        {errorBox}
      </section>
    );
  }

  const privLink = token ? privateLink(token) : "";
  const linkBox = token ? (
    <div className="flex flex-col gap-2 rounded-lg border border-rule bg-card p-3">
      <code className="break-all text-sm text-ink">{privLink}</code>
      <button type="button" className={secondary} onClick={() => copyText(privLink, "link")}>
        {copied === "link" ? C.COPIED : C.COPY_LINK}
      </button>
    </div>
  ) : null;

  const step = next?.step ?? "state";
  const allSafety = C.SAFETY_QUESTIONS.every((q) => typeof safety[q.key] === "boolean");
  const stateLabel = C.STATE_OPTIONS.find((s) => s.value === stateSel)?.label;

  return (
    <section className="space-y-4">
      <ol className="space-y-3" aria-live="polite">
        {log.map((b, i) => (
          <li
            key={i}
            className={`max-w-[calc(100%-48px)] whitespace-pre-wrap rounded-xl px-3 py-2 ${
              b.who === "bot" ? "bg-mist text-ink" : "ml-auto bg-sage text-card"
            }`}
          >
            {b.text}
          </li>
        ))}
      </ol>

      {card ? <CardView card={card} /> : null}

      {/* ---- 2-4. State, safety chips, category, guided intake. */}
      {phase === "intake" && !card ? (
        <div className="sticky bottom-0 space-y-3 border-t border-rule bg-bg py-3">
          {resources ? <p role="status" className="rounded-lg border border-clay bg-card p-3 text-ink">{resources}</p> : null}
          {redacted ? <p role="status" className="text-sm text-ink-soft">{C.REDACTED_NOTE}</p> : null}

          {step === "state" ? (
            <div className="flex flex-col gap-2">
              <label htmlFor="lc-state" className="sr-only">{C.STATE_PROMPT}</label>
              <select
                id="lc-state"
                ref={(el) => { firstInput.current = el; }}
                className={`${field} h-11 min-h-[44px]`}
                value={stateSel}
                onChange={(e) => setStateSel(e.target.value)}
              >
                <option value="">{C.STATE_PLACEHOLDER}</option>
                {C.STATE_OPTIONS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                <option value={C.NON_US.value}>{C.NON_US.label}</option>
              </select>
              <button
                type="button"
                className={primary}
                disabled={busy || !stateSel}
                onClick={() => void turn("state", stateSel, stateSel === C.NON_US.value ? C.NON_US.label : stateLabel ?? stateSel)}
              >
                {C.CONTINUE}
              </button>
            </div>
          ) : step === "safety" ? (
            <fieldset className="space-y-3">
              <legend className="sr-only">{C.SAFETY_INTRO}</legend>
              {C.SAFETY_QUESTIONS.map((q) => (
                <div key={q.key} role="group" aria-label={q.text} className="space-y-2">
                  <p className="text-ink">{q.text}</p>
                  <div className="flex gap-2">
                    {[true, false].map((v) => (
                      <button
                        key={String(v)}
                        type="button"
                        aria-pressed={safety[q.key] === v}
                        className={`${chip(safety[q.key] === v)} flex-1`}
                        onClick={() => setSafety((s) => ({ ...s, [q.key]: v }))}
                      >
                        {v ? C.YES : C.NO}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button
                type="button"
                className={`${primary} w-full`}
                disabled={busy || !allSafety}
                onClick={() =>
                  void turn(
                    "safety",
                    { danger: safety.danger, deadline: safety.deadline, lawyer: safety.lawyer },
                    C.SAFETY_QUESTIONS.map((q) => (safety[q.key] ? C.YES : C.NO)).join(" / "),
                  )
                }
              >
                {C.CONTINUE}
              </button>
            </fieldset>
          ) : step === "category" ? (
            <div className="space-y-3">
              <p className="sr-only">{C.CATEGORY_PROMPT}</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {C.CATEGORIES.map((c) => (
                  <button key={c.value} type="button" className={chip(false)} disabled={busy} onClick={() => void turn("category", c.value, c.label)}>
                    {c.label}
                  </button>
                ))}
              </div>
              <a href={C.PARKING_HREF} className={`${link} inline-flex min-h-[44px] items-center`}>{C.PARKING_LINK}</a>
            </div>
          ) : step === "submit" ? (
            <button type="button" className={`${primary} w-full`} disabled={busy} onClick={() => void turn("submit", null, C.SUBMIT)}>
              {C.SUBMIT}
            </button>
          ) : TEXT_STEPS.has(step) ? (
            <form
              className="space-y-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (input.trim()) void turn(step, input, input);
              }}
            >
              <p className="text-sm text-ink-soft">{C.PII_HINT}</p>
              <label htmlFor="lc-text" className="sr-only">{next?.prompt}</label>
              <textarea
                id="lc-text"
                ref={(el) => { firstInput.current = el; }}
                className={field}
                rows={step === "story" ? 6 : 2}
                maxLength={2000}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" className={`${primary} w-full`} disabled={busy || !input.trim()}>{C.SEND}</button>
            </form>
          ) : null}
          {errorBox}
        </div>
      ) : null}

      {/* ---- 5 + 7. Acknowledgement and waiting state. */}
      {phase === "waiting" ? (
        <div className="space-y-3 rounded-xl border border-rule bg-card p-4">
          {stateLabel ? <p className="text-ink">{C.ackLine(stateLabel)}</p> : null}
          {linkBox}
          <p className="text-ink-soft">{C.BETA_HOLD_LINE}</p>
          <p role="status" aria-live="polite" className="font-semibold text-ink">
            {poll?.status === "queued"
              ? poll.line ?? (queuedSince && now - queuedSince > OFFLINE_MS ? C.OFFLINE_LINE : poll.progress ?? C.PROGRESS_DEFAULT)
              : poll?.line ?? C.PROGRESS_DEFAULT}
          </p>
          {/* TODO(U6b gap): the poll body (src/lib/imf-chat/poll-api.ts) carries no day-cap
              indicator, so C.DAY_CAP_LINE is never shown here. Wire it once the poll returns one. */}
          {errorBox}
        </div>
      ) : null}

      {/* ---- 8-9. Letter, cover, sources, follow-ups. */}
      {phase === "result" && poll?.letter ? (
        <div className="space-y-4">
          {linkBox}
          <article className="rounded-xl border border-rule bg-card p-4">
            <h2 className="mb-3 font-semibold text-ink">{C.LETTER_TITLE}</h2>
            <div className="whitespace-pre-wrap font-accent text-lg leading-relaxed text-ink">
              <Highlighted text={poll.letter} />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 print:hidden">
              <button type="button" className={secondary} onClick={() => copyText(poll.letter ?? "", "letter")}>
                {copied === "letter" ? C.COPIED : C.COPY_LETTER}
              </button>
              <button type="button" className={secondary} onClick={() => downloadTxt(poll.letter ?? "")}>{C.DOWNLOAD_TXT}</button>
              <button type="button" className={secondary} onClick={() => window.print()}>{C.PRINT}</button>
            </div>
          </article>

          {poll.cover ? (
            <div className="rounded-xl border border-rule bg-card p-4">
              <h2 className="mb-2 font-semibold text-ink">{C.COVER_TITLE}</h2>
              <p className="whitespace-pre-wrap text-ink">{poll.cover}</p>
            </div>
          ) : null}

          {normSources(poll.sources).length ? (
            <details className="rounded-xl border border-rule bg-card p-4">
              <summary className="flex min-h-[44px] cursor-pointer items-center font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-clay">
                {C.SOURCES_TITLE}
              </summary>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {normSources(poll.sources).map((s, i) => (
                  <li key={i} className="break-words text-ink">
                    {s.href ? <a href={s.href} className={`${tapLink}${link}`} target="_blank" rel="noopener noreferrer">{s.label}</a> : s.label}
                  </li>
                ))}
              </ul>
            </details>
          ) : null}

          <div className="space-y-3 rounded-xl border border-rule bg-card p-4 print:hidden">
            <h2 className="font-semibold text-ink">{C.FOLLOWUP_TITLE}</h2>
            {(poll.followups ?? []).map((f, i) => (
              <div key={i} className="space-y-2">
                <p className="ml-auto max-w-[calc(100%-48px)] whitespace-pre-wrap rounded-xl bg-sage px-3 py-2 text-card">{f.q}</p>
                <p className="max-w-[calc(100%-48px)] whitespace-pre-wrap rounded-xl bg-mist px-3 py-2 text-ink" aria-live="polite">
                  {f.a ?? C.ANSWER_PENDING}
                </p>
              </div>
            ))}
            {fuNote ? <p role="status" className="rounded-lg border border-clay p-3 text-ink">{fuNote}</p> : null}
            {fuCard ? <CardView card={fuCard} /> : null}
            {redacted ? <p role="status" className="text-sm text-ink-soft">{C.REDACTED_NOTE}</p> : null}
            <form
              className="space-y-2"
              onSubmit={(e) => {
                e.preventDefault();
                void ask();
              }}
            >
              <p className="text-sm text-ink-soft">{C.PII_HINT}</p>
              <label htmlFor="lc-q" className="sr-only">{C.FOLLOWUP_TITLE}</label>
              <textarea id="lc-q" className={field} rows={3} maxLength={2000} value={question} onChange={(e) => setQuestion(e.target.value)} />
              <button type="submit" className={`${primary} w-full`} disabled={busy || !question.trim() || pendingFollowup}>
                {C.ASK}
              </button>
            </form>
            <p>
              <a href={C.LEGAL_AID_LINK.href} className={`${tapLink}${link}`} target="_blank" rel="noopener noreferrer">{C.LEGAL_AID_LINK.label}</a>
            </p>
            {errorBox}
          </div>
        </div>
      ) : null}

      {phase === "stopped" ? errorBox : null}
    </section>
  );
}
