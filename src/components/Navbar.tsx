import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar, Globe } from 'lucide-react';
import { Language, BOOKING_URL, LOGO_URL, GENERAL_TRANSLATIONS, LANGUAGES } from '../translations';

interface NavbarProps {
  currentLang: Language;
  onChangeLang: (lang: Language) => void;
  activeSection: string;
}

export default function Navbar({ currentLang, onChangeLang, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Auto-close menu drawer when scrolling
      setIsOpen((open) => {
        if (open) return false;
        return open;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = GENERAL_TRANSLATIONS[currentLang];

  const navLinks = [
    { name: t.navHome, href: '#home', id: 'home' },
    { name: t.navServices, href: '#services', id: 'services' },
    { name: t.navReviews, href: '#reviews', id: 'reviews' },
    { name: t.navContact, href: '#contact', id: 'contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Elegant barber flourish line svg
  const FlourishLeft = () => (
    <svg className="hidden lg:block w-16 h-4 text-gold-dark/60" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 10 H80 M80 10 Q85 5 90 10 Q95 15 100 10" stroke="currentColor" strokeWidth="1" />
      <circle cx="80" cy="10" r="3" fill="currentColor" />
    </svg>
  );

  const FlourishRight = () => (
    <svg className="hidden lg:block w-16 h-4 text-gold-dark/60" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 10 H20 M20 10 Q15 15 10 10 Q5 5 0 10" stroke="currentColor" strokeWidth="1" />
      <circle cx="20" cy="10" r="3" fill="currentColor" />
    </svg>
  );

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0F0F0F]/95 backdrop-blur-md border-b border-brown-leather/30 shadow-2xl h-[90px]'
            : 'bg-transparent h-[100px]'
        } flex items-center justify-between px-4 sm:px-8 lg:px-12`}
      >
        {/* Left Side: Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6 lg:space-x-8 w-1/3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`font-display text-sm tracking-widest uppercase transition-colors duration-300 relative py-2 group ${
                activeSection === link.id ? 'text-gold-warm' : 'text-white-off hover:text-gold-warm'
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-gold-warm transition-all duration-300 ${
                  activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </div>

        {/* Center: Brand Logo flanked by golden flourishes */}
        <div className="flex items-center justify-center space-x-4 lg:w-1/3">
          <FlourishLeft />
          <a href="#home" className="flex items-center shrink-0 group focus:outline-none" aria-label="Mounir Barbershop">
            <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-black/40 border border-gold-dark/40 flex items-center justify-center p-1.5 transition-transform duration-500 group-hover:scale-105 group-hover:border-gold-warm">
              <img
                src={LOGO_URL}
                alt="Mounir Barbershop Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(196,154,74,0.2)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </a>
          <FlourishRight />
        </div>

        {/* Right Side: Language & Reservation (Desktop) */}
        <div className="hidden lg:flex items-center justify-end space-x-6 w-1/3">
          {/* Language Selector */}
          <div className="flex items-center space-x-2 border-r border-brown-leather/40 pr-6">
            <Globe className="w-4 h-4 text-gold-dark" />
            <div className="flex space-x-2 text-xs font-mono tracking-widest text-white-off/60">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onChangeLang(lang.code)}
                  className={`transition-colors font-semibold py-1 px-1.5 rounded hover:text-gold-warm ${
                    currentLang === lang.code ? 'text-gold-warm bg-brown-dark/30 font-bold border border-gold-dark/20' : ''
                  }`}
                  aria-label={`Switch to ${lang.label}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {/* Reservation Button */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-5 py-2.5 bg-brown-dark hover:bg-gold-dark border border-gold-dark hover:border-gold-warm rounded text-white-off hover:text-black font-display text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md hover:shadow-gold-warm/20"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.navBook}</span>
          </a>
        </div>

        {/* Mobile Navbar Controls */}
        <div className="flex lg:hidden items-center space-x-3">
          {/* Quick Book Button (Always accessible) */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2.5 bg-gold-dark text-black rounded-full hover:bg-gold-warm transition-colors shadow-lg"
            aria-label="Book now"
          >
            <Calendar className="w-5 h-5" />
          </a>

          {/* Quick Language Selector */}
          <div className="flex items-center bg-black/40 border border-brown-leather/30 px-2 py-1.5 rounded">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => onChangeLang(lang.code)}
                className={`text-[11px] font-bold px-1.5 transition-colors ${
                  currentLang === lang.code ? 'text-gold-warm' : 'text-white-off/60'
                }`}
              >
                {lang.code}
              </button>
            ))}
          </div>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="p-2.5 text-white-off hover:text-gold-warm focus:outline-none border border-brown-leather/30 rounded bg-brown-dark/20"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0F0F0F] pt-[110px] pb-10 px-6 flex flex-col justify-between lg:hidden"
          >
            {/* Nav Links List & Close Booking Button Placement */}
            <div className="flex flex-col flex-grow justify-between">
              <div className="flex flex-col">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-display text-lg tracking-[0.2em] uppercase py-2.5 border-b border-brown-leather/20 flex items-center justify-between ${
                        activeSection === link.id ? 'text-gold-warm font-bold pl-2' : 'text-white-off pl-0'
                      } transition-all duration-300`}
                    >
                      <span>{link.name}</span>
                      <span className="text-gold-dark">→</span>
                    </a>
                  ))}
                </div>

                {/* Booking Button positioned closely underneath the Contact button */}
                <div className="mt-4">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-center space-x-3 py-3.5 bg-gold-dark text-black rounded font-display text-sm uppercase tracking-widest font-bold transition-transform active:scale-95 shadow-lg shadow-gold-warm/10"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>{t.navBook}</span>
                  </a>
                </div>
              </div>

              {/* Bottom address information */}
              <div className="pt-4 border-t border-brown-leather/10">
                <p className="text-center font-mono text-[10px] text-white-off/40 uppercase tracking-widest">
                  Av. de la Reine 201, 1000 Bruxelles
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
