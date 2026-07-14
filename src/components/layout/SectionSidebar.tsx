"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItem {
  href: string;
  label: string;
  sublabel?: string;
}

interface SectionSidebarProps {
  title: string;
  baseHref: string;
  items: SidebarItem[];
  accent?: string;
}

export default function SectionSidebar({
  title,
  baseHref,
  items,
  accent = "#3C6E71",
}: SectionSidebarProps) {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:block w-[250px] flex-shrink-0 sticky top-24 self-start max-h-[calc(100vh-120px)] overflow-y-auto pr-4 pb-8">
      <Link href={baseHref} className="flex items-center mb-5 group">
        <span className="text-xs font-bold uppercase tracking-wider text-[#2B2A28] group-hover:text-[#3C6E71]">
          {title}
        </span>
      </Link>
      <ul className="space-y-1 border-l-2 border-[#EFEDE8] pl-3">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block py-1.5 text-[13px] transition-colors ${
                  active
                    ? "font-semibold -ml-[14px] pl-[12px] border-l-2"
                    : "text-[#5C5A55] hover:text-[#2B2A28]"
                }`}
                style={active ? { color: accent, borderColor: accent } : undefined}
              >
                <span className="block leading-snug">{item.label}</span>
                {item.sublabel && (
                  <span className="block text-[10px] font-normal text-[#8A8782] leading-snug mt-0.5">
                    {item.sublabel}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
