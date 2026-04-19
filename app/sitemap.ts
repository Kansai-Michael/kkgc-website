import type { MetadataRoute } from "next";

const BASE = "https://kansaikarategoldcoast.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, lastModified: "2026-04-19", changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/programs/cubs`, lastModified: "2026-04-19", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/programs/little-lions`, lastModified: "2026-04-19", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/programs/juniors`, lastModified: "2026-04-19", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/programs/teens`, lastModified: "2026-04-19", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/programs/adults`, lastModified: "2026-04-19", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/programs/cubs/timetable`, lastModified: "2026-04-19", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/programs/little-lions/timetable`, lastModified: "2026-04-19", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/programs/juniors/timetable`, lastModified: "2026-04-19", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/programs/teens/timetable`, lastModified: "2026-04-19", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/programs/adults/timetable`, lastModified: "2026-04-19", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/timetable`, lastModified: "2026-04-19", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/about`, lastModified: "2026-04-19", changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: "2026-04-19", changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/privacy`, lastModified: "2026-04-19", changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: "2026-04-19", changeFrequency: "yearly", priority: 0.3 },
  ];
}
