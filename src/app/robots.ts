import type { MetadataRoute } from "next";

// Strategy: allow the crawlers that actually bring business value
// (search engines), and explicitly disallow the categories of bots
// most commonly used for bulk content scraping / AI training ingestion
// / competitive site-cloning tools. This won't stop a determined
// scraper that ignores robots.txt outright, but it (a) gives Google
// and friends a clear signal of what's intended, (b) is the standard
// first line of defense referenced by hosting-level and CDN-level
// blocking rules, and (c) is something a lawyer can point to if a
// competitor's scraping ever becomes a legal matter — "they ignored
// our published robots.txt" is a stronger claim than having none at all.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // Bulk-scraping / AI-training crawlers — block outright. SEO tools
      // (Ahrefs, Semrush) are intentionally NOT listed here since the
      // owner uses them to monitor this site's own rankings.
      {
        userAgent: ["GPTBot", "CCBot", "ClaudeBot", "Claude-Web", "anthropic-ai", "Bytespider", "Amazonbot", "PetalBot", "DotBot", "Diffbot"],
        disallow: "/",
      },
    ],
    sitemap: "https://www.lanchrom.com/sitemap.xml",
  };
}
