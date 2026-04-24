import { NextRequest, NextResponse } from "next/server";

const KIHON_API_URL = "https://app.kihonsoft.au/api/leads/inbound";
const KIHON_API_KEY = process.env.KIHON_API_KEY || "";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { first_name, last_name, email, phone, referred_by } = body;

  if (!email || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const payload: Record<string, string> = {
    email,
    phone,
    first_name: first_name || "",
    last_name: last_name || "",
    source: "website-referral",
  };

  if (referred_by) {
    payload.notes = `Referred by existing student: ${referred_by}`;
  }

  try {
    const res = await fetch(KIHON_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": KIHON_API_KEY,
      },
      body: JSON.stringify(payload),
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
