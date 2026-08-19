import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { ASSETS } from "../lib/assets";
import { Logo } from "./Logo";

export function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative aspect-[9/19] w-full max-w-[280px] rounded-[2.5rem] border-[6px] border-carbon-gray bg-deep-black p-1.5 shadow-[0_30px_80px_-20px_rgba(223,79,28,0.45)] ${className}`}
    >
      <div className="absolute left-1/2 top-2.5 z-20 h-1.5 w-16 -translate-x-1/2 rounded-full bg-carbon-gray" />
      <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
        <ImageWithFallback
          src={ASSETS.mockups.appHome}
          alt="Peerfit app home screen"
          className="h-full w-full object-cover"
          fallback={
            <div className="flex h-full w-full flex-col justify-between bg-gradient-to-b from-carbon-gray to-deep-black px-5 pb-6 pt-10">
              <Logo variant="white" className="h-5 text-base self-start" />

              <div className="space-y-3">
                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-peerfit-orange/20 text-peerfit-orange">
                    <Users size={16} />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-semibold text-pure-white">Sunday 5-a-side</p>
                    <p className="text-[10px] text-warm-gray">7 of 10 joined</p>
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold leading-tight text-pure-white">
                  Find your team.
                  <br />
                  Play together.
                  <br />
                  <span className="text-gradient">Grow together.</span>
                </h3>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  className="w-full rounded-full bg-peerfit-orange py-2.5 text-xs font-semibold text-pure-white"
                >
                  Let's Go
                </motion.button>
                <button className="w-full rounded-full border border-white/20 py-2.5 text-xs font-semibold text-pure-white">
                  Log in
                </button>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
