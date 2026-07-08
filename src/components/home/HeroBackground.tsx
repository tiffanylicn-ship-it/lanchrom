/**
 * Hero background — a low-opacity decorative layer pulling motifs from
 * the analytical-science world (chromatogram peaks, a molecule lattice,
 * a UV/Vis absorbance curve, flowing solvent lines) without using any
 * literal photography. Redrawn as line art in the site's own palette so
 * it reads as "ours" rather than a stock-photo collage, and sits behind
 * the hero copy at low opacity so text contrast is untouched.
 */
export default function HeroBackground() {
  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMaxYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroFade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FBFAF8" stopOpacity="1" />
          <stop offset="42%" stopColor="#FBFAF8" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FBFAF8" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Molecule lattice — upper right, echoes the LC-MS ball-and-stick motif */}
      <g stroke="#3C6E71" strokeWidth="1.4" opacity="0.16" fill="none">
        <line x1="860" y1="90" x2="930" y2="55" />
        <line x1="930" y1="55" x2="1005" y2="85" />
        <line x1="930" y1="55" x2="945" y2="-10" />
        <line x1="1005" y1="85" x2="1075" y2="60" />
        <line x1="1005" y1="85" x2="1015" y2="150" />
        <line x1="860" y1="90" x2="840" y2="155" />
        <line x1="840" y1="155" x2="895" y2="200" />
        <line x1="895" y1="200" x2="965" y2="180" />
        <line x1="965" y1="180" x2="1015" y2="150" />
      </g>
      <g fill="#3C6E71" opacity="0.22">
        <circle cx="860" cy="90" r="6" />
        <circle cx="930" cy="55" r="8" />
        <circle cx="1005" cy="85" r="6" />
        <circle cx="945" cy="-10" r="5" />
        <circle cx="1075" cy="60" r="5" />
        <circle cx="1015" cy="150" r="6" />
        <circle cx="840" cy="155" r="5" />
        <circle cx="895" cy="200" r="5" />
        <circle cx="965" cy="180" r="5" />
      </g>

      {/* Chromatogram trace — mid-right, echoes the HPLC peak chart */}
      <g opacity="0.18">
        <path
          d="M 780 420 L 800 420 L 808 380 L 816 420 L 850 420 L 862 340 L 875 420
             L 905 420 L 915 300 L 928 420 L 970 420 L 985 250 L 1000 420
             L 1040 420 L 1052 360 L 1065 420 L 1100 420"
          stroke="#3C6E71"
          strokeWidth="2"
          fill="none"
          strokeLinejoin="round"
        />
        <line x1="780" y1="420" x2="1100" y2="420" stroke="#3C6E71" strokeWidth="1.2" />
      </g>

      {/* UV/Vis absorbance curve — lower right, soft terracotta accent */}
      <g opacity="0.16">
        <path
          d="M 800 540 C 840 538, 870 535, 890 520 C 910 495, 915 460, 930 440
             C 945 460, 950 495, 970 520 C 990 535, 1020 538, 1060 540"
          stroke="#B5654A"
          strokeWidth="2"
          fill="none"
        />
        <line x1="800" y1="555" x2="1060" y2="555" stroke="#B5654A" strokeWidth="1" opacity="0.5" />
      </g>

      {/* Flowing solvent line — soft horizontal wave threading the whole panel */}
      <path
        d="M 700 260 C 800 230, 900 290, 1000 255 C 1080 228, 1140 250, 1200 235"
        stroke="#C9DBD9"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M 720 300 C 820 275, 920 320, 1020 290 C 1090 268, 1150 285, 1200 275"
        stroke="#C9DBD9"
        strokeWidth="1.5"
        fill="none"
        opacity="0.35"
      />

      {/* Fade the whole composition into the paper background on the left
          so it never competes with the headline / body copy. */}
      <rect x="0" y="0" width="1200" height="600" fill="url(#heroFade)" />
    </svg>
  );
}
