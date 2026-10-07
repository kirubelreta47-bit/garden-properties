import React, { useRef, useState, useEffect } from 'react';
import { LOCATION_AREAS, SAMPLE_PROPERTIES } from '../data/properties';
import { MapPin, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface ExploreLocationsProps {
  onSelectLocation: (locationName: string) => void;
}

export const ExploreLocations: React.FC<ExploreLocationsProps> = ({ onSelectLocation }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const slide = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = scrollRef.current.clientWidth > 640 ? 360 : 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F4F1E8]/70 border-y border-[#0E3424]/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4E9B58] mb-2 hover:text-[#0E3424] transition-colors cursor-default inline-block">
              Multi-Location Discovery
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E3424] tracking-tight hover:text-[#164230] transition-colors">
              Stay Where You Need To Be.
            </h2>
            <p className="text-sm sm:text-base text-[#4F5D54] mt-2 font-light leading-relaxed">
              From the international hub of Bole to quiet diplomatic enclaves and spacious garden estates in CMC.
            </p>
          </div>

          {/* Slide Navigation Buttons (Mobile Only) */}
          <div className="flex md:hidden items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => slide('left')}
              disabled={!canScrollLeft}
              aria-label="Previous locations"
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                canScrollLeft
                  ? 'bg-white border-[#0E3424]/15 text-[#0E3424] hover:bg-[#0E3424] hover:text-white shadow-xs'
                  : 'bg-[#FAF9F5] border-[#0E3424]/8 text-slate-300 cursor-not-allowed opacity-50'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => slide('right')}
              disabled={!canScrollRight}
              aria-label="Next locations"
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                canScrollRight
                  ? 'bg-white border-[#0E3424]/15 text-[#0E3424] hover:bg-[#0E3424] hover:text-white shadow-xs'
                  : 'bg-[#FAF9F5] border-[#0E3424]/8 text-slate-300 cursor-not-allowed opacity-50'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Sliding on mobile, responsive grid on desktop */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 pt-1 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 scroll-smooth snap-x snap-mandatory md:snap-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
        >
          {LOCATION_AREAS.map((loc) => {
            const matchingProps = SAMPLE_PROPERTIES.filter((p) =>
              p.location.toLowerCase().includes(loc.name.toLowerCase())
            );
            const count = matchingProps.length || loc.propertyCount;
            const minETB = matchingProps.length > 0
              ? Math.min(...matchingProps.map((p) => p.pricePerNightETB))
              : 8500;

            return (
              <div
                key={loc.id}
                onClick={() => onSelectLocation(loc.name)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 min-h-[300px] sm:min-h-[340px] w-[84vw] max-w-[360px] sm:w-[360px] md:w-auto shrink-0 md:shrink snap-start flex flex-col justify-between p-6"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle brand green & dark overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E3424]/95 via-[#0E3424]/55 to-[#164230]/30 transition-opacity duration-300 group-hover:opacity-90" />
                </div>

                {/* Top Location Meta */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-wide">
                    <MapPin className="w-3 h-3 text-[#A5D6A7]" />
                    <span>{loc.city}</span>
                  </div>

                  <span className="text-[11.5px] text-[#E1EDE5] font-medium bg-black/30 px-2 py-0.5 rounded backdrop-blur-xs">
                    {count} Stays
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 pt-8">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[#A5D6A7] text-[11px] font-semibold tracking-wider uppercase">
                      {loc.tagline}
                    </span>
                    <span className="text-[11px] font-medium text-white/90">
                      From {minETB.toLocaleString()} Br/nt
                    </span>
                  </div>
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-1.5 transition-transform duration-200 group-hover:translate-x-1">
                    {loc.name}
                  </h3>
                  <p className="text-xs text-[#E1EDE5] font-light leading-relaxed mb-4 line-clamp-2">
                    {loc.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-white/15">
                    <span className="text-xs font-semibold text-white group-hover:text-[#A5D6A7] transition-colors flex items-center gap-1.5">
                      <span>Explore {loc.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                    <span className="text-[10.5px] text-[#CDE8D5]">
                      {loc.highlights[0]}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
