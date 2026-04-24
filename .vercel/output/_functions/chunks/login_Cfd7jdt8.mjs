import { c as createComponent } from './_astro_assets_BiFNf1T6.mjs';
import 'piccolore';
import { T as renderTemplate, B as maybeRenderHead } from './sequence_DNlBr1nX.mjs';
import { r as renderComponent } from './entrypoint_C8DEOGAR.mjs';
import { $ as $$Layout, r as renderScript, a as $$Navigation } from './Layout_CYHLckqA.mjs';
import { g as getUserFromCookies } from './auth_DPx11g5j.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Login;
  const user = getUserFromCookies(Astro2.cookies);
  if (user) {
    const redirect = Astro2.url.searchParams.get("redirect") || "/";
    return Astro2.redirect(redirect);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Acceder - Palapa El Sabino", "data-astro-cid-sgpqyurt": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-sgpqyurt": true })} ${maybeRenderHead()}<section class="min-h-screen flex items-center justify-center p-8 bg-cream" data-astro-cid-sgpqyurt> <div class="w-full max-w-md bg-white p-12 border border-sage-light md:p-8" data-astro-cid-sgpqyurt> <div class="text-center mb-12" data-astro-cid-sgpqyurt> <h1 class="text-4xl md:text-3xl font-extrabold tracking-tight text-forest-dark mb-2" data-astro-cid-sgpqyurt>Bienvenido</h1> <p class="text-base text-warm-gray font-normal" data-astro-cid-sgpqyurt>Accede a tu cuenta</p> </div> <!-- Error Message --> <div id="error-message" class="hidden" data-astro-cid-sgpqyurt></div> <form id="loginForm" class="flex flex-col gap-6" data-astro-cid-sgpqyurt> <div class="flex flex-col gap-2" data-astro-cid-sgpqyurt> <label for="email" class="text-sm font-medium text-forest-dark tracking-wide" data-astro-cid-sgpqyurt>Email</label> <input type="email" id="email" name="email" required class="w-full py-3.5 text-base border-0 border-b border-sage-light bg-transparent transition-all duration-200 outline-none focus:border-sage placeholder:text-warm-gray/40" placeholder="tu@email.com" data-astro-cid-sgpqyurt> </div> <div class="flex flex-col gap-2" data-astro-cid-sgpqyurt> <label for="password" class="text-sm font-medium text-forest-dark tracking-wide" data-astro-cid-sgpqyurt>Contraseña</label> <input type="password" id="password" name="password" required class="w-full py-3.5 text-base border-0 border-b border-sage-light bg-transparent transition-all duration-200 outline-none focus:border-sage placeholder:text-warm-gray/40" placeholder="••••••••" data-astro-cid-sgpqyurt> </div> <button type="submit" id="submit-button" class="mt-8 px-4 py-4 bg-sage text-white text-base font-medium border-none rounded-full cursor-pointer transition-all duration-200 hover:bg-moss hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-sgpqyurt>
Iniciar sesión
</button> </form> <div class="mt-12 text-center flex items-center justify-center gap-4" data-astro-cid-sgpqyurt> <a href="/recuperar" class="text-sm text-warm-gray no-underline transition-colors duration-200 hover:text-sage" data-astro-cid-sgpqyurt>¿Olvidaste tu contraseña?</a> <span class="text-sage-light text-sm" data-astro-cid-sgpqyurt>·</span> <a href="/registro" class="text-sm text-warm-gray no-underline transition-colors duration-200 hover:text-sage" data-astro-cid-sgpqyurt>Crear cuenta</a> </div> </div> </section> ` })}  ${renderScript($$result, "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/pages/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/pages/login.astro", void 0);

const $$file = "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
