# LANCHROM Inquiry Integration

The quote and free-sample forms use the same delivery flow:

1. Validate the website form.
2. Send the classified inquiry to `info@lanchrom.com` through Zoho SMTP.
3. Send a confirmation reply to the visitor.
4. Create or update a HubSpot contact.
5. Create a HubSpot deal and associate it with the contact.

The form is accepted when at least one primary channel succeeds: Zoho email or
HubSpot contact sync. This prevents a temporary CRM issue from blocking email,
and prevents a temporary email issue from losing a lead already stored in CRM.

## 1. Zoho Mail Setup

Create `.env.local` from `.env.example` and set:

```env
ZOHO_EMAIL=info@lanchrom.com
ZOHO_APP_PASSWORD=YOUR_ZOHO_APP_PASSWORD
FROM_EMAIL=info@lanchrom.com
INQUIRY_NOTIFICATION_EMAIL=info@lanchrom.com
SMTP_HOST=smtp.zoho.com
SMTP_PORT=465
```

Use the complete mailbox address as the SMTP user. If two-factor
authentication is enabled, generate an application-specific password in Zoho
and use it as `ZOHO_APP_PASSWORD`. Do not use the normal mailbox password.

Zoho SMTP reference:
https://www.zoho.com/mail/help/zoho-smtp.html

### Recommended Zoho folders and filters

Create these folders:

- Website Inquiries / Quotes
- Website Inquiries / Samples
- Website Inquiries / High Priority
- Website Inquiries / HPLC
- Website Inquiries / LC-MS
- Website Inquiries / Electronic
- Website Inquiries / OEM

Create incoming filters in this order:

| Filter | Subject condition | Action |
|---|---|---|
| High priority | contains `[HIGH]` | Flag important, tag High Priority |
| Quotes | contains `[QUOTE]` | Move to Quotes |
| Samples | contains `[SAMPLE]` | Move to Samples |
| HPLC | contains `[HPLC]` | Tag HPLC |
| LC-MS | contains `[LC-MS]` | Tag LC-MS |
| Electronic | contains `[ELECTRONIC]` | Tag Electronic |
| OEM | contains `[OEM]` | Tag OEM |

Each inquiry email also includes region tags such as `[ASIA]`, `[EUROPE]`, and
`[NORTH-AMERICA]`. These can be used for regional routing filters.

Zoho incoming filter reference:
https://www.zoho.com/mail/help/incoming-filters.html

## 2. HubSpot Private App Setup

Create a HubSpot Private App and grant:

- `crm.objects.contacts.read`
- `crm.objects.contacts.write`
- `crm.objects.deals.read`
- `crm.objects.deals.write`

Add its access token to `.env.local`:

```env
HUBSPOT_ACCESS_TOKEN=YOUR_PRIVATE_APP_ACCESS_TOKEN
HUBSPOT_USE_CUSTOM_PROPERTIES=true
```

The integration uses the default sales pipeline unless custom internal IDs are
provided:

```env
HUBSPOT_SAMPLE_PIPELINE_ID=default
HUBSPOT_SAMPLE_STAGE_ID=appointmentscheduled
HUBSPOT_QUOTE_PIPELINE_ID=default
HUBSPOT_QUOTE_STAGE_ID=appointmentscheduled
HUBSPOT_OEM_PIPELINE_ID=default
HUBSPOT_OEM_STAGE_ID=appointmentscheduled
```

Pipeline and stage values must be HubSpot internal IDs, not display labels.

HubSpot deal API reference:
https://developers.hubspot.com/docs/api-reference/latest/crm/objects/deals/guide

## 3. Recommended HubSpot Properties

Create these single-line text properties on Contact records:

| Internal name | Label |
|---|---|
| `product_interest` | Product Interest |
| `annual_purchase_volume` | Annual Purchase Volume |
| `sample_purpose` | Sample Purpose |
| `inquiry_type` | Inquiry Type |
| `source_product` | Source Product |
| `source_url` | Source URL |
| `current_supplier` | Current Supplier |

Create this single-line text property on Deal records:

| Internal name | Label |
|---|---|
| `product_interest` | Product Interest |

If these custom properties have not been created yet, the integration retries
with standard HubSpot properties. The lead will still be stored, while the full
inquiry details remain in the deal description and Zoho email.

HubSpot property API reference:
https://developers.hubspot.com/docs/api-reference/latest/crm/properties/guide

## 4. HubSpot Analysis

Recommended reports:

- New inquiries by type: Quote, Sample, OEM
- Inquiry volume by country and region
- Deal count by product interest
- High-value inquiry conversion rate
- Quote response time
- Sample-to-quote conversion rate
- Won revenue by source URL

Recommended workflows:

- Assign `[HIGH]` inquiries to the sales manager.
- Assign India, Vietnam, Thailand, and Malaysia inquiries by territory.
- Create a one-business-day follow-up task for every new website inquiry.
- Move sample deals to follow-up after dispatch.
- Notify sales when a sample contact later submits a quote.

## 5. Deployment Check

After adding environment variables to the hosting platform:

1. Restart or redeploy the website.
2. Submit one test quote using a controlled email address.
3. Confirm the inquiry arrives in `info@lanchrom.com`.
4. Confirm the visitor receives the auto-reply.
5. Confirm the HubSpot contact and associated deal are created.
6. Confirm the Zoho filters move and tag the email correctly.

Never include `.env.local` or access tokens in a public code package.
