import ExperienceCard from "../components/ExperienceCard";
import { Shield, Heart, Users, Camera } from "lucide-react";
import { ExperienceFormModal } from "../components/ExperienceFormModal";
import { useState } from "react";
   const outings = [
        {
            image:"/assets/natureWalk.svg",
            title: "Nature Walk & Farm Breakfast",
            description: "Coming Soon",
            showbutton:false,
        },
        {
            image:"/assets/templeTour.png",
            title: "Heritage Temple Tour",
            description: "Coming Soon",
            showbutton:false,
       
        },
        {
                image:"/assets/sunsetPicnic.png",
            title: "Sunset Picnic by the River",
            description: "Coming Soon",
            showbutton:false,
        }
    ];

export default function Outings() {

  const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <main className="w-full font-sans">

          {/* ── 1. Hero ── */}
          <section className="w-full bg-gradient-to-r from-[#f4eee7]  to-[#ffe5c9] pt-20 pb-16 px-6">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold   tracking-tight leading-tight mb-5">
              
              <span className="bg-gradient-to-r from-[#faa638] to-[#f26f04] bg-clip-text text-transparent">
                  Day Outings</span>
              </h1>
              {/* <div className="w-14 h-[2px] bg-[#E76F51] rounded-full mb-6" /> */}
              <p className="text-lg md:text-xl text-[#463333]  font-light max-w-xl leading-relaxed">
               Small trips, big smiles. Curated outings designed for comfort, bonding, and effortless memories.
              </p>
            </div>
          </section>

          {/* ── 2.  Upcoming Outings List ── */}
            <section className="w-full py-12 md:py-16">   
            <div className="max-w-6xl mx-auto px-7">
                <h2 className="text-2xl md:text-3xl font-bold text-[#2C2C2C] mb-6">
                   Upcoming Outings
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {outings.map((exp, index) => (
                    <ExperienceCard key={index}  {...exp} />
                ))}

                </div>
            </div> 
            <div className="mt-8">
              <button
            onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-[#ff9102] text-black font-semibold rounded-lg hover:bg-[#fdb33b] hover:text-black transition"
          >
            Join Next Outing
          </button>
               
         
            </div> 
           </section>



          {/* ── 3. Values strip ── */}
      <section className="w-full bg-[#F5E9DC] py-5 border-y border-[#E76F51]/15">
        <div className="max-w-6xl mx-auto px-6">
             <div className="flex flex-col items-center text-center mb-14">
          
          <h2 className="text-3xl md:text-5xl font-medium text-[#2C2C2C] tracking-tight leading-tight">
           Your Comfort, Our Priority
          </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: Shield , value: "Safe Transport", label: <>Comfortable, accessible<br />vehicles.</> },
              { icon: Heart , value: "Elder-friendly", label: <>Pace and planning suited for <br /> seniors.</> },
              { icon: Users , value: "Joyful Company", label: <>Curated groups for great <br /> bonding.</> },
            ].map(({ icon: Icon, value, label }) => (
              <li key={value} className="flex flex-col items-center gap-5 px-4">
                <div className="w-16 h-16 rounded-full bg-[#E76F51]/10 group-hover:bg-[#E76F51]/20 flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#E76F51]" strokeWidth={1.6} />
                </div>
                <span className="text-lg font-medium text-[#110f0e] tracking-wide">{value}</span>
                <span className="text-sm text-[#2C2C2C]/55 leading-relaxed ">{label}</span>
        
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Moments that matter strip */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-8">
            <Camera className="w-10 h-10 text-[#E76F51]" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-5xl font-medium text-[#2C2C2C] tracking-tight leading-tight">
              Moments that Matter 
            </h2>
          </div>
          
          <div className="grid grid-cols-3 gap-4 w-full">
            {/* Image 1 */}
            <div className="relative group overflow-hidden rounded-lg cursor-pointer">
              <img
                src="/assets/outings.svg"
                alt="Day Outings"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-lg font-semibold">Day Outings</p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative group overflow-hidden rounded-lg cursor-pointer">
              <img
                src="/assets/LiveMusicians.jpg"
                alt="Live Musicians"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-lg font-semibold">Society events</p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative group overflow-hidden rounded-lg cursor-pointer">
              <img
                src="/assets/celebrations.png"
                alt="Celebrations"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-lg font-semibold">Celebrations</p>
              </div>
            </div>

            {/* Image 4 */}
            <div className="relative group overflow-hidden rounded-lg cursor-pointer">
              <img
                src="/assets/spiritualHosts.jpg"
                alt="Talent Zone"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-lg font-semibold">Talent Zone</p>
              </div>
            </div>

            {/* Image 5 */}
            <div className="relative group overflow-hidden rounded-lg cursor-pointer">
              <img
                src="/assets/premiumEvents.svg"
                alt="Premium Events"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-lg font-semibold">Premium Events</p>
              </div>
            </div>

            {/* Image 6 */}
            <div className="relative group overflow-hidden rounded-lg cursor-pointer">
              <img
                src="/assets/community.svg"
                alt="Community"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-lg font-semibold">Community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

         {/* Modal */}
        <ExperienceFormModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            defaultExperience="Day Outings"
        />
    </main>
  );
}