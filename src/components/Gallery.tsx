import { useState, MouseEvent } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import our authentic property images
import gallery1 from '../assets/images/gallery_1.png';
import gallery2 from '../assets/images/gallery_2.png';
import gallery3 from '../assets/images/gallery_3.png';
import gallery4 from '../assets/images/gallery_4.png';
import gallery5 from '../assets/images/gallery_5.png';
import gallery6 from '../assets/images/gallery_6.png';
import gallery7 from '../assets/images/gallery_7.png';
import gallery8 from '../assets/images/gallery_8.png';

interface GalleryItem {
  src: string;
  alt: string;
  tag: 'room' | 'common' | 'exterior';
  title: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: gallery2,
    alt: 'Lotus Stay Bliss Modern Building Frontage and Facade',
    tag: 'exterior',
    title: 'Modern Building Exterior'
  },
  {
    src: gallery5,
    alt: 'Premium 2 Sharing Room with comfortable beds and spacious wardrobe',
    tag: 'room',
    title: 'Premium 2 Sharing Room'
  },
  {
    src: gallery3,
    alt: 'Comfortable 3 Sharing Room with multi-bed configuration',
    tag: 'room',
    title: 'Spacious 3 Sharing Room'
  },
  {
    src: gallery6,
    alt: 'Single Bed Space with geometric bedding and modern wardrobe',
    tag: 'room',
    title: 'Comfortable Bed Space'
  },
  {
    src: gallery4,
    alt: 'Modern attached bathroom with premium tiles and clean fittings',
    tag: 'common',
    title: 'Attached Bathroom'
  },
  {
    src: gallery7,
    alt: 'Elegant common hallway corridor with dark polished marble flooring and walls',
    tag: 'common',
    title: 'Polished Marble Corridor'
  },
  {
    src: gallery8,
    alt: 'Premium wooden doors and clean marble lobby design',
    tag: 'common',
    title: 'Room Entries & Lobby'
  },
  {
    src: gallery1,
    alt: 'Lotus Stay Bliss Co-Living Official Signboard and Contact Information',
    tag: 'exterior',
    title: 'Property Signboard & Info'
  }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'room' | 'common' | 'exterior'>('all');
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeFilter === 'all' || item.tag === activeFilter
  );

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx === null) return;
    const nextIdx = (selectedImageIdx + 1) % filteredItems.length;
    setSelectedImageIdx(nextIdx);
  };

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx === null) return;
    const prevIdx = (selectedImageIdx - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImageIdx(prevIdx);
  };

  return (
    <section id="gallery" className="py-24 bg-navy-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center md:max-w-3xl md:mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider font-mono text-gold-400 block mb-2">Virtual Tour</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Our Property <span className="italic text-gold-300">Showcase Gallery</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-6" />
          <p className="mt-6 text-slate-400 font-light text-sm sm:text-base">
            Take a visual tour through our meticulously finished apartments, warm social spaces, individual bedrooms, and nearby features before visiting in person.
          </p>
        </div>

        {/* Filter categories tabs styling */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {(['all', 'room', 'common', 'exterior'] as const).map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === tag
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 shadow-md font-bold'
                  : 'bg-navy-900/60 border border-white/5 text-slate-300 hover:border-gold-400/30'
              }`}
            >
              {tag === 'all' ? 'All Spaces' : tag === 'room' ? 'Rooms & Beds' : tag === 'common' ? 'Common Social Areas' : 'Exterior Facade'}
            </button>
          ))}
        </div>

        {/* Dynamic Image Grid with Animations */}
        <motion.div
          id="gallery-grid"
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden group aspect-[4/3] rounded-2xl border border-white/5 bg-navy-900 cursor-pointer"
                onClick={() => setSelectedImageIdx(index)}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Dark overlay with hover details */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] bg-gold-400 text-navy-950 px-2 py-0.5 rounded uppercase font-mono font-bold tracking-wider mb-2 inline-block">
                      {item.tag}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white mb-1 leading-tight">{item.title}</h4>
                    <p className="text-xs text-slate-300 flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5 text-gold-400" /> Click to enlarge
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Dialog Overlay */}
        <AnimatePresence>
          {selectedImageIdx !== null && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy-950/98 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm"
              onClick={() => setSelectedImageIdx(null)}
            >
              <button
                className="absolute top-6 right-6 text-slate-300 hover:text-white bg-navy-900/60 p-2.5 rounded-full border border-white/5 transition-all"
                onClick={() => setSelectedImageIdx(null)}
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Arrow navigation */}
              <button
                className="absolute left-4 sm:left-6 text-slate-300 hover:text-white bg-navy-900/60 p-3 rounded-full border border-white/5 transition-all hidden sm:block cursor-pointer"
                onClick={handlePrev}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div
                className="relative max-w-4xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredItems[selectedImageIdx].src}
                  alt={filteredItems[selectedImageIdx].alt}
                  className="max-h-[70vh] sm:max-h-[80vh] w-auto max-w-full object-contain rounded-xl border border-white/10"
                  referrerPolicy="no-referrer"
                />
                
                {/* Meta block underneath */}
                <div className="mt-4 text-center">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-1">
                    {filteredItems[selectedImageIdx].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {filteredItems[selectedImageIdx].alt}
                  </p>
                </div>
              </div>

              <button
                className="absolute right-4 sm:right-6 text-slate-300 hover:text-white bg-navy-900/60 p-3 rounded-full border border-white/5 transition-all hidden sm:block cursor-pointer"
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
