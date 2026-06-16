import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedRoles = new Set(["Seller", "Creator", "Future Shopper", "Partner", "Investor", "Other"]);

function text(value, maxLength = 500) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function safeLeadSummary(payload) {
  const [, domain = "unknown"] = payload.work_email.split("@");
  return {
    email_domain: domain,
    country: payload.country || null,
    role: payload.role || null,
    source: payload.source
  };
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (text(body.companyWebsite, 200)) {
    return NextResponse.json({ ok: false, error: "Unable to process request." }, { status: 400 });
  }

  const name = text(body.name, 120);
  const workEmail = text(body.workEmail, 180).toLowerCase();
  const role = text(body.role, 40);

  if (!name) {
    return NextResponse.json({ ok: false, error: "Name is required." }, { status: 422 });
  }

  if (!emailPattern.test(workEmail)) {
    return NextResponse.json({ ok: false, error: "Enter a valid work email." }, { status: 422 });
  }

  if (role && !allowedRoles.has(role)) {
    return NextResponse.json({ ok: false, error: "Select a valid role." }, { status: 422 });
  }

  const payload = {
    name,
    work_email: workEmail,
    company_name: text(body.companyName, 160) || null,
    country: text(body.country, 120) || null,
    social_profile_url: text(body.socialProfileUrl, 260) || null,
    role: role || null,
    message: text(body.message, 1200) || null,
    locale: text(body.locale, 10) || "en",
    source: "tomnap_landing",
    user_agent: text(request.headers.get("user-agent"), 500) || null
  };

  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (supabaseUrl && serviceRoleKey) {
    const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/early_access_leads`, {
      method: "POST",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      console.error("Early access Supabase insert failed", {
        status: response.status,
        statusText: response.statusText
      });
      return NextResponse.json({ ok: false, error: "Unable to save request right now." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, stored: true });
  }

  if (process.env.NODE_ENV === "production") {
    console.error("Early access Supabase configuration is missing in production", safeLeadSummary(payload));
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to save request right now. Please contact hello@tomnap.com."
      },
      { status: 503 }
    );
  }

  console.info("Early access lead received in development without Supabase configuration", safeLeadSummary(payload));
  return NextResponse.json({ ok: true, stored: false, developmentFallback: true });
}
