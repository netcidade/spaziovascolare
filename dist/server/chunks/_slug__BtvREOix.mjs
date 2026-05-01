globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DBB1IwRJ.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, u as unescapeHTML } from "./worker-entry_BghW32ok.mjs";
import { S as STATIC_POSTS, $ as $$Layout, a as $$Header, b as $$Footer } from "./staticData_TQJUP46s.mjs";
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let post = null;
  let relatedPosts = [];
  try {
    const { getPost, getPosts } = await import("./appwrite_BveO8zBz.mjs");
    post = await getPost(slug);
    const all = await getPosts(10);
    relatedPosts = all.filter((p) => p.slug !== slug).slice(0, 3);
  } catch (_) {
    post = STATIC_POSTS.find((p) => p.slug === slug) ?? null;
    relatedPosts = STATIC_POSTS.filter((p) => p.slug !== slug).slice(0, 3);
  }
  if (!post) {
    return Astro2.redirect("/blog", 302);
  }
  const formattedDate = post.published_at ? new Date(post.published_at).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }) : "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.title} — Dra. Mônica Arena`, "description": post.excerpt ?? "", "image": post.cover_url ?? void 0, "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-4sn4zg3r": true })} ${maybeRenderHead()}<main data-astro-cid-4sn4zg3r> <!-- Article Hero --> <section class="article-hero" data-astro-cid-4sn4zg3r> <div class="container" data-astro-cid-4sn4zg3r> <div class="breadcrumb" data-astro-cid-4sn4zg3r> <a href="/" data-astro-cid-4sn4zg3r>Início</a> <span data-astro-cid-4sn4zg3r>/</span> <a href="/blog" data-astro-cid-4sn4zg3r>Blog</a> <span data-astro-cid-4sn4zg3r>/</span> <span data-astro-cid-4sn4zg3r>${post.title}</span> </div> <div class="article-meta" data-astro-cid-4sn4zg3r> ${post.category && renderTemplate`<span class="article-cat" data-astro-cid-4sn4zg3r>${post.category}</span>`} ${formattedDate && renderTemplate`<time class="article-date"${addAttribute(post.published_at ?? "", "datetime")} data-astro-cid-4sn4zg3r>${formattedDate}</time>`} </div> <h1 class="article-title" data-astro-cid-4sn4zg3r>${post.title}</h1> <p class="article-excerpt" data-astro-cid-4sn4zg3r>${post.excerpt}</p> <div class="article-author" data-astro-cid-4sn4zg3r> <img src="/img/logo-i-200px.jpg" alt="Dra. Mônica Arena" width="42" height="42" class="author-avatar" data-astro-cid-4sn4zg3r> <div data-astro-cid-4sn4zg3r> <strong data-astro-cid-4sn4zg3r>Dra. Mônica Arena</strong> <span data-astro-cid-4sn4zg3r>Cirurgiã Vascular · Londrina/PR</span> </div> </div> </div> </section> <!-- Cover image --> ${post.cover_url && renderTemplate`<div class="article-cover-wrap container" data-astro-cid-4sn4zg3r> <img${addAttribute(post.cover_url, "src")}${addAttribute(post.title, "alt")} class="article-cover" width="1200" height="630" loading="eager" fetchpriority="high" data-astro-cid-4sn4zg3r> </div>`} <!-- Article content + sidebar --> <div class="article-layout container" data-astro-cid-4sn4zg3r> <!-- Main content --> <article class="article-content glass" data-astro-cid-4sn4zg3r> ${post.content ? renderTemplate`<div class="prose" data-astro-cid-4sn4zg3r>${unescapeHTML(post.content)}</div>` : renderTemplate`<div class="prose" data-astro-cid-4sn4zg3r> <p data-astro-cid-4sn4zg3r>${post.excerpt}</p> <div class="content-placeholder" data-astro-cid-4sn4zg3r> <p data-astro-cid-4sn4zg3r>
Este artigo será publicado em breve. Para saber mais sobre ${post.title.toLowerCase()},
                  entre em contato com a Dra. Mônica Arena diretamente pelo WhatsApp.
</p> <a${addAttribute(`https://wa.me/5543991502223?text=Olá%2C%20li%20sobre%20${encodeURIComponent(post.title)}%20e%20gostaria%20de%20saber%20mais`, "href")} class="btn-tech" target="_blank" rel="noopener noreferrer" data-astro-cid-4sn4zg3r>
Falar com a especialista
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-4sn4zg3r> <path d="M5 12h14m-7-7 7 7-7 7" data-astro-cid-4sn4zg3r></path> </svg> </a> </div> </div>`} </article> <!-- Sidebar --> <aside class="article-sidebar" data-astro-cid-4sn4zg3r> <!-- CTA Card --> <div class="sidebar-cta glass" data-astro-cid-4sn4zg3r> <div class="sidebar-cta__icon" aria-hidden="true" data-astro-cid-4sn4zg3r> <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-4sn4zg3r> <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" data-astro-cid-4sn4zg3r></path> </svg> </div> <h3 data-astro-cid-4sn4zg3r>Agende sua consulta</h3> <p data-astro-cid-4sn4zg3r>Atendimento personalizado com a Dra. Mônica Arena em Londrina.</p> <a href="https://wa.me/5543991502223" class="btn-tech" target="_blank" rel="noopener noreferrer" data-astro-cid-4sn4zg3r>
Agendar pelo WhatsApp
</a> <a href="tel:+554333771900" class="sidebar-phone" data-astro-cid-4sn4zg3r>(43) 3377-1900</a> </div> <!-- Share --> <div class="sidebar-share glass" data-astro-cid-4sn4zg3r> <h4 data-astro-cid-4sn4zg3r>Compartilhar</h4> <div class="share-buttons" data-astro-cid-4sn4zg3r> <a${addAttribute(`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " — " + Astro2.url.href)}`, "href")} target="_blank" rel="noopener noreferrer" class="share-btn share-btn--whatsapp" aria-label="Compartilhar no WhatsApp" data-astro-cid-4sn4zg3r> <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-4sn4zg3r> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" data-astro-cid-4sn4zg3r></path> </svg>
WhatsApp
</a> </div> </div> </aside> </div> <!-- Related posts --> ${relatedPosts.length > 0 && renderTemplate`<section class="related-posts container" data-astro-cid-4sn4zg3r> <h2 class="related-title" data-astro-cid-4sn4zg3r>Outros artigos</h2> <div class="related-grid" data-astro-cid-4sn4zg3r> ${relatedPosts.map((p) => renderTemplate`<a${addAttribute(`/blog/${p.slug}`, "href")} class="related-card glass" data-astro-cid-4sn4zg3r> ${p.category && renderTemplate`<span class="related-cat" data-astro-cid-4sn4zg3r>${p.category}</span>`} <h3 data-astro-cid-4sn4zg3r>${p.title}</h3> <p data-astro-cid-4sn4zg3r>${p.excerpt}</p> <span class="read-more" data-astro-cid-4sn4zg3r>
Ler
<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-4sn4zg3r> <path d="M5 12h14m-7-7 7 7-7 7" data-astro-cid-4sn4zg3r></path> </svg> </span> </a>`)} </div> </section>`} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-4sn4zg3r": true })} ` })}`;
}, "D:/_app/future-spazio-v2/src/pages/blog/[slug].astro", void 0);
const $$file = "D:/_app/future-spazio-v2/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
