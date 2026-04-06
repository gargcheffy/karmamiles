import { HeartHandshake, Users, Plane, Building2 } from "lucide-react";

const AUDIENCE = [
  {
    icon: HeartHandshake,
    title: "Seniors",
    text: "Looking for joyful experiences",
  },
  {
    icon: Users,
    title: "Families",
    text: "Planning meaningful celebrations",
  },
  {
    icon: Plane,
    title: "NRIs",
    text: "Gifting memories back home",
  },
  {
    icon: Building2,
    title: "Communities & Groups",
    text: "Organising events for residents",
  },
];

export default function WhoItsFor() {
  return (
    <section className="w-full bg-[#FDFAF7] py-10 md:py-12" >
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
       
          <h2 className="text-2xl md:text-4xl font-bold text-[#2C2C2C] tracking-tight leading-tight">
            Who It's For
          </h2>
          <div className="w-14 h-[2px] bg-[#fe8800] rounded-full mt-5" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIENCE.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group flex flex-col items-center text-center gap-3 bg-white border border-[#F0E0D0] rounded-2xl px-6 py-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon Ring */}
              <div className="w-14 h-14 rounded-full bg-[#fe8800]/10 group-hover:bg-[#fe8800]/20 flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                <Icon className="w-6 h-6 text-[#fe8800]" strokeWidth={1.6} />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#4E342E] leading-snug">
                {title}
              </h3>

              {/* Text */}
              <p className="text-sm text-[#2C2C2C]/55 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}