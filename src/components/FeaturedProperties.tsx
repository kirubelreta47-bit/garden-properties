import React, { useState, useRef, useEffect } from 'react';
import { Property, SAMPLE_PROPERTIES } from '../data/properties';
import { PropertyCard } from './PropertyCard';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface FeaturedPropertiesProps {
  onSelectProperty: (property: Property) => void;
  onInquireProperty: (property: Property) => void;
  onViewAll: () => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  onSelectProperty,
  onInquireProperty,
  onViewAll
}) => {
  const [priceMode, setPriceMode] = useState<'night' | 'month'>('night');
  const [currency, setCurrency] = useState<'ETB' | 'USD'>('ETB');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const propertiesList = SAMPLE_PROPERTIES;

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      const itemWidth = clientWidth > 640 ? 380 : 300;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveSlideIndex(Math.min(Math.max(index, 0), propertiesList.length - 1));
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollButtons, { passive: true });
      updateScrollButtons();
      return () => el.removeEventListener('scroll', updateScrollButtons);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth > 768 ? 420 : 310;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.clientWidth > 768 ? 420 : 310;
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4E9B58] mb-2 hover:text-[#0E3424] transition-colors cursor-default inline-block">
              Curated Portfolio
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E3424] tracking-tight hover:text-[#164230] transition-colors">
              Featured Properties
            </h2>
            <p className="text-sm sm:text-base text-[#4F5D54] mt-2 font-light">
              Swipe horizontally to explore our furnished guest houses and residences.
            </p>
          </div>

          {/* Currency + Pricing Switcher + Navigation Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap self-start md:self-auto">
            {/* Currency Toggle */}
            <div className="flex items-center p-1 bg-[#F0EEE6] rounded-xl border border-[#0E3424]/10">
              <button
                onClick={() => setCurrency('ETB')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  currency === 'ETB'
                    ? 'bg-[#0E3424] text-white shadow-xs font-semibold'
                    : 'text-[#5C6A61] hover:text-[#0E3424]'
                }`}
              >
                Birr (ETB)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-[#0E3424] text-white shadow-xs font-semibold'
                    : 'text-[#5C6A61] hover:text-[#0E3424]'
                }`}
              >
                USD ($)
              </button>
            </div>

            {/* Segmented Duration Button */}
            <div className="flex items-center p-1 bg-[#F0EEE6] rounded-xl border border-[#0E3424]/10">
              <button
                onClick={() => setPriceMode('night')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  priceMode === 'night'
                    ? 'bg-white text-[#0E3424] shadow-xs font-semibold'
                    : 'text-[#5C6A61] hover:text-[#0E3424]'
                }`}
              >
                Per Night
              </button>
              <button
                onClick={() => setPriceMode('month')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  priceMode === 'month'
                    ? 'bg-white text-[#0E3424] shadow-xs font-semibold'
                    : 'text-[#5C6A61] hover:text-[#0E3424]'
                }`}
              >
                Monthly
              </button>
            </div>

            {/* Carousel Arrow Controls (Mobile only) */}
            <div className="flex md:hidden items-center gap-1.5">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Slide left"
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  canScrollLeft
                    ? 'bg-white border-[#0E3424]/15 text-[#0E3424] hover:bg-[#0E3424] hover:text-white shadow-xs'
                    : 'bg-[#FAF9F5] border-[#0E3424]/8 text-slate-300 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Slide right"
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  canScrollRight
                    ? 'bg-white border-[#0E3424]/15 text-[#0E3424] hover:bg-[#0E3424] hover:text-white shadow-xs'
                    : 'bg-[#FAF9F5] border-[#0E3424]/8 text-slate-300 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#0E3424] hover:text-[#4E9B58] transition-colors cursor-pointer py-1 ml-0.5"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Horizontal sliding on mobile, full grid on desktop/tablets */}
        <div
          ref={scrollContainerRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 overflow-x-auto md:overflow-visible pb-6 md:pb-0 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 scroll-smooth snap-x snap-mandatory md:snap-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
        >
          {propertiesList.map((property) => (
            <div
              key={property.id}
              className="w-[84vw] max-w-[370px] sm:w-[380px] md:w-auto shrink-0 md:shrink snap-start transition-transform duration-300"
            >
              <PropertyCard
                property={property}
                onSelect={onSelectProperty}
                onInquire={onInquireProperty}
                priceMode={priceMode}
                currency={currency}
              />
            </div>
          ))}
        </div>

        {/* Slider Indicator Dots (Mobile Only) */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mt-2">
          {propertiesList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeSlideIndex
                  ? 'w-6 bg-[#0E3424]'
                  : 'w-1.5 bg-[#0E3424]/20 hover:bg-[#0E3424]/40'
              }`}
            />
          ))}
        </div>

        {/* Demo Notice */}
        <div className="mt-8 p-3.5 rounded-xl bg-[#EAE7DC]/60 border border-[#0E3424]/8 text-center max-w-xl mx-auto">
          <p className="text-xs text-[#526058] leading-relaxed">
            <span className="font-semibold text-[#0E3424]">Visual Concept:</span> Slide to explore sample furnished homes with rates shown in Ethiopian Birr (ETB) and USD.
          </p>
        </div>
      </div>
    </section>
  );
};
