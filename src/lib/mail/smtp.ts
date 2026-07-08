import { Buffer } from "node:buffer";
import tls from "node:tls";

type SmtpConfig = {
  host: string;
  port: number;
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
};

function escapeHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function normalizeRecipients(to: string | string[]) {
  return Array.isArray(to) ? to : to.split(",").map(item => item.trim()).filter(Boolean);
}

function readResponse(socket: tls.TLSSocket): Promise<string> {
  return new Promise((resolve, reject) => {
    let data = "";
    const onData = (chunk: Buffer) => {
      data += chunk.toString("utf8");
      const lines = data.split(/\r?\n/).filter(Boolean);
      const last = lines[lines.length - 1] || "";
      if (/^\d{3}\s/.test(last)) {
        cleanup();
        resolve(data);
      }
    };
    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };
    const cleanup = () => {
      socket.off("data", onData);
      socket.off("error", onError);
    };
    socket.on("data", onData);
    socket.on("error", onError);
  });
}

async function command(socket: tls.TLSSocket, line: string, expected: number[]) {
  socket.write(`${line}\r\n`);
  const response = await readResponse(socket);
  const code = Number(response.slice(0, 3));
  if (!expected.includes(code)) {
    throw new Error(`SMTP command failed (${line}): ${response}`);
  }
  return response;
}

function buildMessage(config: SmtpConfig, options: SendMailOptions) {
  const recipients = normalizeRecipients(options.to);
  const boundary = `lanchrom-${Date.now().toString(36)}`;
  const from = escapeHeader(config.from);
  const subject = escapeHeader(options.subject);
  const replyTo = options.replyTo ? `Reply-To: ${escapeHeader(options.replyTo)}\r\n` : "";
  const toHeader = recipients.map(escapeHeader).join(", ");

  const html = options.html || `<pre style="font-family:Arial,sans-serif;white-space:pre-wrap">${options.text.replace(/[&<>]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[char] || char))}</pre>`;

  return [
    `From: LANCHROM <${from}>`,
    `To: ${toHeader}`,
    `Subject: ${subject}`,
    replyTo.trim(),
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary=${boundary}`,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    options.text,
    "",
    `--${boundary}`,
    "Content-Type: text/html; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    html,
    "",
    `--${boundary}--`,
    "",
  ].filter(Boolean).join("\r\n");
}

export function getZohoSmtpConfig(): SmtpConfig | null {
  const user = process.env.ZOHO_EMAIL || process.env.SMTP_USER || process.env.FROM_EMAIL;
  const pass = process.env.ZOHO_APP_PASSWORD || process.env.ZOHO_PASSWORD || process.env.SMTP_PASSWORD;
  if (!user || !pass) return null;
  return {
    host: process.env.SMTP_HOST || "smtp.zoho.com",
    port: Number(process.env.SMTP_PORT || 465),
    user,
    pass,
    from: process.env.FROM_EMAIL || user,
  };
}

export async function sendViaSmtp(options: SendMailOptions) {
  const config = getZohoSmtpConfig();
  if (!config) {
    console.warn("Zoho SMTP not configured. Set ZOHO_EMAIL and ZOHO_APP_PASSWORD.");
    return { configured: false };
  }

  const recipients = normalizeRecipients(options.to);
  const message = buildMessage(config, options).replace(/^\./gm, "..");

  const socket = tls.connect({ host: config.host, port: config.port, servername: config.host });
  await new Promise<void>((resolve, reject) => {
    socket.once("secureConnect", () => resolve());
    socket.once("error", reject);
  });

  try {
    const greeting = await readResponse(socket);
    if (!greeting.startsWith("220")) throw new Error(`SMTP greeting failed: ${greeting}`);
    await command(socket, "EHLO lanchrom.com", [250]);
    await command(socket, "AUTH LOGIN", [334]);
    await command(socket, Buffer.from(config.user).toString("base64"), [334]);
    await command(socket, Buffer.from(config.pass).toString("base64"), [235]);
    await command(socket, `MAIL FROM:<${config.from}>`, [250]);
    for (const recipient of recipients) {
      await command(socket, `RCPT TO:<${recipient}>`, [250, 251]);
    }
    await command(socket, "DATA", [354]);
    socket.write(`${message}\r\n.\r\n`);
    const dataResponse = await readResponse(socket);
    if (!dataResponse.startsWith("250")) throw new Error(`SMTP DATA failed: ${dataResponse}`);
    await command(socket, "QUIT", [221]);
    return { configured: true };
  } finally {
    socket.end();
  }
}
