import { useState, type ReactNode } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallback: ReactNode;
}

/**
 * Renders `src` when it actually resolves; otherwise shows a branded
 * placeholder. Lets the page ship today and "self-upgrade" the moment
 * real assets land in public/assets, with zero code changes.
 */
export function ImageWithFallback({ src, alt, className, fallback }: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={className}>{fallback}</div>;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
