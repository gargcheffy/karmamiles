import { useState } from "react";
import { ExperienceFormModal } from "./ExperienceFormModal";


export default function ExperienceCard({ image, tagline, title, description, buttonText ,showbutton }) {
 
  const [open, setOpen] = useState(false);
 
  return (
    <>
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5">

      {/* Image */}
      <div className="overflow-hidden h-52 w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-2.5">

        {/* Tagline */}
        <span className="text-xs font-medium uppercase tracking-widest text-[#fe8800]">
          {tagline}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#4E342E] leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#2C2C2C]/70 leading-relaxed flex-1">
          {description}
        </p>

        {/* CTA Button */}
        {showbutton && (
          <button    onClick={() => setOpen(true)} className="mt-3 self-center bg-[#fe8800] hover:bg-[#f89626] text-white text-xs font-small  tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-md hover:shadow-[#fe8800]/30">
            {buttonText}
          </button>
        )}

      </div>
    </div>

 {/* Modal */}
      <ExperienceFormModal
        isOpen={open}
        onClose={() => setOpen(false)}
        defaultExperience={title}
        Category={title}
      />
      </>

  );
}