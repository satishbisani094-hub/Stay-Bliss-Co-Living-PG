import { CheckCircle2, Award, Users, Compass, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';
import commonLoungeImage from '../assets/images/lotus_common_1781425666970.jpg';

export default function About() {
  const coreStrengths = [
    { title: 'Prime Location in whitefield(Brookfield)', desc: 'Easy walking distance to key corporate workspaces and tech clusters.' },
    { title: 'Fully Furnished Premium Rooms', desc: 'Hotel-quality beds, medical-grade mattresses, and study setups.' },
    { title: 'Enterprise High-Speed WiFi', desc: 'High bandwidth connections distributed across high-end floor routers.' },
    { title: 'Frequent Housekeeping Services', desc: 'Always clean, sanitized rooms and hygienic common restrooms.' },
    { title: 'CCTV Secure Campus', desc: 'Fully monitored common spaces, gates, and lobbies with digital logs.' },
    { title: '100% Electrical Power Backup', desc: 'Seamless transition during minor or major electrical grids down times.' },
    { title: 'Full laundry & Ironing Facilities', desc: 'Commercial automatic machinery setups for prompt laundry tasks.' },
    { title: 'Aesthetic Community Living', desc: 'Interact with peers, host work sessions, and grow your networking.' },
  ];

  return (
    <section id="about" className="py-24 bg-navy-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center md:max-w-3xl md:mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider font-mono text-gold-400 block mb-2">About Our Property</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Why Choose <span className="italic block mt-1 text-gold-300">Lotus Stay Bliss?</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-6" />
          <p className="mt-6 text-slate-400 font-light text-sm sm:text-base">
            We provide much more than standard PG lodging. We design an experience representing ease, community support, and executive-level comfort tailored specifically for career starters, tech operators, and ambitious students in Bengaluru.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Stats */}
          <div className="lg:col-span-5 relative">
            {/* Soft gold decorative aura behind image */}
            <div className="absolute -top-4 -left-4 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-navy-800/80 rounded-full blur-2xl" />

            {/* Main Picture Frame */}
            <div className="relative border border-gold-400/20 rounded-2xl overflow-hidden shadow-2xl bg-navy-900 group">
              <img
                src={commonLoungeImage}
                alt="Lotus Stay Bliss Social Common Lounge"
                className="w-full aspect-[4/3] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

              {/* Floating banner on top of photo */}
              <div className="absolute bottom-4 left-4 right-4 bg-navy-900/95 backdrop-blur-md border border-gold-400/30 p-4 rounded-xl shadow-lg flex items-center gap-3">
                <div className="bg-gold-400/10 p-2 rounded-lg text-gold-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Rich Community Living</h4>
                  <p className="text-xs text-slate-400">Shared lounges, study workspaces & like-minded peers.</p>
                </div>
              </div>
            </div>

            {/* Overlap Stats Bag */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-gold-400 to-gold-600 font-bold text-navy-950 px-5 py-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform rotate-3">
              <span className="text-3xl font-extrabold tracking-tight">2+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-navy-900 mt-0.5">Years Experience</span>
            </div>
          </div>

          {/* Right Column: Features List */}
          <div className="lg:col-span-7">
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold mb-8 text-gold-100">
              Co-Living Crafted for Professional Excellence
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {coreStrengths.map((strength, index) => (
                <div key={index} className="flex gap-3 items-start group">
                  <div className="text-gold-400 mt-0.5 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200 text-sm sm:text-base group-hover:text-gold-300 transition-colors">
                      {strength.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {strength.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom mini banner */}
            <div className="mt-10 p-5 bg-navy-900/40 border border-white/5 rounded-xl flex items-center gap-4">
              <div className="bg-gold-500/10 p-2 rounded-full text-gold-400">
                <Compass className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Located near <strong className="text-white">ITPL and major schools on Narayana School Road</strong>, commuting times are minimal, giving you more time to study, work, or relax.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
