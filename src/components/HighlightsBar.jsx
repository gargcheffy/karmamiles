import { Users, Sparkles, ClipboardCheck } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: Users,
    text: "Trusted by families and elder groups",
  },
  {
    icon: Sparkles,
    text: "Elder-friendly curated experiences",
  },
  {
    icon: ClipboardCheck,
    text: "Free support for your Event planning",
  },
];

export default function TrustBar() {
  return (
    <section className="w-full bg-[#F5E9DC] py-4 md:py-6 border-y border-[#2C2C2C]/10">
      <div className="max-w-5xl mx-auto px-6">
        <ul className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          {TRUST_ITEMS.map(({ icon: Icon, text }, index) => (
            <li key={index} className="flex items-center gap-3">
              {/* Icon */}
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#E76F51]/10 flex items-center justify-center">
                <Icon className="w-4 h-4 text-[#E76F51]" strokeWidth={1.8} />
              </div>
              {/* Text */}
              <span className="text-sm md:text-base font-medium text-[#2C2C2C] tracking-wide max-w-[200px] leading-snug text-left">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}