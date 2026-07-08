import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// ============================================================
// Rate limiting — requires Upstash Redis to be configured.
// ============================================================
//
// Setup (one-time, ~5 minutes):
//   1. Create a free database at https://console.upstash.com
//   2. In Vercel: Project → Storage → Connect Database → Upstash → select it
//      (this auto-populates UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN)
//   3. Redeploy. That's it — no code changes needed.
//
// Until those env vars are set, `isRateLimitConfigured` is false and
// the middleware below skips rate limiting entirely (fails open) —
// the site keeps working normally, just without this layer of
// protection, rather than breaking because Redis isn't configured yet.

export const isRateLimitConfigured =
  !!process.env.UPSTASH_REDIS_REST_URL && !!process.env.UPSTASH_REDIS_REST_TOKEN;

const redis = isRateLimitConfigured ? Redis.fromEnv() : null;

// General page browsing — generous, since a real visitor reading
// product pages, clicking through categories, etc. can easily hit
// 20-30 page loads in a couple of minutes. This is aimed at bulk
// scraping (hundreds of sequential requests), not normal use.
export const pageRatelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(120, "1 m"),
      prefix: "lanchrom:rl:page",
      analytics: true,
    })
  : null;

// Form/API submission endpoints (sample requests, quote requests,
// downloads) — much stricter, since there's no legitimate reason for
// one visitor to submit dozens of these per minute, and these routes
// trigger real costs (HubSpot API calls, outbound emails).
export const apiRatelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(10, "1 m"),
      prefix: "lanchrom:rl:api",
      analytics: true,
    })
  : null;
