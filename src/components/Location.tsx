import { MapPin, Briefcase, GraduationCap, Train, ShoppingBag, Navigation2 } from 'lucide-react';
import { motion } from 'motion/react';
import { nearbyPlaces } from '../data';

export default function Location() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'work':
        return <Briefcase className="w-4 h-4 text-gold-400" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-gold-400" />;
      case 'shoppping':
        return <ShoppingBag className="w-4 h-4 text-gold-400" />;
      case 'transit':
        return <Train className="w-4 h-4 text-gold-400" />;
      default:
        return <MapPin className="w-4 h-4 text-gold-400" />;
    }
  };

  const mapIframeUrl = `https://maps.google.com/maps?q=Lotus%20Stay%20Bliss%20Studio%20Rooms%20Co-Living%2033%20Narayana%20School%20Road%20Thubarahalli%20Bengaluru&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const shareMapUrl = `https://www.google.com/maps/search/?api=1&query=Lotus+Stay+Bliss+Studio+Rooms+Co-Living+33+Narayana+School+Road+Kumarapalli+Thubarahalli+whitefield(Brookfield)+Bengaluru`;

  return (
    <section id="location" className="py-24 bg-navy-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center md:max-w-3xl md:mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider font-mono text-gold-400 block mb-2">Neighborhood</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Prime Location in <span className="italic text-gold-300">whitefield(Brookfield), Bangalore</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-6" />
          <p className="mt-6 text-slate-400 font-light text-sm sm:text-base">
            Nestled directly inside Bengaluru's central tech capital, our PG is located on Narayana School Road, Thubarahalli with high levels of personal accessibility and safety.
          </p>
        </div>

        {/* Dual Grid block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Block: Google Maps Integration */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="relative border border-gold-400/20 rounded-2xl overflow-hidden shadow-2xl bg-navy-900 h-[350px] sm:h-[450px] w-full flex-1">
              <iframe
                title="Lotus Stay Bliss Co-Living PG Location Map"
                src={mapIframeUrl}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address bar beneath map */}
            <div className="mt-4 p-5 bg-navy-900/60 border border-white/5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">Lotus Stay Bliss Studio Rooms Co-Living</h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-sm">
                    33, Narayana School Road, Kumarapalli, Thubarahalli, whitefield(Brookfield), Bengaluru, Karnataka 560066.
                  </p>
                </div>
              </div>
              <a
                href={shareMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-navy-900 border border-gold-400/40 hover:border-gold-400 text-gold-400 px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold hover:bg-gold-500/10 transition-colors shrink-0 cursor-pointer"
              >
                <Navigation2 className="w-3.5 h-3.5" /> Open Google Maps
              </a>
            </div>
          </div>

          {/* Right Block: Hotspots Distance List */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-gold-100 mb-2">Nearby Key Hubs</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 font-light">
                Lotus Stay Bliss co-living rooms render minimal commutes to major office districts, public transits, medical institutions, and leisure centers:
              </p>

              {/* Transit/Places rows */}
              <div className="space-y-4">
                {nearbyPlaces.map((place, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-navy-900/40 border border-white/5 hover:border-gold-400/20 rounded-xl flex items-center justify-between gap-4 transition-all duration-300 group hover:bg-navy-900/60"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-navy-950 border border-gold-400/10 p-2.5 rounded-lg group-hover:scale-105 transition-transform">
                        {getCategoryIcon(place.category)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-xs sm:text-sm text-slate-200 group-hover:text-gold-200 transition-colors">
                          {place.name}
                        </h4>
                        <span className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5 block font-mono">
                          {place.category === 'work' ? 'Corporate Zone' : place.category === 'education' ? 'Academic/Clinical' : place.category === 'shoppping' ? 'Malls/Retail' : 'Metro/Transit Hub'}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-gold-400 block bg-gold-400/10 px-2 py-1 rounded">
                        {place.distance}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom summary checklist info */}
            <div className="mt-8 border-t border-white/5 pt-6 flex gap-4 items-start">
              <div className="bg-gold-400/10 p-2.5 rounded-full text-gold-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-xs text-slate-200">Excellent General Connectivity</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Bus stops are located right outside on Narayana School Road, connect directly to the main Varthur Road network, Thubarahalli junctions & metro stations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
