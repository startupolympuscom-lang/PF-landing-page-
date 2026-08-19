import { Search, CalendarPlus, UsersRound, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const FEATURES = [
  {
    icon: Search,
    title: "Find sporting partners",
    description: "Match with athletes near you across 20+ sports — from football to climbing.",
  },
  {
    icon: CalendarPlus,
    title: "Create & join events",
    description: "Start a session in minutes or fill an open spot in someone else's game.",
  },
  {
    icon: UsersRound,
    title: "Build communities",
    description: "Bring your crew together in dedicated spaces for your sport, team or club.",
  },
  {
    icon: Star,
    title: "Rate & review athletes",
    description: "Post-game ratings help everyone find reliable, respectful teammates.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-electric-orange">
          What you can do
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          One app, <span className="text-gradient">20+ sports</span>
        </h2>
        <p className="mt-4 text-warm-gray">
          Everything you need to find your people and get moving — in one place.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, description }, i) => (
          <Reveal key={title} delay={i * 0.1}>
            <div className="group h-full rounded-2xl border border-white/10 bg-carbon-gray/50 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-peerfit-orange/50 hover:bg-carbon-gray">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-peerfit-orange/10 text-peerfit-orange transition-colors duration-300 group-hover:bg-peerfit-orange group-hover:text-pure-white">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-base font-bold uppercase tracking-wide">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-gray">{description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
