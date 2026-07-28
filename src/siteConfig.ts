export type SiteLanguage = 'FR' | 'EN' | 'NL';

export const SITE_ORIGIN = 'https://mounirbarbershop.vercel.app';
export const SITE_NAME = 'MOUNIR BARBERSHOP';
export const DEFAULT_LANGUAGE: SiteLanguage = 'FR';

export const LOGO_URL =
  'https://res.cloudinary.com/dj8vbaevh/image/upload/v1783039152/mb_fluaoa.png';
export const SOCIAL_IMAGE_URL =
  'https://res.cloudinary.com/dj8vbaevh/image/upload/v1783043502/layered_cut_by_mounir_barbershop_mydyqs.png';
export const BOOKING_URL = 'https://calendar.app.google/SWAQ5j7sJ7vq3Q8e8';
export const DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=Av.+de+la+Reine+201%2C+1000+Bruxelles%2C+Belgique';

export const BUSINESS_FACTS = {
  name: SITE_NAME,
  address: {
    streetAddress: 'Av. de la Reine 201',
    postalCode: '1000',
    addressLocality: 'Bruxelles',
    addressCountry: 'BE',
  },
  geo: { latitude: 50.871616, longitude: 4.361993 },
  currenciesAccepted: 'EUR',
  bookingProvider: 'Google Calendar',
  publicLanguages: ['fr', 'en', 'nl'],
} as const;

export const ROUTES: Record<
  SiteLanguage,
  {
    path: string;
    htmlLang: string;
    hreflang: string;
    ogLocale: string;
    label: string;
  }
> = {
  FR: {
    path: '/', htmlLang: 'fr', hreflang: 'fr-BE', ogLocale: 'fr_BE', label: 'Français',
  },
  EN: {
    path: '/en/', htmlLang: 'en', hreflang: 'en-BE', ogLocale: 'en_BE', label: 'English',
  },
  NL: {
    path: '/nl/', htmlLang: 'nl', hreflang: 'nl-BE', ogLocale: 'nl_BE', label: 'Nederlands',
  },
};

export const PUBLIC_LANGUAGES = Object.keys(ROUTES) as SiteLanguage[];
export const PUBLIC_ROUTES = PUBLIC_LANGUAGES.map((language) => ({
  language,
  ...ROUTES[language],
  canonical: new URL(ROUTES[language].path, SITE_ORIGIN).href,
}));

export function canonicalFor(language: SiteLanguage) {
  return new URL(ROUTES[language].path, SITE_ORIGIN).href;
}

export function languageFromPath(pathname: string): SiteLanguage {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'EN';
  if (pathname === '/nl' || pathname.startsWith('/nl/')) return 'NL';
  return DEFAULT_LANGUAGE;
}

export function localizedSectionUrl(language: SiteLanguage, section: string) {
  return `${ROUTES[language].path}#${section}`;
}
