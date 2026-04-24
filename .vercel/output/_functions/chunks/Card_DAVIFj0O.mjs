import { c as createLucideIcon } from './Layout_CYHLckqA.mjs';
import { c as createComponent } from './_astro_assets_BiFNf1T6.mjs';
import 'piccolore';
import { B as maybeRenderHead, a4 as addAttribute, D as renderSlot, T as renderTemplate } from './sequence_DNlBr1nX.mjs';
import 'clsx';

const Building = createLucideIcon("building", [["path", { "d": "M12 10h.01" }], ["path", { "d": "M12 14h.01" }], ["path", { "d": "M12 6h.01" }], ["path", { "d": "M16 10h.01" }], ["path", { "d": "M16 14h.01" }], ["path", { "d": "M16 6h.01" }], ["path", { "d": "M8 10h.01" }], ["path", { "d": "M8 14h.01" }], ["path", { "d": "M8 6h.01" }], ["path", { "d": "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" }], ["rect", { "x": "4", "y": "2", "width": "16", "height": "20", "rx": "2" }]]);

const Calendar = createLucideIcon("calendar", [["path", { "d": "M8 2v4" }], ["path", { "d": "M16 2v4" }], ["rect", { "width": "18", "height": "18", "x": "3", "y": "4", "rx": "2" }], ["path", { "d": "M3 10h18" }]]);

const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Card;
  const {
    class: className = "",
    padding = "md"
  } = Astro2.props;
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };
  const baseClasses = "bg-white rounded-xl shadow-lg border border-slate-200";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([baseClasses, paddingClasses[padding], className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/SISTEMAS/Documents/UANL/Diseño y Especificacion de Software/palapa-el-sabino/src/components/ui/Card.astro", void 0);

export { $$Card as $, Building as B, Calendar as C };
