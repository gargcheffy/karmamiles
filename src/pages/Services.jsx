import { useState } from "react";
   import ExperienceCard from "../components/ExperienceCard";
   import { ExperienceFormModal } from "../components/ExperienceFormModal";
   
   const services = [
        {
            image:"/assets/bhajanMandlis.svg",
            title: "Bhajan Mandalis",
            description: "Soulful devotional music groups for every occasion.",
            showbutton:false,
        },
        {
            image:"/assets/liveMusicians.jpg",
            title: "Live Musicians",
            description: "Professional instrumentalists and vocalists.",
            showbutton:false,
       
        },
        {
                image:"/assets/spiritualHosts.jpg",
            title: "Spiritual Hosts",
            description: "Pandits and katha vachaks for sacred ceremonies.",
            showbutton:false,
        },
        { 
            image:"/assets/anchorsEmcees.svg",
            title: "Anchors & Emcees",
            description: "Experienced hosts to make every event memorable.",
            showbutton:false,
        },
        {
             image:"/assets/photographyVideography.jpg",
            title: "Photography & Videography",
            description: "Capturing your precious moments beautifully.",
            showbutton:false,
        },
        {
             image:"/assets/decorSetups.svg",
            title: "Decor Setups",
            description: "Elegant, tasteful event decoration services.",
            showbutton:false,
        },
    ];

export default function Services() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="w-full font-sans">

    {/* ── 1. Hero — gradient-warm ── */}
      <section className="w-full bg-gradient-to-r from-[#f4eee7]  to-[#ffe5c9] pt-20 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] tracking-tight leading-tight mb-6">
            
            <span className="bg-gradient-to-r from-[#faa638] to-[#f26f04] bg-clip-text text-transparent">
              Karma Event Services
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#6B5B52] leading-relaxed">
            Handpicked services to elevate any celebration. We handle it all so you can focus on the moment.
          </p>
        </div>
      </section>
        

          {/* ── 2. Services List ── */}
            <section className="w-full py-12 md:py-16">   
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2C2C2C] mb-6">
                        Our Services
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((exp, index) => (
                            <ExperienceCard key={index}  {...exp} />
                        ))}

                    </div>
                </div>  
           </section>

           {/* ── 3. Call to Action ── */}
       <section className="w-full bg-gradient-to-r from-[#f0ad4f] to-[#f18731] py-16 px-6">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#ffffff] mb-4">
                    Need Services for Your Event?
                </h2>
                {/* <p className="text-lg text-[#ffffff] font-light mb-8 max-w-xl">
                    Explore our services to make your event unforgettable.
                </p> */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-3 bg-[#f9f9f9] text-black font-semibold rounded-lg hover:bg-[#f8c76a] hover:text-white transition"
                >
                    Book Services 
                </button>
            </div>
        </section>

        {/* Modal */}
        <ExperienceFormModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            defaultExperience="Karma Event Services"
        />
      

        </main>
      );
}