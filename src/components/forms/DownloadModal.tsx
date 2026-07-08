"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { X, CheckCircle, Loader2, Download } from "lucide-react";
import type { Product } from "@/types";
import { getRecaptchaToken } from "@/lib/recaptcha";

interface Props { isOpen: boolean; onClose: () => void; product: Product; fileType: "coa"|"tds"; }

export default function DownloadModal({ isOpen, onClose, product, fileType }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<{ email: string; company: string }>();

  const onSubmit = async (data: { email: string; company: string }) => {
    setLoading(true);
    try {
      const token = await getRecaptchaToken("download");
      await fetch(`/api/download-${fileType}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, productSlug: product.slug, productName: product.name, recaptchaToken: token }) });
      setSubmitted(true);
    } finally { setLoading(false); }
  };

  if (!isOpen) return null;
  const inp = "w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3C6E71]";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm">
        <div className="bg-[#2B2A28] px-5 py-3.5 rounded-t-2xl flex items-center justify-between">
          <div><p className="text-white font-bold text-sm"><Download className="w-4 h-4 inline mr-1.5" />Download {fileType.toUpperCase()}</p><p className="text-blue-400 text-xs">{product.name}</p></div>
          <button onClick={onClose} className="text-white/60"><X className="w-4 h-4" /></button>
        </div>
        {submitted ? (
          <div className="p-6 text-center"><CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" /><h3 className="font-bold text-slate-900 mb-1">Request Received</h3><p className="text-slate-500 text-xs mb-4">Our team will email the {fileType.toUpperCase()} to you within <strong>1 business day</strong>.</p><button onClick={onClose} className="btn-primary text-sm w-full justify-center">Close</button></div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="p-5 space-y-3">
            <p className="text-slate-500 text-xs">Enter your business email to receive the {fileType === "coa" ? "Certificate of Analysis" : "Technical Data Sheet"}.</p>
            <div><label className="block text-xs font-semibold text-slate-700 mb-1">Business Email *</label><input {...register("email",{required:true})} type="email" className={inp} placeholder="you@company.com" /></div>
            <div><label className="block text-xs font-semibold text-slate-700 mb-1">Company *</label><input {...register("company",{required:true})} className={inp} placeholder="Your Company Name" /></div>
            <button type="submit" disabled={loading} className="btn-primary w-full justify-center text-sm py-2">
              {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : `Request ${fileType.toUpperCase()} →`}
            </button>
            <p className="text-[10px] text-slate-400 text-center">Files are sent by email. No spam, ever.</p>
          </form>
        )}
      </div>
    </div>
  );
}
