import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Instagram, MapPin, Send, CheckCircle2, Clock, Shield } from 'lucide-react';
import { SAMPLE_PROPERTIES, LOCATION_AREAS } from '../data/properties';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredLocation, setPreferredLocation] = useState('Bole, Addis Ababa');
  const [preferredProperty, setPreferredProperty] = useState(SAMPLE_PROPERTIES[0]?.id || '');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getWhatsAppMessageUrl = () => {
    const selectedProp = SAMPLE_PROPERTIES.find((p) => p.id === preferredProperty);
    const body = `Hello Garden Properties!\nName: ${name || 'Guest'}\nContact: ${phone || 'Not provided'}\nPreferred Area: ${preferredLocation}\nSelected Property: ${selectedProp?.name || 'General Inquiry'}\nMessage: ${message || 'I would like to inquire about availability.'}`;
    return `https://wa.me/251975381714?text=${encodeURIComponent(body)}`;
  };

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4E9B58] mb-2">
            Get in Touch
          </div>
          <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0E3424] tracking-tight">
            Let’s Find Your Stay.
          </h1>
          <p className="text-sm sm:text-base text-[#4E5B53] mt-2 font-light leading-relaxed">
            Whether you are planning a short business trip, a diplomatic assignment, or an extended visit, our hospitality team is here to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-[#0E3424] text-white shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#4E9B58] text-white">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-display text-xl font-semibold">WhatsApp Concierge</h3>
                  <p className="text-xs text-[#A5D6A7]">Direct booking support: 0975 381 714</p>
                </div>
              </div>
              <p className="text-xs text-[#D4E4DA] font-light leading-relaxed mb-4">
                Chat directly with our property booking coordinator for immediate availability, pricing, and video tours.
              </p>
              <a
                href="https://wa.me/251975381714?text=Hello%20Garden%20Properties%2C%20I%20would%20like%20to%20inquire%20about%20a%20stay."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-[#4E9B58] hover:bg-[#58A55C] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-xs"
              >
                <span>Chat on WhatsApp (+251 975 381 714)</span>
              </a>
            </div>

            {/* Other Channels */}
            <div className="bg-white rounded-2xl p-6 border border-[#0E3424]/10 shadow-xs space-y-5">
              <h3 className="font-serif-display text-xl font-semibold text-[#0E3424]">
                Contact Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#4E9B58] shrink-0 mt-1" />
                  <div>
                    <div className="text-[11px] uppercase font-semibold text-[#6D7D73]">Phone / Voice Call</div>
                    <a href="tel:+251975381714" className="font-medium text-[#0E3424] hover:text-[#4E9B58]">
                      +251 975 381 714 (0975 381 714)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Instagram className="w-4 h-4 text-[#4E9B58] shrink-0 mt-1" />
                  <div>
                    <div className="text-[11px] uppercase font-semibold text-[#6D7D73]">Instagram Official</div>
                    <a href="https://www.instagram.com/garden_properties/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#0E3424] hover:text-[#4E9B58]">
                      @garden_properties
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#4E9B58] fill-current shrink-0 mt-1" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43c.79-.81 1.25-1.91 1.28-3.06V8.71a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.32-.14z" />
                  </svg>
                  <div>
                    <div className="text-[11px] uppercase font-semibold text-[#6D7D73]">TikTok</div>
                    <a href="https://www.tiktok.com/@garden.properties" target="_blank" rel="noopener noreferrer" className="font-medium text-[#0E3424] hover:text-[#4E9B58]">
                      @garden.properties
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#4E9B58] shrink-0 mt-1" />
                  <div>
                    <div className="text-[11px] uppercase font-semibold text-[#6D7D73]">Main Hospitality Office</div>
                    <span className="font-medium text-[#0E3424]">
                      Addis Ababa, Ethiopia
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#0E3424]/8 flex items-center gap-2 text-xs text-[#526058]">
                <Clock className="w-3.5 h-3.5 text-[#4E9B58]" />
                <span>Guest Services & Concierge: 8:00 AM – 8:00 PM (EAT) Daily</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-[#0E3424]/10 shadow-sm">
              <h2 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#0E3424] mb-2">
                Send an Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-[#5C6A61] font-light mb-6">
                Fill out the form below and we will get back to you with rates and availability within a few hours.
              </p>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#4E9B58]/15 text-[#2E7D32] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif-display text-2xl font-semibold text-[#0E3424]">
                    Thank You, {name || 'Valued Guest'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4E5B53] max-w-md mx-auto">
                    Your inquiry has been submitted. Our property manager will contact you promptly via phone or WhatsApp.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppMessageUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-[#4E9B58] text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-xs"
                    >
                      Continue on WhatsApp
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-3 bg-[#FAF9F5] border border-[#0E3424]/15 text-[#0E3424] text-xs font-semibold uppercase tracking-wider rounded-xl"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0E3424] uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kiruvel Bekele"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 bg-[#FAF9F5] rounded-xl border border-[#0E3424]/15 text-sm text-[#1C2420] focus:border-[#4E9B58] focus:outline-none"
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
                        className="w-full p-3 bg-[#FAF9F5] rounded-xl border border-[#0E3424]/15 text-sm text-[#1C2420] focus:border-[#4E9B58] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0E3424] uppercase tracking-wider mb-1.5">
                        Preferred Location
                      </label>
                      <select
                        value={preferredLocation}
                        onChange={(e) => setPreferredLocation(e.target.value)}
                        className="w-full p-3 bg-[#FAF9F5] rounded-xl border border-[#0E3424]/15 text-sm text-[#1C2420] focus:border-[#4E9B58] focus:outline-none cursor-pointer"
                      >
                        <option value="All Areas">All Areas</option>
                        {LOCATION_AREAS.map((loc) => (
                          <option key={loc.id} value={`${loc.name}, Addis Ababa`}>
                            {loc.name}, Addis Ababa
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0E3424] uppercase tracking-wider mb-1.5">
                        Preferred Property (Optional)
                      </label>
                      <select
                        value={preferredProperty}
                        onChange={(e) => setPreferredProperty(e.target.value)}
                        className="w-full p-3 bg-[#FAF9F5] rounded-xl border border-[#0E3424]/15 text-sm text-[#1C2420] focus:border-[#4E9B58] focus:outline-none cursor-pointer"
                      >
                        <option value="">Any Suitable Property</option>
                        {SAMPLE_PROPERTIES.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name} ({p.bedrooms} Bed)
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0E3424] uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 bg-[#FAF9F5] rounded-xl border border-[#0E3424]/15 text-sm text-[#1C2420] focus:border-[#4E9B58] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0E3424] uppercase tracking-wider mb-1.5">
                      Message / Stay Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please mention your expected arrival dates, number of guests, or any specific requests..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-3 bg-[#FAF9F5] rounded-xl border border-[#0E3424]/15 text-sm text-[#1C2420] focus:border-[#4E9B58] focus:outline-none"
                    />
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#0E3424] hover:bg-[#164230] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]"
                    >
                      <Send className="w-4 h-4 text-[#72B765]" />
                      <span>Send Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
