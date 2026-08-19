import { Search, UserPlus, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    icon: Search,
    step: "01",
    title: "Find your sport & squad",
    description: "Discover games, runs and sessions happening near you, in the sports you love.",
  },
  {
    icon: UserPlus,
    step: "02",
    title: "Join or create a session",
    description: "Fill a spot in seconds or start your own — Peerfit handles the rest.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Play, connect, grow",
    description: "Show up, meet your community and track your progress together.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-electric-orange">
          How it works
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          Three taps to your <span className="text-gradient">next game</span>
        </h2>
      </Reveal>

      <div className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />
        {STEPS.map(({ icon: Icon, step, title, description }, i) => (
          <Reveal key={step} delay={i * 0.15} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
            <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-peerfit-orange/40 bg-deep-black text-peerfit-orange">
                <Icon size={26} />
              </div>
              <span className="mt-4 font-display text-sm font-bold text-warm-gray">{step}</span>
              <h3 className="mt-1 font-display text-lg font-bold uppercase">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-gray">{description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
