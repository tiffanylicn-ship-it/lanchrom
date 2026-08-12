"use client";
import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { CheckCircle, Loader2, Factory } from "lucide-react";
import type { OEMQuoteForm } from "@/types";
import { getRecaptchaToken } from "@/lib/recaptcha";

const PRODUCTS = ["HPLC Grade Acetonitrile","HPLC Grade Methanol","HPLC Grade IPA","LC-MS Grade Acetonitrile","LC-MS Grade Methanol","DMSO USP Grade","Ethanol Anhydrous USP","Pharmaceutical IPA USP/EP","Electronic Grade IPA","Glycerol USP/Food Grade","Propylene Glycol USP","PEG 400","Polysorbate 80","Mannitol Injection Grade","Other — specify in notes"];
const GRADES = ["HPLC Gradient Grade","HPLC Standard Grade","LC-MS Grade","UPLC Grade","GC Grade","Pharma USP/EP","Electronic Grade","Food Grade","Anhydrous Grade"];
const BOTTLE_TYPES = [{v:"hdpe",l:"HDPE Bottle (standard)"},{v:"amber-glass",l:"Amber Glass Bottle (light-sensitive)"},{v:"fluoropolymer",l:"Fluoropolymer Bottle (corrosive)"},{v:"ss-drum",l:"Stainless Steel Drum"},{v:"flex-bag",l:"Flexible Bag / Mobile Phase Bag"}];
const VOLUMES_UNIT = ["50mL","100mL","250mL","500mL","1L","2.5L","4L","5L","7L","10L","20L","25L","200L","Custom"];
const LABEL_TYPES = [{v:"your-brand",l:"Your Brand Label (Private Label) ← Recommended"},{v:"lanchrom",l:"LANCHROM™ White Label"},{v:"no-label",l:"No Label (Bare Bottle)"}];
const LABEL_LANGS = ["English","Chinese (Simplified)","Hindi","Arabic","Korean","Japanese","English + Chinese","Custom / Multiple"];
const INCOTERMS = ["FOB","CIF","DDP","EXW","Other"];
const TIMELINES = ["Flexible (4–8 weeks)","~4 weeks","~6 weeks","~8 weeks","Urgent (discuss)"];
const COUNTRIES = ["India","United States","Germany","United Kingdom","Vietnam","Thailand","Malaysia","Indonesia","UAE","Saudi Arabia","South Korea","Japan","Australia","France","Netherlands","Switzerland","Canada","Brazil","Other"];
const DOCS = ["GMP Compliance Statement","Kosher Certificate","Halal Certificate","REACH Declaration","ISO 9001 Certificate","DMF Reference Letter"];

export default function OEMCalculatorPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit, watch } = useForm<OEMQuoteForm>({ defaultValues: { additionalDocs: [], sdsFormat: [] } });
  const units = watch("unitsPerOrder");

  const STEPS = ["Product","Packaging","Label & Docs","Logistics","Contact"];
  const inp = "w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3C6E71]";
  const lbl = "block text-sm font-semibold text-slate-700 mb-1.5";

  const onSubmit = async (data: OEMQuoteForm) => {
    setLoading(true);
    try {
      const token = await getRecaptchaToken("oem_quote");
      const res = await fetch("/api/oem-quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, recaptchaToken: token }) });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch { setError("Submission failed. Please email info@lanchrom.com"); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-[#FAFBFC] py-12">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4"><Factory className="w-6 h-6 text-[#3C6E71]" /></div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">OEM Quote Calculator</h1>
          <p className="text-slate-500">Configure your private-label or OEM order. We'll prepare a detailed quote within 2 business days.</p>
          <div className="inline-flex items-center gap-2 bg-[#FBF0EB] border border-[#ECCFC1] text-[#B5654A] text-xs font-semibold px-3 py-1.5 rounded-full mt-3">
            💡 No pricing displayed — our sales team will quote based on your exact configuration
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-xl border border-slate-200 p-1.5 mb-6 flex gap-1">
          {STEPS.map((s, i) => (
            <button key={s} onClick={() => i + 1 < step && setStep(i + 1)}
              className={`flex-1 text-xs font-semibold py-2 px-1 rounded-lg transition-colors text-center ${step === i+1 ? "bg-[#3C6E71] text-white" : step > i+1 ? "bg-[#E8F0EF] text-[#2C5154]" : "text-slate-400"}`}>
              {step > i+1 ? "✓ " : ""}{s}
            </button>
          ))}
        </div>

        {submitted ? (
          <div className="bg-white rounded-xl border border-slate-200 p-10 text-center">
            <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-900 mb-2">OEM Request Submitted!</h2>
            <p className="text-slate-500 mb-1">Our technical sales team will prepare a detailed OEM quote within <strong>2 business days</strong>.</p>
            <p className="text-slate-400 text-sm mb-6">You'll receive an email confirmation shortly.</p>
            <Link href="/products" className="btn-primary inline-flex">Browse More Products</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-5">

              {/* STEP 1 — Product */}
              {step === 1 && (
                <>
                  <h2 className="text-lg font-bold text-slate-900 border-b pb-3">Step 1: Product Selection</h2>
                  <div>
                    <label className={lbl}>Product *</label>
                    <select {...register("product",{required:true})} className={inp}>
                      <option value="">Select product</option>
                      {PRODUCTS.map(p => <option key={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={lbl}>Grade / Purity *</label>
                    <select {...register("grade",{required:true})} className={inp}>
                      <option value="">Select grade</option>
                      {GRADES.map(g => <option key={g}>{g}</option>)}
                    </select>
                  </div>
                  <div><label className={lbl}>Custom Specification (optional)</label><textarea {...register("customSpec")} rows={2} className={inp} placeholder="e.g. Water content <50 ppm, specific heavy metal limits..." /></div>
                </>
              )}

              {/* STEP 2 — Packaging */}
              {step === 2 && (
                <>
                  <h2 className="text-lg font-bold text-slate-900 border-b pb-3">Step 2: Packaging Configuration</h2>
                  <div>
                    <label className={lbl}>Bottle / Container Type *</label>
                    {BOTTLE_TYPES.map(bt => (
                      <label key={bt.v} className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg mb-2 cursor-pointer hover:border-blue-300">
                        <input type="radio" {...register("bottleType",{required:true})} value={bt.v} className="text-[#3C6E71]" />
                        <span className="text-sm text-slate-700">{bt.l}</span>
                      </label>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={lbl}>Volume per Unit *</label>
                      <select {...register("volumePerUnit",{required:true})} className={inp}>
                        <option value="">Select volume</option>
                        {VOLUMES_UNIT.map(v => <option key={v}>{v}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={lbl}>Units per Order *</label>
                      <input type="number" {...register("unitsPerOrder",{required:true,min:50,valueAsNumber:true})} className={inp} placeholder="Min. 50" min={50} />
                      {Number(units) >= 500 && <p className="text-[#3C6E71] text-xs mt-1 font-semibold">🔴 High volume — priority handling</p>}
                    </div>
                  </div>
                </>
              )}

              {/* STEP 3 — Label & Docs */}
              {step === 3 && (
                <>
                  <h2 className="text-lg font-bold text-slate-900 border-b pb-3">Step 3: Label & Documentation</h2>
                  <div>
                    <label className={lbl}>Label Type *</label>
                    {LABEL_TYPES.map(lt => (
                      <label key={lt.v} className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg mb-2 cursor-pointer hover:border-blue-300">
                        <input type="radio" {...register("labelType",{required:true})} value={lt.v} className="text-[#3C6E71]" />
                        <span className="text-sm text-slate-700">{lt.l}</span>
                      </label>
                    ))}
                  </div>
                  <div>
                    <label className={lbl}>Label Language</label>
                    <select {...register("labelLanguage")} className={inp}>
                      {LABEL_LANGS.map(l => <option key={l}>{l}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={lbl}>CoA Header</label>
                    <div className="flex gap-3">
                      {[{v:"your-company",l:"Your Company Name"},{v:"lanchrom",l:"LANCHROM™"}].map(o => (
                        <label key={o.v} className="flex items-center gap-2 text-sm"><input type="radio" {...register("coaHeader")} value={o.v} defaultChecked={o.v==="your-company"} /> {o.l}</label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className={lbl}>SDS Format (select all that apply)</label>
                    <div className="flex gap-3 flex-wrap">
                      {["GHS EU","OSHA US (HazCom 2012)","Both"].map(f => (
                        <label key={f} className="flex items-center gap-2 text-sm"><input type="checkbox" {...register("sdsFormat")} value={f} /> {f}</label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className={lbl}>Additional Documents (optional)</label>
                    <div className="grid grid-cols-2 gap-2">
                      {DOCS.map(d => (
                        <label key={d} className="flex items-center gap-2 text-sm p-2 border border-slate-100 rounded-lg">
                          <input type="checkbox" {...register("additionalDocs")} value={d} /> <span className="text-xs">{d}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* STEP 4 — Logistics */}
              {step === 4 && (
                <>
                  <h2 className="text-lg font-bold text-slate-900 border-b pb-3">Step 4: Logistics & Delivery</h2>
                  <div>
                    <label className={lbl}>Destination Country *</label>
                    <select {...register("destinationCountry",{required:true})} className={inp}>
                      <option value="">Select country</option>
                      {COUNTRIES.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={lbl}>Preferred Incoterms *</label>
                    <div className="flex flex-wrap gap-2">
                      {INCOTERMS.map(t => (
                        <label key={t} className="flex items-center gap-2 text-sm p-2 px-3 border border-slate-200 rounded-lg cursor-pointer hover:border-blue-300">
                          <input type="radio" {...register("incoterms",{required:true})} value={t} /> {t}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className={lbl}>Target Delivery Timeline</label>
                    <select {...register("targetTimeline")} className={inp}>
                      {TIMELINES.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </>
              )}

              {/* STEP 5 — Contact */}
              {step === 5 && (
                <>
                  <h2 className="text-lg font-bold text-slate-900 border-b pb-3">Step 5: Contact Information</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className={lbl}>First Name *</label><input {...register("firstName",{required:true})} className={inp} /></div>
                    <div><label className={lbl}>Last Name *</label><input {...register("lastName",{required:true})} className={inp} /></div>
                  </div>
                  <div><label className={lbl}>Business Email *</label><input {...register("email",{required:true})} type="email" className={inp} /></div>
                  <div><label className={lbl}>Company Name *</label><input {...register("company",{required:true})} className={inp} /></div>
                  <div className="bg-[#FBF0EB] border border-[#ECCFC1] rounded-lg p-3 text-xs text-[#8A4A35]">
                    <strong>Note:</strong> Our sales team will review your configuration and send a detailed OEM quote within 2 business days. No pricing is displayed on this form — all quotes are prepared individually to ensure accuracy.
                  </div>
                  {error && <div className="text-red-500 text-sm">{error}</div>}
                </>
              )}

              {/* Navigation */}
              <div className="flex gap-3 pt-4 border-t border-slate-100">
                {step > 1 && <button type="button" onClick={() => setStep(s => s - 1)} className="flex-1 border border-slate-300 text-slate-700 font-semibold text-sm py-2.5 rounded-md hover:bg-slate-50">← Back</button>}
                {step < 5 ? (
                  <button type="button" onClick={() => setStep(s => s + 1)} className="flex-1 bg-[#3C6E71] text-white font-bold text-sm py-2.5 rounded-md hover:bg-[#2C5154]">Continue →</button>
                ) : (
                  <button type="submit" disabled={loading} className="flex-1 bg-[#3C6E71] text-white font-bold text-sm py-2.5 rounded-md hover:bg-[#2C5154] disabled:opacity-60 flex items-center justify-center gap-2">
                    {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : "Submit OEM Request ✓"}
                  </button>
                )}
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
