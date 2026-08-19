import { ImageWithFallback } from "./ImageWithFallback";
import { ASSETS } from "../lib/assets";

interface LogoProps {
  variant?: "orange" | "white" | "black";
  className?: string;
  /** Compact renders PEERFIT on one line (navbar/footer); stacked renders PEER / FIT (hero). */
  layout?: "compact" | "stacked";
}

const SRC: Record<NonNullable<LogoProps["variant"]>, string> = {
  orange: ASSETS.logo.orange,
  white: ASSETS.logo.white,
  black: ASSETS.logo.black,
};

const TEXT_COLOR: Record<NonNullable<LogoProps["variant"]>, string> = {
  orange: "text-peerfit-orange",
  white: "text-pure-white",
  black: "text-deep-black",
};

export function Logo({ variant = "white", className = "", layout = "compact" }: LogoProps) {
  const colorClass = TEXT_COLOR[variant];

  const wordmark =
    layout === "stacked" ? (
      <span className={`font-display font-black uppercase leading-[0.85] tracking-tight ${colorClass}`}>
        <span className="block">Peer</span>
        <span className="block">Fit</span>
      </span>
    ) : (
      <span className={`font-display font-black uppercase tracking-wide ${colorClass}`}>
        Peer<span className="text-electric-orange">Fit</span>
      </span>
    );

  return (
    <ImageWithFallback
      src={SRC[variant]}
      alt="Peerfit logo"
      className={`inline-flex items-center ${className}`}
      fallback={wordmark}
    />
  );
}
