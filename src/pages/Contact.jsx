import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { ExperienceFormModal } from "../components/ExperienceFormModal";
import { useState } from "react";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="w-full font-sans min-h-screen bg-[#FDFAF7]">

      {/* ── Hero ── */}
      <section className="w-full bg-gradient-to-br from-[#F5E9DC] via-[#FDF3EA] to-[#F5E9DC] pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] tracking-tight leading-tight mb-6">
           <span> Get in  Touch </span> 
           
          </h1>
          <p className="text-lg md:text-xl text-[#6B5B52] font-light leading-relaxed">
            We'd love to hear from you. Whether you have a question or want to plan something special.
          </p>
        </div>
      </section>

      {/* ── Contact Info + Card ── */}
      <section className="w-full bg-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Left: Contact Info */}
            <div className="flex flex-col gap-8">

              {/* Phone */}
              <div className="flex items-start gap-4 text-left">
                <div className="h-12 w-12 rounded-full bg-[#E76F51]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-[#fe8800]" strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2C2C2C] mb-1">Phone</h3>
                  <a
                    href="tel:+919205536806"
                    className="text-base text-[#6B5B52] hover:text-[#fe8800] transition-colors duration-200"
                  >
                    +91  92055 36806
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 text-left">
                <div className="h-12 w-12 rounded-full bg-[#E76F51]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-[#fe8800]" strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2C2C2C] mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/919205536806"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-[#6B5B52] hover:text-[#fe8800] transition-colors duration-200"
                  >
                    Chat with us instantly
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 text-left">
                <div className="h-12 w-12 rounded-full bg-[#E76F51]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-[#fe8800]" strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2C2C2C] mb-1">Email</h3>
                  <a
                    href="mailto:karmamilesexperiences@gmail.com"
                    className="text-base text-[#6B5B52] hover:text-[#fe8800] transition-colors duration-200"
                  >
                    karmamilesexperiences@gmail.com
                  </a>
                </div>
              </div>

              {/* Service Area */}
              <div className="flex items-start gap-4 text-left">
                <div className="h-12 w-12 rounded-full bg-[#fe8800]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-[#fe8800]" strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2C2C2C] mb-1">Service Area</h3>
                  <p className="text-base text-[#6B5B52]">Currently serving NCR</p>
                </div>
              </div>

            </div>

            {/* Right: Callback Card */}
            <div className="bg-white border border-[#F0E0D0] rounded-2xl shadow-md p-10 flex flex-col items-center justify-center text-center gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2C2C2C] mb-3">
                  Request a Callback
                </h3>
                <p className="text-base text-[#6B5B52] leading-relaxed">
                  Leave your details and we'll get back to you within 24 hours.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#fe8800] hover:bg-[#fdb33b] text-black  hover:text-black text-sm font-medium uppercase tracking-widest py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#fe8800]/25 hover:-translate-y-0.5"
              >
                Request a Callback
              </button>
            </div>

          </div>
        </div>
      </section>
      
      <ExperienceFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultExperience="Contact Us"
      />

    </main>
  );
}