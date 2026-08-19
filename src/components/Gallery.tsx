import { CircleDot, Users, Footprints, Trophy, Bike } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { ASSETS } from "../lib/assets";
import { Reveal } from "./Reveal";

const TILES = [
  { key: "basketball", src: ASSETS.images.basketball, label: "Basketball", icon: CircleDot, span: "lg:row-span-2" },
  { key: "friends", src: ASSETS.images.friends, label: "Community", icon: Users, span: "" },
  { key: "running", src: ASSETS.images.running, label: "Running", icon: Footprints, span: "" },
  { key: "tennis", src: ASSETS.images.tennis, label: "Tennis", icon: Trophy, span: "lg:col-span-2" },
  { key: "cycling", src: ASSETS.images.cycling, label: "Cycling", icon: Bike, span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-electric-orange">
          Imagery & Community
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          Real people. <span className="text-gradient">Real movement.</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-2 lg:h-[34rem]">
        {TILES.map(({ key, src, label, icon: Icon, span }, i) => (
          <Reveal key={key} delay={i * 0.08} className={span}>
            <div className="group relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 lg:h-full">
              <ImageWithFallback
                src={src}
                alt={`Peerfit community — ${label}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                fallback={
                  <div
                    className="flex h-full w-full items-center justify-center bg-gradient-to-br from-carbon-gray via-deep-black to-peerfit-orange/20 transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    <Icon size={40} className="text-white/15" strokeWidth={1.5} />
                  </div>
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 flex items-center gap-2 p-4">
                <Icon size={16} className="text-electric-orange" />
                <span className="font-display text-sm font-bold uppercase tracking-wide text-pure-white">
                  {label}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
