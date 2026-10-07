import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Phone, Mail, MessageSquare, Instagram, MapPin, ArrowUp } from 'lucide-react';
import { LOCATION_AREAS } from '../data/properties';

interface FooterProps {
  onNavigate: (view: string) => void;
  onSelectLocation?: (location: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectLocation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A261A] text-white border-t border-[#0E3424]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <BrandLogo size="lg" variant="light" showTagline={true} />
            <p className="text-xs sm:text-[13px] text-[#A8C4B2] font-light leading-relaxed mt-5 max-w-sm">
              A curated collection of comfortable, fully equipped furnished properties and guest houses across premier neighborhoods.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://wa.me/251975381714?text=Hello%20Garden%20Properties%2C%20I%20would%20like%20to%20inquire%20about%20a%20stay."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#4E9B58] text-white flex items-center justify-center transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="tel:+251975381714"
                aria-label="Phone"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#4E9B58] text-white flex items-center justify-center transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/garden_properties/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#4E9B58] text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@garden.properties"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#4E9B58] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43c.79-.81 1.25-1.91 1.28-3.06V8.71a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.32-.14z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#72B765] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Properties', id: 'properties' },
                { label: 'Locations', id: 'locations' },
                { label: 'Visual Tour', id: 'tour' },
                { label: 'About', id: 'about' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#CDE8D5] hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#72B765] mb-4">
              Locations
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {LOCATION_AREAS.map((loc) => (
                <li key={loc.id}>
                  <button
                    onClick={() => {
                      if (onSelectLocation) onSelectLocation(loc.name);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#CDE8D5] hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {loc.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Inquiries & Assistance */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#72B765] mb-4">
              Contact & Inquiries
            </h4>
            <div className="space-y-3 text-xs sm:text-[13px] text-[#CDE8D5]">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#72B765] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-[#8EA897] uppercase tracking-wider">Direct Phone</div>
                  <a href="tel:+251975381714" className="hover:text-white font-medium">+251 975 381 714 (0975381714)</a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#72B765] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-[#8EA897] uppercase tracking-wider">WhatsApp Concierge</div>
                  <a href="https://wa.me/251975381714?text=Hello%20Garden%20Properties%2C%20I%20would%20like%20to%20inquire%20about%20a%20stay." target="_blank" rel="noopener noreferrer" className="hover:text-white font-medium">Chat on +251 975 381 714</a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-[#72B765] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-[#8EA897] uppercase tracking-wider">Social Media</div>
                  <a href="https://www.instagram.com/garden_properties/" target="_blank" rel="noopener noreferrer" className="hover:text-white font-medium">@garden_properties</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Concept Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8EA897]">
          <p>© 2026 Garden Properties. All rights reserved. "Where Nature Meets Home".</p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#A8C4B2]/70">
              Visual Proposal & Brand Concept
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer flex items-center gap-1 text-[11px]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
