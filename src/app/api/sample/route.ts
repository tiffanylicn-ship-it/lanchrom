import { NextRequest, NextResponse } from "next/server";
import { verifyRecaptcha } from "@/lib/recaptcha/verify";
import { processSampleRequest } from "@/lib/hubspot/client";
import { sendSampleConfirmation, sendSampleNotification } from "@/lib/resend/email";
import type { SampleRequestForm } from "@/types";

const PRIORITY_VOLUMES = ["$50,000 – $200,000 / year", "> $200,000 / year"];

export async function POST(request: NextRequest) {
  try {
    const body: SampleRequestForm = await request.json();
    const captcha = await verifyRecaptcha(body.recaptchaToken);
    if (!captcha.valid) return NextResponse.json({ success: false, message: "Security check failed" }, { status: 400 });
    if (!body.email || !body.company || !body.firstName) return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });

    // CRM sync is a nice-to-have, not a precondition for accepting a lead —
    // an unconfigured or unreachable HubSpot integration shouldn't turn a
    // valid sample request into a hard failure for the visitor.
    let contactId: string | undefined;
    let dealId: string | undefined;
    let isPriority = PRIORITY_VOLUMES.includes(body.annualVolume);
    try {
      const result = await processSampleRequest(body);
      contactId = result.contactId;
      dealId = result.dealId;
      isPriority = result.isPriority;
    } catch (error) {
      console.warn("HubSpot sample processing skipped/failed:", error);
    }

    await Promise.allSettled([
      sendSampleConfirmation({ firstName: body.firstName, email: body.email, company: body.company, product: body.productOfInterest, grade: body.gradeRequired, packaging: body.packagingSize }),
      sendSampleNotification({ firstName: body.firstName, lastName: body.lastName, email: body.email, company: body.company, country: body.country, product: body.productOfInterest, grade: body.gradeRequired, packaging: body.packagingSize, purpose: body.samplePurpose, volume: body.annualVolume, isPriority, notes: body.notes }),
    ]);
    return NextResponse.json({ success: true, message: "Sample request received. We will respond within 1 business day.", data: { contactId, dealId } });
  } catch (error) {
    console.error("Sample API error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
