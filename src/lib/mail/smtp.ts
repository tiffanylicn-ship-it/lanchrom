import nodemailer from "nodemailer";

type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
};

type SendMailOptions = {
  to: string | string[];
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
  headers?: Record<string, string>;
};

export type MailDeliveryResult = {
  configured: boolean;
  delivered: boolean;
  provider?: "smtp" | "resend";
  messageId?: string;
};

export function getZohoSmtpConfig(): SmtpConfig | null {
  const user = process.env.ZOHO_EMAIL || process.env.SMTP_USER || process.env.FROM_EMAIL;
  const pass =
    process.env.ZOHO_APP_PASSWORD ||
    process.env.ZOHO_PASSWORD ||
    process.env.SMTP_PASSWORD;

  if (!user || !pass) return null;

  const port = Number(process.env.SMTP_PORT || 465);
  return {
    host: process.env.SMTP_HOST || "smtp.zoho.com",
    port,
    secure: port === 465,
    user,
    pass,
    from: process.env.FROM_EMAIL || user,
  };
}

async function sendViaResend(
  options: SendMailOptions
): Promise<MailDeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { configured: false, delivered: false };

  const from =
    process.env.RESEND_FROM_EMAIL ||
    process.env.FROM_EMAIL ||
    "info@lanchrom.com";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `LANCHROM Website <${from}>`,
      to: Array.isArray(options.to) ? options.to : [options.to],
      subject: options.subject,
      text: options.text,
      html: options.html,
      reply_to: options.replyTo,
      headers: options.headers,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend email failed (${response.status}): ${detail}`);
  }

  const result = (await response.json()) as { id?: string };

  return {
    configured: true,
    delivered: true,
    provider: "resend",
    messageId: result.id,
  };
}

export async function sendTransactionalEmail(
  options: SendMailOptions
): Promise<MailDeliveryResult> {
  const config = getZohoSmtpConfig();

  if (config) {
    try {
      const transporter = nodemailer.createTransport({
        host: config.host,
        port: config.port,
        secure: config.secure,
        auth: {
          user: config.user,
          pass: config.pass,
        },
        connectionTimeout: 12_000,
        greetingTimeout: 12_000,
        socketTimeout: 20_000,
      });

      const result = await transporter.sendMail({
        from: `"LANCHROM Website" <${config.from}>`,
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
        replyTo: options.replyTo,
        headers: options.headers,
      });

      return {
        configured: true,
        delivered: true,
        provider: "smtp",
        messageId: result.messageId,
      };
    } catch (error) {
      console.error("SMTP delivery failed; trying Resend fallback:", error);
    }
  }

  try {
    const resendResult = await sendViaResend(options);
    if (resendResult.configured) return resendResult;
  } catch (error) {
    console.error("Resend delivery failed:", error);
  }

  if (!config && !process.env.RESEND_API_KEY) {
    console.warn(
      "Email is not configured. Set Zoho SMTP credentials or RESEND_API_KEY."
    );
  }

  return {
    configured: Boolean(config || process.env.RESEND_API_KEY),
    delivered: false,
  };
}
