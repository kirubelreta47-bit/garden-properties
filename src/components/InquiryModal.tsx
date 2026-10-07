import React, { useState, useEffect } from 'react';
import { X, MessageSquare, CheckCircle2, Send, Calendar, MapPin, Home, Sparkles } from 'lucide-react';
import { Property, SAMPLE_PROPERTIES, LOCATION_AREAS } from '../data/properties';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProperty?: Property | null;
  initialDetails?: {
    checkIn?: string;
    checkOut?: string;
    guests?: number;
  };
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  selectedProperty,
  initialDetails
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredLocation, setPreferredLocation] = useState(
    selectedProperty?.location || 'Bole, Addis Ababa'
  );
  const [propertyChoice, setPropertyChoice] = useState(
    selectedProperty?.id || (SAMPLE_PROPERTIES[0]?.id ?? '')
  );
  const [checkIn, setCheckIn] = useState(initialDetails?.checkIn || '');
  const [checkOut, setCheckOut] = useState(initialDetails?.checkOut || '');
  const [guests, setGuests] = useState(initialDetails?.guests || 2);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedProperty) {
      setPropertyChoice(selectedProperty.id);
      setPreferredLocation(selectedProperty.location);
    }
  }, [selectedProperty]);

  const chosenPropertyObj = SAMPLE_PROPERTIES.find((p) => p.id === propertyChoice);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getWhatsAppMessageUrl = () => {
    const propertyTitle = chosenPropertyObj?.name || 'Furnished Stay';
    const locationText = chosenPropertyObj?.location || preferredLocation;
    const body = `Hello Garden Properties!\n\nName: ${name || 'Guest'}\nPhone/WhatsApp: ${phone || 'Not provided'}\nProperty: ${propertyTitle} (${locationText})\nDates: ${checkIn || 'Flexible'} to ${checkOut || 'Flexible'}\nGuests: ${guests}\nNotes: ${message || 'Looking for available furnished dates.'}`;
    return `https://wa.me/251975381714?text=${encodeURIComponent(body)}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-[#FAF9F5] w-full max-w-xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-[#0E3424]/15 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#0E3424] text-white flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold text-[#A5D6A7] tracking-[0.2em] uppercase">
              Garden Properties Booking & Inquiry
            </div>
            <h2 className="font-serif-display text-2xl font-semibold text-white mt-0.5">
              Let's Find Your Stay
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-[#4E9B58]/15 text-[#2E7D32] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#0E3424]">
                Inquiry Received
              </h3>
              <p className="text-sm text-[#4E5B53] max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-[#0E3424]">{name || 'Guest'}</span>. Our hospitality team has received your request for{' '}
                <span className="font-semibold text-[#0E3424]">{chosenPropertyObj?.name || 'Garden Properties'}</span>.
              </p>

              <div className="p-4 rounded-xl bg-[#F0EEE6] border border-[#0E3424]/10 text-xs text-left space-y-1.5 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-[#6D7D73]">Location:</span>
                  <span className="font-medium text-[#0E3424]">{chosenPropertyObj?.location || preferredLocation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6D7D73]">Dates:</span>
                  <span className="font-medium text-[#0E3424]">{checkIn || 'Flexible'} — {checkOut || 'Flexible'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6D7D73]">Guests:</span>
                  <span className="font-medium text-[#0E3424]">{guests} Guests</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={getWhatsAppMessageUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4E9B58] hover:bg-[#58A55C] text-white text-xs font-semibold tracking-wider uppercase rounded-xl shadow transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Direct Chat</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-3 bg-[#0E3424] hover:bg-[#164230] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0E3424] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kiruvel Bekele"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2.5 bg-white rounded-xl border border-[#0E3424]/15 text-sm text-[#1C2420] focus:border-[#4E9B58] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0E3424] uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+251 91 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2.5 bg-white rounded-xl border border-[#0E3424]/15 text-sm text-[#1C2420] focus:border-[#4E9B58] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0E3424] uppercase tracking-wider mb-1.5">
                    Preferred Property
                  </label>
                  <select
                    value={propertyChoice}
                    onChange={(e) => setPropertyChoice(e.target.value)}
                    className="w-full p-2.5 bg-white rounded-xl border border-[#0E3424]/15 text-sm text-[#1C2420] focus:border-[#4E9B58] focus:outline-none transition-colors cursor-pointer"
                  >
                    {SAMPLE_PROPERTIES.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.neighborhood})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0E3424] uppercase tracking-wider mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="yourname@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 bg-white rounded-xl border border-[#0E3424]/15 text-sm text-[#1C2420] focus:border-[#4E9B58] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Dates & Guests */}
              <div className="p-3.5 bg-[#F2EFE7] rounded-xl border border-[#0E3424]/8 grid grid-cols-3 gap-2">
                <div>
                  <label className="text-[10px] text-[#5C6A61] uppercase font-semibold">Check-In</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full mt-1 p-1.5 bg-white rounded-lg border border-[#0E3424]/15 text-xs text-[#1C2420]"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-[#5C6A61] uppercase font-semibold">Check-Out</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full mt-1 p-1.5 bg-white rounded-lg border border-[#0E3424]/15 text-xs text-[#1C2420]"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-[#5C6A61] uppercase font-semibold">Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full mt-1 p-1.5 bg-white rounded-lg border border-[#0E3424]/15 text-xs text-[#1C2420]"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={5}>5+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0E3424] uppercase tracking-wider mb-1.5">
                  Message / Special Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your stay duration, work needs, or any questions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2.5 bg-white rounded-xl border border-[#0E3424]/15 text-sm text-[#1C2420] focus:border-[#4E9B58] focus:outline-none transition-colors"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <a
                  href={getWhatsAppMessageUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2E7D32] hover:text-[#1B5E20] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Prefer WhatsApp?</span>
                </a>

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#0E3424] hover:bg-[#164230] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-2 active:scale-[0.98]"
                >
                  <Send className="w-3.5 h-3.5 text-[#72B765]" />
                  <span>Send Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
