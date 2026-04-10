import { NextResponse } from "next/server";
import { INDEXNOW_HOST, submitToIndexNow } from "@/lib/indexnow";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("urls" in body) ||
    !Array.isArray((body as { urls: unknown }).urls)
  ) {
    return NextResponse.json({ error: "urls[] required" }, { status: 400 });
  }

  const urls = (body as { urls: unknown[] }).urls.filter(
    (u): u is string => typeof u === "string"
  );

  const invalid = urls.find((u) => {
    try {
      return new URL(u).host !== INDEXNOW_HOST;
    } catch {
      return true;
    }
  });
  if (invalid) {
    return NextResponse.json(
      { error: `URL not on ${INDEXNOW_HOST}: ${invalid}` },
      { status: 400 }
    );
  }

  if (urls.length === 0) return NextResponse.json({ ok: true, submitted: 0 });
  if (urls.length > 10000) {
    return NextResponse.json(
      { error: "IndexNow accepts max 10000 URLs per request" },
      { status: 400 }
    );
  }

  try {
    const result = await submitToIndexNow(urls);
    return NextResponse.json(result, { status: result.ok ? 200 : 502 });
  } catch (err) {
    return NextResponse.json(
      { error: "submit failed", message: String(err) },
      { status: 502 }
    );
  }
}
