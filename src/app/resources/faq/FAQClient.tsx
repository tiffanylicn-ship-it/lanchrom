"use client";
import { useState, useRef, useEffect } from "react";

interface FAQItem { q: string; a: string; }
interface FAQSection { category: string; items: FAQItem[]; }

const CLOSE_DELAY_MS = 1000;

function AccordionRow({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && bodyRef.current) {
      setMaxHeight(`${bodyRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="border border-[#EFEDE8] rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 hover:bg-[#FBFAF8] transition-colors"
      >
        <span className="font-semibold text-[#2B2A28] text-sm">{item.q}</span>
        <span
          className="text-[#8A8782] text-lg flex-shrink-0 transition-transform duration-500 ease-out"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight,
          transition: isOpen
            ? "max-height 0.4s ease-out"
            : "max-height 0.6s ease-in 1000ms",
          overflow: "hidden",
        }}
      >
        <div ref={bodyRef} className="px-5 pb-4 text-[#5C5A55] text-sm leading-relaxed border-t border-[#EFEDE8] pt-3">
          {item.a}
        </div>
      </div>
    </div>
  );
}

export default function FAQClient({ sections }: { sections: FAQSection[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [pendingCloseId, setPendingCloseId] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleToggle = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);

    if (openId === id) {
      setPendingCloseId(id);
      closeTimer.current = setTimeout(() => {
        setOpenId(null);
        setPendingCloseId(null);
      }, CLOSE_DELAY_MS);
      return;
    }

    setOpenId(id);
    setPendingCloseId(null);
  };

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  return (
    <section className="py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {sections.map(section => (
          <div key={section.category} className="mb-12 last:mb-0">
            <h2 className="text-sm font-bold uppercase tracking-wide text-[#8A8782] mb-5">{section.category}</h2>
            <div className="space-y-2">
              {section.items.map((item, i) => {
                const id = `${section.category}-${i}`;
                const isOpen = openId === id && pendingCloseId !== id;
                return (
                  <AccordionRow key={id} item={item} isOpen={isOpen} onToggle={() => handleToggle(id)} />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
