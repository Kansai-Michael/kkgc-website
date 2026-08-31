import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Crawlers that must never be geoblocked, matched case-insensitively against
// the user-agent. This runs BEFORE the country check.
//
// Two entries here were learned the hard way and must not be narrowed:
//   - Match bare `google`, not `googlebot`. Google-InspectionTool (the Search
//     Console verification crawler) comes from US IPs; matching only `googlebot`
//     blocks it and site verification silently fails. Bare `google` also covers
//     AdsBot-Google, APIs-Google, Google-Extended and Storebot-Google.
//   - `facebookexternalhit` is Meta's ad-review and link-preview crawler. It was
//     missing here once already and broke Meta Ads previews and landing page
//     quality scores until it was added.
//
// `meta-externalagent` (Meta's newer crawler) and `adidxbot` (Microsoft Ads)
// close the equivalent gaps. The AI crawlers matter because this site serves
// /llms.txt for exactly those agents, and they all originate outside Australia --
// without them here, that file was unreachable by everything it was written for.
const BOT_UA =
  /google|bingbot|adidxbot|slurp|duckduckbot|baiduspider|yandexbot|ahrefsbot|semrushbot|petalbot|facebookexternalhit|meta-externalagent|twitterbot|linkedinbot|applebot|gptbot|oai-searchbot|chatgpt-user|claudebot|claude-web|perplexitybot/i;

export function proxy(request: NextRequest) {
  // Always let crawlers through, wherever they are.
  const ua = request.headers.get("user-agent") ?? "";
  if (BOT_UA.test(ua)) return NextResponse.next();

  // Vercel injects this on every request in production. It is absent on
  // localhost, so local dev and any non-Vercel host fail open.
  const country = request.headers.get("x-vercel-ip-country");
  if (!country || country === "AU") return NextResponse.next();

  // 451 rather than redirecting to google.com.au: bouncing a visitor to another
  // domain reads as redirect cloaking if a crawler ever slips past the UA check
  // above, and it tells a real person nothing about why they were turned away.
  return new NextResponse(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Not Available in Your Region | Kansai Karate Gold Coast</title>
  <style>
    body { margin:0; font-family: system-ui, -apple-system, "Segoe UI", sans-serif; background:#003087; color:#fff;
           display:flex; align-items:center; justify-content:center; min-height:100vh; text-align:center; padding:2rem; }
    h1 { font-size:1.75rem; margin:0 0 1rem; }
    p  { color:rgba(255,255,255,0.75); max-width:32rem; line-height:1.6; margin:0 auto 0.75rem; }
    a  { color:#FFB800; }
  </style>
</head>
<body>
  <main>
    <h1>Not available in your region</h1>
    <p>Kansai Karate Gold Coast is a martial arts school in Upper Coomera, Queensland, and this website is only available to visitors within Australia.</p>
    <p>If you are in Australia and seeing this by mistake, please call <a href="tel:0489265960">0489265960</a> or email <a href="mailto:info@kansaikarategoldcoast.com.au">info@kansaikarategoldcoast.com.au</a>.</p>
  </main>
</body>
</html>`,
    { status: 451, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}

export const config = {
  matcher: [
    // Everything except Next.js internals and the files crawlers and AI agents
    // fetch to discover the site. Those stay reachable regardless of user-agent.
    "/((?!_next/static|_next/image|favicon\.ico|robots\.txt|sitemap\.xml|llms\.txt).*)",
  ],
};
