/**
 * A soft gradient seam between two homepage sections of different
 * background color — replaces a hard 1px border. The two colors bleed
 * into each other over ~40px instead of cutting at a sharp line, so the
 * page reads as one continuous surface rather than a stack of cards.
 */
export default function SectionSeam({ from, to }: { from: string; to: string }) {
  return (
    <div
      aria-hidden="true"
      className="h-10 w-full pointer-events-none"
      style={{ background: `linear-gradient(to bottom, ${from}, ${to})` }}
    />
  );
}
