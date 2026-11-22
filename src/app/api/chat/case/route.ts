import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { handleCasePost } from "@/lib/imf-chat/case-api";
import { supabaseStore } from "@/lib/imf-chat/store";

export const dynamic = "force-dynamic";

function clientIp(req: Request): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
  if (!supabase) return NextResponse.json({ error: "chat_paused" }, { status: 503 });
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }
  try {
    const out = await handleCasePost(
      { body, ip: clientIp(request), header: (n) => request.headers.get(n) },
      supabaseStore(supabase),
      process.env,
    );
    return NextResponse.json(out.body, { status: out.status });
  } catch {
    console.error("[imf-chat] case_post_error");
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
