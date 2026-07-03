import { Compass, Calendar } from 'lucide-react';
import { Language, BOOKING_URL, LOGO_URL, GENERAL_TRANSLATIONS } from '../translations';

interface FooterProps {
  currentLang: Language;
}

export default function Footer({ currentLang }: FooterProps) {
  const t = GENERAL_TRANSLATIONS[currentLang];

  const links = [
    { name: t.navHome, href: '#home' },
    { name: t.navServices, href: '#services' },
    { name: t.navReviews, href: '#reviews' },
    { name: t.navContact, href: '#contact' },
  ];

  return (
    <footer
      id="footer"
      className="bg-[#000000] border-t border-gold-dark/30 pt-16 pb-12 px-6 sm:px-8 lg:px-12 relative z-10"
    >
      <div className="max-w-[1280px] mx-auto">
        
        {/* Upper Segment: Grid of items */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* Left Block: Identity & Address */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-full bg-brown-dark/40 border border-gold-dark/40 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={LOGO_URL}
                  alt="Mounir Barbershop Official Stamp Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(196,154,74,0.15)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display text-lg tracking-[0.2em] uppercase font-bold text-white-off">
                Mounir
              </span>
            </div>
            
            <p className="text-white-off/70 text-sm font-sans max-w-[280px]">
              {t.footerText}
            </p>
            
            <div className="flex items-center space-x-2 text-gold-warm text-xs font-mono tracking-wider pt-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Av. de la Reine 201, 1000 Bruxelles</span>
            </div>
          </div>

          {/* Center Block: Quick Anchor Links */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <h4 className="font-display text-xs text-gold-warm uppercase tracking-[0.2em] font-bold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-3 max-w-[200px]">
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-white-off/60 hover:text-gold-warm text-sm transition-colors duration-300 font-medium py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Block: Instant Reservation */}
          <div className="md:col-span-4 flex flex-col space-y-4 md:items-end">
            <h4 className="font-display text-xs text-gold-warm uppercase tracking-[0.2em] font-bold">
              {currentLang === 'FR' ? 'Rendez-vous' : currentLang === 'EN' ? 'Appointment' : 'Afspraak'}
            </h4>
            
            <p className="text-white-off/50 text-xs md:text-right max-w-[280px]">
              {currentLang === 'FR'
                ? 'Réservation en ligne 24h/24 via Google Calendar.'
                : currentLang === 'EN'
                ? 'Online booking available 24/7 on Google Calendar.'
                : 'Online reservering 24/7 beschikbaar via Google Calendar.'}
            </p>
            
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-brown-dark hover:bg-gold-dark border border-gold-dark rounded text-white-off hover:text-black font-display text-[11px] uppercase tracking-widest font-bold transition-all duration-300 text-center flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.contactBookBtn}</span>
            </a>
          </div>

        </div>

        {/* Lower Segment: Divider and Copyright notice */}
        <div className="border-t border-brown-leather/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-mono tracking-wider text-white-off/40 text-center sm:text-left">
            {t.footerCopyright}
          </p>
          
          <div className="flex items-center space-x-4 text-[10px] font-mono tracking-widest text-white-off/30 uppercase">
            <span>Coiffeur Bruxelles</span>
            <span>•</span>
            <span>Barber Shop Bruxelles</span>
            <span>•</span>
            <span>Barbier 1000</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
