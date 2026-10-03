import './_page_.c3ff9ba7_BpKpvvQE.mjs';
import { c as createComponent, a as renderComponent, r as renderTemplate } from './astro/server_b2Tgnq0S.mjs';
import { f as getSortedPostsList, i as i18n, I as I18nKey } from './content-utils_C_m-R6rd.mjs';
import { $ as $$MainGridLayout } from './MainGridLayout_B1qht8vl.mjs';

const $$Archive = createComponent(async ($$result, $$props, $$slots) => {
  const sortedPostsList = await getSortedPostsList();
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.archive) }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ArchivePanel", null, { "sortedPosts": sortedPostsList, "client:only": "svelte", "client:component-hydration": "only", "client:component-path": "@components/ArchivePanel.svelte", "client:component-export": "default" })} ` })}`;
}, "/root/blogs/caterpillar-invest-diary/src/pages/archive.astro", void 0);

const $$file = "/root/blogs/caterpillar-invest-diary/src/pages/archive.astro";
const $$url = "/caterpillar-invest-diary/archive/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Archive,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
