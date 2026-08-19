import { Search, Gamepad2, MessageCircle, Trophy, Phone, Video, Send } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { ASSETS } from "../lib/assets";
import { PlusCluster } from "./Decor";
import { Reveal } from "./Reveal";

function EventsPreview() {
  return (
    <div className="rounded-xl border border-black/5 bg-pure-white p-3 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold text-deep-black">Nearby Events</p>
        <span className="text-[10px] font-semibold text-peerfit-orange">View all</span>
      </div>
      <div className="mt-2 space-y-2">
        {[
          { title: "Tennis Doubles", meta: "Today, 6:00 PM · Central Park", fill: "4 / 4", src: ASSETS.images.tennis },
          { title: "Morning Run Club", meta: "Tomorrow, 7:00 AM · Riverside Path", fill: "12 / 20", src: ASSETS.images.running },
        ].map((e) => (
          <div key={e.title} className="flex items-center gap-2 rounded-lg bg-black/[0.02] p-2">
            <ImageWithFallback
              src={e.src}
              alt={e.title}
              className="h-8 w-8 shrink-0 rounded-md object-cover"
              fallback={<div className="h-8 w-8 shrink-0 rounded-md bg-peerfit-orange/15" />}
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-semibold text-deep-black">{e.title}</p>
              <p className="truncate text-[9px] text-deep-black/45">{e.meta}</p>
            </div>
            <span className="shrink-0 text-[10px] font-semibold text-deep-black/40">{e.fill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CreatePreview() {
  const rows = [
    { label: "Sport", value: "Football" },
    { label: "Format", value: "5v5" },
    { label: "Date & Time", value: "Tomorrow, 7:00 PM" },
    { label: "Location", value: "Riverside Park, Field 2" },
  ];
  return (
    <div className="rounded-xl border border-black/5 bg-pure-white p-3 shadow-sm">
      <p className="text-xs font-bold text-deep-black">Create Event</p>
      <div className="mt-2 space-y-1.5">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between border-b border-black/5 py-1 text-[10px]">
            <span className="text-deep-black/40">{r.label}</span>
            <span className="font-medium text-deep-black">{r.value}</span>
          </div>
        ))}
      </div>
      <button className="mt-3 w-full rounded-lg bg-peerfit-orange py-1.5 text-[10px] font-semibold text-pure-white">
        Create Event
      </button>
    </div>
  );
}

function ChatPreview() {
  return (
    <div className="rounded-xl border border-black/5 bg-pure-white p-3 shadow-sm">
      <div className="flex items-center justify-between border-b border-black/5 pb-2">
        <div>
          <p className="text-[11px] font-bold text-deep-black">5v5 Football Match</p>
          <p className="text-[9px] text-deep-black/40">8 members</p>
        </div>
        <div className="flex gap-1.5 text-deep-black/30">
          <Phone size={12} />
          <Video size={12} />
        </div>
      </div>
      <div className="mt-2 space-y-1.5">
        <div className="max-w-[75%] rounded-lg rounded-bl-none bg-black/[0.04] px-2 py-1 text-[10px] text-deep-black">
          Alex — I'll be there! <span className="text-deep-black/35">9:41 AM</span>
        </div>
        <div className="ml-auto max-w-[75%] rounded-lg rounded-br-none bg-peerfit-orange px-2 py-1 text-[10px] text-pure-white">
          Game on! 👍 <span className="text-white/70">9:43 AM</span>
        </div>
        <p className="text-center text-[9px] text-deep-black/35">Jamie changed time to 7:00 PM · 9:43 AM</p>
      </div>
      <div className="mt-2 flex items-center gap-1.5 rounded-full border border-black/10 px-2 py-1">
        <span className="flex-1 text-[9px] text-deep-black/30">Message the group…</span>
        <Send size={11} className="text-peerfit-orange" />
      </div>
    </div>
  );
}

function StatsPreview() {
  return (
    <div className="rounded-xl border border-black/5 bg-pure-white p-3 shadow-sm">
      <p className="text-xs font-bold text-deep-black">Your Stats</p>
      <div className="mt-2 flex items-center justify-between text-[10px]">
        <span className="text-deep-black/50">Level 12</span>
        <span className="font-semibold text-deep-black">3,400 XP</span>
      </div>
      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-black/5">
        <div className="h-full w-2/3 rounded-full bg-peerfit-orange" />
      </div>
      <p className="mt-2 text-[9px] font-semibold text-green-600">Top Performer +250 XP</p>
      <div className="mt-3 space-y-1.5 border-t border-black/5 pt-2">
        {[
          { rank: 1, name: "Alex", xp: "2,450 XP" },
          { rank: 2, name: "Jamie", xp: "2,150 XP" },
          { rank: 3, name: "You", xp: "1,980 XP", me: true },
        ].map((r) => (
          <div
            key={r.rank}
            className={`flex items-center justify-between rounded-md px-1.5 py-1 text-[10px] ${r.me ? "bg-peerfit-orange/10" : ""}`}
          >
            <span className="flex items-center gap-1.5 text-deep-black/70">
              <span className="w-3 text-deep-black/40">{r.rank}</span>
              {r.name}
            </span>
            <span className="font-semibold text-deep-black">{r.xp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const FEATURES = [
  {
    icon: Search,
    title: "Discover events",
    description: "Find matches and meet players near you.",
    preview: EventsPreview,
  },
  {
    icon: Gamepad2,
    title: "Create any game",
    description: "Organize your match with time, place and rules.",
    preview: CreatePreview,
  },
  {
    icon: MessageCircle,
    title: "Coordinate easily",
    description: "Chat, update, and manage attendance in one place.",
    preview: ChatPreview,
  },
  {
    icon: Trophy,
    title: "Earn & compete",
    description: "Climb leaderboards, earn badges, unlock rewards.",
    preview: StatsPreview,
  },
];

export function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <PlusCluster className="pointer-events-none absolute right-4 top-4 hidden h-16 w-24 text-peerfit-orange/20 sm:block" />
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-peerfit-orange">
          Powerful features
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-deep-black sm:text-4xl">
          Everything you need to play together
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, description, preview: Preview }, i) => (
          <Reveal key={title} delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-black/5 bg-black/[0.015] p-5 transition-shadow duration-300 hover:shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-peerfit-orange/10 text-peerfit-orange">
                <Icon size={19} />
              </div>
              <h3 className="mt-4 text-sm font-bold text-deep-black">{title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-deep-black/50">{description}</p>
              <div className="mt-4">
                <Preview />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
