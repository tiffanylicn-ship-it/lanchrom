import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type LeadBody = {
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  country?: string;
  product?: string;
  productOfInterest?: string;
  message?: string;
  notes?: string;
  type?: string;
  grade?: string;
  gradeRequired?: string;
  packaging?: string;
  packagingSize?: string;
  quantity?: string;
  annualVolume?: string;
  phone?: string;
};

function clean(value: unknown, fallback = "") {
  return typeof value === "string" ? value.trim().slice(0, 2000) : fallback;
}

function inferLeadTags(body: LeadBody) {
  const text = [
    body.type,
    body.product,
    body.productOfInterest,
    body.message,
    body.notes,
    body.grade,
    body.gradeRequired,
    body.annualVolume,
    body.country,
  ].map(v => clean(v).toLowerCase()).join(" ");

  const tags = new Set<string>();
  if (/lc-?ms|mass spec|ms grade/.test(text)) tags.add("LC-MS");
  if (/hplc|gradient|chromatography/.test(text)) tags.add("HPLC");
  if (/gc\b|gas chromatography/.test(text)) tags.add("GC");
  if (/oem|private label|custom label|distributor/.test(text)) tags.add("OEM / Distributor");
  if (/sample/.test(text)) tags.add("Sample");
  if (/quote|price|pricing|quotation/.test(text)) tags.add("Quote");
  if (/pharma|gmp|usp|ep|cdmo|cro/.test(text)) tags.add("Pharma / CRO");
  if (/semiconductor|electronic|wafer|photoresist|pgmea|pgme/.test(text)) tags.add("Electronic Chemicals");
  if (/> \$200,000|\$50,000|200l|ibc|bulk|container|drum/.test(text)) tags.add("High Priority");
  return Array.from(tags);
}

function buildAutoReply(body: LeadBody, product: string) {
  const type = clean(body.type, "inquiry");
  const normalizedType = type.toLowerCase();
  if (normalizedType.includes("quote")) {
    return {
      subject: `LANCHROM™ quote request received — ${product || "Product inquiry"}`,
      text: `Dear ${clean(body.name) || clean(body.firstName) || "Customer"},

Thank you for your LANCHROM™ quote request.

Our sales team has received your inquiry and will review:
Product: ${product || "Not specified"}
Grade: ${clean(body.grade) || clean(body.gradeRequired) || "Not specified"}
Packaging: ${clean(body.packaging) || clean(body.packagingSize) || "Not specified"}
Quantity: ${clean(body.quantity) || "Not specified"}
Country: ${clean(body.country) || "Not specified"}

We will reply within 1 business day with pricing, lead time, packaging options, and available documents.

Best regards,
LANCHROM™ Sales Team
sales@lanchrom.com`,
    };
  }

  if (normalizedType.includes("sample")) {
    return {
      subject: `LANCHROM™ sample request received — ${product || "Product inquiry"}`,
      text: `Dear ${clean(body.name) || clean(body.firstName) || "Customer"},

Thank you for your LANCHROM™ sample request.

Our team will check product availability, suitable grade, sample size, and export/shipping requirements for your country. We will reply within 1 business day.

Best regards,
LANCHROM™ Sales Team
sales@lanchrom.com`,
    };
  }

  return {
    subject: `LANCHROM™ inquiry received — ${product || "Product inquiry"}`,
    text: `Dear ${clean(body.name) || clean(body.firstName) || "Customer"},

Thank you for contacting LANCHROM™.

Our team has received your inquiry and will reply within 1 business day.

Best regards,
LANCHROM™ Sales Team
sales@lanchrom.com`,
  };
}

export async function POST(req: Request) {
  try {
    const body: LeadBody = await req.json();

    const email = clean(body.email).toLowerCase();
    const firstName = clean(body.firstName);
    const lastName = clean(body.lastName);
    const name = clean(body.name) || [firstName, lastName].filter(Boolean).join(" ");
    const company = clean(body.company);
    const country = clean(body.country);
    const product = clean(body.product) || clean(body.productOfInterest);
    const message = clean(body.message) || clean(body.notes);
    const type = clean(body.type, "General Inquiry");
    const grade = clean(body.grade) || clean(body.gradeRequired);
    const packaging = clean(body.packaging) || clean(body.packagingSize);
    const quantity = clean(body.quantity);
    const annualVolume = clean(body.annualVolume);
    const phone = clean(body.phone);

    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "A valid email is required." }, { status: 400 });
    }

    const zohoEmail = process.env.ZOHO_EMAIL;
    const zohoPassword = process.env.ZOHO_PASSWORD;
    const notifyTo = process.env.LEAD_NOTIFY_TO || "sales@lanchrom.com";

    if (!zohoEmail || !zohoPassword) {
      console.error("Zoho SMTP is not configured. Missing ZOHO_EMAIL or ZOHO_PASSWORD.");
      return NextResponse.json({ success: false, message: "Email service is not configured." }, { status: 500 });
    }

    const tags = inferLeadTags(body);
    const priority = tags.includes("High Priority") ? "HIGH" : "NORMAL";

    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST || "smtp.zoho.com",
      port: Number(process.env.ZOHO_SMTP_PORT || 465),
      secure: true,
      auth: {
        user: zohoEmail,
        pass: zohoPassword,
      },
    });

    const mailContent = `
New Inquiry from LANCHROM Website

Priority: ${priority}
Tags: ${tags.join(", ") || "General"}
Type: ${type}

Name: ${name || "Not provided"}
Email: ${email}
Company: ${company || "Not provided"}
Country: ${country || "Not provided"}
Phone: ${phone || "Not provided"}

Product: ${product || "Not provided"}
Grade: ${grade || "Not provided"}
Packaging: ${packaging || "Not provided"}
Quantity: ${quantity || "Not provided"}
Annual Volume: ${annualVolume || "Not provided"}

Message:
${message || "No message provided."}
`;

    await transporter.sendMail({
      from: `"LANCHROM Website" <${zohoEmail}>`,
      to: notifyTo,
      subject: `[LANCHROM ${priority === "HIGH" ? "HIGH " : ""}Inquiry] ${type} — ${company || email}`,
      text: mailContent,
      replyTo: email,
    });

    const autoReply = buildAutoReply({ ...body, name, type }, product);
    await transporter.sendMail({
      from: `"LANCHROM Sales" <${zohoEmail}>`,
      to: email,
      subject: autoReply.subject,
      text: autoReply.text,
      replyTo: notifyTo,
    });

    return NextResponse.json({ success: true, tags, priority });
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
