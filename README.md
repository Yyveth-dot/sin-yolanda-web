# SIN YOLANDA® — Sitio oficial (sin-yolanda.com)

Sitio estático multi-página de la cadena de cantinas con micrófono abierto
(Guadalajara + Texas: San Antonio, The Woodlands, Houston; El Paso próximamente).

## Stack
- HTML/CSS/JS vanilla (sin build). Deploy directo a **Cloudflare Pages**.
- Proyecto Pages: `sin-yolanda-web` → https://sin-yolanda-web.pages.dev
- Dominio activo: `sin-yolanda.com` (Cloudflare Pages, HTTPS verificado)

## Estructura
- 12 páginas públicas: home, locations, la-cantina, catering, eventos, tienda,
  el-paso, y 4 sucursales (san-ignacio, san-antonio, the-woodlands, houston), más privacidad,
  Houston EN y carta Houston. Maricarmen está archivada, fuera del artefacto público.
- Panel interno (no indexado): dashboard, listings, reputation, requests, reports, review-detail
- Datos: `assets/js/mock-data.js` (NAP verificado vs Google Business Profile 24-sep-2026)
- SEO: JSON-LD Restaurant por sucursal (con horarios + geo reales), canonicals,
  sitemap.xml (12 URLs), robots.txt, OG tags

## Deploy
Pages no está conectado a Git/CI/CD todavía. No desplegar el checkout completo ni cambios dirty:
preparar un artefacto público desde el commit remoto aprobado, sin documentación/scripts/pruebas/
secretos; desplegar ese directorio con Wrangler al proyecto `sin-yolanda-web`, rama `main`, indicando
hash del commit. `node scripts/package-public.mjs <directorio-nuevo>` crea ese artefacto con
allowlist; excluye `archive/`, scripts, pruebas y documentación. Requiere autorización explícita
y rollback; verificar dominio después de publicar.

### Houston (cierre publicado 30-sep-2026)

`houston.html` y `en/houston/index.html` son el corte estático de la ficha Astro
de `../sinyolanda-universal/`, importado con `node scripts/import-houston.mjs`
después de construir ese proyecto. El importador copia solo las dependencias
de las páginas autorizadas y conserva el resto del sitio de Karina. Los enlaces
actuales del home/directorio ya llevan a `houston.html`, que Cloudflare Pages
resuelve como `/houston`. El mapa es el iframe oficial de la ficha de Google
Maps de Houston, sin clave de Cloud; la personalización Simple & Light queda
para una decisión posterior. Cualquier actualización visual se hace primero
en el proyecto Astro y luego se vuelve a importar, probar y publicar.

El cierre publicado usa `BranchLanding.astro` y presentación parametrizada en
`src/data/branch-landing.ts`. El importador conserva su comando, pero delega en `import-branches.mjs`
con `branch-import-manifest.json` explícito por sede/idioma. Comprueba identidad/mapa/schema y permisos
de medios renderizados; copia solo dependencias y rechaza sobrescribir assets compartidos distintos.
Houston EN agregado al sitemap; iframe fijo con lazy, privacidad y preferencia `sy-lang`.
Carta HO_ING existente autorizada por Luis e integrada en `/houston/menu/`, EN como fallback para
Houston ES/EN, HTML/schema/búsqueda sin notas internas. Tres páginas empaquetadas; imports relativos
recorridos para incluir módulos comunes. Medición conectada al registro Umami propio de
`sin-yolanda.com`, alta autorizada el 30-sep y recolector verificado con evento QA etiquetado.
Allowlist dominio/www, Do Not Track y URL sin query/hash; localhost/demo excluidos.
No usar el tracker de otro WordPress. QA desde el dominio confirmó páginas ES/EN/carta y
`menu_click`; esos accesos de prueba no acreditan visitas o reservas comerciales.
El Paso no está
en el manifiesto: permanece local hasta su revisión propia. No desplegar automáticamente el árbol
dirty. Evidencia/gates → `../../vault/clientes/sin-yolanda/multisucursal/AUDITORIA-HOUSTON-BASE-SUCURSALES-2026-09-30.md`.

Rollback de esta publicación: desplegar el commit anterior del proyecto
Cloudflare Pages; el Houston previo permanece recuperable en Git. No borrar
los archivos compartidos ni modificar otras fichas para deshacer este cambio.
Release: PR #2, merge `4e33d2213a0800ad5d16f1d526a8fff159942233`, deploy
`27ba4101-5ab0-40ed-81ec-eeee289566ff`; rollback al deploy anterior
`d6197211-ec7a-4500-ac55-d5a3e411810e`. Home y otras fichas de Karina conservados.
Las próximas sedes se preparan localmente con identidad/datos propios y aprobación individual;
continuación canónica en el plan operativo del vault, no en este artefacto.

## Reservas (canales oficiales)
- Texas: OpenTable (perf 1484191 SA / 1503490 TW / 1524058 HOU)
- Guadalajara: WhatsApp (San Ignacio +52 33 1018 6159)

## Pendientes externos
1. Automatización de despliegue Git/CI/CD (diferida; no modifica este release)
2. Alta en Google Search Console
3. Campo "web" en los 6 perfiles GBP apuntando a sin-yolanda.com
