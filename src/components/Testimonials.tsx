import { Star, MessageSquareQuote } from 'lucide-react';
import { motion } from 'motion/react';
import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-navy-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center md:max-w-3xl md:mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider font-mono text-gold-400 block mb-2">Member Reviews</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Hear From Our <span className="italic text-gold-300">Satisfied Residents</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-6" />
          <p className="mt-6 text-slate-400 font-light text-sm sm:text-base">
            Read real feedback from working professionals and students who have upgraded their lifestyle with Lotus Stay Bliss Co-Living PG.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-navy-900/40 border border-white/5 p-8 rounded-2xl relative flex flex-col justify-between h-full hover:border-gold-405/20 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Decorative quotation mark icon in gold */}
              <div className="absolute top-6 right-8 text-gold-500/10 group-hover:text-gold-500/20 transition-colors">
                <MessageSquareQuote className="w-14 h-14" />
              </div>

              {/* Top part: Quotes & Star ratings */}
              <div className="relative z-10">
                <div className="flex text-gold-400 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, rIdx) => (
                    <Star key={rIdx} className="w-4 h-4 fill-current stroke-[2.5]" />
                  ))}
                </div>
                <p className="text-slate-300 font-light text-xs sm:text-sm leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Bottom part: User details */}
              <div className="flex items-center gap-4 relative z-10 border-t border-white/5 pt-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-400/20 shadow-md group-hover:border-gold-400 transition-colors"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif font-bold text-slate-100 text-sm sm:text-base leading-snug group-hover:text-gold-200 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] text-gold-400 uppercase font-mono tracking-wider mt-0.5 font-medium">
                    {testimonial.role}
                  </p>
                  {testimonial.companyOrSchool && (
                    <p className="text-[10px] text-slate-400 font-sans mt-0.5 font-light">
                      {testimonial.companyOrSchool}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global rating callout section */}
        <div className="mt-16 text-center border-t border-white/5 pt-12">
          <p className="text-slate-400 text-xs sm:text-sm uppercase tracking-wider font-mono">
            Average Resident rating of <strong className="text-gold-400">4.9 / 5.0</strong> based on verified reviews.
          </p>
        </div>
      </div>
    </section>
  );
}
