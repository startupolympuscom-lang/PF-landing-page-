import { ImageWithFallback } from "./ImageWithFallback";
import { ASSETS } from "../lib/assets";
import { DotGridWash } from "./Decor";
import { Reveal } from "./Reveal";

const STATS = [
  { value: "2025", label: "Founded" },
  { value: "Morocco", label: "Home base" },
  { value: "Startup Olympus", label: "Incubated at" },
  { value: "20+", label: "Sports covered" },
];

export function Origin() {
  return (
    <section id="story" className="relative overflow-hidden border-y border-black/5 bg-black/[0.015] py-20">
      <DotGridWash className="inset-0" />
      <div className="diagonal-lines pointer-events-none absolute inset-y-0 right-0 w-64 opacity-[0.07]" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-peerfit-orange">
            Our Story
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-deep-black sm:text-4xl">
            Born in Morocco. Built for athletes everywhere.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-deep-black/60">
            Peerfit was founded in 2025 in Morocco by Yassine Zniber and incubated at
            Startup Olympus. What started as a simple idea — it shouldn't be this hard to
            find someone to play with — has grown into a platform connecting athletes
            across 20+ sports, wherever they train.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map(({ value, label }) => (
              <div key={label} className="rounded-2xl border border-black/5 bg-pure-white px-4 py-6 shadow-sm">
                <p className="text-lg font-extrabold text-peerfit-orange sm:text-xl">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-deep-black/40">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mx-auto mt-8 flex max-w-sm items-center gap-4 rounded-2xl border border-black/5 bg-pure-white px-5 py-4 text-left shadow-sm">
            <ImageWithFallback
              src={ASSETS.people.yassineZniber}
              alt="Yassine Zniber, Founder of Peerfit"
              className="h-14 w-14 shrink-0 overflow-hidden rounded-full object-cover"
              fallback={
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-peerfit-orange/10 text-lg font-bold text-peerfit-orange">
                  YZ
                </div>
              }
            />
            <div>
              <p className="text-sm font-bold text-deep-black">Yassine Zniber</p>
              <p className="text-xs text-deep-black/45">Founder, Peerfit</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
