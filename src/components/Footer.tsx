import { MapPin, Phone, Mail, ChevronUp, Facebook, Instagram, Twitter, Compass } from 'lucide-react';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const shareMapUrl = `https://www.google.com/maps/search/?api=1&query=Lotus+Stay+Bliss+Studio+Rooms+Co-Living+33+Narayana+School+Road+Kumarapalli+Thubarahalli+Whitefield+Bengaluru`;

  const seoTags = [
    'PG in Whitefield',
    'Co-Living PG in Whitefield Bangalore',
    'Furnished PG near ITPL',
    'Affordable PG in Whitefield',
    'PG for Working Professionals in Bangalore',
    'Co-Living Space in Whitefield',
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-root" className="bg-navy-950 border-t border-white/5 pt-16 pb-8 text-slate-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Column 1: Logo & description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onScrollTo('home')}>
              <div className="bg-gradient-to-br from-gold-400 to-gold-600 p-1.5 rounded text-navy-950 shadow">
                <Compass className="h-5 w-5" />
              </div>
              <span className="font-serif text-lg font-bold tracking-tight text-white">
                LOTUS STAY <span className="text-gold-400">BLISS</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-450 leading-relaxed font-light max-w-sm">
              Lotus Stay Bliss sets the gold standard for premium Co-living and PG accommodations in Bangalore. We offer luxurious, convenient, and fully services studios tailored specifically for modern achievers.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2 bg-navy-900 border border-white/5 text-slate-300 hover:text-gold-400 hover:border-gold-400 hover:bg-gold-500/5 rounded-lg transition-all" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-navy-900 border border-white/5 text-slate-300 hover:text-gold-400 hover:border-gold-400 hover:bg-gold-500/5 rounded-lg transition-all" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-navy-900 border border-white/5 text-slate-300 hover:text-gold-400 hover:border-gold-400 hover:bg-gold-500/5 rounded-lg transition-all" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-2 space-y-4">
            <h4 className="font-serif text-white font-bold text-sm tracking-wide uppercase">Quick Nav</h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <button onClick={() => onScrollTo('about')} className="text-left hover:text-gold-300 transition-colors">Why Choose Us</button>
              <button onClick={() => onScrollTo('rooms')} className="text-left hover:text-gold-300 transition-colors">Pricing & Rooms</button>
              <button onClick={() => onScrollTo('amenities')} className="text-left hover:text-gold-300 transition-colors">Our Amenities</button>
              <button onClick={() => onScrollTo('location')} className="text-left hover:text-gold-300 transition-colors">Map Location</button>
              <button onClick={() => onScrollTo('testimonials')} className="text-left hover:text-gold-300 transition-colors text-slate-400">Reviews & FAQ</button>
            </div>
          </div>

          {/* Column 3: Contact & address */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-serif text-white font-bold text-sm tracking-wide uppercase">Properties Address</h4>
            
            <div className="space-y-3.5 text-xs">
              <a
                href={shareMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2.5 items-start hover:text-gold-300 transition-colors group"
              >
                <MapPin className="w-4.5 h-4.5 text-gold-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  33, Narayana School Road, Kumarapalli, Thubarahalli, Whitefield, Bengaluru, Karnataka 560066, India.
                </span>
              </a>

              <div className="flex gap-2.5 items-center">
                <Phone className="w-4.5 h-4.5 text-gold-400 shrink-0" />
                <a href="tel:+918501866909" className="hover:text-gold-300 font-mono">+91 8501866909</a>
              </div>

              <div className="flex gap-2.5 items-center">
                <Mail className="w-4.5 h-4.5 text-gold-400 shrink-0" />
                <a href="mailto:support@lotusstaybliss.com" className="hover:text-gold-300 font-mono">support@lotusstaybliss.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* SEO Keywords tags bar (beautiful micro tags block to complete SEO mandate visually) */}
        <div className="py-8 border-b border-white/5">
          <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400 block mb-3">Popular Searches Whitefield</span>
          <div className="flex flex-wrap gap-2">
            {seoTags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-sans font-light bg-navy-900 border border-white/5 py-1 px-3 rounded-full hover:border-gold-400/20 text-slate-400 cursor-default transition-all"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom copyright & Up button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} Lotus Stay Bliss Co-Living PG. Designed for elegance, luxury & comfort. All Rights Reserved.</p>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 py-1 px-3 rounded-lg border border-white/10 hover:border-gold-400 hover:text-gold-300 text-slate-400 transition-all font-mono uppercase tracking-wider text-[10px] cursor-pointer"
          >
            Back to Top <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
