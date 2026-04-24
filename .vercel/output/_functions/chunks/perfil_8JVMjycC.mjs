import { c as createComponent } from './_astro_assets_BiFNf1T6.mjs';
import 'piccolore';
import { T as renderTemplate, B as maybeRenderHead, a4 as addAttribute } from './sequence_DNlBr1nX.mjs';
import { r as renderComponent } from './entrypoint_C8DEOGAR.mjs';
import { c as createLucideIcon, $ as $$Layout, a as $$Navigation, M as Mail } from './Layout_CYHLckqA.mjs';
import { $ as $$Card, C as Calendar, B as Building } from './Card_DAVIFj0O.mjs';
import { d as db, B as Bookings } from './_astro_db_N9dzpGpA.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';

const Clock = createLucideIcon("clock", [["circle", { "cx": "12", "cy": "12", "r": "10" }], ["path", { "d": "M12 6v6l4 2" }]]);

const User = createLucideIcon("user", [["path", { "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }], ["circle", { "cx": "12", "cy": "7", "r": "4" }]]);

const $$Perfil = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Perfil;
  const user = Astro2.locals.user;
  if (!user) {
    return Astro2.redirect("/login");
  }
  const userBookings = await db.select().from(Bookings).where(eq(Bookings.userId, user.userId)).orderBy(Bookings.createdAt, "desc");
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "confirmada":
        return "text-emerald-600 bg-emerald-50 border-emerald-200";
      case "pendiente_confirmacion":
        return "text-amber-600 bg-amber-50 border-amber-200";
      case "cancelada":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-slate-600 bg-slate-50 border-slate-200";
    }
  };
  const getStatusText = (status) => {
    switch (status) {
      case "confirmada":
        return "Confirmada";
      case "pendiente_confirmacion":
        return "Pendiente de Confirmación";
      case "cancelada":
        return "Cancelada";
      default:
        return status;
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mi Perfil - Quinta El Cielo" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<div class="pt-24 pb-20 bg-stone-50 min-h-screen"> <div class="max-w-6xl mx-auto px-4"> <!-- Header --> <div class="mb-8"> <h1 class="text-4xl md:text-5xl font-light tracking-tight text-stone-800 mb-2">
Mi Perfil
</h1> <p class="text-stone-600 font-light">Gestiona tu información y reservas</p> </div> <div class="grid lg:grid-cols-3 gap-8"> <!-- User Info Card --> <div class="lg:col-span-1"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": async ($$result3) => renderTemplate` <div class="text-center"> <div class="w-24 h-24 bg-stone-700 rounded-full mx-auto mb-4 flex items-center justify-center"> ${renderComponent($$result3, "User", User, { "class": "w-12 h-12 text-white" })} </div> <h2 class="text-2xl font-medium text-stone-800 mb-1">${user.nombre}</h2> <p class="text-stone-500 text-sm mb-6 font-light">Cliente</p> <div class="space-y-3 text-left"> <div class="flex items-center gap-3 text-stone-600"> ${renderComponent($$result3, "Mail", Mail, { "class": "w-5 h-5 text-stone-700" })} <span class="text-sm">${user.email}</span> </div> </div> </div> ` })} </div> <!-- Bookings List --> <div class="lg:col-span-2"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": async ($$result3) => renderTemplate` <div class="flex items-center gap-3 mb-6"> ${renderComponent($$result3, "Calendar", Calendar, { "class": "w-6 h-6 text-stone-700" })} <h2 class="text-2xl font-medium text-stone-800">Mis Reservas</h2> </div> ${userBookings.length === 0 ? renderTemplate`<div class="text-center py-12"> ${renderComponent($$result3, "Calendar", Calendar, { "class": "w-16 h-16 text-slate-300 mx-auto mb-4" })} <p class="text-slate-500 mb-6">No tienes reservas aún</p> <a href="/reservar" class="inline-block px-6 py-3 bg-stone-800 text-white rounded font-medium hover:bg-stone-900 transition-colors">
Hacer una Reserva
</a> </div>` : renderTemplate`<div class="space-y-4"> ${userBookings.map((booking) => renderTemplate`<div class="border-2 border-slate-200 rounded-xl p-6 hover:border-emerald-300 transition-colors"> <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"> <div class="flex-1"> <div class="flex items-center gap-2 mb-3"> ${renderComponent($$result3, "Building", Building, { "class": "w-5 h-5 text-emerald-500" })} <h3 class="font-bold text-slate-800 text-lg"> ${booking.tipo === "baja" ? "Planta Baja" : "Cabaña Completa"} </h3> </div> <div class="grid md:grid-cols-2 gap-3 text-sm text-slate-600"> <div class="flex items-center gap-2"> ${renderComponent($$result3, "Calendar", Calendar, { "class": "w-4 h-4" })} <span>Entrada: ${formatDate(booking.startDate)}</span> </div> <div class="flex items-center gap-2"> ${renderComponent($$result3, "Calendar", Calendar, { "class": "w-4 h-4" })} <span>Salida: ${formatDate(booking.endDate)}</span> </div> <div class="flex items-center gap-2"> ${renderComponent($$result3, "User", User, { "class": "w-4 h-4" })} <span>${booking.guests} huéspedes</span> </div> <div class="flex items-center gap-2"> ${renderComponent($$result3, "Clock", Clock, { "class": "w-4 h-4" })} <span>Creada: ${formatDate(booking.createdAt)}</span> </div> </div> ${booking.notes && renderTemplate`<div class="mt-3 text-sm text-slate-600"> <strong>Notas:</strong> ${booking.notes} </div>`} </div> <div class="flex-shrink-0"> <span${addAttribute(`px-4 py-2 rounded-full text-sm font-medium border-2 ${getStatusColor(booking.status)}`, "class")}> ${getStatusText(booking.status)} </span> </div> </div> </div>`)} </div>`}` })} </div> </div> </div> </div> ` })}`;
}, "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/pages/perfil.astro", void 0);

const $$file = "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/pages/perfil.astro";
const $$url = "/perfil";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Perfil,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
