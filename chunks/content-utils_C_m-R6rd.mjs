import { A as AstroError, L as LiveContentConfigError, l as AstroUserError, R as RenderUndefinedEntryError, c as createComponent, u as unescapeHTML, r as renderTemplate, U as UnknownContentCollectionError, n as escape, o as objectType, j as dateType, p as numberType, h as arrayType, s as stringType, q as renderUniqueStylesheet, t as renderScriptElement, v as createHeadAndContent, a as renderComponent } from './astro/server_b2Tgnq0S.mjs';
import { U as UNDEFINED, N as NAN, P as POSITIVE_INFINITY, i as NEGATIVE_INFINITY, j as NEGATIVE_ZERO, S as SPARSE, k as is_valid_array_len, M as MAX_ARRAY_INDEX, l as is_valid_array_index, H as HOLE } from './remark-excerpt_DccNmLEe.mjs';

var I18nKey = /* @__PURE__ */ ((I18nKey2) => {
  I18nKey2["home"] = "home";
  I18nKey2["about"] = "about";
  I18nKey2["archive"] = "archive";
  I18nKey2["search"] = "search";
  I18nKey2["tags"] = "tags";
  I18nKey2["categories"] = "categories";
  I18nKey2["recentPosts"] = "recentPosts";
  I18nKey2["comments"] = "comments";
  I18nKey2["untitled"] = "untitled";
  I18nKey2["uncategorized"] = "uncategorized";
  I18nKey2["noTags"] = "noTags";
  I18nKey2["wordCount"] = "wordCount";
  I18nKey2["wordsCount"] = "wordsCount";
  I18nKey2["minuteCount"] = "minuteCount";
  I18nKey2["minutesCount"] = "minutesCount";
  I18nKey2["postCount"] = "postCount";
  I18nKey2["postsCount"] = "postsCount";
  I18nKey2["themeColor"] = "themeColor";
  I18nKey2["lightMode"] = "lightMode";
  I18nKey2["darkMode"] = "darkMode";
  I18nKey2["systemMode"] = "systemMode";
  I18nKey2["more"] = "more";
  I18nKey2["author"] = "author";
  I18nKey2["publishedAt"] = "publishedAt";
  I18nKey2["license"] = "license";
  return I18nKey2;
})(I18nKey || {});

const i18nKey = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: I18nKey
}, Symbol.toStringTag, { value: 'Module' }));

var LinkPreset = /* @__PURE__ */ ((LinkPreset2) => {
  LinkPreset2[LinkPreset2["Home"] = 0] = "Home";
  LinkPreset2[LinkPreset2["Archive"] = 1] = "Archive";
  LinkPreset2[LinkPreset2["About"] = 2] = "About";
  return LinkPreset2;
})(LinkPreset || {});

const config$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	LinkPreset
}, Symbol.toStringTag, { value: 'Module' }));

const siteConfig = {
  title: "毛毛虫投资日记",
  subtitle: "一只毛毛虫的金融市场观察 — 从零花钱开始的财商爬行",
  lang: "zh_CN",
  themeColor: {
    hue: 25},
  banner: {
    enable: false,
    src: "assets/images/demo-banner.png",
    position: "center"},
  toc: {
    depth: 2
  },
  favicon: [
    // Leave this array empty to use the default favicon
  ]
};
const navBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: "GitHub",
      url: "https://github.com/xdh725/caterpillar-invest-diary",
      external: true
    }
  ]
};
const profileConfig = {
  avatar: "assets/images/avatar.png",
  name: "毛毛虫",
  bio: "用零花钱的视角观察金融市场 🐛📈 不荐股，只记录",
  links: [
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/xdh725"
    }
  ]
};
const licenseConfig = {
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
};

const config = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	licenseConfig,
	navBarConfig,
	profileConfig,
	siteConfig
}, Symbol.toStringTag, { value: 'Module' }));

const en = {
  [I18nKey.home]: "Home",
  [I18nKey.about]: "About",
  [I18nKey.archive]: "Archive",
  [I18nKey.search]: "Search",
  [I18nKey.tags]: "Tags",
  [I18nKey.categories]: "Categories",
  [I18nKey.recentPosts]: "Recent Posts",
  [I18nKey.comments]: "Comments",
  [I18nKey.untitled]: "Untitled",
  [I18nKey.uncategorized]: "Uncategorized",
  [I18nKey.noTags]: "No Tags",
  [I18nKey.wordCount]: "word",
  [I18nKey.wordsCount]: "words",
  [I18nKey.minuteCount]: "minute",
  [I18nKey.minutesCount]: "minutes",
  [I18nKey.postCount]: "post",
  [I18nKey.postsCount]: "posts",
  [I18nKey.themeColor]: "Theme Color",
  [I18nKey.lightMode]: "Light",
  [I18nKey.darkMode]: "Dark",
  [I18nKey.systemMode]: "System",
  [I18nKey.more]: "More",
  [I18nKey.author]: "Author",
  [I18nKey.publishedAt]: "Published at",
  [I18nKey.license]: "License"
};

const en$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	en
}, Symbol.toStringTag, { value: 'Module' }));

const es = {
  [I18nKey.home]: "Inicio",
  [I18nKey.about]: "Sobre mí",
  [I18nKey.archive]: "Archivo",
  [I18nKey.search]: "Buscar",
  [I18nKey.tags]: "Etiquetas",
  [I18nKey.categories]: "Categorías",
  [I18nKey.recentPosts]: "Publicaciones recientes",
  [I18nKey.comments]: "Comentarios",
  [I18nKey.untitled]: "Sin título",
  [I18nKey.uncategorized]: "Sin categoría",
  [I18nKey.noTags]: "Sin etiquetas",
  [I18nKey.wordCount]: "palabra",
  [I18nKey.wordsCount]: "palabras",
  [I18nKey.minuteCount]: "minuto",
  [I18nKey.minutesCount]: "minutos",
  [I18nKey.postCount]: "publicación",
  [I18nKey.postsCount]: "publicaciones",
  [I18nKey.themeColor]: "Color del tema",
  [I18nKey.lightMode]: "Claro",
  [I18nKey.darkMode]: "Oscuro",
  [I18nKey.systemMode]: "Sistema",
  [I18nKey.more]: "Más",
  [I18nKey.author]: "Autor",
  [I18nKey.publishedAt]: "Publicado el",
  [I18nKey.license]: "Licencia"
};

const es$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	es
}, Symbol.toStringTag, { value: 'Module' }));

const id = {
  [I18nKey.home]: "Beranda",
  [I18nKey.about]: "Tentang",
  [I18nKey.archive]: "Arsip",
  [I18nKey.search]: "Cari",
  [I18nKey.tags]: "Tag",
  [I18nKey.categories]: "Kategori",
  [I18nKey.recentPosts]: "Postingan Terbaru",
  [I18nKey.comments]: "Komentar",
  [I18nKey.untitled]: "Tanpa Judul",
  [I18nKey.uncategorized]: "Tanpa Kategori",
  [I18nKey.noTags]: "Tanpa Tag",
  [I18nKey.wordCount]: "kata",
  [I18nKey.wordsCount]: "kata",
  [I18nKey.minuteCount]: "menit",
  [I18nKey.minutesCount]: "menit",
  [I18nKey.postCount]: "postingan",
  [I18nKey.postsCount]: "postingan",
  [I18nKey.themeColor]: "Warna Tema",
  [I18nKey.lightMode]: "Terang",
  [I18nKey.darkMode]: "Gelap",
  [I18nKey.systemMode]: "Sistem",
  [I18nKey.more]: "Lainnya",
  [I18nKey.author]: "Penulis",
  [I18nKey.publishedAt]: "Diterbitkan pada",
  [I18nKey.license]: "Lisensi"
};

const id$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	id
}, Symbol.toStringTag, { value: 'Module' }));

const ja = {
  [I18nKey.home]: "Home",
  [I18nKey.about]: "About",
  [I18nKey.archive]: "Archive",
  [I18nKey.search]: "検索",
  [I18nKey.tags]: "タグ",
  [I18nKey.categories]: "カテゴリ",
  [I18nKey.recentPosts]: "最近の投稿",
  [I18nKey.comments]: "コメント",
  [I18nKey.untitled]: "タイトルなし",
  [I18nKey.uncategorized]: "カテゴリなし",
  [I18nKey.noTags]: "タグなし",
  [I18nKey.wordCount]: "文字",
  [I18nKey.wordsCount]: "文字",
  [I18nKey.minuteCount]: "分",
  [I18nKey.minutesCount]: "分",
  [I18nKey.postCount]: "件の投稿",
  [I18nKey.postsCount]: "件の投稿",
  [I18nKey.themeColor]: "テーマカラー",
  [I18nKey.lightMode]: "ライト",
  [I18nKey.darkMode]: "ダーク",
  [I18nKey.systemMode]: "システム",
  [I18nKey.more]: "もっと",
  [I18nKey.author]: "作者",
  [I18nKey.publishedAt]: "公開日",
  [I18nKey.license]: "ライセンス"
};

const ja$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	ja
}, Symbol.toStringTag, { value: 'Module' }));

const ko = {
  [I18nKey.home]: "홈",
  [I18nKey.about]: "소개",
  [I18nKey.archive]: "아카이브",
  [I18nKey.search]: "검색",
  [I18nKey.tags]: "태그",
  [I18nKey.categories]: "카테고리",
  [I18nKey.recentPosts]: "최근 게시물",
  [I18nKey.comments]: "댓글",
  [I18nKey.untitled]: "제목 없음",
  [I18nKey.uncategorized]: "분류되지 않음",
  [I18nKey.noTags]: "태그 없음",
  [I18nKey.wordCount]: "단어",
  [I18nKey.wordsCount]: "단어",
  [I18nKey.minuteCount]: "분",
  [I18nKey.minutesCount]: "분",
  [I18nKey.postCount]: "게시물",
  [I18nKey.postsCount]: "게시물",
  [I18nKey.themeColor]: "테마 색상",
  [I18nKey.lightMode]: "밝은 모드",
  [I18nKey.darkMode]: "어두운 모드",
  [I18nKey.systemMode]: "시스템 모드",
  [I18nKey.more]: "더 보기",
  [I18nKey.author]: "저자",
  [I18nKey.publishedAt]: "게시일",
  [I18nKey.license]: "라이선스"
};

const ko$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	ko
}, Symbol.toStringTag, { value: 'Module' }));

const th = {
  [I18nKey.home]: "หน้าแรก",
  [I18nKey.about]: "เกี่ยวกับ",
  [I18nKey.archive]: "คลัง",
  [I18nKey.search]: "ค้นหา",
  [I18nKey.tags]: "ป้ายกำกับ",
  [I18nKey.categories]: "หมวดหมู่",
  [I18nKey.recentPosts]: "โพสต์ล่าสุด",
  [I18nKey.comments]: "ความคิดเห็น",
  [I18nKey.untitled]: "ไม่ได้ตั้งชื่อ",
  [I18nKey.uncategorized]: "ไม่ได้จัดหมวดหมู่",
  [I18nKey.noTags]: "ไม่มีป้ายกำกับ",
  [I18nKey.wordCount]: "คำ",
  [I18nKey.wordsCount]: "คำ",
  [I18nKey.minuteCount]: "นาที",
  [I18nKey.minutesCount]: "นาที",
  [I18nKey.postCount]: "โพสต์",
  [I18nKey.postsCount]: "โพสต์",
  [I18nKey.themeColor]: "สีของธีม",
  [I18nKey.lightMode]: "สว่าง",
  [I18nKey.darkMode]: "มืด",
  [I18nKey.systemMode]: "ตามระบบ",
  [I18nKey.more]: "ดูเพิ่ม",
  [I18nKey.author]: "ผู้เขียน",
  [I18nKey.publishedAt]: "เผยแพร่เมื่อ",
  [I18nKey.license]: "สัญญาอนุญาต"
};

const th$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	th
}, Symbol.toStringTag, { value: 'Module' }));

const tr = {
  [I18nKey.home]: "Anasayfa",
  [I18nKey.about]: "Hakkında",
  [I18nKey.archive]: "Arşiv",
  [I18nKey.search]: "Ara",
  [I18nKey.tags]: "Taglar",
  [I18nKey.categories]: "Katagoriler",
  [I18nKey.recentPosts]: "Son Paylaşımlar",
  [I18nKey.comments]: "Yorumlar",
  [I18nKey.untitled]: "Başlıksız",
  [I18nKey.uncategorized]: "Katagorisiz",
  [I18nKey.noTags]: "Tag Bulunamadı",
  [I18nKey.wordCount]: "kelime",
  [I18nKey.wordsCount]: "kelime",
  [I18nKey.minuteCount]: "dakika",
  [I18nKey.minutesCount]: "dakika",
  [I18nKey.postCount]: "gönderi",
  [I18nKey.postsCount]: "gönderiler",
  [I18nKey.themeColor]: "Tema Rengi",
  [I18nKey.lightMode]: "Aydınlık",
  [I18nKey.darkMode]: "Koyu",
  [I18nKey.systemMode]: "Sistem",
  [I18nKey.more]: "Daha Fazla",
  [I18nKey.author]: "Yazar",
  [I18nKey.publishedAt]: "Yayınlanma:",
  [I18nKey.license]: "Lisans"
};

const tr$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	tr
}, Symbol.toStringTag, { value: 'Module' }));

const vi = {
  [I18nKey.home]: "Trang chủ",
  [I18nKey.about]: "Giới thiệu",
  [I18nKey.archive]: "Kho bài",
  [I18nKey.search]: "Tìm kiếm",
  [I18nKey.tags]: "Thẻ",
  [I18nKey.categories]: "Danh mục",
  [I18nKey.recentPosts]: "Bài viết mới nhất",
  [I18nKey.comments]: "Bình luận",
  [I18nKey.untitled]: "Không tiêu đề",
  [I18nKey.uncategorized]: "Chưa phân loại",
  [I18nKey.noTags]: "Chưa có thẻ",
  [I18nKey.wordCount]: "từ",
  [I18nKey.wordsCount]: "từ",
  [I18nKey.minuteCount]: "phút đọc",
  [I18nKey.minutesCount]: "phút đọc",
  [I18nKey.postCount]: "bài viết",
  [I18nKey.postsCount]: "bài viết",
  [I18nKey.themeColor]: "Màu giao diện",
  [I18nKey.lightMode]: "Sáng",
  [I18nKey.darkMode]: "Tối",
  [I18nKey.systemMode]: "Hệ thống",
  [I18nKey.more]: "Thêm",
  [I18nKey.author]: "Tác giả",
  [I18nKey.publishedAt]: "Đăng vào lúc",
  [I18nKey.license]: "Giấy phép bản quyền"
};

const vi$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	vi
}, Symbol.toStringTag, { value: 'Module' }));

const zh_CN = {
  [I18nKey.home]: "主页",
  [I18nKey.about]: "关于",
  [I18nKey.archive]: "归档",
  [I18nKey.search]: "搜索",
  [I18nKey.tags]: "标签",
  [I18nKey.categories]: "分类",
  [I18nKey.recentPosts]: "最新文章",
  [I18nKey.comments]: "评论",
  [I18nKey.untitled]: "无标题",
  [I18nKey.uncategorized]: "未分类",
  [I18nKey.noTags]: "无标签",
  [I18nKey.wordCount]: "字",
  [I18nKey.wordsCount]: "字",
  [I18nKey.minuteCount]: "分钟",
  [I18nKey.minutesCount]: "分钟",
  [I18nKey.postCount]: "篇文章",
  [I18nKey.postsCount]: "篇文章",
  [I18nKey.themeColor]: "主题色",
  [I18nKey.lightMode]: "亮色",
  [I18nKey.darkMode]: "暗色",
  [I18nKey.systemMode]: "跟随系统",
  [I18nKey.more]: "更多",
  [I18nKey.author]: "作者",
  [I18nKey.publishedAt]: "发布于",
  [I18nKey.license]: "许可协议"
};

const zh_CN$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	zh_CN
}, Symbol.toStringTag, { value: 'Module' }));

const zh_TW = {
  [I18nKey.home]: "首頁",
  [I18nKey.about]: "關於",
  [I18nKey.archive]: "彙整",
  [I18nKey.search]: "搜尋",
  [I18nKey.tags]: "標籤",
  [I18nKey.categories]: "分類",
  [I18nKey.recentPosts]: "最新文章",
  [I18nKey.comments]: "評論",
  [I18nKey.untitled]: "無標題",
  [I18nKey.uncategorized]: "未分類",
  [I18nKey.noTags]: "無標籤",
  [I18nKey.wordCount]: "字",
  [I18nKey.wordsCount]: "字",
  [I18nKey.minuteCount]: "分鐘",
  [I18nKey.minutesCount]: "分鐘",
  [I18nKey.postCount]: "篇文章",
  [I18nKey.postsCount]: "篇文章",
  [I18nKey.themeColor]: "主題色",
  [I18nKey.lightMode]: "亮色",
  [I18nKey.darkMode]: "暗色",
  [I18nKey.systemMode]: "跟隨系統",
  [I18nKey.more]: "更多",
  [I18nKey.author]: "作者",
  [I18nKey.publishedAt]: "發佈於",
  [I18nKey.license]: "許可協議"
};

const zh_TW$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	zh_TW
}, Symbol.toStringTag, { value: 'Module' }));

const defaultTranslation = en;
const map = {
  es,
  en,
  en_us: en,
  en_gb: en,
  en_au: en,
  zh_cn: zh_CN,
  zh_tw: zh_TW,
  ja,
  ja_jp: ja,
  ko,
  ko_kr: ko,
  th,
  th_th: th,
  vi,
  vi_vn: vi,
  id,
  tr,
  tr_tr: tr
};
function getTranslation(lang) {
  return map[lang.toLowerCase()] || defaultTranslation;
}
function i18n(key) {
  const lang = siteConfig.lang;
  return getTranslation(lang)[key];
}

const translation = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	getTranslation,
	i18n
}, Symbol.toStringTag, { value: 'Module' }));

function pathsEqual(path1, path2) {
  const normalizedPath1 = path1.replace(/^\/|\/$/g, "").toLowerCase();
  const normalizedPath2 = path2.replace(/^\/|\/$/g, "").toLowerCase();
  return normalizedPath1 === normalizedPath2;
}
function joinUrl(...parts) {
  const joined = parts.join("/");
  return joined.replace(/\/+/g, "/");
}
function getPostUrlBySlug(slug) {
  return url(`/posts/${slug}/`);
}
function getTagUrl(tag) {
  if (!tag) return url("/archive/");
  return url(`/archive/?tag=${encodeURIComponent(tag.trim())}`);
}
function getCategoryUrl(category) {
  if (!category || category.trim() === "" || category.trim().toLowerCase() === i18n(I18nKey.uncategorized).toLowerCase())
    return url("/archive/?uncategorized=true");
  return url(`/archive/?category=${encodeURIComponent(category.trim())}`);
}
function getDir(path) {
  const lastSlashIndex = path.lastIndexOf("/");
  if (lastSlashIndex < 0) {
    return "/";
  }
  return path.substring(0, lastSlashIndex + 1);
}
function url(path) {
  return joinUrl("", "/caterpillar-invest-diary/", path);
}

const urlUtils = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	getCategoryUrl,
	getDir,
	getPostUrlBySlug,
	getTagUrl,
	pathsEqual,
	url
}, Symbol.toStringTag, { value: 'Module' }));

function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function removeLeadingForwardSlash(path) {
  return path.startsWith("/") ? path.substring(1) : path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map((path, i) => {
    if (i === 0) {
      return removeTrailingForwardSlash(path);
    } else if (i === paths.length - 1) {
      return removeLeadingForwardSlash(path);
    } else {
      return trimSlashes(path);
    }
  }).join("/");
}
const URL_PROTOCOL_REGEX = /^(?:(?:http|ftp|https|ws):?\/\/|\/\/)/;
function isRemotePath(src) {
  const decoded = src.replace(/%5C/gi, "\\");
  if (decoded[0] === "\\") {
    return true;
  }
  if (/^(?:http|https|ftp|ws):\\/.test(decoded)) {
    return true;
  }
  return URL_PROTOCOL_REGEX.test(decoded) || decoded.startsWith("data:");
}
function removeBase(path, base) {
  if (path.startsWith(base)) {
    return path.slice(removeTrailingForwardSlash(base).length);
  }
  return path;
}

const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position"
];

var e=e=>Object.prototype.toString.call(e),t=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),o=t=>"[object Date]"===e(t),n=t=>"[object RegExp]"===e(t),r=t=>"[object Error]"===e(t),s=t=>"[object Boolean]"===e(t),l=t=>"[object Number]"===e(t),i=t=>"[object String]"===e(t),c=Array.isArray,u=Object.getOwnPropertyDescriptor,a=Object.prototype.propertyIsEnumerable,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.keys;function d(e){const t=h(e),o=f(e);for(let n=0;n<o.length;n++)a.call(e,o[n])&&t.push(o[n]);return t}function b(e,t){return !u(e,t)?.writable}function y(e,u){if("object"==typeof e&&null!==e){let a;if(c(e))a=[];else if(o(e))a=new Date(e.getTime?e.getTime():e);else if(n(e))a=new RegExp(e);else if(r(e))a={message:e.message};else if(s(e)||l(e)||i(e))a=Object(e);else {if(t(e))return e.slice();a=Object.create(Object.getPrototypeOf(e));}const f=u.includeSymbols?d:h;for(const t of f(e))a[t]=e[t];return a}return e}var g={includeSymbols:false,immutable:false};function m(e,t,o=g){const n=[],r=[];let s=true;const l=o.includeSymbols?d:h,i=!!o.immutable;return function e(u){const a=i?y(u,o):u,f={};let h=true;const d={node:a,node_:u,path:[].concat(n),parent:r[r.length-1],parents:r,key:n[n.length-1],isRoot:0===n.length,level:n.length,circular:void 0,isLeaf:false,notLeaf:true,notRoot:true,isFirst:false,isLast:false,update:function(e,t=false){d.isRoot||(d.parent.node[d.key]=e),d.node=e,t&&(h=false);},delete:function(e){delete d.parent.node[d.key],e&&(h=false);},remove:function(e){c(d.parent.node)?d.parent.node.splice(d.key,1):delete d.parent.node[d.key],e&&(h=false);},keys:null,before:function(e){f.before=e;},after:function(e){f.after=e;},pre:function(e){f.pre=e;},post:function(e){f.post=e;},stop:function(){s=false;},block:function(){h=false;}};if(!s)return d;function g(){if("object"==typeof d.node&&null!==d.node){d.keys&&d.node_===d.node||(d.keys=l(d.node)),d.isLeaf=0===d.keys.length;for(let e=0;e<r.length;e++)if(r[e].node_===u){d.circular=r[e];break}}else d.isLeaf=true,d.keys=null;d.notLeaf=!d.isLeaf,d.notRoot=!d.isRoot;}g();const m=t(d,d.node);if(void 0!==m&&d.update&&d.update(m),f.before&&f.before(d,d.node),!h)return d;if("object"==typeof d.node&&null!==d.node&&!d.circular){r.push(d),g();for(const[t,o]of Object.entries(d.keys??[])){n.push(o),f.pre&&f.pre(d,d.node[o],o);const r=e(d.node[o]);i&&p.call(d.node,o)&&!b(d.node,o)&&(d.node[o]=r.node),r.isLast=!!d.keys?.length&&+t==d.keys.length-1,r.isFirst=0==+t,f.post&&f.post(d,r),n.pop();}r.pop();}return f.after&&f.after(d,d.node),d}(e).node}var j=class{#e;#t;constructor(e,t=g){this.#e=e,this.#t=t;}get(e){let t=this.#e;for(let o=0;t&&o<e.length;o++){const n=e[o];if(!p.call(t,n)||!this.#t.includeSymbols&&"symbol"==typeof n)return;t=t[n];}return t}has(e){let t=this.#e;for(let o=0;t&&o<e.length;o++){const n=e[o];if(!p.call(t,n)||!this.#t.includeSymbols&&"symbol"==typeof n)return  false;t=t[n];}return  true}set(e,t){let o=this.#e,n=0;for(n=0;n<e.length-1;n++){const t=e[n];p.call(o,t)||(o[t]={}),o=o[t];}return o[e[n]]=t,t}map(e){return m(this.#e,e,{immutable:true,includeSymbols:!!this.#t.includeSymbols})}forEach(e){return this.#e=m(this.#e,e,this.#t),this.#e}reduce(e,t){const o=1===arguments.length;let n=o?this.#e:t;return this.forEach(((t,r)=>{t.isRoot&&o||(n=e(t,n,r));})),n}paths(){const e=[];return this.forEach((t=>{e.push(t.path);})),e}nodes(){const e=[];return this.forEach((t=>{e.push(t.node);})),e}clone(){const e=[],o=[],n=this.#t;return t(this.#e)?this.#e.slice():function t(r){for(let t=0;t<e.length;t++)if(e[t]===r)return o[t];if("object"==typeof r&&null!==r){const s=y(r,n);e.push(r),o.push(s);const l=n.includeSymbols?d:h;for(const e of l(r))s[e]=t(r[e]);return e.pop(),o.pop(),s}return r}(this.#e)}};

/*
How it works:
`this.#head` is an instance of `Node` which keeps track of its current value and nests another instance of `Node` that keeps the value that comes after it. When a value is provided to `.enqueue()`, the code needs to iterate through `this.#head`, going deeper and deeper to find the last value. However, iterating through every single item is slow. This problem is solved by saving a reference to the last value as `this.#tail` so that it can reference it to add a new value.
*/

class Node {
	value;
	next;

	constructor(value) {
		this.value = value;
	}
}

class Queue {
	#head;
	#tail;
	#size;

	constructor() {
		this.clear();
	}

	enqueue(value) {
		const node = new Node(value);

		if (this.#head) {
			this.#tail.next = node;
			this.#tail = node;
		} else {
			this.#head = node;
			this.#tail = node;
		}

		this.#size++;
	}

	dequeue() {
		const current = this.#head;
		if (!current) {
			return;
		}

		this.#head = this.#head.next;
		this.#size--;

		// Clean up tail reference when queue becomes empty
		if (!this.#head) {
			this.#tail = undefined;
		}

		return current.value;
	}

	peek() {
		if (!this.#head) {
			return;
		}

		return this.#head.value;

		// TODO: Node.js 18.
		// return this.#head?.value;
	}

	clear() {
		this.#head = undefined;
		this.#tail = undefined;
		this.#size = 0;
	}

	get size() {
		return this.#size;
	}

	* [Symbol.iterator]() {
		let current = this.#head;

		while (current) {
			yield current.value;
			current = current.next;
		}
	}

	* drain() {
		while (this.#head) {
			yield this.dequeue();
		}
	}
}

function pLimit(concurrency) {
	validateConcurrency(concurrency);

	const queue = new Queue();
	let activeCount = 0;

	const resumeNext = () => {
		if (activeCount < concurrency && queue.size > 0) {
			queue.dequeue()();
			// Since `pendingCount` has been decreased by one, increase `activeCount` by one.
			activeCount++;
		}
	};

	const next = () => {
		activeCount--;

		resumeNext();
	};

	const run = async (function_, resolve, arguments_) => {
		const result = (async () => function_(...arguments_))();

		resolve(result);

		try {
			await result;
		} catch {}

		next();
	};

	const enqueue = (function_, resolve, arguments_) => {
		// Queue `internalResolve` instead of the `run` function
		// to preserve asynchronous context.
		new Promise(internalResolve => {
			queue.enqueue(internalResolve);
		}).then(
			run.bind(undefined, function_, resolve, arguments_),
		);

		(async () => {
			// This function needs to wait until the next microtask before comparing
			// `activeCount` to `concurrency`, because `activeCount` is updated asynchronously
			// after the `internalResolve` function is dequeued and called. The comparison in the if-statement
			// needs to happen asynchronously as well to get an up-to-date value for `activeCount`.
			await Promise.resolve();

			if (activeCount < concurrency) {
				resumeNext();
			}
		})();
	};

	const generator = (function_, ...arguments_) => new Promise(resolve => {
		enqueue(function_, resolve, arguments_);
	});

	Object.defineProperties(generator, {
		activeCount: {
			get: () => activeCount,
		},
		pendingCount: {
			get: () => queue.size,
		},
		clearQueue: {
			value() {
				queue.clear();
			},
		},
		concurrency: {
			get: () => concurrency,

			set(newConcurrency) {
				validateConcurrency(newConcurrency);
				concurrency = newConcurrency;

				queueMicrotask(() => {
					// eslint-disable-next-line no-unmodified-loop-condition
					while (activeCount < concurrency && queue.size > 0) {
						resumeNext();
					}
				});
			},
		},
	});

	return generator;
}

function validateConcurrency(concurrency) {
	if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
		throw new TypeError('Expected `concurrency` to be a number from 1 and up');
	}
}

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";
const CONTENT_LAYER_TYPE = "content_layer";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

function getImporterFilename() {
  const stackLine = new Error().stack?.split("\n").find(
    (line) => !line.includes("defineCollection") && !line.includes("defineLiveCollection") && !line.includes("getImporterFilename") && !line.startsWith("Error")
  );
  if (!stackLine) {
    return void 0;
  }
  const match = /\/((?:src|chunks)\/.*?):\d+:\d+/.exec(stackLine);
  return match?.[1] ?? void 0;
}
function defineCollection$1(config) {
  const importerFilename = getImporterFilename();
  if (importerFilename?.includes("live.config")) {
    throw new AstroError({
      ...LiveContentConfigError,
      message: LiveContentConfigError.message(
        "Collections in a live config file must use `defineLiveCollection`.",
        importerFilename
      )
    });
  }
  if ("loader" in config) {
    if (config.type && config.type !== CONTENT_LAYER_TYPE) {
      throw new AstroUserError(
        `Collections that use the Content Layer API must have a \`loader\` defined and no \`type\` set. Check your collection definitions in ${importerFilename ?? "your content config file"}.`
      );
    }
    if (typeof config.loader === "object" && typeof config.loader.load !== "function" && ("loadEntry" in config.loader || "loadCollection" in config.loader)) {
      throw new AstroUserError(
        `Live content collections must be defined in "src/live.config.ts" file. Check your collection definitions in "${importerFilename ?? "your content config file"}" to ensure you are not using a live loader.`
      );
    }
    config.type = CONTENT_LAYER_TYPE;
  }
  if (!config.type) config.type = "content";
  return config;
}

/* Baseline 2025 runtimes */


/**	@type {(base64: string) => ArrayBuffer} */
function decode_native(base64) {
	return Uint8Array.fromBase64(base64).buffer;
}

/**	@type {(base64: string) => ArrayBuffer} */
function decode_buffer(base64) {
	return Uint8Array.from(Buffer.from(base64, 'base64')).buffer;
}

/**	@type {(base64: string) => ArrayBuffer} */
function decode_legacy(base64) {
	const binary_string = atob(base64);
	const len = binary_string.length;
	const array = new Uint8Array(len);

	for (let i = 0; i < len; i++) {
		array[i] = binary_string.charCodeAt(i);
	}

	return array.buffer;
}

const native = typeof Uint8Array.fromBase64 === 'function';
const buffer = typeof process === 'object' && process.versions?.node !== undefined;
const decode64 = native ? decode_native : buffer ? decode_buffer : decode_legacy;

/**
 * Revive a value flattened with `devalue.stringify`
 * @param {number | any[]} parsed
 * @param {Record<string, (value: any) => any>} [revivers]
 */
function unflatten(parsed, revivers) {
	if (typeof parsed === 'number') return hydrate(parsed, true);

	if (!Array.isArray(parsed) || parsed.length === 0) {
		throw new Error('Invalid input');
	}

	const values = /** @type {any[]} */ (parsed);

	const hydrated = Array(values.length);

	/**
	 * @param {number} index
	 * @returns {any}
	 */
	function hydrate(index, standalone = false) {
		if (index === UNDEFINED) return undefined;
		if (index === NAN) return NaN;
		if (index === POSITIVE_INFINITY) return Infinity;
		if (index === NEGATIVE_INFINITY) return -Infinity;
		if (index === NEGATIVE_ZERO) return -0;

		if (standalone || typeof index !== 'number') {
			throw new Error(`Invalid input`);
		}

		if (index in hydrated) return hydrated[index];

		const value = values[index];

		if (!value || typeof value !== 'object') {
			hydrated[index] = value;
		} else if (Array.isArray(value)) {
			if (typeof value[0] === 'string') {
				const type = value[0];

				switch (type) {
					case 'Date':
						hydrated[index] = new Date(value[1]);
						break;

					case 'Set':
						const set = new Set();
						hydrated[index] = set;
						for (let i = 1; i < value.length; i += 1) {
							set.add(hydrate(value[i]));
						}
						break;

					case 'Map':
						const map = new Map();
						hydrated[index] = map;
						for (let i = 1; i < value.length; i += 2) {
							map.set(hydrate(value[i]), hydrate(value[i + 1]));
						}
						break;

					case 'RegExp':
						hydrated[index] = new RegExp(value[1], value[2]);
						break;

					case 'Object': {
						const wrapped_index = value[1];

						if (
							typeof values[wrapped_index] === 'object' &&
							values[wrapped_index][0] !== 'BigInt'
						) {
							// avoid infinite recusion in case of malformed input
							throw new Error('Invalid input');
						}

						hydrated[index] = Object(hydrate(wrapped_index));
						break;
					}

					case 'BigInt':
						hydrated[index] = BigInt(value[1]);
						break;

					case 'null':
						const obj = Object.create(null);
						hydrated[index] = obj;
						for (let i = 1; i < value.length; i += 2) {
							if (value[i] === '__proto__') {
								throw new Error('Cannot parse an object with a `__proto__` property');
							}

							obj[value[i]] = hydrate(value[i + 1]);
						}
						break;

					case 'Int8Array':
					case 'Uint8Array':
					case 'Uint8ClampedArray':
					case 'Int16Array':
					case 'Uint16Array':
					case 'Float16Array':
					case 'Int32Array':
					case 'Uint32Array':
					case 'Float32Array':
					case 'Float64Array':
					case 'BigInt64Array':
					case 'BigUint64Array':
					case 'DataView': {
						if (values[value[1]][0] !== 'ArrayBuffer') {
							// without this, if we receive malformed input we could
							// end up trying to hydrate in a circle or allocate
							// huge amounts of memory when we call `new TypedArrayConstructor(buffer)`
							throw new Error('Invalid data');
						}

						const TypedArrayConstructor = globalThis[type];
						const buffer = hydrate(value[1]);

						hydrated[index] =
							value[2] !== undefined
								? new TypedArrayConstructor(buffer, value[2], value[3])
								: new TypedArrayConstructor(buffer);

						break;
					}

					case 'ArrayBuffer': {
						const base64 = value[1];
						if (typeof base64 !== 'string') {
							throw new Error('Invalid ArrayBuffer encoding');
						}
						const arraybuffer = decode64(base64);
						hydrated[index] = arraybuffer;
						break;
					}

					case 'Temporal.Duration':
					case 'Temporal.Instant':
					case 'Temporal.PlainDate':
					case 'Temporal.PlainTime':
					case 'Temporal.PlainDateTime':
					case 'Temporal.PlainMonthDay':
					case 'Temporal.PlainYearMonth':
					case 'Temporal.ZonedDateTime': {
						const temporalName = type.slice(9);
						// @ts-expect-error TS doesn't know about Temporal yet
						hydrated[index] = Temporal[temporalName].from(value[1]);
						break;
					}

					case 'URL': {
						const url = new URL(value[1]);
						hydrated[index] = url;
						break;
					}

					case 'URLSearchParams': {
						const url = new URLSearchParams(value[1]);
						hydrated[index] = url;
						break;
					}

					default:
						throw new Error(`Unknown type ${type}`);
				}
			} else if (value[0] === SPARSE) {
				// Sparse array encoding: [SPARSE, length, idx, val, idx, val, ...]
				const len = value[1];

				if (!is_valid_array_len(len)) {
					throw new Error('Invalid input');
				}

				/** @type {any[]} */
				const array = [];
				hydrated[index] = array;

				// Setting `array.length = len` (or equivalently calling `new Array(len)`)
				// on an untrusted `len` is a DoS vector: V8 eagerly allocates a
				// contiguous backing store for array lengths below ~10^8, so a
				// small payload with a huge declared length can force arbitrary
				// memory allocation. Touching the largest-possible index first
				// forces V8 into dictionary-elements mode, where `length` is
				// just a number and no contiguous allocation occurs.
				array[MAX_ARRAY_INDEX] = undefined;
				delete array[MAX_ARRAY_INDEX];

				for (let i = 2; i < value.length; i += 2) {
					const idx = value[i];

					if (!is_valid_array_index(idx) || idx >= len) {
						throw new Error('Invalid input');
					}

					array[idx] = hydrate(value[i + 1]);
				}

				array.length = len;
			} else {
				const array = new Array(value.length);
				hydrated[index] = array;

				for (let i = 0; i < value.length; i += 1) {
					const n = value[i];
					if (n === HOLE) continue;

					array[i] = hydrate(n);
				}
			}
		} else {
			/** @type {Record<string, any>} */
			const object = {};
			hydrated[index] = object;

			for (const key of Object.keys(value)) {
				if (key === '__proto__') {
					throw new Error('Cannot parse an object with a `__proto__` property');
				}

				const n = value[key];
				object[key] = hydrate(n);
			}
		}

		return hydrated[index];
	}

	return hydrate(0);
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_B6kKz45f.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/caterpillar-invest-diary/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://xdh725.github.io", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
objectType({
  tags: arrayType(stringType()).optional(),
  maxAge: numberType().optional(),
  lastModified: dateType().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, {})?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames,
  liveCollections
}) {
  return async function getEntry(collectionOrLookupObject, lookup) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!lookup)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = lookup;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
      });
    }
    if (typeof lookupId === "object") {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `The entry identifier must be a string. Received object.`
      });
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      if (entry2.legacyId) {
        return emulateLegacyEntry({ ...entry2, collection });
      }
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(
        `The collection ${JSON.stringify(collection)} does not exist. Please ensure it is defined in your content config.`
      );
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_DnebZ8lE.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, {}).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new j(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}
function defineCollection(config) {
  if (config.type === "live") {
    throw new AstroError({
      ...LiveContentConfigError,
      message: LiveContentConfigError.message(
        "Collections with type `live` must be defined in a `src/live.config.ts` file."
      )
    });
  }
  return defineCollection$1(config);
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
	liveCollections,
});

async function getRawSortedPosts() {
  const allBlogPosts = await getCollection("posts", ({ data }) => {
    return data.draft !== true ;
  });
  const sorted = allBlogPosts.sort((a, b) => {
    const dateA = new Date(a.data.published);
    const dateB = new Date(b.data.published);
    return dateA > dateB ? -1 : 1;
  });
  return sorted;
}
async function getSortedPosts() {
  const sorted = await getRawSortedPosts();
  for (let i = 1; i < sorted.length; i++) {
    sorted[i].data.nextSlug = sorted[i - 1].slug;
    sorted[i].data.nextTitle = sorted[i - 1].data.title;
  }
  for (let i = 0; i < sorted.length - 1; i++) {
    sorted[i].data.prevSlug = sorted[i + 1].slug;
    sorted[i].data.prevTitle = sorted[i + 1].data.title;
  }
  return sorted;
}
async function getSortedPostsList() {
  const sortedFullPosts = await getRawSortedPosts();
  const sortedPostsList = sortedFullPosts.map((post) => ({
    slug: post.slug,
    data: post.data
  }));
  return sortedPostsList;
}
async function getTagList() {
  const allBlogPosts = await getCollection("posts", ({ data }) => {
    return data.draft !== true ;
  });
  const countMap = {};
  allBlogPosts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      if (!countMap[tag]) countMap[tag] = 0;
      countMap[tag]++;
    });
  });
  const keys = Object.keys(countMap).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  return keys.map((key) => ({ name: key, count: countMap[key] }));
}
async function getCategoryList() {
  const allBlogPosts = await getCollection("posts", ({ data }) => {
    return data.draft !== true ;
  });
  const count = {};
  allBlogPosts.forEach((post) => {
    if (!post.data.category) {
      const ucKey = i18n(I18nKey.uncategorized);
      count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1;
      return;
    }
    const categoryName = typeof post.data.category === "string" ? post.data.category.trim() : String(post.data.category).trim();
    count[categoryName] = count[categoryName] ? count[categoryName] + 1 : 1;
  });
  const lst = Object.keys(count).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  const ret = [];
  for (const c of lst) {
    ret.push({
      name: c,
      count: count[c],
      url: getCategoryUrl(c)
    });
  }
  return ret;
}

const contentUtils = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	getCategoryList,
	getSortedPosts,
	getSortedPostsList,
	getTagList
}, Symbol.toStringTag, { value: 'Module' }));

export { id$1 as A, ja$1 as B, ko$1 as C, DEFAULT_OUTPUT_FORMAT as D, th$1 as E, tr$1 as F, vi$1 as G, zh_CN$1 as H, I18nKey as I, zh_TW$1 as J, translation as K, LinkPreset as L, urlUtils as M, contentUtils as N, VALID_SUPPORTED_FORMATS as V, getSortedPosts as a, getDir as b, getCategoryUrl as c, getTagUrl as d, getEntry as e, getSortedPostsList as f, getPostUrlBySlug as g, defineCollection as h, i18n as i, getCategoryList as j, getTagList as k, licenseConfig as l, pathsEqual as m, navBarConfig as n, joinPaths as o, profileConfig as p, isRemotePath as q, renderEntry as r, siteConfig as s, DEFAULT_HASH_PROPS as t, url as u, i18nKey as v, config$1 as w, config as x, en$1 as y, es$1 as z };
