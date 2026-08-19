import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { SportsGrid } from "./components/SportsGrid";
import { Origin } from "./components/Origin";
import { Testimonials } from "./components/Testimonials";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-pure-white text-deep-black">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <SportsGrid />
        <Origin />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
