import { c as createComponent } from './_astro_assets_BiFNf1T6.mjs';
import 'piccolore';
import { T as renderTemplate, B as maybeRenderHead } from './sequence_DNlBr1nX.mjs';
import { r as renderComponent } from './entrypoint_C8DEOGAR.mjs';
import { $ as $$Layout, r as renderScript, a as $$Navigation } from './Layout_CYHLckqA.mjs';
import { g as getUserFromCookies } from './auth_DPx11g5j.mjs';

const $$Registro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Registro;
  const user = getUserFromCookies(Astro2.cookies);
  if (user) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Crear cuenta - Palapa El Sabino", "data-astro-cid-ohowjl3i": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-ohowjl3i": true })} ${maybeRenderHead()}<section class="min-h-screen flex items-center justify-center p-8 bg-cream" data-astro-cid-ohowjl3i> <div class="w-full max-w-md bg-white p-12 border border-sage-light md:p-8" data-astro-cid-ohowjl3i> <div class="text-center mb-12" data-astro-cid-ohowjl3i> <h1 class="text-4xl md:text-3xl font-extrabold tracking-tight text-forest-dark mb-2" data-astro-cid-ohowjl3i>Crear cuenta</h1> <p class="text-base text-warm-gray font-normal" data-astro-cid-ohowjl3i>Únete para reservar tu estancia</p> </div> <!-- Error Message --> <div id="error-message" class="hidden" data-astro-cid-ohowjl3i></div> <form id="registerForm" class="flex flex-col gap-6" data-astro-cid-ohowjl3i> <div class="flex flex-col gap-2" data-astro-cid-ohowjl3i> <label for="nombre" class="text-sm font-medium text-forest-dark tracking-wide" data-astro-cid-ohowjl3i>Nombre completo</label> <input type="text" id="nombre" name="nombre" required class="w-full py-3.5 text-base border-0 border-b border-sage-light bg-transparent transition-all duration-200 outline-none focus:border-sage placeholder:text-sage-light" placeholder="Juan Pérez" data-astro-cid-ohowjl3i> </div> <div class="flex flex-col gap-2" data-astro-cid-ohowjl3i> <label for="email" class="text-sm font-medium text-forest-dark tracking-wide" data-astro-cid-ohowjl3i>Email</label> <input type="email" id="email" name="email" required class="w-full py-3.5 text-base border-0 border-b border-sage-light bg-transparent transition-all duration-200 outline-none focus:border-sage placeholder:text-sage-light" placeholder="tu@email.com" data-astro-cid-ohowjl3i> </div> <div class="flex flex-col gap-2" data-astro-cid-ohowjl3i> <label for="telefono" class="text-sm font-medium text-forest-dark tracking-wide" data-astro-cid-ohowjl3i>Teléfono</label> <input type="tel" id="telefono" name="telefono" required class="w-full py-3.5 text-base border-0 border-b border-sage-light bg-transparent transition-all duration-200 outline-none focus:border-sage placeholder:text-sage-light" placeholder="81 1234 5678" data-astro-cid-ohowjl3i> </div> <div class="flex flex-col gap-2" data-astro-cid-ohowjl3i> <label for="password" class="text-sm font-medium text-forest-dark tracking-wide" data-astro-cid-ohowjl3i>Contraseña</label> <input type="password" id="password" name="password" required minlength="8" class="w-full py-3.5 text-base border-0 border-b border-sage-light bg-transparent transition-all duration-200 outline-none focus:border-sage placeholder:text-sage-light" placeholder="••••••••" data-astro-cid-ohowjl3i> <span class="text-xs text-neutral-400" data-astro-cid-ohowjl3i>Mínimo 8 caracteres</span> </div> <div class="flex flex-col gap-2" data-astro-cid-ohowjl3i> <label for="confirmPassword" class="text-sm font-medium text-forest-dark tracking-wide" data-astro-cid-ohowjl3i>Confirmar contraseña</label> <input type="password" id="confirmPassword" name="confirmPassword" required class="w-full py-3.5 text-base border-0 border-b border-sage-light bg-transparent transition-all duration-200 outline-none focus:border-sage placeholder:text-sage-light" placeholder="••••••••" data-astro-cid-ohowjl3i> </div> <button type="submit" id="submit-button" class="mt-8 px-4 py-4 bg-sage text-white text-base font-medium border-none rounded-full cursor-pointer transition-all duration-200 hover:bg-moss hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-ohowjl3i>
Crear cuenta
</button> </form> <div class="mt-12 text-center flex items-center justify-center gap-2" data-astro-cid-ohowjl3i> <span class="text-sm text-warm-gray" data-astro-cid-ohowjl3i>¿Ya tienes cuenta?</span> <a href="/login" class="text-sm text-forest-dark font-medium no-underline transition-opacity duration-200 hover:opacity-70" data-astro-cid-ohowjl3i>Inicia sesión</a> </div> </div> </section> ` })}  ${renderScript($$result, "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/pages/registro.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/pages/registro.astro", void 0);

const $$file = "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/pages/registro.astro";
const $$url = "/registro";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Registro,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
