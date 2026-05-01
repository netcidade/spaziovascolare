globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DBB1IwRJ.mjs";
import { g as addAttribute, k as renderHead, n as renderSlot, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_BghW32ok.mjs";
import { r as renderScript } from "./script_C4Na73aH.mjs";
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Dra. Mônica Arena — Cirurgia Vascular de Alta Precisão",
    description = "Excelência em saúde vascular com tecnologia laser inovadora. Dra. Mônica Arena, Londrina/PR.",
    image = "https://spaziovascolare.com.br/wp-content/uploads/2023/02/foto-dra-removed-bg-1.png"
  } = Astro2.props;
  return renderTemplate`<html lang="pt-BR"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="theme-color" content="#050505"><!-- SEO --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Google Fonts: Space Grotesk (Tech) + Urbanist (Luxo/Moderno) --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Urbanist:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="noise-bg"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/_app/future-spazio-v2/src/layouts/Layout.astro", void 0);
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header glass" id="header" data-astro-cid-3ef6ksr2> <div class="container header__inner" data-astro-cid-3ef6ksr2> <a href="/" class="logo" data-astro-cid-3ef6ksr2> <img src="/img/logo-i-200px.jpg" alt="Logo" class="logo__img" data-astro-cid-3ef6ksr2> <div class="logo__brand" data-astro-cid-3ef6ksr2> <span class="logo__text" data-astro-cid-3ef6ksr2>SPAZIO</span> <span class="logo__text" data-astro-cid-3ef6ksr2>VASCOLARE</span> </div> </a> <nav class="nav" aria-label="Navegação principal" data-astro-cid-3ef6ksr2> <ul class="nav__list" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2><a href="/" class="nav__link" data-astro-cid-3ef6ksr2>Início</a></li> <li data-astro-cid-3ef6ksr2><a href="/#sobre" class="nav__link" data-astro-cid-3ef6ksr2>Sobre</a></li> <li data-astro-cid-3ef6ksr2><a href="/#tratamentos" class="nav__link" data-astro-cid-3ef6ksr2>Tratamentos</a></li> <li data-astro-cid-3ef6ksr2><a href="/cirurgias/" class="nav__link" data-astro-cid-3ef6ksr2>Cirurgias</a></li> <li data-astro-cid-3ef6ksr2><a href="/blog/" class="nav__link" data-astro-cid-3ef6ksr2>Blog</a></li> </ul> </nav> <div class="header__actions" data-astro-cid-3ef6ksr2> <a href="https://wa.me/5543991502223" class="btn-tech" data-astro-cid-3ef6ksr2>
Agendar
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3ef6ksr2> <path d="M5 12h14m-7-7 7 7-7 7" data-astro-cid-3ef6ksr2></path> </svg> </a> </div> </div> </header>  ${renderScript($$result, "D:/_app/future-spazio-v2/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/_app/future-spazio-v2/src/components/Header.astro", void 0);
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="footer__main" data-astro-cid-sz7xmlte> <div class="container footer__grid" data-astro-cid-sz7xmlte> <div class="footer__brand" data-astro-cid-sz7xmlte> <img src="/img/logo-i-200px.jpg" alt="Logo Spazio Vascolare" class="footer__logo" data-astro-cid-sz7xmlte> </div> <div class="footer__info" data-astro-cid-sz7xmlte> <div class="footer__item" data-astro-cid-sz7xmlte> <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="footer__icon" data-astro-cid-sz7xmlte> <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" data-astro-cid-sz7xmlte></path> </svg> <div class="footer__text" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>Av. Rio de Janeiro, 1500 - 8º Andar</span> <span data-astro-cid-sz7xmlte>Sala 803. Centro, Londrina</span> <div class="footer__contact" data-astro-cid-sz7xmlte> <strong data-astro-cid-sz7xmlte>Fone: (43) 3377 1900</strong> </div> </div> </div> </div> <div class="footer__social" data-astro-cid-sz7xmlte> <a href="#" class="social-item" data-astro-cid-sz7xmlte> <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7h-2.54v-2.9h2.54V10.1c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z" data-astro-cid-sz7xmlte></path> </svg> <span data-astro-cid-sz7xmlte>Facebook</span> </a> <a href="#" class="social-item" data-astro-cid-sz7xmlte> <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8A3.6 3.6 0 007.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6A3.6 3.6 0 0016.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z" data-astro-cid-sz7xmlte></path> </svg> <span data-astro-cid-sz7xmlte>Instagram</span> </a> </div> </div> </div> <div class="footer__bottom" data-astro-cid-sz7xmlte> <div class="container footer__legal" data-astro-cid-sz7xmlte> <a href="#" class="legal-link" data-astro-cid-sz7xmlte>Políticas de Privacidade</a> <span class="copyright" data-astro-cid-sz7xmlte>Copyright © Dra. Mônica Arena</span> </div> </div> </footer>`;
}, "D:/_app/future-spazio-v2/src/components/Footer.astro", void 0);
const STATIC_TREATMENTS = [
  {
    $id: "1",
    order: 1,
    icon: "01",
    title: "Varizes",
    subtitle: "Tratamento cirúrgico e minimamente invasivo",
    description: "Diagnóstico preciso e tratamento cirúrgico ou minimamente invasivo das varizes dos membros inferiores, combinando funcionalidade e estética com tecnologia de ponta.",
    duration: "2–3 horas",
    recovery: "7–14 dias",
    active: true,
    highlight: true
  },
  {
    $id: "2",
    order: 2,
    icon: "02",
    title: "Laser Avançado",
    subtitle: "Tecnologia transdérmica",
    description: "Técnica não cirúrgica que utiliza laser de alta precisão para remover vasinhos e pequenas varizes com mínimo desconforto e rápida recuperação.",
    duration: "30–60 min",
    recovery: "1–3 dias",
    active: true,
    highlight: false
  },
  {
    $id: "3",
    order: 3,
    icon: "03",
    title: "Escleroterapia",
    subtitle: "Eliminação de vasinhos",
    description: "Procedimento minimamente invasivo realizado em consultório para eliminar vasinhos e pequenas varizes com excelentes resultados estéticos comprovados.",
    duration: "30–45 min",
    recovery: "2–5 dias",
    active: true,
    highlight: false
  },
  {
    $id: "4",
    order: 4,
    icon: "04",
    title: "Ecografia Vascular",
    subtitle: "Diagnóstico por imagem",
    description: "Exame complementar realizado pela própria especialista, com diagnóstico preciso e personalizado na mesma consulta, sem necessidade de retorno.",
    duration: "Na consulta",
    recovery: "Imediato",
    active: true,
    highlight: false
  },
  {
    $id: "5",
    order: 5,
    icon: "05",
    title: "Trombose Venosa",
    subtitle: "Diagnóstico e prevenção",
    description: "Avaliação, diagnóstico e tratamento da trombose venosa profunda (TVP) e superficial, prevenindo complicações graves como a embolia pulmonar.",
    duration: "Variável",
    recovery: "Monitorado",
    active: true,
    highlight: false
  },
  {
    $id: "6",
    order: 6,
    icon: "06",
    title: "Insuficiência Venosa",
    subtitle: "Tratamento completo",
    description: "Avaliação e tratamento da insuficiência venosa crônica, prevenindo úlceras, inchaços e desconforto nas pernas com abordagem individualizada.",
    duration: "Variável",
    recovery: "Contínuo",
    active: true,
    highlight: false
  }
];
const STATIC_SURGERIES = [
  {
    $id: "1",
    order: 1,
    number: "01",
    title: "Safenectomia",
    description: "Remoção cirúrgica da veia safena doente, indicada para casos graves de insuficiência venosa com varizes volumosas. Procedimento clássico com alta taxa de sucesso e resultados duradouros.",
    duration: "2–3 horas",
    recovery: "7–14 dias",
    anesthesia: "Raquidiana ou geral",
    active: true
  },
  {
    $id: "2",
    order: 2,
    number: "02",
    title: "Ablação a Laser Endovenosa",
    description: "Técnica minimamente invasiva que utiliza energia laser para obliterar veias insuficientes por dentro, substituindo a safenectomia convencional com menor trauma e recuperação mais rápida.",
    duration: "1–2 horas",
    recovery: "3–7 dias",
    anesthesia: "Local com sedação",
    active: true
  },
  {
    $id: "3",
    order: 3,
    number: "03",
    title: "Microcirurgia de Varizes",
    description: "Remoção de varizes por microincisões, sem necessidade de sutura. Excelentes resultados estéticos e funcionais com mínimo trauma cirúrgico e cicatriz imperceptível.",
    duration: "1–3 horas",
    recovery: "5–10 dias",
    anesthesia: "Local ou raquidiana",
    active: true
  },
  {
    $id: "4",
    order: 4,
    number: "04",
    title: "Cirurgia Arterial",
    description: "Procedimentos vasculares para tratamento de doenças arteriais como aneurismas, estenoses e isquemia de membros, com suporte de imagem vascular intraoperatória.",
    duration: "Variável",
    recovery: "10–21 dias",
    anesthesia: "Geral ou raquidiana",
    active: true
  }
];
const STATIC_POSTS = [
  {
    $id: "p1",
    slug: "como-se-livrar-das-varizes",
    title: "Como se livrar das varizes definitivamente?",
    excerpt: "O primeiro passo para descobrir qual o melhor tratamento para o seu caso é procurar um médico angiologista e cirurgião vascular especializado.",
    content: "",
    category: "Tratamentos",
    published_at: "2024-11-10",
    published: true,
    cover_url: "https://spaziovascolare.com.br/wp-content/uploads/2023/02/fundo-1388026885-1024x1024.jpg"
  },
  {
    $id: "p2",
    slug: "sinais-da-trombose-venosa",
    title: "Como identificar os sinais da trombose venosa?",
    excerpt: "A trombose venosa profunda (TVP) ocorre quando um coágulo se forma em uma veia profunda impedindo a circulação normal do sangue.",
    content: "",
    category: "Saúde Vascular",
    published_at: "2024-10-20",
    published: true,
    cover_url: "https://spaziovascolare.com.br/wp-content/uploads/2023/02/fundo-1388026885-1024x1024.jpg"
  },
  {
    $id: "p3",
    slug: "tratamento-de-vasinhos-a-laser",
    title: "Como é feito o tratamento de vasinhos a laser?",
    excerpt: "A aplicação de laser para eliminar vasinhos é uma técnica não cirúrgica que tem sido cada vez mais usada para remover marcas indesejadas na pele.",
    content: "",
    category: "Laser",
    published_at: "2024-09-15",
    published: true,
    cover_url: "https://spaziovascolare.com.br/wp-content/uploads/2023/02/fundo-1388026885-1024x1024.jpg"
  }
];
export {
  $$Layout as $,
  STATIC_POSTS as S,
  $$Header as a,
  $$Footer as b,
  STATIC_SURGERIES as c,
  STATIC_TREATMENTS as d
};
