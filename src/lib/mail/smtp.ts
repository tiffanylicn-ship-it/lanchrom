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

export async function sendViaSmtp(
  options: SendMailOptions
): Promise<MailDeliveryResult> {
  const config = getZohoSmtpConfig();
  if (!config) {
    console.warn(
      "Zoho SMTP is not configured. Set ZOHO_EMAIL and ZOHO_APP_PASSWORD."
    );
    return { configured: false, delivered: false };
  }

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
    messageId: result.messageId,
  };
}
