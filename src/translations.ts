export type Language = 'FR' | 'EN' | 'NL';

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface ReviewItem {
  name: string;
  rating: number;
  text: string;
  source: string;
}

export const LANGUAGE_LOCALES: Record<Language, string> = { FR: 'fr', EN: 'en', NL: 'nl' };

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'FR', label: 'FR' },
  { code: 'EN', label: 'EN' },
  { code: 'NL', label: 'NL' }
];

export const SERVICES_TRANSLATIONS: Record<Language, ServiceItem[]> = {
  FR: [
    {
      id: 'cut-beard',
      name: 'Coupe homme & barbe',
      description: 'Coupe complète avec entretien de la barbe pour un résultat propre et structuré.',
      price: 20
    },
    {
      id: 'fade',
      name: 'Dégradé normal sans barbe',
      description: 'Dégradé net et précis, idéal pour une coupe fraîche et entretenue.',
      price: 15
    },
    {
      id: 'kids',
      name: 'Coupe pour enfant',
      description: 'Coupe enfant rapide, propre et adaptée aux plus jeunes.',
      price: 10
    },
    {
      id: 'beard-only',
      name: 'Barbe seule',
      description: 'Entretien de barbe simple pour garder une ligne propre.',
      price: 7
    },
    {
      id: 'contour',
      name: 'Contour barbe',
      description: 'Contour précis pour structurer la barbe et rafraîchir le visage.',
      price: 10
    },
    {
      id: 'color',
      name: 'Coloration + coupe',
      description: 'Service complet avec coloration et coupe pour changer ou renforcer votre style.',
      price: 30
    },
    {
      id: 'relax',
      name: 'Défrisage',
      description: 'Défrisage pour lisser et discipliner les cheveux.',
      price: 15
    },
    {
      id: 'shampoo',
      name: 'Shampoing',
      description: 'Shampoing en complément de votre service coiffure.',
      price: 5
    },
    {
      id: 'young-boy',
      name: 'Coupe garçon + styling',
      description: 'Coupe garçon travaillée avec coiffage et finitions soignées.',
      price: 20
    }
  ],
  EN: [
    {
      id: 'cut-beard',
      name: 'Men’s cut & beard',
      description: 'Full haircut with beard grooming for a clean and structured result.',
      price: 20
    },
    {
      id: 'fade',
      name: 'Regular fade without beard',
      description: 'Sharp and precise fade, ideal for a fresh look.',
      price: 15
    },
    {
      id: 'kids',
      name: 'Kids’ haircut',
      description: 'Quick and clean haircut for children.',
      price: 10
    },
    {
      id: 'beard-only',
      name: 'Beard only',
      description: 'Simple beard grooming to keep your lines clean.',
      price: 7
    },
    {
      id: 'contour',
      name: 'Beard line-up',
      description: 'Precise beard line-up to structure your face and refresh your look.',
      price: 10
    },
    {
      id: 'color',
      name: 'Coloring + haircut',
      description: 'Full service with coloring and haircut to change or enhance your style.',
      price: 30
    },
    {
      id: 'relax',
      name: 'Relaxing',
      description: 'Hair relaxing service to smooth and discipline the hair.',
      price: 15
    },
    {
      id: 'shampoo',
      name: 'Shampoo',
      description: 'Shampoo as an add-on to your hair service.',
      price: 5
    },
    {
      id: 'young-boy',
      name: 'Boy’s cut + styling',
      description: 'Detailed haircut for boys with styling and a clean finish.',
      price: 20
    }
  ],
  NL: [
    {
      id: 'cut-beard',
      name: 'Herenkapsel & baard',
      description: 'Volledige coupe met baardverzorging voor een verzorgd en gestructureerd resultaat.',
      price: 20
    },
    {
      id: 'fade',
      name: 'Normale fade zonder baard',
      description: 'Strakke en precieze fade, ideaal voor een frisse coupe.',
      price: 15
    },
    {
      id: 'kids',
      name: 'Kinderkapsel',
      description: 'Snelle en verzorgde coupe voor kinderen.',
      price: 10
    },
    {
      id: 'beard-only',
      name: 'Alleen baard',
      description: 'Eenvoudige baardverzorging om nette lijnen te behouden.',
      price: 7
    },
    {
      id: 'contour',
      name: 'Baardcontour',
      description: 'Precieze baardcontour om het gezicht te structureren en de look op te frissen.',
      price: 10
    },
    {
      id: 'color',
      name: 'Kleuring + coupe',
      description: 'Volledige service met kleuring en coupe om je stijl te veranderen of te versterken.',
      price: 30
    },
    {
      id: 'relax',
      name: 'Ontkrulling',
      description: 'Ontkrulling om het haar gladder en beter handelbaar te maken.',
      price: 15
    },
    {
      id: 'shampoo',
      name: 'Shampoo',
      description: 'Shampoo als aanvulling op je kappersdienst.',
      price: 5
    },
    {
      id: 'young-boy',
      name: 'Jongenskapsel + styling',
      description: 'Verzorgd jongenskapsel met styling en een strakke afwerking.',
      price: 20
    }
  ]
};

export const REVIEWS: ReviewItem[] = [
  {
    name: "Le passionné d'aventure",
    rating: 5,
    text: "Coiffeur pro ayant une variété de styles à proposer",
    source: "Avis Google"
  },
  {
    name: "pape gning",
    rating: 5,
    text: "Le salon idéal 👌",
    source: "Avis Google"
  },
  {
    name: "moustafa",
    rating: 4,
    text: "Il coiffe très bien.",
    source: "Avis Google"
  }
];

export const OTHER_REVIEWERS = [
  "Noucha NSIMBA MAKANDA",
  "Miniiz Uchiha",
  "Reda",
  "Arifou Sow",
  "Amadouu Oury",
  "A.O.T gaming",
  "Darcy Dushime"
];

export const GENERAL_TRANSLATIONS = {
  FR: {
    metaTitle: "MOUNIR BARBERSHOP Bruxelles | Coiffeur hommes et garçons",
    metaDesc: "MOUNIR BARBERSHOP accueille hommes et garçons à Bruxelles pour coupes, barbe, dégradés, coloration, défrisage et shampoing. Réservez en ligne.",
    navHome: "Accueil",
    navServices: "Services",
    navReviews: "Avis",
    navBook: "Réserver",
    navContact: "Contact",
    heroLabel: "BARBER SHOP À BRUXELLES",
    heroBrand: "MOUNIR BARBERSHOP,",
    heroTitle: "La référence des coupes tendance à Bruxelles pour Hommes et Garçons.",
    heroSubtitle: "Révélez votre style avec un expert.\nDes coupes précises, un souci du détail et un résultat qui fait la différence.\nPrenez rendez-vous et vivez l’expérience chez MOUNIR BARBERSHOP.",
    heroCtaMain: "Réserver maintenant",
    heroCtaSub: "Voir les services",
    heroMapCta: "Y aller",
    heroMapAlt: "Plan de MOUNIR BARBERSHOP, Avenue de la Reine 201 à Bruxelles",
    heroTrust: "Coupes homme et garçon, barbe, dégradés, contours, coloration et défrisage au cœur de Bruxelles, Av. de la Reine 201.",
    aboutLabel: "LE SALON",
    aboutTitle: "Un salon bruxellois pour des coupes propres, nettes et maîtrisées",
    aboutText1: "MOUNIR BARBERSHOP accueille hommes et garçons à Bruxelles pour des services de coiffure simples, efficaces et soignés. Que vous veniez pour un dégradé, une barbe, une coupe enfant, une coloration ou un défrisage, le salon met l’accent sur la précision, l’écoute et un résultat propre.",
    aboutText2: "Situé Av. de la Reine 201, le salon offre une adresse pratique pour celles et ceux qui cherchent un coiffeur à Bruxelles avec des prix clairs et une réservation facile.",
    servicesTitle: "Services et tarifs",
    servicesSubtitle: "Des prestations claires, rapides à réserver et adaptées à vos besoins.",
    serviceCta: "Réserver",
    galleryTitle: "L'univers du salon",
    gallerySubtitle: "Précision, rigueur et authenticité dans un cadre chaleureux.",
    reviewsTitle: "Avis clients",
    reviewsSubtitle: "Des clients recommandent MOUNIR BARBERSHOP pour la qualité des coupes, le style et l’accueil.",
    reviewsTickerText: "Ils ont aussi recommandé MOUNIR BARBERSHOP sur Google.",
    bookingTitle: "Réservez votre passage chez MOUNIR BARBERSHOP",
    bookingText: "Choisissez votre service, réservez votre créneau et passez au salon Av. de la Reine 201 à Bruxelles.",
    bookingBtn: "Prendre rendez-vous",
    bookingMicro: "Réservation rapide via Google Calendar.",
    contactTitle: "Contact et adresse",
    contactSubtitle: "MOUNIR BARBERSHOP vous accueille à Bruxelles, Av. de la Reine 201.",
    contactAddrLabel: "Adresse",
    contactActLabel: "Activité",
    contactActText: "Salon de coiffure pour hommes et garçons à Bruxelles",
    contactBookLabel: "Réservation",
    contactBookBtn: "Réserver maintenant",
    contactMapBtn: "Ouvrir dans Google Maps",
    footerText: "Salon de coiffure pour hommes et garçons à Bruxelles",
    footerCopyright: "© 2026 MOUNIR BARBERSHOP. Tous droits réservés.",
  },
  EN: {
    metaTitle: "MOUNIR BARBERSHOP Brussels | Men’s and Boys’ Barber",
    metaDesc: "MOUNIR BARBERSHOP welcomes men and boys in Brussels for haircuts, beard trims, fades, coloring, relaxing and shampoo. Book online.",
    navHome: "Home",
    navServices: "Services",
    navReviews: "Reviews",
    navBook: "Book",
    navContact: "Contact",
    heroLabel: "BARBER SHOP IN BRUSSELS",
    heroBrand: "MOUNIR BARBERSHOP,",
    heroTitle: "The reference for on-trend haircuts in Brussels for Men and Boys.",
    heroSubtitle: "Reveal your style with an expert.\nPrecision cuts, attention to detail and a result that makes the difference.\nBook your appointment and experience MOUNIR BARBERSHOP.",
    heroCtaMain: "Book now",
    heroCtaSub: "View services",
    heroMapCta: "Get directions",
    heroMapAlt: "Map of MOUNIR BARBERSHOP at Avenue de la Reine 201 in Brussels",
    heroTrust: "Men’s and boys’ cuts, beard trims, fades, line-ups, coloring and relaxing in Brussels, Av. de la Reine 201.",
    aboutLabel: "THE SALON",
    aboutTitle: "A Brussels salon for clean, sharp and precise haircuts",
    aboutText1: "MOUNIR BARBERSHOP welcomes men and boys in Brussels for simple, efficient and clean grooming services. Whether you need a fade, beard trim, kids’ cut, coloring or relaxing, the salon focuses on precision, listening and a sharp result.",
    aboutText2: "Located at Av. de la Reine 201, the salon offers a practical address for anyone looking for a hair salon in Brussels with clear prices and easy booking.",
    servicesTitle: "Services and prices",
    servicesSubtitle: "Clear services, quick booking and tailored to your needs.",
    serviceCta: "Book",
    galleryTitle: "Inside the Salon",
    gallerySubtitle: "Precision, care and authenticity in a welcoming atmosphere.",
    reviewsTitle: "Customer reviews",
    reviewsSubtitle: "Customers recommend MOUNIR BARBERSHOP for clean cuts, style and service.",
    reviewsTickerText: "They also recommended MOUNIR BARBERSHOP on Google.",
    bookingTitle: "Book your visit at MOUNIR BARBERSHOP",
    bookingText: "Choose your service, book your time slot and visit the salon at Av. de la Reine 201 in Brussels.",
    bookingBtn: "Book an appointment",
    bookingMicro: "Fast booking through Google Calendar.",
    contactTitle: "Contact and location",
    contactSubtitle: "MOUNIR BARBERSHOP welcomes you in Brussels, Av. de la Reine 201.",
    contactAddrLabel: "Address",
    contactActLabel: "Activity",
    contactActText: "Barber shop for men and boys in Brussels",
    contactBookLabel: "Booking",
    contactBookBtn: "Book now",
    contactMapBtn: "Open in Google Maps",
    footerText: "Barber shop for men and boys in Brussels",
    footerCopyright: "© 2026 MOUNIR BARBERSHOP. All rights reserved.",
  },
  NL: {
    metaTitle: "MOUNIR BARBERSHOP Brussel | Kapper voor mannen en jongens",
    metaDesc: "MOUNIR BARBERSHOP verwelkomt mannen en jongens in Brussel voor kapsels, baardverzorging, fades, kleuring, ontkrulling en shampoo. Reserveer online.",
    navHome: "Start",
    navServices: "Diensten",
    navReviews: "Reviews",
    navBook: "Reservatie",
    navContact: "Contact",
    heroLabel: "BARBERSHOP IN BRUSSEL",
    heroBrand: "MOUNIR BARBERSHOP,",
    heroTitle: "Dé referentie voor trendy kapsels in Brussel voor Mannen en Jongens.",
    heroSubtitle: "Laat je stijl spreken met een expert.\nStrakke kapsels, oog voor detail en een resultaat dat het verschil maakt.\nMaak een afspraak en beleef de ervaring bij MOUNIR BARBERSHOP.",
    heroCtaMain: "Reserveer nu",
    heroCtaSub: "Bekijk diensten",
    heroMapCta: "Route",
    heroMapAlt: "Kaart van MOUNIR BARBERSHOP aan de Koninginnelaan 201 in Brussel",
    heroTrust: "Kapsels voor mannen en jongens, baardverzorging, fades, contouren, kleuring en ontkrulling in Brussel, Av. de la Reine 201.",
    aboutLabel: "HET SALON",
    aboutTitle: "Een Brussels kapsalon voor verzorgde, strakke en precieze kapsels",
    aboutText1: "MOUNIR BARBERSHOP ontvangt mannen en jongens in Brussel voor eenvoudige, efficiënte en verzorgde kappersdiensten. Of je nu komt voor een fade, baard, kinderkapsel, kleuring of ontkrulling, het salon focust op precisie, luisteren en een verzorgd resultaat.",
    aboutText2: "Gelegen aan de Av. de la Reine 201, biedt het salon een praktische locatie voor wie een kapper in Brussel zoekt met duidelijke prijzen en eenvoudige reservatie.",
    servicesTitle: "Diensten en tarieven",
    servicesSubtitle: "Duidelijke diensten, snel te reserveren en afgestemd op jouw behoeften.",
    serviceCta: "Reserveer",
    galleryTitle: "Sfeerbeeld van het salon",
    gallerySubtitle: "Precisie, zorg en authenticiteit in een warme sfeer.",
    reviewsTitle: "Klantreviews",
    reviewsSubtitle: "Klanten bevelen MOUNIR BARBERSHOP aan voor verzorgde coupes, stijl en service.",
    reviewsTickerText: "Zij hebben MOUNIR BARBERSHOP ook aanbevolen op Google.",
    bookingTitle: "Reserveer je afspraak bij MOUNIR BARBERSHOP",
    bookingText: "Kies je dienst, reserveer je tijdslot en kom langs in het salon aan de Av. de la Reine 201 in Brussel.",
    bookingBtn: "Reserveer een afspraak",
    bookingMicro: "Snelle reservatie via Google Calendar.",
    contactTitle: "Contact en adres",
    contactSubtitle: "MOUNIR BARBERSHOP verwelkomt je in Brussel, Av. de la Reine 201.",
    contactAddrLabel: "Adres",
    contactActLabel: "Activiteit",
    contactActText: "Kapsalon voor mannen en jongens in Brussel",
    contactBookLabel: "Reservatie",
    contactBookBtn: "Reserveer nu",
    contactMapBtn: "Openen in Google Maps",
    footerText: "Kapsalon voor mannen en jongens in Brussel",
    footerCopyright: "© 2026 MOUNIR BARBERSHOP. Alle rechten voorbehouden.",
  }
};

export const BOOKING_URL = 'https://calendar.app.google/SWAQ5j7sJ7vq3Q8e8';
export const DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=Av.+de+la+Reine+201%2C+1000+Bruxelles%2C+Belgique';
export const LOGO_URL = 'https://res.cloudinary.com/dj8vbaevh/image/upload/v1783039152/mb_fluaoa.png';
