import { NextRequest, NextResponse } from "next/server";
import { verifyRecaptcha } from "@/lib/recaptcha/verify";
import { processOEMQuote } from "@/lib/hubspot/client";
import {
  sendOEMAutoReply,
  sendOEMLeadNotification,
} from "@/lib/mail/leads";
import type { OEMQuoteForm } from "@/types";

function validateOEMQuote(form: OEMQuoteForm) {
  const requiredTextFields: Array<keyof OEMQuoteForm> = [
    "product",
    "grade",
    "bottleType",
    "volumePerUnit",
    "labelType",
    "labelLanguage",
    "coaHeader",
    "destinationCountry",
    "incoterms",
    "targetTimeline",
    "company",
    "email",
    "firstName",
    "lastName",
  ];
  const missing = requiredTextFields.filter(
    key => !String(form[key] || "").trim(),
  );

  if (!Number.isFinite(Number(form.unitsPerOrder)) || Number(form.unitsPerOrder) < 1) {
    missing.push("unitsPerOrder");
  }
  if (!Array.isArray(form.sdsFormat)) missing.push("sdsFormat");
  if (!Array.isArray(form.additionalDocs)) missing.push("additionalDocs");

  return Array.from(new Set(missing));
}

export async function POST(request: NextRequest) {
  try {
    const body: OEMQuoteForm = await request.json();
    const missing = validateOEMQuote(body);

    if (missing.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Missing required fields: ${missing.join(", ")}`,
        },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { success: false, message: "A valid business email is required." },
        { status: 400 },
      );
    }

    const captcha = await verifyRecaptcha(body.recaptchaToken);
    if (!captcha.valid) return NextResponse.json({ success: false, message: "Security check failed" }, { status: 400 });

    let contactId: string | undefined;
    let dealId: string | undefined;
    let isPriority = body.unitsPerOrder >= 500;
    try {
      const result = await processOEMQuote(body);
      contactId = result.contactId;
      dealId = result.dealId;
      isPriority = result.isPriority;
    } catch (error) {
      console.warn("HubSpot OEM quote processing skipped/failed:", error);
    }

    const notification = await sendOEMLeadNotification(body, isPriority);
    const crmSynced = Boolean(contactId);

    if (!notification.delivered && !crmSynced) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Inquiry service is temporarily unavailable. Please email info@lanchrom.com.",
        },
        { status: 503 },
      );
    }

    const confirmation = await sendOEMAutoReply(body);

    return NextResponse.json({
      success: true,
      message:
        "OEM quote request received. We will prepare a detailed quote within 2 business days.",
      data: {
        contactId,
        dealId,
        delivery: {
          email: notification.delivered,
          confirmation: confirmation.delivered,
          hubspot: crmSynced,
        },
      },
    });
  } catch (error) {
    console.error("OEM quote API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
