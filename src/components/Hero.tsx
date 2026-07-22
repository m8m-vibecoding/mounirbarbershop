import { motion } from 'motion/react';
import { Calendar, ArrowDown, MapPinned } from 'lucide-react';
import { Language, BOOKING_URL, DIRECTIONS_URL, GENERAL_TRANSLATIONS } from '../translations';

interface HeroProps {
  currentLang: Language;
}

export default function Hero({ currentLang }: HeroProps) {
  const t = GENERAL_TRANSLATIONS[currentLang];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-[100px] pb-16 overflow-hidden bg-black"
    >
      {/* Background Image with Dark Linear Overlays */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-45"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dj8vbaevh/image/upload/v1783043502/layered_cut_by_mounir_barbershop_mydyqs.png')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/90 via-[#0F0F0F]/65 to-[#0F0F0F]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-display text-3xl sm:text-5xl lg:text-6xl text-white-off tracking-tight leading-[1.15] max-w-[900px] mb-6 font-bold"
        >
          Mounir Barbershop,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-warm via-beige-light to-gold-dark block sm:inline">
            {currentLang === 'FR' ? 'votre coiffeur pour hommes et garçons à Bruxelles' : currentLang === 'EN' ? 'your barber for men and boys in Brussels' : 'jouw kapper voor mannen en jongens in Brussel'}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-white-off/80 text-sm sm:text-lg lg:text-xl font-sans leading-relaxed max-w-[720px] mb-6"
        >
          {t.heroSubtitle}
        </motion.p>

        <motion.a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.heroMapCta}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52, duration: 0.7 }}
          className="group relative w-full max-w-[520px] h-[112px] sm:h-[140px] lg:h-[150px] mb-7 overflow-hidden rounded-md border border-white/15 bg-white shadow-2xl shadow-black/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-warm"
        >
          <img
            src="/mounir-barbershop-map.png"
            alt={t.heroMapAlt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
          />
          <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-2 rounded bg-black/80 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-gold-warm backdrop-blur-sm transition-colors group-hover:bg-gold-warm group-hover:text-black">
            <MapPinned className="h-3.5 w-3.5" />
            {t.heroMapCta}
          </span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 w-full sm:w-auto"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="order-2 sm:order-1 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-dark to-gold-warm hover:from-gold-warm hover:to-gold-dark text-black rounded font-display text-xs sm:text-sm uppercase tracking-[0.2em] font-bold transition-all duration-300 transform active:scale-95 shadow-xl shadow-gold-warm/15 flex items-center justify-center space-x-3"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.heroCtaMain}</span>
          </a>

          <a
            href="#services"
            className="order-3 sm:order-2 w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-brown-dark/35 border border-brown-leather hover:border-gold-warm text-white-off rounded font-display text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>{t.heroCtaSub}</span>
            <ArrowDown className="w-4 h-4 text-gold-warm animate-bounce" />
          </a>

          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="order-1 sm:order-3 w-full sm:w-auto px-6 py-4 bg-black/35 hover:bg-white-off/10 border border-white-off/25 hover:border-gold-warm text-white-off rounded font-display text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <MapPinned className="w-4 h-4 text-gold-warm" />
            <span>{t.heroMapCta}</span>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-dark/40 to-transparent" />
    </section>
  );
}
