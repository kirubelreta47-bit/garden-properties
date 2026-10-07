import React, { useState } from 'react';
import { Property } from '../data/properties';
import {
  X,
  MapPin,
  Bed,
  Bath,
  Users,
  Maximize2,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Phone,
  Shield,
  Wifi,
  Tv,
  Utensils,
  Droplets,
  WashingMachine,
  ParkingCircle,
  Laptop,
  Zap,
  ChevronLeft,
  ChevronRight,
  Share2,
  Heart
} from 'lucide-react';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onInquire: (property: Property, initialDetails?: { checkIn?: string; checkOut?: string; guests?: number }) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onInquire
}) => {
  if (!property) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [currency, setCurrency] = useState<'ETB' | 'USD'>('ETB');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guestCount, setGuestCount] = useState(2);
  const [isCopied, setIsCopied] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  // Icon mapping for amenities
  const getAmenityIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('wi-fi') || lower.includes('internet')) return Wifi;
    if (lower.includes('kitchen') || lower.includes('cookware')) return Utensils;
    if (lower.includes('tv') || lower.includes('netflix') || lower.includes('soundbar')) return Tv;
    if (lower.includes('hot water')) return Droplets;
    if (lower.includes('wash') || lower.includes('laundry')) return WashingMachine;
    if (lower.includes('park')) return ParkingCircle;
    if (lower.includes('work') || lower.includes('desk')) return Laptop;
    if (lower.includes('power') || lower.includes('generator')) return Zap;
    if (lower.includes('security')) return Shield;
    return CheckCircle2;
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Garden Properties! I am interested in inquiring about ${property.name} (${property.location}).\nDates: ${checkInDate || 'Flexible'} to ${checkOutDate || 'Flexible'}\nGuests: ${guestCount}`
    );
    return `https://wa.me/251975381714?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm overflow-y-auto flex justify-center p-2 sm:p-4 lg:p-6 animate-in fade-in duration-200">
      <div className="relative bg-[#FAF9F5] w-full max-w-5xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto border border-[#0E3424]/15">
        {/* Top Header Bar */}
        <div className="sticky top-0 z-30 bg-[#FAF9F5]/95 backdrop-blur-md px-5 sm:px-8 py-4 border-b border-[#0E3424]/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-[#0E3424] text-white text-[11px] font-semibold tracking-wider uppercase">
              {property.propertyType}
            </span>
            <span className="text-xs text-[#5C6A61] hidden sm:inline">
              · {property.location}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              aria-label="Save Property"
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                isFavorited
                  ? 'bg-rose-50 border-rose-200 text-rose-600'
                  : 'bg-white border-[#0E3424]/10 text-[#5C6A61] hover:text-[#0E3424]'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={handleShare}
              aria-label="Share Property"
              className="p-2 rounded-lg bg-white border border-[#0E3424]/10 text-[#5C6A61] hover:text-[#0E3424] transition-colors cursor-pointer relative"
            >
              <Share2 className="w-4 h-4" />
              {isCopied && (
                <span className="absolute -bottom-8 right-0 bg-[#0E3424] text-white text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap">
                  Link Copied!
                </span>
              )}
            </button>

            <button
              onClick={onClose}
              aria-label="Close"
              className="p-2 rounded-lg bg-[#0E3424] hover:bg-[#164230] text-white transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-8 space-y-8 sm:space-y-10">
          {/* Gallery Showcase */}
          <div>
            {/* Main Stage Image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#E9E6DC] shadow-xs mb-3">
              <img
                src={property.images[activeImageIndex] || property.heroImage}
                alt={property.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-300"
              />

              {/* Prev / Next controls */}
              {property.images.length > 1 && (
                <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex items-center justify-between">
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === 0 ? property.images.length - 1 : prev - 1
                      )
                    }
                    className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        (prev + 1) % property.images.length
                      )
                    }
                    className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Image index counter */}
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-xs font-medium">
                {activeImageIndex + 1} / {property.images.length}
              </div>
            </div>

            {/* Thumbnail Row */}
            {property.images.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-3">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      idx === activeImageIndex
                        ? 'border-[#0E3424] ring-2 ring-[#4E9B58]/30 scale-[0.98]'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${property.name} ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Main Details and Booking Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Column: Specs, About, Amenities, Location */}
            <div className="lg:col-span-7 space-y-8">
              {/* Title & Key Specs */}
              <div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#4E9B58] mb-1">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{property.location}</span>
                </div>
                <h1 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#0E3424] mb-2">
                  {property.name}
                </h1>
                <p className="text-sm text-[#526058] font-light italic">
                  {property.tagline}
                </p>

                {/* Specs Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 p-4 rounded-xl bg-[#F2EFE7] border border-[#0E3424]/8 text-[#0E3424]">
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-[#4E9B58]" />
                    <div className="text-xs">
                      <div className="font-semibold">{property.bedrooms} Bedrooms</div>
                      <div className="text-[#6D7D73] text-[10px]">Comfortable Beds</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4 text-[#4E9B58]" />
                    <div className="text-xs">
                      <div className="font-semibold">{property.bathrooms} Baths</div>
                      <div className="text-[#6D7D73] text-[10px]">Hot Water System</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#4E9B58]" />
                    <div className="text-xs">
                      <div className="font-semibold">{property.maxGuests} Guests</div>
                      <div className="text-[#6D7D73] text-[10px]">Max Occupancy</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4E9B58]" />
                    <div className="text-xs">
                      <div className="font-semibold">Furnished</div>
                      <div className="text-[#6D7D73] text-[10px]">Ready to Move In</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* About This Property */}
              <div className="pt-6 border-t border-[#0E3424]/10">
                <h3 className="font-serif-display text-2xl font-semibold text-[#0E3424] mb-3">
                  About this property
                </h3>
                <p className="text-sm text-[#3A453F] leading-relaxed font-light mb-4">
                  {property.longDescription}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4">
                  {property.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#2E7D32] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4E9B58]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities Grid */}
              <div className="pt-6 border-t border-[#0E3424]/10">
                <h3 className="font-serif-display text-2xl font-semibold text-[#0E3424] mb-4">
                  Amenities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.amenities.map((amenity, index) => {
                    const Icon = getAmenityIcon(amenity);
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#0E3424]/8 text-xs text-[#2C3831]"
                      >
                        <Icon className="w-4 h-4 text-[#2E7D32] shrink-0" />
                        <span className="font-medium">{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* What's Included */}
              <div className="pt-6 border-t border-[#0E3424]/10">
                <h3 className="font-serif-display text-2xl font-semibold text-[#0E3424] mb-3">
                  What's Included in Your Stay
                </h3>
                <ul className="space-y-2.5">
                  {property.whatsIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#3E4A43]">
                      <CheckCircle2 className="w-4 h-4 text-[#4E9B58] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Location & Neighborhood */}
              <div className="pt-6 border-t border-[#0E3424]/10">
                <h3 className="font-serif-display text-2xl font-semibold text-[#0E3424] mb-2">
                  Location & Neighborhood
                </h3>
                <p className="text-xs sm:text-sm text-[#526058] font-light mb-4">
                  Situated in {property.neighborhood}, offering convenient access to dining, shopping, diplomatic missions, and key transit arteries.
                </p>

                {/* Clean Map Graphic Placeholder */}
                <div className="relative h-44 rounded-xl overflow-hidden border border-[#0E3424]/15 bg-[#E6E2D5] flex items-center justify-center p-4">
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#0E3424_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-[#0E3424] text-white shadow-lg mb-2 animate-bounce">
                      <MapPin className="w-5 h-5 text-[#72B765]" />
                    </div>
                    <span className="text-xs font-semibold text-[#0E3424]">
                      {property.name}
                    </span>
                    <span className="text-[11px] text-[#526058]">
                      {property.location}
                    </span>
                  </div>
                </div>

                {/* Nearby Places */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {property.nearbyPlaces.map((place, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-white border border-[#0E3424]/8 text-xs">
                      <div className="font-medium text-[#0E3424]">{place.name}</div>
                      <div className="text-[10.5px] text-[#588157]">{place.distance} · {place.type}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Booking & Direct Inquiry Panel */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 bg-white rounded-2xl p-6 border border-[#0E3424]/12 shadow-lg space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#4E9B58]">
                      Direct Rental Rates
                    </div>
                    {/* Currency toggle */}
                    <div className="flex items-center p-0.5 bg-[#F0EEE6] rounded-lg border border-[#0E3424]/8 text-[11px]">
                      <button
                        onClick={() => setCurrency('ETB')}
                        className={`px-2 py-0.5 rounded-md font-medium transition-colors cursor-pointer ${
                          currency === 'ETB' ? 'bg-[#0E3424] text-white' : 'text-[#5C6A61]'
                        }`}
                      >
                        Birr
                      </button>
                      <button
                        onClick={() => setCurrency('USD')}
                        className={`px-2 py-0.5 rounded-md font-medium transition-colors cursor-pointer ${
                          currency === 'USD' ? 'bg-[#0E3424] text-white' : 'text-[#5C6A61]'
                        }`}
                      >
                        USD
                      </button>
                    </div>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0E3424]">
                        {currency === 'ETB' ? `${property.pricePerNightETB.toLocaleString()} Br` : `$${property.pricePerNightUSD.toLocaleString()}`}
                      </span>
                      <span className="text-xs text-[#526058] ml-1">/ night</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-[#2E7D32]">
                        {currency === 'ETB' ? `${property.pricePerMonthETB.toLocaleString()} Br` : `$${property.pricePerMonthUSD.toLocaleString()}`}
                      </span>
                      <span className="text-[11px] text-[#526058] ml-1">/ month</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#0E3424]/10 space-y-3">
                  <div className="text-xs font-semibold text-[#0E3424] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#4E9B58]" />
                    <span>Select Travel Dates (Optional)</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-[#6E7E74] uppercase font-semibold">Check-in</label>
                      <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="w-full mt-1 p-2 bg-white rounded-lg border border-[#0E3424]/15 text-xs text-[#1A231F] focus:outline-[#4E9B58]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-[#6E7E74] uppercase font-semibold">Check-out</label>
                      <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        className="w-full mt-1 p-2 bg-white rounded-lg border border-[#0E3424]/15 text-xs text-[#1A231F] focus:outline-[#4E9B58]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-[#6E7E74] uppercase font-semibold">Guests</label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full mt-1 p-2 bg-white rounded-lg border border-[#0E3424]/15 text-xs text-[#1A231F] focus:outline-[#4E9B58]"
                    >
                      {Array.from({ length: property.maxGuests }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'} (Max {property.maxGuests})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Primary Action: Open Inquiry Modal */}
                <div className="space-y-2.5">
                  <button
                    onClick={() =>
                      onInquire(property, {
                        checkIn: checkInDate,
                        checkOut: checkOutDate,
                        guests: guestCount
                      })
                    }
                    className="w-full py-3.5 bg-[#0E3424] hover:bg-[#164230] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]"
                  >
                    <span>Send Booking Inquiry</span>
                  </button>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#4E9B58]/12 hover:bg-[#4E9B58]/20 text-[#0E3424] text-xs font-semibold uppercase tracking-wider rounded-xl border border-[#4E9B58]/30 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-[#2E7D32]" />
                    <span>WhatsApp Us Directly</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-[#0E3424]/8 text-center space-y-1 text-xs text-[#6B7B71]">
                  <p className="font-medium text-[#0E3424]">Direct & Personalized Booking</p>
                  <p className="text-[11px] font-light">
                    No hidden booking platform fees. Quick confirmation within hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
