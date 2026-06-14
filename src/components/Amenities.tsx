import {
  Wifi,
  Shield,
  Sparkles,
  WashingMachine,
  Zap,
  Droplet,
  BedDouble,
  ShowerHead,
  Car,
  LifeBuoy,
  Tv,
  Flame,
  CheckCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { amenities } from '../data';

export default function Amenities() {
  // Map string name to Lucide components for robust rendering
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-gold-400" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-gold-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-gold-400" />;
      case 'WashingMachine':
        return <WashingMachine className="w-6 h-6 text-gold-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-gold-400" />;
      case 'Droplet':
        return <Droplet className="w-6 h-6 text-gold-400" />;
      case 'BedDouble':
        return <BedDouble className="w-6 h-6 text-gold-400" />;
      case 'ShowerHead':
        return <ShowerHead className="w-6 h-6 text-gold-400" />;
      case 'Car':
        return <Car className="w-6 h-6 text-gold-400" />;
      case 'LifeBuoy':
        return <LifeBuoy className="w-6 h-6 text-gold-400" />;
      case 'Tv':
        return <Tv className="w-6 h-6 text-gold-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-gold-400" />;
      default:
        return <CheckCircle className="w-6 h-6 text-gold-400" />;
    }
  };

  return (
    <section id="amenities" className="py-24 bg-navy-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center md:max-w-3xl md:mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider font-mono text-gold-400 block mb-2">Amenities</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Designed for <span className="italic text-gold-300">Modern Lifestyles</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-6" />
          <p className="mt-6 text-slate-400 font-light text-sm sm:text-base">
            Enjoy premium conveniences fully integrated into your monthly tariff. We handle the chores so you can focus on building your career and legacy.
          </p>
        </div>

        {/* Categories of Amenities (Core Amenities vs Comfort & Utilities) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Category: 1. Core Services */}
          <div className="bg-navy-900/40 border border-white/5 p-8 rounded-2xl">
            <h3 className="font-serif text-xl font-semibold text-gold-200 border-b border-white/5 pb-4 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400"></span>
              Core Comfort & Safety
            </h3>
            <div className="space-y-6">
              {amenities
                .filter((a) => a.category === 'core')
                .map((amenity, idx) => (
                  <div key={idx} className="flex gap-4 items-center group">
                    <div className="bg-navy-900 border border-gold-400/20 p-3 rounded-xl group-hover:bg-gold-400 group-hover:text-navy-950 transition-all duration-300 transform group-hover:scale-105">
                      {getIcon(amenity.iconName)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-slate-100 group-hover:text-gold-200 transition-colors">
                        {amenity.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">Continuous & Reliable</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Category: 2. Shared Communes & Living */}
          <div className="bg-navy-900/40 border border-white/5 p-8 rounded-2xl lg:translate-y-4">
            <h3 className="font-serif text-xl font-semibold text-gold-200 border-b border-white/5 pb-4 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400"></span>
              Luxury Furnishings
            </h3>
            <div className="space-y-6">
              {amenities
                .filter((a) => a.category === 'comfort')
                .map((amenity, idx) => (
                  <div key={idx} className="flex gap-4 items-center group">
                    <div className="bg-navy-900 border border-gold-400/20 p-3 rounded-xl group-hover:bg-gold-400 group-hover:text-navy-950 transition-all duration-300 transform group-hover:scale-105">
                      {getIcon(amenity.iconName)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-slate-100 group-hover:text-gold-200 transition-colors">
                        {amenity.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">High Comfort Standard</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Category: 3. Daily Utilities */}
          <div className="bg-navy-900/40 border border-white/5 p-8 rounded-2xl">
            <h3 className="font-serif text-xl font-semibold text-gold-200 border-b border-white/5 pb-4 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400"></span>
              Utilities & Conveniences
            </h3>
            <div className="space-y-6">
              {amenities
                .filter((a) => a.category === 'utilities')
                .map((amenity, idx) => (
                  <div key={idx} className="flex gap-4 items-center group">
                    <div className="bg-navy-900 border border-gold-400/20 p-3 rounded-xl group-hover:bg-gold-400 group-hover:text-navy-950 transition-all duration-300 transform group-hover:scale-105">
                      {getIcon(amenity.iconName)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-slate-100 group-hover:text-gold-200 transition-colors">
                        {amenity.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">Managed Everyday Use</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
