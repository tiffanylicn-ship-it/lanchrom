import { sendViaSmtp } from "./smtp";
import type { QuoteRequestForm } from "@/types";

function escapeHtml(value: string | undefined) {
  return (value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;");
}

function row(label: string, value?: string) {
  return `<tr><td style="padding:8px 12px;background:#f8fafc;font-weight:700;color:#334155;border:1px solid #e2e8f0;width:34%">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#0f172a;border:1px solid #e2e8f0">${escapeHtml(value || "-")}</td></tr>`;
}

export function quoteLeadText(form: QuoteRequestForm) {
  return `New Quote Request from LANCHROM Website\n\nName: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nCompany: ${form.company}\nCountry: ${form.country}\nPhone: ${form.phone || "-"}\nProduct: ${form.productOfInterest}\nGrade: ${form.gradeRequired}\nPackaging: ${form.packagingSize}\nQuantity: ${form.quantity}\nAnnual Volume: ${form.annualVolume}\nTarget Delivery: ${form.targetDelivery || "-"}\nSource Product: ${form.sourceProduct || "-"}\n\nNotes:\n${form.notes || "-"}`;
}

export function quoteLeadHtml(form: QuoteRequestForm) {
  return `<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#0f172a">
    <div style="background:#003D91;color:white;padding:20px 24px;border-radius:12px 12px 0 0">
      <h2 style="margin:0;font-size:20px">New Quote Request</h2>
      <p style="margin:6px 0 0;color:#dbeafe;font-size:13px">LANCHROM website inquiry</p>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px">${row("Name", `${form.firstName} ${form.lastName}`)}${row("Email", form.email)}${row("Company", form.company)}${row("Country", form.country)}${row("Phone", form.phone)}${row("Product", form.productOfInterest)}${row("Grade", form.gradeRequired)}${row("Packaging", form.packagingSize)}${row("Quantity", form.quantity)}${row("Annual Volume", form.annualVolume)}${row("Target Delivery", form.targetDelivery)}${row("Source Product", form.sourceProduct)}${row("Notes", form.notes)}</table>
    <div style="background:#f8fafc;padding:14px 18px;border-radius:0 0 12px 12px;color:#64748b;font-size:12px">Reply directly to this email to contact the customer.</div>
  </div>`;
}

export async function sendQuoteLeadNotification(form: QuoteRequestForm) {
  const notifyTo = process.env.NOTIFICATION_EMAIL || process.env.ZOHO_EMAIL || process.env.FROM_EMAIL;
  if (!notifyTo) {
    console.warn("No NOTIFICATION_EMAIL configured for quote lead notification.");
    return { configured: false };
  }

  return sendViaSmtp({
    to: notifyTo,
    subject: `[LANCHROM Quote] ${form.company} — ${form.productOfInterest}`,
    text: quoteLeadText(form),
    html: quoteLeadHtml(form),
    replyTo: form.email,
  });
}

export async function sendQuoteAutoReply(form: QuoteRequestForm) {
  return sendViaSmtp({
    to: form.email,
    subject: `Quote Request Received — ${form.productOfInterest}`,
    text: `Dear ${form.firstName},\n\nThank you for your quote request for ${form.productOfInterest}.\n\nOur team has received your inquiry and will review the grade, packaging, and quantity requirements. We normally respond within 1 business day.\n\nBest regards,\nLANCHROM Team`,
    html: `<div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;color:#0f172a"><h2 style="color:#003D91">Quote request received</h2><p>Dear ${escapeHtml(form.firstName)},</p><p>Thank you for your quote request for <strong>${escapeHtml(form.productOfInterest)}</strong>.</p><p>Our team has received your inquiry and will review the grade, packaging, and quantity requirements. We normally respond within <strong>1 business day</strong>.</p><p>Best regards,<br/>LANCHROM Team</p></div>`,
  });
}
