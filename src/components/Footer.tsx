import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Logo } from "./Logo";
import { InstagramIcon, XIcon, LinkedInIcon, YoutubeIcon } from "./SocialIcons";

const FOOTER_LINKS = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Sports", href: "#sports" },
      { label: "Community", href: "#story" },
      { label: "Download", href: "#app" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#story" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

const SOCIALS = [
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: XIcon, href: "#", label: "X (Twitter)" },
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
];

type FormStatus = "idle" | "loading" | "success" | "error";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    try {
      const { supabase } = await import("../lib/supabase");
      const { error } = await supabase.from("waitlist").insert({ email });

      if (error) {
        setStatus("error");
        setErrorMessage(error.code === "23505" ? "You're already on the list!" : "Something went wrong — try again.");
        return;
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error — check your connection and try again.");
      return;
    }

    setStatus("success");
  }

  if (status === "success") {
    return (
      <p className="flex items-center gap-2 text-sm font-semibold text-electric-orange">
        <Check size={16} /> You're on the list — see you on Peerfit.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <div className="flex w-full gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          disabled={status === "loading"}
          className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-pure-white placeholder:text-warm-gray/60 outline-none transition-colors focus:border-peerfit-orange disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex shrink-0 items-center justify-center rounded-full bg-peerfit-orange p-2.5 text-pure-white transition-transform duration-300 hover:scale-110 disabled:opacity-60 disabled:hover:scale-100"
          aria-label="Subscribe"
        >
          {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : <ArrowRight size={18} />}
        </button>
      </div>
      {status === "error" && <p className="mt-2 text-xs text-red-400">{errorMessage}</p>}
    </form>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-deep-black pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 pb-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="white" className="h-8 text-2xl" />
            <p className="mt-4 max-w-xs text-sm text-warm-gray">
              The social ecosystem that connects athletes, builds teams and brings
              communities together through sports.
            </p>
            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-warm-gray">
                Get early access
              </p>
              <NewsletterForm />
            </div>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.heading}>
              <p className="text-xs font-semibold uppercase tracking-widest text-warm-gray">
                {group.heading}
              </p>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-pure-white/80 transition-colors hover:text-electric-orange"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-xs text-warm-gray">
            &copy; {new Date().getFullYear()} Peerfit. All sports. All levels. Everyone is welcome.
          </p>
          <div className="flex items-center gap-4">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-warm-gray transition-colors hover:border-peerfit-orange hover:text-peerfit-orange"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
