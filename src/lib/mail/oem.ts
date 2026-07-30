import { sendViaSmtp } from "./smtp";

type OEMNotificationData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  product: string;
  grade: string;
  bottleType: string;
  volumePerUnit: string | number;
  unitsPerOrder: string | number;
  labelType: string;
  destinationCountry: string;
  incoterms: string;
  isPriority: boolean;
};

function escapeHtml(value: string | number | undefined) {
  return String(value || "-")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}


export async function sendOEMNotification(
  data: OEMNotificationData
) {

  const priority = data.isPriority ? "HIGH" : "NORMAL";

  return sendViaSmtp({

    to:
      process.env.INQUIRY_NOTIFICATION_EMAIL ||
      "info@lanchrom.com",

    subject:
      `[LANCHROM][OEM QUOTE][${priority}] ${data.company} | ${data.product}`,

    text: `
New OEM Quote Request from LANCHROM Website

Priority:
${priority}

Customer:
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Company: ${data.company}

Product:
${data.product}

Grade:
${data.grade}

Packaging:
Bottle Type: ${data.bottleType}
Volume Per Unit: ${data.volumePerUnit}
Units Per Order: ${data.unitsPerOrder}

Private Label:
${data.labelType}

Destination:
Country: ${data.destinationCountry}
Incoterms: ${data.incoterms}

Please follow up with the customer.
`,

    html: `
<div style="font-family:Arial,sans-serif;color:#0f172a;max-width:700px">

<h2 style="background:#003D91;color:white;padding:18px">
New OEM Quote Request
</h2>

<table style="width:100%;border-collapse:collapse">

<tr>
<td><b>Priority</b></td>
<td>${escapeHtml(priority)}</td>
</tr>

<tr>
<td><b>Name</b></td>
<td>${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</td>
</tr>

<tr>
<td><b>Email</b></td>
<td>${escapeHtml(data.email)}</td>
</tr>

<tr>
<td><b>Company</b></td>
<td>${escapeHtml(data.company)}</td>
</tr>

<tr>
<td><b>Product</b></td>
<td>${escapeHtml(data.product)}</td>
</tr>

<tr>
<td><b>Grade</b></td>
<td>${escapeHtml(data.grade)}</td>
</tr>

<tr>
<td><b>Bottle Type</b></td>
<td>${escapeHtml(data.bottleType)}</td>
</tr>

<tr>
<td><b>Volume Per Unit</b></td>
<td>${escapeHtml(data.volumePerUnit)}</td>
</tr>

<tr>
<td><b>Units Per Order</b></td>
<td>${escapeHtml(data.unitsPerOrder)}</td>
</tr>

<tr>
<td><b>Label Type</b></td>
<td>${escapeHtml(data.labelType)}</td>
</tr>

<tr>
<td><b>Destination</b></td>
<td>${escapeHtml(data.destinationCountry)}</td>
</tr>

<tr>
<td><b>Incoterms</b></td>
<td>${escapeHtml(data.incoterms)}</td>
</tr>

</table>

<p>
LANCHROM OEM Team
</p>

</div>
`,

    replyTo: data.email,

  });
}