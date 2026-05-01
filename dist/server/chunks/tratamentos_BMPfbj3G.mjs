globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DBB1IwRJ.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from "./worker-entry_BghW32ok.mjs";
import { r as renderScript } from "./script_C4Na73aH.mjs";
import { d as STATIC_TREATMENTS, $ as $$Layout, a as $$Header, b as $$Footer } from "./staticData_TQJUP46s.mjs";
const $$Tratamentos = createComponent(async ($$result, $$props, $$slots) => {
  let treatments = STATIC_TREATMENTS;
  try {
    const { getTreatments } = await import("./appwrite_BveO8zBz.mjs");
    const live = await getTreatments();
    if (live.length > 0) treatments = live;
  } catch (_) {
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tratamentos Vasculares — Dra. Mônica Arena", "description": "Conheça todos os tratamentos vasculares oferecidos pela Dra. Mônica Arena em Londrina: varizes, laser, escleroterapia, trombose e muito mais.", "data-astro-cid-uokehd3o": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-uokehd3o": true })} ${maybeRenderHead()}<main data-astro-cid-uokehd3o> <!-- Page Hero --> <section class="page-hero" data-astro-cid-uokehd3o> <div class="container" data-astro-cid-uokehd3o> <div class="breadcrumb" data-astro-cid-uokehd3o> <a href="/" data-astro-cid-uokehd3o>Início</a> <span data-astro-cid-uokehd3o>/</span> <span data-astro-cid-uokehd3o>Tratamentos</span> </div> <div class="page-hero__content" data-astro-cid-uokehd3o> <div class="section-meta" data-astro-cid-uokehd3o>Especialidades Clínicas</div> <h1 class="page-hero__title" data-astro-cid-uokehd3o>
Tratamentos com<br data-astro-cid-uokehd3o> <span class="text-gradient" data-astro-cid-uokehd3o>Tecnologia Avançada</span> </h1> <p class="page-hero__desc" data-astro-cid-uokehd3o>
Do diagnóstico ao tratamento, a Dra. Mônica Arena oferece soluções
            vasculares completas — com segurança, inovação e cuidado personalizado.
            Fellowship internacional (Arizona Heart Institute — EUA).
</p> </div> </div> <div class="page-hero__glow" aria-hidden="true" data-astro-cid-uokehd3o></div> </section> <!-- Treatments Grid --> <section class="treatments-full" data-astro-cid-uokehd3o> <div class="container" data-astro-cid-uokehd3o> <div class="treatments-grid" data-astro-cid-uokehd3o> ${treatments.map((t, i) => renderTemplate`<article${addAttribute(`treatment-card ${t.highlight ? "highlight" : ""}`, "class")}${addAttribute(i, "data-index")} data-astro-cid-uokehd3o> <div class="treatment-card__flare" aria-hidden="true" data-astro-cid-uokehd3o></div> <div class="treatment-card__top" data-astro-cid-uokehd3o> <span class="treatment-card__num" data-astro-cid-uokehd3o>${t.icon ?? String(i + 1).padStart(2, "0")}</span> ${t.highlight && renderTemplate`<span class="tag-highlight" data-astro-cid-uokehd3o>Destaque</span>`} </div> <h2 class="treatment-card__title" data-astro-cid-uokehd3o>${t.title}</h2> <p class="treatment-card__subtitle" data-astro-cid-uokehd3o>${t.subtitle}</p> <p class="treatment-card__desc" data-astro-cid-uokehd3o>${t.description}</p> <div class="treatment-card__meta" data-astro-cid-uokehd3o> ${t.duration && renderTemplate`<div class="meta-item" data-astro-cid-uokehd3o> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-uokehd3o> <circle cx="12" cy="12" r="10" data-astro-cid-uokehd3o></circle><polyline points="12 6 12 12 16 14" data-astro-cid-uokehd3o></polyline> </svg> ${t.duration} </div>`} ${t.recovery && renderTemplate`<div class="meta-item" data-astro-cid-uokehd3o> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-uokehd3o> <path d="M22 11.08V12a10 10 0 11-5.93-9.14" data-astro-cid-uokehd3o></path><polyline points="22 4 12 14.01 9 11.01" data-astro-cid-uokehd3o></polyline> </svg> ${t.recovery} </div>`} </div> </article>`)} </div> <!-- CTA section --> <div class="treatments-cta glass" data-astro-cid-uokehd3o> <div class="treatments-cta__text" data-astro-cid-uokehd3o> <h3 data-astro-cid-uokehd3o>Não sabe qual tratamento é ideal para você?</h3> <p data-astro-cid-uokehd3o>A Dra. Mônica realiza avaliação completa com ecografia vascular na mesma consulta.</p> </div> <div class="treatments-cta__actions" data-astro-cid-uokehd3o> <a href="https://wa.me/5543991502223?text=Olá%2C%20gostaria%20de%20saber%20qual%20tratamento%20é%20indicado" class="btn-tech" target="_blank" rel="noopener noreferrer" data-astro-cid-uokehd3o>
Falar com especialista
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-uokehd3o> <path d="M5 12h14m-7-7 7 7-7 7" data-astro-cid-uokehd3o></path> </svg> </a> <a href="tel:+554333771900" class="btn-secondary" data-astro-cid-uokehd3o>(43) 3377-1900</a> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-uokehd3o": true })} ` })}  ${renderScript($$result, "D:/_app/future-spazio-v2/src/pages/tratamentos.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/_app/future-spazio-v2/src/pages/tratamentos.astro", void 0);
const $$file = "D:/_app/future-spazio-v2/src/pages/tratamentos.astro";
const $$url = "/tratamentos";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Tratamentos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
