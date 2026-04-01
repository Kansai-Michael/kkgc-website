import { NextRequest, NextResponse } from "next/server";

// TODO: Set this environment variable in Vercel dashboard
// NEXT_PUBLIC_N8N_WEBHOOK_URL=https://michael-kansai.app.n8n.cloud/webhook/kkgc-lead
const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || "";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, program, message } = body;

  if (!name || !email || !phone || !program) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Forward to n8n webhook
  if (N8N_WEBHOOK_URL) {
    try {
      await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "kkgc-website",
          name,
          email,
          phone,
          program,
          message: message || "",
          submitted_at: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error("Failed to send to n8n:", err);
      // Don't fail the user-facing response if n8n is down
    }
  }

  return NextResponse.json({ success: true });
}
