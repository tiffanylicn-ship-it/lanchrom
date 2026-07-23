import { NextRequest, NextResponse } from "next/server";
import { processSampleRequest } from "@/lib/hubspot/client";
import {
  sendSampleAutoReply,
  sendSampleLeadNotification,
} from "@/lib/mail/leads";
import { verifyRecaptcha } from "@/lib/recaptcha/verify";
import type { SampleRequestForm } from "@/types";

export const runtime = "nodejs";

function validateSample(form: SampleRequestForm) {
  const required: Array<keyof SampleRequestForm> = [
    "firstName",
    "lastName",
    "email",
    "company",
    "country",
    "productOfInterest",
    "gradeRequired",
    "packagingSize",
    "samplePurpose",
    "annualVolume",
  ];

  return required.filter(key => !String(form[key] || "").trim());
}

export async function POST(request: NextRequest) {
  try {
    const body: SampleRequestForm = await request.json();
    const missing = validateSample(body);

    if (missing.length > 0) {
      return NextResponse.json(
        { success: false, message: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    if (body.recaptchaToken) {
      const captcha = await verifyRecaptcha(body.recaptchaToken);
      if (!captcha.valid) {
        return NextResponse.json(
          { success: false, message: "Security check failed" },
          { status: 400 }
        );
      }
    }

    let contactId: string | undefined;
    let dealId: string | undefined;
    let isPriority = false;
    let crmSynced = false;

    try {
      const result = await processSampleRequest(body);
      contactId = result.contactId;
      dealId = result.dealId;
      isPriority = result.isPriority;
      crmSynced = Boolean(contactId);
    } catch (error) {
      console.warn("HubSpot sample processing skipped/failed:", error);
    }

    let emailDelivered = false;
    try {
      const notification = await sendSampleLeadNotification(body);
      emailDelivered = notification.delivered;
      if (emailDelivered) {
        sendSampleAutoReply(body).catch(error => {
          console.warn("Sample auto-reply failed:", error);
        });
      }
    } catch (error) {
      console.error("Sample lead notification failed:", error);
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
      message: "Sample request received. We will respond within 1 business day.",
      data: {
        contactId,
        dealId,
        isPriority,
        delivery: {
          email: emailDelivered,
          hubspot: crmSynced,
        },
      },
    });
  } catch (error) {
    console.error("Sample API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
