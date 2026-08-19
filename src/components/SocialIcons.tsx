import type { SVGProps } from "react";

// lucide-react no longer ships brand/social marks (trademark reasons), so
// these are small hand-rolled monoline glyphs kept consistent with the
// brand's iconography style (1.5px stroke, rounded joins).
type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 16) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function InstagramIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  );
}

export function LinkedInIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7" r="0.6" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5V12a2 2 0 0 1 4 0v4.5" />
      <line x1="11.5" y1="10" x2="11.5" y2="16.5" />
    </svg>
  );
}

export function YoutubeIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}
