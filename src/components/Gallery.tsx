import { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Search } from 'lucide-react';
import { Language, LOGO_URL, GENERAL_TRANSLATIONS } from '../translations';

interface GalleryProps {
  currentLang: Language;
}

export default function Gallery({ currentLang }: GalleryProps) {
  const t = GENERAL_TRANSLATIONS[currentLang];
  const [activeImage, setActiveImage] = useState<number | null>(null);

  // High-quality dark & warm premium barber visuals
  const galleryItems = [
    {
      id: 1,
      src: 'https://res.cloudinary.com/dj8vbaevh/image/upload/v1783043506/Taper_by_mounir_barbershop_vysl7q.png',
      alt: {
        FR: 'Coupe dégradée (taper) moderne réalisée avec précision chez MOUNIR BARBERSHOP',
        EN: 'Modern taper fade haircut styled with ultimate precision at MOUNIR BARBERSHOP',
        NL: 'Moderne taper fade kapsel met uiterste precisie gestyld bij MOUNIR BARBERSHOP'
      },
      tag: { FR: 'Taper', EN: 'Taper', NL: 'Taper' },
      gridClass: 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto',
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/dj8vbaevh/image/upload/v1783043511/mounir_barbershop_materials_yumvuv.png',
      alt: {
        FR: 'Sélection d\'outils professionnels et de tondeuses de haute précision',
        EN: 'Selection of high-end professional clippers and barbershop tools',
        NL: 'Selectie van hoogwaardige professionele tondeuses en barbiersgereedschap'
      },
      tag: { FR: 'Précision', EN: 'Precision', NL: 'Precisie' },
      gridClass: 'md:col-span-1 md:row-span-1 aspect-square',
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/dj8vbaevh/image/upload/v1783043504/45_years_old_man_shaved_at_mounir_barbershop_jshaho.png',
      alt: {
        FR: 'Soin de barbe traditionnel et rasage précis pour homme d\'âge mûr',
        EN: 'Traditional beard grooming and precise razor shave for a mature gentleman',
        NL: 'Tradionele baardverzorging en nauwkeurige scheerbeurt voor de rijpere heer'
      },
      tag: { FR: 'Tradition', EN: 'Tradition', NL: 'Traditie' },
      gridClass: 'md:col-span-1 md:row-span-1 aspect-square',
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/dj8vbaevh/image/upload/v1783043499/Mounir_barbershop_woman_taper_kddgih.png',
      alt: {
        FR: 'Coupe courte moderne et taper fade audacieux sur cheveux texturés',
        EN: 'Modern short haircut and bold taper fade on textured hair',
        NL: 'Modern kort kapsel en gedurfde taper fade op getextureerd haar'
      },
      tag: { FR: 'Style', EN: 'Style', NL: 'Stijl' },
      gridClass: 'md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto',
    },
    {
      id: 5,
      src: 'https://res.cloudinary.com/dj8vbaevh/image/upload/v1783043500/young_woman_styled_by_mounir_barbershop_fwammq.png',
      alt: {
        FR: 'Coupe texturée élégante sur cheveux courts avec une finition raffinée',
        EN: 'Elegant textured cut on short hair with a refined finish',
        NL: 'Elegante getextureerde snit op kort haar met een verfijnde afwerking'
      },
      tag: { FR: 'Tendance', EN: 'Trend', NL: 'Trend' },
      gridClass: 'md:col-span-1 md:row-span-1 aspect-square',
    },
    {
      id: 7,
      src: 'https://res.cloudinary.com/dj8vbaevh/image/upload/v1783043500/dreaded_hair_young_boy_styled_by_mounir_barbershop_ktsp8q.png',
      alt: {
        FR: 'Coupe créative pour enfant mêlant tresses dreadlocks et dégradé soigné',
        EN: 'Creative youth haircut combining styled dreadlocks with a clean fade',
        NL: 'Creatief kinderkapsel met gevlochten dreadlocks en een strakke overloop'
      },
      tag: { FR: 'Enfant', EN: 'Kids', NL: 'Kinderen' },
      gridClass: 'md:col-span-1 md:row-span-1 aspect-square',
    },
    {
      id: 6,
      src: 'https://res.cloudinary.com/dj8vbaevh/image/upload/v1783043502/white_man_style_by_mounir_barbershop_kyqk9f.png',
      alt: {
        FR: 'Coupe aux ciseaux classique et taille de barbe impeccable par nos experts',
        EN: 'Classic scissor haircut and flawless beard trimming by our master barbers',
        NL: 'Klassieke schaarknipbeurt en onberispelijke baardtrim door onze meesters'
      },
      tag: { FR: 'Savoir-Faire', EN: 'Know-How', NL: 'Vakmanschap' },
      gridClass: 'md:col-span-2 md:row-span-1 aspect-[2/1] md:aspect-auto',
    }
  ];

  return (
    <section
      id="gallery"
      className="bg-[#0F0F0F] py-24 lg:py-32 px-6 sm:px-8 lg:px-12 relative border-b border-brown-leather/20"
    >
      <div className="max-w-[1280px] mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="max-w-[640px]">
            <div className="flex items-center space-x-2 text-gold-warm mb-3">
              <Camera className="w-4 h-4" />
              <span className="font-mono text-xs tracking-[0.25em] uppercase font-bold">
                GALERIE D'ART
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-white-off tracking-tight font-bold">
              {t.galleryTitle}
            </h2>
          </div>
          <p className="text-white-off/60 text-xs sm:text-sm font-sans max-w-[400px]">
            {t.gallerySubtitle}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.button
              type="button"
              key={item.id}
              className={`relative group overflow-hidden rounded border border-brown-leather/30 bg-black cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-warm ${item.gridClass}`}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              aria-label={item.alt[currentLang]}
              aria-pressed={activeImage === item.id}
              onClick={() => setActiveImage((active) => active === item.id ? null : item.id)}
            >
              {/* Image element with lazy loading */}
              <img
                src={item.src}
                alt={item.alt[currentLang]}
                className={`w-full h-full object-cover opacity-75 group-hover:grayscale-0 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 ease-out ${activeImage === item.id ? 'grayscale-0 opacity-95 scale-105' : 'grayscale'}`}
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Black gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-500 ${activeImage === item.id ? 'opacity-45' : 'opacity-30 group-hover:opacity-45'}`} />

              {/* Top border decor when hovered */}
              <div className="absolute inset-3 border border-gold-dark/0 group-hover:border-gold-dark/30 pointer-events-none transition-all duration-500 z-10" />

              {/* Hover Caption Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 z-20 flex items-end justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <span className="inline-block px-2.5 py-1 bg-gold-dark text-black font-mono text-[9px] font-bold uppercase tracking-widest rounded mb-2 shadow-md">
                    {item.tag[currentLang]}
                  </span>
                  <p className="text-white-off text-xs sm:text-sm tracking-wide font-sans line-clamp-2 max-w-[280px]">
                    {item.alt[currentLang]}
                  </p>
                </div>
                
                {/* Search magnifying icon indicator */}
                <div className="w-8 h-8 rounded-full bg-black/60 border border-gold-dark/40 flex items-center justify-center text-gold-warm opacity-0 group-hover:opacity-100 transition-opacity duration-500 shrink-0 ml-3">
                  <Search className="w-4 h-4" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  );
}
