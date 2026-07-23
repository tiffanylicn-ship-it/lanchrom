"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";

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
  const [query, setQuery] = useState("");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredSections = useMemo(() => {
    if (!normalizedQuery) return sections;
    return sections
      .map(section => ({
        ...section,
        items: section.items.filter(item =>
          `${section.category} ${item.q} ${item.a}`.toLocaleLowerCase().includes(normalizedQuery),
        ),
      }))
      .filter(section => section.items.length > 0);
  }, [normalizedQuery, sections]);

  const resultCount = filteredSections.reduce((total, section) => total + section.items.length, 0);

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
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 border-b border-[#DCE8E3] pb-8">
          <label htmlFor="faq-search" className="mb-3 block text-sm font-bold text-[#173C36]">Search the FAQ Center</label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#0E918C]" aria-hidden="true" />
            <input
              id="faq-search"
              type="text"
              role="searchbox"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search solvents, grades, shipping, OEM..."
              className="h-13 w-full rounded-md border border-[#9FC7BB] bg-[#F4F9F7] py-3 pl-12 pr-12 text-base text-[#173C36] outline-none transition focus:border-[#0E918C] focus:bg-white focus:ring-2 focus:ring-[#0E918C]/20"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear FAQ search"
                className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center text-[#60736D] hover:text-[#0A514C]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>
          <p className="mt-3 text-sm text-[#60736D]" aria-live="polite">
            {normalizedQuery ? `${resultCount} matching ${resultCount === 1 ? "answer" : "answers"}` : "Search across every question and answer."}
          </p>
        </div>

        {filteredSections.map(section => (
          <div key={section.category} className="mb-12 last:mb-0">
            <h2 className="mb-5 text-sm font-extrabold uppercase tracking-[0.08em] text-[#0A514C]">{section.category}</h2>
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
        {filteredSections.length === 0 && (
          <div className="border border-[#DCE8E3] bg-[#F4F9F7] px-6 py-12 text-center">
            <h2 className="text-xl font-extrabold text-[#173C36]">No matching answers</h2>
            <p className="mt-3 text-sm text-[#60736D]">Try a broader keyword or clear the search to view all topics.</p>
            <button type="button" onClick={() => setQuery("")} className="mt-6 rounded-md bg-[#0A514C] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#083E3B]">Clear search</button>
          </div>
        )}
      </div>
    </section>
  );
}
