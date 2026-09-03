import { NextRequest, NextResponse } from "next/server";

import { sanitizeAttribution } from "@/lib/leadAttribution";

const KIHON_API_URL = "https://app.kihonsoft.au/api/leads/inbound";
const KIHON_API_KEY = process.env.KIHON_API_KEY || "";

// Maps the program value from the form to the source label expected by Kihon
const SOURCE_MAP: Record<string, string> = {
  cubs: "website-cubs",
  "little-lions": "website-little-lions",
  juniors: "website-juniors",
  teens: "website-teens-adults",
  adults: "website-teens-adults",
  general: "website-general",
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, program, attribution } = body;

  if (!name || !email || !phone || !program) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const [first_name, ...rest] = (name as string).trim().split(" ");
  const last_name = rest.join(" ");
  const source = SOURCE_MAP[program] ?? "website-general";
  const cleanAttribution = sanitizeAttribution(attribution);

  try {
    const res = await fetch(KIHON_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": KIHON_API_KEY,
      },
      body: JSON.stringify({
        email,
        phone,
        first_name,
        last_name,
        source,
        ...(cleanAttribution ? { attribution: cleanAttribution } : {}),
      }),
    });

    if (!res.ok) {
      console.error("Kihon API error:", res.status, await res.text());
      return NextResponse.json({ error: "Submission failed" }, { status: 500 });
    }
  } catch (err) {
    console.error("Failed to reach Kihon:", err);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
