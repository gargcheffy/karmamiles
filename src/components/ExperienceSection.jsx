import ExperienceCard from "./ExperienceCard";

const EXPERIENCES = [
  {
    image: "/assets/FamilyMehfils.svg",
    tagline: "Celebrations the Right Way",
    title: "Family Mehfils",
    description:
      "Make birthdays, anniversaries, retirements and milestones truly meaningful with soulful, beautifully curated gatherings at home or venues.",
    buttonText: "Plan a Family Mehfil",
    showbutton:true,
  },
  {
    image: "/assets/dayOutings.svg",
    tagline: "Small Trips, Big Smiles",
    title: "Day Outings",
    description:
      "Curated, comfortable outings designed for bonding, joy and effortless memories - perfect for families and groups.",
    buttonText: "Discover Outings",
    showbutton:true,
  },
  {
    image: "/assets/karmaMehfils.svg",
    tagline: "City-wide Celebrations",
    title: "Karma Mehfils",
    description:
      "Signature Karma Miles events where music, memories and expression come alive. Elder-first, open for all.",
    buttonText: "Explore Mehfils",
    showbutton:true,
  },
  {
    image: "/assets/eventServices.svg",
    tagline: "Elevate Any Celebration",
    title: "Karma Event Services",
    description:
      "Bhajan mandalis, musicians, pandits, anchors, photographers and more - handpicked services to make any event special.",
    buttonText: "Explore Services",
    showbutton:true,
  },
];

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="w-full bg-white py-14 md:py-18">
   
   
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          
          <h1 className="text-4xl font-bold text-[#2C2C2C] mb-4">
            Our Experiences
          </h1>
          <p className="text-lg text-[#2C2C2C]/80">
          Thoughtfully curated for every milestone, every gathering, every memory.
        </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCES.map((exp, index) => (
            <ExperienceCard key={index}  {...exp} />
          ))}
        </div>

      </div>
    </section>
  );
}