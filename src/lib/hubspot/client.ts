// ============================================================
// LANCHROM™ — HubSpot CRM Integration
// Portal ID: 246539586
// ============================================================

import type { HubSpotContact, HubSpotDeal, SampleRequestForm, QuoteRequestForm, OEMQuoteForm } from "@/types";

const API_BASE = "https://api.hubapi.com";

// Pipeline IDs — configure in HubSpot after setup
export const PIPELINES = {
  sampleRequests: "sample-requests",
  quoteRequests: "quote-requests",
  oemInquiries: "oem-inquiries",
  distributor: "distributor",
} as const;

// Deal stages per pipeline
export const DEAL_STAGES = {
  sampleRequests: {
    new: "appointmentscheduled",
    dispatched: "qualifiedtobuy",
    followUp: "presentationscheduled",
    converted: "closedwon",
    lost: "closedlost",
  },
  quoteRequests: {
    requested: "appointmentscheduled",
    sent: "qualifiedtobuy",
    negotiation: "decisionmakerboughtin",
    confirmed: "closedwon",
    lost: "closedlost",
  },
  oemInquiries: {
    received: "appointmentscheduled",
    review: "qualifiedtobuy",
    quoteSent: "presentationscheduled",
    sampleApproved: "decisionmakerboughtin",
    confirmed: "closedwon",
    lost: "closedlost",
  },
} as const;

// Annual volume → priority mapping
const PRIORITY_VOLUMES = ["$50,000 – $200,000 / year", "> $200,000 / year"];

async function hubspotFetch(endpoint: string, method: string, body?: object) {
  const token = process.env.HUBSPOT_API_KEY;
  if (!token) throw new Error("HubSpot API key not configured");

  const res = await fetch(`${API_BASE}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`HubSpot API error ${res.status}: ${err}`);
  }

  return res.json();
}

// ── Create or Update Contact ───────────────────────────────
export async function upsertContact(contact: HubSpotContact): Promise<string> {
  try {
    const properties: Record<string, string> = {
      email: contact.email,
      firstname: contact.firstname,
      lastname: contact.lastname,
      company: contact.company,
      country: contact.country,
      ...(contact.phone && { phone: contact.phone }),
      ...(contact.product_interest && { product_interest: contact.product_interest }),
      ...(contact.annual_purchase_volume && { annual_purchase_volume: contact.annual_purchase_volume }),
      ...(contact.sample_purpose && { sample_purpose: contact.sample_purpose }),
      ...(contact.inquiry_type && { inquiry_type: contact.inquiry_type }),
      ...(contact.source_product && { source_product: contact.source_product }),
      ...(contact.source_url && { source_url: contact.source_url }),
      ...(contact.current_supplier && { current_supplier: contact.current_supplier }),
    };

    // Try to update existing contact first
    try {
      const existing = await hubspotFetch(
        `/crm/v3/objects/contacts/${encodeURIComponent(contact.email)}?idProperty=email`,
        "GET"
      );
      await hubspotFetch(`/crm/v3/objects/contacts/${existing.id}`, "PATCH", { properties });
      return existing.id;
    } catch {
      // Contact doesn't exist, create new
      const created = await hubspotFetch("/crm/v3/objects/contacts", "POST", { properties });
      return created.id;
    }
  } catch (error) {
    console.error("HubSpot upsertContact error:", error);
    throw error;
  }
}

// ── Create Deal ────────────────────────────────────────────
export async function createDeal(deal: HubSpotDeal, contactId: string): Promise<string> {
  try {
    const created = await hubspotFetch("/crm/v3/objects/deals", "POST", {
      properties: {
        dealname: deal.dealname,
        pipeline: deal.pipeline,
        dealstage: deal.dealstage,
        ...(deal.amount && { amount: deal.amount.toString() }),
        ...(deal.product_interest && { product_interest: deal.product_interest }),
        ...(deal.inquiry_notes && { description: deal.inquiry_notes }),
      },
      associations: [
        {
          to: { id: contactId },
          types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 3 }],
        },
      ],
    });

    return created.id;
  } catch (error) {
    console.error("HubSpot createDeal error:", error);
    throw error;
  }
}

// ── Sample Request Handler ────────────────────────────────
export async function processSampleRequest(form: SampleRequestForm) {
  const isPriority = PRIORITY_VOLUMES.includes(form.annualVolume);

  const contactId = await upsertContact({
    email: form.email,
    firstname: form.firstName,
    lastname: form.lastName,
    company: form.company,
    country: form.country,
    phone: form.phone,
    product_interest: form.productOfInterest,
    annual_purchase_volume: form.annualVolume,
    sample_purpose: form.samplePurpose,
    inquiry_type: "Sample Request",
    source_product: form.sourceProduct,
    source_url: form.sourceUrl,
    current_supplier: form.currentSupplier,
  });

  const dealId = await createDeal({
    dealname: `[SAMPLE] ${form.company} — ${form.productOfInterest}`,
    pipeline: PIPELINES.sampleRequests,
    dealstage: DEAL_STAGES.sampleRequests.new,
    product_interest: form.productOfInterest,
    inquiry_notes: `
Grade: ${form.gradeRequired}
Packaging: ${form.packagingSize}
Purpose: ${form.samplePurpose}
Annual Volume: ${form.annualVolume}
Current Supplier: ${form.currentSupplier || "Not provided"}
Priority: ${isPriority ? "🔴 HIGH" : "Normal"}
Notes: ${form.notes || "None"}
    `.trim(),
  }, contactId);

  return { contactId, dealId, isPriority };
}

// ── Quote Request Handler ─────────────────────────────────
export async function processQuoteRequest(form: QuoteRequestForm) {
  const isPriority = PRIORITY_VOLUMES.includes(form.annualVolume);

  const contactId = await upsertContact({
    email: form.email,
    firstname: form.firstName,
    lastname: form.lastName,
    company: form.company,
    country: form.country,
    phone: form.phone,
    product_interest: form.productOfInterest,
    annual_purchase_volume: form.annualVolume,
    inquiry_type: "Quote Request",
    source_product: form.sourceProduct,
  });

  const dealId = await createDeal({
    dealname: `[QUOTE] ${form.company} — ${form.productOfInterest} ${form.packagingSize}×${form.quantity}`,
    pipeline: PIPELINES.quoteRequests,
    dealstage: DEAL_STAGES.quoteRequests.requested,
    product_interest: form.productOfInterest,
    inquiry_notes: `
Product: ${form.productOfInterest}
Grade: ${form.gradeRequired}
Packaging: ${form.packagingSize} × ${form.quantity} units
Annual Volume: ${form.annualVolume}
Delivery: ${form.targetDelivery || "Flexible"}
Priority: ${isPriority ? "🔴 HIGH" : "Normal"}
Notes: ${form.notes || "None"}
    `.trim(),
  }, contactId);

  return { contactId, dealId, isPriority };
}

// ── OEM Quote Handler ─────────────────────────────────────
export async function processOEMQuote(form: OEMQuoteForm) {
  const isPriority = form.unitsPerOrder >= 500;

  const contactId = await upsertContact({
    email: form.email,
    firstname: form.firstName,
    lastname: form.lastName,
    company: form.company,
    country: form.destinationCountry,
    product_interest: form.product,
    inquiry_type: "OEM Inquiry",
  });

  const dealId = await createDeal({
    dealname: `[OEM] ${form.company} — ${form.product} ${form.volumePerUnit}×${form.unitsPerOrder}u`,
    pipeline: PIPELINES.oemInquiries,
    dealstage: DEAL_STAGES.oemInquiries.received,
    product_interest: form.product,
    inquiry_notes: `
=== OEM QUOTE REQUEST ===
Product: ${form.product}
Grade: ${form.grade}
Container: ${form.bottleType}
Volume/Unit: ${form.volumePerUnit}
Units: ${form.unitsPerOrder}
Total Volume: ~${form.unitsPerOrder} × ${form.volumePerUnit}

Label: ${form.labelType}
Label Language: ${form.labelLanguage}
CoA Header: ${form.coaHeader}
SDS Format: ${form.sdsFormat.join(", ")}
Additional Docs: ${form.additionalDocs.join(", ") || "None"}

Destination: ${form.destinationCountry}
Incoterms: ${form.incoterms}
Timeline: ${form.targetTimeline}
Priority: ${isPriority ? "🔴 HIGH — >500 units" : "Normal"}
    `.trim(),
  }, contactId);

  return { contactId, dealId, isPriority };
}

// ── Download Request Handler ──────────────────────────────
export async function processDownloadRequest(
  email: string,
  company: string,
  productSlug: string,
  fileType: "coa" | "tds" | "sds"
) {
  try {
    await upsertContact({
      email,
      firstname: "",
      lastname: "",
      company,
      country: "",
      product_interest: productSlug,
      inquiry_type: `Download ${fileType.toUpperCase()}`,
    });
  } catch {
    // Non-critical — log but don't fail the download
    console.warn("HubSpot contact update failed for download request");
  }
}
