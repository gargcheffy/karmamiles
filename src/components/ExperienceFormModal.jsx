import { useState, useEffect, useRef } from "react";
import { X, Loader2 } from "lucide-react";

const INTEREST_OPTIONS = {
  "Family Mehfils":       ["Birthday", "Anniversary", "Retirement", "Milestone", "Other"],
  "Day Outings":          ["Nature Tour", "Farm Visit", "Heritage Tour", "Temple Tour"],
  "Karma Mehfils":        ["Bhajan Concert", "Talent Showcase", "Festival Event", "Silver Age Event"],
  "Karma Event Services": ["Bhajan Mandalis", "Musicians", "Pandit", "Photography", "Decor", "Anchor"],
  "Contact Us":           ["Celebrations", "Outings", "Event Services", "Partnership", "General Inquiry"],
};

const TITLES = {
  "Family Mehfils":       "Plan Your Family Mehfil",
  "Day Outings":          "Plan Your Day Outing",
  "Karma Mehfils":        "Explore Upcoming Karma Mehfil",
  "Karma Event Services": "Explore Event Services",
  "Contact Us":           "Contact Karma Miles",
};

const CITIES   = ["Delhi", "Gurgaon", "Noida"];
const SHEET_URL = process.env.REACT_APP_GOOGLE_SHEET_URL;

const EMPTY_FORM = { name: "", city: "", phone: "", interest: "" };

export function ExperienceFormModal({ isOpen, onClose, defaultExperience = "", Category = "" }) {
  const [form, setForm]         = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");
  const overlayRef              = useRef(null);

  const interestOptions = INTEREST_OPTIONS[defaultExperience] || [];

  useEffect(() => {
    if (isOpen) {
      setForm(EMPTY_FORM);
      setSubmitted(false);
      setError("");
    }
  }, [isOpen, defaultExperience]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      // Only allow digits, max 10
      const digits = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, phone: digits }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isValid =
    form.name.trim().length > 0 &&
    form.city.length > 0 &&
    form.phone.length >= 10 &&
    form.interest.length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    setLoading(true);
    setError("");

    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode:   "no-cors",
        body: JSON.stringify({
          name:       form.name,
          city:       form.city,
          phone:      "+91 " + form.phone,   // ← prefix added only on submit
          category:   Category,
          experience: defaultExperience,    
          interest:   form.interest,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-[#fe8800]" />

        <div className="px-8 pt-7 pb-8">

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-[#F5E9DC] hover:bg-[#fe8800]/20 transition-colors duration-200"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-[#4E342E]" strokeWidth={2} />
          </button>

          {!submitted ? (
            <>
              {/* Header */}
              <div className="mb-7">
                <h2 className="mt-1.5 text-2xl font-bold text-[#4E342E] leading-snug">
                  {TITLES[defaultExperience] || "Tell us what you're planning"}
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-medium uppercase tracking-widest text-[#4E342E]/70">
                    Full Name <span className="text-[#fe8800]">*</span>
                  </label>
                  <input
                    id="name" name="name" type="text" required
                    placeholder="E.g. Sunita Sharma"
                    value={form.name} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] bg-[#FDFAF7] text-sm text-[#2C2C2C] placeholder-[#2C2C2C]/30 focus:outline-none focus:border-[#fe8800] focus:ring-2 focus:ring-[#fe8800]/15 transition-all duration-200"
                  />
                </div>

                {/* City */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="city" className="text-xs font-medium uppercase tracking-widest text-[#4E342E]/70">
                    City <span className="text-[#fe8800]">*</span>
                  </label>
                  <select
                    id="city" name="city" required
                    value={form.city} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] bg-[#FDFAF7] text-sm text-[#2C2C2C] focus:outline-none focus:border-[#fe8800] focus:ring-2 focus:ring-[#fe8800]/15 transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select your city</option>
                    {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* Phone — split prefix + input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-medium uppercase tracking-widest text-[#4E342E]/70">
                    Phone Number <span className="text-[#fe8800]">*</span>
                  </label>
                  <div className="flex items-center border border-[#E8D5C4] bg-[#FDFAF7] rounded-xl overflow-hidden focus-within:border-[#fe8800] focus-within:ring-2 focus-within:ring-[#fe8800]/15 transition-all duration-200">
                    {/* Fixed +91 prefix */}
                    <span className="px-3 py-3 text-sm text-[#2C2C2C]/70 font-medium bg-[#F5E9DC] border-r border-[#E8D5C4] select-none flex-shrink-0">
                      +91
                    </span>
                    {/* Digits only input */}
                    <input
                      id="phone" name="phone" type="tel" required
                      placeholder="9999999999"
                      value={form.phone}
                      onChange={handleChange}
                      className="flex-1 px-3 py-3 bg-transparent text-sm text-[#2C2C2C] placeholder-[#2C2C2C]/30 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Interest */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="interest" className="text-xs font-medium uppercase tracking-widest text-[#4E342E]/70">
                    I'm Interested In <span className="text-[#fe8800]">*</span>
                  </label>
                  <select
                    id="interest" name="interest" required
                    value={form.interest} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8D5C4] bg-[#FDFAF7] text-sm text-[#2C2C2C] focus:outline-none focus:border-[#fe8800] focus:ring-2 focus:ring-[#fe8800]/15 transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select an option</option>
                    {interestOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>

                {/* Error */}
                {error && (
                  <p className="text-xs text-red-500 bg-red-50 px-4 py-2.5 rounded-xl">{error}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!isValid || loading}
                  className={`mt-2 w-full flex items-center justify-center gap-2 text-white text-xs font-medium uppercase tracking-widest py-4 rounded-xl transition-all duration-300 ${
                    isValid && !loading
                      ? "bg-[#fe8800] hover:bg-[#e07a00] hover:shadow-lg hover:shadow-[#fe8800]/25 hover:-translate-y-0.5 cursor-pointer"
                      : "bg-[#fe8800]/40 cursor-not-allowed"
                  }`}
                >
                  {loading ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                  ) : (
                    "Submit Request"
                  )}
                </button>

              </form>
            </>
          ) : (
            /* Success State */
            <div className="flex flex-col items-center text-center gap-4 py-6">
              <div className="w-16 h-16 rounded-full bg-[#fe8800]/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#fe8800]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#4E342E]">We'll be in touch!</h3>
              <p className="text-sm text-[#2C2C2C]/60 leading-relaxed max-w-xs">
                Thank you, <span className="font-semibold text-[#4E342E]">{form.name}</span>.
                Our team will call you within 24 hours to plan your{" "}
                <span className="font-semibold text-[#fe8800]">{form.interest}</span> experience.
              </p>
              <button
                onClick={onClose}
                className="mt-2 bg-[#fe8800] hover:bg-[#e07a00] text-white text-xs font-medium uppercase tracking-widest px-8 py-3 rounded-xl transition-all duration-300"
              >
                Close
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}