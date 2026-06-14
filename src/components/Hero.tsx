import { Calendar, PhoneCall, ChevronRight, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { motion } from 'motion/react';
import heroImage from '../assets/images/lotus_hero_1781425634384.jpg';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-navy-950 overflow-hidden pt-16">
      {/* Background Image with Dark Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Lotus Stay Bliss Premium Co-Living Room"
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[pulse_6s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to blend image cleanly with layout */}
        <div className="absolute inset-0 bg-radial-at-c from-navy-900/30 via-navy-950/80 to-navy-950" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-navy-950/80 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center text-center">
        {/* Pill Rating tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-navy-900/90 border border-gold-400/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm"
        >
          <div className="flex text-gold-400">
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
          </div>
          <span className="text-xs font-mono font-medium tracking-wider text-gold-200">
            PREMIUM CO-LIVING • whitefield(Brookfield), BENGALURU
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-5xl leading-[1.1]"
        >
          Premium Co-Living Spaces in <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-400">whitefield(Brookfield), Bengaluru</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mt-6 font-light leading-relaxed"
        >
          Affordable, Comfortable & Fully Furnished PG Accommodation for Students and Working Professionals. Fully Serviced with Modern Amenities.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
        >
          <button
            onClick={() => onScrollTo('contact')}
            className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-navy-950 font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-gold-500/20 glow-on-hover cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-navy-950 stroke-[2.5]" />
            <span>Book a Visit</span>
            <ChevronRight className="w-4 h-4 text-navy-950 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onScrollTo('contact')}
            className="flex items-center justify-center gap-2 border-2 border-slate-300/30 bg-navy-900/60 backdrop-blur-sm hover:border-gold-400 hover:bg-navy-905 text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-gold-400" />
            <span>Contact Us</span>
          </button>
        </motion.div>

        {/* Quick Highlights Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 mt-16 max-w-4xl border-t border-white/5 pt-10"
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1">
            <div className="flex items-center gap-2 text-gold-400 mb-1">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-semibold text-white text-sm">CCTV Secured</span>
            </div>
            <p className="text-xs text-slate-400 font-sans">24/7 continuous smart cloud surveillance</p>
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1">
            <div className="flex items-center gap-2 text-gold-400 mb-1">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold text-white text-sm">Fully Furnished</span>
            </div>
            <p className="text-xs text-slate-400 font-sans">Design furniture & comfortable orthopedics</p>
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-1">
            <div className="flex items-center gap-2 text-gold-400 mb-1">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-semibold text-white text-sm">Perfect Location</span>
            </div>
            <p className="text-xs text-slate-400 font-sans">Right next to IT hubs, tech parks & metro</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical lines on sides */}
      <div className="hidden xl:block absolute left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent z-10" />
      <div className="hidden xl:block absolute right-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent z-10" />
    </section>
  );
}
