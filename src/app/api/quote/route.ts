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
    let crmSynced = false;
    try {
      crmData = await processQuoteRequest(body);
      crmSynced = Boolean(crmData.contactId);
    } catch (error) {
      console.warn("HubSpot quote processing skipped/failed:", error);
    }

    let emailDelivered = false;
    try {
      const notification = await sendQuoteLeadNotification(body);
      emailDelivered = notification.delivered;
      if (emailDelivered) {
        sendQuoteAutoReply(body).catch(error => {
          console.warn("Quote auto-reply failed:", error);
        });
      }
    } catch (error) {
      console.error("Quote lead notification failed:", error);
    }

    if (!emailDelivered && !crmSynced) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Inquiry service is temporarily unavailable. Please email info@lanchrom.com.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Quote request received. Our team will respond within 1 business day.",
      data: {
        ...crmData,
        delivery: {
          email: emailDelivered,
          hubspot: crmSynced,
        },
      },
    });
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
