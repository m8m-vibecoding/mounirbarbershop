import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { AGENCY_URL, BOOKING_URL, DIRECTIONS_URL, NAVIGATION_SECTIONS, PUBLIC_ROUTES, SITE_MAP_PATH, SITE_ORIGIN } from '../src/siteConfig';

const failures: string[] = [];
const titles = new Set<string>();
const descriptions = new Set<string>();
const canonicals = new Set<string>();
const requiredSchemaTypes = ['Organization', 'WebSite', 'WebPage', 'BreadcrumbList', 'ItemList'];

function expect(condition: unknown, message: string) {
  if (!condition) failures.push(message);
}

for (const route of PUBLIC_ROUTES) {
  const file = route.path === '/' ? 'dist/index.html' : join('dist', route.path, 'index.html');
  const html = await readFile(file, 'utf8');
  const size = (await stat(file)).size;
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/ )?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/ )?.[1];
  const rootIsEmpty = html.includes('<div id="root"></div>');
  const jsonLd = html.match(/<script id="mounir-barbershop-jsonld" type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];

  expect(size < 1_000_000, `${file}: HTML unexpectedly exceeds 1 MB`);
  expect(!rootIsEmpty && html.includes('id="app-root-layout"'), `${file}: React root is empty`);
  expect(html.includes(`lang="${route.htmlLang}"`), `${file}: incorrect html lang`);
  expect(html.includes('<main id="main-content"'), `${file}: missing main landmark`);
  expect((html.match(/<h1/g) ?? []).length === 1, `${file}: expected exactly one h1`);
  expect(Boolean(title), `${file}: missing title`);
  expect(Boolean(description), `${file}: missing meta description`);
  expect(html.includes('name="robots" content="index, follow, max-image-preview:large"'), `${file}: missing robots meta`);
  expect(canonical === route.canonical, `${file}: canonical mismatch`);
  expect(html.includes('property="og:site_name"'), `${file}: missing Open Graph site name`);
  expect(html.includes(`property="og:url" content="${route.canonical}"`), `${file}: Open Graph URL mismatch`);
  expect(html.includes('name="twitter:card" content="summary_large_image"'), `${file}: missing Twitter card`);
  expect(html.includes('hreflang="x-default"'), `${file}: missing x-default`);
  for (const alternate of PUBLIC_ROUTES) {
    expect(html.includes(`hreflang="${alternate.hreflang}" href="${alternate.canonical}"`), `${file}: missing hreflang ${alternate.hreflang}`);
    expect(html.includes(`href="${alternate.path}"`) || html.includes(`href="${alternate.path}#`), `${file}: language route ${alternate.path} is not linked`);
  }
  expect(Boolean(jsonLd), `${file}: missing JSON-LD`);
  if (jsonLd) {
    try {
      const data = JSON.parse(jsonLd) as { '@graph'?: Array<Record<string, unknown>> };
      const types = new Set(data['@graph']?.flatMap((item) => Array.isArray(item['@type']) ? item['@type'] : [item['@type']]) ?? []);
      for (const type of requiredSchemaTypes) expect(types.has(type), `${file}: JSON-LD missing ${type}`);
    } catch (error) {
      failures.push(`${file}: JSON-LD is not parseable (${String(error)})`);
    }
  }
  expect(!html.includes('aggregateRating'), `${file}: unverified aggregate rating present`);
  expect(!html.includes('openingHoursSpecification'), `${file}: unverified hours present`);
  expect(!/localhost|127\.0\.0\.1/.test(html), `${file}: local domain leaked`);
  if (title) { expect(!titles.has(title), `${file}: duplicate title`); titles.add(title); }
  if (description) { expect(!descriptions.has(description), `${file}: duplicate description`); descriptions.add(description); }
  if (canonical) { expect(!canonicals.has(canonical), `${file}: duplicate canonical`); canonicals.add(canonical); }
}

const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const robots = await readFile('dist/robots.txt', 'utf8');
const llms = await readFile('dist/llms.txt', 'utf8');
const notFound = await readFile('dist/404.html', 'utf8');
const sitemapStylesheet = await readFile('dist/sitemap.xsl', 'utf8');
const siteMapPage = await readFile('dist/plan-du-site/index.html', 'utf8');
const sitemapLocs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

expect(sitemap.startsWith('<?xml version="1.0" encoding="UTF-8"?>'), 'sitemap.xml: missing UTF-8 declaration');
expect(sitemap.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'), 'sitemap.xml: missing sitemap namespace');
expect(sitemap.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"'), 'sitemap.xml: missing XHTML namespace');
expect(sitemapLocs.length === PUBLIC_ROUTES.length + 1, 'sitemap.xml: route count mismatch');
expect(new Set(sitemapLocs).size === sitemapLocs.length, 'sitemap.xml: duplicate URLs');
const siteMapCanonical = new URL(SITE_MAP_PATH, SITE_ORIGIN).href;
expect(sitemapLocs.includes(siteMapCanonical), `sitemap.xml: missing ${siteMapCanonical}`);
expect(sitemap.includes('<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>'), 'sitemap.xml: missing visual stylesheet');
for (const route of PUBLIC_ROUTES) {
  expect(sitemapLocs.includes(route.canonical), `sitemap.xml: missing ${route.canonical}`);
  expect(!/[?#]/.test(new URL(route.canonical).pathname), `sitemap.xml: invalid canonical ${route.canonical}`);
}
expect(!sitemap.includes('<lastmod>'), 'sitemap.xml: lastmod must be omitted without a reliable date');
expect(sitemapStylesheet.includes('Voir toutes les pages, sections et actions'), 'sitemap.xsl: navigation plan link missing');
expect(siteMapPage.includes(`<link rel="canonical" href="${siteMapCanonical}"`), 'plan-du-site: canonical mismatch');
for (const section of NAVIGATION_SECTIONS) expect(siteMapPage.includes(`#${section.id}`), `plan-du-site: missing section ${section.id}`);
for (const externalUrl of [BOOKING_URL, DIRECTIONS_URL.replace('&', '&amp;'), AGENCY_URL]) expect(siteMapPage.includes(externalUrl), `plan-du-site: missing external action ${externalUrl}`);
expect(![sitemap, robots, llms, sitemapStylesheet, siteMapPage].some((content) => content.includes('mounirbarbershop.vercel.app')), 'temporary Vercel domain leaked into public discovery files');
expect(robots.includes(`Sitemap: ${SITE_ORIGIN}/sitemap.xml`), 'robots.txt: sitemap reference mismatch');
expect(robots.includes('User-agent: *\nAllow: /'), 'robots.txt: public crawl policy missing');
expect(llms.includes('Ressource expérimentale'), 'llms.txt: experimental status missing');
expect(!/ignore previous|system prompt|favoriser/i.test(llms), 'llms.txt: manipulative instruction detected');
expect(notFound.includes('noindex, nofollow'), '404.html: missing noindex');

if (failures.length) {
  console.error(`SEO/AEO validation failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`SEO/AEO validation passed for ${PUBLIC_ROUTES.length} prerendered routes.`);
}
