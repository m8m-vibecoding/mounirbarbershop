import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Language, GENERAL_TRANSLATIONS, LOGO_URL, BOOKING_URL } from './translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('FR');
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Sync title, description and html lang attribute on language shift
  useEffect(() => {
    const t = GENERAL_TRANSLATIONS[currentLang];
    document.title = t.metaTitle;
    
    // Set or update metadata tag
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', t.metaDesc);

    // Set HTML lang attribute for screenreaders
    document.documentElement.lang = currentLang.toLowerCase();
  }, [currentLang]);

  // Inject Structured LocalBusiness Schema JSON-LD for local SEO
  useEffect(() => {
    const schemaId = 'mounir-barbershop-jsonld';
    let script = document.getElementById(schemaId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "HairSalon",
      "name": "Mounir Barbershop",
      "image": LOGO_URL,
      "@id": "https://calendar.app.google/SWAQ5j7sJ7vq3Q8e8",
      "url": window.location.origin,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. de la Reine 201",
        "addressLocality": "Bruxelles",
        "postalCode": "1000",
        "addressCountry": "BE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 50.871616,
        "longitude": 4.361993
      },
      "areaServed": "Brussels",
      "priceRange": "€-€€",
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": BOOKING_URL,
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        },
        "result": {
          "@type": "Reservation",
          "name": "Grooming & Haircut Appointment"
        }
      }
    };

    script.text = JSON.stringify(structuredData);
  }, []);

  // Set up dynamic active section highlighting based on scroll coordinates
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'gallery', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 180; // offset top boundary

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger initial run
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Introduction Page Loader */}
      <Loader onComplete={() => setIsLoading(false)} />

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            id="app-root-layout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col min-h-screen bg-[#0F0F0F]"
          >
            {/* Standard Fixed Top Navigation Bar */}
            <Navbar
              currentLang={currentLang}
              onChangeLang={setCurrentLang}
              activeSection={activeSection}
            />

            {/* Layout Wrapper with Top Spacing Offset for Fixed Header */}
            <main className="flex-grow">
              <Hero currentLang={currentLang} />
              <About currentLang={currentLang} />
              <Services currentLang={currentLang} />
              <Gallery currentLang={currentLang} />
              <Reviews currentLang={currentLang} />
              <Booking currentLang={currentLang} />
              <Contact currentLang={currentLang} />
            </main>

            {/* Standard Page Footer */}
            <Footer currentLang={currentLang} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
