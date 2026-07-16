"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SidebarItem {
  href: string;
  label: string;
  sublabel?: string;
}

interface SidebarGroup {
  label: string;
  href?: string;
  items: SidebarItem[];
}

interface SectionSidebarProps {
  title: string;
  baseHref: string;
  items?: SidebarItem[];
  groups?: SidebarGroup[];
  accent?: string;
}

function ItemLink({ item, accent }: { item: SidebarItem; accent: string }) {
  const pathname = usePathname();
  const active = pathname === item.href;
  return (
    <Link
      href={item.href}
      className={`block py-1.5 px-2.5 -ml-2.5 rounded-md text-[14.5px] leading-snug transition-colors ${
        active ? "font-semibold" : "text-[#5C5A55] hover:text-[#2B2A28] hover:bg-[#F5F3EF]"
      }`}
      style={active ? { backgroundColor: `${accent}1A`, color: accent } : undefined}
    >
      <span className="block">{item.label}</span>
      {item.sublabel && (
        <span className="block text-[11px] font-normal text-[#8A8782] leading-snug mt-0.5">{item.sublabel}</span>
      )}
    </Link>
  );
}

// A single collapsible group — click the heading row to fold/unfold its
// items, mirroring the accordion-style nav pattern used on lanchrom's
// reference sites. Starts open automatically when the current page lives
// inside it.
function AccordionGroup({ group, accent }: { group: SidebarGroup; accent: string }) {
  const pathname = usePathname();
  const containsActive = group.items.some(i => i.href === pathname) || (group.href != null && pathname === group.href);
  const [open, setOpen] = useState(containsActive);

  // A group with no children is just a plain nav link — no toggle affordance needed.
  if (group.items.length === 0) {
    return (
      <Link
        href={group.href ?? "#"}
        className={`block py-1.5 text-[13px] font-bold uppercase tracking-wider transition-colors ${containsActive ? "" : "text-[#5C5A55] hover:text-[#2B2A28]"}`}
        style={containsActive ? { color: accent } : undefined}
      >
        {group.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-2 py-1.5 text-left"
        aria-expanded={open}
      >
        {group.href ? (
          <Link
            href={group.href}
            onClick={e => e.stopPropagation()}
            className={`text-[13px] font-bold uppercase tracking-wider transition-colors ${containsActive ? "" : "text-[#5C5A55] hover:text-[#2B2A28]"}`}
            style={containsActive ? { color: accent } : undefined}
          >
            {group.label}
          </Link>
        ) : (
          <span className={`text-[13px] font-bold uppercase tracking-wider ${containsActive ? "" : "text-[#5C5A55]"}`} style={containsActive ? { color: accent } : undefined}>
            {group.label}
          </span>
        )}
        <span className={`flex-shrink-0 text-[10px] transition-transform duration-200 ${open ? "rotate-180" : ""}`} style={{ color: accent }}>
          ▾
        </span>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr] mt-1" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden min-h-0">
          <ul className="space-y-0.5 ml-1 border-l-2 pl-3" style={{ borderColor: containsActive ? accent : "#EFEDE8" }}>
            {group.items.map(item => (
              <li key={item.href}><ItemLink item={item} accent={accent} /></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function SectionSidebar({
  title,
  baseHref,
  items,
  groups,
  accent = "#3C6E71",
}: SectionSidebarProps) {
  const pathname = usePathname();
  const flatHasActive = items?.some(i => i.href === pathname) ?? false;
  const [listOpen, setListOpen] = useState(true);

  return (
    <nav className="hidden lg:block w-[260px] flex-shrink-0 sticky top-28 self-start max-h-[calc(100vh-150px)] overflow-y-auto pr-4 pb-8">
      <div className="flex items-center justify-between mb-5">
        <Link href={baseHref} className="flex items-center group">
          <span className="text-[13px] font-bold uppercase tracking-wider text-[#2B2A28] group-hover:text-[#3C6E71]">
            {title}
          </span>
        </Link>
        {items && items.length > 8 && (
          <button
            type="button"
            onClick={() => setListOpen(o => !o)}
            aria-expanded={listOpen}
            aria-label={listOpen ? `Collapse ${title} list` : `Expand ${title} list`}
            className="text-[11px] flex-shrink-0 transition-transform duration-200"
            style={{ color: accent, transform: listOpen ? "rotate(180deg)" : "none" }}
          >
            ▾
          </button>
        )}
      </div>

      {items && (
        <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${listOpen || flatHasActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden min-h-0">
            <ul className="space-y-1 border-l-2 border-[#EFEDE8] pl-3">
              {items.map(item => (
                <li key={item.href}><ItemLink item={item} accent={accent} /></li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {groups && (
        <div className="space-y-4">
          {groups.map(group => (
            <AccordionGroup key={group.label} group={group} accent={accent} />
          ))}
        </div>
      )}
    </nav>
  );
}
