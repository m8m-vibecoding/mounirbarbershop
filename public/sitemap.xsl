<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" />
  <xsl:template match="/">
    <html lang="fr">
      <head>
        <title>Sitemap XML — MOUNIR BARBERSHOP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          body{margin:0;background:#0f0f0f;color:#f5f0e8;font:16px/1.6 system-ui,sans-serif}
          main{max-width:960px;margin:auto;padding:64px 24px}
          h1{font-family:Georgia,serif;color:#d7ad5c;font-size:clamp(2rem,6vw,4rem);margin:0 0 8px}
          p{color:#c9c2b8}table{width:100%;border-collapse:collapse;margin:32px 0;background:#17130f;border:1px solid #6e542d}
          th,td{text-align:left;padding:16px;border-bottom:1px solid #3a2d1c}th{color:#d7ad5c;text-transform:uppercase;letter-spacing:.08em}
          a{color:#f0c66f;overflow-wrap:anywhere}.cta{display:inline-block;padding:12px 18px;border:1px solid #d7ad5c;border-radius:4px}
        </style>
      </head>
      <body>
        <main>
          <h1>Sitemap XML</h1>
          <p>Pages indexables officielles de MOUNIR BARBERSHOP. Les sections et destinations des boutons sont regroupées dans le plan de navigation HTML.</p>
          <table>
            <thead><tr><th>URL canonique</th></tr></thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr><td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc" /></a></td></tr>
              </xsl:for-each>
            </tbody>
          </table>
          <a class="cta" href="/plan-du-site/">Voir toutes les pages, sections et actions</a>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
