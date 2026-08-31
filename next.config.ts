import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      // Mailgun's old click-tracking host. Until Aug 2026 every link in our outbound
      // email was rewritten to http://email.kansaikarategoldcoast.com.au/c/<blob>. That
      // host is served by Mailgun with a mailgun.org certificate, while this site sends
      // HSTS with includeSubDomains + preload — so browsers force-upgrade the link to
      // https, hit a certificate name mismatch, and show families a full-page warning
      // that we may be impersonating ourselves. Tracking is off now, but the rewritten
      // links are permanent in every email already delivered, so the subdomain is
      // pointed at this project (valid certificate) and parked on /link-expired. The
      // real destination is inside that opaque blob and cannot be recovered.
      // Must stay first so it wins over the path rules below.
      // DO NOT re-point the DNS back at mailgun.org — that re-arms the warning.
      {
        source: "/:path*",
        has: [{ type: "host", value: "email.kansaikarategoldcoast.com.au" }],
        destination: "https://kansaikarategoldcoast.com.au/link-expired",
        permanent: false, // 302 — a stopgap, not a mapping browsers should cache forever
      },
      { source: "/programs/teens-adults", destination: "/programs/teens", permanent: true },
      { source: "/class-livestream", destination: "/", permanent: true },
      { source: "/tag/gold-coast", destination: "/", permanent: true },
      { source: "/tag/:slug", destination: "/", permanent: true },
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
