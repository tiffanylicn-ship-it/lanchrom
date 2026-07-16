// A thin diagonal chevron placed between homepage sections. Alternating the
// `direction` prop as you go down the page makes each divider point the
// opposite way from the last, so the sequence reads as one continuous
// V/Z zigzag thread stitching the sections together — echoing the green in
// the LANCHROM mark rather than introducing a new brand color.
export default function DiagonalDivider({
  direction = "down",
  color = "#278A5B",
}: {
  direction?: "down" | "up";
  color?: string;
}) {
  const points = direction === "down" ? "0,0 50,10 100,0" : "0,10 50,0 100,10";
  return (
    <div className="relative h-7 sm:h-10 md:h-12 overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-full block">
        <polyline points={points} fill="none" stroke={color} strokeWidth="0.6" vectorEffect="non-scaling-stroke" opacity="0.65" />
        <polyline points={points} fill="none" stroke={color} strokeWidth="0.15" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
