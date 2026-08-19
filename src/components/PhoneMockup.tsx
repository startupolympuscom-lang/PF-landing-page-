import type { ReactNode } from "react";
import { ImageWithFallback } from "./ImageWithFallback";
import { ASSETS } from "../lib/assets";
import { Logo } from "./Logo";

interface PhoneMockupProps {
  className?: string;
  src?: string;
  alt?: string;
  fallback?: ReactNode;
}

const DEFAULT_FALLBACK = (
  <div className="flex h-full w-full flex-col justify-between bg-gradient-to-b from-carbon-gray to-deep-black px-5 pb-6 pt-10">
    <Logo variant="white" className="h-5 text-base self-start" />
    <div className="space-y-3">
      <h3 className="font-display text-lg font-bold leading-tight text-pure-white">
        Find your team.
        <br />
        Play together.
        <br />
        <span className="text-gradient">Grow together.</span>
      </h3>
      <button className="w-full rounded-full bg-peerfit-orange py-2.5 text-xs font-semibold text-pure-white">
        Let's Go
      </button>
      <button className="w-full rounded-full border border-white/20 py-2.5 text-xs font-semibold text-pure-white">
        Log in
      </button>
    </div>
  </div>
);

export function PhoneMockup({
  className = "",
  src = ASSETS.mockups.appHome,
  alt = "Peerfit app screen",
  fallback = DEFAULT_FALLBACK,
}: PhoneMockupProps) {
  return (
    <div
      className={`relative aspect-[9/19] w-full max-w-[280px] rounded-[2.5rem] border-[6px] border-deep-black bg-deep-black p-1.5 shadow-[0_30px_80px_-20px_rgba(5,5,5,0.35)] ${className}`}
    >
      <div className="absolute left-1/2 top-2.5 z-20 h-1.5 w-16 -translate-x-1/2 rounded-full bg-deep-black" />
      <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
        <ImageWithFallback src={src} alt={alt} className="h-full w-full object-cover" fallback={fallback} />
      </div>
    </div>
  );
}
