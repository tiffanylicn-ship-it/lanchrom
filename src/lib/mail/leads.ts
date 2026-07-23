import { classifyInquiry } from "@/lib/inquiries/classify";
import type { QuoteRequestForm, SampleRequestForm } from "@/types";
import { sendViaSmtp } from "./smtp";

const DEFAULT_INQUIRY_EMAIL = "info@lanchrom.com";

function escapeHtml(value: string | undefined) {
  return (value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value?: string) {
  return `<tr><td style="padding:8px 12px;background:#f8fafc;font-weight:700;color:#334155;border:1px solid #e2e8f0;width:34%">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#0f172a;border:1px solid #e2e8f0">${escapeHtml(value || "-")}</td></tr>`;
}

function getInquiryRecipient() {
  return process.env.INQUIRY_NOTIFICATION_EMAIL || DEFAULT_INQUIRY_EMAIL;
}

function subjectPrefix(
  type: "QUOTE" | "SAMPLE",
  classification: ReturnType<typeof classifyInquiry>
) {
  return `[LANCHROM][${type}][${classification.priority}][${classification.productCategory}][${classification.region}]`;
}

function inquiryHeaders(
  type: "QUOTE" | "SAMPLE",
  classification: ReturnType<typeof classifyInquiry>
) {
  return {
    "X-LANCHROM-Inquiry-Type": type,
    "X-LANCHROM-Priority": classification.priority,
    "X-LANCHROM-Product-Category": classification.productCategory,
    "X-LANCHROM-Region": classification.region,
    "X-LANCHROM-Tags": classification.tags.join(","),
  };
}

export function quoteLeadText(form: QuoteRequestForm) {
  const classification = classifyInquiry(form);
  return `New Quote Request from LANCHROM Website

Priority: ${classification.priority}
Tags: ${classification.tags.join(", ")}

Name: ${form.firstName} ${form.lastName}
Email: ${form.email}
Company: ${form.company}
Country: ${form.country}
Phone: ${form.phone || "-"}
Product: ${form.productOfInterest}
Grade: ${form.gradeRequired}
Packaging: ${form.packagingSize}
Quantity: ${form.quantity}
Annual Volume: ${form.annualVolume}
Target Delivery: ${form.targetDelivery || "-"}
Source URL: ${form.sourceUrl || "-"}

Notes:
${form.notes || "-"}`;
}

export function quoteLeadHtml(form: QuoteRequestForm) {
  const classification = classifyInquiry(form);
  return `<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#0f172a">
    <div style="background:#003D91;color:white;padding:20px 24px;border-radius:12px 12px 0 0">
      <h2 style="margin:0;font-size:20px">New Quote Request</h2>
      <p style="margin:6px 0 0;color:#dbeafe;font-size:13px">Priority: ${classification.priority} | Tags: ${escapeHtml(classification.tags.join(", "))}</p>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px">${row("Name", `${form.firstName} ${form.lastName}`)}${row("Email", form.email)}${row("Company", form.company)}${row("Country", form.country)}${row("Phone", form.phone)}${row("Product", form.productOfInterest)}${row("Grade", form.gradeRequired)}${row("Packaging", form.packagingSize)}${row("Quantity", form.quantity)}${row("Annual Volume", form.annualVolume)}${row("Target Delivery", form.targetDelivery)}${row("Source URL", form.sourceUrl)}${row("Notes", form.notes)}</table>
    <div style="background:#f8fafc;padding:14px 18px;border-radius:0 0 12px 12px;color:#64748b;font-size:12px">Reply directly to this email to contact the customer.</div>
  </div>`;
}

export async function sendQuoteLeadNotification(form: QuoteRequestForm) {
  const classification = classifyInquiry(form);
  return sendViaSmtp({
    to: getInquiryRecipient(),
    subject: `${subjectPrefix("QUOTE", classification)} ${form.company} | ${form.productOfInterest}`,
    text: quoteLeadText(form),
    html: quoteLeadHtml(form),
    replyTo: form.email,
    headers: inquiryHeaders("QUOTE", classification),
  });
}

export async function sendQuoteAutoReply(form: QuoteRequestForm) {
  return sendViaSmtp({
    to: form.email,
    subject: `LANCHROM quote request received | ${form.productOfInterest}`,
    text: `Dear ${form.firstName},

Thank you for your quote request for ${form.productOfInterest}.

Our team has received your inquiry and will review the grade, packaging, quantity, and delivery requirements. We normally respond within 1 business day.

Best regards,
LANCHROM Team
${DEFAULT_INQUIRY_EMAIL}`,
    html: `<div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;color:#0f172a"><h2 style="color:#003D91">Quote request received</h2><p>Dear ${escapeHtml(form.firstName)},</p><p>Thank you for your quote request for <strong>${escapeHtml(form.productOfInterest)}</strong>.</p><p>Our team has received your inquiry and will review the grade, packaging, quantity, and delivery requirements. We normally respond within <strong>1 business day</strong>.</p><p>Best regards,<br/>LANCHROM Team<br/>${DEFAULT_INQUIRY_EMAIL}</p></div>`,
    replyTo: getInquiryRecipient(),
  });
}

export function sampleLeadText(form: SampleRequestForm) {
  const classification = classifyInquiry(form);
  return `New Sample Request from LANCHROM Website

Priority: ${classification.priority}
Tags: ${classification.tags.join(", ")}

Name: ${form.firstName} ${form.lastName}
Email: ${form.email}
Company: ${form.company}
Country: ${form.country}
Phone: ${form.phone || "-"}
Product: ${form.productOfInterest}
Grade: ${form.gradeRequired}
Sample Size: ${form.packagingSize}
Purpose: ${form.samplePurpose}
Annual Volume: ${form.annualVolume}
Current Supplier: ${form.currentSupplier || "-"}
Source URL: ${form.sourceUrl || "-"}

Notes:
${form.notes || "-"}`;
}

export function sampleLeadHtml(form: SampleRequestForm) {
  const classification = classifyInquiry(form);
  return `<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#0f172a">
    <div style="background:#087f76;color:white;padding:20px 24px;border-radius:12px 12px 0 0">
      <h2 style="margin:0;font-size:20px">New Sample Request</h2>
      <p style="margin:6px 0 0;color:#ccfbf1;font-size:13px">Priority: ${classification.priority} | Tags: ${escapeHtml(classification.tags.join(", "))}</p>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px">${row("Name", `${form.firstName} ${form.lastName}`)}${row("Email", form.email)}${row("Company", form.company)}${row("Country", form.country)}${row("Phone", form.phone)}${row("Product", form.productOfInterest)}${row("Grade", form.gradeRequired)}${row("Sample Size", form.packagingSize)}${row("Purpose", form.samplePurpose)}${row("Annual Volume", form.annualVolume)}${row("Current Supplier", form.currentSupplier)}${row("Source URL", form.sourceUrl)}${row("Notes", form.notes)}</table>
    <div style="background:#f8fafc;padding:14px 18px;border-radius:0 0 12px 12px;color:#64748b;font-size:12px">Reply directly to this email to contact the customer.</div>
  </div>`;
}

export async function sendSampleLeadNotification(form: SampleRequestForm) {
  const classification = classifyInquiry(form);
  return sendViaSmtp({
    to: getInquiryRecipient(),
    subject: `${subjectPrefix("SAMPLE", classification)} ${form.company} | ${form.productOfInterest}`,
    text: sampleLeadText(form),
    html: sampleLeadHtml(form),
    replyTo: form.email,
    headers: inquiryHeaders("SAMPLE", classification),
  });
}

export async function sendSampleAutoReply(form: SampleRequestForm) {
  return sendViaSmtp({
    to: form.email,
    subject: `LANCHROM sample request received | ${form.productOfInterest}`,
    text: `Dear ${form.firstName},

Thank you for requesting a sample of ${form.productOfInterest}.

Our team will check the requested grade, sample size, application, and shipping requirements. We normally respond within 1 business day.

Best regards,
LANCHROM Team
${DEFAULT_INQUIRY_EMAIL}`,
    html: `<div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;color:#0f172a"><h2 style="color:#087f76">Sample request received</h2><p>Dear ${escapeHtml(form.firstName)},</p><p>Thank you for requesting a sample of <strong>${escapeHtml(form.productOfInterest)}</strong>.</p><p>Our team will check the requested grade, sample size, application, and shipping requirements. We normally respond within <strong>1 business day</strong>.</p><p>Best regards,<br/>LANCHROM Team<br/>${DEFAULT_INQUIRY_EMAIL}</p></div>`,
    replyTo: getInquiryRecipient(),
  });
}
