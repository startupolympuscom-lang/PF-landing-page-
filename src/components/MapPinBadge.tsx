import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface MapPinBadgeProps {
  icon: LucideIcon;
  label: string;
  distance: string;
  className?: string;
  delay?: number;
}

export function MapPinBadge({ icon: Icon, label, distance, className = "", delay = 0 }: MapPinBadgeProps) {
  return (
    <motion.div
      className={`absolute z-20 flex items-center gap-2 rounded-xl border border-black/5 bg-pure-white/95 px-3 py-2 shadow-lg backdrop-blur ${className}`}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-peerfit-orange text-pure-white">
        <Icon size={14} />
      </span>
      <span className="whitespace-nowrap text-left">
        <span className="block text-xs font-semibold text-deep-black">{label}</span>
        <span className="block text-[10px] text-deep-black/50">{distance}</span>
      </span>
    </motion.div>
  );
}
