import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { pageRatelimit, apiRatelimit, isRateLimitConfigured } from "@/lib/ratelimit";

// ============================================================
// Anti-scraping notes — read before relying on this file alone
// ============================================================
//
// What this middleware DOES do:
// - Blocks requests with no User-Agent or with known scraper/cloning
//   tool signatures (HTTrack, wget bulk mode, generic "scrapy" bots).
// - Adds security headers that make automated parsing marginally
//   harder and signal serious intent.
// - Rate-limits by IP using Upstash Redis (sliding window), which
//   works correctly across Vercel's stateless serverless functions
//   because the counter lives in Redis, not in-process memory.
//   Two tiers: a generous limit for normal page browsing, and a
//   strict limit for form/API submissions. See src/lib/ratelimit.ts
//   for setup — if Upstash isn't configured yet, this step is
//   skipped automatically (fails open) so the site isn't broken by
//   a missing integration.
//
// What this middleware does NOT do, and CANNOT do reliably without
// the Upstash setup documented in src/lib/ratelimit.ts:
// - Rate limiting without a durable, shared store. A plain in-memory
//   counter in this file would silently fail to limit anything once
//   traffic spans multiple serverless instances — which is why the
//   actual counting happens in Redis, not here.
// - Stopping a determined human who manually saves pages or uses a
//   headless browser that mimics real user behavior. No website can
//   fully prevent this; the goal here is raising cost, not making it
//   impossible.

const BLOCKED_UA_PATTERNS = [
  /httrack/i,
  /wget/i,
  /libwww-perl/i,
  /python-requests/i,
  /scrapy/i,
  /^$/, // empty user-agent
];

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function proxy(request: NextRequest) {
  const ua = request.headers.get("user-agent") ?? "";

  if (BLOCKED_UA_PATTERNS.some(pattern => pattern.test(ua))) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  if (isRateLimitConfigured) {
    const ip = getClientIp(request);
    const isApiRoute = request.nextUrl.pathname.startsWith("/api/");
    const limiter = isApiRoute ? apiRatelimit : pageRatelimit;

    if (limiter) {
      const { success } = await limiter.limit(ip);
      if (!success) {
        return new NextResponse("Too Many Requests", {
          status: 429,
          headers: { "Retry-After": "60" },
        });
      }
    }
  }

  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noarchive");
  return response;
}

export const config = {
  matcher: [
    // Run on all paths except static assets and Next internals.
    "/((?!_next/static|_next/image|favicon.ico|images/).*)",
  ],
};
