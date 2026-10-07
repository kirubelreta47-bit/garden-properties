import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Leaf, ShieldCheck, Heart, Sparkles, MapPin, Coffee, CheckCircle2 } from 'lucide-react';

interface AboutViewProps {
  onExplore: () => void;
  onContact: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onExplore, onContact }) => {
  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4E9B58] mb-2">
            Our Purpose & Story
          </div>
          <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0E3424] tracking-tight">
            Creating Spaces That Feel Like Home.
          </h1>
          <p className="text-base sm:text-lg text-[#4E5B53] mt-4 font-light leading-relaxed">
            Garden Properties was founded on a simple realization: travelers, diplomats, returning diaspora, and working professionals deserve furnished spaces that inspire calm, balance, and effortless everyday living.
          </p>
        </div>

        {/* Brand Core Visual & Lockup */}
        <div className="bg-[#0E3424] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <BrandLogo size="lg" variant="light" showTagline={true} />

              <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug text-[#FAF9F5]">
                Where Architecture Meets The Calm of Nature
              </h2>

              <p className="text-sm text-[#D4E4DA] leading-relaxed font-light">
                Our name and symbol embody our approach: solid, trustworthy architectural quality woven together with lush, natural tranquility. Every property in our portfolio is chosen for its generous natural light, pleasant green aspects, and serene neighborhood environment.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={onExplore}
                  className="px-5 py-3 bg-[#4E9B58] hover:bg-[#58A55C] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow cursor-pointer active:scale-[0.98]"
                >
                  Explore Current Stays
                </button>
                <button
                  onClick={onContact}
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-xl border border-white/20 transition-all cursor-pointer active:scale-[0.98]"
                >
                  Get in Touch
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="Garden Properties Living Space"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E3424]/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* The 3 Core Pillars */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#0E3424]">
              Our Guiding Principles
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6A61] mt-1 font-light">
              How we curate every property and care for every guest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl p-7 border border-[#0E3424]/10 shadow-xs space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#F4F2EB] border border-[#0E3424]/10 flex items-center justify-center text-[#235E43]">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-serif-display text-xl font-semibold text-[#0E3424]">
                1. Thoughtful Living
              </h3>
              <p className="text-xs sm:text-[13px] text-[#4E5B53] leading-relaxed font-light">
                We design environments with organic textures, plants, warm lighting, and comfortable furniture that make relaxing after a long day second nature.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[#0E3424]/10 shadow-xs space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#F4F2EB] border border-[#0E3424]/10 flex items-center justify-center text-[#235E43]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif-display text-xl font-semibold text-[#0E3424]">
                2. Dependable Quality
              </h3>
              <p className="text-xs sm:text-[13px] text-[#4E5B53] leading-relaxed font-light">
                From redundant backup power systems and high-capacity water tanks to dedicated fiber internet, everything works seamlessly.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-[#0E3424]/10 shadow-xs space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#F4F2EB] border border-[#0E3424]/10 flex items-center justify-center text-[#235E43]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif-display text-xl font-semibold text-[#0E3424]">
                3. Warm Hospitality
              </h3>
              <p className="text-xs sm:text-[13px] text-[#4E5B53] leading-relaxed font-light">
                Our local guest team is always on call to support you with check-ins, housekeeping, area recommendations, and long-term accommodation requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Trio Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl overflow-hidden">
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
              alt="Interior detail"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"
              alt="Interior detail"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
              alt="Interior detail"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
