const RESEND_API = "https://api.resend.com/emails";
const FROM = process.env.FROM_EMAIL || "noreply@lanchrom.com";
const NOTIFY_TO = process.env.NOTIFICATION_EMAIL || "sales@lanchrom.com";

async function sendEmail(to: string | string[], subject: string, html: string) {
  const key = process.env.RESEND_API_KEY;
  if (!key) { console.warn("Resend not configured"); return; }
  await fetch(RESEND_API, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: `LANCHROM™ <${FROM}>`, to, subject, html }),
  });
}

function row(label: string, value: string) {
  return `<tr><td style="padding:6px 12px;background:#F8FAFC;font-weight:600;font-size:.82rem;color:#2B2A28;width:35%">${label}</td><td style="padding:6px 12px;font-size:.82rem;color:#334155">${value}</td></tr>`;
}

const header = `<div style="background:#2B2A28;padding:20px 24px"><span style="color:white;font-weight:700">LANCHROM™</span><br><span style="color:#7FA8AA;font-size:.78rem">Precision Solvents for Analytical Science</span></div>`;
const footer = `<div style="padding:12px 24px;background:#F8FAFC;font-size:.72rem;color:#94A3B8;margin-top:16px">LANCHROM™ · lanchrom.com · sales@lanchrom.com</div>`;

export async function sendSampleConfirmation(d: { firstName: string; email: string; company: string; product: string; grade: string; packaging: string }) {
  await sendEmail(d.email, `Sample Request Confirmed — ${d.product}`, `<div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto">${header}<div style="padding:24px"><h2 style="color:#2B2A28">Your request has been received</h2><p style="color:#64748B">Dear ${d.firstName}, our team will respond within 1 business day.</p><table style="width:100%;border-collapse:collapse">${row("Product",d.product)}${row("Grade",d.grade)}${row("Packaging",d.packaging)}${row("Company",d.company)}</table></div>${footer}</div>`);
}

export async function sendSampleNotification(d: { firstName: string; lastName: string; email: string; company: string; country: string; product: string; grade: string; packaging: string; purpose: string; volume: string; isPriority: boolean; notes?: string }) {
  const priority = d.isPriority ? "🔴 HIGH PRIORITY" : "Normal";
  await sendEmail(NOTIFY_TO, `${d.isPriority?"🔴 ":""}New Sample — ${d.company} (${d.country})`, `<div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto">${header}<div style="padding:24px"><h2 style="color:#2B2A28">New Sample Request — ${priority}</h2><table style="width:100%;border-collapse:collapse">${row("Name",d.firstName+" "+d.lastName)}${row("Email",d.email)}${row("Company",d.company)}${row("Country",d.country)}${row("Product",d.product)}${row("Grade",d.grade)}${row("Packaging",d.packaging)}${row("Purpose",d.purpose)}${row("Volume",d.volume)}${d.notes?row("Notes",d.notes):""}</table><br><a href="https://app.hubspot.com/contacts/246539586" style="background:#FF7A59;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:600">View in HubSpot</a></div>${footer}</div>`);
}

export async function sendQuoteNotification(d: { firstName: string; lastName: string; email: string; company: string; country: string; product: string; grade: string; packaging: string; quantity: string; volume: string; isPriority: boolean; notes?: string }) {
  await sendEmail(NOTIFY_TO, `${d.isPriority?"🔴 ":""}New Quote — ${d.company}`, `<div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto">${header}<div style="padding:24px"><h2 style="color:#2B2A28">New Quote Request</h2><table style="width:100%;border-collapse:collapse">${row("Contact",d.firstName+" "+d.lastName)}${row("Email",d.email)}${row("Company",d.company)}${row("Country",d.country)}${row("Product",d.product)}${row("Grade",d.grade)}${row("Packaging",d.packaging+" x "+d.quantity)}${row("Volume",d.volume)}${d.notes?row("Notes",d.notes):""}</table></div>${footer}</div>`);
}

export async function sendOEMNotification(d: { firstName: string; lastName: string; email: string; company: string; product: string; grade: string; bottleType: string; volumePerUnit: string; unitsPerOrder: number; labelType: string; destinationCountry: string; incoterms: string; isPriority: boolean }) {
  await sendEmail(NOTIFY_TO, `${d.isPriority?"🔴 ":""}OEM Quote — ${d.company} — ${d.unitsPerOrder}u`, `<div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto">${header}<div style="padding:24px"><h2 style="color:#2B2A28">New OEM Quote Request</h2><table style="width:100%;border-collapse:collapse">${row("Contact",d.firstName+" "+d.lastName+" ("+d.email+")")}${row("Company",d.company)}${row("Product",d.product+" — "+d.grade)}${row("Container",d.bottleType+" · "+d.volumePerUnit)}${row("Units",String(d.unitsPerOrder))}${row("Label",d.labelType)}${row("Destination",d.destinationCountry)}${row("Incoterms",d.incoterms)}${row("Priority",d.isPriority?"🔴 HIGH (>500 units)":"Normal")}</table></div>${footer}</div>`);
}

export async function sendDownloadLink(email: string, product: string, fileType: string) {
  await sendEmail(email, `Your ${fileType.toUpperCase()} request — LANCHROM™`, `<div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto">${header}<div style="padding:24px"><h2 style="color:#2B2A28">${fileType.toUpperCase()} Request Received</h2><p style="color:#64748B">Thank you for your interest in <strong>${product}</strong>. Our team will send the ${fileType.toUpperCase()} within <strong>1 business day</strong>.</p><p style="color:#64748B">Questions? Email <a href="mailto:sales@lanchrom.com" style="color:#3C6E71">sales@lanchrom.com</a></p></div>${footer}</div>`);
}
