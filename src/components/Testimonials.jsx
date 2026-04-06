const TESTIMONIALS = [
  {
    quote:
      "Karma Miles made my father's retirement unforgettable. The bhajan sandhya was so soulful, everyone had tears of joy.",
    name: "Priya Sharma",
    role: "Daughter, Delhi",
  },
  {
    quote:
      "I never thought I could enjoy outings at this age. Every trip feels like a gift. Thank you, Karma Miles!",
    name: "Shanti Devi",
    role: "Senior Member, Age 68, Noida",
  },
  {
    quote:
      "Our society's mehfil was beautifully organised. The seniors loved every moment — we'll definitely do it again.",
    name: "Neha Kapoor",
    role: "RWA President, Green Valley , Gurgaon",
  },
  {
    quote:
      "I gifted my parents a Karma Miles celebration from abroad. Best decision ever — they couldn't stop smiling.",
    name: "Rohit Mehta",
    role: "NRI Son, USA",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#E76F51] fill-[#fe8800]"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#fe8800] mb-3">
            Kind Words
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#2C2C2C] tracking-tight leading-tight">
            What People Say
          </h2>
          <div className="w-14 h-[2px] bg-[#fe8800] rounded-full mt-5" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {TESTIMONIALS.map(({ quote, name, role }, index) => (
            <div
              key={index}
              className="group flex flex-col bg-[#FDF8F4] border border-[#F0E0D0] rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Stars */}
              <StarRating />

              {/* Big quote mark */}
              <span className="text-5xl leading-none text-[#fe8800]/20 font-serif mb-1 select-none">
                "
              </span>

              {/* Quote */}
              <p className="text-sm md:text-base text-[#2C2C2C]/75 italic leading-relaxed flex-1 -mt-3">
                {quote}
              </p>

              {/* Divider */}
              <div className="w-8 h-[1.5px] bg-[#fe8800]/40 rounded-full my-4 mx-auto" />

              {/* Person */}
              <div>
                <p className="text-sm font-bold text-[#4E342E]">{name}</p>
                <p className="text-xs text-[#2C2C2C]/50 mt-0.5 tracking-wide">{role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}