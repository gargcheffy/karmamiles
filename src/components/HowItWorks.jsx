import { ClipboardList, Sparkles, PartyPopper } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Tell us what you are planning",
    description:
      "Share your celebration idea, outing preference, or event vision — We listen to every detail.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "We curate the perfect experience",
    description:
      "Our team designs a thoughtful and personalized plan tailored exactly to your needs and wishes.",
  },
  {
    icon: PartyPopper,
    step: "03",
    title: "You celebrate, we handle the rest",
    description:
      "Relax and be present while we take care of everything end-to-end, seamlessly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#F5E9DC] py-10 md:py-12">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8">
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#2C2C2C] tracking-tight leading-tight">
            How It Works
          </h2>
          <div className="w-14 h-[2px] bg-[#fe8800] rounded-full mt-4 mb-4" />
          <p className="text-base md:text-lg text-[#2C2C2C]/60 font-light max-w-md">
            Three simple steps to a beautiful experience.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">

          {/* Connector line — desktop only */}
          {/* <div className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-[1px] bg-[#fe8800]/20" /> */}

          {STEPS.map(({ icon: Icon, step, title, description }) => (
            <div
              key={step}
              className="group flex flex-col items-center text-center gap-4 p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1"
            >
              {/* Step number + Icon */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#fe8800]/10 group-hover:bg-[#fe8800]/20 flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#fe8800]" strokeWidth={1.6} />
                </div>
                {/* Step badge */}
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#fe8800] text-white text-[10px] font-bold flex items-center justify-center leading-none">
                  {step.replace("0", "")}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-bold text-[#4E342E] leading-snug">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}