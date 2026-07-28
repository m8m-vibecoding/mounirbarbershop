import { mkdir, writeFile } from 'node:fs/promises';
import {
  BUSINESS_FACTS,
  PUBLIC_ROUTES,
  ROUTES,
  SITE_NAME,
  SITE_ORIGIN,
} from '../src/siteConfig';
import { GENERAL_TRANSLATIONS, SERVICES_TRANSLATIONS } from '../src/translations';

await mkdir('public', { recursive: true });

const alternates = PUBLIC_ROUTES.map(
  (route) =>
    `    <xhtml:link rel="alternate" hreflang="${route.hreflang}" href="${route.canonical}" />`,
).join('\n');
const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_ORIGIN}/" />`;
const languageUrls = PUBLIC_ROUTES.map(
  (route) => `  <url>
    <loc>${route.canonical}</loc>
${alternates}
${xDefault}
  </url>`,
).join('\n');
const sitemapPageCanonical = new URL('/plan-du-site/', SITE_ORIGIN).href;
const urls = `${languageUrls}\n  <url>\n    <loc>${sitemapPageCanonical}</loc>\n  </url>`;
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

const robots = `User-agent: *
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`;

const services = SERVICES_TRANSLATIONS.FR.map(
  (service) => `- **${service.name}** — ${service.description} Prix affiché : ${service.price} €.`,
).join('\n');
const llms = `# ${SITE_NAME}

Ressource expérimentale complémentaire pour décrire le contenu public du site. Elle ne remplace ni les pages HTML, ni robots.txt, ni sitemap.xml.

${SITE_NAME} est un salon de coiffure pour hommes et garçons à Bruxelles. Les prestations et prix ci-dessous proviennent du contenu public du site.

## Pages principales

- [Accueil en français](${SITE_ORIGIN}/) : présentation, services, prix, avis publiés, réservation et adresse.
- [English](${SITE_ORIGIN}${ROUTES.EN.path}) : version anglaise publiée.
- [Nederlands](${SITE_ORIGIN}${ROUTES.NL.path}) : version néerlandaise publiée.
- [Services et tarifs](${SITE_ORIGIN}/#services) : liste officielle des prestations et prix visibles.
- [Réservation](${SITE_ORIGIN}/#booking) : lien vers le prestataire de réservation Google Calendar.
- [Contact et adresse](${SITE_ORIGIN}/#contact) : localisation du salon.

## Services et tarifs publics

${services}

## Informations factuelles

- Nom : ${BUSINESS_FACTS.name}
- Adresse : ${BUSINESS_FACTS.address.streetAddress}, ${BUSINESS_FACTS.address.postalCode} ${BUSINESS_FACTS.address.addressLocality}, Belgique
- Langues publiées : français, anglais et néerlandais
- Devise des prix affichés : EUR
- Prestataire de réservation : ${BUSINESS_FACTS.bookingProvider}

Aucun téléphone, email, horaire, identifiant légal ou politique commerciale n'est publié dans ce fichier faute de source vérifiable dans le projet.

## Ressources machine

- [Sitemap XML](${SITE_ORIGIN}/sitemap.xml)
- [Politique de crawl](${SITE_ORIGIN}/robots.txt)

## Fraîcheur

La source officielle des prix est la section [Services et tarifs](${SITE_ORIGIN}/#services). Aucune date de mise à jour n'est déclarée sans date éditoriale fiable.
`;

await Promise.all([
  writeFile('public/sitemap.xml', sitemap, 'utf8'),
  writeFile('public/robots.txt', robots, 'utf8'),
  writeFile('public/llms.txt', llms, 'utf8'),
]);

console.log(`Generated sitemap.xml (${PUBLIC_ROUTES.length + 1} URLs), robots.txt and llms.txt.`);
