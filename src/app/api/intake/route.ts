import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// In-memory rate limit (sufficient for low-volume contact form):
// 5 submissions per IP per hour.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

const ALLOWED_ISSUE_TYPES = new Set([
  "consumer",
  "housing",
  "employment",
  "family",
  "immigration",
  "criminal",
  "civil-rights",
  "small-claims",
  "other",
]);

interface IntakeBody {
  email?: string;
  state?: string;
  issueType?: string;
  message?: string;
}

export async function POST(request: Request) {
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headersList.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many submissions. Try again later." }, { status: 429 });
  }

  let body: IntakeBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = (body.email ?? "").trim().toLowerCase();
  if (!EMAIL_REGEX.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const state =
    body.state && typeof body.state === "string" && body.state.length === 2
      ? body.state.toUpperCase()
      : null;
  const issueType =
    body.issueType && ALLOWED_ISSUE_TYPES.has(body.issueType) ? body.issueType : null;
  const message = body.message ? String(body.message).slice(0, 2000).trim() : null;

  console.log("[intake]", JSON.stringify({ email, state, issueType, hasMessage: !!message, ip }));

  if (supabase) {
    try {
      const { error } = await supabase.from("imfrustrated_intake").insert({
        email,
        state,
        issue_type: issueType,
        message,
        ip,
      });
      if (error) {
        console.error("[intake] supabase error:", error.message);
      }
    } catch (err) {
      console.error("[intake] supabase exception:", err);
    }
  }

  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY.trim());
      const { data: sent, error: sendErr } = await resend.emails.send({
        from: "I'm Frustrated <info@imfrustrated.org>",
        to: "info@imfrustrated.org",
        replyTo: email,
        subject: `New intake: ${issueType || "general"} (${state || "??"})`,
        html: `
          <h2>New legal aid intake</h2>
          <table style="border-collapse:collapse;font-family:sans-serif;">
            <tr><td style="padding:4px 12px;font-weight:bold;">Email</td><td style="padding:4px 12px;">${email}</td></tr>
            <tr><td style="padding:4px 12px;font-weight:bold;">State</td><td style="padding:4px 12px;">${state || "—"}</td></tr>
            <tr><td style="padding:4px 12px;font-weight:bold;">Issue type</td><td style="padding:4px 12px;">${issueType || "—"}</td></tr>
          </table>
          ${message ? `<h3 style="font-family:sans-serif;margin-top:24px;">Message</h3><p style="font-family:sans-serif;white-space:pre-wrap;">${message.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c] || c))}</p>` : ""}
        `,
      });
      if (sendErr) {
        throw new Error(`Resend error: ${(sendErr as { name?: string }).name || "unknown"} — ${sendErr.message || String(sendErr)}`);
      }
      if (!sent?.id) {
        throw new Error("Resend returned no id");
      }
    } catch (err) {
      console.error("[intake] Resend notification failed:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
