const state = {
  lang: "es",
  locationId: "zapopan",
  category: "all",
};

const copy = {
  es: {
    navLocations: "Sucursales",
    navMenu: "Menu",
    navEvents: "Eventos",
    navAdmin: "Panel editable",
    reserve: "Reservar",
    heroEyebrow: "Cantina moderna multi-sucursal",
    heroTitle: "Buena bebida, buena musica y datos listos para Google e IA.",
    heroCopy:
      "Un sitio bilingue donde Zapopan, San Antonio, Houston y The Woodlands pueden mantener menu, horarios, reservas y datos locales bajo una sola estructura. Maricarmen queda visible como concepto por confirmar.",
    viewLocations: "Ver sucursales",
    seeAdmin: "Ver demo editable",
    painLabel: "Cuello de botella actual",
    painTitle: "Cambios centralizados.",
    painText:
      "Menu, horarios, telefonos y reservas viven repartidos entre sitios, OpenTable, Maps y redes. Este mockup centraliza marca, sucursales y contenido editable.",
    auditKicker: "Lectura de branding actual",
    auditTitle: "La marca ya tiene lo mas dificil: una experiencia memorable.",
    auditOneTitle: "Identidad emocional",
    auditOneText: "Canto, despecho, amigas, fiesta y seguridad. La web debe vender momento social, no solo platillos.",
    auditTwoTitle: "Expansion con friccion",
    auditTwoText: "Mexico y Texas necesitan datos consistentes por sucursal para Maps, OpenTable, directorios, reservas e IA. Maricarmen se marca como dato por confirmar.",
    auditThreeTitle: "Contenido poco estructurado",
    auditThreeText: "Las fotos atraen, pero menus en imagen y cambios manuales limitan SEO, AI search y velocidad operativa.",
    locationsKicker: "Arquitectura propuesta",
    locationsTitle: "Cuatro sucursales confirmadas y Maricarmen como dato por confirmar.",
    maps: "Google Maps",
    bookLocation: "Reservar / pedir info",
    siblingKicker: "Concepto hermano del grupo",
    siblingTitle: "Maricarmen puede integrarse como dato por confirmar sin confundirse con las 4 sucursales Sin Yolanda.",
    siblingText:
      "Maricarmen conserva su propia identidad, publico y sitio, pero puede compartir la misma base maestra de datos, reputacion, directorios, menus y reportes del grupo.",
    menuKicker: "Menu digital bilingue",
    menuTitle: "Filtrable, indexable y editable por sucursal.",
    selectLocation: "Sucursal",
    eventsKicker: "Reservas con intencion",
    eventsTitle: "Cumpleanos, grupos, precopeo y noches de canto.",
    eventsText:
      "Cada CTA puede abrir un flujo distinto: cumpleanos, grupo grande, brunch, date night o mesa de ultimo minuto.",
    flowBirthday: "Cumpleanos",
    flowGroups: "Grupos",
    flowBrunch: "Brunch",
    flowNight: "Noche de canto",
    adminKicker: "Demo para duenos y gerentes",
    adminTitle: "Cambios rapidos sin pedirle todo a marketing.",
    adminDish: "Platillo o coctel destacado",
    adminPrice: "Precio",
    adminPromo: "Promo activa",
    adminPreview: "Vista publica",
    adminNote: "En la version real esto se conecta a Sanity, Airtable, HighLevel o un CMS simple.",
    reserveKicker: "Capa de automatizacion",
    reserveTitle: "Un agente recibe la solicitud y la manda a la sucursal correcta.",
    formName: "Nombre",
    formPhone: "WhatsApp",
    formButton: "Simular solicitud",
    footerNote: "Prototipo visual para presentar estrategia, no sitio oficial.",
    address: "Direccion",
    hours: "Horarios",
    phone: "Telefono",
    bestFor: "Ideal para",
    all: "Todo",
  },
  en: {
    navLocations: "Locations",
    navMenu: "Menu",
    navEvents: "Events",
    navAdmin: "Editable panel",
    reserve: "Reserve",
    heroEyebrow: "Multi-location modern cantina",
    heroTitle: "Good drinks, good music, and data ready for Google and AI.",
    heroCopy:
      "A bilingual site where Zapopan, San Antonio, Houston and The Woodlands can keep menu, hours, reservations and local data under one shared structure. Maricarmen remains visible as to be confirmed.",
    viewLocations: "View locations",
    seeAdmin: "See editable demo",
    painLabel: "Current bottleneck",
    painTitle: "Centralized changes.",
    painText:
      "Menus, hours, phone numbers and bookings are scattered across websites, OpenTable, Maps and social profiles. This mockup centralizes brand, locations and editable content.",
    auditKicker: "Current brand read",
    auditTitle: "The brand already has the hardest part: a memorable experience.",
    auditOneTitle: "Emotional identity",
    auditOneText: "Singing, heartbreak, friends, party and safety. The site should sell the social moment, not just dishes.",
    auditTwoTitle: "Expansion with friction",
    auditTwoText: "Mexico and Texas need consistent location data for Maps, OpenTable, directories, bookings and AI search. Maricarmen is marked as to be confirmed.",
    auditThreeTitle: "Unstructured content",
    auditThreeText: "Photos attract, but image-based menus and manual changes limit SEO, AI search and operating speed.",
    locationsKicker: "Proposed architecture",
    locationsTitle: "Four confirmed locations and Maricarmen as to be confirmed.",
    maps: "Google Maps",
    bookLocation: "Reserve / ask info",
    siblingKicker: "Sister concept in the group",
    siblingTitle: "Maricarmen can be integrated as to be confirmed without being confused with the 4 Sin Yolanda locations.",
    siblingText:
      "Maricarmen keeps its own identity, audience and website, while sharing the same master data, reputation, directories, menus and reporting layer.",
    menuKicker: "Bilingual digital menu",
    menuTitle: "Filterable, indexable and editable by location.",
    selectLocation: "Location",
    eventsKicker: "Intent-based reservations",
    eventsTitle: "Birthdays, groups, pregame and sing-along nights.",
    eventsText:
      "Each CTA can open a different flow: birthdays, large groups, brunch, date night or last-minute table.",
    flowBirthday: "Birthdays",
    flowGroups: "Groups",
    flowBrunch: "Brunch",
    flowNight: "Sing-along night",
    adminKicker: "Demo for owners and managers",
    adminTitle: "Fast changes without sending everything to marketing.",
    adminDish: "Featured dish or cocktail",
    adminPrice: "Price",
    adminPromo: "Active promo",
    adminPreview: "Public view",
    adminNote: "In the real version this connects to Sanity, Airtable, HighLevel or a simple CMS.",
    reserveKicker: "Automation layer",
    reserveTitle: "An agent receives the request and routes it to the right location.",
    formName: "Name",
    formPhone: "WhatsApp",
    formButton: "Simulate request",
    footerNote: "Visual prototype for strategy presentation, not the official website.",
    address: "Address",
    hours: "Hours",
    phone: "Phone",
    bestFor: "Best for",
    all: "All",
  },
};

const locations = [
  {
    id: "zapopan",
    name: "Sin Yolanda Zapopan",
    type: { es: "Cantina original en Jalisco", en: "Original cantina in Jalisco" },
    address: "San Ignacio 78, Jardines de San Ignacio, Zapopan",
    phone: "(33) 1018 6159",
    hours: { es: "Mie-Sab 7 pm - 3 am", en: "Wed-Sat 7 pm - 3 am" },
    bestFor: { es: "canto, cumpleanos, amigas, noche de fiesta", en: "singing, birthdays, friends, nightlife" },
    description: {
      es: "La casa madre: buena bebida, buena musica y el ritual de cantar lo que duele y lo que se celebra.",
      en: "The original home: good drinks, good music and the ritual of singing what hurts and what is worth celebrating.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=San+Ignacio+78+Jardines+de+San+Ignacio+Zapopan",
    image: "https://sinyolandagdl.com/wp-content/uploads/2024/08/Chica-en-sin-yolanda-980x1184.png",
  },
  {
    id: "maricarmen",
    name: "Maricarmen Guadalajara (por confirmar)",
    type: { es: "Concepto hermano / dato por confirmar", en: "Sister concept / to be confirmed" },
    address: "Av. Ruben Dario 1045-A, Lomas de Providencia, Guadalajara",
    phone: "Dato por confirmar",
    hours: { es: "Dato por confirmar", en: "To be confirmed" },
    bestFor: { es: "ladies night, grupos, cumpleanos, comunidad", en: "ladies night, groups, birthdays, community" },
    description: {
      es: "Concepto hermano con identidad propia. Se muestra en el sistema para validar si debe integrarse al mismo dashboard, directorios y reportes del grupo.",
      en: "Sister concept with its own identity. It appears in the system to validate whether it should share the same dashboard, directories and group reports.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=Av+Ruben+Dario+1045+A+Lomas+de+Providencia+Guadalajara",
    image: "https://sinyolandagdl.com/wp-content/uploads/2024/08/disfrutando-en-sin-yolanda-2-980x1184.png",
  },
  {
    id: "san-antonio",
    name: "Sin Yolanda San Antonio",
    type: { es: "River Walk, Texas", en: "River Walk, Texas" },
    address: "415 E Commerce St, San Antonio, TX",
    phone: "(726) 239 6779",
    hours: { es: "Mie 12-9 pm, Jue-Sab 12 pm-2 am, Dom 10 am-9 pm", en: "Wed 12-9 pm, Thu-Sat 12 pm-2 am, Sun 10 am-9 pm" },
    bestFor: { es: "turistas, precopeo, cena mexicana, River Walk", en: "tourists, pregame, Mexican dinner, River Walk" },
    description: {
      es: "La entrada de la marca a Estados Unidos: restaurante mexicano de dia, cantina de fiesta de noche.",
      en: "The brand's U.S. entry point: Mexican restaurant by day, high-energy cantina by night.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=415+E+Commerce+St+San+Antonio+TX",
    image: "https://sinyolandagdl.com/wp-content/uploads/2024/08/cantarito-sin-yolanda-480x750.png",
  },
  {
    id: "woodlands",
    name: "Sin Yolanda The Woodlands",
    type: { es: "Shenandoah, Texas", en: "Shenandoah, Texas" },
    address: "1400 Research Forest Dr Ste 180, Shenandoah, TX",
    phone: "(346) 382-3863",
    hours: { es: "Mar-Mie 12-9 pm, Jue-Sab 12 pm-2 am, Dom 10 am-9 pm", en: "Tue-Wed 12-9 pm, Thu-Sat 12 pm-2 am, Sun 10 am-9 pm" },
    bestFor: { es: "grupos, cocktails, cena, noche energetica", en: "groups, cocktails, dinner, energetic night out" },
    description: {
      es: "Una sucursal pensada para grupos y cenas con energia: cocteles, comida mexicana contemporanea y musica.",
      en: "A location built for groups and energetic dinners: cocktails, contemporary Mexican food and music.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=1400+Research+Forest+Dr+Ste+180+Shenandoah+TX",
    image: "https://sinyolandagdl.com/wp-content/uploads/2024/08/mariscos-sin-yolanda-980x721.png",
  },
  {
    id: "houston",
    name: "Sin Yolanda Houston",
    type: { es: "Washington Avenue, Houston", en: "Washington Avenue, Houston" },
    address: "4901 Washington Ave, Houston, TX",
    phone: "(346) 879-1675",
    hours: { es: "Mie-Sab 12 pm - 2 am, Dom 10 am - 12 am", en: "Wed-Sat 12 pm - 2 am, Sun 10 am - 12 am" },
    bestFor: { es: "cena, grupos, cocteles, noche de fiesta", en: "dinner, groups, cocktails, high-energy night out" },
    description: {
      es: "La sucursal de Washington Avenue: cocina mexicana elevada, cocteles y ambiente de cantina para convertir busquedas locales en reservas.",
      en: "The Washington Avenue location: elevated Mexican food, cocktails and cantina energy built to turn local searches into bookings.",
    },
    maps: "https://www.google.com/maps/search/?api=1&query=4901+Washington+Ave+Houston+TX",
    image: "https://sinyolandagdl.com/wp-content/uploads/2024/08/disfrutando-en-sin-yolanda-2-980x1184.png",
  },
];

const menuItems = [
  {
    category: "cocktails",
    name: "Princhupe",
    price: { mx: "$190", us: "$15" },
    desc: {
      es: "Bacardi blanco, maracuya, crema de coco y naranja.",
      en: "Bacardi Blanco, passion fruit, coconut cream and orange soda.",
    },
  },
  {
    category: "cocktails",
    name: "Maria Bonita",
    price: { mx: "$190", us: "$15" },
    desc: {
      es: "Mezcal, jamaica, licor de chile ancho, Aperol, limon y jarabe.",
      en: "Mezcal, hibiscus, ancho chile liqueur, Aperol, lemon and syrup.",
    },
  },
  {
    category: "cocktails",
    name: "Potrillo",
    price: { mx: "$160", us: "$15" },
    desc: {
      es: "Tequila blanco, pina, limon, jarabe y concentrado de jamaica.",
      en: "Blanco tequila, pineapple, lemon, syrup and hibiscus.",
    },
  },
  {
    category: "starters",
    name: "Quesabirria",
    price: { mx: "$220", us: "$19.50" },
    desc: {
      es: "Quesadillas de birria con consome para compartir.",
      en: "Beef birria quesadillas with consomme for sharing.",
    },
  },
  {
    category: "food",
    name: "Tacos de arrachera",
    price: { mx: "$190", us: "$14.50" },
    desc: {
      es: "Tacos para cena casual antes de que suba la musica.",
      en: "Casual dinner tacos before the music turns up.",
    },
  },
  {
    category: "brunch",
    name: "Chilaquiles",
    price: { mx: "$180", us: "$12.95" },
    desc: {
      es: "Rojo o verde, pensado para brunch y domingos.",
      en: "Red or green, made for brunch and Sundays.",
    },
  },
];

const categories = ["all", "cocktails", "starters", "food", "brunch"];

const flows = {
  birthday: {
    es: "Agente: pregunta fecha, sucursal, numero de personas, nombre de cumpleanera y paquete. Despues manda confirmacion por WhatsApp y solicita deposito si aplica.",
    en: "Agent: asks date, location, party size, birthday name and package. Then sends WhatsApp confirmation and requests deposit if needed.",
  },
  groups: {
    es: "Agente: detecta grupos grandes, valida disponibilidad y avisa al gerente de la sucursal correcta.",
    en: "Agent: detects large groups, checks availability and alerts the right location manager.",
  },
  brunch: {
    es: "Agente: muestra horarios de brunch, menu recomendado y boton directo a reserva.",
    en: "Agent: shows brunch hours, recommended menu and direct reservation button.",
  },
  night: {
    es: "Agente: recomienda horario, politica de reservacion y experiencia de canto segun ciudad.",
    en: "Agent: recommends time, reservation policy and sing-along experience by city.",
  },
};

function t(key) {
  return copy[state.lang][key] || copy.es[key] || key;
}

function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.querySelector(".lang-toggle").textContent = state.lang.toUpperCase();
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
}

function renderLocations() {
  const tabs = document.querySelector(".location-tabs");
  const select = document.querySelector(".location-select");
  tabs.innerHTML = "";
  select.innerHTML = "";

  locations.forEach((location) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = location.name;
    button.className = location.id === state.locationId ? "active" : "";
    button.addEventListener("click", () => {
      state.locationId = location.id;
      renderLocations();
      renderMenu();
    });
    tabs.append(button);

    const option = document.createElement("option");
    option.value = location.id;
    option.textContent = location.name;
    option.selected = location.id === state.locationId;
    select.append(option);
  });

  select.addEventListener("change", (event) => {
    state.locationId = event.target.value;
    renderLocations();
    renderMenu();
  });

  const location = locations.find((item) => item.id === state.locationId);
  document.querySelector(".location-photo img").src = location.image;
  document.querySelector(".location-photo img").alt = location.name;
  document.querySelector(".location-type").textContent = location.type[state.lang];
  document.querySelector(".location-info h3").textContent = location.name;
  document.querySelector(".location-description").textContent = location.description[state.lang];
  document.querySelector(".maps-link").href = location.maps;
  document.querySelector(".location-meta").innerHTML = `
    <div><dt>${t("address")}</dt><dd>${location.address}</dd></div>
    <div><dt>${t("hours")}</dt><dd>${location.hours[state.lang]}</dd></div>
    <div><dt>${t("phone")}</dt><dd>${location.phone}</dd></div>
    <div><dt>${t("bestFor")}</dt><dd>${location.bestFor[state.lang]}</dd></div>
  `;
}

function renderCategoryFilters() {
  const wrapper = document.querySelector(".menu-filters");
  wrapper.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = category === state.category ? "active" : "";
    button.textContent = category === "all" ? t("all") : category;
    button.addEventListener("click", () => {
      state.category = category;
      renderMenu();
    });
    wrapper.append(button);
  });
}

function renderMenu() {
  const grid = document.querySelector(".menu-grid");
  const isUs = ["san-antonio", "woodlands", "houston"].includes(state.locationId);
  const visible = menuItems.filter((item) => state.category === "all" || item.category === state.category);
  grid.innerHTML = visible
    .map(
      (item) => `
        <article class="menu-card">
          <span class="category">${item.category}</span>
          <h3>${item.name}</h3>
          <p>${item.desc[state.lang]}</p>
          <strong>${isUs ? item.price.us : item.price.mx}</strong>
        </article>
      `,
    )
    .join("");
  renderCategoryFilters();
}

function bindAdminDemo() {
  const fields = [
    [".admin-name", ".preview-name"],
    [".admin-price", ".preview-price"],
    [".admin-promo", ".preview-promo"],
  ];

  fields.forEach(([inputSelector, previewSelector]) => {
    const input = document.querySelector(inputSelector);
    const preview = document.querySelector(previewSelector);
    input.addEventListener("input", () => {
      preview.textContent = input.value || "Pendiente";
    });
  });
}

function bindEvents() {
  document.querySelector(".lang-toggle").addEventListener("click", () => {
    state.lang = state.lang === "es" ? "en" : "es";
    applyLanguage();
    renderLocations();
    renderMenu();
    renderFlow("birthday");
  });

  document.querySelectorAll(".event-flows button").forEach((button) => {
    button.addEventListener("click", () => renderFlow(button.dataset.flow));
  });

  document.querySelector(".reserve-form button").addEventListener("click", () => {
    const message =
      state.lang === "es"
        ? "Solicitud simulada: el agente enviaria esta conversacion al gerente de la sucursal elegida."
        : "Simulated request: the agent would route this conversation to the selected location manager.";
    alert(message);
  });
}

function renderFlow(flow) {
  document.querySelector(".flow-preview").textContent = flows[flow][state.lang];
}

applyLanguage();
renderLocations();
renderMenu();
renderFlow("birthday");
bindAdminDemo();
bindEvents();
