import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative w-full h-[calc(100dvh-68px)] sm:h-[calc(100dvh-76px)] min-h-[460px] max-h-[860px] flex flex-col justify-center overflow-hidden bg-[#0E3424] text-white">
      {/* Background Image: Full Viewport Cover */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=85"
          alt="Garden Properties Furnished Living Interior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Measured Contrast Scrims for edge-to-edge cinematic depth & text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E3424]/90 via-[#0E3424]/65 to-[#0E3424]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E3424] via-[#0E3424]/30 to-black/30" />
      </div>

      {/* Main Hero Content: Centered comfortably to fit screen */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 sm:py-8 my-auto">
        <div className="max-w-3xl">
          {/* Slogan Kicker */}
          <div className="mb-3 sm:mb-5">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#A5D6A7] text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase hover:bg-white/20 transition-all duration-300 cursor-default shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#72B765] animate-pulse" />
              PREMIER FURNISHED LIVING & GUEST HOUSES
            </div>
          </div>

          <h1
            className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-white text-balance tracking-tight mb-2.5 sm:mb-4 drop-shadow-sm"
          >
            Find a Place That Feels Like Home.
          </h1>
          <p className="text-xs sm:text-base lg:text-lg text-[#E1EDE5] font-light leading-relaxed max-w-2xl mb-5 sm:mb-7">
            Discover thoughtfully selected, fully furnished properties designed for comfortable stays, wherever you need to be.
          </p>

          {/* Hero Action Button */}
          <div>
            <button
              onClick={onExplore}
              className="inline-flex items-center gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 bg-[#4E9B58] hover:bg-[#58A55C] active:bg-[#43884C] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 shadow-lg hover:shadow-2xl cursor-pointer active:scale-[0.98] group"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
