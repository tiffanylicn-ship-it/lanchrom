import { NextRequest, NextResponse } from "next/server";
import { verifyRecaptcha } from "@/lib/recaptcha/verify";
import { processOEMQuote } from "@/lib/hubspot/client";
import { sendOEMNotification } from "@/lib/resend/email";
import type { OEMQuoteForm } from "@/types";

export async function POST(request: NextRequest) {
  try {
    const body: OEMQuoteForm = await request.json();
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

    await sendOEMNotification({ firstName: body.firstName, lastName: body.lastName, email: body.email, company: body.company, product: body.product, grade: body.grade, bottleType: body.bottleType, volumePerUnit: body.volumePerUnit, unitsPerOrder: body.unitsPerOrder, labelType: body.labelType, destinationCountry: body.destinationCountry, incoterms: body.incoterms, isPriority });
    return NextResponse.json({ success: true, message: "OEM quote request received. We will prepare a detailed quote within 2 business days.", data: { contactId, dealId } });
  } catch { return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 }); }
}
