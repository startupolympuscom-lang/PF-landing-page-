import { motion } from "framer-motion";
import { ArrowRight, Play, MapPin, Users, Footprints, Star, Check } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { ASSETS } from "../lib/assets";
import { AvatarStack } from "./AvatarStack";
import { DotGridWash, PlusCluster } from "./Decor";
import { MapPinBadge } from "./MapPinBadge";
import { PhoneMockup } from "./PhoneMockup";
import { Reveal } from "./Reveal";

const AVATARS = [
  { src: ASSETS.avatars.stack1, alt: "Peerfit player", initials: "A" },
  { src: ASSETS.avatars.stack2, alt: "Peerfit player", initials: "S" },
  { src: ASSETS.avatars.stack3, alt: "Peerfit player", initials: "C" },
  { src: ASSETS.avatars.stack4, alt: "Peerfit player", initials: "J" },
];

const PLAYERS = [
  { name: "You", status: "Confirmed" },
  { name: "Alex", status: "Confirmed" },
  { name: "Jamie", status: "Confirmed" },
  { name: "Sam", status: "Pending" },
  { name: "Jordan", status: "Confirmed" },
];

function MatchConfirmedCard() {
  return (
    <div className="flex h-full w-full flex-col bg-pure-white px-4 pb-5 pt-9">
      <p className="flex items-center gap-1.5 text-sm font-bold text-deep-black">
        Match Confirmed! <span>🎉</span>
      </p>
      <div className="mt-3 rounded-xl border border-black/5 bg-black/[0.02] p-3">
        <p className="flex items-center gap-1.5 text-xs font-semibold text-deep-black">
          <Users size={12} className="text-peerfit-orange" /> 5v5 Football Match
        </p>
        <p className="mt-1.5 text-[10px] text-deep-black/50">Tomorrow, 7:00 PM</p>
        <p className="text-[10px] text-deep-black/50">Riverside Park, Field 2</p>
        <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
          <Check size={10} /> You're in!
        </span>
      </div>
      <p className="mt-3 text-[10px] font-semibold text-deep-black/40">8 / 10 PLAYERS</p>
      <div className="mt-1.5 space-y-1.5 overflow-hidden">
        {PLAYERS.map((p) => (
          <div key={p.name} className="flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 text-deep-black/80">
              <span className="h-4 w-4 rounded-full bg-electric-orange/20" />
              {p.name}
            </span>
            <span className={p.status === "Confirmed" ? "text-green-600" : "text-amber-500"}>{p.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 lg:pt-36">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[30rem] w-[30rem] rounded-full bg-peerfit-orange/10 blur-[110px]"
        aria-hidden="true"
      />
      <DotGridWash className="inset-x-0 top-0 h-[36rem]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <Reveal>
            <span className="relative inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.02] px-4 py-1.5 text-xs font-semibold text-deep-black/70">
              <span className="h-1.5 w-1.5 rounded-full bg-peerfit-orange" />
              Your sports community, everywhere
              <PlusCluster className="pointer-events-none absolute -left-10 -top-8 h-10 w-14 text-peerfit-orange/30" />
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-deep-black sm:text-6xl">
              Create. Join.
              <br />
              <span className="text-peerfit-orange">Play together.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-lg text-deep-black/60">
              Peerfit makes it easy to <strong className="font-semibold text-deep-black">find people</strong>,
              organize games, and <strong className="font-semibold text-deep-black">play the sports you love</strong>
              —anytime, anywhere.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#app"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-peerfit-orange px-6 py-3 text-sm font-semibold text-pure-white shadow-lg shadow-peerfit-orange/25 transition-transform duration-300 hover:scale-105"
              >
                Get started free
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-deep-black transition-opacity hover:opacity-70"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10">
                  <Play size={13} fill="currentColor" />
                </span>
                See how it works
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex items-center gap-4">
              <AvatarStack avatars={AVATARS} />
              <div>
                <div className="flex items-center gap-0.5 text-peerfit-orange">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-xs text-deep-black/50">Join 50K+ active players</p>
              </div>
            </div>
          </Reveal>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-black/5 shadow-2xl">
            <ImageWithFallback
              src={ASSETS.images.heroGroup}
              alt="Group of friends high-fiving after a sports match"
              className="h-full w-full object-cover"
              fallback={
                <div className="dot-grid flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-50 via-pure-white to-orange-100">
                  <Users size={64} className="text-peerfit-orange/20" strokeWidth={1.5} />
                </div>
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>

          <svg
            viewBox="0 0 400 560"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            aria-hidden="true"
          >
            <motion.path
              d="M20,90 C140,40 220,140 380,110 C300,260 260,330 40,380"
              fill="none"
              stroke="var(--color-peerfit-orange)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="1 10"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.55 }}
              transition={{ duration: 2.4, ease: "easeInOut", delay: 0.6 }}
            />
          </svg>

          <MapPinBadge
            icon={MapPin}
            label="Tennis Match"
            distance="2.1 km away"
            className="-left-6 top-10"
            delay={0}
          />
          <MapPinBadge
            icon={Users}
            label="Football Game"
            distance="1.3 km away"
            className="right-6 top-32"
            delay={0.6}
          />
          <MapPinBadge
            icon={Footprints}
            label="Run Club"
            distance="800 m away"
            className="-left-4 bottom-28"
            delay={1.2}
          />

          <motion.div
            className="absolute -bottom-10 -right-6 z-30 w-40 sm:w-48"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <PhoneMockup src={ASSETS.mockups.matchConfirmed} alt="Match confirmed screen" fallback={<MatchConfirmedCard />} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
