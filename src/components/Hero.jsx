export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <img
        src="/assets/Hero.jpg"
        alt="KarmaMiles Hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">

        {/* Eyebrow label */}
        {/* <span className="inline-block mb-4 text-[#E76F51] text-xs uppercase tracking-[0.3em] font-medium">
          Welcome to KarmaMiles
        </span> */}

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
          Celebrating Life,{" "}
          Beautifully
          {" "} - At Every Age
        </h1>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-[#fe8800] rounded-full mb-6" />

        {/* Subtext */}
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mb-10">
            From heartfelt family celebrations to joyful outings and soulful mehfils,
            <br />
            Karma Miles creates meaningful experiences for you and your loved ones.
          </p>

          {/* CTA Button */}
        <a
          href="#experiences"
          className="inline-block  bg-[#fe8800]  hover:bg-[#f89626] text-white text-sm font-medium uppercase tracking-widest px-8 py-4 rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#fe8800]/30"
        >
          Explore Experiences
        </a>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

    </section>
  );
}