import { createHash } from "node:crypto";
import { supabase } from "@/lib/supabase";
import { countPageview } from "@/lib/page-counts";

// First-party per-page counter (ALLOWLIST-KEEP-DETAIL). Increments (path, UTC day) in
// imfrustrated_page_counts. Always 204; sets no cookies; stores and logs nothing about the
// visitor. The client IP is used only as an in-memory, hashed rate-limit key (same
// fixed-window shape as /api/intake) and is never persisted.

export const runtime = "nodejs";

const RATE_LIMIT_MAX = 120;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(req: Request): boolean {
  const xff = req.headers.get("x-forwarded-for");
  const ip = xff ? xff.split(",")[0].trim() : req.headers.get("x-real-ip") ?? "unknown";
  const key = createHash("sha256").update(ip).digest("hex").slice(0, 16);
  const now = Date.now();
  const entry = rateLimitMap.get(key);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(req: Request) {
  if (!isRateLimited(req)) {
    let raw = "";
    try { raw = await req.text(); } catch {}
    await countPageview(raw, supabase ? (fn, args) => supabase!.rpc(fn, args) : null);
  }
  return new Response(null, { status: 204 });
}
