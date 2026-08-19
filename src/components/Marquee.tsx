const WORDS = ["Connect", "Play", "Grow", "Belong", "Community", "Performance", "Trust", "Energy"];

export function Marquee() {
  const items = [...WORDS, ...WORDS];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-carbon-gray/40 py-4">
      <div className="flex w-max animate-marquee gap-10">
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="font-display text-sm font-bold uppercase tracking-widest text-warm-gray"
          >
            {word} <span className="ml-10 text-peerfit-orange">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
