import { motion } from "framer-motion";
import { Activity, Apple, Play as PlayIcon } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { ASSETS } from "../lib/assets";
import { Logo } from "./Logo";
import { PhoneMockup } from "./PhoneMockup";
import { Reveal } from "./Reveal";

function WatchMockup() {
  return (
    <div className="relative h-40 w-32 rounded-[1.8rem] border-[5px] border-carbon-gray bg-deep-black p-1 shadow-2xl">
      <div className="absolute -left-1 top-10 h-8 w-1.5 rounded-l bg-carbon-gray" />
      <ImageWithFallback
        src={ASSETS.mockups.watch}
        alt="Peerfit on smartwatch"
        className="h-full w-full rounded-[1.4rem] object-cover"
        fallback={
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-[1.4rem] bg-gradient-to-b from-carbon-gray to-deep-black text-center">
            <Activity size={18} className="text-electric-orange" />
            <p className="font-display text-sm font-bold text-pure-white">8.45</p>
            <p className="text-[9px] uppercase tracking-wide text-warm-gray">km today</p>
          </div>
        }
      />
    </div>
  );
}

function BottleMockup() {
  return (
    <ImageWithFallback
      src={ASSETS.mockups.bottle}
      alt="Peerfit water bottle"
      className="h-44 w-16 object-contain"
      fallback={
        <div className="flex h-44 w-16 flex-col items-center overflow-hidden rounded-[1.2rem] border border-white/10 bg-gradient-to-b from-carbon-gray to-deep-black">
          <div className="mt-2 h-3 w-6 rounded-sm bg-warm-gray/40" />
          <div className="mt-4 flex flex-1 items-center justify-center">
            <Logo variant="white" className="rotate-90 text-[10px]" />
          </div>
        </div>
      }
    />
  );
}

export function AppShowcase() {
  return (
    <section id="app" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-20 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal direction="left">
          <span className="text-xs font-semibold uppercase tracking-widest text-electric-orange">
            Applications
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            One app.
            <br />
            <span className="text-gradient">Every way you move.</span>
          </h2>
          <p className="mt-5 max-w-md text-warm-gray">
            Peerfit lives on your phone, your wrist and your gear — so your team, your
            sessions and your progress follow you everywhere you train.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-peerfit-orange px-6 py-3 text-sm font-semibold text-pure-white transition-transform duration-300 hover:scale-105"
            >
              <Apple size={18} />
              App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-pure-white transition-colors duration-300 hover:border-white/50 hover:bg-white/5"
            >
              <PlayIcon size={18} />
              Google Play
            </a>
          </div>
        </Reveal>

        <Reveal direction="right" className="relative flex items-end justify-center gap-6">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <BottleMockup />
          </motion.div>

          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="z-10"
          >
            <PhoneMockup className="max-w-[240px]" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >
            <WatchMockup />
          </motion.div>
        </Reveal>
      </div>

      <Reveal className="relative mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-carbon-gray">
          <div className="diagonal-lines absolute inset-0 opacity-20" />
          <div className="relative flex flex-col items-start justify-between gap-8 p-10 sm:p-14 md:flex-row md:items-end">
            <div>
              <Logo variant="white" className="h-6 text-lg" />
              <h3 className="mt-6 font-display text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
                Never
                <br />
                Train
                <br />
                <span className="text-gradient">Alone</span>
              </h3>
            </div>
            <p className="max-w-sm text-warm-gray">
              Every rep, every run, every match — better with people who show up for you.
              That's the Peerfit promise.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
