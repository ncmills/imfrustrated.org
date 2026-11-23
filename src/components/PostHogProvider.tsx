"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider, usePostHog } from "posthog-js/react";
import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { sanitizeEvent } from "@/lib/pageview-url";

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ph = usePostHog();

  useEffect(() => {
    if (pathname && ph) {
      let url = window.origin + pathname;
      const search = searchParams.toString();
      if (search) url += "?" + search;
      ph.capture("$pageview", { $current_url: url });
      // First-party per-page count (path only; no cookies, ids or query). ALLOWLIST-KEEP-DETAIL.
      try { navigator.sendBeacon?.("/api/pc", JSON.stringify({ path: pathname })); } catch {}
    }
  }, [pathname, searchParams, ph]);

  return null;
}

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY?.trim();

  useEffect(() => {
    if (key && typeof window !== "undefined") {
      posthog.init(key, {
        api_host: (process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com").trim(),
        capture_pageview: false,
        capture_pageleave: true,
        // Cookieless and anonymous (Nick 2026-11-18): nothing is stored in the browser,
        // no clicks or typed input are auto-captured, no session is recorded.
        persistence: "memory",
        autocapture: false,
        disable_session_recording: true,
        person_profiles: "identified_only",
        // Keep only the acquisition allowlist (utm_*, ref, gclid, fbclid) in the query,
        // and cut letter paths to /letters/<category> (CAPTURE-GAPS-1121).
        before_send: (event) => {
          sanitizeEvent(event as Parameters<typeof sanitizeEvent>[0]);
          return event;
        },
      });
    }
  }, [key]);

  if (!key) return <>{children}</>;

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  );
}
