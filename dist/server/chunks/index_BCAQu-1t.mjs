globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_DBB1IwRJ.mjs";
import { k as renderHead, r as renderTemplate } from "./worker-entry_BghW32ok.mjs";
import { r as renderScript } from "./script_C4Na73aH.mjs";
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="pt-BR" data-astro-cid-u2h3djql> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Admin — Spazio Vascolare</title><meta name="robots" content="noindex, nofollow"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Urbanist:wght@700;800;900&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-u2h3djql> <div class="login-card" role="main" data-astro-cid-u2h3djql> <div class="login-logo" data-astro-cid-u2h3djql> <img src="/img/logo-i-200px.jpg" alt="Spazio Vascolare" data-astro-cid-u2h3djql> <div class="login-logo-text" data-astro-cid-u2h3djql> <span class="login-logo-name" data-astro-cid-u2h3djql>SPAZIO VASCOLARE</span> <span class="login-logo-sub" data-astro-cid-u2h3djql>Painel Administrativo</span> </div> </div> <h1 data-astro-cid-u2h3djql>Entrar</h1> <p class="login-subtitle" data-astro-cid-u2h3djql>Acesse o painel de gerenciamento do site.</p> <form id="loginForm" novalidate data-astro-cid-u2h3djql> <div class="form-group" data-astro-cid-u2h3djql> <label for="email" data-astro-cid-u2h3djql>E-mail</label> <input type="email" id="email" name="email" placeholder="seu@email.com" autocomplete="email" required data-astro-cid-u2h3djql> </div> <div class="form-group" data-astro-cid-u2h3djql> <label for="password" data-astro-cid-u2h3djql>Senha</label> <input type="password" id="password" name="password" placeholder="••••••••" autocomplete="current-password" required data-astro-cid-u2h3djql> </div> <button type="submit" class="btn-submit" id="submitBtn" data-astro-cid-u2h3djql> <span id="btnText" data-astro-cid-u2h3djql>Entrar no painel</span> <span class="spinner" id="spinner" data-astro-cid-u2h3djql></span> </button> <p class="error-msg" id="errorMsg" role="alert" data-astro-cid-u2h3djql></p> </form> <p class="login-footer" data-astro-cid-u2h3djql>Spazio Vascolare · Área restrita</p> </div> ${renderScript($$result, "D:/_app/future-spazio-v2/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/_app/future-spazio-v2/src/pages/admin/index.astro", void 0);
const $$file = "D:/_app/future-spazio-v2/src/pages/admin/index.astro";
const $$url = "/admin";
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
