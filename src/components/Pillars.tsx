import { Users, Zap, Globe, Activity, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const PILLARS = [
  {
    icon: Users,
    title: "Community",
    description: "Sport is better together. We connect people through shared passion.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "We help you stay active, improve and reach your goals together.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "All sports. All levels. Everyone is welcome.",
  },
  {
    icon: Activity,
    title: "Energy",
    description: "We bring the energy that moves you forward.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    description: "Safe, verified and respectful environments you can rely on.",
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="relative bg-carbon-gray/30 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-electric-orange">
            Our 5 Pillars
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            What Peerfit <span className="text-gradient">stands on</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-deep-black p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-peerfit-orange/60">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-peerfit-orange/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-peerfit-orange/10 text-peerfit-orange">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-base font-bold uppercase tracking-wide">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-gray">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
