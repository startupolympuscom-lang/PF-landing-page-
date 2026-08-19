import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-peerfit-orange/25 blur-[140px]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="dot-grid absolute inset-0 opacity-20" />
      </div>

      <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
          The social operating
          <br />
          system for <span className="text-gradient">sports</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-warm-gray">
          Join thousands of athletes already connecting, playing and growing together on
          Peerfit. Your next teammate is one tap away.
        </p>
        <a
          href="#app"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-peerfit-orange px-8 py-4 text-sm font-semibold text-pure-white shadow-xl shadow-peerfit-orange/30 transition-transform duration-300 hover:scale-105"
        >
          Join the movement
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </Reveal>
    </section>
  );
}
