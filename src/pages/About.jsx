import { Heart, Star, Eye } from "lucide-react";
import { ExperienceFormModal } from "../components/ExperienceFormModal";
import { useState } from "react";

const DIFFERENTIATORS = [
  {
    icon: Heart,
    title: "Elder-first design",
    description: "Every detail crafted for comfort and joy.",
  },
  {
    icon: Star,
    title: "Emotion-led experiences",
    description: "We don't just plan events — we create feelings.",
  },
  {
    icon: Eye,
    title: "Trusted curation",
    description: "Handpicked artists, venues, and services.",
  },
];

export default function About() {
      const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <main className="w-full font-sans min-h-screen bg-[#FDFAF7]">

      {/* ── 1. Hero — gradient-warm ── */}
      <section className="w-full bg-gradient-to-r from-[#f4eee7]  to-[#ffe5c9] pt-20 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] tracking-tight leading-tight mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-[#faa638] to-[#f26f04] bg-clip-text text-transparent">
              Karma Miles
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#6B5B52] leading-relaxed">
            We believe life after 50 deserves celebration, not slowdown.
          </p>
        </div>
      </section>

      {/* ── 2. Our Story ── */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6">
            Our Story
          </h2>
          <p className="text-lg text-[#6B5B52] leading-relaxed mb-6">
            Karma Miles was born from a simple belief — life after 50 deserves
            celebration, not slowdown. We saw seniors longing for connection,
            families wanting to do more for their parents, and communities
            ready for meaningful engagement.
          </p>
          <p className="text-base text-[#6B5B52] leading-relaxed">
            So we built a platform that brings together curated experiences,
            soulful celebrations, and genuine community — all designed with
            elder-first care and warmth.
          </p>
        </div>
      </section>

      {/* ── 3. Our Mission — soft secondary bg ── */}
      <section className="w-full bg-[#F5E9DC] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6">
            Our Mission
          </h2>
          <p className="text-2xl md:text-3xl text-[#4E342E] font-light italic leading-relaxed">
            "To make aging joyful, social and celebrated."
          </p>
        </div>
      </section>

      {/* ── 4. What Makes Us Different ── */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C2C2C] text-center mb-12">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DIFFERENTIATORS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#fe8800]/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#fe8800]" strokeWidth={1.6} />
                </div>
                <h3 className="text-lg font-bold text-[#2C2C2C]">{title}</h3>
                <p className="text-base text-[#6B5B52]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA — gradient-gold ── */}
      <section className="w-full bg-gradient-to-r from-[#f0ad4f] to-[#f18731] py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            Let's Create Something Beautiful Together
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-[#f9f9f9] text-black font-semibold rounded-lg hover:bg-[#f8c76a] hover:text-white transition"
          >
            Talk to Our Team
          </button>
        </div>
      </section>

          {/* Modal */}
        <ExperienceFormModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            defaultExperience="Contact Us"
            Category="ContactUs"
        />
      

    </main>
  );
}