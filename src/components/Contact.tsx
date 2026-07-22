import { motion } from 'motion/react';
import { MapPin, Phone, Calendar, Compass, Clock, Check } from 'lucide-react';
import { Language, BOOKING_URL, DIRECTIONS_URL, GENERAL_TRANSLATIONS } from '../translations';

interface ContactProps {
  currentLang: Language;
}

export default function Contact({ currentLang }: ContactProps) {
  const t = GENERAL_TRANSLATIONS[currentLang];

  // Real Google Maps interactive embed link centered on Av. de la Reine 201, 1000 Bruxelles
  const mapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.5137574751717!2d4.3619932769931845!3d50.871616471673895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c3a647d4e5f9%3A0xe5f8db97a5b6f0!2sAv.%20de%20la%20Reine%20201%2C%201000%20Bruxelles%2C%20Belgium!5e0!3m2!1sen!2s!4v1783039152000!5m2!1sen!2s';

  return (
    <section
      id="contact"
      className="bg-[#000000] py-24 lg:py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden border-b border-brown-leather/20"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Contact and Location Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Section Tag */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-2 text-gold-warm mb-4"
              >
                <Compass className="w-4 h-4 text-gold-warm" />
                <span className="font-mono text-xs tracking-[0.25em] uppercase font-bold">
                  LOCALISATION
                </span>
              </motion.div>

              {/* Title & Subtitle */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="font-display text-3xl sm:text-4xl text-white-off tracking-tight font-bold mb-6"
              >
                {t.contactTitle}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-white-off/70 text-sm leading-relaxed mb-10 max-w-[450px]"
              >
                {t.contactSubtitle}
              </motion.p>
            </div>

            {/* List of Information Fields */}
            <div className="space-y-6 mb-10">
              {/* Address Row */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-start space-x-4 p-5 rounded bg-[#161616] border border-brown-leather/30"
              >
                <div className="p-3 bg-brown-dark/40 border border-gold-dark/30 rounded text-gold-warm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-xs text-gold-warm tracking-wider uppercase font-semibold mb-1.5">
                    {t.contactAddrLabel}
                  </h4>
                  <p className="text-white-off/90 text-sm font-semibold">
                    Av. de la Reine 201
                  </p>
                  <p className="text-white-off/60 text-xs mt-0.5">
                    1000 Bruxelles, Belgium
                  </p>
                </div>
              </motion.div>

              {/* Activity Row */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-start space-x-4 p-5 rounded bg-[#161616] border border-brown-leather/30"
              >
                <div className="p-3 bg-brown-dark/40 border border-gold-dark/30 rounded text-gold-warm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-xs text-gold-warm tracking-wider uppercase font-semibold mb-1.5">
                    {t.contactActLabel}
                  </h4>
                  <p className="text-white-off/90 text-sm font-semibold leading-snug">
                    {t.contactActText}
                  </p>
                  <p className="text-white-off/50 text-[11px] mt-1 font-mono uppercase tracking-widest flex items-center gap-1">
                    <Check className="w-3 h-3 text-gold-warm" />
                    {currentLang === 'FR' ? 'Hommes & garçons' : currentLang === 'EN' ? 'Men & boys' : 'Mannen & jongens'}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Calendar CTA Column Link */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-brown-dark hover:bg-gold-dark border border-gold-dark hover:border-gold-warm rounded text-white-off hover:text-black font-display text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center space-x-2.5"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.contactBookBtn}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Google Maps Iframe & Navigate Button */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[320px] sm:h-[400px] lg:h-full rounded border border-brown-leather/40 overflow-hidden bg-black flex flex-col"
            >
              {/* Maps Interactive iFrame */}
              <iframe
                title="Google Maps Mounir Barbershop location"
                src={mapsEmbedUrl}
                className="w-full h-full border-none filter invert-[90%] hue-rotate-[180deg] saturate-[50%] contrast-[110%] opacity-80"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Maps Open Button */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-black/85 backdrop-blur-md border border-gold-dark/40 text-gold-warm hover:text-black hover:bg-gold-warm rounded text-xs font-mono uppercase tracking-widest font-bold transition-all duration-300 flex items-center space-x-2"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>{t.contactMapBtn}</span>
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
