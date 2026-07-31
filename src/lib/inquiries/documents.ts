import { NextRequest, NextResponse } from "next/server";
import { processDownloadRequest } from "@/lib/hubspot/client";
import {
  sendDocumentAutoReply,
  sendDocumentLeadNotification,
  type DocumentRequest,
} from "@/lib/mail/leads";
import { verifyRecaptcha } from "@/lib/recaptcha/verify";

type DocumentRequestBody = Partial<DocumentRequest> & {
  recaptchaToken?: string;
};

const DOCUMENT_TYPES = new Set<DocumentRequest["fileType"]>([
  "coa",
  "tds",
  "sds",
]);

function clean(value: unknown, maxLength = 300) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function handleDocumentRequest(
  request: NextRequest,
  forcedFileType?: DocumentRequest["fileType"],
) {
  try {
    const body = (await request.json()) as DocumentRequestBody;
    const email = clean(body.email).toLowerCase();
    const company = clean(body.company);
    const productName = clean(body.productName);
    const productSlug = clean(body.productSlug);
    const sourceUrl = clean(body.sourceUrl, 1000);
    const fileType = forcedFileType || body.fileType;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "A valid business email is required." },
        { status: 400 },
      );
    }

    if (!company || !productName || !fileType || !DOCUMENT_TYPES.has(fileType)) {
      return NextResponse.json(
        {
          success: false,
          message: "Company, product, and document type are required.",
        },
        { status: 400 },
      );
    }

    const captcha = await verifyRecaptcha(clean(body.recaptchaToken, 4000));
    if (!captcha.valid) {
      return NextResponse.json(
        { success: false, message: "Security check failed." },
        { status: 400 },
      );
    }

    const form: DocumentRequest = {
      email,
      company,
      productName,
      productSlug,
      fileType,
      sourceUrl,
    };

    await processDownloadRequest(
      email,
      company,
      productSlug || productName,
      fileType,
    );

    const notification = await sendDocumentLeadNotification(form);
    if (!notification.delivered) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Document request service is temporarily unavailable. Please email info@lanchrom.com.",
        },
        { status: 503 },
      );
    }

    const confirmation = await sendDocumentAutoReply(form);

    return NextResponse.json({
      success: true,
      message: `Your ${fileType.toUpperCase()} request was received. Our team will respond within 1 business day.`,
      data: {
        delivery: {
          notification: true,
          confirmation: confirmation.delivered,
        },
      },
    });
  } catch (error) {
    console.error("Document request API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 },
    );
  }
}
