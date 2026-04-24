import { c as createComponent, $ as $$Image } from './_astro_assets_BiFNf1T6.mjs';
import 'piccolore';
import { U as createRenderInstruction, B as maybeRenderHead, a4 as addAttribute, T as renderTemplate, F as Fragment, D as renderSlot, aX as renderHead } from './sequence_DNlBr1nX.mjs';
import { r as renderComponent, s as spreadAttributes } from './entrypoint_C8DEOGAR.mjs';
import { g as getUserFromCookies } from './auth_DPx11g5j.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const LogoPalapa = new Proxy({"src":"/_astro/logo.BbEWivCs.png","width":1254,"height":1254,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/public/logo.png";
							}
							
							return target[name];
						}
					});

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Navigation;
  const user = getUserFromCookies(Astro2.cookies);
  const currentPath = Astro2.url.pathname;
  const navLinks = [
    { href: "/cabana", label: "Experiencia" },
    { href: "/precios", label: "Precios" },
    { href: "/ubicacion", label: "Ubicación" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav id="main-nav" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" data-astro-cid-pux6a34n> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-pux6a34n> <div class="flex items-center justify-between h-20" data-astro-cid-pux6a34n> <!-- Logo --> <a href="/" class="flex items-center space-x-3 transition-opacity hover:opacity-80" data-astro-cid-pux6a34n> ${renderComponent($$result, "Image", $$Image, { "src": LogoPalapa, "alt": "Palapa El Sabino", "width": "48", "height": "48", "class": "w-12 h-12 object-contain transition-all duration-300", "data-astro-cid-pux6a34n": true })} <span class="text-xl font-bold text-cream hidden sm:block" data-astro-cid-pux6a34n>
Palapa El Sabino
</span> </a> <!-- Desktop Navigation --> <div class="hidden lg:flex items-center space-x-8" data-astro-cid-pux6a34n> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute([
    "text-sm font-medium transition-all duration-200 relative",
    currentPath === link.href ? "text-cream after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-sage" : "text-cream/70 hover:text-cream after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-sage after:transition-all after:duration-300 hover:after:w-full"
  ], "class:list")} data-astro-cid-pux6a34n> ${link.label} </a>`)} </div> <!-- CTA Buttons --> <div class="hidden lg:flex items-center space-x-4" data-astro-cid-pux6a34n> ${user ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-pux6a34n": true }, { "default": ($$result2) => renderTemplate` <a href="/perfil" class="px-4 py-2 text-sm font-medium text-cream/80 hover:text-cream transition-colors" data-astro-cid-pux6a34n> ${user.nombre.split(" ")[0]} </a> <a href="/reservar" class="px-6 py-2.5 bg-sage text-white rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-moss" data-astro-cid-pux6a34n>
Reservar
</a> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-pux6a34n": true }, { "default": ($$result2) => renderTemplate` <a href="/login" class="px-4 py-2 text-sm font-medium text-cream/80 hover:text-cream transition-colors" data-astro-cid-pux6a34n>
Iniciar Sesión
</a> <a href="/reservar" class="px-6 py-2.5 bg-sage text-white rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-moss" data-astro-cid-pux6a34n>
Reservar
</a> ` })}`} </div> <!-- Mobile Menu Button --> <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-md text-cream hover:bg-cream/10 transition-colors" aria-label="Toggle menu" data-astro-cid-pux6a34n> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-pux6a34n> <path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-pux6a34n></path> <path id="close-icon" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-pux6a34n></path> </svg> </button> </div> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="lg:hidden fixed inset-0 bg-cream transform translate-x-full transition-transform duration-300 ease-in-out" style="top: 80px;" data-astro-cid-pux6a34n> <div class="px-4 py-6 space-y-4" data-astro-cid-pux6a34n> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute([
    "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
    currentPath === link.href ? "text-forest-dark bg-sage/20" : "text-forest-dark/70 hover:text-forest-dark hover:bg-sage/10"
  ], "class:list")} data-astro-cid-pux6a34n> ${link.label} </a>`)} <div class="pt-4 border-t border-sage-light space-y-3" data-astro-cid-pux6a34n> ${user ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-pux6a34n": true }, { "default": ($$result2) => renderTemplate` <a href="/perfil" class="block px-4 py-3 text-base font-medium text-forest-dark/70 hover:text-forest-dark hover:bg-sage/10 rounded-lg transition-colors" data-astro-cid-pux6a34n>
Perfil
</a> <a href="/reservar" class="block px-6 py-3 bg-sage text-white rounded-full text-center font-semibold hover:bg-moss transition-colors" data-astro-cid-pux6a34n>
Reservar Ahora
</a> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-pux6a34n": true }, { "default": ($$result2) => renderTemplate` <a href="/login" class="block px-4 py-3 text-base font-medium text-forest-dark/70 hover:text-forest-dark hover:bg-sage/10 rounded-lg transition-colors" data-astro-cid-pux6a34n>
Iniciar Sesión
</a> <a href="/reservar" class="block px-6 py-3 bg-sage text-white rounded-full text-center font-semibold hover:bg-moss transition-colors" data-astro-cid-pux6a34n>
Reservar Ahora
</a> ` })}`} </div> </div> </div> </nav>  ${renderScript($$result, "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/components/Navigation.astro", void 0);

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Icon;
  const {
    color = "currentColor",
    size = 24,
    "stroke-width": strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    class: className,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes({
    ...defaultAttributes,
    width: size,
    height: size,
    stroke: color,
    "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
    ...!hasA11yProp(rest) && { "aria-hidden": "true" },
    ...rest
  })}${addAttribute(["lucide", className], "class:list")}> ${iconNode.map(([Tag, attrs]) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs })}`)} ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/node_modules/@lucide/astro/src/Icon.astro", void 0);

const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

const createLucideIcon = (iconName, iconNode) => {
  const Component = createComponent(
    ($$result, $$props, $$slots) => {
      const { class: className, ...restProps } = $$props;
      return renderTemplate`${renderComponent(
        $$result,
        "Icon",
        $$Icon,
        {
          class: mergeClasses(
            Boolean(iconName) && `lucide-${toKebabCase(iconName)}`,
            Boolean(className) && className
          ),
          iconNode,
          ...restProps
        },
        { default: () => renderTemplate`${renderSlot($$result, $$slots["default"])}` }
      )}`;
    },
    void 0,
    "none"
  );
  return Component;
};

const Mail = createLucideIcon("mail", [["path", { "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }], ["rect", { "x": "2", "y": "4", "width": "20", "height": "16", "rx": "2" }]]);

const MapPin = createLucideIcon("map-pin", [["path", { "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["circle", { "cx": "12", "cy": "10", "r": "3" }]]);

const Phone = createLucideIcon("phone", [["path", { "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" }]]);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-forest-dark text-cream"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"> <!-- Brand --> <div class="space-y-4"> <h3 class="text-2xl font-bold text-cream">Palapa El Sabino</h3> <p class="text-warm-gray text-sm leading-relaxed">
Tu refugio exclusivo en las alturas de la Sierra de Arteaga.
</p> <div class="flex items-center gap-2 text-sm text-warm-gray"> ${renderComponent($$result, "MapPin", MapPin, { "class": "w-4 h-4 text-sage" })} <span>3,550m de altitud</span> </div> </div> <!-- Enlaces --> <div> <h4 class="text-sm font-semibold uppercase tracking-wider mb-4 text-cream">Enlaces</h4> <ul class="space-y-3"> <li> <a href="/cabana" class="text-warm-gray hover:text-sage transition-colors text-sm">
Experiencia
</a> </li> <li> <a href="/precios" class="text-warm-gray hover:text-sage transition-colors text-sm">
Precios
</a> </li> <li> <a href="/ubicacion" class="text-warm-gray hover:text-sage transition-colors text-sm">
Ubicación
</a> </li> <li> <a href="/reservar" class="text-warm-gray hover:text-sage transition-colors text-sm">
Reservar
</a> </li> </ul> </div> <!-- Contacto --> <div> <h4 class="text-sm font-semibold uppercase tracking-wider mb-4 text-cream">Contacto</h4> <ul class="space-y-3"> <li class="flex items-start gap-2 text-sm text-warm-gray"> ${renderComponent($$result, "Phone", Phone, { "class": "w-4 h-4 mt-1 shrink-0 text-sage" })} <a href="tel:+528110000000" class="hover:text-sage transition-colors">
+52 811 000 0000
</a> </li> <li class="flex items-start gap-2 text-sm text-warm-gray"> ${renderComponent($$result, "Mail", Mail, { "class": "w-4 h-4 mt-1 shrink-0 text-sage" })} <a href="mailto:info@palapaelsabino.com" class="hover:text-sage transition-colors">
info@palapaelsabino.com
</a> </li> <li class="flex items-start gap-2 text-sm text-warm-gray"> ${renderComponent($$result, "MapPin", MapPin, { "class": "w-4 h-4 mt-1 shrink-0 text-sage" })} <span>Sierra de Arteaga, Coahuila</span> </li> </ul> </div> <!-- Horarios --> <div> <h4 class="text-sm font-semibold uppercase tracking-wider mb-4 text-cream">Horario</h4> <p class="text-sm text-warm-gray leading-relaxed">
Atención disponible todos los días de 9:00 AM a 8:00 PM
</p> <div class="mt-6"> <a href="/reservar" class="inline-block px-6 py-3 bg-amber text-white rounded-full text-sm font-semibold hover:bg-amber/90 transition-all hover:scale-105">
Reservar Ahora
</a> </div> </div> </div> <!-- Bottom Bar --> <div class="pt-8 border-t border-sage-light/20"> <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-warm-gray"> <p class="m-0">© 2026 Palapa El Sabino. Todos los derechos reservados.</p> <div class="flex gap-6"> <a href="#" class="hover:text-sage transition-colors">Privacidad</a> <a href="#" class="hover:text-sage transition-colors">Términos</a> </div> </div> </div> </div> </footer>`;
}, "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/components/Footer.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Palapa El Sabino - Refugio de Lujo en la Sierra de Arteaga",
    description = "Refugio exclusivo de lujo en las alturas. Cabaña premium para 15-20 personas con vistas espectaculares a 3,550m de altitud. Tu escape perfecto a 80 minutos de Monterrey.",
    noFooter = false
  } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><!-- Open Graph --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- Preconnect --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>${renderHead()}</head> <body> <!-- Navigation --> ${renderComponent($$result, "Navigation", $$Navigation, {})} <!-- Main Content --> <main> ${renderSlot($$result, $$slots["default"])} </main> <!-- Footer --> ${!noFooter && renderTemplate`${renderComponent($$result, "Footer", $$Footer, {})}`} <!-- WhatsApp Button --> <a href="https://wa.me/528110000000?text=Hola!%20Me%20interesa%20reservar%20la%20Palapa%20El%20Sabino" target="_blank" rel="noopener noreferrer" class="whatsapp-btn" aria-label="Contactar por WhatsApp"> <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path> <path d="M12 2C6.486 2 2 6.486 2 12c0 1.755.453 3.402 1.246 4.835L2 22l5.253-1.218A9.933 9.933 0 0012 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18.376a8.353 8.353 0 01-4.357-1.221l-.313-.185-3.245.753.772-3.153-.204-.324A8.336 8.336 0 013.376 12c0-4.631 3.769-8.4 8.4-8.4s8.4 3.769 8.4 8.4-3.769 8.376-8.176 8.376z"></path> </svg> </a></body></html>`;
}, "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/layouts/Layout.astro", void 0);

export { $$Layout as $, Mail as M, $$Navigation as a, createLucideIcon as c, renderScript as r };
