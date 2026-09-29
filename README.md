# SIN YOLANDA® — Sitio oficial (sin-yolanda.com)

Sitio estático multi-página de la cadena de cantinas con micrófono abierto
(Guadalajara + Texas: San Antonio, The Woodlands, Houston; El Paso próximamente).

## Stack
- HTML/CSS/JS vanilla (sin build). Deploy directo a **Cloudflare Pages**.
- Proyecto Pages: `sin-yolanda-web` → https://sin-yolanda-web.pages.dev
- Dominio objetivo: `sin-yolanda.com` (DNS en Hostinger → pendiente mover nameservers a Cloudflare)

## Estructura
- 12 páginas públicas: home, locations, la-cantina, catering, eventos, tienda,
  el-paso, y 5 sucursales (san-ignacio, maricarmen, san-antonio, the-woodlands, houston)
- Panel interno (no indexado): dashboard, listings, reputation, requests, reports, review-detail
- Datos: `assets/js/mock-data.js` (NAP verificado vs Google Business Profile 24-sep-2026)
- SEO: JSON-LD Restaurant por sucursal (con horarios + geo reales), canonicals,
  sitemap.xml (12 URLs), robots.txt, OG tags

## Deploy
```
npx wrangler pages deploy . --project-name sin-yolanda-web --branch main
```

### Houston (29-sep-2026)

`houston.html` y `en/houston/index.html` son el corte estático de la ficha Astro
de `../sinyolanda-universal/`, importado con `node scripts/import-houston.mjs`
después de construir ese proyecto. El importador copia solo las dependencias
de estas dos páginas y conserva el resto del sitio de Karina. Los enlaces
actuales del home/directorio ya llevan a `houston.html`, que Cloudflare Pages
resuelve como `/houston`. El mapa es el iframe oficial de la ficha de Google
Maps de Houston, sin clave de Cloud; la personalización Simple & Light queda
para una decisión posterior. Cualquier actualización visual se hace primero
en el proyecto Astro y luego se vuelve a importar, probar y publicar.

Rollback de esta publicación: desplegar el commit anterior del proyecto
Cloudflare Pages; el Houston previo permanece recuperable en Git. No borrar
los archivos compartidos ni modificar otras fichas para deshacer este cambio.

## Reservas (canales oficiales)
- Texas: OpenTable (perf 1484191 SA / 1503490 TW / 1524058 HOU)
- Guadalajara: WhatsApp (San Ignacio +52 33 1018 6159 / Maricarmen +52 33 4338 5862)

## Pendientes externos
1. Nameservers Hostinger → Cloudflare (conecta sin-yolanda.com)
2. Alta en Google Search Console
3. Campo "web" en los 6 perfiles GBP apuntando a sin-yolanda.com
