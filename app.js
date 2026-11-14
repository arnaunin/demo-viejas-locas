(() => {
  document.documentElement.classList.add("js");
  const calma = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Textos ---------- */
  const T = {
    es: {
      skip: "Ir al contenido",
      "nav.about": "La casa", "nav.menu": "Carta", "nav.gallery": "Galería", "nav.find": "Dónde estamos",
      "hero.title": "Bodegón argentino en Calafell",
      "hero.intro": "Brasas, empanadas y milanesas, con mesa puesta y corazón abierto.",
      "cta.book": "Reserva mesa", "cta.menu": "Ver la carta", "cta.route": "Cómo llegar", "cta.call": "Llama al 633 75 86 68",
      "about.kicker": "La casa",
      "about.title": "Un rincón de Argentina en Calafell",
      "about.p1": "Viejas Locas es un bodegón argentino de los de toda la vida, a un paso de la playa. Paredes llenas de historia, música de fondo y una cocina hecha como en casa: empanadas caseras, una gran variedad de milanesas, cortes de carne a la brasa y postres clásicos.",
      "about.p2": "Los valores de la casa son sencillos: buen producto y buen trato. Aquí se viene a comer bien, compartir y disfrutar como en los viejos tiempos.",
      "about.f1": "Reserva online o por teléfono", "about.f2": "También para llevar y a domicilio", "about.f3": "Abierto de miércoles a sábado",
      "menu.kicker": "Carta",
      "menu.title": "Las milanesas salen de titulares",
      "menu.notice": "Platos y precios de la carta que el restaurante tiene publicada. Pueden haber cambiado: confírmalos en el local.",
      "gal.kicker": "Galería", "gal.title": "Brasa, empanadas y camisetas",
      "band.title": "Ven a vivir la experiencia argentina",
      "find.kicker": "Horario y ubicación", "find.title": "Ven a vernos", "find.caption": "Horario semanal",
      "find.closed": "Cerrado",
      "find.delivery": "Pide a domicilio por Just Eat",
      "day.1": "Lunes", "day.2": "Martes", "day.3": "Miércoles", "day.4": "Jueves", "day.5": "Viernes", "day.6": "Sábado", "day.0": "Domingo",
      "foot.demo": "Esta página es una propuesta de diseño hecha por Arnau Nin. No es la web oficial del restaurante.",
      "lb.close": "Cerrar",
      "alt.tables": "Mesas altas de madera ante una pared de ladrillo amarillo llena de carteles y fotos enmarcadas",
      "alt.grill": "Dos cortes de carne a la brasa con hueso, con patatas, pimientos y tomates a la plancha",
      "alt.room": "La sala: mesas montadas, pared de ladrillo amarillo y banderines de clubes argentinos",
      "alt.corner": "Mesa para dos bajo una pared negra con fotos enmarcadas de fútbol",
      "alt.empanadas": "Cuatro empanadas fritas en una bandeja de cerámica",
      "alt.shirt": "Camiseta de fútbol enmarcada en la pared, con el dorsal 10",
      "alt.mixed": "Parrillada de carne con chorizo, morcilla, pimientos y patatas",
      "alt.steak": "Corte de carne a la brasa con patatas fritas"
    },
    en: {
      skip: "Skip to content",
      "nav.about": "The place", "nav.menu": "Menu", "nav.gallery": "Gallery", "nav.find": "Find us",
      "hero.title": "An Argentine bodegón in Calafell",
      "hero.intro": "Grilled meat, empanadas and milanesas, with the table laid and an open heart.",
      "cta.book": "Book a table", "cta.menu": "See the menu", "cta.route": "Get directions", "cta.call": "Call 633 75 86 68",
      "about.kicker": "The place",
      "about.title": "A corner of Argentina in Calafell",
      "about.p1": "Viejas Locas is an old-school Argentine bodegón a short walk from the beach. Walls full of history, music in the background and home-style cooking: homemade empanadas, a long list of milanesas, grilled cuts of meat and classic desserts.",
      "about.p2": "The house values are simple: good produce and a warm welcome. People come here to eat well, share and enjoy themselves like in the old days.",
      "about.f1": "Book online or by phone", "about.f2": "Takeaway and delivery too", "about.f3": "Open Wednesday to Saturday",
      "menu.kicker": "Menu",
      "menu.title": "The milanesas are in the starting line-up",
      "menu.notice": "Dishes and prices from the menu the restaurant has published. They may have changed: please confirm at the restaurant.",
      "gal.kicker": "Gallery", "gal.title": "Grill, empanadas and football shirts",
      "band.title": "Come and taste Argentina",
      "find.kicker": "Hours & location", "find.title": "Come and see us", "find.caption": "Weekly opening hours",
      "find.closed": "Closed",
      "find.delivery": "Order delivery on Just Eat",
      "day.1": "Monday", "day.2": "Tuesday", "day.3": "Wednesday", "day.4": "Thursday", "day.5": "Friday", "day.6": "Saturday", "day.0": "Sunday",
      "foot.demo": "This page is a design proposal made by Arnau Nin. It is not the restaurant's official website.",
      "lb.close": "Close",
      "alt.tables": "High wooden tables by a yellow brick wall covered in posters and framed photos",
      "alt.grill": "Two bone-in grilled steaks with grilled potatoes, peppers and tomatoes",
      "alt.room": "The dining room: laid tables, a yellow brick wall and Argentine club pennants",
      "alt.corner": "Table for two under a black wall with framed football photos",
      "alt.empanadas": "Four fried empanadas on a ceramic tray",
      "alt.shirt": "Framed football shirt on the wall, number 10",
      "alt.mixed": "Mixed grill with chorizo, black pudding, peppers and potatoes",
      "alt.steak": "Grilled steak with fries"
    }
  };

  /* ---------- Carta (publicada pel restaurant) ----------
     n: nom original · ca/en: nom traduït si cal · d: descripció [ca, es, en] · p: preu */
  const CARTA = [
    { id: "milanesas", nom: ["Milaneses", "Milanesas", "Milanesas"], foto: "milanesa", dorsals: true, plats: [
      { n: "Napolitana", p: 19.5, d: ["Salsa napolitana, pernil dolç, tomàquet i mozzarella.", "Salsa napolitana, jamón york, tomate y mozzarella.", "Napolitana sauce, ham, tomato and mozzarella."] },
      { n: "Fugazza", p: 19.5, d: ["Mozzarella i ceba.", "Mozzarella y cebolla.", "Mozzarella and onion."] },
      { n: "Chacarera", p: 19.5, d: ["Mozzarella i encenalls de pernil.", "Mozzarella y virutas de jamón.", "Mozzarella and ham shavings."] },
      { n: "Suprema", p: 19.5, d: ["Mozzarella, bacó i pebrot.", "Mozzarella, bacón y pimiento.", "Mozzarella, bacon and pepper."] },
      { n: "Viejas Locas", p: 19.5, d: ["Cheddar i bacó.", "Cheddar y bacón.", "Cheddar and bacon."] },
      { n: "Suiza", p: 19.5, d: ["Mozzarella.", "Mozzarella.", "Mozzarella."] },
      { n: "Morrona", p: 19.5, d: ["Mozzarella, pebrot i olives.", "Mozzarella, pimiento y aceitunas.", "Mozzarella, pepper and olives."] }
    ] },
    { id: "carnes", nom: ["Carns", "Carnes", "Meat"], foto: "brasa", plats: [
      { n: "Tiras de asado", p: 21.5 },
      { n: "Entraña", p: 22.5 },
      { n: "Vacío", p: 22.5 },
      { n: "Mona", p: 22.5 },
      { n: "Bife", p: 32 },
      { n: "Chuletón 750 g", p: 39.5 },
      { n: "Tomahawk 1 kg", p: 51.5 },
      { n: "Secreto ibérico", ca: "Secret ibèric", p: 28.5 },
      { n: "Pollo a la brasa", ca: "Pollastre a la brasa", en: "Chargrilled chicken", p: 17.5 },
      { n: "Pollo Pampa", p: 19.5 }
    ] },
    { id: "empanadas", nom: ["Empanades", "Empanadas", "Empanadas"], foto: "empanades", plats: [
      { n: "Criolla", p: 3.7 },
      { n: "Queso y jamón york", ca: "Formatge i pernil dolç", en: "Cheese and ham", p: 3.7 },
      { n: "Mozzarella, tomate y albahaca", ca: "Mozzarella, tomàquet i alfàbrega", en: "Mozzarella, tomato and basil", p: 3.7 },
      { n: "Cebolla y queso", ca: "Ceba i formatge", en: "Onion and cheese", p: 3.7 },
      { n: "Espinaca y queso", ca: "Espinacs i formatge", en: "Spinach and cheese", p: 3.7 }
    ] },
    { id: "provoletas", nom: ["Provoletes", "Provoletas", "Provoletas"], plats: [
      { n: "Tradicional", p: 13.5, d: ["Ceba, tomàquet i orenga.", "Cebolla, tomate y orégano.", "Onion, tomato and oregano."] },
      { n: "Chacarera", p: 13.5, d: ["Amb encenalls de pernil.", "Con virutas de jamón.", "With ham shavings."] },
      { n: "Oreganato", p: 13.5, d: ["Orenga i pebre negre.", "Orégano y pimienta negra.", "Oregano and black pepper."] },
      { n: "Picante", ca: "Picant", en: "Spicy", p: 13.5, d: ["Amb ají mòlt.", "Con ají molido.", "With ground chilli."] },
      { n: "Viejas Locas", p: 13.5, d: ["Amb bacó.", "Con bacón.", "With bacon."] },
      { n: "Morrona", p: 13.5, d: ["Amb pebrot i olives.", "Con pimiento y aceitunas.", "With pepper and olives."] }
    ] },
    { id: "caprichos", nom: ["Capritxos", "Caprichos", "Small plates"], plats: [
      { n: "Chorizo criollo", p: 3.7 },
      { n: "Morcilla", en: "Morcilla (black pudding)", p: 3.7 },
      { n: "Choclo - mazorca", ca: "Choclo (panotxa)", en: "Choclo (corn on the cob)", p: 3.7 },
      { n: "Croquetas", ca: "Croquetes", en: "Croquettes", p: 9.5 },
      { n: "Carpaccio de Angus", en: "Angus carpaccio", p: 18 },
      { n: "Revuelto criollo", p: 18, d: ["Ous ferrats, xoriço crioll i patates fregides.", "Huevos fritos, chorizo criollo y patatas fritas.", "Fried eggs, chorizo criollo and fries."] },
      { n: "Revuelto Pampa", p: 18, d: ["Ous ferrats, morcilla i patates fregides.", "Huevos fritos, morcilla y patatas fritas.", "Fried eggs, black pudding and fries."] },
      { n: "Parrillada de verduras", ca: "Graellada de verdures", en: "Grilled vegetable platter", p: 18.5 },
      { n: "Canelón argentino", ca: "Caneló argentí", en: "Argentine cannelloni", p: 12 }
    ] },
    { id: "ensaladas", nom: ["Amanides", "Ensaladas", "Salads"], plats: [
      { n: "RPP", p: 12.5, d: ["Ruca, pera i parmesà.", "Rúcula, pera y parmesano.", "Rocket, pear and parmesan."] },
      { n: "Primavera", p: 18.5, d: ["Creps fines, enciam, tomàquet, pernil dolç i formatge.", "Finos creps, lechuga, tomate, jamón york y queso.", "Thin crêpes, lettuce, tomato, ham and cheese."] },
      { n: "Rúcula", ca: "Ruca", en: "Rocket", p: 12.5, d: ["Ruca, nous i formatge de cabra.", "Rúcula, nueces y queso de cabra.", "Rocket, walnuts and goat's cheese."] },
      { n: "Chacra", p: 11, d: ["Enciams, tomàquet, blat de moro, ceba i pebrot.", "Lechugas, tomate, maíz, cebolla y pimiento.", "Lettuce, tomato, sweetcorn, onion and pepper."] },
      { n: "Burrata", p: 13.5, d: ["Burrata, tomàquet i pesto.", "Burrata, tomate y pesto.", "Burrata, tomato and pesto."] }
    ] },
    { id: "postres", nom: ["Postres", "Postres", "Desserts"], plats: [
      { n: "Panqueque", p: 7 },
      { n: "Flan casero", ca: "Flam casolà", en: "Homemade flan", p: 6.5 },
      { n: "Pastel de manzana", ca: "Pastís de poma", en: "Apple cake", p: 7 },
      { n: "Bizcocho de chocolate", ca: "Pa de pessic de xocolata", en: "Chocolate sponge cake", p: 7.5 },
      { n: "Crep de chocolate", ca: "Crep de xocolata", en: "Chocolate crêpe", p: 7 },
      { n: "Bomba", p: 9.5, d: ["Crep farcida de dulce de leche, nata, bola de nata, xocolata calenta i nous.", "Crep relleno de dulce de leche, nata, bola de nata, chocolate caliente y nueces.", "Crêpe filled with dulce de leche, cream, a scoop of cream ice cream, hot chocolate and walnuts."] },
      { n: "Coronel", p: 9, d: ["Vodka, gelat de llimona i chantilly.", "Vodka, helado de limón y chantillí.", "Vodka, lemon ice cream and whipped cream."] }
    ] }
  ];
  const IDX = { ca: 0, es: 1, en: 2 };
  const FOTOS = { milanesa: "img/milanesa.webp", brasa: "img/brasa.webp", empanades: "img/empanades.webp" };

  let lang = "ca";
  let seccio = "milanesas";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const preu = n => n.toFixed(2).replace(".", ",") + " €";
  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };

  /* ---------- Carta amb pestanyes ---------- */
  const pestanyes = $("#pestanyes"), plafo = $("#plafo"), cartaFoto = $("#carta-foto");

  function pintaPestanyes() {
    pestanyes.replaceChildren(...CARTA.map(c => {
      const b = el("button", "", c.nom[IDX[lang]]);
      b.type = "button"; b.id = "pest-" + c.id; b.setAttribute("role", "tab");
      b.setAttribute("aria-controls", "plafo");
      const sel = c.id === seccio;
      b.setAttribute("aria-selected", String(sel)); b.tabIndex = sel ? 0 : -1;
      b.addEventListener("click", () => tria(c.id));
      return b;
    }));
  }
  function pintaPlats() {
    const c = CARTA.find(x => x.id === seccio);
    const llista = el(c.dorsals ? "ol" : "ul", "plats" + (c.dorsals ? " dorsals" : ""));
    c.plats.forEach((pl, i) => {
      const li = el("li"); li.style.setProperty("--i", i);
      const cos = el("div");
      cos.append(el("h4", "", pl[lang] || pl.n));
      if (pl.d) cos.append(el("p", "", pl.d[IDX[lang]]));
      li.append(cos, el("span", "preu", preu(pl.p)));
      llista.append(li);
    });
    plafo.replaceChildren(llista);
    plafo.setAttribute("aria-labelledby", "pest-" + c.id);
  }
  function canviaFoto(src) {
    const actual = $("img:not(.surt)", cartaFoto);
    if (!src || (actual && actual.getAttribute("src") === src)) return;
    const nova = el("img", "surt"); nova.alt = ""; nova.src = src;
    cartaFoto.append(nova);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      nova.classList.remove("surt");
      if (actual) { actual.classList.add("surt"); setTimeout(() => actual.remove(), 900); }
    }));
  }
  function tria(id, focus) {
    seccio = id;
    $$("button", pestanyes).forEach(b => {
      const sel = b.id === "pest-" + id;
      b.setAttribute("aria-selected", String(sel)); b.tabIndex = sel ? 0 : -1;
      if (sel && focus) b.focus();
    });
    pintaPlats();
    canviaFoto(FOTOS[CARTA.find(x => x.id === id).foto]);
  }
  pestanyes.addEventListener("keydown", e => {
    const i = CARTA.findIndex(c => c.id === seccio);
    const pas = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!pas) return;
    e.preventDefault();
    tria(CARTA[(i + pas + CARTA.length) % CARTA.length].id, true);
  });

  /* ---------- Obert ara? (hora de Calafell) ---------- */
  const TORNS = { 3: [[13, 15], [20, 23]], 4: [[13, 15], [20, 23]], 5: [[13, 15], [20, 23]], 6: [[13, 15], [20, 23]] };
  const DIES = {
    ca: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
    es: ["el domingo", "el lunes", "el martes", "el miércoles", "el jueves", "el viernes", "el sábado"],
    en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  };
  const ESTAT = {
    ca: { obert: h => `Obert ara · fins a les ${h}`, avui: h => `Tancat ara · obrim avui a les ${h}`, dia: (d, h) => `Tancat ara · obrim ${d} a les ${h}` },
    es: { obert: h => `Abierto ahora · hasta las ${h}`, avui: h => `Cerrado ahora · abrimos hoy a las ${h}`, dia: (d, h) => `Cerrado ahora · abrimos ${d} a las ${h}` },
    en: { obert: h => `Open now · until ${h}`, avui: h => `Closed now · opens today at ${h}`, dia: (d, h) => `Closed now · opens ${d} at ${h}` }
  };
  function araCalafell() {
    try {
      const p = Object.fromEntries(new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Madrid", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date()).map(x => [x.type, x.value]));
      return { dia: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(p.weekday), hora: (+p.hour % 24) + p.minute / 60 };
    } catch { const d = new Date(); return { dia: d.getDay(), hora: d.getHours() + d.getMinutes() / 60 }; }
  }
  function pintaEstat() {
    const { dia, hora } = araCalafell(), t = ESTAT[lang], caixa = $("#estat");
    const hh = h => h + ":00";
    const torn = (TORNS[dia] || []).find(([a, b]) => hora >= a && hora < b);
    let text;
    if (torn) text = t.obert(hh(torn[1]));
    else {
      const seguent = (TORNS[dia] || []).find(([a]) => hora < a);
      if (seguent) text = t.avui(hh(seguent[0]));
      else for (let k = 1; k <= 7 && !text; k++) { const d = (dia + k) % 7; if (TORNS[d]) text = t.dia(DIES[lang][d], hh(TORNS[d][0][0])); }
    }
    caixa.textContent = text; caixa.classList.toggle("obert", !!torn);
    $$(".horari tr").forEach(tr => tr.classList.toggle("avui", +tr.dataset.dia === dia));
  }

  /* ---------- Idiomes ---------- */
  const textos = $$("[data-i18n]"), alts = $$("[data-i18n-alt]"), etiquetes = $$("[data-i18n-label]");
  T.ca = { "lb.close": "Tanca" };
  textos.forEach(e => { T.ca[e.dataset.i18n] = e.textContent; });
  alts.forEach(e => { T.ca[e.dataset.i18nAlt] = e.alt; });
  const botons = $$("[data-lang]");
  function aplica(nou) {
    lang = T[nou] ? nou : "ca";
    const t = T[lang];
    document.documentElement.lang = lang;
    textos.forEach(e => { e.textContent = t[e.dataset.i18n] ?? T.ca[e.dataset.i18n]; });
    alts.forEach(e => { e.alt = t[e.dataset.i18nAlt] ?? T.ca[e.dataset.i18nAlt]; });
    etiquetes.forEach(e => e.setAttribute("aria-label", t[e.dataset.i18nLabel]));
    botons.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    pintaPestanyes(); pintaPlats(); pintaEstat();
    try { localStorage.setItem("vl-lang", lang); } catch {}
  }
  botons.forEach(b => b.addEventListener("click", () => aplica(b.dataset.lang)));
  let inicial = (navigator.language || "ca").slice(0, 2);
  try { inicial = localStorage.getItem("vl-lang") || inicial; } catch {}
  aplica(inicial);
  setInterval(pintaEstat, 60000);

  /* ---------- Fotos del hero ---------- */
  const diapos = $$("#hero-fotos img");
  if (!calma && diapos.length > 1) {
    let k = 0;
    setInterval(() => {
      diapos[k].classList.remove("on");
      k = (k + 1) % diapos.length;
      diapos[k].loading = "eager";
      diapos[k].classList.add("on");
    }, 5000);
  }

  /* ---------- Aparició en fer scroll ---------- */
  const perRevelar = $$(".casa-text > *, .casa-fotos img, .carta-cap > *, .pestanyes, .carta-foto, .galeria-cap > *, .galeria-graella > *, .crida > *, .on-info > *");
  perRevelar.forEach(e => {
    e.classList.add("revela");
    const germans = [...e.parentElement.children].filter(x => x.classList.contains("revela"));
    e.style.setProperty("--retard", Math.min(germans.indexOf(e), 6) * 80 + "ms");
  });
  if ("IntersectionObserver" in window && !calma) {
    const obs = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add("vist"); obs.unobserve(x.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: .08 });
    perRevelar.forEach(e => obs.observe(e));
  } else perRevelar.forEach(e => e.classList.add("vist"));

  /* ---------- Capçalera, enllaç actiu, botó flotant i parallaxi ---------- */
  const top = $("#top"), flotant = $("#flotant"), hero = $("#inici"), fotosCasa = $(".casa-fotos"), peu = $(".peu");
  const enllacos = $$(".nav a"), seccions = enllacos.map(a => $(a.getAttribute("href")));
  let pendent = false;
  function enScroll() {
    pendent = false;
    const y = scrollY, vh = innerHeight;
    top.classList.toggle("avall", y > 10);
    const alPeu = peu.getBoundingClientRect().top < vh - 40;
    flotant.classList.toggle("visible", y > hero.offsetHeight * .7 && !alPeu);
    let actiu = -1;
    seccions.forEach((s, i) => { if (s.getBoundingClientRect().top < vh * .4) actiu = i; });
    enllacos.forEach((a, i) => a.classList.toggle("actiu", i === actiu));
    if (!calma) {
      const r = fotosCasa.getBoundingClientRect();
      if (r.bottom > 0 && r.top < vh) fotosCasa.style.setProperty("--pl", (((r.top + r.height / 2) - vh / 2) / vh * -26).toFixed(1) + "px");
    }
  }
  addEventListener("scroll", () => { if (!pendent) { pendent = true; requestAnimationFrame(enScroll); } }, { passive: true });
  enScroll();

  /* ---------- Foto ampliada ---------- */
  const llum = $("#llum");
  if (llum && llum.showModal) {
    const gran = $("img", llum);
    $$("[data-zoom]").forEach(b => b.addEventListener("click", () => {
      const i = $("img", b); gran.src = i.currentSrc || i.src; gran.alt = i.alt; llum.showModal();
    }));
    $(".llum-tanca", llum).addEventListener("click", () => llum.close());
    llum.addEventListener("click", e => { if (e.target === llum) llum.close(); });
  }
})();
