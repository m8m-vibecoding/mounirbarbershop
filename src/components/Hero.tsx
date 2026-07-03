import { motion } from 'motion/react';
import { Calendar, ArrowDown } from 'lucide-react';
import { Language, BOOKING_URL, GENERAL_TRANSLATIONS } from '../translations';

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
        {/* Subtle radial and linear dark gradients to enforce #0F0F0F visual flow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/90 via-[#0F0F0F]/65 to-[#0F0F0F]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-display text-3xl sm:text-5xl lg:text-6xl text-white-off tracking-tight leading-[1.15] max-w-[900px] mb-6 font-bold"
        >
          Mounir Barbershop,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-warm via-beige-light to-gold-dark block sm:inline">
            {currentLang === 'FR' ? 'votre coiffeur homme et femme à Bruxelles' : currentLang === 'EN' ? 'your men’s and women’s hair salon' : 'jouw kapsalon voor mannen en vrouwen'}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-white-off/80 text-sm sm:text-lg lg:text-xl font-sans leading-relaxed max-w-[720px] mb-10"
        >
          {t.heroSubtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Main Booking Button */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-dark to-gold-warm hover:from-gold-warm hover:to-gold-dark text-black rounded font-display text-xs sm:text-sm uppercase tracking-[0.2em] font-bold transition-all duration-300 transform active:scale-95 shadow-xl shadow-gold-warm/15 flex items-center justify-center space-x-3"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.heroCtaMain}</span>
          </a>

          {/* Secondary View Services Button */}
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-brown-dark/35 border border-brown-leather hover:border-gold-warm text-white-off rounded font-display text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>{t.heroCtaSub}</span>
            <ArrowDown className="w-4 h-4 text-gold-warm animate-bounce" />
          </a>
        </motion.div>
      </div>

      {/* Elegant Golden Bottom Edge Ornament */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-dark/40 to-transparent" />
    </section>
  );
}
