// Sidebar nav for the Solutions section — shared by the index page and every
// solutions sub-page so the list only lives in one place and stays in sync.
// "Mobile Phase" nests its three method pages under one foldable group;
// mirrors the accordion-style nav used elsewhere on the site.
export const SOLUTION_NAV_GROUPS = [
  { label: "Overview", href: "/solutions", items: [] },
  {
    label: "Mobile Phase",
    href: "/solutions/mobile-phase",
    items: [
      { href: "/solutions/mobile-phase/fermentation-analysis", label: "Fermentation Analysis" },
      { href: "/solutions/mobile-phase/pharma-qc", label: "Pharma QC" },
      { href: "/solutions/mobile-phase/food-safety", label: "Food Safety" },
    ],
  },
  { label: "Reagent Kits", href: "/solutions/reagent-kits", items: [] },
  { label: "Custom Packaging", href: "/solutions/custom-packaging", items: [] },
];
