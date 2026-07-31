"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, FileText, Loader2, X } from "lucide-react";
import { getRecaptchaToken } from "@/lib/recaptcha";

type DocumentType = "coa" | "tds" | "sds";

type FormData = {
  email: string;
  company: string;
  productName: string;
  fileType: DocumentType;
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialFileType?: DocumentType;
  prefilledProduct?: string;
}

const DOCUMENT_LABELS: Record<DocumentType, string> = {
  coa: "Certificate of Analysis (CoA)",
  tds: "Technical Data Sheet (TDS)",
  sds: "Safety Data Sheet (SDS)",
};

export default function DocumentRequestModal({
  isOpen,
  onClose,
  initialFileType = "coa",
  prefilledProduct = "",
}: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit, getValues } = useForm<FormData>({
    defaultValues: {
      fileType: initialFileType,
      productName: prefilledProduct,
    },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError("");

    try {
      const token = await getRecaptchaToken("document");
      const response = await fetch("/api/documents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          recaptchaToken: token,
          sourceUrl: window.location.href,
        }),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Unable to submit this document request.");
      }

      setSubmitted(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Submission failed. Please email info@lanchrom.com.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const inputClass =
    "w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3C6E71]";
  const labelClass = "mb-1 block text-xs font-semibold text-slate-700";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between bg-[#2B2A28] px-6 py-4">
          <div>
            <p className="flex items-center gap-2 font-bold text-white">
              <FileText className="h-4 w-4" />
              Request CoA / TDS / SDS
            </p>
            <p className="text-xs text-blue-300">Response within 1 business day</p>
          </div>
          <button type="button" onClick={onClose} className="text-white/60 hover:text-white" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <CheckCircle className="mx-auto mb-3 h-12 w-12 text-green-500" />
            <h3 className="mb-2 text-lg font-bold text-slate-900">Document Request Sent</h3>
            <p className="mb-5 text-sm text-slate-500">
              Our team will email the {getValues("fileType").toUpperCase()} within 1 business day.
            </p>
            <button type="button" onClick={onClose} className="btn-primary w-full justify-center">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6">
            <div>
              <label className={labelClass}>Document Type *</label>
              <select {...register("fileType", { required: true })} className={inputClass}>
                {(Object.keys(DOCUMENT_LABELS) as DocumentType[]).map((fileType) => (
                  <option key={fileType} value={fileType}>
                    {DOCUMENT_LABELS[fileType]}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Product / Solvent *</label>
              <input
                {...register("productName", { required: true })}
                className={inputClass}
                placeholder="e.g. HPLC Grade Acetonitrile"
              />
            </div>
            <div>
              <label className={labelClass}>Business Email *</label>
              <input
                {...register("email", { required: true })}
                type="email"
                className={inputClass}
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className={labelClass}>Company *</label>
              <input
                {...register("company", { required: true })}
                className={inputClass}
                placeholder="Your Company Name"
              />
            </div>
            {error && (
              <div className="rounded-md border border-red-200 bg-red-50 p-3 text-xs text-red-600">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center py-2.5"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Submit Document Request"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
