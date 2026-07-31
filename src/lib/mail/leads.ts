import { classifyInquiry } from "@/lib/inquiries/classify";
import type { OEMQuoteForm, QuoteRequestForm, SampleRequestForm } from "@/types";
import { sendTransactionalEmail } from "./smtp";

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
    "X-LANCHROM-Search-Keywords": classification.searchKeywords.join(","),
  };
}

function classifyQuote(form: QuoteRequestForm) {
  return classifyInquiry({
    ...form,
    notes: `Quote request ${form.notes || ""}`,
  });
}

function classifySample(form: SampleRequestForm) {
  return classifyInquiry({
    ...form,
    notes: `Sample request ${form.notes || ""}`,
  });
}

export function quoteLeadText(form: QuoteRequestForm) {
  const classification = classifyQuote(form);
  return `New Quote Request from LANCHROM Website

Priority: ${classification.priority}
Tags: ${classification.tags.join(", ")}
Search Keywords: ${classification.searchKeywords.join(", ")}

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
  const classification = classifyQuote(form);
  return `<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#0f172a">
    <div style="background:#003D91;color:white;padding:20px 24px;border-radius:12px 12px 0 0">
      <h2 style="margin:0;font-size:20px">New Quote Request</h2>
      <p style="margin:6px 0 0;color:#dbeafe;font-size:13px">Priority: ${classification.priority} | Tags: ${escapeHtml(classification.tags.join(", "))}</p>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px">${row("Search Keywords", classification.searchKeywords.join(", "))}${row("Name", `${form.firstName} ${form.lastName}`)}${row("Email", form.email)}${row("Company", form.company)}${row("Country", form.country)}${row("Phone", form.phone)}${row("Product", form.productOfInterest)}${row("Grade", form.gradeRequired)}${row("Packaging", form.packagingSize)}${row("Quantity", form.quantity)}${row("Annual Volume", form.annualVolume)}${row("Target Delivery", form.targetDelivery)}${row("Source URL", form.sourceUrl)}${row("Notes", form.notes)}</table>
    <div style="background:#f8fafc;padding:14px 18px;border-radius:0 0 12px 12px;color:#64748b;font-size:12px">Reply directly to this email to contact the customer.</div>
  </div>`;
}

export async function sendQuoteLeadNotification(form: QuoteRequestForm) {
  const classification = classifyQuote(form);
  return sendTransactionalEmail({
    to: getInquiryRecipient(),
    subject: `${subjectPrefix("QUOTE", classification)} ${form.company} | ${form.productOfInterest}`,
    text: quoteLeadText(form),
    html: quoteLeadHtml(form),
    replyTo: form.email,
    headers: inquiryHeaders("QUOTE", classification),
  });
}

export async function sendQuoteAutoReply(form: QuoteRequestForm) {
  return sendTransactionalEmail({
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
  const classification = classifySample(form);
  return `New Sample Request from LANCHROM Website

Priority: ${classification.priority}
Tags: ${classification.tags.join(", ")}
Search Keywords: ${classification.searchKeywords.join(", ")}

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
  const classification = classifySample(form);
  return `<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#0f172a">
    <div style="background:#087f76;color:white;padding:20px 24px;border-radius:12px 12px 0 0">
      <h2 style="margin:0;font-size:20px">New Sample Request</h2>
      <p style="margin:6px 0 0;color:#ccfbf1;font-size:13px">Priority: ${classification.priority} | Tags: ${escapeHtml(classification.tags.join(", "))}</p>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px">${row("Search Keywords", classification.searchKeywords.join(", "))}${row("Name", `${form.firstName} ${form.lastName}`)}${row("Email", form.email)}${row("Company", form.company)}${row("Country", form.country)}${row("Phone", form.phone)}${row("Product", form.productOfInterest)}${row("Grade", form.gradeRequired)}${row("Sample Size", form.packagingSize)}${row("Purpose", form.samplePurpose)}${row("Annual Volume", form.annualVolume)}${row("Current Supplier", form.currentSupplier)}${row("Source URL", form.sourceUrl)}${row("Notes", form.notes)}</table>
    <div style="background:#f8fafc;padding:14px 18px;border-radius:0 0 12px 12px;color:#64748b;font-size:12px">Reply directly to this email to contact the customer.</div>
  </div>`;
}

export async function sendSampleLeadNotification(form: SampleRequestForm) {
  const classification = classifySample(form);
  return sendTransactionalEmail({
    to: getInquiryRecipient(),
    subject: `${subjectPrefix("SAMPLE", classification)} ${form.company} | ${form.productOfInterest}`,
    text: sampleLeadText(form),
    html: sampleLeadHtml(form),
    replyTo: form.email,
    headers: inquiryHeaders("SAMPLE", classification),
  });
}

export async function sendSampleAutoReply(form: SampleRequestForm) {
  return sendTransactionalEmail({
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

export type DocumentRequest = {
  email: string;
  company: string;
  productName: string;
  productSlug?: string;
  fileType: "coa" | "tds" | "sds";
  sourceUrl?: string;
};

function documentLabel(fileType: DocumentRequest["fileType"]) {
  if (fileType === "coa") return "Certificate of Analysis (CoA)";
  if (fileType === "tds") return "Technical Data Sheet (TDS)";
  return "Safety Data Sheet (SDS)";
}

export async function sendDocumentLeadNotification(form: DocumentRequest) {
  const label = documentLabel(form.fileType);
  const classification = classifyInquiry({
    productOfInterest: form.productName,
    notes: `${label} ${form.fileType} document request`,
  });
  return sendTransactionalEmail({
    to: getInquiryRecipient(),
    subject: `[LANCHROM][DOCUMENT][${form.fileType.toUpperCase()}][${classification.productCategory}] ${form.company} | ${form.productName}`,
    text: `New document request from the LANCHROM website

Document: ${label}
Category: ${classification.productCategory}
Tags: ${classification.tags.join(", ")}
Search Keywords: ${classification.searchKeywords.join(", ")}
Product: ${form.productName}
Product slug: ${form.productSlug || "-"}
Company: ${form.company}
Email: ${form.email}
Source URL: ${form.sourceUrl || "-"}`,
    html: `<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#0f172a">
      <div style="background:#0A514C;color:white;padding:20px 24px;border-radius:12px 12px 0 0">
        <h2 style="margin:0;font-size:20px">New Document Request</h2>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px">${row("Document", label)}${row("Category", classification.productCategory)}${row("Tags", classification.tags.join(", "))}${row("Search Keywords", classification.searchKeywords.join(", "))}${row("Product", form.productName)}${row("Product slug", form.productSlug)}${row("Company", form.company)}${row("Email", form.email)}${row("Source URL", form.sourceUrl)}</table>
      <div style="background:#f8fafc;padding:14px 18px;border-radius:0 0 12px 12px;color:#64748b;font-size:12px">Reply directly to this email to contact the requester.</div>
    </div>`,
    replyTo: form.email,
    headers: {
      "X-LANCHROM-Inquiry-Type": "DOCUMENT",
      "X-LANCHROM-Document-Type": form.fileType.toUpperCase(),
      "X-LANCHROM-Product-Category": classification.productCategory,
      "X-LANCHROM-Tags": classification.tags.join(","),
      "X-LANCHROM-Search-Keywords": classification.searchKeywords.join(","),
    },
  });
}

export async function sendDocumentAutoReply(form: DocumentRequest) {
  const label = documentLabel(form.fileType);
  return sendTransactionalEmail({
    to: form.email,
    subject: `LANCHROM ${form.fileType.toUpperCase()} request received | ${form.productName}`,
    text: `Thank you for requesting the ${label} for ${form.productName}.

Our team has received your request and will send the document within 1 business day.

Best regards,
LANCHROM Team
${DEFAULT_INQUIRY_EMAIL}`,
    html: `<div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;color:#0f172a"><h2 style="color:#0A514C">Document request received</h2><p>Thank you for requesting the <strong>${escapeHtml(label)}</strong> for <strong>${escapeHtml(form.productName)}</strong>.</p><p>Our team has received your request and will send the document within <strong>1 business day</strong>.</p><p>Best regards,<br/>LANCHROM Team<br/>${DEFAULT_INQUIRY_EMAIL}</p></div>`,
    replyTo: getInquiryRecipient(),
  });
}

export async function sendOEMLeadNotification(
  form: OEMQuoteForm,
  isPriority: boolean,
) {
  const classification = classifyInquiry({
    productOfInterest: form.product,
    gradeRequired: form.grade,
    packagingSize: `${form.bottleType} ${form.volumePerUnit}`,
    quantity: String(form.unitsPerOrder),
    country: form.destinationCountry,
    notes: `OEM private label ${form.labelType} ${form.additionalDocs.join(" ")}`,
  });
  const priority = isPriority ? "HIGH" : classification.priority;
  const tags = Array.from(new Set([...classification.tags, "OEM"]));
  const searchKeywords = Array.from(
    new Set([...classification.searchKeywords, "oem-inquiry", "private-label"]),
  );

  return sendTransactionalEmail({
    to: getInquiryRecipient(),
    subject: `[LANCHROM][OEM][${priority}][${classification.productCategory}][${classification.region}] ${form.company} | ${form.product}`,
    text: `New OEM quote request from the LANCHROM website

Priority: ${priority}
Tags: ${tags.join(", ")}
Search Keywords: ${searchKeywords.join(", ")}

Name: ${form.firstName} ${form.lastName}
Email: ${form.email}
Company: ${form.company}
Product: ${form.product}
Grade: ${form.grade}
Container: ${form.bottleType}
Volume per unit: ${form.volumePerUnit}
Units: ${form.unitsPerOrder}
Label: ${form.labelType}
Label language: ${form.labelLanguage}
Destination: ${form.destinationCountry}
Incoterms: ${form.incoterms}
Timeline: ${form.targetTimeline}`,
    html: `<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#0f172a">
      <div style="background:#0A514C;color:white;padding:20px 24px;border-radius:12px 12px 0 0"><h2 style="margin:0;font-size:20px">New OEM Quote Request</h2></div>
      <table style="width:100%;border-collapse:collapse;font-size:14px">${row("Priority", priority)}${row("Tags", tags.join(", "))}${row("Search Keywords", searchKeywords.join(", "))}${row("Name", `${form.firstName} ${form.lastName}`)}${row("Email", form.email)}${row("Company", form.company)}${row("Product", form.product)}${row("Grade", form.grade)}${row("Container", `${form.bottleType} · ${form.volumePerUnit}`)}${row("Units", String(form.unitsPerOrder))}${row("Label", `${form.labelType} · ${form.labelLanguage}`)}${row("Destination", form.destinationCountry)}${row("Incoterms", form.incoterms)}${row("Timeline", form.targetTimeline)}</table>
      <div style="background:#f8fafc;padding:14px 18px;border-radius:0 0 12px 12px;color:#64748b;font-size:12px">Reply directly to this email to contact the requester.</div>
    </div>`,
    replyTo: form.email,
    headers: {
      "X-LANCHROM-Inquiry-Type": "OEM",
      "X-LANCHROM-Priority": priority,
      "X-LANCHROM-Product-Category": classification.productCategory,
      "X-LANCHROM-Region": classification.region,
      "X-LANCHROM-Tags": tags.join(","),
      "X-LANCHROM-Search-Keywords": searchKeywords.join(","),
    },
  });
}

export async function sendOEMAutoReply(form: OEMQuoteForm) {
  return sendTransactionalEmail({
    to: form.email,
    subject: `LANCHROM OEM quote request received | ${form.product}`,
    text: `Dear ${form.firstName},

Thank you for your OEM and private-label quote request for ${form.product}.

Our team has received the packaging, labeling, documentation, and destination requirements. We will respond within 2 business days.

Best regards,
LANCHROM Team
${DEFAULT_INQUIRY_EMAIL}`,
    html: `<div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;color:#0f172a"><h2 style="color:#0A514C">OEM quote request received</h2><p>Dear ${escapeHtml(form.firstName)},</p><p>Thank you for your OEM and private-label quote request for <strong>${escapeHtml(form.product)}</strong>.</p><p>Our team has received the packaging, labeling, documentation, and destination requirements. We will respond within <strong>2 business days</strong>.</p><p>Best regards,<br/>LANCHROM Team<br/>${DEFAULT_INQUIRY_EMAIL}</p></div>`,
    replyTo: getInquiryRecipient(),
  });
}
