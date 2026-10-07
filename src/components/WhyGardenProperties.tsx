import React from 'react';
import { Sofa, ShieldCheck, MapPin, KeyRound, Sparkles } from 'lucide-react';

export const WhyGardenProperties: React.FC = () => {
  const features = [
    {
      icon: Sofa,
      title: 'Fully Furnished',
      description: 'Everything you need for a comfortable stay.',
      details: 'From high-speed fiber internet and smart TVs to chef-equipped kitchens, plush bedding, and in-unit laundry.'
    },
    {
      icon: ShieldCheck,
      title: 'Thoughtfully Selected',
      description: 'Properties chosen with comfort, quality and location in mind.',
      details: 'Each residence is vetted for natural lighting, dependable backup utilities, soundproofing, and peaceful surroundings.'
    },
    {
      icon: MapPin,
      title: 'Multiple Locations',
      description: 'Find a stay wherever your plans take you.',
      details: 'Prime options across diplomatic hubs, commercial business centers, and quiet residential garden enclaves.'
    },
    {
      icon: KeyRound,
      title: 'Ready for You',
      description: 'Walk into a space prepared to feel like home.',
      details: 'Seamless keyless check-in, pristine hotel-grade cleaning, fresh linen service, and responsive local guest support.'
    }
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4E9B58] mb-2">
            The Garden Standard
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E3424] tracking-tight">
            More Than a Place to Stay.
          </h2>
          <p className="text-sm sm:text-base text-[#4F5D54] mt-3 font-light leading-relaxed">
            We bridge the gap between impersonal hotel rooms and unpredictable rentals by creating calm, fully equipped homes.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-[#0E3424]/8 hover:border-[#4E9B58]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Refined Minimal Line Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-[#FAF9F5] border border-[#0E3424]/10 flex items-center justify-center text-[#235E43] mb-6 shadow-2xs">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>

                  <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#0E3424] mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm font-medium text-[#2E7D32] mb-3">
                    {feature.description}
                  </p>

                  <p className="text-xs text-[#5C6A61] leading-relaxed font-light">
                    {feature.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0E3424]/6 flex items-center justify-between text-[11px] font-semibold text-[#8B9890]">
                  <span>0{index + 1}</span>
                  <span className="w-8 h-[1px] bg-[#0E3424]/10" />
                  <span className="uppercase tracking-wider">Hospitality</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
