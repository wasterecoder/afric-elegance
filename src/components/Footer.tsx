
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

// Import TikTok icon (using a simple SVG since it's not in lucide-react)
const TikTokIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-burgundy text-white">
      <div className="pattern-divider"></div>
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-white mb-4">
              Afric Chic <span className="text-gold">Elegance</span>
            </h3>
            <p className="mb-4 text-gray-200">
              Celebrating African heritage through elegant fashion designs and quality craftsmanship.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/afric_elegance3?igsh=eDJ4MnU4ejFhMmNp&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold transition-colors">
                <Instagram size={22} />
              </a>
              <a href="https://www.facebook.com/share/1VFafzU42L/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gold transition-colors">
                <Facebook size={22} />
              </a>
              <a href="https://www.tiktok.com/@africelegance" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-gold transition-colors">
                <TikTokIcon size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">Shop Designs</Link></li>
              <li><Link to="/training" className="hover:text-gold transition-colors">Training Programs</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>No 18, Idowu Estate<br />Ajah, Lagos State, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>08168334381</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>africelegance787@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold">Subscribe</h4>
            <p className="mb-4 text-gray-200">Stay updated with our latest designs and offers.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
              <button type="submit" className="bg-gold hover:bg-opacity-90 text-black font-semibold py-2 px-4 rounded transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black/30 py-4 text-center text-sm">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Afric Chic Elegance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
