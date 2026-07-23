import { motion } from 'motion/react';
import { CalendarDays, ShieldCheck } from 'lucide-react';
import { Language, BOOKING_URL, LOGO_URL, GENERAL_TRANSLATIONS } from '../translations';

interface BookingProps {
  currentLang: Language;
}

export default function Booking({ currentLang }: BookingProps) {
  const t = GENERAL_TRANSLATIONS[currentLang];

  return (
    <section
      id="booking"
      className="bg-[#0F0F0F] py-24 lg:py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden border-b border-brown-leather/20"
    >
      {/* Dynamic ambient dark-gold blur lights in corners */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-dark/5 blur-[150px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto">
        
        {/* Central High-End Conversion Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-[900px] mx-auto bg-gradient-to-b from-[#161616] to-[#0A0A0A] border border-gold-dark/40 rounded p-8 sm:p-12 lg:p-16 text-center shadow-2xl overflow-hidden group"
        >
          {/* Subtle gold corner decorations inside card */}
          <div className="absolute top-0 left-0 w-8 h-8 pointer-events-none">
            <div className="absolute top-4 left-4 w-4 h-[1px] bg-gold-dark/30" />
            <div className="absolute top-4 left-4 w-[1px] h-4 bg-gold-dark/30" />
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none">
            <div className="absolute bottom-4 right-4 w-4 h-[1px] bg-gold-dark/30" />
            <div className="absolute bottom-4 right-4 w-[1px] h-4 bg-gold-dark/30" />
          </div>

          {/* Logo Watermark Emblem */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] w-96 h-96 pointer-events-none group-hover:opacity-[0.03] transition-opacity duration-700">
            <img
              src={LOGO_URL}
              alt="MOUNIR BARBERSHOP Watermark"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Upper Mini Logo */}
          <div className="relative z-10 flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-black/60 border border-gold-dark/30 p-2 shadow-lg">
              <img
                src={LOGO_URL}
                alt="MOUNIR BARBERSHOP Mini Seal"
                className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(196,154,74,0.15)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Core Text Info */}
          <div className="relative z-10 max-w-[650px] mx-auto mb-10">
            <h2 className="font-display text-2xl sm:text-3.5xl lg:text-4xl text-white-off tracking-tight font-bold mb-6">
              {t.bookingTitle}
            </h2>
            <p className="text-white-off/80 text-sm sm:text-base leading-relaxed">
              {t.bookingText}
            </p>
          </div>

          {/* Prime Clickable Button */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-gold-dark to-gold-warm hover:from-gold-warm hover:to-gold-dark text-black rounded font-display text-xs sm:text-sm uppercase tracking-[0.25em] font-bold transition-all duration-300 transform hover:scale-[1.03] active:scale-95 shadow-2xl shadow-gold-warm/25 flex items-center justify-center space-x-3"
            >
              <CalendarDays className="w-5 h-5" />
              <span>{t.bookingBtn}</span>
            </a>

            {/* Quick Microcopy Trust line */}
            <div className="flex items-center space-x-2 mt-6 text-white-off/50">
              <ShieldCheck className="w-4 h-4 text-gold-warm" />
              <p className="text-xs font-mono tracking-wider font-medium">
                {t.bookingMicro}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
