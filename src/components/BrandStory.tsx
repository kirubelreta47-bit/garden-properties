import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface BrandStoryProps {
  onExplore: () => void;
  onContact: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onExplore, onContact }) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0E3424] text-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
          {/* Editorial Text Column */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#A5D6A7] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#72B765]" />
                Brand Philosophy
              </div>

              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-white tracking-tight mb-6">
                Comfort should feel effortless.
              </h2>

              <p className="text-base text-[#D4E4DA] font-light leading-relaxed mb-6">
                Garden Properties connects guests with comfortable, fully furnished spaces designed for short visits or extended stays. We believe a rental should never feel temporary or impersonal; it should offer the tranquility, convenience, and warmth of a true home from the moment you step through the door.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#72B765] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#E1EDE5] font-light">
                    Curated botanical touches and generous natural daylight in every suite.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#72B765] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#E1EDE5] font-light">
                    Comprehensive backup power and high-volume water reserves for uninterrupted peace of mind.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#72B765] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#E1EDE5] font-light">
                    Personalized guest coordination for seamless check-ins, extensions, and local guidance.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <button
                onClick={onExplore}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#4E9B58] hover:bg-[#58A55C] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all cursor-pointer shadow-xs active:scale-[0.98]"
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onContact}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wider uppercase rounded-xl border border-white/20 transition-all cursor-pointer active:scale-[0.98]"
              >
                <span>About Our Approach</span>
              </button>
            </div>
          </div>

          {/* Large Editorial Photograph Column */}
          <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"
              alt="Garden Properties Curated Living Space"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E3424]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0E3424] lg:via-transparent lg:to-transparent" />
            <div className="absolute bottom-6 right-6 left-6 lg:left-auto lg:max-w-xs p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 text-white">
              <p className="font-serif-display text-sm italic text-[#E1EDE5]">
                "Where architecture breathes and every window opens to peace."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
