import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProperties } from './components/FeaturedProperties';
import { ExploreLocations } from './components/ExploreLocations';
import { PropertyGallery } from './components/PropertyGallery';
import { InquiryCTA } from './components/InquiryCTA';
import { Footer } from './components/Footer';
import { PropertiesView } from './components/PropertiesView';
import { LocationsView } from './components/LocationsView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { InquiryModal } from './components/InquiryModal';
import { Property, SAMPLE_PROPERTIES } from './data/properties';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'properties' | 'locations' | 'tour' | 'about' | 'contact'>('home');
  const [selectedPropertyForDetail, setSelectedPropertyForDetail] = useState<Property | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [inquiryTargetProperty, setInquiryTargetProperty] = useState<Property | null>(null);
  const [inquiryInitialDetails, setInquiryInitialDetails] = useState<{ checkIn?: string; checkOut?: string; guests?: number } | undefined>();

  // Filter state for properties view
  const [locationFilter, setLocationFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  const handleNavigate = (view: string) => {
    setCurrentView(view as any);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeroExplore = () => {
    setCurrentView('properties');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLocation = (locationName: string) => {
    setLocationFilter(locationName);
    setCurrentView('properties');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPropertyDetail = (property: Property) => {
    setSelectedPropertyForDetail(property);
  };

  const handleClosePropertyDetail = () => {
    setSelectedPropertyForDetail(null);
  };

  const handleOpenInquiry = (
    property?: Property | string,
    initialDetails?: { checkIn?: string; checkOut?: string; guests?: number }
  ) => {
    if (typeof property === 'string') {
      const found = SAMPLE_PROPERTIES.find((p) => p.id === property);
      setInquiryTargetProperty(found || null);
    } else if (property) {
      setInquiryTargetProperty(property);
    } else {
      setInquiryTargetProperty(null);
    }

    setInquiryInitialDetails(initialDetails);
    setIsInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryModalOpen(false);
    setInquiryTargetProperty(null);
    setInquiryInitialDetails(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1A231F]">
      {/* Top Sticky Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <Hero
              onExplore={handleHeroExplore}
            />

            <FeaturedProperties
              onSelectProperty={handleOpenPropertyDetail}
              onInquireProperty={(p) => handleOpenInquiry(p)}
              onViewAll={() => handleNavigate('properties')}
            />

            <ExploreLocations
              onSelectLocation={handleSelectLocation}
            />

            <InquiryCTA
              onExplore={() => handleNavigate('properties')}
              onContact={() => handleNavigate('contact')}
              onOpenInquiry={() => handleOpenInquiry()}
            />
          </>
        )}

        {currentView === 'properties' && (
          <PropertiesView
            initialLocationFilter={locationFilter}
            initialTypeFilter={typeFilter}
            onSelectProperty={handleOpenPropertyDetail}
            onInquireProperty={(p) => handleOpenInquiry(p)}
          />
        )}

        {currentView === 'locations' && (
          <LocationsView
            onSelectProperty={handleOpenPropertyDetail}
            onInquireProperty={(p) => handleOpenInquiry(p)}
            onFilterByLocation={handleSelectLocation}
          />
        )}

        {currentView === 'tour' && (
          <PropertyGallery
            onOpenInquiry={() => handleOpenInquiry()}
            onExploreProperties={() => handleNavigate('properties')}
          />
        )}

        {currentView === 'about' && (
          <AboutView
            onExplore={() => handleNavigate('properties')}
            onContact={() => handleNavigate('contact')}
          />
        )}

        {currentView === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectLocation={handleSelectLocation}
      />

      {/* Property Detail Modal */}
      <PropertyDetailModal
        property={selectedPropertyForDetail}
        onClose={handleClosePropertyDetail}
        onInquire={(property, details) => {
          setSelectedPropertyForDetail(null);
          handleOpenInquiry(property, details);
        }}
      />

      {/* Booking & Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={handleCloseInquiry}
        selectedProperty={inquiryTargetProperty}
        initialDetails={inquiryInitialDetails}
      />
    </div>
  );
}
