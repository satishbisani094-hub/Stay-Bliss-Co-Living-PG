import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageSquare, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedRoomType, setSelectedRoomType] = useState<string>('2 Sharing');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Called when a user selects a specific room pricing tier
  const handleSelectRoom = (roomSharing: string) => {
    setSelectedRoomType(roomSharing);
    scrollToSection('contact');
  };

  const whatsappUrl = `https://wa.me/916302817775?text=Hi%20Lotus%20Stay%20Bliss%20Co-Living,%20I'm%20interested%20in%20inquiring%20about%20a%20coliving%20room.`;

  return (
    <div id="app-root" className="min-h-screen bg-navy-950 text-slate-100 font-sans selection:bg-gold-500 selection:text-navy-950 overflow-x-hidden antialiased">
      {/* Premium Header/Navigation */}
      <Navbar onScrollTo={scrollToSection} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero onScrollTo={scrollToSection} />

        {/* Brand Advantages Section */}
        <About />

        {/* Accommodations Pricing Cards */}
        <Rooms onSelectOption={handleSelectRoom} />

        {/* Facility Utilities & Conveniences Grid */}
        <Amenities />

        {/* Gallery tour Grid */}
        <Gallery />

        {/* Neighborhood Locator Map */}
        <Location />

        {/* Contact and Reservations Forms */}
        <Contact selectedRoomType={selectedRoomType} />
      </main>

      {/* Footer Details & SEO indexes */}
      <Footer onScrollTo={scrollToSection} />

      {/* Floating Action Triggers */}
      {/* 1. Floating WhatsApp Button (Green pulsing badge) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Live Call floating tag for mobile users */}
        <a
          href="tel:+916302817775"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-navy-950 p-4 rounded-full shadow-2xl transition-all duration-300 md:hidden animate-pulse cursor-pointer"
          title="Direct Call Property Manager"
        >
          <PhoneCall className="w-5 h-5 text-navy-950 font-bold" />
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 translate-y-0 hover:-translate-y-1 hover:shadow-emerald-500/20 cursor-pointer"
          title="Inquire on WhatsApp"
        >
          {/* Label hidden on portable layouts but slides open beautifully on wider desktops */}
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out text-sm font-bold tracking-wider uppercase whitespace-nowrap pl-1 font-mono">
            Chat on WhatsApp
          </span>
          <MessageSquare className="w-6 h-6 shrink-0 text-white stroke-[2.2]" />
        </a>
      </div>

    </div>
  );
}
