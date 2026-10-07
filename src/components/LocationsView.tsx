import React from 'react';
import { LOCATION_AREAS, SAMPLE_PROPERTIES, Property } from '../data/properties';
import { MapPin, ArrowRight, CheckCircle2, Building, Sparkles } from 'lucide-react';

interface LocationsViewProps {
  onSelectProperty?: (property: Property) => void;
  onInquireProperty?: (property: Property) => void;
  onFilterByLocation: (locationName: string) => void;
}

export const LocationsView: React.FC<LocationsViewProps> = ({
  onFilterByLocation
}) => {
  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4E9B58] mb-2">
            Prime Neighborhoods
          </div>
          <h1 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#0E3424] tracking-tight">
            Stay Where You Need To Be
          </h1>
          <p className="text-sm sm:text-base text-[#526058] mt-2 font-light leading-relaxed">
            Garden Properties maintains a curated network of furnished guest houses and residences across Addis Ababa's most desirable, secure, and accessible districts.
          </p>
        </div>

        {/* Location Cards (One clean card image & details button per location with price in Birr) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {LOCATION_AREAS.map((loc) => {
            const matchingProperties = SAMPLE_PROPERTIES.filter((p) =>
              p.location.toLowerCase().includes(loc.name.toLowerCase())
            );
            const propertyCount = matchingProperties.length || loc.propertyCount;
            
            // Find lowest night price in Birr for this area
            const minPriceETB = matchingProperties.length > 0
              ? Math.min(...matchingProperties.map(p => p.pricePerNightETB))
              : 8500;

            return (
              <div
                key={loc.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#0E3424]/10 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Single Location Card Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE8E0]">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10 pointer-events-none" />

                  {/* City & Country Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-[#A5D6A7]" />
                    <span>{loc.city}</span>
                  </div>

                  {/* Count Tag */}
                  <div className="absolute top-3.5 right-3.5 z-10 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#0E3424] text-xs font-semibold shadow-xs">
                    {propertyCount} Stays Available
                  </div>

                  {/* Title & Starting Price Overlay */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <div className="text-[11px] font-semibold tracking-wider uppercase text-[#A5D6A7] mb-0.5">
                      {loc.tagline}
                    </div>
                    <div className="flex items-baseline justify-between">
                      <h2 className="font-serif-display text-2xl font-bold">
                        {loc.name}
                      </h2>
                      <div className="text-right">
                        <span className="text-xs text-[#D8E6DC] font-normal">From </span>
                        <span className="font-serif-display text-lg font-semibold text-white">
                          {minPriceETB.toLocaleString()} Br
                        </span>
                        <span className="text-[10.5px] text-[#D8E6DC]">/night</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Details & Button */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <p className="text-xs sm:text-[13px] text-[#4E5B53] leading-relaxed font-light">
                      {loc.description}
                    </p>

                    {/* Area Highlights */}
                    <div className="space-y-1.5 pt-2 border-t border-[#0E3424]/8">
                      {loc.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#2E7D32]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4E9B58] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Single Clean Details Action Button */}
                  <div className="pt-4 border-t border-[#0E3424]/8">
                    <button
                      onClick={() => onFilterByLocation(loc.name)}
                      className="w-full py-3 px-4 bg-[#0E3424] hover:bg-[#164230] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-[0.98] group-hover:bg-[#164230]"
                    >
                      <span>Explore {loc.name} Stays</span>
                      <ArrowRight className="w-4 h-4 text-[#72B765] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
