"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

type FormState = {
  name: string;
  email: string;
  company: string;
  territory: string;
  phone: string;
  website: string;
  yearsInBusiness: string;
  salesTeam: string;
  industries: string;
  warehousing: string;
  importCapability: string;
  currentBrands: string;
  annualForecast: string;
  targetAccounts: string;
  exclusivity: string;
  notes: string;
  consent: boolean;
};

const initialState = (territory: string): FormState => ({
  name: "",
  email: "",
  company: "",
  territory,
  phone: "",
  website: "",
  yearsInBusiness: "",
  salesTeam: "",
  industries: "",
  warehousing: "",
  importCapability: "",
  currentBrands: "",
  annualForecast: "",
  targetAccounts: "",
  exclusivity: "Open to discussion",
  notes: "",
  consent: false,
});

export default function DistributorApplicationForm({ initialTerritory = "" }: { initialTerritory?: string }) {
  const [form, setForm] = useState<FormState>(() => initialState(initialTerritory));
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const update = (field: keyof FormState, value: string | boolean) => {
    setForm(current => ({ ...current, [field]: value }));
  };

  async function submitApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.consent) {
      setStatus("error");
      setMessage("Please confirm that LANCHROM may review and respond to this application.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    const applicationNotes = [
      "DISTRIBUTOR APPLICATION",
      `Company website: ${form.website || "Not provided"}`,
      `Years in business: ${form.yearsInBusiness || "Not provided"}`,
      `Sales team / coverage: ${form.salesTeam || "Not provided"}`,
      `Industries and customer base: ${form.industries}`,
      `Warehousing / local delivery: ${form.warehousing || "Not provided"}`,
      `Import / regulatory capability: ${form.importCapability}`,
      `Current brands represented: ${form.currentBrands || "Not provided"}`,
      `Target accounts / launch plan: ${form.targetAccounts || "Not provided"}`,
      `Exclusivity expectation: ${form.exclusivity}`,
      `Additional notes: ${form.notes || "None"}`,
    ].join("\n");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Distributor Partnership Application",
          name: form.name,
          email: form.email,
          company: form.company,
          country: form.territory,
          phone: form.phone,
          productOfInterest: "LANCHROM distributor portfolio",
          annualVolume: form.annualForecast,
          notes: applicationNotes,
        }),
      });

      const result = await response.json().catch(() => null) as { message?: string } | null;
      if (!response.ok) throw new Error(result?.message || "The application could not be submitted.");

      setStatus("success");
      setMessage("Thank you. Your distributor profile has been submitted for review. This submission does not create an appointment or exclusivity commitment.");
      setForm(initialState(initialTerritory));
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "The application could not be submitted. Please email sales@lanchrom.com.");
    }
  }

  const inputClass = "mt-2 w-full rounded-md border border-[#C7D9D2] bg-white px-4 py-3 text-sm text-[#173C36] outline-none transition focus:border-[#0E918C] focus:ring-2 focus:ring-[#0E918C]/15";
  const labelClass = "text-sm font-bold text-[#254B44]";

  return (
    <form onSubmit={submitApplication} className="space-y-10">
      <fieldset>
        <legend className="text-xl font-extrabold text-[#0A302E]">Company and contact</legend>
        <p className="mt-2 text-sm leading-6 text-[#667972]">Tell us who will own the distributor relationship and which legal business is applying.</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>Full name *<input required autoComplete="name" value={form.name} onChange={event => update("name", event.target.value)} className={inputClass} /></label>
          <label className={labelClass}>Work email *<input required type="email" autoComplete="email" value={form.email} onChange={event => update("email", event.target.value)} className={inputClass} /></label>
          <label className={labelClass}>Company *<input required autoComplete="organization" value={form.company} onChange={event => update("company", event.target.value)} className={inputClass} /></label>
          <label className={labelClass}>Territory / country *<input required value={form.territory} onChange={event => update("territory", event.target.value)} className={inputClass} placeholder="e.g. Germany or Benelux" /></label>
          <label className={labelClass}>Phone / WhatsApp<input autoComplete="tel" value={form.phone} onChange={event => update("phone", event.target.value)} className={inputClass} /></label>
          <label className={labelClass}>Company website<input type="url" value={form.website} onChange={event => update("website", event.target.value)} className={inputClass} placeholder="https://" /></label>
          <label className={labelClass}>Years in business<input value={form.yearsInBusiness} onChange={event => update("yearsInBusiness", event.target.value)} className={inputClass} /></label>
          <label className={labelClass}>Sales team and geographic coverage<input value={form.salesTeam} onChange={event => update("salesTeam", event.target.value)} className={inputClass} placeholder="Team size, offices and covered regions" /></label>
        </div>
      </fieldset>

      <fieldset className="border-t border-[#DCE8E3] pt-9">
        <legend className="text-xl font-extrabold text-[#0A302E]">Market capability</legend>
        <p className="mt-2 text-sm leading-6 text-[#667972]">We review technical reach, importer readiness and the practical route to qualified accounts.</p>
        <div className="mt-6 grid gap-5">
          <label className={labelClass}>Industries served and customer base *<textarea required rows={4} value={form.industries} onChange={event => update("industries", event.target.value)} className={inputClass} placeholder="Pharmaceutical QC, CRO/CDMO, food testing, environmental, university, semiconductor..." /></label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className={labelClass}>Warehousing and local delivery<textarea rows={4} value={form.warehousing} onChange={event => update("warehousing", event.target.value)} className={inputClass} placeholder="Own warehouse, 3PL, dangerous-goods capability and delivery area" /></label>
            <label className={labelClass}>Import and regulatory capability *<textarea required rows={4} value={form.importCapability} onChange={event => update("importCapability", event.target.value)} className={inputClass} placeholder="Importer-of-record experience, chemical registrations, SDS/label languages and DG handling" /></label>
          </div>
          <label className={labelClass}>Current laboratory or chemical brands represented<textarea rows={3} value={form.currentBrands} onChange={event => update("currentBrands", event.target.value)} className={inputClass} placeholder="Include overlapping product lines or channel restrictions" /></label>
        </div>
      </fieldset>

      <fieldset className="border-t border-[#DCE8E3] pt-9">
        <legend className="text-xl font-extrabold text-[#0A302E]">Launch plan</legend>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>Estimated first-year portfolio value<select required value={form.annualForecast} onChange={event => update("annualForecast", event.target.value)} className={inputClass}>
            <option value="">Select a planning range</option>
            <option>Below USD 25,000</option>
            <option>USD 25,000–50,000</option>
            <option>USD 50,000–100,000</option>
            <option>USD 100,000–250,000</option>
            <option>Above USD 250,000</option>
            <option>Not yet forecast</option>
          </select></label>
          <label className={labelClass}>Territory / exclusivity expectation<select value={form.exclusivity} onChange={event => update("exclusivity", event.target.value)} className={inputClass}>
            <option>Open to discussion</option>
            <option>Non-exclusive distribution</option>
            <option>Requesting territory exclusivity</option>
            <option>Project or account-specific cooperation</option>
          </select></label>
          <label className={`${labelClass} sm:col-span-2`}>Target accounts and first 12-month plan<textarea rows={4} value={form.targetAccounts} onChange={event => update("targetAccounts", event.target.value)} className={inputClass} placeholder="Target industries, launch products, estimated account count, samples or tenders" /></label>
          <label className={`${labelClass} sm:col-span-2`}>Additional notes<textarea rows={4} value={form.notes} onChange={event => update("notes", event.target.value)} className={inputClass} /></label>
        </div>
      </fieldset>

      <div className="border-t border-[#DCE8E3] pt-8">
        <label className="flex items-start gap-3 text-sm leading-6 text-[#5E746D]">
          <input required type="checkbox" checked={form.consent} onChange={event => update("consent", event.target.checked)} className="mt-1 h-4 w-4 accent-[#0A514C]" />
          <span>I confirm that the information is supplied for LANCHROM to review and respond to this distributor application. I understand that submission does not create an appointment, territory reservation or exclusivity commitment. See the <Link href="/privacy" className="font-bold text-[#0A514C] underline">privacy notice</Link>.</span>
        </label>

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button disabled={status === "submitting"} type="submit" className="rounded-md bg-[#0A514C] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#083E3B] disabled:cursor-not-allowed disabled:opacity-60">{status === "submitting" ? "Submitting…" : "Submit Distributor Profile"}</button>
          <a href="mailto:sales@lanchrom.com?subject=LANCHROM%20Distributor%20Application" className="text-sm font-bold text-[#0A514C] hover:text-[#0E918C]">Or email sales@lanchrom.com</a>
        </div>

        {message && <p aria-live="polite" className={`mt-5 rounded-md px-4 py-3 text-sm leading-6 ${status === "success" ? "bg-[#E8F6EF] text-[#176143]" : "bg-[#FFF1EF] text-[#8A2E24]"}`}>{message}</p>}
      </div>
    </form>
  );
}
