import { c as createComponent, m as maybeRenderHead, d as addAttribute, f as renderSlot, g as renderScript, r as renderTemplate, b as createAstro } from './astro/server_b2Tgnq0S.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$Markdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Markdown;
  const className = Astro2.props.class;
  return renderTemplate`${maybeRenderHead()}<div data-pagefind-body${addAttribute(`prose dark:prose-invert prose-base !max-w-none custom-md ${className}`, "class")}> <!--<div class="prose dark:prose-invert max-w-none custom-md">--> <!--<div class="max-w-none custom-md">--> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "/root/blogs/caterpillar-invest-diary/src/components/misc/Markdown.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/blogs/caterpillar-invest-diary/src/components/misc/Markdown.astro", void 0);

export { $$Markdown as default };
