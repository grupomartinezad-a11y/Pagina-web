import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  subject?: string;
  message?: string;
};

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 },
    );
  }

  const name = (body.name ?? "").toString().trim();
  const email = (body.email ?? "").toString().trim();
  const message = (body.message ?? "").toString().trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email" },
      { status: 400 },
    );
  }

  // TODO: Connect a real email/CRM provider (e.g. Resend, SendGrid, HubSpot)
  // For now we just acknowledge the submission so the UI can show the
  // required success message: "Thank you! We will contact you shortly."
  console.log("[contact] new submission", {
    name,
    email,
    phone: body.phone,
    address: body.address,
    subject: body.subject,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    ok: true,
    message: "Thank you! We will contact you shortly.",
  });
}
