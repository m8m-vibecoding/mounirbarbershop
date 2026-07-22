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
import { Language, LANGUAGE_LOCALES, GENERAL_TRANSLATIONS, LOGO_URL, BOOKING_URL, SERVICES_TRANSLATIONS, REVIEWS } from './translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('FR');
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Sync title, description and metadata on language shift
  useEffect(() => {
    const t = GENERAL_TRANSLATIONS[currentLang];
    document.title = t.metaTitle;
    
    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMeta('description', t.metaDesc);
    setMeta('og:title', t.metaTitle, 'property');
    setMeta('og:description', t.metaDesc, 'property');
    setMeta('twitter:title', t.metaTitle);
    setMeta('twitter:description', t.metaDesc);

    // Set HTML lang attribute for screenreaders
    document.documentElement.lang = LANGUAGE_LOCALES[currentLang];
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

    const t = GENERAL_TRANSLATIONS[currentLang];
    const services = SERVICES_TRANSLATIONS[currentLang];

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "HairSalon",
          "@id": `${window.location.origin}/#organization`,
          "name": "Mounir Barbershop",
          "image": LOGO_URL,
          "url": window.location.origin,
          "telephone": "", 
          "priceRange": "€-€€",
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
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "10:00",
              "closes": "20:00"
            }
          ],
          "sameAs": []
        },
        {
          "@type": "WebSite",
          "@id": `${window.location.origin}/#website`,
          "url": window.location.origin,
          "name": "Mounir Barbershop",
          "publisher": { "@id": `${window.location.origin}/#organization` }
        },
        {
          "@type": "WebPage",
          "@id": `${window.location.origin}/#webpage`,
          "url": window.location.origin,
          "name": t.metaTitle,
          "isPartOf": { "@id": `${window.location.origin}/#website` },
          "about": { "@id": `${window.location.origin}/#organization` },
          "description": t.metaDesc
        },
        {
          "@type": "ItemList",
          "name": t.navServices,
          "itemListElement": services.map((s, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
              "@type": "Service",
              "name": s.name,
              "description": s.description,
              "offers": {
                "@type": "Offer",
                "price": s.price,
                "priceCurrency": "EUR"
              }
            }
          }))
        },
        {
          "@type": "LocalBusiness",
          "@id": `${window.location.origin}/#organization`,
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "50"
          },
          "review": REVIEWS.map(r => ({
            "@type": "Review",
            "author": { "@type": "Person", "name": r.name },
            "reviewRating": { "@type": "Rating", "ratingValue": r.rating },
            "reviewBody": r.text
          }))
        }
      ]
    };

    script.text = JSON.stringify(structuredData);
  }, [currentLang]);

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
