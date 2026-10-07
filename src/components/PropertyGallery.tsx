import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/properties';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';

interface PropertyGalleryProps {
  onOpenInquiry?: () => void;
  onExploreProperties?: () => void;
}

export const PropertyGallery: React.FC<PropertyGalleryProps> = ({
  onOpenInquiry,
  onExploreProperties
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Living Rooms', 'Bedrooms', 'Kitchens', 'Balconies & Gardens', 'Bathrooms', 'Dining Areas'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4E9B58] mb-2">
              Visual Tour & Architecture
            </div>
            <h1 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#0E3424] tracking-tight">
              A Look Inside Our Spaces
            </h1>
            <p className="text-sm sm:text-base text-[#4F5D54] mt-2 font-light leading-relaxed">
              Explore the craftsmanship, interior aesthetics, and natural sunlight across our furnished apartments, guest houses, and private garden estates.
            </p>
          </div>

          {/* Interactive Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F0EEE6] rounded-xl border border-[#0E3424]/8 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#0E3424] text-white font-semibold shadow-xs'
                    : 'text-[#526058] hover:text-[#0E3424]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[260px]">
          {filteredItems.map((item, index) => {
            const isSpan2Col = index % 5 === 0 || index % 5 === 3;
            const isSpan2Row = index % 4 === 1;

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#E9E6DC] border border-[#0E3424]/8 shadow-2xs hover:shadow-md transition-all duration-300 ${
                  isSpan2Col ? 'sm:col-span-2' : 'col-span-1'
                } ${isSpan2Row ? 'sm:row-span-2' : 'row-span-1'}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Scrim Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white" />

                {/* Category Pill Tag (top) */}
                <div className="absolute top-3 left-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-medium text-[#E1EDE5]">
                    {item.category}
                  </span>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Caption on Hover */}
                <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                  <h4 className="font-serif-display text-lg sm:text-xl font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#CDE8D5] mt-0.5">
                    {item.property}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Bottom Action Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0E3424] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold">
              Like what you see?
            </h3>
            <p className="text-xs sm:text-sm text-[#CDE8D5] font-light mt-1 max-w-xl">
              All properties are fully furnished, sanitized, and ready for immediate short or extended stays.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {onExploreProperties && (
              <button
                onClick={onExploreProperties}
                className="px-5 py-3 bg-[#4E9B58] hover:bg-[#58A55C] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-xs cursor-pointer active:scale-[0.98]"
              >
                Browse Properties
              </button>
            )}
            {onOpenInquiry && (
              <button
                onClick={onOpenInquiry}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-xl border border-white/20 transition-all cursor-pointer active:scale-[0.98]"
              >
                Inquire Directly
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevLightbox}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextLightbox}
            aria-label="Next Image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="font-serif-display text-xl sm:text-2xl font-semibold">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A5D6A7] mt-1">
                {filteredItems[lightboxIndex].category} · {filteredItems[lightboxIndex].property}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

