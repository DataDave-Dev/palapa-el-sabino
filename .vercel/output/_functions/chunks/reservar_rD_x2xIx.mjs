import { c as createComponent } from './_astro_assets_BiFNf1T6.mjs';
import 'piccolore';
import { B as maybeRenderHead, T as renderTemplate, a4 as addAttribute, D as renderSlot } from './sequence_DNlBr1nX.mjs';
import { r as renderComponent } from './entrypoint_C8DEOGAR.mjs';
import { c as createLucideIcon, r as renderScript, $ as $$Layout, a as $$Navigation } from './Layout_CYHLckqA.mjs';
import { C as Calendar, $ as $$Card, B as Building } from './Card_DAVIFj0O.mjs';
import 'clsx';
import { H as House } from './house_BMT2oUE1.mjs';

const ChevronLeft = createLucideIcon("chevron-left", [["path", { "d": "m15 18-6-6 6-6" }]]);

const ChevronRight = createLucideIcon("chevron-right", [["path", { "d": "m9 18 6-6-6-6" }]]);

const CircleCheckBig = createLucideIcon("circle-check-big", [["path", { "d": "M21.801 10A10 10 0 1 1 17 3.335" }], ["path", { "d": "m9 11 3 3L22 4" }]]);

const MessageSquare = createLucideIcon("message-square", [["path", { "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }]]);

const Users = createLucideIcon("users", [["path", { "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["path", { "d": "M16 3.128a4 4 0 0 1 0 7.744" }], ["path", { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }], ["circle", { "cx": "9", "cy": "7", "r": "4" }]]);

const $$Calendar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Calendar;
  const { onDateSelect } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="calendar-container bg-pearl rounded-xl shadow-lg p-6 border-2 border-stone-200" data-astro-cid-eq4smzqd> <!-- Calendar Header --> <div class="flex items-center justify-between mb-6" data-astro-cid-eq4smzqd> <h3 class="text-xl font-medium text-stone-800 flex items-center gap-2" data-astro-cid-eq4smzqd> ${renderComponent($$result, "CalendarIcon", Calendar, { "class": "w-6 h-6 text-stone-700", "data-astro-cid-eq4smzqd": true })} <span id="calendar-month-year" data-astro-cid-eq4smzqd></span> </h3> <div class="flex gap-2" data-astro-cid-eq4smzqd> <button id="prev-month" class="p-2 rounded-lg hover:bg-stone-100 text-stone-600 hover:text-stone-900 transition-colors" aria-label="Previous month" data-astro-cid-eq4smzqd> ${renderComponent($$result, "ChevronLeft", ChevronLeft, { "class": "w-5 h-5", "data-astro-cid-eq4smzqd": true })} </button> <button id="next-month" class="p-2 rounded-lg hover:bg-stone-100 text-stone-600 hover:text-stone-900 transition-colors" aria-label="Next month" data-astro-cid-eq4smzqd> ${renderComponent($$result, "ChevronRight", ChevronRight, { "class": "w-5 h-5", "data-astro-cid-eq4smzqd": true })} </button> </div> </div> <!-- Calendar Grid --> <div class="calendar-grid" data-astro-cid-eq4smzqd> <!-- Day Headers --> <div class="grid grid-cols-7 gap-2 mb-2" data-astro-cid-eq4smzqd> <div class="text-center text-sm font-bold text-stone-800 py-2" data-astro-cid-eq4smzqd>Dom</div> <div class="text-center text-sm font-medium text-slate-400 py-2" data-astro-cid-eq4smzqd>Lun</div> <div class="text-center text-sm font-medium text-slate-400 py-2" data-astro-cid-eq4smzqd>Mar</div> <div class="text-center text-sm font-medium text-slate-400 py-2" data-astro-cid-eq4smzqd>Mié</div> <div class="text-center text-sm font-medium text-slate-400 py-2" data-astro-cid-eq4smzqd>Jue</div> <div class="text-center text-sm font-medium text-slate-400 py-2" data-astro-cid-eq4smzqd>Vie</div> <div class="text-center text-sm font-bold text-stone-800 py-2" data-astro-cid-eq4smzqd>Sáb</div> </div> <!-- Calendar Days --> <div id="calendar-days" class="grid grid-cols-7 gap-2" data-astro-cid-eq4smzqd></div> </div> <!-- Legend --> <div class="mt-6 pt-6 border-t border-stone-200" data-astro-cid-eq4smzqd> <div class="mb-3 text-sm font-medium text-stone-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2" data-astro-cid-eq4smzqd>
Solo fines de semana disponibles (Sábado y Domingo)
</div> <div class="flex flex-wrap gap-4 text-sm" data-astro-cid-eq4smzqd> <div class="flex items-center gap-2" data-astro-cid-eq4smzqd> <div class="w-4 h-4 rounded bg-stone-200 border border-stone-300" data-astro-cid-eq4smzqd></div> <span class="text-stone-600 font-light" data-astro-cid-eq4smzqd>Disponible</span> </div> <div class="flex items-center gap-2" data-astro-cid-eq4smzqd> <div class="w-4 h-4 rounded bg-red-100 border border-red-300" data-astro-cid-eq4smzqd></div> <span class="text-stone-600 font-light" data-astro-cid-eq4smzqd>Ocupado</span> </div> <div class="flex items-center gap-2" data-astro-cid-eq4smzqd> <div class="w-4 h-4 rounded bg-stone" data-astro-cid-eq4smzqd></div> <span class="text-stone-600 font-light" data-astro-cid-eq4smzqd>No disponible</span> </div> <div class="flex items-center gap-2" data-astro-cid-eq4smzqd> <div class="w-4 h-4 rounded bg-stone-800" data-astro-cid-eq4smzqd></div> <span class="text-stone-600 font-light" data-astro-cid-eq4smzqd>Seleccionado</span> </div> </div> </div> <!-- Selected Dates Display --> <div id="selected-dates-display" class="mt-6 hidden" data-astro-cid-eq4smzqd> <div class="bg-stone-100 border-2 border-stone-300 rounded-lg p-4" data-astro-cid-eq4smzqd> <p class="text-sm font-medium text-stone-800 mb-2" data-astro-cid-eq4smzqd>Fechas seleccionadas:</p> <div class="flex items-center gap-4 text-sm text-stone-700" data-astro-cid-eq4smzqd> <div data-astro-cid-eq4smzqd> <span class="font-medium" data-astro-cid-eq4smzqd>Entrada:</span> <span id="start-date-display" class="ml-2" data-astro-cid-eq4smzqd></span> </div> <div data-astro-cid-eq4smzqd> <span class="font-medium" data-astro-cid-eq4smzqd>Salida:</span> <span id="end-date-display" class="ml-2" data-astro-cid-eq4smzqd></span> </div> </div> </div> </div> </div>  ${renderScript($$result, "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/components/Calendar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/components/Calendar.astro", void 0);

const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Input;
  const {
    type = "text",
    name,
    id = name,
    placeholder,
    required = false,
    value = "",
    class: className = "",
    label,
    error,
    helperText,
    iconLeft,
    iconRight,
    showPasswordToggle = false,
    state = error ? "error" : "default"
  } = Astro2.props;
  const baseClasses = "w-full px-4 py-3 rounded-lg border-2 outline-none transition-all duration-200 bg-white text-stone-800";
  const stateClasses = {
    default: "border-slate-300 focus:border-slate-700 focus:ring-2 focus:ring-slate-200",
    error: "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200",
    success: "border-emerald-500 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200"
  };
  const hasLeftIcon = iconLeft || false;
  const hasRightIcon = iconRight || showPasswordToggle;
  const paddingClasses = hasLeftIcon ? "pl-11" : hasRightIcon ? "pr-11" : "";
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-2" data-astro-cid-3feqjc7r> ${label && renderTemplate`<label${addAttribute(id, "for")} class="text-sm font-medium text-stone-700" data-astro-cid-3feqjc7r> ${label} ${required && renderTemplate`<span class="text-red-500 ml-1" data-astro-cid-3feqjc7r>*</span>`} </label>`} <div class="relative" data-astro-cid-3feqjc7r> ${iconLeft && renderTemplate`<div class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" data-astro-cid-3feqjc7r> ${renderSlot($$result, $$slots["icon-left"])} </div>`} <input${addAttribute(showPasswordToggle ? "password" : type, "type")}${addAttribute(name, "name")}${addAttribute(id, "id")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}${addAttribute(value, "value")}${addAttribute(showPasswordToggle ? "true" : void 0, "data-password-input")}${addAttribute([baseClasses, stateClasses[state], paddingClasses, className], "class:list")} data-astro-cid-3feqjc7r> ${showPasswordToggle && renderTemplate`<button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors" data-password-toggle aria-label="Toggle password visibility" data-astro-cid-3feqjc7r> <svg class="w-5 h-5" data-eye-icon fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3feqjc7r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-3feqjc7r></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-astro-cid-3feqjc7r></path> </svg> <svg class="w-5 h-5 hidden" data-eye-off-icon fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3feqjc7r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" data-astro-cid-3feqjc7r></path> </svg> </button>`} ${iconRight && !showPasswordToggle && renderTemplate`<div class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" data-astro-cid-3feqjc7r> ${renderSlot($$result, $$slots["icon-right"])} </div>`} </div> ${error && renderTemplate`<span class="text-sm text-red-600 animate-fade-in" data-astro-cid-3feqjc7r>${error}</span>`} ${helperText && !error && renderTemplate`<span class="text-sm text-slate-500" data-astro-cid-3feqjc7r>${helperText}</span>`} </div>  ${showPasswordToggle && renderTemplate`${renderScript($$result, "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/components/ui/Input.astro?astro&type=script&index=0&lang.ts")}`}`;
}, "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/components/ui/Input.astro", void 0);

const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Button;
  const {
    type = "button",
    variant = "primary",
    size = "md",
    fullWidth = false,
    loading = false,
    disabled = false,
    class: className = ""
  } = Astro2.props;
  const variantClasses = {
    primary: "bg-stone-800 hover:bg-stone-900 text-white",
    secondary: "bg-stone-700 hover:bg-stone-800 text-white",
    outline: "border-2 border-stone-300 text-stone-700 hover:border-stone-700 hover:bg-stone-50"
  };
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  const baseClasses = "font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const widthClass = fullWidth ? "w-full" : "";
  const isDisabled = disabled || loading;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")}${addAttribute(isDisabled, "disabled")}${addAttribute([baseClasses, variantClasses[variant], sizeClasses[size], widthClass, className, loading && "relative"], "class:list")} data-astro-cid-6ygtcg62> ${loading && renderTemplate`<span class="absolute inset-0 flex items-center justify-center" data-astro-cid-6ygtcg62> <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24" data-astro-cid-6ygtcg62> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-astro-cid-6ygtcg62></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-astro-cid-6ygtcg62></path> </svg> </span>`} <span${addAttribute([loading && "opacity-0"], "class:list")} data-astro-cid-6ygtcg62> ${renderSlot($$result, $$slots["default"])} </span> </button>`;
}, "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/components/ui/Button.astro", void 0);

const $$Reservar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Reservar;
  Astro2.locals.user;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Reservar - Quinta El Cielo" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<div class="pt-24 pb-20 bg-stone-50 min-h-screen"> <div class="max-w-7xl mx-auto px-4"> <!-- Header --> <div class="text-center mb-12"> <h1 class="text-5xl md:text-6xl font-light tracking-tight text-stone-800 mb-4">
Hacer una Reserva
</h1> <p class="text-lg text-stone-600 font-light">
Selecciona tus fechas y completa el formulario
</p> </div> <div class="grid lg:grid-cols-2 gap-8"> <!-- Calendar Section --> <div> ${renderComponent($$result2, "Calendar", $$Calendar, {})} </div> <!-- Booking Form --> <div> ${renderComponent($$result2, "Card", $$Card, {}, { "default": async ($$result3) => renderTemplate` <h2 class="text-2xl font-medium text-stone-800 mb-6 flex items-center gap-2"> ${renderComponent($$result3, "CalendarIcon", Calendar, { "class": "w-6 h-6 text-stone-700" })}
Detalles de la Reserva
</h2> <form id="booking-form" class="space-y-6"> <!-- Tipo de Cabaña --> <div> <label class="text-sm font-medium text-slate-700 mb-2 block flex items-center gap-2"> ${renderComponent($$result3, "Building", Building, { "class": "w-5 h-5 text-sage" })}
Tipo de Cabaña
<span class="text-red-500">*</span> </label> <div class="grid grid-cols-2 gap-4"> <label class="relative cursor-pointer"> <input type="radio" name="tipo" value="baja" class="peer sr-only" required> <div class="border-2 border-sage-light rounded-lg p-4 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 transition-all hover:border-sage-300"> ${renderComponent($$result3, "Home", House, { "class": "w-6 h-6 text-warm-gray peer-checked:text-sage mb-2" })} <div class="font-bold text-slate-800">Planta Baja</div> <div class="text-sm text-warm-gray">$5,499</div> </div> </label> <label class="relative cursor-pointer"> <input type="radio" name="tipo" value="completa" class="peer sr-only" required> <div class="border-2 border-sage-light rounded-lg p-4 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 transition-all hover:border-sage-300"> ${renderComponent($$result3, "Building", Building, { "class": "w-6 h-6 text-warm-gray peer-checked:text-sage mb-2" })} <div class="font-bold text-slate-800">Completa</div> <div class="text-sm text-warm-gray">$8,500</div> </div> </label> </div> </div> <!-- Hidden Date Inputs --> <input type="hidden" name="startDate" id="start-date"> <input type="hidden" name="endDate" id="end-date"> <!-- Fechas Display --> <div class="grid grid-cols-2 gap-4" id="dates-info"> <div class="bg-cream rounded-lg p-4 border-2 border-sage-light"> <label class="text-sm font-medium text-warm-gray block mb-1">Entrada</label> <div id="display-start-date" class="text-lg font-bold text-slate-800">
Selecciona en el calendario
</div> </div> <div class="bg-cream rounded-lg p-4 border-2 border-sage-light"> <label class="text-sm font-medium text-warm-gray block mb-1">Salida</label> <div id="display-end-date" class="text-lg font-bold text-slate-800">
Selecciona en el calendario
</div> </div> </div> <!-- Número de Huéspedes --> <div> ${renderComponent($$result3, "Input", $$Input, { "type": "number", "name": "guests", "id": "guests", "label": "Número de Huéspedes", "placeholder": "1-20", "min": "1", "max": "20", "required": true }, { "icon": async ($$result4) => renderTemplate`${renderComponent($$result4, "Users", Users, { "class": "w-5 h-5 text-sage", "slot": "icon" })}` })} </div> <!-- Notas --> <div> <label for="notes" class="text-sm font-medium text-slate-700 mb-2 block flex items-center gap-2"> ${renderComponent($$result3, "MessageSquare", MessageSquare, { "class": "w-5 h-5 text-sage" })}
Notas o Peticiones Especiales
</label> <textarea name="notes" id="notes" rows="4" class="w-full px-4 py-3 rounded-lg border-2 border-sage-light focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200" placeholder="Ej: Celebración de cumpleaños, llegada tarde, etc."></textarea> </div> <!-- Error Message --> <div id="error-message" class="hidden bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg"></div> <!-- Success Message --> <div id="success-message" class="hidden bg-stone-100 border-2 border-stone-300 text-stone-700 px-4 py-3 rounded-lg flex items-center gap-2"> ${renderComponent($$result3, "CheckCircle", CircleCheckBig, { "class": "w-5 h-5" })} <span></span> </div> <!-- Submit Button --> ${renderComponent($$result3, "Button", $$Button, { "type": "submit", "variant": "primary", "size": "lg", "fullWidth": true }, { "default": async ($$result4) => renderTemplate`
Confirmar Reserva
` })} <p class="text-sm text-warm-gray text-center">
Tu reserva quedará como "Pendiente de Confirmación" y nos pondremos en contacto contigo pronto.
</p> </form> ` })} </div> </div> </div> </div> ` })} ${renderScript($$result, "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/pages/reservar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/pages/reservar.astro", void 0);

const $$file = "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/pages/reservar.astro";
const $$url = "/reservar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reservar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
