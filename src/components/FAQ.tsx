import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQs } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq1'); // Default open first item config

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-navy-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center md:max-w-3xl md:mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider font-mono text-gold-400 block mb-2">Have Questions?</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Frequently Asked <span className="italic text-gold-300">Inquiries</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-6" />
          <p className="mt-6 text-slate-400 font-light text-sm sm:text-base">
            Got queries about security, policies, deposits, or utility rules? We've compiled detailed explanations of everything you might want to ask.
          </p>
        </div>

        {/* Dynamic Accordion list */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQs.map((faq) => {
            const isOpen = faq.id === openId;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-gold-500 bg-navy-900/80 shadow-lg'
                    : 'border-white/10 bg-navy-900/20 hover:border-white/20'
                }`}
              >
                {/* Header CTA Trigger */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className={`w-5 h-5 mt-0.5 shrink-0 transition-colors ${isOpen ? 'text-gold-400' : 'text-slate-400'}`} />
                    <span className={`font-serif text-sm sm:text-base md:text-lg font-semibold tracking-tight transition-colors ${
                      isOpen ? 'text-gold-300' : 'text-slate-200'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <span className={`p-1.5 rounded-lg border transition-all ${
                    isOpen ? 'bg-gold-500/10 border-gold-400 text-gold-400' : 'bg-navy-950 border-white/5 text-slate-400'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {/* Animated Body panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 border-t border-white/5 font-sans font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Call to action at bottom */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-xs sm:text-sm font-light">
            Still have an unanswered question? Feel free to ask during your booking enquiry or call us directly!
          </p>
        </div>
      </div>
    </section>
  );
}
