import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, Phone, MessageSquare, Compass, CalendarCheck } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenInquiry: (propertyId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenInquiry
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Properties', id: 'properties' },
    { label: 'Locations', id: 'locations' },
    { label: 'Visual Tour', id: 'tour' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F5]/95 backdrop-blur-md shadow-xs border-b border-[#0E3424]/10 py-3.5'
            : 'bg-[#FAF9F5] border-b border-[#0E3424]/5 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Single Brand element */}
            <div className="flex items-center">
              <BrandLogo
                onClick={() => handleLinkClick('home')}
                size="md"
                variant="dark"
              />
            </div>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[13.5px] font-medium tracking-wide">
              {navLinks.map((link) => {
                const isActive = currentView === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative py-1 whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'text-[#0E3424] font-semibold'
                        : 'text-[#3E4A43] hover:text-[#0E3424]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#4E9B58] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Primary CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => onOpenInquiry()}
                className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-[#0E3424] hover:bg-[#164230] text-white text-xs font-semibold tracking-wider uppercase rounded-lg transition-all duration-200 shadow-xs hover:shadow cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <CalendarCheck className="w-3.5 h-3.5 text-[#72B765]" />
                <span>Book a Stay</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => onOpenInquiry()}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#0E3424] text-white text-[11px] font-medium tracking-wider uppercase rounded-md whitespace-nowrap"
              >
                <CalendarCheck className="w-3 h-3 text-[#72B765]" />
                <span>Book</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                className="p-2 text-[#0E3424] hover:bg-[#0E3424]/5 rounded-lg transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/40 backdrop-blur-xs flex flex-col justify-start">
          <div className="bg-[#FAF9F5] w-full border-b border-[#0E3424]/10 shadow-xl px-6 py-6 animate-in slide-in-from-top duration-200">
            <div className="flex items-center justify-between pb-5 border-b border-[#0E3424]/10">
              <BrandLogo
                onClick={() => handleLinkClick('home')}
                size="sm"
                variant="dark"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#0E3424] hover:bg-[#0E3424]/5 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = currentView === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`flex items-center justify-between py-3 px-3 text-base rounded-lg text-left transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#0E3424]/8 text-[#0E3424] font-semibold'
                        : 'text-[#2C3831] hover:bg-[#0E3424]/4'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4E9B58]" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#0E3424]/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#0E3424] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm"
              >
                <CalendarCheck className="w-4 h-4 text-[#72B765]" />
                <span>Book a Stay / Inquire</span>
              </button>
              <a
                href="https://wa.me/251975381714?text=Hello%20Garden%20Properties%2C%20I%20am%20interested%20in%20inquiring%20about%20a%20furnished%20stay."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#4E9B58]/12 text-[#0E3424] text-xs font-semibold uppercase tracking-wider rounded-lg border border-[#4E9B58]/25"
              >
                <MessageSquare className="w-4 h-4 text-[#2E7D32]" />
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>
          </div>
          <div
            className="flex-1"
            onClick={() => setMobileMenuOpen(false)}
          />
        </div>
      )}
    </>
  );
};
