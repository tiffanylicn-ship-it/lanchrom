"use client";
import { useState } from "react";
import { FlaskConical, FileText, Download, Factory } from "lucide-react";
import dynamic from "next/dynamic";
import type { Product, PackagingOption } from "@/types";

const SampleModal = dynamic(() => import("@/components/forms/SampleModal"), { ssr: false });
const QuoteModal = dynamic(() => import("@/components/forms/QuoteModal"), { ssr: false });
const DownloadModal = dynamic(() => import("@/components/forms/DownloadModal"), { ssr: false });

interface Props { product: Product; }

const CONTAINER_LABELS: Record<string, string> = {
  hdpe: "HDPE Bottle",
  "amber-glass": "Amber Glass",
  fluoropolymer: "Fluoropolymer",
  "ss-drum": "SS Drum",
  "flex-bag": "Flex Bag",
};

export default function ProductStickyPanel({ product }: Props) {
  const [sampleOpen, setSampleOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [downloadType, setDownloadType] = useState<"coa"|"tds">("coa");
  const [selectedVolume, setSelectedVolume] = useState<PackagingOption | null>((product.packaging ?? [])[0] || null);
  const [qty, setQty] = useState(1);

  const availableContainers = [...new Set((product.packaging ?? []).map(p => p.container))];
  const [selectedContainer, setSelectedContainer] = useState(availableContainers[0]);
  const volumesForContainer = (product.packaging ?? []).filter(p => p.container === selectedContainer);

  const handleDownload = (type: "coa"|"tds") => {
    setDownloadType(type);
    setDownloadOpen(true);
  };

  return (
    <>
      <div className="product-sticky-panel bg-white border border-[#E6E3DD] rounded-xl shadow-sm overflow-hidden">
        {/* Product header */}
        <div className="bg-[#2B2A28] px-4 py-3">
          <p className="text-white font-bold text-sm">{product.name}</p>
          <p className="text-[#A9C7C9] text-xs mt-0.5">CAS: {product.cas} {product.isHazmat && "· ⚠️ Hazmat"}</p>
        </div>

        <div className="p-4 space-y-4">
          {/* Packaging Selector */}
          <div>
            <p className="text-xs font-bold text-[#8A8782] uppercase tracking-wider mb-2">📦 Select Packaging</p>

            {/* Container type */}
            <div className="flex flex-wrap gap-1.5 mb-2">
              {availableContainers.map(c => (
                <button key={c} onClick={() => { setSelectedContainer(c); setSelectedVolume(volumesForContainer[0] || null); }}
                  className={`text-xs px-2.5 py-1 rounded-md border font-medium transition-colors ${selectedContainer === c ? "bg-[#3C6E71] text-white border-[#3C6E71]" : "border-[#E6E3DD] text-[#5C5A55] hover:border-blue-300"}`}>
                  {CONTAINER_LABELS[c]}
                </button>
              ))}
            </div>

            {/* Volume */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {volumesForContainer.map(pkg => (
                <button key={pkg.volume} onClick={() => setSelectedVolume(pkg)} disabled={!pkg.available}
                  className={`text-xs px-2.5 py-1 rounded-md border font-bold transition-colors ${selectedVolume?.volume === pkg.volume ? "bg-[#3C6E71] text-white border-[#3C6E71]" : pkg.available ? "border-[#E6E3DD] text-[#5C5A55] hover:border-blue-300" : "border-[#EFEDE8] text-slate-300 cursor-not-allowed"}`}>
                  {pkg.volume}
                </button>
              ))}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-2">
              <p className="text-xs text-[#8A8782]">Qty:</p>
              <div className="flex items-center border border-[#E6E3DD] rounded-md overflow-hidden">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-2 py-1 text-[#5C5A55] hover:bg-[#F3F1ED] text-sm font-bold">−</button>
                <span className="px-3 py-1 text-sm font-semibold text-[#2B2A28] min-w-[2rem] text-center">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="px-2 py-1 text-[#5C5A55] hover:bg-[#F3F1ED] text-sm font-bold">+</button>
              </div>
              {selectedVolume && <p className="text-xs text-[#8A8782]">= {((selectedVolume.volumeMl * qty) / 1000).toFixed(1)}L total</p>}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-2">
            <button onClick={() => setSampleOpen(true)} className="w-full flex items-center justify-center gap-2 bg-[#3C6E71] text-white font-bold text-sm py-2.5 rounded-md hover:bg-[#2C5154] transition-colors">
              <FlaskConical className="w-4 h-4" /> Get Free Sample
            </button>
            <button onClick={() => setQuoteOpen(true)} className="w-full flex items-center justify-center gap-2 border-2 border-[#3C6E71] text-[#3C6E71] font-bold text-sm py-2 rounded-md hover:bg-[#E8F0EF] transition-colors">
              <FileText className="w-4 h-4" /> Request Quote
            </button>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => handleDownload("coa")} className={`flex items-center justify-center gap-1.5 text-xs font-semibold py-2 rounded-md border transition-colors ${product.coaAvailable ? "border-slate-300 text-[#5C5A55] hover:border-blue-300" : "border-[#E6E3DD] text-[#8A8782] hover:border-blue-200"}`}>
                <Download className="w-3.5 h-3.5" /> Download CoA
              </button>
              <button onClick={() => handleDownload("tds")} className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2 rounded-md border border-[#E6E3DD] text-[#8A8782] hover:border-blue-200 transition-colors">
                <Download className="w-3.5 h-3.5" /> Download TDS
              </button>
            </div>
          </div>

          {/* OEM link */}
          <div className="pt-2 border-t border-[#EFEDE8] space-y-2">
            <a href={`/oem/quote-calculator?product=${encodeURIComponent(product.name)}`} className="w-full flex items-center justify-center gap-2 text-xs font-semibold text-[#8A8782] hover:text-[#3C6E71] py-1.5 rounded-md hover:bg-[#FBFAF8] transition-colors">
              <Factory className="w-3.5 h-3.5" /> OEM / Private Label →
            </a>
          </div>

          {/* Doc status badges */}
          <div className="pt-2 border-t border-[#EFEDE8]">
            <p className="text-xs font-bold text-[#8A8782] uppercase tracking-wider mb-2">Documents</p>
            <div className="flex flex-wrap gap-1.5">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${product.coaAvailable ? "bg-[#E8F0EF] text-[#2C5154]" : "bg-[#F3F1ED] text-[#8A8782]"}`}>
                CoA {product.coaAvailable ? "✓ Available" : "On Request"}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#F3F1ED] text-[#8A8782]">TDS On Request</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E8F0EF] text-[#3C6E71]">SDS Included</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <SampleModal isOpen={sampleOpen} onClose={() => setSampleOpen(false)} prefilledProduct={product.name} />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} prefilledProduct={product.name} selectedPackaging={selectedVolume ? `${selectedVolume.volume} × ${qty}` : ""} />
      <DownloadModal isOpen={downloadOpen} onClose={() => setDownloadOpen(false)} product={product} fileType={downloadType} />
    </>
  );
}
