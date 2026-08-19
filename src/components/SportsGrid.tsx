import { CircleDot, Target, Footprints, Waves, Flag, Volleyball, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { ASSETS } from "../lib/assets";
import { WavyLine } from "./Decor";
import { Reveal } from "./Reveal";

const SPORTS = [
  { key: "football", label: "Football", icon: CircleDot, src: ASSETS.images.football },
  { key: "tennis", label: "Tennis", icon: Target, src: ASSETS.images.tennis },
  { key: "running", label: "Running", icon: Footprints, src: ASSETS.images.running },
  { key: "swimming", label: "Swimming", icon: Waves, src: ASSETS.images.swimming },
  { key: "golf", label: "Golf", icon: Flag, src: ASSETS.images.golf },
  { key: "padel", label: "Padel", icon: Volleyball, src: ASSETS.images.padel },
];

export function SportsGrid() {
  return (
    <section id="sports" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-peerfit-orange">
          Any sport. Anytime.
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-deep-black sm:text-4xl">
          Play what you love
        </h2>
        <WavyLine className="mx-auto mt-4 h-4 w-32 text-peerfit-orange/40" />
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {SPORTS.map(({ key, label, icon: Icon, src }, i) => (
          <Reveal key={key} delay={i * 0.06}>
            <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-black/5">
              <ImageWithFallback
                src={src}
                alt={label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                fallback={
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-50 via-pure-white to-orange-100 transition-transform duration-700 group-hover:scale-110">
                    <Icon size={32} className="text-peerfit-orange/25" strokeWidth={1.5} />
                  </div>
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
              <div className="absolute bottom-0 left-0 flex items-center gap-1.5 p-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pure-white/90 text-peerfit-orange">
                  <Icon size={12} />
                </span>
                <span className="text-xs font-bold text-pure-white">{label}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-10 text-center">
        <a
          href="#app"
          className="group inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-deep-black transition-colors hover:border-black/25 hover:bg-black/[0.03]"
        >
          Explore all sports
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </Reveal>
    </section>
  );
}
