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
      id: 'women-boy',
      name: 'Coupe femme garçonnet',
      description: 'Service coupe femme ou garçonnet selon le besoin.',
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
      id: 'women-boy',
      name: 'Women’s cut or young boy cut',
      description: 'Haircut service for women or young boys depending on the need.',
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
      id: 'women-boy',
      name: 'Damescoupe of jongenskapsel',
      description: 'Coupe voor vrouwen of jonge jongens volgens de behoefte.',
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
    metaTitle: "Mounir Barbershop Bruxelles | Coiffeur homme et femme Av. de la Reine",
    metaDesc: "Mounir Barbershop vous accueille à Bruxelles pour coupe homme, barbe, dégradé, coupe enfant, coloration, défrisage, shampoing et services femme. Réservez en ligne.",
    navHome: "Accueil",
    navServices: "Services",
    navReviews: "Avis",
    navBook: "Réserver",
    navContact: "Contact",
    heroLabel: "BARBER SHOP À BRUXELLES",
    heroTitle: "Mounir Barbershop, votre coiffeur homme et femme à Bruxelles",
    heroSubtitle: "Salon situé à 1000 Bruxelles. Services rapides, soignés et accessibles.",
    heroCtaMain: "Réserver maintenant",
    heroCtaSub: "Voir les services",
    heroTrust: "Coupes homme, barbe, dégradés, contours, coloration, défrisage et services femme au cœur de Bruxelles, Av. de la Reine 201.",
    aboutLabel: "LE SALON",
    aboutTitle: "Un salon bruxellois pour des coupes propres, nettes et maîtrisées",
    aboutText1: "Mounir Barbershop accueille hommes, femmes et enfants à Bruxelles pour des services de coiffure simples, efficaces et soignés. Que vous veniez pour un dégradé, une barbe, une coupe enfant, une coloration ou un défrisage, le salon met l’accent sur la précision, l’écoute et un résultat propre.",
    aboutText2: "Situé Av. de la Reine 201, le salon offre une adresse pratique pour celles et ceux qui cherchent un coiffeur à Bruxelles avec des prix clairs et une réservation facile.",
    servicesTitle: "Services et tarifs",
    servicesSubtitle: "Des prestations claires, rapides à réserver et adaptées à vos besoins.",
    serviceCta: "Réserver",
    galleryTitle: "L'univers du salon",
    gallerySubtitle: "Précision, rigueur et authenticité dans un cadre chaleureux.",
    reviewsTitle: "Avis clients",
    reviewsSubtitle: "Des clients recommandent Mounir Barbershop pour la qualité des coupes, le style et l’accueil.",
    reviewsTickerText: "Ils ont aussi recommandé Mounir Barbershop sur Google.",
    bookingTitle: "Réservez votre passage chez Mounir Barbershop",
    bookingText: "Choisissez votre service, réservez votre créneau et passez au salon Av. de la Reine 201 à Bruxelles.",
    bookingBtn: "Prendre rendez-vous",
    bookingMicro: "Réservation rapide via Google Calendar.",
    contactTitle: "Contact et adresse",
    contactSubtitle: "Mounir Barbershop vous accueille à Bruxelles, Av. de la Reine 201.",
    contactAddrLabel: "Adresse",
    contactActLabel: "Activité",
    contactActText: "Salon de coiffure homme et femme à Bruxelles",
    contactBookLabel: "Réservation",
    contactBookBtn: "Réserver maintenant",
    contactMapBtn: "Ouvrir dans Google Maps",
    footerText: "Salon de coiffure homme et femme à Bruxelles",
    footerCopyright: "© 2026 Mounir Barbershop. Tous droits réservés.",
  },
  EN: {
    metaTitle: "Mounir Barbershop Brussels | Men’s and Women’s Hair Salon",
    metaDesc: "Mounir Barbershop in Brussels offers men’s cuts, beard trims, fades, kids’ cuts, coloring, relaxing, shampoo and women’s services. Book online.",
    navHome: "Home",
    navServices: "Services",
    navReviews: "Reviews",
    navBook: "Book",
    navContact: "Contact",
    heroLabel: "BARBER SHOP IN BRUSSELS",
    heroTitle: "Mounir Barbershop, your men’s and women’s hair salon in Brussels",
    heroSubtitle: "Located in 1000 Brussels. Clean, sharp and accessible grooming services.",
    heroCtaMain: "Book now",
    heroCtaSub: "View services",
    heroTrust: "Men’s cuts, beard trims, fades, line-ups, coloring, relaxing and women’s services in Brussels, Av. de la Reine 201.",
    aboutLabel: "THE SALON",
    aboutTitle: "A Brussels salon for clean, sharp and precise haircuts",
    aboutText1: "Mounir Barbershop welcomes men, women and children in Brussels for simple, efficient and clean grooming services. Whether you need a fade, beard trim, kids’ cut, coloring or relaxing, the salon focuses on precision, listening and a sharp result.",
    aboutText2: "Located at Av. de la Reine 201, the salon offers a practical address for anyone looking for a hair salon in Brussels with clear prices and easy booking.",
    servicesTitle: "Services and prices",
    servicesSubtitle: "Clear services, quick booking and tailored to your needs.",
    serviceCta: "Book",
    galleryTitle: "Inside the Salon",
    gallerySubtitle: "Precision, care and authenticity in a welcoming atmosphere.",
    reviewsTitle: "Customer reviews",
    reviewsSubtitle: "Customers recommend Mounir Barbershop for clean cuts, style and service.",
    reviewsTickerText: "They also recommended Mounir Barbershop on Google.",
    bookingTitle: "Book your visit at Mounir Barbershop",
    bookingText: "Choose your service, book your time slot and visit the salon at Av. de la Reine 201 in Brussels.",
    bookingBtn: "Book an appointment",
    bookingMicro: "Fast booking through Google Calendar.",
    contactTitle: "Contact and location",
    contactSubtitle: "Mounir Barbershop welcomes you in Brussels, Av. de la Reine 201.",
    contactAddrLabel: "Address",
    contactActLabel: "Activity",
    contactActText: "Men’s and women’s hair salon in Brussels",
    contactBookLabel: "Booking",
    contactBookBtn: "Book now",
    contactMapBtn: "Open in Google Maps",
    footerText: "Men’s and women’s hair salon in Brussels",
    footerCopyright: "© 2026 Mounir Barbershop. All rights reserved.",
  },
  NL: {
    metaTitle: "Mounir Barbershop Brussel | Kapsalon voor mannen en vrouwen",
    metaDesc: "Mounir Barbershop in Brussel biedt herenkapsels, baardverzorging, fades, kinderkapsels, kleuring, ontkrulling, shampoo en damesdiensten. Reserveer online.",
    navHome: "Start",
    navServices: "Diensten",
    navReviews: "Reviews",
    navBook: "Reservatie",
    navContact: "Contact",
    heroLabel: "BARBERSHOP IN BRUSSEL",
    heroTitle: "Mounir Barbershop, jouw kapsalon voor mannen en vrouwen in Brussel",
    heroSubtitle: "Gelegen in 1000 Brussel. Verzorgde, snelle en toegankelijke kappersdiensten.",
    heroCtaMain: "Reserveer nu",
    heroCtaSub: "Bekijk diensten",
    heroTrust: "Herenkapsels, baardverzorging, fades, contouren, kleuring, ontkrulling en damesdiensten in Brussel, Av. de la Reine 201.",
    aboutLabel: "HET SALON",
    aboutTitle: "Een Brussels kapsalon voor verzorgde, strakke en precieze kapsels",
    aboutText1: "Mounir Barbershop ontvangt mannen, vrouwen en kinderen in Brussel voor eenvoudige, efficiënte en verzorgde kappersdiensten. Of je nu komt voor een fade, baard, kinderkapsel, kleuring of ontkrulling, het salon focust op precisie, luisteren en een verzorgd resultaat.",
    aboutText2: "Gelegen aan de Av. de la Reine 201, biedt het salon een praktische locatie voor wie een kapper in Brussel zoekt met duidelijke prijzen en eenvoudige reservatie.",
    servicesTitle: "Diensten en tarieven",
    servicesSubtitle: "Duidelijke diensten, snel te reserveren en afgestemd op jouw behoeften.",
    serviceCta: "Reserveer",
    galleryTitle: "Sfeerbeeld van het salon",
    gallerySubtitle: "Precisie, zorg en authenticiteit in een warme sfeer.",
    reviewsTitle: "Klantreviews",
    reviewsSubtitle: "Klanten bevelen Mounir Barbershop aan voor verzorgde coupes, stijl en service.",
    reviewsTickerText: "Zij hebben Mounir Barbershop ook aanbevolen op Google.",
    bookingTitle: "Reserveer je afspraak bij Mounir Barbershop",
    bookingText: "Kies je dienst, reserveer je tijdslot en kom langs in het salon aan de Av. de la Reine 201 in Brussel.",
    bookingBtn: "Reserveer een afspraak",
    bookingMicro: "Snelle reservatie via Google Calendar.",
    contactTitle: "Contact en adres",
    contactSubtitle: "Mounir Barbershop verwelkomt je in Brussel, Av. de la Reine 201.",
    contactAddrLabel: "Adres",
    contactActLabel: "Activiteit",
    contactActText: "Kapsalon voor mannen en vrouwen in Brussel",
    contactBookLabel: "Reservatie",
    contactBookBtn: "Reserveer nu",
    contactMapBtn: "Openen in Google Maps",
    footerText: "Kapsalon voor mannen en vrouwen in Brussel",
    footerCopyright: "© 2026 Mounir Barbershop. Alle rechten voorbehouden.",
  }
};

export const BOOKING_URL = 'https://calendar.app.google/SWAQ5j7sJ7vq3Q8e8';
export const LOGO_URL = 'https://res.cloudinary.com/dj8vbaevh/image/upload/v1783039152/mb_fluaoa.png';
