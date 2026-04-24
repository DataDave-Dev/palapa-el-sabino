import { c as createComponent } from './_astro_assets_BiFNf1T6.mjs';
import 'piccolore';
import { T as renderTemplate, B as maybeRenderHead } from './sequence_DNlBr1nX.mjs';
import { r as renderComponent } from './entrypoint_C8DEOGAR.mjs';
import { $ as $$Layout, r as renderScript, a as $$Navigation } from './Layout_CYHLckqA.mjs';
import { g as getUserFromCookies } from './auth_DPx11g5j.mjs';

const $$Recuperar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Recuperar;
  const user = getUserFromCookies(Astro2.cookies);
  if (user) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Recuperar contraseña - Palapa El Sabino", "data-astro-cid-qkxl3yiv": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-qkxl3yiv": true })} ${maybeRenderHead()}<section class="min-h-screen flex items-center justify-center p-8 bg-cream" data-astro-cid-qkxl3yiv> <div class="w-full max-w-md bg-white p-12 border border-sage-light md:p-8" data-astro-cid-qkxl3yiv> <div class="text-center mb-12" data-astro-cid-qkxl3yiv> <h1 class="text-4xl md:text-3xl font-extrabold tracking-tight text-forest-dark mb-2" data-astro-cid-qkxl3yiv>¿Olvidaste tu contraseña?</h1> <p class="text-base text-warm-gray font-normal" data-astro-cid-qkxl3yiv>Te enviaremos instrucciones para restablecerla</p> </div> <!-- Success Message (hidden initially) --> <div id="success-message" class="hidden text-center p-8 bg-green-50 border border-green-300 mb-8" data-astro-cid-qkxl3yiv> <h2 class="text-xl font-semibold text-green-800 mb-2" data-astro-cid-qkxl3yiv>Correo enviado</h2> <p class="text-sm text-green-600 mb-6" data-astro-cid-qkxl3yiv>
Revisa tu bandeja de entrada. Si tienes una cuenta con nosotros,
          recibirás un enlace para restablecer tu contraseña.
</p> <a href="/login" class="inline-block text-sm text-forest-dark font-medium no-underline transition-opacity duration-200 hover:opacity-70" data-astro-cid-qkxl3yiv>Volver a iniciar sesión</a> </div> <!-- Error Message --> <div id="error-message" class="hidden" data-astro-cid-qkxl3yiv></div> <!-- Form --> <form id="resetForm" class="flex flex-col gap-6" data-astro-cid-qkxl3yiv> <div class="flex flex-col gap-2" data-astro-cid-qkxl3yiv> <label for="email" class="text-sm font-medium text-forest-dark tracking-wide" data-astro-cid-qkxl3yiv>Email</label> <input type="email" id="email" name="email" required class="w-full py-3.5 text-base border-0 border-b border-sage-light bg-transparent transition-all duration-200 outline-none focus:border-sage placeholder:text-sage-light" placeholder="tu@email.com" data-astro-cid-qkxl3yiv> </div> <button type="submit" id="submit-button" class="mt-8 px-4 py-4 bg-sage text-white text-base font-medium border-none rounded-full cursor-pointer transition-all duration-200 hover:bg-moss hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-qkxl3yiv>
Enviar instrucciones
</button> </form> <div class="mt-12 text-center flex items-center justify-center gap-4" id="footer-links" data-astro-cid-qkxl3yiv> <a href="/login" class="text-sm text-warm-gray no-underline transition-colors duration-200 hover:text-forest-dark" data-astro-cid-qkxl3yiv>Volver a iniciar sesión</a> <span class="text-sage-light text-sm" data-astro-cid-qkxl3yiv>·</span> <a href="/registro" class="text-sm text-warm-gray no-underline transition-colors duration-200 hover:text-forest-dark" data-astro-cid-qkxl3yiv>Crear cuenta</a> </div> </div> </section> ` })}  ${renderScript($$result, "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/pages/recuperar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/pages/recuperar.astro", void 0);

const $$file = "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/pages/recuperar.astro";
const $$url = "/recuperar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Recuperar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
