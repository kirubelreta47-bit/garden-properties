export interface Property {
  id: string;
  name: string;
  tagline: string;
  location: string;
  neighborhood: string;
  city: string;
  propertyType: 'Furnished Apartment' | 'Guest House' | 'Executive Suite' | 'Garden Villa';
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  areaSqM: number;
  pricePerNightUSD: number;
  pricePerMonthUSD: number;
  pricePerNightETB: number;
  pricePerMonthETB: number;
  featured: boolean;
  images: string[];
  heroImage: string;
  description: string;
  longDescription: string;
  amenities: string[];
  whatsIncluded: string[];
  highlights: string[];
  nearbyPlaces: { name: string; distance: string; type: string }[];
  isDemo?: boolean;
}

export interface LocationArea {
  id: string;
  name: string;
  city: string;
  tagline: string;
  description: string;
  image: string;
  propertyCount: number;
  highlights: string[];
}

export const SAMPLE_PROPERTIES: Property[] = [
  {
    id: 'garden-residence-bole',
    name: 'Garden Residence',
    tagline: 'Modern botanical living in the vibrant diplomatic district',
    location: 'Bole, Addis Ababa',
    neighborhood: 'Bole',
    city: 'Addis Ababa',
    propertyType: 'Furnished Apartment',
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    areaSqM: 115,
    pricePerNightUSD: 95,
    pricePerMonthUSD: 1850,
    pricePerNightETB: 12500,
    pricePerMonthETB: 245000,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'A serene 2-bedroom sanctuary with expansive terrace windows, lush interior greenery, and dedicated fiber workspace.',
    longDescription: 'Garden Residence combines Scandinavian minimalist comfort with warm Ethiopian hospitality. Located just 7 minutes from Bole International Airport, this two-bedroom residence offers sun-drenched open living, custom hardwood finishes, a chef-ready kitchen, and private terrace views overlooking quiet tree-lined avenues.',
    amenities: [
      'High-Speed Fiber Wi-Fi (100 Mbps)',
      'Fully Equipped Modern Kitchen',
      '55" 4K Smart TV with Netflix',
      'Continuous Hot Water (Dual Tank)',
      'Automatic In-Unit Washer & Dryer',
      'Dedicated Workstation with Ergonomic Chair',
      '24/7 Security & Keycard Access',
      'Standby Generator & Water Reserve',
      'Private Green Balcony',
      'Secure Underground Parking'
    ],
    whatsIncluded: [
      'Weekly thorough housekeeping & fresh linen change',
      'Complimentary welcome basket with organic Ethiopian coffee & teas',
      'All utilities (Electricity, Water, High-Speed Internet)',
      '24/7 on-call concierge and guest support',
      'Full kitchen cookware, dishware, and barista equipment'
    ],
    highlights: ['7 mins to Airport', 'Walk to Cafes & Supermarkets', 'High-Floor Natural Light', 'Backup Generator'],
    nearbyPlaces: [
      { name: 'Bole Medhane Alem & Edna Mall', distance: '800 m', type: 'Shopping & Dining' },
      { name: 'Tomoca Coffee Bole', distance: '400 m', type: 'Artisan Cafe' },
      { name: 'Bole International Airport (ADD)', distance: '3.2 km', type: 'Transit' },
      { name: 'Friendship Business Center', distance: '1.1 km', type: 'Commerce' }
    ],
    isDemo: true
  },
  {
    id: 'green-view-kazanchis',
    name: 'Green View Guest House',
    tagline: 'Quiet leafy enclave adjacent to UNECA and prime business hubs',
    location: 'Kazanchis, Addis Ababa',
    neighborhood: 'Kazanchis',
    city: 'Addis Ababa',
    propertyType: 'Guest House',
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    areaSqM: 160,
    pricePerNightUSD: 140,
    pricePerMonthUSD: 2400,
    pricePerNightETB: 18500,
    pricePerMonthETB: 320000,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Spacious 3-bedroom retreat surrounded by private garden courtyards, ideal for families and corporate delegations.',
    longDescription: 'Nestled in the green diplomatic district of Kazanchis, Green View Guest House offers generous proportions, vaulted ceilings, and lush garden views from every room. Featuring three well-appointed bedrooms, two modern bathrooms, an expansive open kitchen, and a peaceful garden terrace for morning coffee or evening relaxation.',
    amenities: [
      'High-Speed Wi-Fi (Dual-Band)',
      'Full Gourmet Kitchen & Dishwasher',
      'Smart TV with Soundbar',
      'Private Garden & Patio Seating',
      'Hot Water Solar & Electric System',
      'In-House Laundry Facility',
      'Executive Desk & Meeting Area',
      '24/7 Gated Security Guard',
      'Full Backup Power System',
      '2 Dedicated Parking Spots'
    ],
    whatsIncluded: [
      'Twice-weekly housekeeping with linen & towel refreshment',
      'Dedicated property manager & maintenance support',
      'Fresh fruit basket & local coffee welcome pack',
      'Secure high-speed fiber internet and backup connection'
    ],
    highlights: ['5 mins to UN-ECA', 'Private Gated Garden', 'Spacious 3-Bedroom Layout', 'Solar Hot Water'],
    nearbyPlaces: [
      { name: 'United Nations ECA Headquarters', distance: '900 m', type: 'Diplomatic / Org' },
      { name: 'Hilton Addis & Intercontinental Zone', distance: '1.2 km', type: 'Hotels & Dining' },
      { name: 'National Museum of Ethiopia', distance: '3.4 km', type: 'Culture' },
      { name: 'Kazanchis Fresh Market & Groceries', distance: '500 m', type: 'Essentials' }
    ],
    isDemo: true
  },
  {
    id: 'serenity-apartment-cera',
    name: 'Serenity Apartment',
    tagline: 'Quiet minimalist boutique suite designed for solo travelers & couples',
    location: 'Cera, Addis Ababa',
    neighborhood: 'Cera',
    city: 'Addis Ababa',
    propertyType: 'Furnished Apartment',
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    areaSqM: 65,
    pricePerNightUSD: 65,
    pricePerMonthUSD: 1100,
    pricePerNightETB: 8500,
    pricePerMonthETB: 145000,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=85',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'A sun-drenched one-bedroom haven featuring clean contemporary lines, natural wood textures, and quiet courtyard views.',
    longDescription: 'Serenity Apartment is crafted for remote professionals, visiting researchers, and travelers who appreciate peaceful, uncluttered aesthetics. Boasting top-tier soundproofing, a sunlit living space, a custom fitted kitchen, and a queen bedroom with premium orthopedic mattress.',
    amenities: [
      'High-Speed Fiber Wi-Fi (100 Mbps)',
      'Custom Fitted Kitchenette & Espresso Maker',
      'Smart TV with Streaming Apps',
      'Instant Hot Water Shower',
      'Compact Washer Machine',
      'Acoustic Soundproofing & Quiet Enclave',
      'Keyless Digital Entry & Intercom',
      'Standby Power Inverter'
    ],
    whatsIncluded: [
      'Weekly housekeeping & linen replacement',
      'High-speed unlimited internet',
      'Water, electricity, and service fees included',
      'Assigned secure parking bay'
    ],
    highlights: ['Peaceful Residential Street', 'Ergonomic Remote Workstation', 'Keyless Smart Entry'],
    nearbyPlaces: [
      { name: 'Local Artisan Bakeries & Cafes', distance: '300 m', type: 'Dining' },
      { name: 'Main Transit Hub', distance: '700 m', type: 'Transport' },
      { name: 'City Center Mall', distance: '1.8 km', type: 'Shopping' }
    ],
    isDemo: true
  },
  {
    id: 'cmc-botanical-villa',
    name: 'CMC Botanical Villa Suite',
    tagline: 'Expansive multi-level sanctuary with landscaped gardens and private terrace',
    location: 'CMC, Addis Ababa',
    neighborhood: 'CMC',
    city: 'Addis Ababa',
    propertyType: 'Garden Villa',
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8,
    areaSqM: 240,
    pricePerNightUSD: 190,
    pricePerMonthUSD: 3100,
    pricePerNightETB: 25000,
    pricePerMonthETB: 410000,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'A magnificent 4-bedroom estate with private manicured lawn, modern architecture, and sweeping eastern hill views.',
    longDescription: 'Designed for discerning families or executive groups, this expansive private villa in CMC provides absolute privacy, private perimeter security, an open-concept chef kitchen with island, four plush bedrooms, and landscaped outdoor gardens perfect for tranquil evenings.',
    amenities: [
      'Ultra-Fast Dedicated Fiber Internet',
      'Full Master Chef Kitchen with Island',
      'Multiple Living Rooms & Smart Entertainment',
      'Expansive Landscaped Private Garden',
      'Continuous Solar & Generator Power',
      'Laundry Room with Washer & Dryer',
      'Covered Parking for 3 Vehicles',
      '24/7 Security Post & CCTV'
    ],
    whatsIncluded: [
      'Daily compound gardening & bi-weekly deep cleaning',
      'Dedicated compound caretaker',
      'All utilities & premium fiber internet included'
    ],
    highlights: ['Spacious 240m² Layout', 'Private Landscaped Yard', 'Quiet Residential Luxury'],
    nearbyPlaces: [
      { name: 'CMC Heights Commercial Center', distance: '1.2 km', type: 'Shopping' },
      { name: 'St. Michael Church Area', distance: '800 m', type: 'Landmark' },
      { name: 'Ring Road Expressway Entry', distance: '1.5 km', type: 'Transit' }
    ],
    isDemo: true
  },
  {
    id: 'old-airport-executive-loft',
    name: 'Old Airport Executive Loft',
    tagline: 'Sophisticated 2-bedroom residence with leafy views near international schools',
    location: 'Old Airport, Addis Ababa',
    neighborhood: 'Old Airport',
    city: 'Addis Ababa',
    propertyType: 'Executive Suite',
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    areaSqM: 130,
    pricePerNightUSD: 110,
    pricePerMonthUSD: 2100,
    pricePerNightETB: 14500,
    pricePerMonthETB: 280000,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1502005229762-ee1b2da97ba4?auto=format&fit=crop&w=1400&q=85',
    images: [
      'https://images.unsplash.com/photo-1502005229762-ee1b2da97ba4?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'An executive 2-bedroom loft with double-height ceilings, bespoke teak furniture, and leafy garden surroundings.',
    longDescription: 'Located in the prestigious, peaceful Old Airport neighborhood, this loft is minutes away from international embassies and private schools. Featuring double-height windows that flood the open floor plan with natural light, a modern European kitchen, and two lavish ensuite bedrooms.',
    amenities: [
      'High-Speed Fiber Wi-Fi',
      'European Style Modern Kitchen',
      '65" OLED TV & Soundbar',
      'Hot Water Boiler System',
      'In-Unit Washer / Dryer',
      'Dedicated Home Office Loft',
      'Private Terrace & Balcony',
      'Full Standby Generator'
    ],
    whatsIncluded: [
      'Weekly housekeeping & linen change',
      'High-speed internet and backup generator fuel included',
      'Assigned basement parking'
    ],
    highlights: ['Double-Height Ceilings', 'Prestigious Diplomatic Area', 'Bespoke Teak Furnishings'],
    nearbyPlaces: [
      { name: 'International Community School (ICS)', distance: '950 m', type: 'Education' },
      { name: 'Golf Club & Green Belt', distance: '1.4 km', type: 'Recreation' },
      { name: 'Bisrate Gabriel Commercial Plaza', distance: '1.1 km', type: 'Shopping' }
    ],
    isDemo: true
  },
  {
    id: 'sarbet-garden-haven',
    name: 'Sarbet Garden Haven',
    tagline: 'Charming 2-bedroom guest apartment moments from AU headquarters',
    location: 'Sarbet, Addis Ababa',
    neighborhood: 'Sarbet',
    city: 'Addis Ababa',
    propertyType: 'Furnished Apartment',
    bedrooms: 2,
    bathrooms: 1.5,
    maxGuests: 4,
    areaSqM: 98,
    pricePerNightUSD: 85,
    pricePerMonthUSD: 1650,
    pricePerNightETB: 11000,
    pricePerMonthETB: 220000,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85',
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Comfortable, quiet 2-bedroom residence with leafy green courtyard, warm wood styling, and fast city transit links.',
    longDescription: 'Situated in lively Sarbet near the African Union headquarters and Adams Pavilion, this welcoming apartment provides a calm, quiet haven with verdant courtyard views, fully stocked kitchen, and fast fiber broadband.',
    amenities: [
      'High-Speed Fiber Wi-Fi',
      'Fully Equipped Modern Kitchen',
      'Smart TV with Netflix',
      'Hot Water System',
      'Automatic Washing Machine',
      '24/7 Security & Video Entry',
      'Dedicated Workstation'
    ],
    whatsIncluded: [
      'Weekly housekeeping service',
      'All utilities (Water, Power, High-Speed Internet)',
      'Complimentary coffee & tea amenities'
    ],
    highlights: ['Close to African Union (AU)', 'Quiet Courtyard Facing', 'Easy Access to Ring Road'],
    nearbyPlaces: [
      { name: 'African Union Headquarters', distance: '1.5 km', type: 'Diplomatic / Org' },
      { name: 'Adams Pavilion & Supermarkets', distance: '600 m', type: 'Shopping' },
      { name: 'Vibrant Local Cafes', distance: '250 m', type: 'Dining' }
    ],
    isDemo: true
  }
];

export const LOCATION_AREAS: LocationArea[] = [
  {
    id: 'bole',
    name: 'Bole',
    city: 'Addis Ababa',
    tagline: 'Vibrant, International & Connected',
    description: 'The international heart of Addis Ababa, home to world-class dining, cafes, shopping centers, and 7-minute access to the airport.',
    image: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=800&q=80',
    propertyCount: 8,
    highlights: ['Airport Proximity (5-10 mins)', 'Premier Dining & Cafes', 'Boutique Shopping']
  },
  {
    id: 'kazanchis',
    name: 'Kazanchis',
    city: 'Addis Ababa',
    tagline: 'Diplomatic Enclave & Green Avenue',
    description: 'Centrally positioned near the UN Economic Commission for Africa, historic landmarks, and quiet tree-shaded residential pockets.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    propertyCount: 6,
    highlights: ['Adjacent to UN-ECA', 'Quiet Green Enclaves', 'Central City Access']
  },
  {
    id: 'cmc',
    name: 'CMC',
    city: 'Addis Ababa',
    tagline: 'Spacious Residential Tranquility',
    description: 'A peaceful, modern residential district known for larger homes, botanical compounds, fresh air, and family-friendly serenity.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    propertyCount: 5,
    highlights: ['Spacious Family Villas', 'Peaceful Neighborhoods', 'Modern Infrastructure']
  },
  {
    id: 'old-airport',
    name: 'Old Airport',
    city: 'Addis Ababa',
    tagline: 'Prestigious & Lush Diplomatic Haven',
    description: 'One of the city’s most established upscale neighborhoods, famous for expansive gardens, embassies, and top international schools.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    propertyCount: 4,
    highlights: ['Embassy District', 'International Schools', 'Lush Tree Canopies']
  },
  {
    id: 'sarbet',
    name: 'Sarbet',
    city: 'Addis Ababa',
    tagline: 'Cultural Hub & African Union Corridor',
    description: 'Conveniently situated near the African Union headquarters with seamless connectivity, equestrian club, and artisan cafes.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    propertyCount: 4,
    highlights: ['Near African Union', 'Vibrant Local Scene', 'Convenient Transit']
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'Sunlit Living Room',
    category: 'Living Rooms',
    property: 'Garden Residence',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    aspect: 'tall'
  },
  {
    id: 'gal-2',
    title: 'Master Botanical Bedroom',
    category: 'Bedrooms',
    property: 'Green View Guest House',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
    aspect: 'wide'
  },
  {
    id: 'gal-3',
    title: 'Chef-Ready Open Kitchen',
    category: 'Kitchens',
    property: 'Garden Residence',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    aspect: 'square'
  },
  {
    id: 'gal-4',
    title: 'Minimalist Dining & Natural Wood',
    category: 'Dining Areas',
    property: 'Serenity Apartment',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
    aspect: 'square'
  },
  {
    id: 'gal-5',
    title: 'Private Garden Terrace',
    category: 'Balconies & Gardens',
    property: 'CMC Botanical Villa Suite',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    aspect: 'wide'
  },
  {
    id: 'gal-6',
    title: 'Spa-Inspired Bathroom',
    category: 'Bathrooms',
    property: 'Old Airport Executive Loft',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
    aspect: 'tall'
  },
  {
    id: 'gal-7',
    title: 'Curated Architectural Details',
    category: 'Details & Decor',
    property: 'Garden Residence',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=85',
    aspect: 'square'
  },
  {
    id: 'gal-8',
    title: 'Sunlit Reading Nook',
    category: 'Living Rooms',
    property: 'Serenity Apartment',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=85',
    aspect: 'square'
  }
];
