(window.webpackJsonp=window.webpackJsonp||[]).push([[13,2,3],{308:function(t,e,l){"use strict";l.r(e);var r={name:"ExternalLink"},n=l(2),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"100%",height:"100%",viewBox:"0 0 24 24"}},[e("g",{staticClass:"transition",attrs:{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{d:"M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5"}}),t._v(" "),e("path",{attrs:{d:"M10 14L20 4"}}),t._v(" "),e("path",{attrs:{d:"M15 4h5v5"}})])])}),[],!1,null,null,null);e.default=component.exports},309:function(t,e,l){"use strict";l.r(e);var r={name:"Times"},n=l(2),component=Object(n.a)(r,(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"100%",height:"100%",viewBox:"0 0 24 24"}},[t("path",{attrs:{fill:"currentColor",d:"M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42z"}})])}),[],!1,null,null,null);e.default=component.exports},318:function(t,e,l){"use strict";l.r(e);l(28),l(31),l(45);var r=l(21),n=l(309),o=l(308),c=l(87),d={name:"Modal",components:{Times:n.default,GitHub:c.default,ExternalLink:o.default},computed:Object(r.c)({modal:"modal"}),methods:Object(r.b)({closeModal:"closeModal"})},m=l(2),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"fixed inset-0 bg-blur bg-gray-900 bg-opacity-50 transition-all duration-300 z-30",class:{"opacity-0 invisible":!t.modal.active,"opacity-100 visible":t.modal.active}},[t.modal.active?e("article",{staticClass:"bg-white dark:bg-gray-800 w-full max-w-4xl absolute top-0 md:top-1/2 left-0 md:left-1/2 bottom-0 md:bottom-auto md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-xl shadow-xl overflow-x-hidden overflow-y-auto"},[e("div",{staticClass:"px-8 py-4 bg-blur bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 sticky top-0 w-full flex items-center justify-between z-10"},[e("p",{staticClass:"text-xl"},[t._v("View project")]),t._v(" "),e("button",{staticClass:"h-8 w-8 grid place-items-center rounded-full transform transition text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-700 focus:bg-blue-100 dark:focus:bg-gray-700 outline-none",on:{click:t.closeModal}},[e("times",{staticClass:"h-2/3 w-2/3"})],1)]),t._v(" "),e("div",{staticClass:"px-8 py-4 md:pb-8 md:grid md:gap-8 md:grid-cols-2"},[e("div",{staticClass:"md:mb-0 h-60 md:h-80 rounded-xl overflow-hidden"},[e("img",{staticClass:"h-full w-full object-cover",attrs:{src:t.modal.content.cover_image,alt:"Project Name"}})]),t._v(" "),e("div",{staticClass:"py-4 md:py-0 relative md:max-h-96 overflow-x-hidden overflow-y-auto"},[e("h2",{staticClass:"mb-4 text-3xl font-bold"},[t._v(t._s(t.modal.content.name))]),t._v(" "),e("p",{staticClass:"leading-6"},[t._v("\n          "+t._s(t.modal.content.description)+"\n        ")]),t._v(" "),e("div",{staticClass:"mt-6 sticky top-full text-lg text-gray-600 dark:text-gray-400 flex items-center"},[e("a",{staticClass:"flex items-center transition hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400",attrs:{href:t.modal.content.github_link,target:"_blank",rel:"noreferrer"}},[e("div",{staticClass:"flex-shrink-0 h-8 w-8 grid place-items-center"},[e("git-hub",{staticClass:"h-2/3 w-2/3"})],1),t._v("\n            GitHub\n          ")]),t._v(" "),e("a",{staticClass:"ml-6 flex items-center transition hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400",attrs:{href:t.modal.content.live_link,target:"_blank",rel:"noreferrer"}},[e("div",{staticClass:"flex-shrink-0 h-8 w-8 grid place-items-center"},[e("external-link",{staticClass:"h-2/3 w-2/3"})],1),t._v("\n            Live\n          ")])])])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);