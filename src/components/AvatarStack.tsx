import { ImageWithFallback } from "./ImageWithFallback";

interface AvatarStackProps {
  avatars: { src: string; alt: string; initials: string }[];
  className?: string;
}

const RING_COLORS = ["bg-peerfit-orange/20 text-peerfit-orange", "bg-electric-orange/20 text-electric-orange"];

export function AvatarStack({ avatars, className = "h-9 w-9" }: AvatarStackProps) {
  return (
    <div className="flex -space-x-3">
      {avatars.map((a, i) => (
        <ImageWithFallback
          key={a.alt}
          src={a.src}
          alt={a.alt}
          className={`shrink-0 rounded-full border-2 border-pure-white object-cover ${className}`}
          fallback={
            <div
              className={`flex shrink-0 items-center justify-center rounded-full border-2 border-pure-white text-xs font-bold ${RING_COLORS[i % RING_COLORS.length]} ${className}`}
            >
              {a.initials}
            </div>
          }
        />
      ))}
    </div>
  );
}
