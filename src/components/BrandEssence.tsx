import { Users, Zap, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const ESSENCE = [
  {
    icon: Users,
    title: "We Connect",
    description: "Building real connections through sport.",
  },
  {
    icon: Zap,
    title: "We Empower",
    description: "Helping you perform, improve and achieve more.",
  },
  {
    icon: ShieldCheck,
    title: "We Inspire",
    description: "Motivating people to live active, healthier and happier lives.",
  },
];

export function BrandEssence() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          Brand <span className="text-gradient">Essence</span>
        </h2>
        <p className="mt-4 text-warm-gray">
          Everything we build comes back to three simple beliefs.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {ESSENCE.map(({ icon: Icon, title, description }, i) => (
          <Reveal key={title} delay={i * 0.1}>
            <div className="group h-full rounded-3xl border border-white/10 bg-carbon-gray/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-peerfit-orange/50 hover:bg-carbon-gray">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-peerfit-orange/10 text-peerfit-orange transition-colors duration-300 group-hover:bg-peerfit-orange group-hover:text-pure-white">
                <Icon size={26} />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold uppercase">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-gray">{description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
