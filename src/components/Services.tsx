import { motion } from 'motion/react';
import { Scissors, Sparkles, Smile, Flame, Droplet, Layers, User, Palette, Zap } from 'lucide-react';
import { Language, BOOKING_URL, SERVICES_TRANSLATIONS, GENERAL_TRANSLATIONS } from '../translations';

interface ServicesProps {
  currentLang: Language;
}

export default function Services({ currentLang }: ServicesProps) {
  const services = SERVICES_TRANSLATIONS[currentLang];
  const t = GENERAL_TRANSLATIONS[currentLang];

  // Map icon identifiers to their respective Lucide React icon components
  const getIcon = (id: string) => {
    switch (id) {
      case 'cut-beard':
        return <Scissors className="w-5 h-5" />;
      case 'fade':
        return <Flame className="w-5 h-5" />;
      case 'kids':
        return <Smile className="w-5 h-5" />;
      case 'beard-only':
        return <Sparkles className="w-5 h-5" />;
      case 'contour':
        return <Zap className="w-5 h-5" />;
      case 'color':
        return <Palette className="w-5 h-5" />;
      case 'relax':
        return <Layers className="w-5 h-5" />;
      case 'shampoo':
        return <Droplet className="w-5 h-5" />;
      case 'women-boy':
        return <User className="w-5 h-5" />;
      default:
        return <Scissors className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="services"
      className="bg-[#000000] py-24 lg:py-32 px-6 sm:px-8 lg:px-12 relative border-b border-brown-leather/20"
    >
      {/* Decorative vertical background grids */}
      <div className="absolute inset-y-0 left-12 w-[1px] bg-brown-leather/5 hidden lg:block" />
      <div className="absolute inset-y-0 right-12 w-[1px] bg-brown-leather/5 hidden lg:block" />

      <div className="max-w-[1280px] mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-[800px] mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 text-gold-warm uppercase tracking-[0.2em] text-xs font-mono font-bold mb-4"
          >
            <span>✨</span>
            <span>MENU & SERVICES</span>
            <span>✨</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl text-white-off tracking-tight font-bold mb-6"
          >
            {t.servicesTitle}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white-off/70 text-sm sm:text-base leading-relaxed max-w-[580px] mx-auto"
          >
            {t.servicesSubtitle}
          </motion.p>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-[#161616] border border-brown-leather/40 rounded p-6 lg:p-8 flex flex-col justify-between h-full transition-all duration-300 hover:border-gold-warm hover:shadow-2xl hover:shadow-gold-dark/5 hover:-translate-y-1 group relative overflow-hidden"
            >
              {/* Decorative Card Angle Ornaments */}
              <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-2 right-2 w-3 h-[1px] bg-gold-warm" />
                <div className="absolute top-2 right-2 w-[1px] h-3 bg-gold-warm" />
              </div>

              <div>
                {/* Header with Icon and Price */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded bg-brown-dark/30 border border-brown-leather/30 text-gold-warm group-hover:bg-gold-dark group-hover:text-black transition-colors duration-300">
                    {getIcon(service.id)}
                  </div>
                  <div className="font-display text-2xl text-gold-warm font-bold select-none tracking-tight">
                    {service.price}€
                  </div>
                </div>

                {/* Service Name */}
                <h3 className="font-display text-lg text-white-off font-bold group-hover:text-gold-warm transition-colors duration-300 mb-2">
                  {service.name}
                </h3>

                {/* Service Short Description */}
                <p className="text-white-off/70 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Booking CTA for this card */}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.serviceCta}: ${service.name}`}
                className="w-full py-3 bg-transparent hover:bg-gold-dark border border-brown-leather/60 group-hover:border-gold-warm hover:text-black text-white-off/90 text-center rounded font-display text-[10px] sm:text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>{t.serviceCta}</span>
                <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
