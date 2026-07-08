import { NextRequest, NextResponse } from "next/server";
import { verifyRecaptcha } from "@/lib/recaptcha/verify";
import { processQuoteRequest } from "@/lib/hubspot/client";
import { sendQuoteAutoReply, sendQuoteLeadNotification } from "@/lib/mail/leads";
import type { QuoteRequestForm } from "@/types";

export const runtime = "nodejs";

function validateQuote(form: QuoteRequestForm) {
  const required: Array<keyof QuoteRequestForm> = [
    "firstName",
    "lastName",
    "email",
    "company",
    "country",
    "productOfInterest",
    "gradeRequired",
    "packagingSize",
    "quantity",
    "annualVolume",
  ];

  const missing = required.filter(key => !String(form[key] || "").trim());
  return missing;
}

export async function POST(request: NextRequest) {
  try {
    const body: QuoteRequestForm = await request.json();
    const missing = validateQuote(body);

    if (missing.length > 0) {
      return NextResponse.json(
        { success: false, message: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    if (body.recaptchaToken) {
      const captcha = await verifyRecaptcha(body.recaptchaToken);
      if (!captcha.valid) {
        return NextResponse.json({ success: false, message: "Security check failed" }, { status: 400 });
      }
    }

    let crmData: { contactId?: string; dealId?: string; isPriority?: boolean } = {};
    try {
      crmData = await processQuoteRequest(body);
    } catch (error) {
      console.warn("HubSpot quote processing skipped/failed:", error);
    }

    const mailResults = await Promise.allSettled([
      sendQuoteLeadNotification(body),
      sendQuoteAutoReply(body),
    ]);

    const leadNotification = mailResults[0];
    const leadMailConfigured = leadNotification.status === "fulfilled" && leadNotification.value?.configured !== false;
    if (!leadMailConfigured) {
      console.error("Quote lead notification not delivered:", mailResults);
      return NextResponse.json(
        { success: false, message: "Website email is not configured yet. Set ZOHO_EMAIL, ZOHO_APP_PASSWORD, FROM_EMAIL, and NOTIFICATION_EMAIL in .env.local." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Quote request received. Our team will respond within 1 business day.",
      data: crmData,
    });
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
