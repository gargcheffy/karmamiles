import Hero from "../components/Hero";
import HighlightsBar from "../components/HighlightsBar";
import ExperiencesSection from "../components/ExperienceSection";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import WhoItsFor from "../components/WhoItsFor";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HighlightsBar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <ExperiencesSection />
        <HowItWorks />
        <Testimonials />
        <WhoItsFor />
      </main>
      
    </div>
  );
}
