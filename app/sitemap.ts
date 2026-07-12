import type { MetadataRoute } from "next";

const BASE = "https://kansaikarategoldcoast.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, lastModified: "2026-04-22" },
    { url: `${BASE}/programs/cubs`, lastModified: "2026-04-22" },
    { url: `${BASE}/programs/little-lions`, lastModified: "2026-04-22" },
    { url: `${BASE}/programs/juniors`, lastModified: "2026-04-22" },
    { url: `${BASE}/programs/teens`, lastModified: "2026-04-22" },
    { url: `${BASE}/programs/adults`, lastModified: "2026-04-22" },
    { url: `${BASE}/programs/cubs/timetable`, lastModified: "2026-04-22" },
    { url: `${BASE}/programs/little-lions/timetable`, lastModified: "2026-04-22" },
    { url: `${BASE}/programs/juniors/timetable`, lastModified: "2026-04-22" },
    { url: `${BASE}/programs/teens/timetable`, lastModified: "2026-04-22" },
    { url: `${BASE}/programs/adults/timetable`, lastModified: "2026-04-22" },
    { url: `${BASE}/timetable`, lastModified: "2026-07-13" },
    { url: `${BASE}/about`, lastModified: "2026-04-22" },
    { url: `${BASE}/contact`, lastModified: "2026-04-22" },
    { url: `${BASE}/privacy`, lastModified: "2026-04-19" },
    { url: `${BASE}/terms`, lastModified: "2026-04-19" },
  ];
}
