import { ImageWithFallback } from "./ImageWithFallback";
import { ASSETS } from "../lib/assets";
import { Reveal } from "./Reveal";

const STATS = [
  { value: "2025", label: "Founded" },
  { value: "Morocco", label: "Home base" },
  { value: "Startup Olympus", label: "Incubated at" },
  { value: "20+", label: "Sports covered" },
];

export function Origin() {
  return (
    <section id="story" className="relative overflow-hidden border-y border-white/10 bg-carbon-gray/30 py-24">
      <div className="diagonal-lines pointer-events-none absolute inset-0 opacity-10" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-electric-orange">
            Our Story
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Born in Morocco.
            <br />
            <span className="text-gradient">Built for athletes everywhere.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-warm-gray">
            Peerfit was founded in 2025 in Morocco by Yassine Zniber and incubated at
            Startup Olympus. What started as a simple idea — it shouldn't be this hard to
            find someone to play with — has grown into a platform connecting athletes
            across 20+ sports, wherever they train.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map(({ value, label }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-deep-black px-4 py-6">
                <p className="font-display text-lg font-bold text-electric-orange sm:text-xl">
                  {value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-warm-gray">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mx-auto mt-10 flex max-w-sm items-center gap-4 rounded-2xl border border-white/10 bg-deep-black px-5 py-4 text-left">
            <ImageWithFallback
              src={ASSETS.people.yassineZniber}
              alt="Yassine Zniber, Founder of Peerfit"
              className="h-14 w-14 shrink-0 overflow-hidden rounded-full object-cover"
              fallback={
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-peerfit-orange/15 font-display text-lg font-bold text-electric-orange">
                  YZ
                </div>
              }
            />
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-wide text-pure-white">
                Yassine Zniber
              </p>
              <p className="text-xs text-warm-gray">Founder, Peerfit</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
