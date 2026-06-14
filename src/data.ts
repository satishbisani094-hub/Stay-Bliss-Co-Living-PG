import { RoomOption, Amenity, Testimonial, FAQItem, NearbyPlace } from './types';

export const roomOptions: RoomOption[] = [
  {
    id: '1-sharing',
    sharingType: '1 Sharing',
    price: 19000,
    highlight: 'Private Premium Studio Room',
    features: [
      'Private premium room',
      'Attached private washroom',
      'Fully customizable luxury furnishing',
      'Dedicated work desk & chair',
      'High-speed independent WiFi',
      'Individual wardrobe with digital lock'
    ]
  },
  {
    id: '2-sharing',
    sharingType: '2 Sharing',
    price: 9500,
    highlight: 'Premium Shared Studio Room',
    features: [
      'Shared comfortable room (2 beds)',
      'Furnished luxury wooden beds',
      'Separate dual-door wardrobes',
      'High-speed WiFi included',
      'Attached modern Washroom',
      'Shared compact work desks'
    ]
  },
  {
    id: '3-sharing',
    sharingType: '3 Sharing',
    price: 7500,
    highlight: 'Cozy Shared Accommodation',
    features: [
      'Spacious shared room (3 beds)',
      'Premium ortho-pedic mattresses',
      'Dedicated individual locker key storage',
      'High-speed secure WiFi',
      'Attached clean washroom',
      'Daily housekeeping included'
    ]
  },
  {
    id: '4-sharing',
    sharingType: '4 Sharing',
    price: 6500,
    highlight: 'Budget-Friendly Community Living',
    features: [
      'Budget-friendly room spacing',
      'Fully sturdy furnished bunk/individual setups',
      'Separate study space access',
      'High-speed community WiFi',
      'Attached washroom',
      'Excellent community living experience'
    ]
  }
];

export const amenities: Amenity[] = [
  { name: 'High-Speed WiFi', iconName: 'Wifi', category: 'core' },
  { name: 'CCTV Security', iconName: 'Shield', category: 'core' },
  { name: 'Housekeeping', iconName: 'Sparkles', category: 'comfort' },
  { name: 'Laundry Service', iconName: 'WashingMachine', category: 'utilities' },
  { name: 'Power Backup', iconName: 'Zap', category: 'core' },
  { name: 'RO Drinking Water', iconName: 'Droplet', category: 'utilities' },
  { name: 'Fully Furnished Rooms', iconName: 'BedDouble', category: 'comfort' },
  { name: 'Attached Bathrooms', iconName: 'ShowerHead', category: 'comfort' },
  { name: 'Parking Facility', iconName: 'Car', category: 'utilities' },
  { name: '24/7 Support', iconName: 'LifeBuoy', category: 'core' },
  { name: 'Common Lounge Area', iconName: 'Tv', category: 'comfort' },
  { name: 'Geyser & Hot Water', iconName: 'Flame', category: 'utilities' }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ananya Sharma',
    role: 'Working Professional',
    companyOrSchool: 'Software Engineer at ITPL',
    text: 'Lotus Stay Bliss has been my home for the last 10 months. The location is perfect—just 10 minutes from ITPL. Housekeeping is incredibly disciplined, and the high-speed internet never fails. Moving here is the best decision I made when relocating to Bangalore!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 't2',
    name: 'Rohan Deshmukh',
    role: 'Student',
    companyOrSchool: 'Narayana School Road / Post-grad Tech',
    text: 'Budget options can be hit-or-miss in whitefield(Brookfield), but the 3-sharing room at Lotus Stay Bliss is amazing. The beds are comfortable, security with CCTV and physical guards makes me feel safe, and the power backup is a lifesaver during exams!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 't3',
    name: 'Vikram Aditya',
    role: 'Working Professional',
    companyOrSchool: 'Consultant at Prestige Tech Park',
    text: 'I rent the private single-sharing room. It feels exactly like a boutique hotel but at a third of the cost. The gold and navy accents are beautiful. The common lounge is excellent for meeting people during weekends.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120'
  }
];

export const FAQs: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Is food included in the monthly rent?',
    answer: 'No, food is not directly included, but we provide premium kitchen access in common areas, refrigerator and microwave support, and multiple exceptional tiffin services or food vendors deliver directly to our doorstep on a subscription basis.'
  },
  {
    id: 'faq2',
    question: 'Are visitors / parents allowed inside?',
    answer: 'Yes! Visitors and parents are allowed in the common areas during standard visiting hours (9:00 AM - 8:00 PM). Overnight stay for same-gender parents is allowed with prior approval from management.'
  },
  {
    id: 'faq3',
    question: 'Is high-speed WiFi stable for working from home?',
    answer: 'Absolutely. We provide enterprise-grade dual-band fiber internet with routers carefully designated across each floor to ensure continuous high-bandwidth performance suitable for video calls, uploads, and gaming.'
  },
  {
    id: 'faq4',
    question: 'What is the security deposit amount?',
    answer: 'To make your stay pocket-friendly, we require only a 1-month to 2-month security deposit alongside the advance month rent, which is fully refundable upon checklist clearance at move-out.'
  },
  {
    id: 'faq5',
    question: 'Are rooms fully furnished?',
    answer: 'Yes, they are! Every room comes with structurally high-quality beds, medical-grade comfortable mattresses, study tables, independent modern wardrobes, ceiling fans, curtains, and attached private washrooms.'
  },
  {
    id: 'faq6',
    question: 'Is professional housekeeping provided?',
    answer: 'Yes! Housekeeping of individual rooms is conducted multiple times a week at no extra charge, and the common areas, bathrooms, and corridors are sanitized daily to maintain high hygiene standards.'
  }
];

export const nearbyPlaces: NearbyPlace[] = [
  { name: 'ITPL Brookfield', distance: '12 mins (3.8 km)', category: 'work' },
  { name: 'EPIP Zone Brookfield', distance: '10 mins (3.1 km)', category: 'work' },
  { name: 'Prestige Tech Park', distance: '15 mins (5.2 km)', category: 'work' },
  { name: 'Narayana School Road', distance: '2 mins Walk (100 m)', category: 'education' },
  { name: 'Forum Shantiniketan Mall', distance: '14 mins (4.2 km)', category: 'shoppping' },
  { name: 'Vydehi Hospital', distance: '8 mins (2.8 km)', category: 'education' },
  { name: 'Kadugodi / Brookfield Metro Station', distance: '10 mins (3.5 km)', category: 'transit' }
];
