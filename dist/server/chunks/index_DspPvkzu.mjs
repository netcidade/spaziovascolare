globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DBB1IwRJ.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from "./worker-entry_BghW32ok.mjs";
import { r as renderScript } from "./script_C4Na73aH.mjs";
import { S as STATIC_POSTS, $ as $$Layout, a as $$Header, b as $$Footer } from "./staticData_TQJUP46s.mjs";
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let posts = STATIC_POSTS;
  try {
    const { getPosts } = await import("./appwrite_BveO8zBz.mjs");
    const live = await getPosts(30);
    if (live.length > 0) posts = live;
  } catch (_) {
  }
  const categories = ["Todos", ...Array.from(new Set(posts.map((p) => p.category).filter(Boolean)))];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog — Dra. Mônica Arena | Saúde Vascular", "description": "Artigos e informações sobre saúde vascular, tratamentos, varizes, trombose e muito mais da especialista Dra. Mônica Arena.", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} ${maybeRenderHead()}<main data-astro-cid-5tznm7mj> <!-- Hero --> <section class="blog-hero" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <div class="breadcrumb" data-astro-cid-5tznm7mj> <a href="/" data-astro-cid-5tznm7mj>Início</a> <span data-astro-cid-5tznm7mj>/</span> <span data-astro-cid-5tznm7mj>Blog</span> </div> <div class="section-meta" data-astro-cid-5tznm7mj>Artigos & Informações</div> <h1 class="blog-hero__title" data-astro-cid-5tznm7mj>
Blog de<br data-astro-cid-5tznm7mj> <span class="text-gradient" data-astro-cid-5tznm7mj>Saúde Vascular</span> </h1> <p class="blog-hero__desc" data-astro-cid-5tznm7mj>
Conteúdo educativo sobre saúde vascular, dicas de prevenção,
          tratamentos e novidades da especialidade. Escrito pela Dra. Mônica Arena.
</p> </div> <div class="hero-glow" aria-hidden="true" data-astro-cid-5tznm7mj></div> </section> <!-- Posts --> <section class="blog-section" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <!-- Category filter --> <div class="category-filter" role="navigation" aria-label="Filtrar por categoria" data-astro-cid-5tznm7mj> ${categories.map((cat) => renderTemplate`<button${addAttribute(`cat-btn ${cat === "Todos" ? "active" : ""}`, "class")}${addAttribute(cat, "data-category")} type="button" data-astro-cid-5tznm7mj> ${cat} </button>`)} </div> ${posts.length === 0 ? renderTemplate`<div class="empty-state glass" data-astro-cid-5tznm7mj> <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true" data-astro-cid-5tznm7mj> <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" data-astro-cid-5tznm7mj></path> <polyline points="14 2 14 8 20 8" data-astro-cid-5tznm7mj></polyline><line x1="16" y1="13" x2="8" y2="13" data-astro-cid-5tznm7mj></line><line x1="16" y1="17" x2="8" y2="17" data-astro-cid-5tznm7mj></line> </svg> <p data-astro-cid-5tznm7mj>Nenhum post publicado ainda.</p> </div>` : renderTemplate`<div class="posts-grid" data-astro-cid-5tznm7mj> ${posts.map((post, i) => renderTemplate`<article${addAttribute(`post-card ${i === 0 ? "featured" : ""}`, "class")}${addAttribute(post.category ?? "Geral", "data-category")} data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.slug}`, "href")} class="post-card__link"${addAttribute(`Ler: ${post.title}`, "aria-label")} data-astro-cid-5tznm7mj> <div class="post-card__img-wrap" data-astro-cid-5tznm7mj> <img${addAttribute(post.cover_url ?? "/img/fundo-1388026885-1024x1024.jpg", "src")}${addAttribute(post.title, "alt")} class="post-card__img"${addAttribute(i < 3 ? "eager" : "lazy", "loading")} width="600" height="340" data-astro-cid-5tznm7mj> <div class="post-card__img-overlay" aria-hidden="true" data-astro-cid-5tznm7mj></div> ${post.category && renderTemplate`<span class="post-card__category" data-astro-cid-5tznm7mj>${post.category}</span>`} </div> <div class="post-card__body" data-astro-cid-5tznm7mj> <time class="post-card__date"${addAttribute(post.published_at ?? "", "datetime")} data-astro-cid-5tznm7mj> ${post.published_at ? new Date(post.published_at).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }) : ""} </time> <h2 class="post-card__title" data-astro-cid-5tznm7mj>${post.title}</h2> <p class="post-card__excerpt" data-astro-cid-5tznm7mj>${post.excerpt}</p> <span class="post-card__read-more" data-astro-cid-5tznm7mj>
Ler artigo
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-5tznm7mj> <path d="M5 12h14m-7-7 7 7-7 7" data-astro-cid-5tznm7mj></path> </svg> </span> </div> </a> </article>`)} </div>`} </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} ` })}  ${renderScript($$result, "D:/_app/future-spazio-v2/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/_app/future-spazio-v2/src/pages/blog/index.astro", void 0);
const $$file = "D:/_app/future-spazio-v2/src/pages/blog/index.astro";
const $$url = "/blog";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
