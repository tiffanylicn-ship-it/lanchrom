"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { X, CheckCircle, Loader2 } from "lucide-react";
import type { QuoteRequestForm } from "@/types";
import { getRecaptchaToken } from "@/lib/recaptcha";

const COUNTRIES = ["India","United States","Germany","United Kingdom","Vietnam","Thailand","Malaysia","Indonesia","UAE","Saudi Arabia","South Korea","Japan","Australia","France","Netherlands","Other"];
const GRADES = ["HPLC Gradient Grade","HPLC Standard Grade","LC-MS Grade","UPLC Grade","GC Grade","Pharma USP/EP","Electronic Grade","Food Grade"];
const SIZES = ["100mL","250mL","500mL","1L","2.5L","4L","20L","25L","200L","IBC","Custom"];
const VOLUMES = ["< $10,000 / year","$10,000 – $50,000 / year","$50,000 – $200,000 / year","> $200,000 / year"];

interface Props { isOpen: boolean; onClose: () => void; prefilledProduct?: string; selectedPackaging?: string; }

export default function QuoteModal({ isOpen, onClose, prefilledProduct = "", selectedPackaging = "" }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm<QuoteRequestForm>({ defaultValues: { productOfInterest: prefilledProduct, packagingSize: selectedPackaging } });

  const onSubmit = async (data: QuoteRequestForm) => {
    setLoading(true);
    try {
      const token = await getRecaptchaToken("quote");
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken: token, sourceUrl: window.location.href }),
      });
      const result = await res.json().catch(() => null);
      if (!res.ok || !result?.success) {
        throw new Error(result?.message || "Unable to submit this request.");
      }
      setSubmitted(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Submission failed. Please email info@lanchrom.com."
      );
    }
    finally { setLoading(false); }
  };

  if (!isOpen) return null;
  const inp = "w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3C6E71]";
  const lbl = "block text-xs font-semibold text-slate-700 mb-1";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="bg-[#2B2A28] px-6 py-4 rounded-t-2xl flex items-center justify-between">
          <div><p className="text-white font-bold">💬 Request Quote</p><p className="text-blue-400 text-xs">Response within 1 business day</p></div>
          <button onClick={onClose} className="text-white/60 hover:text-white"><X className="w-5 h-5" /></button>
        </div>
        {submitted ? (
          <div className="p-8 text-center"><CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" /><h3 className="text-lg font-bold text-slate-900 mb-2">Quote Request Sent!</h3><p className="text-slate-500 text-sm mb-4">Our team will send a detailed quote within 1 business day.</p><button onClick={onClose} className="btn-primary w-full justify-center">Close</button></div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div><label className={lbl}>First Name *</label><input {...register("firstName",{required:true})} className={inp} /></div>
              <div><label className={lbl}>Last Name *</label><input {...register("lastName",{required:true})} className={inp} /></div>
            </div>
            <div><label className={lbl}>Business Email *</label><input {...register("email",{required:true})} type="email" className={inp} /></div>
            <div className="grid grid-cols-2 gap-3">
              <div><label className={lbl}>Company *</label><input {...register("company",{required:true})} className={inp} /></div>
              <div><label className={lbl}>Country *</label><select {...register("country",{required:true})} className={inp}><option value="">Select</option>{COUNTRIES.map(c=><option key={c}>{c}</option>)}</select></div>
            </div>
            <div><label className={lbl}>Product *</label><input {...register("productOfInterest",{required:true})} className={inp} placeholder="e.g. HPLC Grade Acetonitrile" /></div>
            <div className="grid grid-cols-2 gap-3">
              <div><label className={lbl}>Grade *</label><select {...register("gradeRequired",{required:true})} className={inp}><option value="">Select</option>{GRADES.map(g=><option key={g}>{g}</option>)}</select></div>
              <div><label className={lbl}>Packaging *</label><select {...register("packagingSize",{required:true})} className={inp}><option value="">Select</option>{SIZES.map(s=><option key={s}>{s}</option>)}</select></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div><label className={lbl}>Quantity (units) *</label><input {...register("quantity",{required:true})} className={inp} placeholder="e.g. 12" /></div>
              <div><label className={lbl}>Annual Volume *</label><select {...register("annualVolume",{required:true})} className={inp}><option value="">Select</option>{VOLUMES.map(v=><option key={v}>{v}</option>)}</select></div>
            </div>
            <div><label className={lbl}>Notes / Special Requirements</label><textarea {...register("notes")} rows={2} className={inp} /></div>
            {error && <div className="text-red-500 text-xs">{error}</div>}
            <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-2.5">
              {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : "Submit Quote Request"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
