import { Check, Flame, HelpCircle, Users2, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { roomOptions } from '../data';
import privateRoomImg from '../assets/images/lotus_private_1781425650993.jpg';
import sharedRoomImg from '../assets/images/lotus_common_1781425666970.jpg';
import tripleRoomImg from '../assets/images/lotus_triple_sharing.jpg';

interface RoomsProps {
  onSelectOption: (sharingType: string) => void;
}

export default function Rooms({ onSelectOption }: RoomsProps) {
  // Map images to the options for visual cards
  const getImageForOption = (id: string) => {
    switch (id) {
      case '1-sharing':
        return privateRoomImg;
      case '3-sharing':
        return tripleRoomImg;
      default:
        return sharedRoomImg;
    }
  };

  return (
    <section id="rooms" className="py-24 bg-navy-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center md:max-w-3xl md:mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider font-mono text-gold-400 block mb-2">Accommodations</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Our Rooms & <span className="italic text-gold-300">Pricing Tiers</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-6" />
          <p className="mt-6 text-slate-400 font-light text-sm sm:text-base">
            Find the perfect matching room configuration tailored to your budget and privacy preferences. No hidden charges—what you see is what you pay.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roomOptions.map((room, idx) => {
            const isPopular = room.id === '2-sharing'; // 2 Sharing is usually the sweet spot for PG co-living
            return (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-300 group hover:-translate-y-2 ${
                  isPopular
                    ? 'border-gold-500 bg-navy-900/90 shadow-[0_20px_40px_rgba(223,164,55,0.1)]'
                    : 'border-white/10 bg-navy-900/40 hover:border-gold-400/30'
                }`}
              >
                {/* Popular Tag */}
                {isPopular && (
                  <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-bold px-3 py-1 text-[10px] uppercase tracking-wider rounded-full flex items-center gap-1 shadow-lg">
                    <Flame className="w-3.5 h-3.5 fill-current" />
                    <span>Best Value</span>
                  </div>
                )}

                {/* Card Top Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={getImageForOption(room.id)}
                    alt={room.sharingType}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent" />
                </div>

                {/* Card Details */}
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs uppercase font-mono tracking-wider text-gold-400/80 mb-1 font-medium">
                    {room.highlight}
                  </span>
                  <h3 className="font-serif text-2xl font-bold mb-3">{room.sharingType} Accommodation</h3>

                  {/* Pricing block */}
                  <div className="mb-6 flex items-baseline">
                    <span className="font-serif text-3xl font-extrabold text-white">
                      ₹{room.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-slate-400 text-xs ml-1 font-sans">/ month {room.id !== '1-sharing' ? 'per person' : ''}</span>
                  </div>

                  {/* Separator */}
                  <div className="border-t border-white/5 my-4" />

                  {/* Highlights Checklist */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {room.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-slate-300">
                        <Check className="w-4 h-4 text-gold-400 mr-2 shrink-0 stroke-[2.5]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Inquiry CTA */}
                  <button
                    onClick={() => onSelectOption(room.sharingType)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-navy-950 font-extrabold shadow-md transform'
                        : 'border border-gold-400/30 hover:border-gold-400 text-gold-400 hover:bg-gold-400/5'
                    }`}
                  >
                    <span>Request to Book</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Security & Refund note */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto bg-navy-900/30 border border-white/5 py-4 px-6 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-3">
          <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0" />
          <p>
            * Prices are exclusive of utility-sharing. Fully refundable security deposit at exit. Contact us for custom room setups or corporate deals.
          </p>
        </div>
      </div>
    </section>
  );
}
