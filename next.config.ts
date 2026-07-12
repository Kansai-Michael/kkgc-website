import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      { source: "/programs/teens-adults", destination: "/programs/teens", permanent: true },
      { source: "/class-livestream", destination: "/", permanent: true },
      { source: "/tag/gold-coast", destination: "/", permanent: true },
      { source: "/tag/:slug", destination: "/", permanent: true },
      { source: "/dojo-rules", destination: "/about", permanent: true },
      { source: "/dojo-rules/:path*", destination: "/about", permanent: true },
      { source: "/bullybuster", destination: "/", permanent: true },
      { source: "/the-orange-belt-conundrum", destination: "/", permanent: true },
      { source: "/6894-2", destination: "/", permanent: true },
      { source: "/how-to-wrestle-a-crocodile", destination: "/", permanent: true },
      { source: "/karate-classes", destination: "/programs", permanent: true },
      { source: "/dojo-timetable", destination: "/timetable", permanent: true },
      { source: "/class-schedule", destination: "/timetable", permanent: true },
      { source: "/new-timetable", destination: "/timetable", permanent: true },
      { source: "/classes", destination: "/programs", permanent: true },
    ];
  },
  async headers() {
    const cspBase = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://www.facebook.com https://www.gstatic.com",
      "frame-src https://app.kihonsoft.au https://maps.google.com https://www.google.com",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://region1.google-analytics.com https://www.facebook.com https://connect.facebook.net",
      "font-src 'self' data:",
      "media-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ];

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Content-Security-Policy", value: cspBase.join("; ") },
        ],
      },
      {
        // Must come after /(.*) — CSP frame-ancestors overrides X-Frame-Options per spec,
        // allowing Kihon to redirect their calendar iframe to our thank-you page.
        // Matches /thank-you and /thank-you/ (Kihon uses trailing slash).
        source: "/thank-you{/}?",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [...cspBase, "frame-ancestors 'self' https://app.kihonsoft.au"].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
