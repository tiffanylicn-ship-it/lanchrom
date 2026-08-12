import { NextRequest, NextResponse } from "next/server";
import { verifyRecaptcha } from "@/lib/recaptcha/verify";
import { processDownloadRequest } from "@/lib/hubspot/client";
import { sendDownloadLink } from "@/lib/resend/email";

export async function POST(request: NextRequest) {
  try {
    const { email, company, productSlug, productName, recaptchaToken } = await request.json();
    const captcha = await verifyRecaptcha(recaptchaToken);
    if (!captcha.valid) return NextResponse.json({ success: false, message: "Security check failed" }, { status: 400 });
    await Promise.allSettled([
      processDownloadRequest(email, company, productSlug, "coa"),
      sendDownloadLink(email, productName, "CoA"),
    ]);
    return NextResponse.json({ success: true, message: "Our team will send you the CoA within 1 business day." });
  } catch {
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
