import { Quote, Users, CalendarCheck, Trophy } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { ASSETS } from "../lib/assets";
import { RingAccent } from "./Decor";
import { Reveal } from "./Reveal";

const QUOTES = [
  {
    quote: "Peerfit helped me find regular football games and an amazing group of friends.",
    name: "Daniel K.",
    role: "Football Player",
    avatar: ASSETS.avatars.daniel,
    initials: "DK",
  },
  {
    quote: "As a runner, I love the local run clubs. It keeps me motivated and connected.",
    name: "Sophie M.",
    role: "Marathon Runner",
    avatar: ASSETS.avatars.sophie,
    initials: "SM",
  },
  {
    quote: "Creating a tennis match is so easy. Everyone shows up, and the app handles the rest.",
    name: "Chris T.",
    role: "Tennis Enthusiast",
    avatar: ASSETS.avatars.chris,
    initials: "CT",
  },
];

const STATS = [
  { icon: Users, value: "50K+", label: "Active Players" },
  { icon: CalendarCheck, value: "10K+", label: "Events Created" },
  { icon: Trophy, value: "120+", label: "Sports Communities" },
];

export function Testimonials() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <RingAccent className="pointer-events-none absolute -left-6 top-8 hidden h-20 w-20 text-peerfit-orange/15 lg:block" />
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-peerfit-orange">
          Loved by our community
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-deep-black sm:text-4xl">
          Real players. Real stories.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-4">
        {QUOTES.map((q, i) => (
          <Reveal key={q.name} delay={i * 0.1} className="lg:col-span-1">
            <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-black/[0.015] p-6">
              <Quote size={20} className="text-peerfit-orange/40" />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-deep-black/70">"{q.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <ImageWithFallback
                  src={q.avatar}
                  alt={q.name}
                  className="h-10 w-10 rounded-full object-cover"
                  fallback={
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-peerfit-orange/15 text-xs font-bold text-peerfit-orange">
                      {q.initials}
                    </div>
                  }
                />
                <div>
                  <p className="text-sm font-bold text-deep-black">{q.name}</p>
                  <p className="text-xs text-deep-black/45">{q.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal delay={0.3} className="lg:col-span-1">
          <div className="flex h-full flex-col justify-center gap-5 rounded-2xl bg-deep-black p-6 text-pure-white">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-peerfit-orange/20 text-peerfit-orange">
                  <Icon size={16} />
                </span>
                <div>
                  <p className="text-lg font-extrabold leading-none">{value}</p>
                  <p className="mt-0.5 text-[11px] text-white/50">{label}</p>
                </div>
              </div>
            ))}
            <p className="border-t border-white/10 pt-4 text-xs text-white/50">
              and growing every day 🚀
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
