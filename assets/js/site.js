(function () {
  "use strict";

  const data = window.SY_DATA;
  const page = document.body.dataset.page || "home";
  const branchId = document.body.dataset.branch || "";
  const root = document.getElementById("site-shell");

  const branchById = (id) => data.branches.find((branch) => branch.id === id);
  const displayRating = (value) => (value ? value.toFixed(1) : "—");
  const demoNote = `<p class="prototype-note">Datos de sucursales verificados con Google Business Profile · 24 sep 2026 · Bandeja de reseñas y flujos internos en demostración</p>`;
  const statusBadge = (label, tone = "neutral") => `<span class="status status-${tone}">${label}</span>`;

  function publicHeader() {
    return `
      <div class="demo-bar">SIN YOLANDA® · Cantinas con micrófono abierto · Guadalajara y Texas</div>
      <header class="public-header">
        <a class="brand" href="index.html" aria-label="Sin Yolanda, inicio">
          <img src="assets/media/brand-logo.jpg" alt="Sin Yolanda" />
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="public-nav">Menú</button>
        <nav id="public-nav" class="public-nav" aria-label="Navegación principal">
          <a href="index.html">Inicio</a>
          <a href="la-cantina.html">La Cantina</a>
          <a href="catering.html">Catering</a>
          <a href="locations.html">Ubicaciones</a>
          <a href="eventos.html">Eventos</a>
          <a class="nav-panel" href="dashboard.html" rel="nofollow">Panel</a>
        </nav>
      </header>`;
  }

  function publicFooter() {
    return `
      <footer class="public-footer">
        <div>
          <img src="assets/media/brand-logo.jpg" alt="Sin Yolanda" />
          <p>Una marca que vive en cada ciudad: Guadalajara y Texas.</p>
        </div>
        <div>
          <strong>Explora</strong>
          <a href="la-cantina.html">La Cantina</a>
          <a href="catering.html">Catering</a>
          <a href="eventos.html">Eventos</a>
          <a href="locations.html">Ubicaciones</a>
          <a href="el-paso.html">El Paso</a>
        </div>
        <div>
          <strong>Sucursales abiertas</strong>
          <a href="san-ignacio.html">San Ignacio · Av. San Ignacio 78, Zapopan, Jal.</a>
          <a href="maricarmen.html">Maricarmen · Av. Rubén Darío 1045-A, Zapopan, Jal.</a>
          <a href="san-antonio.html">San Antonio · 415 E Commerce St, TX</a>
          <a href="the-woodlands.html">The Woodlands · 1400 Research Forest Dr, Shenandoah, TX</a>
          <a href="houston.html">Houston · 4901 Washington Ave, TX</a>
        </div>
        <div>
          <strong>Próximamente</strong>
          <span>El Paso · 340 Vin Rambla Dr, TX</span>
          <span>Moreno Valley, CA</span>
          <span>San Diego, CA</span>
        </div>
        <div>
          <strong>Reservaciones</strong>
          <p>OpenTable en Texas · WhatsApp en Guadalajara.</p>
          <a class="footer-hub" href="dashboard.html" rel="nofollow">Digital Hub · Panel interno</a>
        </div>
      </footer>`;
  }

  function internalNav() {
    const links = [
      ["dashboard", "dashboard.html", "Resumen"],
      ["branches", "dashboard.html#branch-comparison", "Sucursales"],
      ["listings", "listings.html", "Listings"],
      ["reputation", "reputation.html", "Reputación"],
      ["alerts", "reputation.html#alerts", "Alertas"],
      ["requests", "requests.html", "Solicitudes"],
      ["reports", "reports.html", "Reportes"],
    ];
    return `
      <aside class="sidebar" id="dashboard-nav">
        <a class="sidebar-brand" href="index.html">
          <img src="assets/media/brand-logo.jpg" alt="Sin Yolanda" />
          <span>Digital Hub</span>
        </a>
        <nav aria-label="Navegación del panel">
          ${links.map(([key, href, label]) => `<a class="${page === key || (page === "review-detail" && key === "reputation") ? "active" : ""}" href="${href}">${label}</a>`).join("")}
        </nav>
        <div class="sidebar-foot">
          <span>Panel interno</span>
          <a href="index.html">Ver sitio público</a>
        </div>
      </aside>`;
  }

  function internalTopbar(title, eyebrow) {
    return `
      <header class="dashboard-topbar">
        <button class="dashboard-menu" type="button" aria-expanded="false" aria-controls="dashboard-nav">Menú</button>
        <div>
          <p>${eyebrow}</p>
          <h1>${title}</h1>
        </div>
        <div class="topbar-controls">
          <label><span>Sucursal</span><select id="global-branch"><option value="all">Todas las sucursales</option>${data.branches.map((branch) => `<option value="${branch.id}">${branch.shortName}</option>`).join("")}</select></label>
          <label><span>Periodo</span><select><option>Septiembre 2026</option><option>Últimos 90 días</option><option>Este año</option></select></label>
          <div class="profile-chip"><span>KM</span><div><strong>Vista dirección</strong><small>Actualizado 24 · sep</small></div></div>
        </div>
      </header>`;
  }

  function internalLayout(title, eyebrow, content) {
    return `
      <div class="dashboard-shell">
        ${internalNav()}
        <div class="dashboard-main">
          ${internalTopbar(title, eyebrow)}
          <main class="dashboard-content">${demoNote}${content}</main>
        </div>
      </div>`;
  }

  function locationCard(branch) {
    const isSoon = branch.status === "coming-soon";
    return `
      <article class="location-card" data-region="${branch.region}">
        <div class="location-card-media">
          <img src="${branch.image}" alt="${branch.name}" />
          ${statusBadge(branch.statusLabel, isSoon ? "warning" : "success")}
        </div>
        <div class="location-card-body">
          <p>${branch.city} · ${branch.country}</p>
          <h3>${branch.name}</h3>
          <span>${branch.concept}</span>
          <div class="card-actions">
            ${isSoon
              ? `${branch.socialUrl
                  ? `<a class="button button-primary" href="${branch.socialUrl}" target="_blank" rel="noopener">Seguir la apertura</a>`
                  : ""}<button class="button ${branch.socialUrl ? "button-ghost" : "button-primary"}" type="button" data-open-modal="news">Recibir novedades</button>`
              : `<a class="button button-primary" href="${branch.reserveChannel === "opentable" ? branch.reserveUrl : `https://wa.me/${branch.whatsapp}`}" target="_blank" rel="noopener">Reservar</a>
                 <a class="button button-ghost" href="${branch.page}">Ver sucursal</a>
                 <a class="text-button" href="${branch.mapsUrl}" target="_blank" rel="noopener">Cómo llegar</a>`}
          </div>
        </div>
      </article>`;
  }

  function homePage() {
    return `
      ${publicHeader()}
      <main>
        <section class="home-hero">
          <img src="assets/media/hero-night.webp" alt="Celebración en Sin Yolanda" />
          <div class="hero-overlay"></div>
          <div class="hero-copy">
            <p class="eyebrow">México · Estados Unidos</p>
            <h1>Una experiencia.<br /><span class="hero-sans">Ocho destinos.</span></h1>
            <p>Descubre Sin Yolanda en México y Estados Unidos. Cada ubicación conserva la esencia de la marca con una experiencia propia.</p>
            <div class="hero-actions">
              <a class="button button-primary" href="locations.html">Explorar ubicaciones</a>
              <a class="button button-light" href="#reserve">Reservar</a>
            </div>
          </div>
          <div class="hero-index"><strong>05</strong><span>sucursales abiertas</span><strong>01</strong><span>próxima apertura</span></div>
        </section>

        <section class="section location-showcase">
          <div class="section-heading">
            <div><p class="eyebrow">Una marca, presencia local</p><h2 class="reveal">Elige tu próxima noche.</h2></div>
            <p>Cada página organiza información, reservaciones y descubrimiento local sin perder la identidad de la marca.</p>
          </div>
          <div class="filter-row" aria-label="Filtrar ubicaciones">
            <button class="filter active" type="button" data-filter="all">Todas</button>
            <button class="filter" type="button" data-filter="mx">México</button>
            <button class="filter" type="button" data-filter="us">Estados Unidos</button>
            <button class="filter" type="button" data-filter="soon">Próximamente</button>
          </div>
          <div class="location-grid">${data.branches.map(locationCard).join("")}</div>
        </section>

        <section class="experience-section" id="experience">
          <div class="experience-photo"><img src="assets/media/karaoke.webp" alt="Noche de karaoke en Sin Yolanda" /></div>
          <div class="experience-copy">
            <p class="eyebrow">La experiencia Sin Yolanda</p>
            <h2 class="reveal">Una noche que se recuerda.</h2>
            <p>Gastronomía, música, celebraciones, vida nocturna y hospitalidad se conectan en una experiencia de marca reconocible.</p>
            <div class="experience-list">
              <div><strong>01</strong><span>Gastronomía mexicana contemporánea</span></div>
              <div><strong>02</strong><span>Música y participación social</span></div>
              <div><strong>03</strong><span>Celebraciones con intención</span></div>
              <div><strong>04</strong><span>Hospitalidad local, visión corporativa</span></div>
            </div>
          </div>
        </section>

        <section class="section events-preview" id="events">
          <div class="section-heading"><div><p class="eyebrow">Agenda</p><h2 class="reveal">Momentos para compartir.</h2></div><p>Cada sucursal administra su agenda; confirma disponibilidad al reservar.</p></div>
          <div class="event-grid">${data.events.map((event) => `<article><span>${event.date}</span><h3>${event.title}</h3><p>${event.description}</p><a class="text-button" href="locations.html">Reservar evento</a></article>`).join("")}</div>
        </section>

        <section class="reserve-cta" id="reserve">
          <div><p class="eyebrow">Tu próxima historia comienza aquí</p><h2 class="reveal">Elige ubicación.<br />Nosotros hacemos el resto.</h2></div>
          <div><p>Reserva por el canal oficial de tu sucursal: OpenTable en Texas y WhatsApp en Guadalajara.</p><a class="button button-light" href="locations.html">Elegir ubicación</a></div>
        </section>
      </main>
      ${publicFooter()}
      ${modalMarkup()}`;
  }

  function locationsPage() {
    return `
      ${publicHeader()}
      <main>
        <section class="page-hero compact-hero">
          <img src="assets/media/dining.webp" alt="Interior de Sin Yolanda" />
          <div class="hero-overlay"></div>
          <div><p class="eyebrow">Presencia multisucursal</p><h1>Ocho formas de vivir Sin Yolanda.</h1><p>México y Estados Unidos conectados bajo una estructura clara, local y escalable.</p></div>
        </section>
        <section class="section">
          <div class="filter-row" aria-label="Filtrar ubicaciones">
            <button class="filter active" type="button" data-filter="all">Todas</button>
            <button class="filter" type="button" data-filter="mx">México</button>
            <button class="filter" type="button" data-filter="us">Estados Unidos</button>
            <button class="filter" type="button" data-filter="soon">Próximamente</button>
          </div>
          <div class="location-grid detailed">${data.branches.map(locationCard).join("")}</div>
          <p class="data-caveat">Direcciones, teléfonos y horarios verificados contra Google Business Profile el 24 de septiembre de 2026.</p>
        </section>
      </main>
      ${publicFooter()}
      ${modalMarkup()}`;
  }

  function reservationModule(branch) {
    const isOpentable = branch.reserveChannel === "opentable";
    const reserveHref = isOpentable
      ? branch.reserveUrl
      : `https://wa.me/${branch.whatsapp}?text=${encodeURIComponent("Hola, quiero reservar una mesa en " + branch.name + ".")}`;
    const reserveLabel = isOpentable ? "Reservar en OpenTable" : "Reservar por WhatsApp";
    const reserveMark = isOpentable ? "OpenTable" : "WhatsApp";
    const reserveSmall = isOpentable ? "Canal oficial de reservación" : "Canal oficial de la sucursal";
    return `
      <section class="reservation-module" id="branch-reservation" aria-labelledby="reservation-title">
        <div class="reservation-intro">
          <p class="eyebrow">Reservaciones</p>
          <h2 id="reservation-title" class="reveal">Reservar en ${branch.name}</h2>
          <p>Reserva tu mesa por el canal oficial de la sucursal o llámanos directamente. El equipo confirma disponibilidad durante el horario de operación.</p>
          <div class="reservation-benefits">
            <span><strong>01</strong> Canal oficial</span>
            <span><strong>02</strong> Confirmación del equipo</span>
            <span><strong>03</strong> Grupos y celebraciones</span>
          </div>
        </div>
        <div class="reservation-card">
          <div class="reservation-view-heading">
            <div><span class="channel-mark">${reserveMark}</span><small>${reserveSmall}</small></div>
            ${statusBadge("Activo", "success")}
          </div>
          <p><strong>Horarios:</strong> ${branch.hours}</p>
          <p><strong>Teléfono:</strong> <a href="tel:${branch.phoneIntl}">${branch.phone}</a></p>
          <p><strong>Dirección:</strong> ${branch.address}</p>
          <div class="reservation-actions">
            <a class="button reservation-submit" href="${reserveHref}" target="_blank" rel="noopener">${reserveLabel}</a>
            <a class="button button-ghost" href="tel:${branch.phoneIntl}">Llamar a la sucursal</a>
          </div>
          <p class="reservation-disclaimer">Las reservaciones se confirman por el canal oficial de la sucursal dentro del horario de operación.</p>
        </div>
      </section>`;
  }

  function reservationChannelsPanel() {
    return `
      <section class="panel reservation-channels-panel">
        <div class="panel-heading">
          <div><p class="eyebrow">Canales de reservación</p><h2>Cómo llegan las solicitudes</h2></div>
          <span class="legend">Distribución demostrativa por sucursal</span>
        </div>
        <div class="table-wrap">
          <table class="channel-table">
            <thead><tr><th>Sucursal</th><th>OpenTable</th><th>Direct Website</th><th>WhatsApp</th><th>Teléfono</th></tr></thead>
            <tbody>${data.reservationChannels.map((row) => `
              <tr>
                <td><strong>${row.branch}</strong></td>
                <td><div class="channel-value"><i style="width:${row.openTable}%"></i><span>${row.openTable}%</span></div></td>
                <td><div class="channel-value direct"><i style="width:${row.direct}%"></i><span>${row.direct}%</span></div></td>
                <td><div class="channel-value whatsapp"><i style="width:${row.whatsapp}%"></i><span>${row.whatsapp}%</span></div></td>
                <td><div class="channel-value phone"><i style="width:${row.phone}%"></i><span>${row.phone}%</span></div></td>
              </tr>`).join("")}
            </tbody>
          </table>
        </div>
        <p class="channel-note">Los porcentajes son simulados y muestran cómo el sistema podría comparar canales sin sustituir las plataformas existentes.</p>
      </section>`;
  }

  function quoteCards(branch) {
    if (branch.quotes && branch.quotes.length) {
      return branch.quotes.map((quote) => `<div class="quote-card reveal-scale" style="animation-delay:0.1s"><span>${"★".repeat(quote.stars)}${"☆".repeat(5 - quote.stars)}</span><blockquote>“${quote.text}”</blockquote><p>${quote.source}</p></div>`).join("");
    }
    return `<div class="quote-card"><span>${"★".repeat(Math.round(branch.rating))}${"☆".repeat(5 - Math.round(branch.rating))}</span><blockquote>Calificación ${branch.rating}★ con ${branch.reviewsTotal} reseñas en Google.</blockquote><p><a href="${branch.gbpUrl}" target="_blank" rel="noopener">Ver reseñas en Google Maps</a></p></div>`;
  }

  function branchPage() {
    const branch = branchById(branchId) || data.branches[0];
    return `
      ${publicHeader()}
      <main>
        <section class="branch-hero">
          <img src="${branch.image}" alt="${branch.name}" />
          <div class="hero-overlay"></div>
          <div class="branch-hero-copy">
            <nav class="breadcrumbs" aria-label="Ruta"><a href="index.html">Inicio</a><span>/</span><a href="locations.html">Ubicaciones</a><span>/</span><span>${branch.shortName}</span></nav>
            <p class="eyebrow">${branch.city} · ${branch.country}</p>
            <h1>${branch.name}</h1>
            <p>${branch.summary}</p>
            <div class="hero-actions">
              <button class="button button-primary" type="button" data-scroll-to="branch-reservation">Reservar</button>
              <a class="button button-light" href="tel:${branch.phoneIntl}">Llamar</a>
              <a class="button button-ghost-light" href="${branch.mapsUrl}" target="_blank" rel="noopener">Cómo llegar</a>
            </div>
          </div>
          <div class="branch-status">${statusBadge(branch.statusLabel, "success")}<span>Perfil verificado en Google</span></div>
        </section>

        <section class="section branch-practical">
          <div><p class="eyebrow">Información práctica</p><h2 class="reveal">Todo lo necesario antes de llegar.</h2><p class="data-caveat">NAP verificado contra Google Business Profile el 24 de septiembre de 2026.</p></div>
          <dl>
            <div><dt>Dirección</dt><dd><a href="${branch.mapsUrl}" target="_blank" rel="noopener">${branch.address}</a></dd></div>
            <div><dt>Horarios</dt><dd>${branch.hours}</dd></div>
            <div><dt>Teléfono</dt><dd><a href="tel:${branch.phoneIntl}">${branch.phone}</a></dd></div>
            <div><dt>Reservaciones</dt><dd>${branch.reserveChannel === "opentable" ? `<a href="${branch.reserveUrl}" target="_blank" rel="noopener">Reservar en OpenTable</a>` : `<a href="https://wa.me/${branch.whatsapp}" target="_blank" rel="noopener">WhatsApp ${branch.phone}</a>`}</dd></div>
            <div><dt>Estacionamiento</dt><dd>${branch.parking}</dd></div>
            <div><dt>Accesibilidad</dt><dd>${branch.accessibility}</dd></div>
          </dl>
        </section>

        ${reservationModule(branch)}

        <section class="menu-highlight">
          <div><img src="assets/media/cocktail.webp" alt="Coctel de Sin Yolanda" /></div>
          <div><p class="eyebrow">Menú de muestra</p><h2 class="reveal">Sabores que acompañan la experiencia.</h2><p>Una selección breve para demostrar cómo el menú puede adaptarse por ciudad, idioma y disponibilidad.</p><div class="mini-menu"><span>Coctelería de autor</span><span>Entradas para compartir</span><span>Cocina mexicana</span><span>Brunch seleccionado</span></div><a class="button button-primary" href="${branch.menuUrl}" target="_blank" rel="noopener">Ver menú</a></div>
        </section>

        <section class="section">
          <div class="section-heading"><div><p class="eyebrow">Eventos</p><h2 class="reveal">Una agenda propia.</h2></div><p>Programación de ejemplo para mostrar el flujo de comunicación y reservación.</p></div>
          <div class="event-grid">${data.events.map((event) => `<article><span>${event.date}</span><h3>${event.title}</h3><p>${event.description}</p><a class="text-button" href="${branch.reserveChannel === "opentable" ? branch.reserveUrl : `https://wa.me/${branch.whatsapp}`}" target="_blank" rel="noopener">Reservar</a></article>`).join("")}</div>
        </section>

        <section class="gallery-section"><div class="section-heading"><div><p class="eyebrow">Galería</p><h2 class="reveal">La atmósfera habla primero.</h2></div></div><div class="gallery-grid">${branch.gallery.map((image, index) => `<img src="${image}" alt="${branch.shortName}, fotografía de ambiente ${index + 1}" />`).join("")}</div></section>

        <section class="section split-section">
          <div>
            <p class="eyebrow">Reseñas destacadas</p><h2 class="reveal">Experiencias que construyen confianza.</h2>
            ${quoteCards(branch)}
            <div class="owner-response"><strong>Respuesta de propietario</strong><p>Gracias por compartir tu experiencia. Esperamos recibirte nuevamente muy pronto.</p></div>
          </div>
          <div>
            <p class="eyebrow">Directorios preparados</p><h2>Consistencia en cada búsqueda.</h2>
            <div class="directory-grid">${["Google", "Apple Maps", "Bing", "Waze", "Tripadvisor", ...(branch.region === "us" ? ["Yelp"] : [])].map((directory) => directory === "Google" ? `<button type="button" onclick="window.open('${branch.gbpUrl}', '_blank', 'noopener')">Google<span>Verificado</span></button>` : `<button type="button" data-demo-action="El enlace oficial de ${directory} se completa con la verificación de listings.">${directory}<span>En proceso</span></button>`).join("")}</div>
          </div>
        </section>

        <section class="section faq-section"><p class="eyebrow">Preguntas frecuentes</p><h2 class="reveal">Antes de reservar.</h2>${["¿Cómo reservar?", "¿Aceptan grupos?", "¿Dónde estacionarse?", "¿Los horarios cambian durante eventos?", "¿Cómo confirmar una reservación?"].map((question) => `<details><summary>${question}</summary><p>El equipo de la sucursal confirma detalles de grupos, estacionamiento y eventos al reservar por WhatsApp, teléfono u OpenTable.</p></details>`).join("")}</section>
      </main>
      ${publicFooter()}
      ${modalMarkup()}`;
  }

  function kpiCard(value, label, note, tone = "") {
    return `<article class="kpi-card ${tone}"><span>${label}</span><strong>${value}</strong><small>${note}</small></article>`;
  }

  function branchComparisonRows() {
    return data.branches.map((branch) => `
      <tr>
        <td><strong>${branch.shortName}</strong><small>${branch.city}</small></td>
        <td>${branch.country}</td>
        <td>${displayRating(branch.rating)}</td>
        <td>${branch.newReviews}</td>
        <td>${branch.pendingReviews}</td>
        <td>${branch.alerts}</td>
        <td><div class="progress"><span style="width:${branch.listings}%"></span></div><small>${branch.listings}%</small></td>
        <td>${statusBadge(branch.status === "coming-soon" ? "Preparación" : branch.alerts > 1 ? "Atención" : "Estable", branch.status === "coming-soon" ? "warning" : branch.alerts > 1 ? "danger" : "success")}</td>
      </tr>`).join("");
  }

  function dashboardPage() {
    const m = data.metrics;
    const content = `
      <section class="kpi-grid wide">
        ${kpiCard(m.activeBranches, "Sucursales activas", "México y Estados Unidos")}
        ${kpiCard(m.nextOpening, "Próxima apertura", "Infraestructura en preparación", "accent")}
        ${kpiCard(m.rating, "Calificación promedio", "Promedio de 5 sucursales")}
        ${kpiCard(m.newReviews, "Reseñas en Google", "Total acumulado")}
        ${kpiCard(m.pendingReviews, "Pendientes de respuesta", "Requieren revisión", "warning")}
        ${kpiCard(m.criticalAlerts, "Alertas de atención", "Conflicto NAP en directorios", "danger")}
        ${kpiCard(m.pendingRequests, "Solicitudes pendientes", "Todas las áreas")}
        ${kpiCard(`${m.listingsComplete}%`, "Listings completos", "Promedio de marca")}
      </section>
      <section class="panel" id="branch-comparison">
        <div class="panel-heading"><div><p class="eyebrow">Comparativo</p><h2>Salud digital por sucursal</h2></div><a class="text-button" href="reports.html">Ver reporte ejecutivo</a></div>
        <div class="table-wrap"><table><thead><tr><th>Sucursal</th><th>País</th><th>Calificación</th><th>Nuevas</th><th>Pendientes</th><th>Alertas</th><th>Listings</th><th>Estado</th></tr></thead><tbody>${branchComparisonRows()}</tbody></table></div>
      </section>
      ${reservationChannelsPanel()}
      <div class="dashboard-grid two">
        <section class="panel"><div class="panel-heading"><div><p class="eyebrow">Actividad reciente</p><h2>Lo que está ocurriendo</h2></div></div><div class="activity-feed">${data.activity.map((item) => `<div><time>${item.time}</time><span></span><p><strong>${item.title}</strong><small>${item.meta}</small></p></div>`).join("")}</div></section>
        <section class="panel"><div class="panel-heading"><div><p class="eyebrow">Acciones rápidas</p><h2>Resolver sin perder contexto</h2></div></div><div class="quick-actions"><a href="requests.html#new-request">Nueva solicitud<span>Crear y asignar</span></a><a href="reputation.html#alerts">Revisar alertas<span>${m.criticalAlerts} activas</span></a><a href="reputation.html">Ver reputación<span>${m.pendingReviews} pendientes</span></a><a href="listings.html">Consultar listings<span>${m.listingsComplete}% completos</span></a><a href="reports.html">Generar reporte<span>Vista mensual</span></a></div></section>
      </div>`;
    return internalLayout("Sin Yolanda Digital Hub", "Resumen corporativo", content);
  }

  function listingsPage() {
    const statusClass = { verified: "success", active: "neutral", pending: "warning", review: "danger", unclaimed: "danger", na: "muted" };
    const rows = data.branches.map((branch) => `<tr><td><button class="row-link listing-branch" data-branch="${branch.id}" type="button"><strong>${branch.shortName}</strong><small>${branch.country}</small></button></td>${data.listings[branch.id].map((status, index) => `<td><button class="status status-${statusClass[status]}" type="button" data-listing="${branch.id}" data-directory="${index}">${data.statusLabels[status]}</button></td>`).join("")}</tr>`).join("");
    const content = `
      <section class="kpi-grid six">
        ${kpiCard(54, "Directorios revisados", "Corroborado 24 sep")}
        ${kpiCard(39, "Perfiles activos", "Entre 5 sucursales")}
        ${kpiCard(2, "Perfiles pendientes", "Yelp Houston y Bing Houston", "warning")}
        ${kpiCard(6, "Inconsistencias", "Ejemplos simulados", "danger")}
        ${kpiCard(4, "Verificaciones", "Pendientes", "warning")}
        ${kpiCard(17, "Cambios del mes", "Flujo demostrativo")}
      </section>
      <section class="panel">
        <div class="panel-heading"><div><p class="eyebrow">Matriz de presencia</p><h2>Una fuente de verdad por sucursal</h2></div><span class="legend">Selecciona una celda para ver el detalle</span></div>
        <div class="table-wrap listing-table"><table><thead><tr><th>Sucursal</th>${data.listingsDirectories.map((directory) => `<th>${directory}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table></div>
      </section>
      <section class="panel listing-detail" id="listing-detail">${listingDetail("san-antonio", 1)}</section>
      <section class="panel opening-checklist"><div><p class="eyebrow">Próxima apertura</p><h2>Checklist replicable</h2><p>Sin revelar ubicación, el equipo puede preparar activos, responsables y dependencias.</p></div><div class="check-grid">${["Página web", "Google", "Apple Maps", "Bing", "Waze", "Tripadvisor", "Yelp", "Redes", "Fotografías", "Menú", "Reservaciones", "Verificación final"].map((item, index) => `<label><input type="checkbox" ${index < 3 ? "checked" : ""} /><span>${item}</span></label>`).join("")}</div></section>`;
    return internalLayout("Listings y directorios", "Presencia digital", content);
  }

  function listingDetail(id, directoryIndex) {
    const branch = branchById(id);
    const directory = data.listingsDirectories[directoryIndex];
    const state = data.listings[id][directoryIndex];
    return `
      <div class="panel-heading"><div><p class="eyebrow">Detalle seleccionado</p><h2>${branch.shortName} · ${directory}</h2></div>${statusBadge(data.statusLabels[state], state === "verified" ? "success" : state === "review" ? "danger" : "warning")}</div>
      <div class="detail-grid">
        <dl><div><dt>Nombre publicado</dt><dd>${branch.name}</dd></div><div><dt>Nombre oficial</dt><dd>Dato por confirmar con Dirección</dd></div><div><dt>Dirección</dt><dd>${branch.address}</dd></div><div><dt>Teléfono</dt><dd>${branch.phone}</dd></div><div><dt>Horario</dt><dd>${branch.hours}</dd></div></dl>
        <dl><div><dt>URL</dt><dd>Enlace demostrativo</dd></div><div><dt>Última revisión</dt><dd>29 Jul 2026 · Simulada</dd></div><div><dt>Responsable</dt><dd>Agencia / Marketing</dd></div><div><dt>Incidencia</dt><dd>Ejemplo: horario distinto entre plataformas</dd></div><div><dt>Acción recomendada</dt><dd>Validar NAP y documentar evidencia antes de publicar</dd></div></dl>
      </div>`;
  }

  function reputationPage() {
    const m = data.metrics;
    const reviewRows = data.reviews.map((review) => {
      const branch = branchById(review.branch);
      return `<tr class="review-row" data-branch="${review.branch}" data-platform="${review.platform}" data-risk="${review.risk}" data-status="${review.status}"><td>${review.platform}</td><td><strong>${branch.shortName}</strong></td><td>${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</td><td>${review.customer}</td><td>${review.date}</td><td class="review-excerpt">${review.excerpt}</td><td>${review.topic}</td><td>${review.sentiment}</td><td>${statusBadge(review.risk, review.risk === "Alto" ? "danger" : review.risk === "Medio" ? "warning" : "success")}</td><td>${review.status}</td><td><a class="row-link" href="review-detail.html">Abrir</a></td></tr>`;
    }).join("");
    const content = `
      <section class="kpi-grid wide">
        ${kpiCard(m.rating, "Calificación promedio", "Marca completa")}
        ${kpiCard(m.newReviews, "Reseñas en Google", "Total acumulado")}
        ${kpiCard(80, "Positivas", "Volumen julio · USA", "success")}
        ${kpiCard(21, "Mixtas", "Volumen julio · USA")}
        ${kpiCard(18, "Negativas", "Volumen julio · USA", "danger")}
        ${kpiCard(m.pendingReviews, "Pendientes", "Requieren decisión", "warning")}
        ${kpiCard(m.criticalAlerts, "Alertas de atención", "Revisión humana", "danger")}
        ${kpiCard(m.responseTime, "Tiempo medio", "Último corte medido")}
      </section>
      <div class="dashboard-grid two">
        <section class="panel"><div class="panel-heading"><div><p class="eyebrow">Temas recurrentes</p><h2>Qué está moviendo la conversación</h2></div></div><div class="bar-list">${data.topics.map((topic) => `<div><span>${topic.label}</span><div><i style="width:${topic.value}%"></i></div><strong>${topic.value}</strong></div>`).join("")}</div></section>
        <section class="panel"><div class="panel-heading"><div><p class="eyebrow">Comparativo</p><h2>Reputación por sucursal</h2></div></div><div class="branch-score-list">${data.branches.filter((branch) => branch.status === "active").map((branch) => `<div><span>${branch.shortName}</span><strong>${branch.rating}</strong><div class="progress"><span style="width:${branch.rating * 20}%"></span></div><small>${branch.pendingReviews} pendientes</small></div>`).join("")}</div></section>
      </div>
      <section class="panel" id="review-inbox">
        <div class="panel-heading"><div><p class="eyebrow">Bandeja de reseñas</p><h2>Priorizar, investigar y responder</h2></div></div>
        <div class="filter-controls">
          <select id="review-branch"><option value="all">Todas las sucursales</option>${data.branches.filter((branch) => branch.status === "active").map((branch) => `<option value="${branch.id}">${branch.shortName}</option>`).join("")}</select>
          <select id="review-platform"><option value="all">Todas las plataformas</option><option>Google</option><option>Yelp</option><option>Tripadvisor</option></select>
          <select id="review-risk"><option value="all">Todo riesgo</option><option>Alto</option><option>Medio</option><option>Bajo</option></select>
          <select id="review-status"><option value="all">Todos los estados</option><option>Investigación</option><option>Borrador</option><option>Respondida</option><option>Pendiente</option><option>Asignada</option></select>
        </div>
        <div class="table-wrap"><table><thead><tr><th>Plataforma</th><th>Sucursal</th><th>Calificación</th><th>Cliente</th><th>Fecha</th><th>Fragmento</th><th>Tema</th><th>Sentimiento</th><th>Riesgo</th><th>Estado</th><th></th></tr></thead><tbody>${reviewRows}</tbody></table></div>
      </section>
      <section class="panel" id="alerts"><div class="panel-heading"><div><p class="eyebrow">Alertas operativas</p><h2>Casos que necesitan contexto humano</h2></div></div><div class="alert-list">${data.alerts.map((alert) => `<article class="alert-${alert.level}"><span>${alert.level === "critical" ? "Crítica" : alert.level === "positive" ? "Positiva" : "Seguimiento"}</span><div><strong>${alert.title}</strong><p>${alert.branch} · ${alert.owner}</p></div><time>${alert.age}</time><a href="review-detail.html">Revisar</a></article>`).join("")}</div></section>
      <section class="panel"><div class="panel-heading"><div><p class="eyebrow">Menciones del personal</p><h2>Reconocimiento y oportunidades</h2></div></div><div class="recognition-grid"><article><strong>12</strong><span>Menciones positivas</span><p>San Antonio · Equipo de hospitalidad</p></article><article><strong>9</strong><span>Menciones positivas</span><p>Maricarmen · Equipo de celebraciones</p></article><article><strong>6</strong><span>Oportunidades detectadas</span><p>Marca completa · Seguimiento formativo</p></article></div></section>`;
    return internalLayout("Reputación y experiencia", "Escucha activa", content);
  }

  function reviewDetailPage() {
    const review = data.reviews[0];
    const branch = branchById(review.branch);
    const content = `
      <nav class="breadcrumbs internal"><a href="reputation.html">Reputación</a><span>/</span><span>${review.id}</span></nav>
      <section class="review-case">
        <div class="case-main panel">
          <div class="panel-heading"><div><p class="eyebrow">${review.platform} · ${branch.shortName}</p><h2>Caso ${review.id}</h2></div>${statusBadge(review.risk, "danger")}</div>
          <div class="review-full"><div><strong>${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</strong><span>${review.date}</span></div><blockquote>${review.excerpt}</blockquote><p>${review.customer} · Identidad anonimizada para la demostración</p></div>
          <div class="analysis-grid"><article><span>Tema detectado</span><strong>${review.topic}</strong></article><article><span>Riesgo</span><strong>${review.risk}</strong></article><article><span>Responsable</span><strong>${review.owner}</strong></article><article><span>Estado</span><strong id="case-status">${review.status}</strong></article></div>
          <div class="case-analysis"><h3>Análisis resumido</h3><p>La reseña combina una fricción de reservación con una expectativa de servicio. Requiere validar el registro de la reserva y la hora de llegada antes de preparar una respuesta.</p><h3>Evidencias</h3><div class="evidence-placeholder">Sin evidencias adjuntas · Espacio preparado para capturas, notas y comprobantes internos.</div></div>
          <div class="suggested-response"><p class="eyebrow">Respuesta sugerida</p><textarea aria-label="Respuesta sugerida">Gracias por compartirnos lo ocurrido. Queremos revisar la reservación y entender mejor el tiempo de espera. Por favor permítenos validar el caso con el equipo de la sucursal antes de darte seguimiento.</textarea><small>Borrador demostrativo. Requiere aprobación humana antes de publicarse.</small></div>
          <div class="case-actions">${["Asignar", "Solicitar investigación", "Agregar nota", "Generar borrador", "Aprobar respuesta", "Marcar como publicada", "Cerrar caso"].map((label) => `<button class="button ${label === "Cerrar caso" ? "button-primary" : "button-ghost"} review-action" type="button" data-action="${label}">${label}</button>`).join("")}</div>
        </div>
        <aside class="case-timeline panel"><p class="eyebrow">Línea de tiempo</p><h2>Historial del caso</h2><ol id="case-timeline"><li class="done"><strong>Reseña detectada</strong><span>Hoy · 8:40</span></li><li class="done"><strong>Alerta enviada</strong><span>Hoy · 8:42</span></li><li class="current"><strong>Caso asignado</strong><span>Hoy · 9:05</span></li><li><strong>Operación investiga</strong><span>Pendiente</span></li><li><strong>Marketing aprueba</strong><span>Pendiente</span></li><li><strong>Agencia publica</strong><span>Pendiente</span></li><li><strong>Caso cerrado</strong><span>Pendiente</span></li></ol></aside>
      </section>`;
    return internalLayout("Detalle de reseña", "Caso operativo", content);
  }

  function requestsPage() {
    const rows = data.requests.map((request) => requestRow(request)).join("");
    const content = `
      <section class="kpi-grid six">
        ${kpiCard(14, "Abiertas", "Todas las sucursales")}
        ${kpiCard(6, "En revisión", "Operaciones y Marketing", "warning")}
        ${kpiCard(9, "Aprobadas", "Este mes", "success")}
        ${kpiCard(17, "Publicadas", "Con evidencia")}
        ${kpiCard(3, "Urgentes", "Atención prioritaria", "danger")}
        ${kpiCard("18 h", "Resolución promedio", "Dato simulado")}
      </section>
      <section class="workflow-strip"><div><strong>1</strong><span>Gerente solicita</span></div><i></i><div><strong>2</strong><span>Operaciones valida</span></div><i></i><div><strong>3</strong><span>Marketing aprueba</span></div><i></i><div><strong>4</strong><span>Agencia publica</span></div><i></i><div><strong>5</strong><span>Agencia verifica</span></div></section>
      <section class="panel"><div class="panel-heading"><div><p class="eyebrow">Centro de solicitudes</p><h2>Seguimiento con responsable y evidencia</h2></div><button class="button button-primary" type="button" data-scroll-to="new-request">Nueva solicitud</button></div><div class="table-wrap"><table><thead><tr><th>Folio</th><th>Fecha</th><th>Sucursal</th><th>Tipo</th><th>Solicitante</th><th>Prioridad</th><th>Responsable</th><th>Estado</th><th>Actualización</th></tr></thead><tbody id="request-table">${rows}</tbody></table></div></section>
      <section class="panel request-form-panel" id="new-request">
        <div><p class="eyebrow">Nueva solicitud</p><h2>Dar contexto desde el inicio</h2><p>El formulario es visual y no envía información a ningún sistema real.</p></div>
        <form id="request-form">
          <label>Sucursal<select name="branch" required>${data.branches.filter((branch) => branch.status === "active").map((branch) => `<option>${branch.shortName}</option>`).join("")}</select></label>
          <label>Tipo de solicitud<select name="type" required>${["Cambio de horario", "Horario especial", "Evento", "Promoción", "Menú", "Fotografía", "Teléfono", "Reservaciones", "Corrección de dirección", "Cierre temporal", "Incidente operativo", "Reseña delicada", "Otro"].map((type) => `<option>${type}</option>`).join("")}</select></label>
          <label class="wide-field">Título<input name="title" required placeholder="Describe el cambio en una frase" /></label>
          <label class="wide-field">Descripción<textarea name="description" required placeholder="Incluye contexto, fecha y resultado esperado"></textarea></label>
          <label>Fecha de inicio<input type="date" name="start" /></label>
          <label>Fecha de finalización<input type="date" name="end" /></label>
          <label>Prioridad<select name="priority"><option>Media</option><option>Baja</option><option>Alta</option><option>Urgente</option></select></label>
          <label>Persona responsable<select name="owner"><option>Operaciones</option><option>Marketing</option><option>Gerencia</option><option>Agencia</option></select></label>
          <label class="wide-field">Plataformas afectadas<input name="platforms" placeholder="Google, sitio web, redes..." /></label>
          <label class="wide-field upload-field">Evidencia<input type="file" name="evidence" /><span>Adjuntar captura o documento · Solo demostración</span></label>
          <button class="button button-primary" type="submit">Crear solicitud simulada</button>
        </form>
      </section>
      <section class="panel"><div class="panel-heading"><div><p class="eyebrow">Historial de ejemplo</p><h2>SOL-126 · Horario especial</h2></div>${statusBadge("En revisión", "warning")}</div><div class="history-grid"><div><span>Solicitud inicial</span><strong>Gerencia San Ignacio</strong><small>29 Jul · 9:24</small></div><div><span>Comentario</span><strong>Operaciones solicita horario de cierre</strong><small>29 Jul · 9:38</small></div><div><span>Responsable</span><strong>Operaciones México</strong><small>Asignado</small></div><div><span>Publicación</span><strong>Pendiente</strong><small>Sin evidencia todavía</small></div></div></section>`;
    return internalLayout("Solicitudes y cambios", "Centro para gerentes", content);
  }

  function requestRow(request) {
    const tone = request.priority === "Urgente" ? "danger" : request.status === "Publicada" || request.status === "Verificada" ? "success" : request.status === "En revisión" ? "warning" : "neutral";
    return `<tr><td><strong>${request.folio}</strong></td><td>${request.date}</td><td>${request.branch}</td><td>${request.type}</td><td>${request.requester}</td><td>${statusBadge(request.priority, tone)}</td><td>${request.owner}</td><td>${request.status}</td><td>${request.updated}</td></tr>`;
  }

  function reportsPage() {
    const content = `
      <section class="executive-summary">
        <div><p class="eyebrow">Reporte mensual · Julio 2026 (último corte)</p><h2>La marca mantiene una operación digital estable, con oportunidades concentradas en reservaciones y consistencia de listings.</h2></div>
        <div class="summary-score"><span>Estado general</span><strong>82</strong><small>de 100 · Simulado</small></div>
      </section>
      <section class="kpi-grid wide">
        ${kpiCard("+0.2", "Variación de calificación", "Contra mes anterior", "success")}
        ${kpiCard(213, "Reseñas recibidas", "5 sucursales")}
        ${kpiCard(7, "Alertas críticas", "Todas atendidas", "danger")}
        ${kpiCard(11, "Casos resueltos", "Con seguimiento")}
        ${kpiCard(17, "Solicitudes completadas", "Este mes")}
        ${kpiCard(9, "Listings corregidos", "Con evidencia")}
        ${kpiCard("San Antonio", "Sucursal destacada", "Volumen y consistencia", "accent")}
        ${kpiCard("Reservaciones", "Área de oportunidad", "Proceso y comunicación", "warning")}
      </section>
      <div class="dashboard-grid two">
        <section class="panel"><div class="panel-heading"><div><p class="eyebrow">México vs. Estados Unidos</p><h2>Comparación regional</h2></div></div><div class="region-compare"><article><span>México</span><strong>4.6</strong><div class="progress"><span style="width:92%"></span></div><p>73 reseñas · 79% listings</p></article><article><span>Estados Unidos</span><strong>4.4</strong><div class="progress"><span style="width:88%"></span></div><p>140 reseñas · 85% listings</p></article></div></section>
        <section class="panel"><div class="panel-heading"><div><p class="eyebrow">Evolución mensual</p><h2>Índice de salud digital</h2></div></div><div class="trend-chart">${data.monthlyTrend.map((value, index) => `<div><span style="height:${value}%"></span><small>${["Feb", "Mar", "Abr", "May", "Jun", "Jul"][index]}</small></div>`).join("")}</div></section>
      </div>
      <section class="panel"><div class="panel-heading"><div><p class="eyebrow">Sucursal vs. marca</p><h2>Lectura comparativa</h2></div></div><div class="branch-report-grid">${data.branches.filter((branch) => branch.status === "active").map((branch) => `<article><span>${branch.shortName}</span><strong>${branch.rating}</strong><div class="progress"><span style="width:${branch.rating * 20}%"></span></div><p>${branch.listings}% listings · ${branch.alerts} alertas</p></article>`).join("")}</div></section>
      ${reservationChannelsPanel()}
      <section class="panel recommendations"><div><p class="eyebrow">Recomendaciones</p><h2>Próximas decisiones</h2></div><ol><li>Actualizar y documentar horarios especiales por sucursal.</li><li>Revisar el proceso de reservaciones y confirmaciones.</li><li>Documentar políticas para grupos y celebraciones.</li><li>Fortalecer la respuesta a reseñas críticas con aprobación humana.</li><li>Completar directorios pendientes y conservar evidencia.</li><li>Preparar la presencia digital de la sexta sucursal.</li></ol></section>
      <section class="report-actions"><button class="button button-primary" type="button" data-demo-action="La descarga en PDF se habilitará en la versión operativa.">Descargar PDF</button><button class="button button-ghost" type="button" data-demo-action="Enlace de reporte copiado en una implementación real.">Compartir reporte</button><button class="button button-ghost" type="button" data-demo-action="La programación de envíos requiere responsables y correos aprobados.">Programar envío</button></section>`;
    return internalLayout("Reporte ejecutivo", "Dirección y propietarios", content);
  }

  function modalMarkup() {
    return `<div class="modal" id="demo-modal" aria-hidden="true"><div class="modal-backdrop" data-close-modal></div><section role="dialog" aria-modal="true" aria-labelledby="modal-title"><button class="modal-close" type="button" data-close-modal aria-label="Cerrar">×</button><p class="eyebrow">Próxima apertura</p><h2 id="modal-title">Recibe novedades.</h2><p>Déjanos tu correo y te avisamos cuando abramos en El Paso. Mientras tanto, sigue @sinyolandaelpaso en Instagram.</p><a class="button button-primary" href="https://www.instagram.com/sinyolandaelpaso/" target="_blank" rel="noopener">Seguir @sinyolandaelpaso</a><small>El boletín por correo se activará con la conexión del sistema.</small></section></div>`;
  }

  function toastMarkup() {
    return `<div class="toast" id="demo-toast" role="status" aria-live="polite"></div>`;
  }

  function bindCommon() {
    const menuToggle = document.querySelector(".menu-toggle");
    const publicNav = document.querySelector(".public-nav");
    if (menuToggle && publicNav) {
      menuToggle.addEventListener("click", () => {
        const expanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!expanded));
        publicNav.classList.toggle("open", !expanded);
      });
    }

    const dashboardMenu = document.querySelector(".dashboard-menu");
    const sidebar = document.querySelector(".sidebar");
    if (dashboardMenu && sidebar) {
      dashboardMenu.addEventListener("click", () => {
        const expanded = dashboardMenu.getAttribute("aria-expanded") === "true";
        dashboardMenu.setAttribute("aria-expanded", String(!expanded));
        sidebar.classList.toggle("open", !expanded);
      });
    }

    document.querySelectorAll("[data-demo-action]").forEach((button) => {
      button.addEventListener("click", () => showToast(button.dataset.demoAction));
    });

    document.querySelectorAll("[data-scroll-to]").forEach((button) => {
      button.addEventListener("click", () => document.getElementById(button.dataset.scrollTo)?.scrollIntoView({ behavior: "smooth" }));
    });

    document.getElementById("global-branch")?.addEventListener("change", (event) => {
      const selected = event.target.options[event.target.selectedIndex].text;
      showToast(`Filtro demostrativo actualizado: ${selected}.`);
    });
  }

  function bindLocationFilters() {
    const filters = document.querySelectorAll("[data-filter]");
    const cards = document.querySelectorAll(".location-card");
    filters.forEach((filter) => {
      filter.addEventListener("click", () => {
        filters.forEach((item) => item.classList.toggle("active", item === filter));
        cards.forEach((card) => {
          card.hidden = filter.dataset.filter !== "all" && card.dataset.region !== filter.dataset.filter;
        });
      });
    });
  }

  function bindModal() {
    const modal = document.getElementById("demo-modal");
    if (!modal) return;
    const close = () => {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    };
    document.querySelectorAll("[data-open-modal]").forEach((button) => button.addEventListener("click", () => {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      modal.querySelector("input")?.focus();
    }));
    modal.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", close));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
  }

  function bindListings() {
    document.querySelectorAll("[data-listing]").forEach((button) => {
      button.addEventListener("click", () => {
        document.getElementById("listing-detail").innerHTML = listingDetail(button.dataset.listing, Number(button.dataset.directory));
        document.getElementById("listing-detail").scrollIntoView({ behavior: "smooth", block: "center" });
      });
    });
    document.querySelectorAll(".listing-branch").forEach((button) => {
      button.addEventListener("click", () => {
        document.getElementById("listing-detail").innerHTML = listingDetail(button.dataset.branch, 1);
        document.getElementById("listing-detail").scrollIntoView({ behavior: "smooth", block: "center" });
      });
    });
  }

  function bindReviewFilters() {
    const controls = ["review-branch", "review-platform", "review-risk", "review-status"].map((id) => document.getElementById(id));
    if (!controls[0]) return;
    const apply = () => {
      document.querySelectorAll(".review-row").forEach((row) => {
        const visible =
          (controls[0].value === "all" || row.dataset.branch === controls[0].value) &&
          (controls[1].value === "all" || row.dataset.platform === controls[1].value) &&
          (controls[2].value === "all" || row.dataset.risk === controls[2].value) &&
          (controls[3].value === "all" || row.dataset.status === controls[3].value);
        row.hidden = !visible;
      });
    };
    controls.forEach((control) => control.addEventListener("change", apply));
  }

  function bindReviewActions() {
    document.querySelectorAll(".review-action").forEach((button) => {
      button.addEventListener("click", () => {
        document.getElementById("case-status").textContent = button.dataset.action;
        const item = document.createElement("li");
        item.className = "current";
        item.innerHTML = `<strong>${button.dataset.action}</strong><span>Ahora · Acción simulada</span>`;
        document.getElementById("case-timeline").prepend(item);
        showToast(`${button.dataset.action}: cambio aplicado únicamente en esta demostración.`);
      });
    });
  }

  function bindRequestForm() {
    const form = document.getElementById("request-form");
    if (!form) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const values = new FormData(form);
      const request = {
        folio: `SOL-${127 + document.querySelectorAll("#request-table tr").length}`,
        date: "Ahora",
        branch: values.get("branch"),
        type: values.get("type"),
        requester: "Gerencia",
        priority: values.get("priority"),
        owner: values.get("owner"),
        status: "Nueva",
        updated: "Hace un momento",
      };
      document.getElementById("request-table").insertAdjacentHTML("afterbegin", requestRow(request));
      form.reset();
      showToast("Solicitud simulada creada. No se guardó ni envió información.");
    });
  }

  function bindReservationModules() {
    document.querySelectorAll(".reservation-module").forEach((module) => {
      const tabs = module.querySelectorAll("[data-reservation-tab]");
      const views = module.querySelectorAll("[data-reservation-view]");
      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          tabs.forEach((item) => {
            const selected = item === tab;
            item.classList.toggle("active", selected);
            item.setAttribute("aria-selected", String(selected));
          });
          views.forEach((view) => {
            const selected = view.dataset.reservationView === tab.dataset.reservationTab;
            view.classList.toggle("active", selected);
            view.hidden = !selected;
          });
        });
      });
      module.querySelectorAll("[data-reservation-form]").forEach((form) => {
        form.addEventListener("submit", (event) => {
          event.preventDefault();
          showToast(`${form.dataset.reservationForm}: consulta simulada. No se enviaron ni almacenaron datos.`);
        });
      });
    });
  }

  function scrollToReveal() {
    const targets = document.querySelectorAll(".reveal, .reveal-scale");
    if (!targets.length || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("revealed"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    targets.forEach((el) => observer.observe(el));
  }

  function showToast(message) {
    const toast = document.getElementById("demo-toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 3600);
  }

  function cateringPage() {
    const cateringContact = "tel:+17262396779";
    const piezas = [
      ["La Cocina", "Taquiza, cortes, mariscos y botanas. Cocinado en sitio."],
      ["La Barra", "Barra móvil, cantineros, tequila y mezcal, cócteles de la casa."],
      ["El Micrófono", "Sonido, karaoke y un anfitrión que hace cantar a tu gente."],
    ];
    const eventosList = ["Bodas", "Quinceañeras", "Graduaciones", "Corporativos", "Cumpleaños", "Fiestas en casa"];
    const cobertura = [
      ["Houston", "Washington Ave"],
      ["The Woodlands", "Shenandoah"],
      ["San Antonio", "River Walk"],
      ["El Paso", "Ya disponible"],
      ["Moreno Valley", "Próximamente"],
      ["San Diego", "Próximamente"],
    ];
    return `
      ${publicHeader()}
      <main>
        <section class="page-hero">
          <img src="assets/media/celebration.webp" alt="Catering Sin Yolanda montado en una fiesta" />
          <div class="hero-overlay"></div>
          <div class="hero-copy">
            <p class="eyebrow">SIN YOLANDA® CATERING · ESTADOS UNIDOS</p>
            <h1>Llevamos el micrófono a tu fiesta</h1>
            <p>Cocina, barra y karaoke en Texas y California. La cantina completa, montada donde tú digas.</p>
            <div class="hero-actions">
              <a class="button button-primary" href="${cateringContact}">Arma tu fiesta</a>
              <a class="button button-ghost-light" href="locations.html">Ver ubicaciones</a>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="section-heading"><div><p class="eyebrow">Se arma por piezas</p><h2 class="reveal">Contrata uno, dos o los tres.</h2></div></div>
          <div class="event-grid">${piezas.map(([titulo, texto], i) => `<article class="reveal-scale" style="animation-delay:${0.12 * i}s"><h3>${titulo}</h3><p>${texto}</p></article>`).join("")}</div>
          <div class="mini-menu" style="margin-top:1.4rem">${eventosList.map((e) => `<span>${e}</span>`).join("")}</div>
        </section>
        <section class="section split-section">
          <div>
            <p class="eyebrow">Cómo funciona</p><h2 class="reveal">Cinco pasos, cero dramas.</h2>
            <ol class="steps-list"><li>Nos cuentas tu fiesta</li><li>Te cotizamos</li><li>Afinamos el menú</li><li>Llegamos y armamos</li><li>Tu gente canta</li></ol>
          </div>
          <div>
            <p class="eyebrow">Cobertura · Estados Unidos</p><h2 class="reveal">Salimos a carretera.</h2>
            <dl>${cobertura.map(([ciudad, detalle]) => `<div><dt>${ciudad}</dt><dd>${detalle}</dd></div>`).join("")}</dl>
            <p class="data-caveat">¿Tu ciudad no aparece? Escríbenos.</p>
            <a class="button button-primary" href="${cateringContact}" target="_blank" rel="noopener">Llamar al catering</a>
          </div>
        </section>
        <section class="reserve-cta">
          <div><p class="eyebrow">Aquí no se llora</p><h2 class="reveal">Ni en tu fiesta.</h2></div>
          <div><a class="button button-light" href="${cateringContact}" target="_blank" rel="noopener">Arma tu fiesta</a></div>
        </section>
      </main>
      ${publicFooter()}
      ${modalMarkup()}`;
  }

  function laCantinaPage() {
    const agaves = ["Tequilas blancos, reposados y añejos", "Mezcal espadín, tobalá y ensambles", "Raicilla y bacanora", "Cata de tres agaves"];
    const cocteles = ["Paloma de la casa", "Margarita de tamarindo", "Cantarito de barro", "Carajillo Sin Yolanda", "Michelada clásica y con clamato", "Cerveza nacional de barril"];
    const botanas = ["Guacamole con chicharrón", "Queso fundido con chorizo", "Tostadas de atún", "Esquites con tuétano", "Tacos de arrachera", "Tacos de cochinita", "Quesabirria con consomé"];
    const fuertes = ["Arrachera al carbón", "Rib eye para dos", "Costilla en salsa de chile morita", "Aguachile verde", "Ceviche de la casa", "Camarones al mojo de ajo", "Pulpo a las brasas"];
    const lista = (arr) => arr.map((item) => `<li>${item}</li>`).join("");
    return `
      ${publicHeader()}
      <main>
        <section class="page-hero compact-hero">
          <img src="assets/media/dining.webp" alt="Mesas largas de la cantina Sin Yolanda" />
          <div class="hero-overlay"></div>
          <div><p class="eyebrow">La cantina</p><h1>Como una boda mexicana, todas las noches</h1><p>Mesas largas, gente que no se conocía y a las dos de la mañana se abraza cantando. Eso es la casa.</p></div>
        </section>
        <section class="section split-section">
          <div>
            <p class="eyebrow">La barra</p><h2 class="reveal">Más de 30 marcas de agave.</h2>
            <ul class="menu-list">${lista(agaves)}</ul>
            <p class="eyebrow" style="margin-top:1.6rem">Cócteles de la casa</p>
            <ul class="menu-list">${lista(cocteles)}</ul>
          </div>
          <div>
            <p class="eyebrow">La cocina</p><h2 class="reveal">Todo para el centro de la mesa.</h2>
            <p class="eyebrow" style="margin-top:0.8rem">Botanas · Tacos</p>
            <ul class="menu-list">${lista(botanas)}</ul>
            <p class="eyebrow" style="margin-top:1.6rem">Cortes · Mariscos</p>
            <ul class="menu-list">${lista(fuertes)}</ul>
          </div>
        </section>
        <section class="reserve-cta">
          <div><p class="eyebrow">La carta completa</p><h2 class="reveal">Se comparte en cada sucursal.</h2></div>
          <div><a class="button button-light" href="locations.html">Elegir sucursal</a></div>
        </section>
      </main>
      ${publicFooter()}
      ${modalMarkup()}`;
  }

  function eventosPage() {
    const formas = [
      ["Cumpleaños", "Mesa larga, pastel y una canción que nadie te va a dejar cantar solo."],
      ["Despedidas", "Soltera, soltero o de trabajo. Aquí se despide cantando, no llorando."],
      ["Corporativos", "Fin de año, cierre de trimestre o el equipo entero. El micrófono rompe el hielo."],
    ];
    return `
      ${publicHeader()}
      <main>
        <section class="page-hero compact-hero">
          <img src="assets/media/interior.webp" alt="Celebración privada en la cantina Sin Yolanda" />
          <div class="hero-overlay"></div>
          <div><p class="eyebrow">Eventos en la cantina</p><h1>Privatiza la cantina</h1><p>Cierra la casa para los tuyos. Cocina, barra y micrófono, sin nadie más adentro.</p></div>
        </section>
        <section class="section">
          <div class="section-heading"><div><p class="eyebrow">Tres formas de hacerlo</p><h2 class="reveal">Elige el motivo.</h2></div></div>
          <div class="event-grid">${formas.map(([titulo, texto], i) => `<article class="reveal-scale" style="animation-delay:${0.12 * i}s"><h3>${titulo}</h3><p>${texto}</p></article>`).join("")}</div>
        </section>
        <section class="reserve-cta">
          <div><p class="eyebrow">Cuéntanos de tu evento</p><h2 class="reveal">Te pasa directo con la sucursal.</h2></div>
          <div>
            <a class="button button-light" href="https://wa.me/523310186159?text=${encodeURIComponent("Hola, quiero privatizar la cantina Sin Yolanda para un evento.")}" target="_blank" rel="noopener">WhatsApp Guadalajara</a>
            <a class="button button-ghost-light" href="locations.html">Sucursales en Texas</a>
          </div>
        </section>
        <section class="section"><p class="data-caveat">¿Prefieres que vayamos nosotros? <a href="catering.html">Conoce Sin Yolanda Catering.</a></p></section>
      </main>
      ${publicFooter()}
      ${modalMarkup()}`;
  }

  function tiendaPage() {
    const items = [
      ["Sombrero de la casa", "Fieltro negro con cinta bordada a mano."],
      ["Playera «Aquí no se llora»", "Algodón pesado, tipografía en amarillo."],
      ["Tarro de cerámica", "Barro vidriado de Tonalá. Cada uno distinto."],
      ["Micrófono de recuerdo", "Réplica miniatura del micrófono de la casa."],
    ];
    return `
      ${publicHeader()}
      <main>
        <section class="page-hero compact-hero">
          <img src="assets/media/interior.webp" alt="Mercancía oficial Sin Yolanda" />
          <div class="hero-overlay"></div>
          <div><p class="eyebrow">Tienda</p><h1>Para llevarte la casa puesta</h1><p>Venta en línea muy pronto. Mientras tanto, todo se compra en la barra, mirando a los ojos.</p></div>
        </section>
        <section class="section">
          <div class="section-heading"><div><p class="eyebrow">Disponible en la cantina</p><h2 class="reveal">Lo de siempre, puesto.</h2></div></div>
          <div class="event-grid">${items.map(([nombre, detalle], i) => `<article class="reveal-scale" style="animation-delay:${0.12 * i}s"><h3>${nombre}</h3><p>${detalle}</p></article>`).join("")}</div>
        </section>
      </main>
      ${publicFooter()}
      ${modalMarkup()}`;
  }

  function elPasoPage() {
    const ruta = [
      ["Guadalajara", "2023 · La casa original"],
      ["San Antonio", "2025 · El River Walk"],
      ["Houston", "2026 · Washington Ave"],
      ["The Woodlands", "2026 · El norte"],
      ["El Paso", "Próxima parada · El Chuco"],
    ];
    return `
      ${publicHeader()}
      <main>
        <section class="page-hero">
          <img src="assets/media/celebration.webp" alt="Próxima apertura de Sin Yolanda en El Paso" />
          <div class="hero-overlay"></div>
          <div class="hero-copy">
            <p class="eyebrow">El Paso, Texas</p>
            <h1>El Chuco ya no llora</h1>
            <p>La cantina viene en camino. El catering ya está aquí.</p>
            <div class="hero-actions">
              <a class="button button-primary" href="catering.html">Catering en El Paso</a>
              <a class="button button-ghost-light" href="https://www.instagram.com/sinyolandaelpaso/" target="_blank" rel="noopener">Avísame cuando abra</a>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="section-heading"><div><p class="eyebrow">Ya operando</p><h2 class="reveal">Tu fiesta, con micrófono, desde hoy.</h2></div><p>Nuestro catering mexicano ya trabaja en El Paso y alrededores: cocina en sitio, barra completa y micrófono abierto.</p></div>
          <div class="event-grid">
            <article class="reveal-scale"><h3>Cocinamos en sitio</h3><p>Taquiza, cortes, mariscos y botanas montadas en tu casa o salón.</p></article>
            <article class="reveal-scale" style="animation-delay:0.12s"><h3>Barra completa</h3><p>Tequila, mezcal y cócteles de la casa con cantineros.</p></article>
            <article class="reveal-scale" style="animation-delay:0.24s"><h3>El micrófono</h3><p>Sonido, karaoke y un anfitrión que hace cantar a tu gente.</p></article>
          </div>
        </section>
        <section class="section split-section">
          <div>
            <p class="eyebrow">Próximamente</p><h2 class="reveal">Estamos por abrir en El Paso.</h2>
            <p>Sin Yolanda es una cantina de micrófono abierto nacida en Guadalajara: tequila, canciones que todos se saben y noches que se recuerdan. La próxima mesa larga será en 340 Vin Rambla Dr.</p>
            <a class="button button-primary" href="https://www.instagram.com/sinyolandaelpaso/" target="_blank" rel="noopener">Seguir @sinyolandaelpaso</a>
          </div>
          <div>
            <p class="eyebrow">La ruta</p><h2 class="reveal">De Guadalajara a El Paso.</h2>
            <dl>${ruta.map(([ciudad, nota]) => `<div><dt>${ciudad}</dt><dd>${nota}</dd></div>`).join("")}</dl>
          </div>
        </section>
        <section class="reserve-cta">
          <div><p class="eyebrow">Nos vemos pronto, El Paso</p><h2 class="reveal">El catering no espera.</h2></div>
          <div><a class="button button-light" href="catering.html">Catering en El Paso</a></div>
        </section>
      </main>
      ${publicFooter()}
      ${modalMarkup()}`;
  }

  const renderers = {
    home: homePage,
    locations: locationsPage,
    branch: branchPage,
    dashboard: dashboardPage,
    listings: listingsPage,
    reputation: reputationPage,
    "review-detail": reviewDetailPage,
    requests: requestsPage,
    reports: reportsPage,
    catering: cateringPage,
    "la-cantina": laCantinaPage,
    eventos: eventosPage,
    tienda: tiendaPage,
    "el-paso": elPasoPage,
  };

  root.innerHTML = `${(renderers[page] || homePage)()}${toastMarkup()}`;
  bindCommon();
  bindLocationFilters();
  bindModal();
  bindListings();
  bindReviewFilters();
  bindReviewActions();
  bindRequestForm();
  bindReservationModules();
  scrollToReveal();
})();
