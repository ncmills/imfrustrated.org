import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { isBetaTestReq } from "@/lib/imf-chat/case-api";
import { safeCasePoll } from "@/lib/imf-chat/poll-api";
import { supabaseStore } from "@/lib/imf-chat/store";

export const dynamic = "force-dynamic";

export async function GET(request: Request, ctx: { params: Promise<{ token: string }> }) {
  // Polling spends nothing, so the kill switch does not block it: a paused chat can
  // still hand back a letter that was already reviewed.
  if (!supabase) {
    return NextResponse.json({ error: "chat_paused" }, { status: 503 });
  }
  const { token } = await ctx.params;
  // A database blip or a slow store call returns a 200 "still working" body (the client keeps
  // polling), never a 500 or a hang. Only the error class is logged: no token, no case text.
  const out = await safeCasePoll(
    token,
    supabaseStore(supabase),
    Date.now(),
    isBetaTestReq({ body: {}, ip: "", header: (n) => request.headers.get(n) }, {}, process.env),
    { onError: (kind) => console.error(`[imf-chat] case_poll_degraded ${kind}`) },
  );
  return NextResponse.json(out.body, { status: out.status, headers: { "Cache-Control": "no-store" } });
}
