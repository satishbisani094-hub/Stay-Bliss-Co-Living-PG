import { useState, useEffect } from 'react';
import { Menu, X, Landmark, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Navbar({ onScrollTo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Why Lotus?', id: 'about' },
    { name: 'Rooms & Pricing', id: 'rooms' },
    { name: 'Amenities', id: 'amenities' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Location', id: 'location' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setIsOpen(false);
  };

  return (
    <nav
      id="navbar-root"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/95 backdrop-blur-md border-b border-gold-500/20 shadow-lg py-3'
          : 'bg-gradient-to-b from-navy-950/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            id="nav-logo-container"
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="bg-gradient-to-br from-gold-400 to-gold-600 p-2 rounded-lg text-navy-950 shadow-md group-hover:scale-105 transition-transform">
              <Landmark id="nav-logo-icon" className="h-6 w-6" />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white block">
                LOTUS STAY <span className="text-gold-400">BLISS</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-gold-300/80 -mt-1 block">
                Co-Living PG • whitefield(Brookfield)
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div id="desktop-menu" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="px-3 py-2 text-sm font-medium hover:text-gold-400 text-slate-300 hover:bg-white/5 rounded-md transition-all cursor-pointer"
              >
                {item.name}
              </button>
            ))}
            <div className="pl-4">
              <button
                onClick={() => handleNavClick('contact')}
                className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-navy-950 font-semibold px-5 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-gold-400 focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy-950/98 border-b border-gold-500/20 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left px-4 py-3 text-base font-semibold text-slate-300 hover:text-gold-400 hover:bg-white/5 rounded-md transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 px-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="flex-1 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 text-center font-bold px-4 py-3 rounded-md text-sm uppercase tracking-wider transition-all shadow-md"
                >
                  Book a Visit
                </button>
                <a
                  href="tel:+918000000000"
                  className="flex items-center justify-center gap-2 border border-gold-400/30 font-semibold hover:border-gold-400 text-gold-400 px-4 py-3 rounded-md text-sm uppercase transition-all"
                >
                  <PhoneCall className="w-4 h-4" /> Direct Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
