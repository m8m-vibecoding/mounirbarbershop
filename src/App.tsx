import { useCallback, useEffect, useState } from 'react';
import { motion } from 'motion/react';
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
import { Language, GENERAL_TRANSLATIONS, SERVICES_TRANSLATIONS } from './translations';
import {
  BUSINESS_FACTS,
  canonicalFor,
  LOGO_URL,
  SITE_NAME,
  SITE_ORIGIN,
  SOCIAL_IMAGE_URL,
} from './siteConfig';

interface AppProps {
  initialLanguage?: Language;
}

export default function App({ initialLanguage = 'FR' }: AppProps) {
  const currentLang = initialLanguage;
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const handleLoadingComplete = useCallback(() => setIsLoading(false), []);

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

  const t = GENERAL_TRANSLATIONS[currentLang];
  const canonical = canonicalFor(currentLang);
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['HairSalon', 'Organization'],
        '@id': `${SITE_ORIGIN}/#organization`,
        name: BUSINESS_FACTS.name,
        url: SITE_ORIGIN,
        logo: LOGO_URL,
        image: SOCIAL_IMAGE_URL,
        address: { '@type': 'PostalAddress', ...BUSINESS_FACTS.address },
        geo: { '@type': 'GeoCoordinates', ...BUSINESS_FACTS.geo },
        currenciesAccepted: BUSINESS_FACTS.currenciesAccepted,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_ORIGIN}/#website`,
        url: SITE_ORIGIN,
        name: SITE_NAME,
        inLanguage: BUSINESS_FACTS.publicLanguages,
        publisher: { '@id': `${SITE_ORIGIN}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: t.metaTitle,
        description: t.metaDesc,
        inLanguage: currentLang.toLowerCase(),
        isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
        about: { '@id': `${SITE_ORIGIN}/#organization` },
        breadcrumb: { '@id': `${canonical}#breadcrumb` },
        primaryImageOfPage: { '@type': 'ImageObject', url: SOCIAL_IMAGE_URL },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonical}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t.navHome, item: canonical },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${canonical}#services`,
        name: t.navServices,
        itemListElement: SERVICES_TRANSLATIONS[currentLang].map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Service',
            '@id': `${canonical}#service-${service.id}`,
            name: service.name,
            description: service.description,
            url: `${canonical}#services`,
            provider: { '@id': `${SITE_ORIGIN}/#organization` },
            offers: {
              '@type': 'Offer',
              price: service.price,
              priceCurrency: BUSINESS_FACTS.currenciesAccepted,
              url: `${canonical}#services`,
            },
          },
        })),
      },
    ],
  };
  return (
    <>
      {isLoading && <Loader onComplete={handleLoadingComplete} />}
      <a className="skip-link" href="#main-content">
        {currentLang === 'FR'
          ? 'Aller au contenu'
          : currentLang === 'EN'
            ? 'Skip to content'
            : 'Ga naar de inhoud'}
      </a>
      <motion.div
        id="app-root-layout"
        initial={false}
        animate={{ opacity: 1 }}
        className="flex flex-col min-h-screen bg-[#0F0F0F]"
      >
        <Navbar currentLang={currentLang} activeSection={activeSection} />
        <main id="main-content" className="flex-grow" tabIndex={-1}>
          <Hero currentLang={currentLang} />
          <About currentLang={currentLang} />
          <Services currentLang={currentLang} />
          <Gallery currentLang={currentLang} />
          <Reviews currentLang={currentLang} />
          <Booking currentLang={currentLang} />
          <Contact currentLang={currentLang} />
        </main>
        <Footer currentLang={currentLang} />
      </motion.div>
      <script
        id="mounir-barbershop-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
