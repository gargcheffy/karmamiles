import { useState } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home",     path: "/" },
  { label: "About",    path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Outings",  path: "/outings" },
  { label: "Contact",  path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#ffffff] shadow-[0_2px_10px_rgba(0,0,0,0.08)] sticky top-0 z-50">

      {/* Main Row */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">

        {/* Brand Logo - Left */}
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/assets/LOGO.png"
            alt="KarmaMiles Logo"
            className="w-auto h-12 rounded-full object-contain flex-shrink-0"
          />
          <span className="text-2xl font-bold text-[#fe8800]">Karma Miles</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 ml-auto">
          {NAV_LINKS.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className="relative text-sm font-medium text-[#2C2C2C] uppercase tracking-widest transition-colors duration-300 hover:text-[#fe8800] group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#fe8800] rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] ml-auto"
        >
          <span className={`block w-5 h-[2px] bg-[#2C2C2C] rounded transition-all duration-300 origin-center ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-5 h-[2px] bg-[#2C2C2C] rounded transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-[2px] bg-[#2C2C2C] rounded transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col border-t border-[#2C2C2C]/10">
          {NAV_LINKS.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3.5 text-sm font-medium uppercase tracking-widest text-[#2C2C2C] border-b border-[#2C2C2C]/[0.06] transition-all duration-200 hover:text-[#fe8800] hover:pl-9 hover:bg-[#fe8800]/5 last:border-none"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
}