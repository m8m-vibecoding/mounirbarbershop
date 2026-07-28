# Architecture SEO, AEO et accessibilité

## Stack et domaine

- React 19, TypeScript, Vite 6, Tailwind CSS 4 et Motion.
- Gestionnaire de paquets : npm.
- Hébergement détecté : Vercel.
- Origine canonique : `https://mounirbarbershop.vercel.app`.
- Langues publiées : français, anglais et néerlandais.

Le domaine provient des canonicals, métadonnées, sitemap et robots.txt déjà présents dans le dépôt. Il est centralisé dans `src/siteConfig.ts`.

## Architecture de rendu

Avant cette modification, Vite livrait une SPA avec un élément `#root` vide. Le contenu, les métadonnées localisées et le JSON-LD dépendaient de JavaScript. Les langues changeaient uniquement l’état React, sans URL distincte.

Le build produit maintenant trois documents HTML complets :

- `/` — français, canonical `https://mounirbarbershop.vercel.app/` ;
- `/en/` — anglais, canonical `https://mounirbarbershop.vercel.app/en/` ;
- `/nl/` — néerlandais, canonical `https://mounirbarbershop.vercel.app/nl/`.

Chaque document contient le contenu principal, la navigation, le pied de page et le JSON-LD avant hydratation. React hydrate ensuite ce HTML. La classe `no-js` garantit que les styles initiaux des animations ne masquent pas le contenu lorsque JavaScript est absent.

Les sections `#services`, `#reviews`, `#booking` et `#contact` ne sont pas des pages autonomes : elles restent des ancres découvrables par liens HTML standards sur chacune des trois pages.

## Routes exclues

- `/404.html` : page technique, `noindex, nofollow`.
- `/fr` et `/fr/` : alias redirigés définitivement vers `/`.
- Les URLs inconnues ne sont pas réécrites vers la SPA et doivent être servies comme 404 par l’hébergement statique.
- Aucun espace privé, API, compte, panier, recherche ou paiement n’existe dans le projet.

## Métadonnées et hreflang

`scripts/prerender.tsx` crée pour chaque route :

- un title et une description uniques ;
- un canonical absolu auto-référent ;
- une directive robots cohérente ;
- Open Graph complet avec locale et locales alternatives ;
- Twitter Card ;
- les alternates `fr-BE`, `en-BE`, `nl-BE` et `x-default`.

Les mêmes alternates réciproques sont présents dans le sitemap.

## Données structurées

Le graphe JSON-LD contient uniquement les données publiques recoupées dans le projet :

- `HairSalon` et `Organization` pour le salon ;
- `WebSite` ;
- `WebPage` ;
- `BreadcrumbList` ;
- `ItemList`, `Service` et `Offer` pour les prestations et prix visibles ;
- `ImageObject` pour le visuel principal.

Les horaires, téléphone, email, fourchette de prix, note agrégée, nombre total d’avis et liens sociaux sont volontairement omis faute de source vérifiable dans le dépôt.

## Sitemap, robots.txt et llms.txt

`npm run generate` produit les trois fichiers depuis la source centrale de routes et de faits.

- Le sitemap contient uniquement les trois URLs canoniques publiques. Il n’utilise ni `lastmod`, ni `changefreq`, ni `priority`, car aucune date éditoriale fiable n’est disponible.
- robots.txt conserve la politique publique d’autorisation existante et la précise pour les agents déjà déclarés. `Perplexity-User` est ajouté à côté de `PerplexityBot`. robots.txt gère le crawl ; il ne garantit ni respect absolu ni indexation.
- llms.txt est une ressource expérimentale factuelle. Il ne remplace ni HTML, ni sitemap.xml, ni robots.txt et ne garantit aucune citation.
- `llms-full.txt` a été retiré : une petite vitrine sans documentation longue ne le justifie pas.

Un sitemap facilite la découverte, mais ne garantit pas l’indexation. Le JSON-LD ne garantit pas l’affichage d’un résultat enrichi.

## Accessibilité et navigation

- Lien d’évitement vers le contenu principal.
- Un seul `main` et un seul H1 par page.
- Liens de langue standards vers des URLs stables, avec `hreflang` et `aria-current`.
- Navigation principale nommée, état actif exposé et menu mobile doté de `aria-expanded` et `aria-controls`.
- Fermeture du menu mobile par Échap avec retour du focus au bouton.
- Focus clavier visible globalement.
- Respect de `prefers-reduced-motion` ; le loader est ignoré dans ce mode.
- Adresse balisée avec `address` et galerie utilisable avec des boutons natifs.
- Le site ne contient pas de formulaire interne : la réservation est un lien externe vers Google Calendar et aucun paiement n’est déclenché par le site.

## Validation automatique

`npm run build` exécute successivement :

1. la génération des fichiers publics ;
2. le build Vite ;
3. le pré-rendu des trois langues ;
4. `scripts/validate-seo.ts`.

Le validateur échoue notamment si une page perd son HTML initial, son H1, son main, ses métadonnées, son canonical, un hreflang, son JSON-LD, un type structuré requis ou un lien de langue. Il contrôle également les doublons, localhost, les horaires et notes agrégées non vérifiés, le sitemap, robots.txt, llms.txt et la 404.

## Hébergement

`vercel.json` configure les redirections françaises, les URLs avec barre finale et les types MIME/cache de sitemap.xml, robots.txt et llms.txt. Vercel doit publier le dossier `dist` généré par `npm run build`.

## Limites et validations humaines nécessaires

Les informations suivantes ne sont pas disponibles de façon vérifiable dans le dépôt et ne sont donc pas publiées dans les données structurées : téléphone, email, horaires, nom légal, numéro d’entreprise/TVA, politiques commerciales, réseaux sociaux officiels et date éditoriale de mise à jour.

Le propriétaire doit aussi confirmer que les trois traductions et tous les prix restent actuels, et que l’origine Vercel est bien le domaine public définitif avant un éventuel passage à un domaine personnalisé.

Google Search Console et Bing Webmaster Tools restent des actions liées aux comptes du propriétaire. Après déploiement :

1. vérifier la propriété HTTPS exacte ;
2. inspecter les trois URLs canoniques ;
3. soumettre `https://mounirbarbershop.vercel.app/sitemap.xml` ;
4. surveiller les rapports d’indexation, hreflang et données structurées ;
5. ne demander une indexation que pour les URLs canoniques publiques.

Aucune soumission Search Console ou Bing n’est effectuée par ce dépôt.
