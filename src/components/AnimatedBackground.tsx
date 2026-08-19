import { motion } from "framer-motion";

/** Decorative, non-interactive background layer using the brand's visual-element language (dot grid, diagonal hatch, glow blob, ring). */
export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-peerfit-orange/30 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-electric-orange/20 blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="dot-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <div className="diagonal-lines absolute right-0 top-0 h-64 w-64 opacity-40 [mask-image:linear-gradient(to_bottom_left,black,transparent)]" />

      <motion.div
        className="absolute right-16 top-40 hidden h-40 w-40 rounded-full border-2 border-peerfit-orange/40 md:block"
        style={{ borderRightColor: "transparent", borderTopColor: "transparent" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
