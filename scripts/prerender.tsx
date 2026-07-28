import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import {
  PUBLIC_ROUTES,
  ROUTES,
  SITE_NAME,
  SOCIAL_IMAGE_URL,
} from '../src/siteConfig';
import { GENERAL_TRANSLATIONS, type Language } from '../src/translations';

const template = await readFile('dist/index.html', 'utf8');
const escapeAttribute = (value: string) =>
  value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

function renderHead(language: Language) {
  const route = ROUTES[language];
  const metadata = GENERAL_TRANSLATIONS[language];
  const alternates = PUBLIC_ROUTES.map(
    (alternate) =>
      `    <link rel="alternate" hreflang="${alternate.hreflang}" href="${alternate.canonical}" />`,
  );
  alternates.push(
    `    <link rel="alternate" hreflang="x-default" href="${PUBLIC_ROUTES[0].canonical}" />`,
  );
  const alternateLocales = PUBLIC_ROUTES.filter(({ language: code }) => code !== language).map(
    ({ ogLocale }) => `    <meta property="og:locale:alternate" content="${ogLocale}" />`,
  );
  const imageAlt = language === 'FR'
    ? 'Coupe réalisée chez MOUNIR BARBERSHOP à Bruxelles'
    : language === 'EN'
      ? 'Haircut at MOUNIR BARBERSHOP in Brussels'
      : 'Kapsel bij MOUNIR BARBERSHOP in Brussel';

  return [
    `    <title>${escapeAttribute(metadata.metaTitle)}</title>`,
    `    <meta name="description" content="${escapeAttribute(metadata.metaDesc)}" />`,
    '    <meta name="robots" content="index, follow, max-image-preview:large" />',
    `    <link rel="canonical" href="${PUBLIC_ROUTES.find((item) => item.language === language)!.canonical}" />`,
    ...alternates,
    '    <meta property="og:type" content="website" />',
    `    <meta property="og:site_name" content="${SITE_NAME}" />`,
    `    <meta property="og:title" content="${escapeAttribute(metadata.metaTitle)}" />`,
    `    <meta property="og:description" content="${escapeAttribute(metadata.metaDesc)}" />`,
    `    <meta property="og:url" content="${PUBLIC_ROUTES.find((item) => item.language === language)!.canonical}" />`,
    `    <meta property="og:image" content="${SOCIAL_IMAGE_URL}" />`,
    `    <meta property="og:image:alt" content="${escapeAttribute(imageAlt)}" />`,
    `    <meta property="og:locale" content="${route.ogLocale}" />`,
    ...alternateLocales,
    '    <meta name="twitter:card" content="summary_large_image" />',
    `    <meta name="twitter:title" content="${escapeAttribute(metadata.metaTitle)}" />`,
    `    <meta name="twitter:description" content="${escapeAttribute(metadata.metaDesc)}" />`,
    `    <meta name="twitter:image" content="${SOCIAL_IMAGE_URL}" />`,
    `    <meta name="twitter:image:alt" content="${escapeAttribute(imageAlt)}" />`,
  ].join('\n');
}

for (const route of PUBLIC_ROUTES) {
  const app = renderToString(<App initialLanguage={route.language} />);
  const html = template
    .replace(/lang="[^"]+"/, `lang="${route.htmlLang}"`)
    .replace(
      /\s*<meta name="app-head" content="replace" \/>\s*<title>MOUNIR BARBERSHOP<\/title>/,
      `\n${renderHead(route.language)}`,
    )
    .replace('<div id="root"></div>', `<div id="root">${app}</div>`);
  const output = route.path === '/' ? 'dist/index.html' : join('dist', route.path, 'index.html');
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html, 'utf8');
  console.log(`Prerendered ${route.path} -> ${output}`);
}
