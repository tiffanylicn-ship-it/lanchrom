"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const SampleModal = dynamic(() => import("@/components/forms/SampleModal"), { ssr: false });

export default function HomeSampleCTA() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="bg-[#3C6E71] text-white font-bold text-base px-6 py-3 rounded-lg hover:bg-[#2C5154] transition-colors">
        Get Free Sample
      </button>
      <SampleModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
