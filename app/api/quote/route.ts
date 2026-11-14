import { NextResponse } from "next/server";

type QuotePayload = {
  name?: string; company?: string; email?: string; phone?: string;
  product?: string; quantity?: string; dimensions?: string; message?: string;
  consent?: boolean;
};

export async function POST(request: Request) {
  let body: QuotePayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit a valid enquiry." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const company = String(body.company ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const product = String(body.product ?? "").trim();
  const quantity = String(body.quantity ?? "").trim();
  const dimensions = String(body.dimensions ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      phone.length < 8 || !product || body.consent !== true) {
    return NextResponse.json({ error: "Please complete the required fields and consent checkbox." }, { status: 400 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    return NextResponse.json({
      error: "The enquiry form is ready, but lead storage has not been configured yet. Please contact the business directly or configure Supabase before publishing."
    }, { status: 503 });
  }

  const response = await fetch(`${url}/rest/v1/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: key,
      Authorization: `Bearer ${key}`,
      Prefer: "return=minimal"
    },
    body: JSON.stringify({
      name, company, email, phone, product, quantity, dimensions, message,
      consent: true, source: "website"
    }),
    cache: "no-store"
  });

  if (!response.ok) {
    return NextResponse.json({ error: "We could not save your enquiry right now. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
