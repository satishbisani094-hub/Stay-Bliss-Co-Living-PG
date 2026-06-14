import { useState, useEffect, FormEvent } from 'react';
import { Phone, Mail, Clock, MessageSquare, Info, ShieldAlert, CheckCircle2, BookmarkCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Inquiry } from '../types';

interface ContactProps {
  selectedRoomType: string;
}

export default function Contact({ selectedRoomType }: ContactProps) {
  // Local states for inputs
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pref, setPref] = useState(selectedRoomType || '2 Sharing');
  const [msg, setMsg] = useState('');

  // Submit states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Saved bookings collection
  const [savedInquiries, setSavedInquiries] = useState<Inquiry[]>([]);
  const [showInquiryHub, setShowInquiryHub] = useState(false);

  // Sync preference if chosen from rooms grid
  useEffect(() => {
    if (selectedRoomType) {
      setPref(selectedRoomType);
    }
  }, [selectedRoomType]);

  // Load inquiries from localStorage
  useEffect(() => {
    const list = localStorage.getItem('lotus_inquiries');
    if (list) {
      try {
        setSavedInquiries(JSON.parse(list));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Field validation
    if (!name.trim()) return setErrorMessage('Please present your full name.');
    if (!phone.trim()) return setErrorMessage('Please present your active mobile phone number.');
    if (phone.length < 10) return setErrorMessage('Phone number should be at least 10 digits.');
    if (!email.trim() || !email.includes('@')) return setErrorMessage('Please present a valid email address.');

    setIsSubmitting(true);

    // Simulate database lookup/write
    setTimeout(() => {
      const newInquiry: Inquiry = {
        id: 'inq-' + Date.now(),
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        roomPreference: pref,
        message: msg.trim(),
        status: 'new',
        submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      };

      const updatedList = [newInquiry, ...savedInquiries];
      setSavedInquiries(updatedList);
      localStorage.setItem('lotus_inquiries', JSON.stringify(updatedList));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Clear fields
      setName('');
      setPhone('');
      setEmail('');
      setMsg('');
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-navy-950 text-white relative">
      {/* Decorative glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-navy-800/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Title */}
        <div className="text-center md:max-w-3xl md:mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider font-mono text-gold-400 block mb-2">Reservations & Inquiry</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Schedule a Visit & <span className="italic text-gold-300">Book Premium Stay</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-6" />
          <p className="mt-6 text-slate-400 font-light text-sm sm:text-base">
            Ready to experience Lotus Stay Bliss? Submit an inquiry, call us directly, or drop a WhatsApp message to lock in early-bird prices.
          </p>
        </div>

        {/* Form and Contact columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left column: Direct Contacts & details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-gold-100">Connect Instantly</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 font-light leading-relaxed">
                Skip the lines! Speak directly with our resident property manager to set up a private room walk-through. Same-day tours are available upon advanced notice.
              </p>
            </div>

            {/* Quick CTAs cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Call Now */}
              <a
                href="tel:+18501866909"
                className="p-5 bg-navy-900 border border-white/5 hover:border-gold-500/40 rounded-2xl flex flex-col items-center text-center gap-3 hover:translate-y-[-2px] transition-all duration-300 group"
              >
                <div className="bg-gold-500/10 p-3 rounded-full text-gold-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm">Call Now</h4>
                  <p className="text-[10px] text-slate-400 mt-1 font-mono tracking-tight">+1 850 186 6909</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/18501866909?text=Hi%20Lotus%20Stay%20Bliss%20Co-Living,%20I'm%20interested%20in%20inquiring%20about%20a%20coliving%20room."
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-navy-900 border border-white/5 hover:border-emerald-500/40 rounded-2xl flex flex-col items-center text-center gap-3 hover:translate-y-[-2px] transition-all duration-300 group"
              >
                <div className="bg-emerald-500/10 p-3 rounded-full text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm">WhatsApp Inquiry</h4>
                  <p className="text-[10px] text-slate-400 mt-1 font-sans">Chat instantly on mobile</p>
                </div>
              </a>
            </div>

            {/* Timings, Email, Rules */}
            <div className="space-y-4 p-6 bg-navy-900/40 border border-white/5 rounded-2xl">
              <div className="flex gap-4 items-start text-xs sm:text-sm">
                <Clock className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-200">Tour Hours</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">
                    Monday to Sunday: 9:00 AM - 8:00 PM (IST)
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start text-xs sm:text-sm">
                <Mail className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-200">Email Inquiries</h4>
                  <p className="text-xs text-slate-400 mt-1 font-mono">
                    reservations@lotusstaybliss.com
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start text-xs sm:text-sm">
                <Info className="w-5 h-5 text-gold-400 shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    * Booking reservations depend on verification checklists. Security deposits can be processed securely in person, via bank deposit, or standard scanned UPI codes.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick check to view existing submissions */}
            {savedInquiries.length > 0 && (
              <button
                onClick={() => setShowInquiryHub(!showInquiryHub)}
                className="w-full py-2.5 px-4 rounded-xl border border-gold-400/20 text-gold-400 font-semibold text-xs hover:border-gold-400 hover:bg-gold-500/5 transition-all uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <BookmarkCheck className="w-4 h-4" />
                {showInquiryHub ? 'Hide My Submissions' : `View My Submissions (${savedInquiries.length})`}
              </button>
            )}
          </div>

          {/* Right column: Lead Form Container */}
          <div className="lg:col-span-7">
            <div className="relative border border-gold-500/20 rounded-2xl bg-navy-900/80 p-8 shadow-2xl backdrop-blur-sm">
              
              {/* Form title */}
              <div className="mb-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold">Secure Your Spot</h3>
                <p className="text-xs text-slate-400 mt-1">Please fill the form below and look out for SMS or Email responses.</p>
              </div>

              {/* Success / Form display */}
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-8 text-center"
                  >
                    <div className="bg-gold-500/10 text-gold-400 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-gold-400/20">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-gold-300">Inquiry Received!</h4>
                    <p className="text-slate-300 text-xs sm:text-sm mt-3 max-w-md mx-auto leading-relaxed font-light">
                      Thank you for choosing Lotus Stay Bliss. Our resident manager has received your room preference of <strong>{pref}</strong>. We will contact you at your phone number or email within 2 hours.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-6 font-mono text-xs uppercase tracking-wider text-gold-400 border-b border-gold-400/30 pb-0.5 hover:text-gold-200 transition-all font-semibold"
                    >
                      Submit Another Booking Request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                    {/* Display Error if validations fail */}
                    {errorMessage && (
                      <div className="p-3 bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm rounded-xl flex items-center gap-2 font-medium">
                        <ShieldAlert className="w-4 h-4 shrink-0 text-rose-400" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Inputs fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="form_name" className="block text-[11px] uppercase font-mono tracking-wider text-slate-400 mb-1.5 font-medium">
                          Full Name *
                        </label>
                        <input
                          id="form_name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Satish Prasad"
                          className="w-full bg-navy-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white focus:border-gold-400 focus:outline-none transition-all placeholder:text-slate-600"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="form_phone" className="block text-[11px] uppercase font-mono tracking-wider text-slate-400 mb-1.5 font-medium">
                          Phone Number *
                        </label>
                        <input
                          id="form_phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full bg-navy-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white focus:border-gold-400 focus:outline-none transition-all placeholder:text-slate-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Email */}
                      <div>
                        <label htmlFor="form_email" className="block text-[11px] uppercase font-mono tracking-wider text-slate-400 mb-1.5 font-medium">
                          Email Address *
                        </label>
                        <input
                          id="form_email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. satish@company.com"
                          className="w-full bg-navy-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white focus:border-gold-400 focus:outline-none transition-all placeholder:text-slate-600"
                        />
                      </div>

                      {/* Room preference dropdown */}
                      <div>
                        <label htmlFor="form_room_pref" className="block text-[11px] uppercase font-mono tracking-wider text-slate-400 mb-1.5 font-medium">
                          Room Sharing Preference
                        </label>
                        <select
                          id="form_room_pref"
                          value={pref}
                          onChange={(e) => setPref(e.target.value)}
                          className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-[13px] text-xs sm:text-sm text-white focus:border-gold-400 focus:outline-none transition-all cursor-pointer"
                        >
                          <option value="1 Sharing">1 Sharing (₹19,000/mo)</option>
                          <option value="2 Sharing">2 Sharing (₹9,500/mo)</option>
                          <option value="3 Sharing">3 Sharing (₹7,500/mo)</option>
                          <option value="4 Sharing">4 Sharing (₹6,500/mo)</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="form_message" className="block text-[11px] uppercase font-mono tracking-wider text-slate-400 mb-1.5 font-medium">
                        Message or Special Requests (Optional)
                      </label>
                      <textarea
                        id="form_message"
                        rows={3}
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        placeholder="e.g. I would like a corner room with high levels of natural sunlight and a quiet environment for working from home."
                        className="w-full bg-navy-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white focus:border-gold-400 focus:outline-none transition-all placeholder:text-slate-600 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-navy-950 font-bold py-4 px-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl hover:shadow-gold-500/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-55"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-navy-950/50 border-t-navy-950 rounded-full animate-spin" />
                          <span>Processing reservation...</span>
                        </>
                      ) : (
                        <span>Submit Booking & Scheduling</span>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Saved Inquiries Hub (Local storage Manager block for reviewers) */}
        <AnimatePresence>
          {showInquiryHub && savedInquiries.length > 0 && (
            <motion.div
              layout
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-12 p-6 sm:p-8 bg-navy-900/60 border border-gold-400/20 rounded-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-gold-300">My Saved Room Inquiries</h3>
                  <p className="text-[11px] text-slate-400">Reviewers and visitors can track simulated submissions saved locally.</p>
                </div>
                <button
                  onClick={() => {
                    localStorage.removeItem('lotus_inquiries');
                    setSavedInquiries([]);
                    setShowInquiryHub(false);
                  }}
                  className="text-[11px] font-mono hover:text-rose-400 text-slate-400 border border-white/5 bg-navy-950 px-3 py-1.5 rounded transition"
                >
                  Clear History
                </button>
              </div>

              {/* List */}
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {savedInquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="p-4 bg-navy-950/80 border border-white/5 rounded-xl flex flex-col sm:flex-row justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-bold text-white text-sm">{inq.name}</span>
                        <span className="text-[10px] bg-gold-400 text-navy-950 px-2 py-0.5 rounded font-bold font-mono tracking-wide">
                          {inq.roomPreference}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-400 font-sans">
                        <p>Phone: <span className="text-white font-mono">{inq.phone}</span></p>
                        <p>Email: <span className="text-white font-mono">{inq.email}</span></p>
                      </div>
                      {inq.message && (
                        <p className="text-xs text-slate-300 italic mt-2 border-l border-gold-400/40 pl-3">
                          "{inq.message}"
                        </p>
                      )}
                    </div>
                    <div className="sm:text-right shrink-0 flex flex-col items-start sm:items-end justify-between gap-2">
                      <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-gold-400 bg-gold-400/5 px-2 py-1 rounded">
                        ● Simulated Active Call
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {inq.submittedAt}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
