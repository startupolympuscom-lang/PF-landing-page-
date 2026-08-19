import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { BrandEssence } from "./components/BrandEssence";
import { Pillars } from "./components/Pillars";
import { HowItWorks } from "./components/HowItWorks";
import { Gallery } from "./components/Gallery";
import { AppShowcase } from "./components/AppShowcase";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-deep-black text-pure-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <BrandEssence />
        <Pillars />
        <HowItWorks />
        <Gallery />
        <AppShowcase />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
