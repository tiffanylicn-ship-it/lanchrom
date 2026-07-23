import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },
  experimental: { workerThreads: true, cpus: 1 },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Hotlink protection for our own product/category photography —
        // browsers send a Referer header on image requests, so we can
        // tell whether the request originated from our own site vs. an
        // external page directly embedding our image URL. This stops
        // the common "competitor copies our HTML and the images load
        // straight from our server" pattern without affecting normal
        // visitors, search engine indexing, or direct image URL visits.
        source: "/images/:path*",
        headers: [
          { key: "Cross-Origin-Resource-Policy", value: "same-site" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
