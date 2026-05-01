globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DBB1IwRJ.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from "./worker-entry_BghW32ok.mjs";
import { r as renderScript } from "./script_C4Na73aH.mjs";
import { c as STATIC_SURGERIES, $ as $$Layout, a as $$Header, b as $$Footer } from "./staticData_TQJUP46s.mjs";
const $$Cirurgias = createComponent(async ($$result, $$props, $$slots) => {
  let surgeries = STATIC_SURGERIES;
  try {
    const { getSurgeries } = await import("./appwrite_BveO8zBz.mjs");
    const live = await getSurgeries();
    if (live.length > 0) surgeries = live;
  } catch (_) {
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cirurgias Vasculares — Dra. Mônica Arena", "description": "Procedimentos cirúrgicos vasculares realizados pela Dra. Mônica Arena em Londrina: safenectomia, ablação laser endovenosa, microcirurgia de varizes e cirurgia arterial.", "data-astro-cid-thrfw5nj": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-thrfw5nj": true })} ${maybeRenderHead()}<main data-astro-cid-thrfw5nj> <!-- Page Hero --> <section class="page-hero" data-astro-cid-thrfw5nj> <div class="container" data-astro-cid-thrfw5nj> <div class="breadcrumb" data-astro-cid-thrfw5nj> <a href="/" data-astro-cid-thrfw5nj>Início</a> <span data-astro-cid-thrfw5nj>/</span> <span data-astro-cid-thrfw5nj>Cirurgias</span> </div> <div class="page-hero__grid" data-astro-cid-thrfw5nj> <div class="page-hero__content" data-astro-cid-thrfw5nj> <div class="section-meta" data-astro-cid-thrfw5nj>Procedimentos Cirúrgicos</div> <h1 class="page-hero__title" data-astro-cid-thrfw5nj>
Cirurgias Vasculares<br data-astro-cid-thrfw5nj> <span class="text-gradient" data-astro-cid-thrfw5nj>com Precisão Máxima</span> </h1> <p class="page-hero__desc" data-astro-cid-thrfw5nj>
Com formação em grandes centros nacionais e
<strong data-astro-cid-thrfw5nj>Fellowship no Arizona Heart Institute (EUA)</strong>,
              a Dra. Mônica Arena realiza os procedimentos cirúrgicos mais avançados
              disponíveis — da cirurgia aberta às técnicas endovasculares minimamente invasivas.
</p> <a href="https://wa.me/5543991502223?text=Olá%2C%20gostaria%20de%20uma%20avaliação%20cirúrgica" class="btn-tech" target="_blank" rel="noopener noreferrer" data-astro-cid-thrfw5nj>
Solicitar avaliação cirúrgica
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-thrfw5nj> <path d="M5 12h14m-7-7 7 7-7 7" data-astro-cid-thrfw5nj></path> </svg> </a> </div> <!-- Side credential card --> <div class="hero-credentials glass" data-astro-cid-thrfw5nj> <div class="credential-item" data-astro-cid-thrfw5nj> <div class="cred-icon" aria-hidden="true" data-astro-cid-thrfw5nj> <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-thrfw5nj> <path d="M12 2L2 7l10 5 10-5-10-5z" data-astro-cid-thrfw5nj></path><path d="M2 17l10 5 10-5" data-astro-cid-thrfw5nj></path><path d="M2 12l10 5 10-5" data-astro-cid-thrfw5nj></path> </svg> </div> <div data-astro-cid-thrfw5nj> <strong data-astro-cid-thrfw5nj>Fellowship Internacional</strong> <span data-astro-cid-thrfw5nj>Arizona Heart Institute — Phoenix, EUA</span> </div> </div> <div class="credential-item" data-astro-cid-thrfw5nj> <div class="cred-icon" aria-hidden="true" data-astro-cid-thrfw5nj> <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-thrfw5nj> <circle cx="12" cy="12" r="10" data-astro-cid-thrfw5nj></circle><path d="M12 8v4l3 3" data-astro-cid-thrfw5nj></path> </svg> </div> <div data-astro-cid-thrfw5nj> <strong data-astro-cid-thrfw5nj>+15 anos de prática</strong> <span data-astro-cid-thrfw5nj>Cirurgia Vascular em Londrina/PR</span> </div> </div> <div class="credential-item" data-astro-cid-thrfw5nj> <div class="cred-icon" aria-hidden="true" data-astro-cid-thrfw5nj> <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-thrfw5nj> <path d="M22 11.08V12a10 10 0 11-5.93-9.14" data-astro-cid-thrfw5nj></path><polyline points="22 4 12 14.01 9 11.01" data-astro-cid-thrfw5nj></polyline> </svg> </div> <div data-astro-cid-thrfw5nj> <strong data-astro-cid-thrfw5nj>Residência — Escola Paulista</strong> <span data-astro-cid-thrfw5nj>Cirurgia Vascular (UNIFESP/EPM)</span> </div> </div> <div class="credential-item" data-astro-cid-thrfw5nj> <div class="cred-icon" aria-hidden="true" data-astro-cid-thrfw5nj> <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-thrfw5nj> <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" data-astro-cid-thrfw5nj></polygon> </svg> </div> <div data-astro-cid-thrfw5nj> <strong data-astro-cid-thrfw5nj>5 estrelas Google</strong> <span data-astro-cid-thrfw5nj>47+ avaliações verificadas</span> </div> </div> </div> </div> </div> <div class="page-hero__glow" aria-hidden="true" data-astro-cid-thrfw5nj></div> </section> <!-- Surgeries List --> <section class="surgeries-section" data-astro-cid-thrfw5nj> <div class="container" data-astro-cid-thrfw5nj> <div class="surgeries-list" data-astro-cid-thrfw5nj> ${surgeries.map((s, i) => renderTemplate`<article class="surgery-row"${addAttribute(i, "data-index")} data-astro-cid-thrfw5nj> <div class="surgery-row__number" aria-hidden="true" data-astro-cid-thrfw5nj>${s.number ?? String(i + 1).padStart(2, "0")}</div> <div class="surgery-row__body" data-astro-cid-thrfw5nj> <h2 class="surgery-row__title" data-astro-cid-thrfw5nj>${s.title}</h2> <p class="surgery-row__desc" data-astro-cid-thrfw5nj>${s.description}</p> <div class="surgery-row__pills" data-astro-cid-thrfw5nj> ${s.duration && renderTemplate`<span class="pill" data-astro-cid-thrfw5nj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-thrfw5nj> <circle cx="12" cy="12" r="10" data-astro-cid-thrfw5nj></circle><polyline points="12 6 12 12 16 14" data-astro-cid-thrfw5nj></polyline> </svg>
Duração: ${s.duration} </span>`} ${s.recovery && renderTemplate`<span class="pill" data-astro-cid-thrfw5nj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-thrfw5nj> <path d="M22 11.08V12a10 10 0 11-5.93-9.14" data-astro-cid-thrfw5nj></path><polyline points="22 4 12 14.01 9 11.01" data-astro-cid-thrfw5nj></polyline> </svg>
Recuperação: ${s.recovery} </span>`} ${s.anesthesia && renderTemplate`<span class="pill" data-astro-cid-thrfw5nj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-thrfw5nj> <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" data-astro-cid-thrfw5nj></path> </svg> ${s.anesthesia} </span>`} </div> </div> <div class="surgery-row__bar" aria-hidden="true" data-astro-cid-thrfw5nj></div> </article>`)} </div> <!-- FAQ --> <div class="faq-section" data-astro-cid-thrfw5nj> <h2 class="faq-title" data-astro-cid-thrfw5nj>Perguntas frequentes<br data-astro-cid-thrfw5nj><span class="text-gradient" data-astro-cid-thrfw5nj>sobre cirurgias vasculares</span></h2> <div class="faq-list" data-astro-cid-thrfw5nj> ${[
    {
      q: "As cirurgias vasculares têm risco?",
      a: "Como qualquer procedimento cirúrgico, há riscos. Porém, com avaliação pré-operatória cuidadosa, equipe especializada e tecnologia moderna, os riscos são minimizados. A Dra. Mônica discute todos os aspectos na consulta."
    },
    {
      q: "As cirurgias deixam cicatrizes visíveis?",
      a: "Técnicas como a microcirurgia de varizes e a ablação laser endovenosa deixam cicatrizes mínimas ou imperceptíveis. Cada caso é avaliado individualmente para escolher a abordagem menos invasiva."
    },
    {
      q: "Qual a recuperação após a cirurgia?",
      a: "Depende do procedimento. Técnicas minimamente invasivas permitem retorno às atividades em 3–7 dias. Cirurgias mais extensas podem exigir repouso de até 21 dias com acompanhamento ambulatorial."
    },
    {
      q: "O plano de saúde cobre as cirurgias?",
      a: "A maioria dos planos de saúde cobre procedimentos cirúrgicos vasculares com indicação médica. Nossa equipe pode auxiliar com a documentação necessária para autorização."
    }
  ].map((faq, i) => renderTemplate`<details class="faq-item glass"${addAttribute(i, "data-index")} data-astro-cid-thrfw5nj> <summary class="faq-item__q" data-astro-cid-thrfw5nj> ${faq.q} <svg class="faq-item__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-thrfw5nj> <polyline points="6 9 12 15 18 9" data-astro-cid-thrfw5nj></polyline> </svg> </summary> <p class="faq-item__a" data-astro-cid-thrfw5nj>${faq.a}</p> </details>`)} </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-thrfw5nj": true })} ` })}  ${renderScript($$result, "D:/_app/future-spazio-v2/src/pages/cirurgias.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/_app/future-spazio-v2/src/pages/cirurgias.astro", void 0);
const $$file = "D:/_app/future-spazio-v2/src/pages/cirurgias.astro";
const $$url = "/cirurgias";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Cirurgias,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
