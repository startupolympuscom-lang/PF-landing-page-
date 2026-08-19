import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const LINKS = [
  { label: "Pillars", href: "#pillars" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Our story", href: "#story" },
  { label: "Community", href: "#gallery" },
  { label: "App", href: "#app" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-deep-black/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="z-10">
          <Logo variant="white" className="h-7 text-xl" />
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-warm-gray transition-colors hover:text-pure-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#app"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-peerfit-orange px-5 py-2.5 text-sm font-semibold text-pure-white transition-transform duration-300 hover:scale-105"
          >
            <span className="relative z-10">Join the movement</span>
            <span className="absolute inset-0 -z-0 bg-gradient-to-r from-electric-orange to-peerfit-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        </div>

        <button
          type="button"
          className="z-10 text-pure-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-deep-black md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-base font-medium text-warm-gray hover:bg-white/5 hover:text-pure-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#app"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-peerfit-orange px-5 py-3 text-center text-sm font-semibold text-pure-white"
              >
                Join the movement
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
