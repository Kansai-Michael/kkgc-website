import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["GPTBot", "OAI-SearchBot", "ClaudeBot", "PerplexityBot", "anthropic-ai"],
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thank-you"],
      },
    ],
    sitemap: "https://kansaikarategoldcoast.com.au/sitemap.xml",
  };
}
