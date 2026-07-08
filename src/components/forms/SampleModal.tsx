"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { getRecaptchaToken } from "@/lib/recaptcha";

interface FormData {
  firstName: string; lastName: string; email: string; company: string;
  country: string; phone?: string; productOfInterest: string; gradeRequired: string;
  packagingSize: string; samplePurpose: string; annualVolume: string;
  currentSupplier?: string; notes?: string;
}

const COUNTRIES = ["India","United States","Germany","United Kingdom","Vietnam","Thailand","Malaysia","Indonesia","UAE","Saudi Arabia","South Korea","Japan","Australia","France","Netherlands","Switzerland","Other"];
const GRADES = ["HPLC Gradient Grade","HPLC Standard Grade","LC-MS Grade","UPLC Grade","GC Grade","Pharma USP/EP","Electronic Grade","Food Grade","Not sure"];
const SIZES = ["100mL","250mL","500mL","1L","2.5L","4L","20L","Custom"];
const VOLUMES = ["Just exploring","< $10,000 / year","$10,000 – $50,000 / year","$50,000 – $200,000 / year","> $200,000 / year"];

interface Props { isOpen: boolean; onClose: () => void; prefilledProduct?: string; }

export default function SampleModal({ isOpen, onClose, prefilledProduct = "" }: Props) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit, formState: { errors }, trigger, getValues } = useForm<FormData>({
    defaultValues: { productOfInterest: prefilledProduct },
  });

  const stepFields: (keyof FormData)[][] = [
    ["firstName","lastName","email","company","country"],
    ["productOfInterest","gradeRequired","packagingSize","samplePurpose"],
    ["annualVolume"],
  ];

  const nextStep = async () => {
    const valid = await trigger(stepFields[step - 1]);
    if (valid) setStep(s => s + 1);
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true); setError("");
    try {
      const token = await getRecaptchaToken("sample");
      const res = await fetch("/api/sample", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken: token, sourceUrl: window.location.href }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch { setError("Failed. Please email sales@lanchrom.com"); }
    finally { setLoading(false); }
  };

  if (!isOpen) return null;
  const inp = "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3C6E71]";
  const lbl = "block text-xs font-semibold text-gray-700 mb-1";
  const err = "text-red-500 text-xs mt-1";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
      <div style={{ position: "absolute", inset: 0 }} onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-y-auto" style={{ maxHeight: "90vh" }}>
        <div style={{ background: "#2B2A28", padding: "16px 24px", borderRadius: "16px 16px 0 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ color: "white", fontWeight: 700, fontSize: "0.95rem" }}>🧪 Get Free Sample</p>
            <p style={{ color: "#60A5FA", fontSize: "0.75rem", marginTop: 2 }}>LANCHROM™ — 1 business day response</p>
          </div>
          <button onClick={onClose} style={{ color: "rgba(255,255,255,0.6)", background: "none", border: "none", cursor: "pointer" }}><X size={20} /></button>
        </div>

        {/* Step indicator */}
        <div style={{ padding: "16px 24px 8px", display: "flex", gap: 8, alignItems: "center" }}>
          {[1,2,3].map(s => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, flex: s < 3 ? 1 : "auto" }}>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: step >= s ? "#3C6E71" : "#E2E8F0", color: step >= s ? "white" : "#8A8782", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700 }}>{s}</div>
              {s < 3 && <div style={{ flex: 1, height: 2, background: step > s ? "#3C6E71" : "#E2E8F0" }} />}
            </div>
          ))}
        </div>
        <p style={{ padding: "0 24px 12px", fontSize: "0.75rem", color: "#8A8782" }}>{["Contact Info","Product Requirements","Purchasing Info"][step-1]}</p>

        {submitted ? (
          <div style={{ padding: "24px", textAlign: "center" }}>
            <CheckCircle size={52} color="#22C55E" style={{ margin: "0 auto 16px" }} />
            <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 8 }}>Request Submitted!</h3>
            <p style={{ color: "#5C5A55", fontSize: "0.875rem", marginBottom: 4 }}>Our team will contact you within <strong>1 business day</strong>.</p>
            <p style={{ color: "#8A8782", fontSize: "0.75rem", marginBottom: 20 }}>Confirmation sent to {getValues("email")}</p>
            <button onClick={onClose} style={{ background: "#3C6E71", color: "white", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", width: "100%" }}>Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "0 24px 24px" }}>
            {step === 1 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div><label className={lbl}>First Name *</label><input {...register("firstName",{required:"Required"})} className={inp} placeholder="Jane" />{errors.firstName && <p className={err}>{errors.firstName.message}</p>}</div>
                  <div><label className={lbl}>Last Name *</label><input {...register("lastName",{required:"Required"})} className={inp} />{errors.lastName && <p className={err}>{errors.lastName.message}</p>}</div>
                </div>
                <div><label className={lbl}>Business Email *</label><input {...register("email",{required:"Required",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Valid email required"}})} type="email" className={inp} placeholder="you@company.com" />{errors.email && <p className={err}>{errors.email.message}</p>}</div>
                <div><label className={lbl}>Company Name *</label><input {...register("company",{required:"Required"})} className={inp} />{errors.company && <p className={err}>{errors.company.message}</p>}</div>
                <div><label className={lbl}>Country *</label><select {...register("country",{required:"Required"})} className={inp}><option value="">Select country</option>{COUNTRIES.map(c=><option key={c}>{c}</option>)}</select>{errors.country && <p className={err}>{errors.country.message}</p>}</div>
                <div><label className={lbl}>Phone / WhatsApp</label><input {...register("phone")} className={inp} /></div>
              </div>
            )}
            {step === 2 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div><label className={lbl}>Product of Interest *</label><input {...register("productOfInterest",{required:"Required"})} className={inp} placeholder="e.g. HPLC Grade Acetonitrile" />{errors.productOfInterest && <p className={err}>{errors.productOfInterest.message}</p>}</div>
                <div><label className={lbl}>Grade Required *</label><select {...register("gradeRequired",{required:"Required"})} className={inp}><option value="">Select grade</option>{GRADES.map(g=><option key={g}>{g}</option>)}</select>{errors.gradeRequired && <p className={err}>{errors.gradeRequired.message}</p>}</div>
                <div><label className={lbl}>Sample Size *</label><select {...register("packagingSize",{required:"Required"})} className={inp}><option value="">Select size</option>{SIZES.map(s=><option key={s}>{s}</option>)}</select>{errors.packagingSize && <p className={err}>{errors.packagingSize.message}</p>}</div>
                <div><label className={lbl}>Application / Purpose *</label><textarea {...register("samplePurpose",{required:"Required",minLength:{value:10,message:"Min 10 chars"}})} rows={3} className={inp} placeholder="e.g. HPLC method development for pharmaceutical QC" />{errors.samplePurpose && <p className={err}>{errors.samplePurpose.message}</p>}</div>
                <div><label className={lbl}>Current Supplier</label><input {...register("currentSupplier")} className={inp} placeholder="e.g. Sigma-Aldrich, Merck..." /></div>
              </div>
            )}
            {step === 3 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div><label className={lbl}>Estimated Annual Purchase Volume *</label><select {...register("annualVolume",{required:"Required"})} className={inp}><option value="">Select volume</option>{VOLUMES.map(v=><option key={v}>{v}</option>)}</select>{errors.annualVolume && <p className={err}>{errors.annualVolume.message}</p>}</div>
                <div><label className={lbl}>Additional Notes</label><textarea {...register("notes")} rows={3} className={inp} /></div>
                <p style={{ fontSize: "0.7rem", color: "#8A8782" }}>Your information is kept confidential and only shared with our technical sales team.</p>
                {error && <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", color: "#DC2626", padding: 10, borderRadius: 8, fontSize: "0.875rem" }}>{error}</div>}
              </div>
            )}
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              {step > 1 && <button type="button" onClick={() => setStep(s => s-1)} style={{ flex: 1, border: "1px solid #D1D5DB", background: "white", color: "#374151", fontWeight: 600, fontSize: "0.875rem", padding: "10px", borderRadius: 8, cursor: "pointer" }}>← Back</button>}
              {step < 3 ? (
                <button type="button" onClick={nextStep} style={{ flex: 1, background: "#3C6E71", color: "white", border: "none", fontWeight: 700, fontSize: "0.875rem", padding: "10px", borderRadius: 8, cursor: "pointer" }}>Continue →</button>
              ) : (
                <button type="submit" disabled={loading} style={{ flex: 1, background: "#3C6E71", color: "white", border: "none", fontWeight: 700, fontSize: "0.875rem", padding: "10px", borderRadius: 8, cursor: "pointer", opacity: loading ? 0.6 : 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  {loading ? <><Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} /> Submitting...</> : "Submit Request ✓"}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
