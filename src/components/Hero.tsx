import { motion } from "framer-motion";
import { Apple, Play as PlayIcon } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";
import { PhoneMockup } from "./PhoneMockup";
import { Reveal } from "./Reveal";

const WORDS = ["Connect", "Play", "Grow", "Belong"];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <AnimatedBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-peerfit-orange/40 bg-peerfit-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric-orange">
              The social operating system for sports
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Alone you
              <br />
              are fit.
              <br />
              <span className="text-gradient">Together we</span>
              <br />
              <span className="text-gradient">are Peerfit.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-lg text-warm-gray">
              Peerfit is the social ecosystem that connects athletes, builds teams and
              brings communities together through sports. All sports. All levels.
              Everyone is welcome.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#app"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-peerfit-orange px-6 py-3 text-sm font-semibold text-pure-white shadow-lg shadow-peerfit-orange/30 transition-transform duration-300 hover:scale-105"
              >
                <Apple size={18} />
                Download on iOS
              </a>
              <a
                href="#app"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-pure-white transition-colors duration-300 hover:border-white/50 hover:bg-white/5"
              >
                <PlayIcon size={18} />
                Get it on Android
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-warm-gray">
              {WORDS.map((word, i) => (
                <span key={word} className="flex items-center gap-2">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-peerfit-orange" />}
                  <span className="font-semibold text-pure-white">{word}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div
          className="relative mx-auto flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <PhoneMockup />
          </motion.div>

          <motion.div
            className="absolute -left-8 -top-6 z-20 hidden rounded-2xl border border-white/10 bg-carbon-gray/90 px-4 py-3 shadow-xl backdrop-blur sm:block"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <p className="text-xs text-warm-gray">Active nearby</p>
            <p className="font-display text-xl font-bold text-electric-orange">2,400+</p>
          </motion.div>

          <motion.div
            className="absolute -right-8 -bottom-6 z-20 hidden rounded-2xl border border-white/10 bg-carbon-gray/90 px-4 py-3 shadow-xl backdrop-blur sm:block"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <p className="text-xs text-warm-gray">Sports covered</p>
            <p className="font-display text-xl font-bold text-electric-orange">20+</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
