import { Apple, Play as PlayIcon, Users } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { ASSETS } from "../lib/assets";
import { Reveal } from "./Reveal";

// Deterministic pseudo-random pattern — a stand-in for a real QR code.
// Swap for an actual generated QR once the store links are live.
function FauxQR() {
  const cells = Array.from({ length: 49 }, (_, i) => {
    const x = i % 7;
    const y = Math.floor(i / 7);
    const isFinder = (x < 2 && y < 2) || (x > 4 && y < 2) || (x < 2 && y > 4);
    const on = isFinder || (i * 17 + 5) % 7 < 3;
    return on;
  });

  return (
    <div className="grid h-24 w-24 shrink-0 grid-cols-7 gap-0.5 rounded-lg bg-pure-white p-2.5">
      {cells.map((on, i) => (
        <span key={i} className={`aspect-square rounded-[1px] ${on ? "bg-deep-black" : "bg-transparent"}`} />
      ))}
    </div>
  );
}

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-peerfit-orange px-8 py-12 sm:px-14 sm:py-16">
          <div className="diagonal-lines pointer-events-none absolute inset-0 opacity-10" />

          <div className="relative flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-extrabold tracking-tight text-pure-white sm:text-4xl">
                Ready to play together?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-white/80 lg:mx-0">
                Join thousands of players finding their people and playing more sports—together.
              </p>

              <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl bg-deep-black px-5 py-3 text-sm font-semibold text-pure-white transition-transform duration-300 hover:scale-105"
                >
                  <Apple size={18} />
                  <span className="text-left leading-tight">
                    <span className="block text-[9px] font-normal text-white/60">Download on the</span>
                    App Store
                  </span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl bg-deep-black px-5 py-3 text-sm font-semibold text-pure-white transition-transform duration-300 hover:scale-105"
                >
                  <PlayIcon size={18} />
                  <span className="text-left leading-tight">
                    <span className="block text-[9px] font-normal text-white/60">GET IT ON</span>
                    Google Play
                  </span>
                </a>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-6">
              <FauxQR />
              <ImageWithFallback
                src={ASSETS.images.heroGroup}
                alt="Peerfit players celebrating together"
                className="hidden h-28 w-28 rounded-2xl object-cover sm:block"
                fallback={
                  <div className="hidden h-28 w-28 items-center justify-center rounded-2xl bg-white/10 sm:flex">
                    <Users size={32} className="text-white/40" />
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
