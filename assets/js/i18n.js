/* ============================================================
   SIN YOLANDA® — i18n EN/ES (sección 07 del Manual v1)
   REGLA: "No traducimos. Adaptamos."
   - NUNCA se traducen: Sin Yolanda, Vámonos recio, Sin miedo al
     éxito, El dicho, Cucaracho, Cantina, nombres de platillos,
     cocteles y paquetes.
   - Sí van en EN: info operativa (horarios, reservas, dirección)
     y CTAs de conversión (Book a table).
   - El toggle vive en localStorage ("sy-lang"). ES por defecto.
   ============================================================ */
(function () {
  const DICT = {
    /* ---------- HEADER / NAV ---------- */
    "Inicio": "Home",
    "La Cantina": "The Cantina",
    "Catering": "Catering",
    "Ubicaciones": "Locations",
    "Eventos": "Private Events",
    "Panel": "Hub",
    "Sin Yolanda, inicio": "Sin Yolanda, home",

    /* ---------- FOOTER ---------- */
    "Una marca que vive en cada ciudad: Guadalajara y Texas.": "One brand that lives in every city: Guadalajara and Texas.",
    "Sucursales abiertas": "Open locations",
    "Próximamente": "Coming soon",
    "Reservaciones": "Reservations",
    "OpenTable en Texas · WhatsApp en Guadalajara.": "OpenTable in Texas · WhatsApp in Guadalajara.",
    "Digital Hub · Panel interno": "Digital Hub · Internal dashboard",
    "Explora": "Explore",

    /* ---------- HERO HOME ---------- */
    "Aquí se canta.": "This is where you sing.",
    "Ocho destinos.": "Eight destinations.",
    "Explorar ubicaciones": "See locations",
    "Reservar": "Book a table",
    "Elige tu próxima noche.": "Pick your next night.",
    "Elige tu próxima noche. La mesa ya está puesta.": "Pick your next night. The table is already set.",

    /* ---------- FILTROS UBICACIONES ---------- */
    "Todas": "All",
    "México": "Mexico",
    "Estados Unidos": "United States",
    "Filtrar ubicaciones": "Filter locations",

    /* ---------- TARJETAS / CTAS ---------- */
    "Ver sucursal": "View location",
    "Cómo llegar": "Directions",
    "Seguir la apertura": "Follow the opening",
    "Recibir novedades": "Get updates",
    "Próxima apertura": "Opening soon",
    "Reservar evento": "Book an event",

    /* ---------- SECCIONES HOME ---------- */
    "Gastronomía mexicana contemporánea": "Contemporary Mexican kitchen",
    "Música y participación social": "Music and crowd participation",
    "Celebraciones con intención": "Celebrations with a reason",
    "Hospitalidad local, visión corporativa": "Local hospitality, big-picture thinking",
    "Momentos para compartir.": "Moments made to share.",
    "Una noche que se recuerda.": "A night you remember.",
    "La casa por dentro": "Inside the house",
    "Cocina de cantina contemporánea, bar de agave y el micrófono abierto. Todo en la misma mesa.": "Contemporary cantina kitchen, an agave bar, and the open mic. All at the same table.",
    "Menú de muestra": "Menu preview",
    "Se botanea en serio.": "We snack the serious way.",
    "Reseñas destacadas": "Top reviews",
    "Reseñas reales de la banda.": "Real reviews from the crew.",
    "Elige ubicación. Nosotros hacemos el resto.": "Pick a location. We handle the rest.",
    "Reserva por el canal oficial de tu sucursal: OpenTable en Texas y WhatsApp en Guadalajara.": "Book through your location's official channel: OpenTable in Texas, WhatsApp in Guadalajara.",
    "Elegir ubicación": "Choose a location",

    /* ---------- MODAL ---------- */
    "Recibir novedades de la apertura": "Get opening updates",
    "Tu correo": "Your email",
    "Website": "Website",
    "Avísame antes que a nadie": "Tell me first",
    "Enviar solicitud": "Send request",
    "Tu correo electrónico quedó registrado.": "Your email is on the list.",

    /* ---------- LOCATIONS ---------- */
    "Ocho formas de vivir Sin Yolanda.": "Eight ways to do Sin Yolanda.",
    "México y Estados Unidos conectados bajo una estructura clara, local y escalable.": "Mexico and the U.S. connected under one clear, local, scalable setup.",
    "Abiertas": "Open",
    "Con catering": "With catering",
    "Todas las casas": "All locations",
    "ABIERTO": "OPEN",
    "PRÓXIMAMENTE": "COMING SOON",

    /* ---------- CATERING ---------- */
    "SIN YOLANDA® CATERING · ESTADOS UNIDOS": "SIN YOLANDA® CATERING · UNITED STATES",
    "Llevamos el micrófono a tu fiesta": "We bring the mic to your party",
    "Cocina, barra y karaoke en Texas y California. La cantina completa, montada donde tú digas.": "Kitchen, bar, and karaoke in Texas and California. The full cantina, set up wherever you say.",
    "Arma tu fiesta": "Build your party",
    "Ver ubicaciones": "See locations",
    "Se arma por piezas": "Book it by the piece",
    "Contrata uno, dos o los tres.": "Hire one, two, or all three.",
    "La Cocina": "The Kitchen",
    "Taquiza, cortes, mariscos y botanas. Cocinado en sitio.": "Taco spreads, steaks, seafood, and snacks. Cooked on site.",
    "La Barra": "The Bar",
    "Barra móvil, cantineros, tequila y mezcal, cócteles de la casa.": "Mobile bar, bartenders, tequila and mezcal, house cocktails.",
    "El Micrófono": "The Mic",
    "Sonido, karaoke y un anfitrión que hace cantar a tu gente.": "Sound, karaoke, and a host who gets your people singing.",
    "Bodas": "Weddings",
    "Quinceañeras": "Quinceañeras",
    "Graduaciones": "Graduations",
    "Corporativos": "Corporate",
    "Cumpleaños": "Birthdays",
    "Fiestas en casa": "House parties",
    "Cinco pasos, cero dramas.": "Five steps. Zero drama.",
    "Nos cuentas tu fiesta": "You tell us about the party",
    "Te cotizamos": "We send a quote",
    "Afinamos el menú": "We tune the menu",
    "Llegamos y armamos": "We show up and set up",
    "Tu gente canta": "Your people sing",
    "Cobertura · Estados Unidos": "Coverage · United States",
    "Salimos a carretera.": "We hit the road.",
    "¿Tu ciudad no aparece? Escríbenos.": "City not listed? Write to us.",
    "Llamar al catering": "Call catering",
    "Ya disponible": "Available now",

    /* ---------- LA CANTINA ---------- */
    "La cantina": "The cantina",
    "Como una boda mexicana, todas las noches": "Like a Mexican wedding, every single night",
    "Mesas largas, gente que no se conocía y a las dos de la mañana se abraza cantando. Eso es la casa.": "Long tables, strangers who by 2 a.m. are hugging and singing. That's the house.",
    "La barra": "The bar",
    "Más de 30 marcas de agave.": "30+ agave brands.",
    "Cócteles de la casa": "House cocktails",
    "La cocina": "The kitchen",
    "Todo para el centro de la mesa.": "Everything for the center of the table.",
    "Botanas · Tacos": "Snacks · Tacos",
    "Cortes · Mariscos": "Steaks · Seafood",
    "La carta completa": "The full menu",
    "Se comparte en cada sucursal.": "Shared at every location.",
    "Se comparte o no se pide.": "Share it or don't order it.",

    /* ---------- EVENTOS ---------- */
    "Eventos en la cantina": "Events at the cantina",
    "Privatiza la cantina": "Buy out the cantina",
    "Cierra la casa para los tuyos. Cocina, barra y micrófono, sin nadie más adentro.": "Close the house for your people. Kitchen, bar, and mic — nobody else inside.",
    "Tres formas de hacerlo": "Three ways to do it",
    "Elige el motivo.": "Pick the reason.",
    "Cumpleaños": "Birthdays",
    "Mesa larga, pastel y una canción que nadie te va a dejar cantar solo.": "A long table, cake, and one song nobody lets you sing alone.",
    "Despedidas": "Send-offs",
    "Soltera, soltero o de trabajo. Aquí se despide cantando.": "Bachelorette, bachelor, or work. You sing your way out.",
    "Fin de año, cierre de trimestre o el equipo entero. El micrófono rompe el hielo.": "Year-end, quarter close, or the whole team. The mic breaks the ice.",
    "Cuéntanos de tu evento": "Tell us about your event",
    "Te pasa directo con la sucursal.": "We connect you straight to the location.",
    "WhatsApp Guadalajara": "WhatsApp Guadalajara",
    "Sucursales en Texas": "Texas locations",
    "¿Prefieres que vayamos nosotros?": "Rather we come to you?",
    "Conoce Sin Yolanda Catering.": "Meet Sin Yolanda Catering.",

    /* ---------- EL PASO ---------- */
    "El Paso, Texas": "El Paso, Texas",
    "El Chuco ya trae el plan": "El Chuco already has the plan",
    "La cantina va en camino y el catering ya está listo.": "The cantina is on the way and catering is ready now.",
    "Catering en El Paso": "Catering in El Paso",
    "Avísame cuando abra": "Tell me when it opens",
    "Ya operando": "Already running",
    "Tu fiesta, con micrófono, desde hoy.": "Your party, with a mic, starting today.",
    "Nuestro catering mexicano ya trabaja en El Paso y alrededores: cocina en sitio, barra completa y micrófono abierto.": "Our Mexican catering already works El Paso and around: on-site kitchen, full bar, open mic.",
    "Cocinamos en sitio": "We cook on site",
    "Taquiza, cortes, mariscos y botanas montadas en tu casa o salón.": "Taco spreads, steaks, seafood, and snacks set up at your house or venue.",
    "Barra completa": "Full bar",
    "Tequila, mezcal y cócteles de la casa con cantineros.": "Tequila, mezcal, and house cocktails with bartenders.",
    "Estamos por abrir en El Paso.": "We're about to open in El Paso.",
    "Seguir @sinyolandaelpaso": "Follow @sinyolandaelpaso",
    "La ruta": "The route",
    "De Guadalajara a El Paso.": "From Guadalajara to El Paso.",
    "Nos vemos pronto, El Paso": "See you soon, El Paso",
    "El catering no espera.": "Catering doesn't wait.",

    /* ---------- TIENDA ---------- */
    "Tienda": "Shop",
    "Para llevarte la casa puesta": "Take the house with you",
    "Venta en línea muy pronto. Mientras tanto, todo se compra en la barra, mirando a los ojos.": "Online shop coming soon. Until then, everything is bought at the bar, eye to eye.",
    "Disponible en la cantina": "Available at the cantina",
    "Lo de siempre, puesto.": "The usual, done right.",

    /* ---------- SUCURSALES (labels) ---------- */
    "Cómo llegar y dónde estacionarte": "Directions & parking",
    "Horarios": "Hours",
    "Reserva en OpenTable": "Book on OpenTable",
    "Reserva por WhatsApp": "Book on WhatsApp",
    "Ver menú": "See menu",
    "Síguenos": "Follow us",
    "Menú de la casa": "House menu",

    /* ---------- OTROS ---------- */
    "Ver más": "See more",
    "Ver menos": "See less",
    "LEER MÁS": "READ MORE",
    "READ MORE": "READ MORE",
    "LEER MENOS": "READ LESS",
    "Cerrado": "Closed",
    "Abierto": "Open",
    "Habitual": "Regular",
    "Novedoso": "New",
    "Cada página organiza información, reservaciones y descubrimiento local sin perder la identidad de la marca.": "Each page organizes information, reservations, and local discovery without losing the brand identity.",
    "Cada casa tiene su propia mesa, y todas suenan igual cuando se prende el micrófono.": "Every house has its own table, and they all sound the same once the mic goes up.",
    "Tu próxima historia comienza aquí": "Your next story starts here",
    "Elige ubicación.Nosotros hacemos el resto.": "Pick a location. We handle the rest.",
    "sucursales abiertas": "open locations",
    "próxima apertura": "next opening",
    "Menú": "Menu",
    "México · Estados Unidos": "Mexico · United States",
    "Cantina · Karaoke · Coctelería": "Cantina · Karaoke · Cocktails",
    "Mexican restaurant · En preparación": "Mexican restaurant · In the works",
    "Noche de canto": "Sing night",
    "Jue–Sáb · desde las 8:00 pm": "Thu–Sat · from 8:00 pm",
    "El micrófono recorre las mesas y la cantina entera se vuelve coro. Disponibilidad sujeta a cada sucursal.": "The mic travels the tables and the whole cantina becomes a choir. Subject to availability per location.",
    "Reservación para grupos": "Group reservations",
    "Cumpleaños, aniversarios y quince años con menú y mesa reservada. Coordina con la sucursal.": "Birthdays, anniversaries, and quinceañeras with a set menu and reserved table. Coordinate with the location.",
    "Déjanos tu correo y te avisamos cuando abramos en El Paso. Mientras tanto, sigue @sinyolandaelpaso en Instagram.": "Leave your email and we'll tell you when El Paso opens. Meanwhile, follow @sinyolandaelpaso on Instagram."
  };

  const WORD_SWAP = [
    [/(\bMéxico\b)/g, "Mexico"],
    [/\bEE\.UU\.\b/g, "USA"],
    [/\bJalisco\b/g, "Jalisco"],
  ];
  const LANG_KEY = "sy-lang";
  const TRANSLATABLE_SELECTOR = "h1, h2, h3, h4, h5, h6, p, a, span, strong, em, li, blockquote, dt, dd, option, button:not([aria-label]), label, figcaption";

  let current = "es";

  function norm(s) {
    return s.replace(/\s+/g, " ").trim();
  }

  function wordSwap(s) {
    if (!/México|EE\.UU\./.test(s)) return null;
    return s.replace(/\bMéxico\b/g, "Mexico").replace(/\bEE\.UU\./g, "USA");
  }

  function apply(lang) {
    current = lang;
    document.documentElement.lang = lang === "en" ? "en" : "es";
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}

    document.querySelectorAll(TRANSLATABLE_SELECTOR).forEach((node) => {
      // traducir cada nodo de texto directo (funciona con <br/>, <span>, etc.)
      Array.from(node.childNodes).forEach((n) => {
        if (n.nodeType !== 3) return;
        const s = norm(n.textContent);
        if (!s || !/[a-záéíóúñ]/i.test(s)) return;
        if (lang === "en") {
          if (n._syEs === undefined) n._syEs = s;
          const rep = DICT[s] || wordSwap(s);
          if (rep && rep !== s) n.textContent = rep;
        } else if (n._syEs !== undefined) {
          n.textContent = n._syEs;
          delete n._syEs;
        }
      });
    });

    document.querySelectorAll("[data-lang-btn]").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.langBtn === lang));
      b.classList.toggle("active", b.dataset.langBtn === lang);
    });
  }

  function buildToggle() {
    if (document.querySelector(".lang-toggle")) return;
    const nav = document.querySelector(".public-nav");
    if (!nav) return;
    const wrap = document.createElement("div");
    wrap.className = "lang-toggle";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", "Language / Idioma");
    wrap.innerHTML =
      '<button type="button" data-lang-btn="es" aria-pressed="true">ES</button>' +
      '<button type="button" data-lang-btn="en" aria-pressed="false">EN</button>';
    nav.appendChild(wrap);
    wrap.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-lang-btn]");
      if (!btn) return;
      apply(btn.dataset.langBtn);
    });
  }

  function init() {
    buildToggle();
    let saved = "es";
    try { saved = localStorage.getItem(LANG_KEY) || "es"; } catch (e) {}
    if (saved === "en") apply("en");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // re-aplicar tras cambios de página SPA (render dinámico)
  // con debounce: el observer dispara apply() que a su vez toca el DOM → bucle infinito si no
  let pending = null;
  const obs = new MutationObserver(() => {
    if (pending) return;
    pending = setTimeout(() => {
      pending = null;
      buildToggle();
      if (current === "en") apply("en");
    }, 120);
  });
  obs.observe(document.body, { childList: true, subtree: true });
  window.SY_I18N = { apply, get lang() { return current; } };
})();
