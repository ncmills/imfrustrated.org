import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { handleCasePoll } from "@/lib/imf-chat/poll-api";
import { supabaseStore } from "@/lib/imf-chat/store";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, ctx: { params: Promise<{ token: string }> }) {
  // Polling spends nothing, so the kill switch does not block it: a paused chat can
  // still hand back a letter that was already reviewed.
  if (!supabase) {
    return NextResponse.json({ error: "chat_paused" }, { status: 503 });
  }
  const { token } = await ctx.params;
  try {
    const out = await handleCasePoll(token, supabaseStore(supabase));
    return NextResponse.json(out.body, { status: out.status, headers: { "Cache-Control": "no-store" } });
  } catch {
    console.error("[imf-chat] case_poll_error");
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
