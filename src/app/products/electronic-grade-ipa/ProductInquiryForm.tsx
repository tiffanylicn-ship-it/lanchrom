"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  CheckCircle2,
  FileText,
  FlaskConical,
  Loader2,
  MessageSquareText,
} from "lucide-react";
import { getRecaptchaToken } from "@/lib/recaptcha";
import styles from "./product-page.module.css";

type RequestType = "sample" | "quote" | "information";

type FormData = {
  name: string;
  company: string;
  country: string;
  email: string;
  phone?: string;
  product: string;
  grade?: string;
  packagingSize?: string;
  quantity?: string;
  annualVolume?: string;
  application: string;
  message?: string;
};

const requestOptions = [
  {
    value: "sample" as const,
    label: "Get Free Sample",
    note: "Qualification sample",
    icon: FlaskConical,
  },
  {
    value: "quote" as const,
    label: "Request Quote",
    note: "Pricing and lead time",
    icon: FileText,
  },
  {
    value: "information" as const,
    label: "Product Information",
    note: "TDS, SDS and specs",
    icon: MessageSquareText,
  },
];

const sampleSizes = ["100 mL", "250 mL", "500 mL", "1 L", "Custom sample size"];
const quotePackaging = ["1 L bottle", "2.5 L bottle", "5 L container", "20 L drum", "200 L drum", "IBC", "Custom packaging"];
const annualVolumes = ["Qualification stage", "< 1,000 L / year", "1,000–10,000 L / year", "10,000–50,000 L / year", "> 50,000 L / year"];

const requestCopy: Record<RequestType, { title: string; success: string; button: string; recaptcha: string }> = {
  sample: {
    title: "Free Sample Request",
    success: "Your sample request has been received. We will confirm availability and shipping requirements within one business day.",
    button: "Submit sample request",
    recaptcha: "product_sample",
  },
  quote: {
    title: "Quote Request",
    success: "Your quote request has been received. We will respond with pricing, lead time, and packaging options within one business day.",
    button: "Submit quote request",
    recaptcha: "product_quote",
  },
  information: {
    title: "Product Information Request",
    success: "Your product information request has been received. Our technical sales team will respond within one business day.",
    button: "Request product information",
    recaptcha: "product_information",
  },
};

export default function ProductInquiryForm({
  productName = "Electronic Grade IPA",
  gradeLabel = "Electronic Grade",
  gradeOptions,
}: {
  productName?: string;
  gradeLabel?: string;
  gradeOptions?: string[];
}) {
  const [requestType, setRequestType] = useState<RequestType>("sample");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { product: productName, grade: gradeLabel },
    shouldUnregister: true,
  });

  function selectRequestType(nextType: RequestType) {
    setRequestType(nextType);
    setSubmitted(false);
    setError("");
    clearErrors(["packagingSize", "quantity", "annualVolume"]);
  }

  async function onSubmit(data: FormData) {
    setLoading(true);
    setError("");
    const copy = requestCopy[requestType];

    try {
      const recaptchaToken = await getRecaptchaToken(copy.recaptcha);
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          type: copy.title,
          grade: data.grade || gradeLabel,
          message: [
            `Request type: ${copy.title}`,
            `Application: ${data.application}`,
            data.message || "",
          ].filter(Boolean).join("\n\n"),
          recaptchaToken,
          sourceUrl: window.location.href,
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Unable to submit this request.");
      }
      setSubmitted(true);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Submission failed. Please email info@lanchrom.com.");
    } finally {
      setLoading(false);
    }
  }

  const errorText = (message?: string) => message ? <span className={styles.fieldError}>{message}</span> : null;
  const copy = requestCopy[requestType];

  return (
    <div className={styles.inquiryFormCard}>
      <fieldset className={styles.requestTypeFieldset}>
        <legend>How can we help?</legend>
        <div className={styles.requestTypeGrid} role="radiogroup" aria-label="Request type">
          {requestOptions.map(({ value, label, note, icon: Icon }) => (
            <label
              key={value}
              className={`${styles.requestTypeCard} ${requestType === value ? styles.requestTypeCardActive : ""}`}
            >
              <input
                type="radio"
                name="requestType"
                value={value}
                checked={requestType === value}
                onChange={() => selectRequestType(value)}
              />
              <Icon aria-hidden="true" />
              <span><strong>{label}</strong><small>{note}</small></span>
              {requestType === value && <CheckCircle2 className={styles.requestTypeCheck} aria-hidden="true" />}
            </label>
          ))}
        </div>
      </fieldset>

      {submitted ? (
        <div className={styles.formSuccess} role="status">
          <CheckCircle2 aria-hidden="true" />
          <h3>Request received</h3>
          <p>{copy.success}</p>
          <button type="button" onClick={() => setSubmitted(false)}>Send another request</button>
        </div>
      ) : (
        <form className={styles.inquiryForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formColumns}>
            <div className={styles.formColumn}>
              <div className={styles.formSectionHeading}>
                <div><strong>Contact information</strong><small>Fields marked * are required</small></div>
              </div>
              <div className={styles.formGrid}>
                <label>Name *<input {...register("name", { required: "Name is required" })} autoComplete="name" />{errorText(errors.name?.message)}</label>
                <label>Company *<input {...register("company", { required: "Company is required" })} autoComplete="organization" />{errorText(errors.company?.message)}</label>
                <label>Country *<input {...register("country", { required: "Country is required" })} autoComplete="country-name" />{errorText(errors.country?.message)}</label>
                <label>Business email *<input {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid business email" } })} type="email" autoComplete="email" />{errorText(errors.email?.message)}</label>
              </div>
            </div>

            <div className={styles.formColumn}>
              <div className={styles.formSectionHeading}>
                <div><strong>Request details</strong><small>{copy.title}</small></div>
              </div>
              <input {...register("product")} type="hidden" />
              <div className={styles.formProductBar}><span>Selected product</span><strong>{productName}</strong><small>{gradeLabel}</small></div>
              <div className={styles.formGrid}>
                {gradeOptions && gradeOptions.length > 1 ? (
                  <label className={styles.formWide}>Required grade *
                    <select {...register("grade", { required: "Choose a grade" })} defaultValue={gradeLabel}>
                      {gradeOptions.map((grade) => <option key={grade}>{grade}</option>)}
                    </select>
                    {errorText(errors.grade?.message)}
                  </label>
                ) : <input {...register("grade")} type="hidden" value={gradeLabel} />}
                {requestType === "sample" && (
                  <>
                    <label>Preferred sample size *
                      <select {...register("packagingSize", { required: "Choose a sample size" })} defaultValue="">
                        <option value="" disabled>Select size</option>
                        {sampleSizes.map((size) => <option key={size}>{size}</option>)}
                      </select>
                      {errorText(errors.packagingSize?.message)}
                    </label>
                    <label>Estimated annual volume
                      <select {...register("annualVolume")} defaultValue="">
                        <option value="">Select if known</option>
                        {annualVolumes.map((volume) => <option key={volume}>{volume}</option>)}
                      </select>
                    </label>
                  </>
                )}

                {requestType === "quote" && (
              <>
                <label>Packaging *
                  <select {...register("packagingSize", { required: "Choose a packaging format" })} defaultValue="">
                    <option value="" disabled>Select packaging</option>
                    {quotePackaging.map((size) => <option key={size}>{size}</option>)}
                  </select>
                  {errorText(errors.packagingSize?.message)}
                </label>
                <label>Required quantity *<input {...register("quantity", { required: "Quantity is required" })} placeholder="e.g. 40 drums / 2 IBC" />{errorText(errors.quantity?.message)}</label>
                <label className={styles.formWide}>Estimated annual volume *
                  <select {...register("annualVolume", { required: "Choose an annual volume" })} defaultValue="">
                    <option value="" disabled>Select volume</option>
                    {annualVolumes.map((volume) => <option key={volume}>{volume}</option>)}
                  </select>
                  {errorText(errors.annualVolume?.message)}
                </label>
              </>
                )}

                {requestType === "information" && (
              <label className={styles.formWide}>Information needed
                <select {...register("packagingSize")} defaultValue="Technical specification">
                  <option>Technical specification</option>
                  <option>TDS / SDS / sample COA</option>
                  <option>Packaging and logistics</option>
                  <option>Regulatory and compliance</option>
                  <option>Other technical information</option>
                </select>
              </label>
                )}

                <label className={styles.formWide}>Application *<input {...register("application", { required: "Application is required" })} placeholder="Wafer cleaning, CMP, advanced packaging…" />{errorText(errors.application?.message)}</label>
                <label className={styles.formWide}>Additional requirements<textarea {...register("message")} rows={3} placeholder="Target specification, impurity limits, or destination market." /></label>
              </div>
            </div>
          </div>

          {error && <p className={styles.formError} role="alert">{error}</p>}
          <div className={styles.formSubmitRow}>
            <p className={styles.formPrivacy}>Shared only with the LANCHROM technical sales team.</p>
            <button className={styles.submitButton} type="submit" disabled={loading}>
              {loading ? <><Loader2 className={styles.spinner} aria-hidden="true" /> Submitting…</> : copy.button}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
