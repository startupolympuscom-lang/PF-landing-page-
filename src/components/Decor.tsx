import { motion } from "framer-motion";

/**
 * Small decorative primitives pulled from the brand's "Visual Elements"
 * swatch (dot grid, diagonal hatch, plus marks, ring, wavy line, blob) —
 * used to add texture/dynamism to section backgrounds.
 */

export function PlusCluster({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className} fill="none" aria-hidden="true">
      {[
        [6, 6],
        [30, 6],
        [54, 6],
        [6, 20],
        [30, 20],
        [54, 20],
        [6, 34],
        [30, 34],
        [54, 34],
      ].map(([x, y], i) => (
        <path
          key={i}
          d={`M${x} ${y - 4}v8M${x - 4} ${y}h8`}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function WavyLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 20" className={className} fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0 10 Q 12.5 0 25 10 T 50 10 T 75 10 T 100 10 T 125 10 T 150 10 T 175 10 T 200 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RingAccent({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2.5" strokeDasharray="8 10" strokeLinecap="round" />
    </motion.svg>
  );
}

export function DotGridWash({ className = "" }: { className?: string }) {
  return (
    <div
      className={`dot-grid pointer-events-none absolute opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] ${className}`}
      aria-hidden="true"
    />
  );
}
