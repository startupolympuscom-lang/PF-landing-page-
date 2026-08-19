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
    heroGroup: "/assets/images/hero-group-highfive.jpg",
    football: "/assets/images/sport-football.jpg",
    tennis: "/assets/images/sport-tennis.jpg",
    running: "/assets/images/sport-running.jpg",
    swimming: "/assets/images/sport-swimming.jpg",
    golf: "/assets/images/sport-golf.jpg",
    padel: "/assets/images/sport-padel.jpg",
  },
  avatars: {
    daniel: "/assets/images/avatar-daniel.jpg",
    sophie: "/assets/images/avatar-sophie.jpg",
    chris: "/assets/images/avatar-chris.jpg",
    stack1: "/assets/images/avatar-stack-1.jpg",
    stack2: "/assets/images/avatar-stack-2.jpg",
    stack3: "/assets/images/avatar-stack-3.jpg",
    stack4: "/assets/images/avatar-stack-4.jpg",
  },
  mockups: {
    appHome: "/assets/mockups/app-screen-home.png",
    matchConfirmed: "/assets/mockups/app-screen-match-confirmed.png",
  },
  people: {
    yassineZniber: "/assets/images/founder-yassine-zniber.jpg",
  },
} as const;
