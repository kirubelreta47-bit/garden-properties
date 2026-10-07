import React from 'react';
import { ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';

interface InquiryCTAProps {
  onExplore: () => void;
  onContact: () => void;
  onOpenInquiry: () => void;
}

export const InquiryCTA: React.FC<InquiryCTAProps> = ({
  onExplore,
  onContact,
  onOpenInquiry
}) => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#0E3424] text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-xl">
          {/* Subtle Background Foliage Accents */}
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-[#4E9B58]/15 blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-[#72B765]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#A5D6A7] text-xs font-semibold tracking-[0.24em] uppercase mb-5">
              <span>Ready for You</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white tracking-tight mb-4">
              Your Next Stay Starts Here.
            </h2>

            <p className="text-base sm:text-lg text-[#D4E4DA] font-light leading-relaxed max-w-2xl mx-auto mb-8">
              Found a property you love? Get in touch with our team and let’s make your stay happen smoothly and effortlessly.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={onExplore}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#4E9B58] hover:bg-[#58A55C] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 shadow-md cursor-pointer active:scale-[0.98]"
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wider uppercase rounded-xl border border-white/20 transition-all duration-200 cursor-pointer active:scale-[0.98]"
              >
                <span>Contact Garden Properties</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
