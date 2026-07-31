# LANCHROM form email delivery

The sample, quotation, and CoA/TDS/SDS forms share one delivery layer. The
website first tries authenticated SMTP and then falls back to Resend when it is
configured.

## Recipient

All website inquiries are delivered to `INQUIRY_NOTIFICATION_EMAIL`. If it is
not set, the code uses `info@lanchrom.com`.

## Option 1: Zoho SMTP

Set these server-side environment variables in the hosting platform:

```text
ZOHO_EMAIL=info@lanchrom.com
ZOHO_APP_PASSWORD=your-zoho-app-password
FROM_EMAIL=info@lanchrom.com
INQUIRY_NOTIFICATION_EMAIL=info@lanchrom.com
SMTP_HOST=smtp.zoho.com
SMTP_PORT=465
```

Use a Zoho app password, not the normal mailbox password.

## Option 2: Resend fallback

```text
RESEND_API_KEY=your-resend-api-key
RESEND_FROM_EMAIL=info@lanchrom.com
INQUIRY_NOTIFICATION_EMAIL=info@lanchrom.com
```

The `lanchrom.com` sending domain and `RESEND_FROM_EMAIL` must be verified in
Resend.

Never commit real passwords or API keys to the website code package.

## Classification for CRM connection

Inquiry emails include searchable subject prefixes and `X-LANCHROM-*` headers
for:

- inquiry type;
- priority;
- product category;
- region;
- tags;
- search keywords.

These fields are generated for sample, quotation, document, and OEM forms so
they can later map to HubSpot or Zoho CRM properties without changing the form
payloads. When HubSpot custom properties are enabled, the same values are
prepared as `inquiry_tags`, `search_keywords`, `inquiry_priority`,
`product_category`, and `inquiry_region`; the existing standard-property
fallback remains available when those custom fields have not yet been created.
