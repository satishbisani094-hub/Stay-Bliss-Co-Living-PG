export interface RoomOption {
  id: string;
  sharingType: string;
  price: number;
  highlight: string;
  features: string[];
}

export interface Amenity {
  name: string;
  iconName: string;
  category: 'core' | 'comfort' | 'utilities';
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'Working Professional' | 'Student' | 'Resident';
  companyOrSchool?: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NearbyPlace {
  name: string;
  distance: string;
  category: 'work' | 'education' | 'shoppping' | 'transit';
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  roomPreference: string;
  message?: string;
  status: 'new' | 'contacted' | 'resolved';
  submittedAt: string;
}
