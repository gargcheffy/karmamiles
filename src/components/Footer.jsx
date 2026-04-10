import { Link } from "react-router-dom";
import {FaInstagram,FaYoutube} from "react-icons/fa"
export default function Footer() {
  return (
    <footer className="w-full bg-[#4E342E] text-white">
      <div className="max-w-7xl mx-auto px-6 py-7 md:py-11">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Karma Miles</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Curated celebrations, experiences and community for seniors and families. Making every milestone meaningful.
            </p>
          </div>

          {/* Get in Touch */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-white/70">
                <a href="tel:+919205536806" className="hover:text-[#E76F51] transition-colors">
                  +91  9205536806
                </a>
              </p>
              <p className="text-white/70">
                <a href="mailto:events@karmamiles.in" className="hover:text-[#E76F51] transition-colors">
                  events@karmamiles.in
                </a>
              </p>
              <p className="mt-3">
                <a 
                  href="https://wa.me/919205536806" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/90 hover:text-[#E76F51] transition-colors"
                >
                  💬 Chat on WhatsApp
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/70 hover:text-[#E76F51] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-[#E76F51] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-[#E76F51] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/outings" className="text-white/70 hover:text-[#E76F51] transition-colors">
                  Outings
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-[#E76F51] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.instagram.com/karmamilesexperiences/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-[#E76F51] transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@KarmaMilesExperiences" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-[#E76F51] transition-colors"
                >
                  <FaYoutube className="w-5 h-5" />
                  YouTube
                </a>
              </li>
            </ul>
            <p className="text-white/50 text-xs mt-6 italic">
              Currently serving NCR
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Karma Miles. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
