import { motion } from 'motion/react';
import { Sparkles, MapPin } from 'lucide-react';
import { Language, LOGO_URL, GENERAL_TRANSLATIONS } from '../translations';

interface AboutProps {
  currentLang: Language;
}

export default function About({ currentLang }: AboutProps) {
  const t = GENERAL_TRANSLATIONS[currentLang];

  return (
    <section
      id="about"
      className="relative bg-[#0F0F0F] py-24 lg:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden border-b border-brown-leather/20"
    >
      {/* Decorative vector overlays */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] rounded-full bg-gold-dark/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] rounded-full bg-brown-leather/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Visual Barber Shop / Glowing Logo */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Soft background golden glow */}
            <div className="absolute w-[80%] h-[80%] bg-gold-dark/10 rounded-full blur-[80px]" />
            
            {/* Frame and image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[400px] aspect-[4/5] rounded bg-black border border-brown-leather/30 p-3 shadow-2xl group overflow-hidden"
            >
              {/* Inner vintage frame */}
              <div className="absolute inset-4 border border-gold-dark/20 pointer-events-none z-10" />
              
              {/* Background dark vintage barber chair photo */}
              <img
                src="https://res.cloudinary.com/dj8vbaevh/image/upload/v1783048341/Mounir_Barbershop_style_y6nm09.png"
                alt="Mounir Barbershop Grooming Detail"
                className="w-full h-full object-cover grayscale opacity-45 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Central Floating Logo with Premium Golden Radial Glow */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6 bg-gradient-to-t from-black via-black/40 to-transparent">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-black/80 backdrop-blur-md border border-gold-dark p-3 shadow-[0_0_30px_rgba(168,121,50,0.4)] flex items-center justify-center">
                  <img
                    src={LOGO_URL}
                    alt="Mounir Barbershop Logo Centered"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(196,154,74,0.4)]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-4 text-center">
                  <span className="font-display text-xs text-gold-warm tracking-[0.25em] block uppercase font-bold">
                    Est. 2026
                  </span>
                  <span className="text-[10px] text-white-off/50 font-mono tracking-widest block mt-1 uppercase">
                    Av. de la Reine, 201
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Text Presentation */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2 text-gold-dark mb-4"
            >
              <Sparkles className="w-4 h-4 text-gold-warm" />
              <span className="font-mono text-xs tracking-[0.25em] uppercase font-bold">
                {t.aboutLabel}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-display text-2xl sm:text-3xl lg:text-4xl text-white-off tracking-tight leading-snug mb-6 font-bold"
            >
              {t.aboutTitle}
            </motion.h2>

            {/* Decorative divider */}
            <div className="w-16 h-[2px] bg-gold-dark mb-8" />

            {/* About text blocks */}
            <div className="space-y-6 text-white-off/80 text-sm sm:text-base leading-relaxed max-w-[640px]">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {t.aboutText1}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="border-l-2 border-gold-dark pl-4 italic text-white-off/90"
              >
                {t.aboutText2}
              </motion.p>
            </div>

            {/* Local SEO Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[580px]"
            >
              <div className="flex items-start space-x-3 p-4 rounded bg-brown-dark/20 border border-brown-leather/25">
                <MapPin className="w-5 h-5 text-gold-warm shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-xs text-gold-warm tracking-wider uppercase font-semibold mb-1">
                    {currentLang === 'FR' ? 'Accès direct' : currentLang === 'EN' ? 'Direct Access' : 'Directe toegang'}
                  </h4>
                  <p className="text-xs text-white-off/60">
                    Av. de la Reine 201, 1000 Bruxelles.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded bg-brown-dark/20 border border-brown-leather/25">
                <div className="flex flex-col items-center justify-center bg-gold-dark text-black rounded p-1 w-5 h-5 font-mono text-[9px] font-bold shrink-0 mt-0.5">
                  ★
                </div>
                <div>
                  <h4 className="font-display text-xs text-gold-warm tracking-wider uppercase font-semibold mb-1">
                    {currentLang === 'FR' ? 'Réservation garantie' : currentLang === 'EN' ? 'Guaranteed Booking' : 'Gegarandeerde boeking'}
                  </h4>
                  <p className="text-xs text-white-off/60">
                    {currentLang === 'FR' ? 'Créneau bloqué instantanément.' : currentLang === 'EN' ? 'Instant time slot confirmation.' : 'Onmiddellijke tijdslotbevestiging.'}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
