import Link from "next/link";
import { getCategoryInfo } from "@/data/categories";

export function GH2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold text-[#2B2A28] mt-14 mb-5 scroll-mt-24">
      {children}
    </h2>
  );
}

export function GH3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold text-[#2B2A28] mt-8 mb-3">{children}</h3>;
}

export function GP({ children }: { children: React.ReactNode }) {
  return <p className="text-[#3D3B37] text-[1.05rem] leading-[1.75] mb-5">{children}</p>;
}

export function GList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2.5 mb-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-[#3D3B37] text-[1rem] leading-relaxed">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3C6E71] mt-2.5 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function GOrderedList({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="space-y-3 mb-6 list-none counter-reset-[item]">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[#3D3B37] text-[1rem] leading-relaxed">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FBFAF8] border border-[#E6E3DD] text-[#3C6E71] text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export function GCallout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-8 px-6 py-5 rounded-xl bg-[#FBFAF8] border-l-2 border-[#B5654A]">
      <p className="text-xs font-bold uppercase tracking-wider text-[#B5654A] mb-2">{title}</p>
      <p className="text-[#5C5A55] text-sm leading-relaxed">{children}</p>
    </div>
  );
}

export function GTable({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="my-7 overflow-x-auto rounded-xl border border-[#E6E3DD]">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#FBFAF8]">
            {headers.map(h => (
              <th key={h} className="text-left font-bold text-[#2B2A28] px-4 py-3 border-b border-[#E6E3DD]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "" : "bg-[#FBFAF8]/50"}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 border-b border-[#EFEDE8] text-[#3D3B37]">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function GProductLinks({ categories }: { categories: string[] }) {
  return (
    <div className="my-8 flex flex-wrap gap-3">
      {categories.map(slug => {
        const cat = getCategoryInfo(slug);
        if (!cat) return null;
        return (
          <Link
            key={slug}
            href={`/products/${slug}`}
            className="px-4 py-2 rounded-full text-sm font-medium border border-[#E6E3DD] text-[#3C6E71] hover:border-[#3C6E71] hover:bg-[#FBFAF8] transition-colors"
          >
            {cat.name} →
          </Link>
        );
      })}
    </div>
  );
}

export interface TocItem { id: string; label: string; }

export function GuideTOC({ items }: { items: TocItem[] }) {
  return (
    <nav className="hidden lg:block sticky top-24 self-start w-64 flex-shrink-0">
      <p className="text-xs font-bold uppercase tracking-wider text-[#8A8782] mb-4">On This Page</p>
      <ul className="space-y-2.5 border-l border-[#E6E3DD]">
        {items.map(item => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block pl-4 -ml-px border-l border-transparent hover:border-[#3C6E71] text-sm text-[#8A8782] hover:text-[#3C6E71] transition-colors leading-snug"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
