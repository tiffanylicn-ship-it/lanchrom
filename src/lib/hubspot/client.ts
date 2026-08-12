import type {
  HubSpotContact,
  HubSpotDeal,
  OEMQuoteForm,
  QuoteRequestForm,
  SampleRequestForm,
} from "@/types";

const API_BASE = "https://api.hubapi.com";

export const PIPELINES = {
  sampleRequests: process.env.HUBSPOT_SAMPLE_PIPELINE_ID || "default",
  quoteRequests: process.env.HUBSPOT_QUOTE_PIPELINE_ID || "default",
  oemInquiries: process.env.HUBSPOT_OEM_PIPELINE_ID || "default",
  distributor: process.env.HUBSPOT_DISTRIBUTOR_PIPELINE_ID || "default",
} as const;

export const DEAL_STAGES = {
  sampleRequests: {
    new: process.env.HUBSPOT_SAMPLE_STAGE_ID || "appointmentscheduled",
    dispatched: "qualifiedtobuy",
    followUp: "presentationscheduled",
    converted: "closedwon",
    lost: "closedlost",
  },
  quoteRequests: {
    requested: process.env.HUBSPOT_QUOTE_STAGE_ID || "appointmentscheduled",
    sent: "qualifiedtobuy",
    negotiation: "decisionmakerboughtin",
    confirmed: "closedwon",
    lost: "closedlost",
  },
  oemInquiries: {
    received: process.env.HUBSPOT_OEM_STAGE_ID || "appointmentscheduled",
    review: "qualifiedtobuy",
    quoteSent: "presentationscheduled",
    sampleApproved: "decisionmakerboughtin",
    confirmed: "closedwon",
    lost: "closedlost",
  },
} as const;

type HubSpotResponse = {
  id?: string;
  [key: string]: unknown;
};

class HubSpotApiError extends Error {
  constructor(
    message: string,
    readonly status: number
  ) {
    super(message);
  }
}

function isPriorityVolume(value: string) {
  return value.includes("$50,000") || value.includes("> $200,000");
}

async function hubspotFetch(
  endpoint: string,
  method: string,
  body?: object
): Promise<HubSpotResponse> {
  const token = process.env.HUBSPOT_ACCESS_TOKEN || process.env.HUBSPOT_API_KEY;
  if (!token) {
    throw new Error("HubSpot private app access token is not configured");
  }

  const response = await fetch(`${API_BASE}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new HubSpotApiError(
      `HubSpot API error ${response.status}: ${detail}`,
      response.status
    );
  }

  return (await response.json()) as HubSpotResponse;
}

function buildContactProperties(contact: HubSpotContact) {
  const standard: Record<string, string> = {
    email: contact.email,
    firstname: contact.firstname,
    lastname: contact.lastname,
    company: contact.company,
    country: contact.country,
    ...(contact.phone && { phone: contact.phone }),
  };
  const custom: Record<string, string> = {
    ...(contact.product_interest && { product_interest: contact.product_interest }),
    ...(contact.annual_purchase_volume && {
      annual_purchase_volume: contact.annual_purchase_volume,
    }),
    ...(contact.sample_purpose && { sample_purpose: contact.sample_purpose }),
    ...(contact.inquiry_type && { inquiry_type: contact.inquiry_type }),
    ...(contact.source_product && { source_product: contact.source_product }),
    ...(contact.source_url && { source_url: contact.source_url }),
    ...(contact.current_supplier && { current_supplier: contact.current_supplier }),
  };

  return { standard, custom };
}

export async function upsertContact(contact: HubSpotContact): Promise<string> {
  const { standard, custom } = buildContactProperties(contact);
  const useCustomProperties =
    process.env.HUBSPOT_USE_CUSTOM_PROPERTIES !== "false";
  const properties = useCustomProperties ? { ...standard, ...custom } : standard;

  let existingId: string | undefined;
  try {
    const existing = await hubspotFetch(
      `/crm/v3/objects/contacts/${encodeURIComponent(contact.email)}?idProperty=email`,
      "GET"
    );
    existingId = existing.id;
  } catch (error) {
    if (!(error instanceof HubSpotApiError) || error.status !== 404) {
      throw error;
    }
  }

  const endpoint = existingId
    ? `/crm/v3/objects/contacts/${existingId}`
    : "/crm/v3/objects/contacts";
  const method = existingId ? "PATCH" : "POST";

  try {
    const result = await hubspotFetch(endpoint, method, { properties });
    const id = existingId || result.id;
    if (!id) throw new Error("HubSpot did not return a contact ID");
    return id;
  } catch (error) {
    if (
      !useCustomProperties ||
      !(error instanceof HubSpotApiError) ||
      error.status !== 400
    ) {
      throw error;
    }

    console.warn(
      "HubSpot custom contact properties are unavailable. Retrying with standard properties."
    );
    const result = await hubspotFetch(endpoint, method, {
      properties: standard,
    });
    const id = existingId || result.id;
    if (!id) throw new Error("HubSpot did not return a contact ID");
    return id;
  }
}

export async function createDeal(
  deal: HubSpotDeal,
  contactId: string
): Promise<string> {
  const standardProperties = {
    dealname: deal.dealname,
    pipeline: deal.pipeline,
    dealstage: deal.dealstage,
    ...(deal.amount && { amount: deal.amount.toString() }),
    ...(deal.inquiry_notes && { description: deal.inquiry_notes }),
  };
  const useCustomProperties =
    process.env.HUBSPOT_USE_CUSTOM_PROPERTIES !== "false";
  const properties = {
    ...standardProperties,
    ...(useCustomProperties &&
      deal.product_interest && { product_interest: deal.product_interest }),
  };
  const associations = [
    {
      to: { id: contactId },
      types: [
        {
          associationCategory: "HUBSPOT_DEFINED",
          associationTypeId: 3,
        },
      ],
    },
  ];

  try {
    const created = await hubspotFetch("/crm/v3/objects/deals", "POST", {
      properties,
      associations,
    });
    if (!created.id) throw new Error("HubSpot did not return a deal ID");
    return created.id;
  } catch (error) {
    if (
      !useCustomProperties ||
      !(error instanceof HubSpotApiError) ||
      error.status !== 400
    ) {
      throw error;
    }

    console.warn(
      "HubSpot custom deal properties are unavailable. Retrying with standard properties."
    );
    const created = await hubspotFetch("/crm/v3/objects/deals", "POST", {
      properties: standardProperties,
      associations,
    });
    if (!created.id) throw new Error("HubSpot did not return a deal ID");
    return created.id;
  }
}

export async function processSampleRequest(form: SampleRequestForm) {
  const isPriority = isPriorityVolume(form.annualVolume);
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

  let dealId: string | undefined;
  try {
    dealId = await createDeal(
      {
        dealname: `[SAMPLE] ${form.company} | ${form.productOfInterest}`,
        pipeline: PIPELINES.sampleRequests,
        dealstage: DEAL_STAGES.sampleRequests.new,
        product_interest: form.productOfInterest,
        inquiry_notes: `Grade: ${form.gradeRequired}
Packaging: ${form.packagingSize}
Purpose: ${form.samplePurpose}
Annual Volume: ${form.annualVolume}
Current Supplier: ${form.currentSupplier || "Not provided"}
Priority: ${isPriority ? "HIGH" : "Normal"}
Notes: ${form.notes || "None"}`,
      },
      contactId
    );
  } catch (error) {
    console.warn("HubSpot sample deal creation failed; contact was retained:", error);
  }

  return { contactId, dealId, isPriority };
}

export async function processQuoteRequest(form: QuoteRequestForm) {
  const isPriority = isPriorityVolume(form.annualVolume);
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
    source_url: form.sourceUrl,
  });

  let dealId: string | undefined;
  try {
    dealId = await createDeal(
      {
        dealname: `[QUOTE] ${form.company} | ${form.productOfInterest} ${form.packagingSize} x ${form.quantity}`,
        pipeline: PIPELINES.quoteRequests,
        dealstage: DEAL_STAGES.quoteRequests.requested,
        product_interest: form.productOfInterest,
        inquiry_notes: `Product: ${form.productOfInterest}
Grade: ${form.gradeRequired}
Packaging: ${form.packagingSize} x ${form.quantity} units
Annual Volume: ${form.annualVolume}
Delivery: ${form.targetDelivery || "Flexible"}
Priority: ${isPriority ? "HIGH" : "Normal"}
Source URL: ${form.sourceUrl || "Not provided"}
Notes: ${form.notes || "None"}`,
      },
      contactId
    );
  } catch (error) {
    console.warn("HubSpot quote deal creation failed; contact was retained:", error);
  }

  return { contactId, dealId, isPriority };
}

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

  let dealId: string | undefined;
  try {
    dealId = await createDeal(
      {
        dealname: `[OEM] ${form.company} | ${form.product} ${form.volumePerUnit} x ${form.unitsPerOrder}`,
        pipeline: PIPELINES.oemInquiries,
        dealstage: DEAL_STAGES.oemInquiries.received,
        product_interest: form.product,
        inquiry_notes: `Product: ${form.product}
Grade: ${form.grade}
Container: ${form.bottleType}
Volume per unit: ${form.volumePerUnit}
Units: ${form.unitsPerOrder}
Label: ${form.labelType}
Label language: ${form.labelLanguage}
CoA header: ${form.coaHeader}
SDS formats: ${form.sdsFormat.join(", ")}
Additional documents: ${form.additionalDocs.join(", ") || "None"}
Destination: ${form.destinationCountry}
Incoterms: ${form.incoterms}
Timeline: ${form.targetTimeline}
Priority: ${isPriority ? "HIGH" : "Normal"}`,
      },
      contactId
    );
  } catch (error) {
    console.warn("HubSpot OEM deal creation failed; contact was retained:", error);
  }

  return { contactId, dealId, isPriority };
}

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
    console.warn("HubSpot contact update failed for download request");
  }
}
