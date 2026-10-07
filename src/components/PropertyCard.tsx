import React, { useState } from 'react';
import { Bed, Bath, Users, MapPin, ArrowUpRight, Sparkles, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
  onInquire: (property: Property) => void;
  priceMode?: 'night' | 'month';
  currency?: 'ETB' | 'USD';
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onSelect,
  onInquire,
  priceMode = 'night',
  currency = 'ETB'
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  // Price calculation based on currency and mode
  const isETB = currency === 'ETB';
  const numericPrice = isETB
    ? (priceMode === 'night' ? property.pricePerNightETB : property.pricePerMonthETB)
    : (priceMode === 'night' ? property.pricePerNightUSD : property.pricePerMonthUSD);

  const formattedPrice = isETB
    ? `${numericPrice.toLocaleString()} Br`
    : `$${numericPrice.toLocaleString()}`;

  const priceUnit = priceMode === 'night' ? '/ night' : '/ month';

  return (
    <div
      onClick={() => onSelect(property)}
      className="group bg-white rounded-2xl overflow-hidden border border-[#0E3424]/8 hover:border-[#4E9B58]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Property Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE8E0]">
        <img
          src={property.images[currentImageIndex] || property.heroImage}
          alt={property.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Subtle Gradient Scrim for Top Tag */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Demo Property Disclaimer Tag */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-md text-[10.5px] font-medium text-[#D8E6DC] tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-[#72B765]" />
          <span>Demo Concept</span>
        </div>

        {/* Property Type tag */}
        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-md text-[11px] font-semibold text-[#0E3424] tracking-wide shadow-xs">
          {property.propertyType}
        </div>

        {/* Image navigation controls if multiple images */}
        {property.images.length > 1 && (
          <div className="absolute inset-x-2 bottom-3 z-10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1">
              {property.images.slice(0, 5).map((_, idx) => (
                <span
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === currentImageIndex ? 'bg-white w-3' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Bottom Image Overlay: Price in Birr / USD */}
        <div className="absolute bottom-3 left-3 z-10 text-white">
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif-display text-2xl font-semibold leading-none drop-shadow-xs">
              {formattedPrice}
            </span>
            <span className="text-xs text-[#D8E6DC] font-normal">{priceUnit}</span>
          </div>
        </div>
      </div>

      {/* Property Details Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Location & Title */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-[#4E9B58] mb-1">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>{property.location}</span>
          </div>

          <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#0E3424] group-hover:text-[#235E43] transition-colors leading-snug mb-2">
            {property.name}
          </h3>

          <p className="text-xs sm:text-[13px] text-[#4A554F] line-clamp-2 leading-relaxed mb-4">
            {property.description}
          </p>

          {/* Zero-Pill Typography Metadata Specification */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#526058] font-medium pt-2 border-t border-[#0E3424]/8">
            <span className="inline-flex items-center gap-1">
              <Bed className="w-3.5 h-3.5 text-[#3E6B52]" />
              <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}</span>
            </span>
            <span aria-hidden="true" className="text-[#A4B3A8]">·</span>
            <span className="inline-flex items-center gap-1">
              <Bath className="w-3.5 h-3.5 text-[#3E6B52]" />
              <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}</span>
            </span>
            <span aria-hidden="true" className="text-[#A4B3A8]">·</span>
            <span className="text-[#2D6B4F] font-semibold">
              Fully Furnished
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 pt-4 border-t border-[#0E3424]/8 flex items-center justify-between gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onInquire(property);
            }}
            className="text-xs font-semibold text-[#0E3424] hover:text-[#4E9B58] transition-colors flex items-center gap-1 cursor-pointer py-1"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#4E9B58]" />
            <span>Inquire</span>
          </button>

          <button
            onClick={() => onSelect(property)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0E3424] hover:bg-[#164230] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
          >
            <span>View Property</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
