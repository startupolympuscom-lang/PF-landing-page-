import { MapPin, CalendarPlus, MessageCircle, Footprints } from "lucide-react";
import { DotGridWash, RingAccent } from "./Decor";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    icon: MapPin,
    bg: "bg-blue-50 text-blue-500",
    step: "1",
    title: "Discover",
    description: "Explore nearby sports events and players.",
  },
  {
    icon: CalendarPlus,
    bg: "bg-orange-50 text-peerfit-orange",
    step: "2",
    title: "Create",
    description: "Set up your game in seconds.",
  },
  {
    icon: MessageCircle,
    bg: "bg-green-50 text-green-500",
    step: "3",
    title: "Invite",
    description: "Share with friends and invite players.",
  },
  {
    icon: Footprints,
    bg: "bg-purple-50 text-purple-500",
    step: "4",
    title: "Play",
    description: "Everyone confirms. You play together!",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-peerfit-orange">
          How it works
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-deep-black sm:text-4xl">
          From idea to game in 4 simple steps
        </h2>
      </Reveal>

      <div className="relative mt-16 overflow-hidden rounded-3xl border border-black/5 bg-black/[0.015] px-6 py-12 sm:px-12">
        <DotGridWash className="inset-0" />
        <RingAccent className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 text-peerfit-orange/15" />
        <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-[12%] right-[12%] top-11 hidden border-t-2 border-dashed border-peerfit-orange/30 lg:block" />

          {STEPS.map(({ icon: Icon, bg, step, title, description }, i) => (
            <Reveal key={step} delay={i * 0.12}>
              <div className="relative flex flex-col items-center text-center">
                <div className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-full ${bg}`}>
                  <Icon size={28} />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-peerfit-orange text-[11px] font-bold text-pure-white ring-4 ring-pure-white">
                    {step}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-deep-black">{title}</h3>
                <p className="mt-1 max-w-[11rem] text-sm text-deep-black/50">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
