import React, { useState, useMemo } from 'react';
import { Property, SAMPLE_PROPERTIES, LOCATION_AREAS } from '../data/properties';
import { PropertyCard } from './PropertyCard';
import { Search, SlidersHorizontal, MapPin, Bed, RotateCcw, Home } from 'lucide-react';

interface PropertiesViewProps {
  initialLocationFilter?: string;
  initialTypeFilter?: string;
  onSelectProperty: (property: Property) => void;
  onInquireProperty: (property: Property) => void;
}

export const PropertiesView: React.FC<PropertiesViewProps> = ({
  initialLocationFilter = 'All',
  initialTypeFilter = 'All',
  onSelectProperty,
  onInquireProperty
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(initialLocationFilter);
  const [selectedType, setSelectedType] = useState(initialTypeFilter);
  const [selectedBedrooms, setSelectedBedrooms] = useState<string>('All');
  const [currency, setCurrency] = useState<'ETB' | 'USD'>('ETB');
  const [priceMode, setPriceMode] = useState<'night' | 'month'>('night');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'bedrooms'>('featured');

  const filteredProperties = useMemo(() => {
    return SAMPLE_PROPERTIES.filter((prop) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = prop.name.toLowerCase().includes(q);
        const matchLoc = prop.location.toLowerCase().includes(q);
        const matchDesc = prop.description.toLowerCase().includes(q);
        if (!matchName && !matchLoc && !matchDesc) return false;
      }

      // Location
      if (selectedLocation !== 'All') {
        if (!prop.location.toLowerCase().includes(selectedLocation.toLowerCase())) {
          return false;
        }
      }

      // Type
      if (selectedType !== 'All') {
        if (prop.propertyType !== selectedType) {
          return false;
        }
      }

      // Bedrooms
      if (selectedBedrooms !== 'All') {
        const count = parseInt(selectedBedrooms, 10);
        if (selectedBedrooms === '3+') {
          if (prop.bedrooms < 3) return false;
        } else if (prop.bedrooms !== count) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') {
        const priceA = currency === 'ETB'
          ? (priceMode === 'night' ? a.pricePerNightETB : a.pricePerMonthETB)
          : (priceMode === 'night' ? a.pricePerNightUSD : a.pricePerMonthUSD);
        const priceB = currency === 'ETB'
          ? (priceMode === 'night' ? b.pricePerNightETB : b.pricePerMonthETB)
          : (priceMode === 'night' ? b.pricePerNightUSD : b.pricePerMonthUSD);
        return priceA - priceB;
      }
      if (sortBy === 'price-desc') {
        const priceA = currency === 'ETB'
          ? (priceMode === 'night' ? a.pricePerNightETB : a.pricePerMonthETB)
          : (priceMode === 'night' ? a.pricePerNightUSD : a.pricePerMonthUSD);
        const priceB = currency === 'ETB'
          ? (priceMode === 'night' ? b.pricePerNightETB : b.pricePerMonthETB)
          : (priceMode === 'night' ? b.pricePerNightUSD : b.pricePerMonthUSD);
        return priceB - priceA;
      }
      if (sortBy === 'bedrooms') {
        return b.bedrooms - a.bedrooms;
      }
      // default: featured first
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchQuery, selectedLocation, selectedType, selectedBedrooms, priceMode, currency, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedLocation('All');
    setSelectedType('All');
    setSelectedBedrooms('All');
    setSortBy('featured');
  };

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4E9B58] mb-2">
            Curated Portfolio
          </div>
          <h1 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#0E3424] tracking-tight">
            Find Your Next Stay
          </h1>
          <p className="text-sm sm:text-base text-[#526058] mt-2 font-light">
            Explore our collection of fully furnished rental properties, guest houses, and executive suites across Addis Ababa.
          </p>
        </div>

        {/* Filter Controls Panel: Ultra-compact horizontal slide on mobile, elegant panel on desktop */}
        <div className="bg-white rounded-2xl p-3.5 sm:p-5 border border-[#0E3424]/10 shadow-xs mb-6 sm:mb-8 space-y-3 sm:space-y-4">
          {/* Search bar & quick toggles */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-stretch sm:items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#4E9B58] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search neighborhood, property name, feature..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 sm:py-2.5 bg-[#FAF9F5] rounded-xl border border-[#0E3424]/10 text-xs sm:text-sm text-[#1A231F] focus:outline-[#4E9B58]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Desktop-only toggles (on mobile they are in the horizontal slide strip below) */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Currency switcher */}
              <div className="inline-flex items-center p-0.5 bg-[#F0EEE6] rounded-xl border border-[#0E3424]/8">
                <button
                  onClick={() => setCurrency('ETB')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    currency === 'ETB'
                      ? 'bg-[#0E3424] text-white shadow-xs font-semibold'
                      : 'text-[#5C6A61]'
                  }`}
                >
                  Birr
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    currency === 'USD'
                      ? 'bg-[#0E3424] text-white shadow-xs font-semibold'
                      : 'text-[#5C6A61]'
                  }`}
                >
                  USD
                </button>
              </div>

              {/* Price display mode */}
              <div className="inline-flex items-center p-0.5 bg-[#F0EEE6] rounded-xl border border-[#0E3424]/8">
                <button
                  onClick={() => setPriceMode('night')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    priceMode === 'night'
                      ? 'bg-white text-[#0E3424] shadow-xs font-semibold'
                      : 'text-[#5C6A61]'
                  }`}
                >
                  Night
                </button>
                <button
                  onClick={() => setPriceMode('month')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    priceMode === 'month'
                      ? 'bg-white text-[#0E3424] shadow-xs font-semibold'
                      : 'text-[#5C6A61]'
                  }`}
                >
                  Month
                </button>
              </div>

              {/* Sort by dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="p-2 bg-[#FAF9F5] rounded-xl border border-[#0E3424]/10 text-xs font-medium text-[#1A231F] cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="bedrooms">Most Bedrooms</option>
              </select>
            </div>
          </div>

          {/* Horizontal Slideable Filter Strip (Swipeable by hand on mobile with touch-pan-x) */}
          <div className="flex items-center gap-2 overflow-x-auto pt-1 pb-1 -mx-1 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x scroll-smooth whitespace-nowrap">
            {/* Mobile Currency & Rate Segmented Pills */}
            <div className="flex sm:hidden items-center gap-1.5 shrink-0">
              <div className="inline-flex items-center p-0.5 bg-[#F0EEE6] rounded-lg border border-[#0E3424]/10">
                <button
                  onClick={() => setCurrency('ETB')}
                  className={`px-2 py-1 text-[11px] font-medium rounded-md transition-colors cursor-pointer ${
                    currency === 'ETB' ? 'bg-[#0E3424] text-white font-semibold' : 'text-[#5C6A61]'
                  }`}
                >
                  Birr
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-2 py-1 text-[11px] font-medium rounded-md transition-colors cursor-pointer ${
                    currency === 'USD' ? 'bg-[#0E3424] text-white font-semibold' : 'text-[#5C6A61]'
                  }`}
                >
                  USD
                </button>
              </div>

              <div className="inline-flex items-center p-0.5 bg-[#F0EEE6] rounded-lg border border-[#0E3424]/10">
                <button
                  onClick={() => setPriceMode('night')}
                  className={`px-2 py-1 text-[11px] font-medium rounded-md transition-colors cursor-pointer ${
                    priceMode === 'night' ? 'bg-white text-[#0E3424] font-semibold' : 'text-[#5C6A61]'
                  }`}
                >
                  Night
                </button>
                <button
                  onClick={() => setPriceMode('month')}
                  className={`px-2 py-1 text-[11px] font-medium rounded-md transition-colors cursor-pointer ${
                    priceMode === 'month' ? 'bg-white text-[#0E3424] font-semibold' : 'text-[#5C6A61]'
                  }`}
                >
                  Month
                </button>
              </div>

              {/* Mobile Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#FAF9F5] px-2.5 py-1 rounded-lg border border-[#0E3424]/10 text-[11px] text-[#0E3424] font-medium cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price ↑</option>
                <option value="price-desc">Price ↓</option>
                <option value="bedrooms">Bedrooms</option>
              </select>
            </div>

            {/* Location selector */}
            <div className="flex items-center gap-1 shrink-0">
              <span className="text-[11px] text-[#6E7E74] hidden sm:inline">Location:</span>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className={`px-2.5 py-1 sm:py-1.5 rounded-lg border text-[11px] sm:text-xs font-medium cursor-pointer transition-colors ${
                  selectedLocation !== 'All'
                    ? 'bg-[#0E3424] text-white border-[#0E3424]'
                    : 'bg-[#FAF9F5] text-[#0E3424] border-[#0E3424]/15'
                }`}
              >
                <option value="All">All Locations</option>
                {LOCATION_AREAS.map((loc) => (
                  <option key={loc.id} value={loc.name}>
                    {loc.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type selector */}
            <div className="flex items-center gap-1 shrink-0">
              <span className="text-[11px] text-[#6E7E74] hidden sm:inline">Type:</span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className={`px-2.5 py-1 sm:py-1.5 rounded-lg border text-[11px] sm:text-xs font-medium cursor-pointer transition-colors ${
                  selectedType !== 'All'
                    ? 'bg-[#0E3424] text-white border-[#0E3424]'
                    : 'bg-[#FAF9F5] text-[#0E3424] border-[#0E3424]/15'
                }`}
              >
                <option value="All">All Property Types</option>
                <option value="Furnished Apartment">Furnished Apartment</option>
                <option value="Guest House">Guest House</option>
                <option value="Executive Suite">Executive Suite</option>
                <option value="Garden Villa">Garden Villa</option>
              </select>
            </div>

            {/* Bedrooms selector */}
            <div className="flex items-center gap-1 shrink-0">
              <span className="text-[11px] text-[#6E7E74] hidden sm:inline">Bedrooms:</span>
              <select
                value={selectedBedrooms}
                onChange={(e) => setSelectedBedrooms(e.target.value)}
                className={`px-2.5 py-1 sm:py-1.5 rounded-lg border text-[11px] sm:text-xs font-medium cursor-pointer transition-colors ${
                  selectedBedrooms !== 'All'
                    ? 'bg-[#0E3424] text-white border-[#0E3424]'
                    : 'bg-[#FAF9F5] text-[#0E3424] border-[#0E3424]/15'
                }`}
              >
                <option value="All">Any Bedrooms</option>
                <option value="1">1 Bed</option>
                <option value="2">2 Beds</option>
                <option value="3+">3+ Beds</option>
              </select>
            </div>

            {/* Reset Filters Pill (visible if any filter active) */}
            {(selectedLocation !== 'All' || selectedType !== 'All' || selectedBedrooms !== 'All' || searchQuery) && (
              <button
                onClick={handleResetFilters}
                className="px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-[11px] font-medium hover:bg-rose-100 transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}

            {/* Active Stays Count Pill on Mobile */}
            <span className="text-[11px] text-[#526058] bg-[#FAF9F5] px-2.5 py-1 rounded-lg border border-[#0E3424]/10 shrink-0">
              {filteredProperties.length} {filteredProperties.length === 1 ? 'stay' : 'stays'}
            </span>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={onSelectProperty}
                onInquire={onInquireProperty}
                priceMode={priceMode}
                currency={currency}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-white rounded-2xl border border-[#0E3424]/10">
            <h3 className="font-serif-display text-2xl text-[#0E3424] mb-2">
              No matching properties found
            </h3>
            <p className="text-xs sm:text-sm text-[#5C6A61] mb-6">
              Try adjusting your location, bedroom count, or search keyword.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 bg-[#0E3424] text-white text-xs font-semibold uppercase tracking-wider rounded-xl cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
