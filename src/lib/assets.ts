// Central asset manifest.
//
// Drop real files into `public/assets/...` using these exact paths and the
// site will automatically pick them up — no code changes needed. Until a
// file exists at a given path, the corresponding component renders a
// branded placeholder instead (see ImageWithFallback / Logo).

export const ASSETS = {
  logo: {
    orange: "/assets/logo/peerfit-logo-orange.png",
    white: "/assets/logo/peerfit-logo-white.png",
    black: "/assets/logo/peerfit-logo-black.png",
    icon: "/assets/logo/peerfit-icon.svg",
  },
  images: {
    basketball: "/assets/images/imagery-basketball.jpg",
    friends: "/assets/images/imagery-friends.jpg",
    running: "/assets/images/imagery-running.jpg",
    tennis: "/assets/images/imagery-tennis.jpg",
    cycling: "/assets/images/imagery-cycling.jpg",
  },
  mockups: {
    appHome: "/assets/mockups/app-screen-home.png",
    watch: "/assets/mockups/watch.png",
    bottle: "/assets/mockups/bottle.png",
    darkCard: "/assets/mockups/app-dark-card.png",
  },
} as const;
