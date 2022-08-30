(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2,3,4,5,6,7,8,9,10,11,12,13],{308:function(t,e,r){"use strict";r.r(e);var n={name:"ExternalLink"},l=r(2),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"100%",height:"100%",viewBox:"0 0 24 24"}},[e("g",{staticClass:"transition",attrs:{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{d:"M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5"}}),t._v(" "),e("path",{attrs:{d:"M10 14L20 4"}}),t._v(" "),e("path",{attrs:{d:"M15 4h5v5"}})])])}),[],!1,null,null,null);e.default=component.exports},309:function(t,e,r){"use strict";r.r(e);var n={name:"Times"},l=r(2),component=Object(l.a)(n,(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"100%",height:"100%",viewBox:"0 0 24 24"}},[t("path",{attrs:{fill:"currentColor",d:"M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42z"}})])}),[],!1,null,null,null);e.default=component.exports},310:function(t,e,r){"use strict";r.r(e);r(28);var n=r(9),l=(r(36),{name:"Header",data:function(){return{about:{}}},created:function(){this.getAbout()},methods:{getAbout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("about").fetch();case 2:r=e.sent,t.about=r;case 4:case"end":return e.stop()}}),e)})))()}}}),c=r(2),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("header",[e("div",{staticClass:"container mx-auto px-8 py-4 md:px-12 md:py-10 flex items-center min-h-screen max-w-6xl"},[t.about?e("main",[e("h1",{staticClass:"text-8xl text-center font-semibold md:text-7xl lg:text-8xl font-light"},[t._v("\n        "+t._s(t.about.name)+"\n      ")]),t._v(" "),e("h2",{staticClass:"text-6xl md:text-7xl lg:text-8xl font-bold text-lime-700 text-center hover:text-lime-500 dark:text-gray-400 dark:hover:text-gray-300"},[t._v("\n        "+t._s(t.about.title)+"\n      ")]),t._v(" "),e("p",{staticClass:"text-2xl mt-4 text-gray-500 text-center dark:text-gray-400 leading-1"},[t._v("\n        "+t._s(t.about.bio)+"\n      ")])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},311:function(t,e,r){"use strict";r.r(e);r(31),r(45),r(28);var n=r(9),l=(r(36),r(32),r(153),{name:"About",data:function(){return{about:null}},computed:{description:function(){var t,e=this.about;return null!==e&&(t=e.description.split("\n")),t}},created:function(){this.getAbout()},methods:{getAbout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("about").fetch();case 2:r=e.sent,t.about=r;case 4:case"end":return e.stop()}}),e)})))()}}}),c=r(2),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"about"}},[e("div",{staticClass:"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl"},[t._m(0),t._v(" "),t.about?e("div",{staticClass:"lg:grid lg:grid-cols-2"},[e("div",t._l(t.description,(function(desc,r){return e("p",{key:(r+1)*Math.random(),staticClass:"mb-2 text-xl"},[t._v("\n                    "+t._s(desc)+"\n                ")])})),0),t._v(" "),e("div",{staticClass:"mt-0 lg:mt-0"},[e("div",{staticClass:"mx-auto relative h-72 w-full max-w-md lg:w-72 lg:max-w-full rounded-xl shadow-xl overflow-hidden"},[e("div",{staticClass:"absolute inset-0"}),t._v(" "),e("img",{staticClass:"h-full w-full object-cover",attrs:{src:"/images/profile/".concat(t.about.image),alt:t.about.name}})])])]):t._e()])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-5 lg:mb-10 flex items-center"},[e("h1",{staticClass:"text-3xl md:text-4xl font-bold whitespace-nowrap"},[t._v("\n                About Us\n            ")]),t._v(" "),e("span",{staticClass:"ml-4 h-px w-64 bg-gray-300 dark:bg-gray-600"})])}],!1,null,null,null);e.default=component.exports},312:function(t,e,r){"use strict";r.r(e);r(31),r(45);var n=r(9),l=(r(36),r(32),r(153),{name:"Buy",data:function(){return{buy:null}},computed:{description:function(){var t,e=this.buy;return null!==e&&(t=e.description.split("\n")),t}},created:function(){this.getBuy()},methods:{getBuy:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("buy").fetch();case 2:r=e.sent,t.buy=r;case 4:case"end":return e.stop()}}),e)})))()}}}),c=r(2),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"buy"}},[e("div",{staticClass:"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl"},[t._m(0),t._v(" "),t.buy?e("div",{staticClass:"lg:grid lg:grid-cols-1"},[e("div",t._l(t.description,(function(desc,r){return e("p",{key:(r+1)*Math.random(),staticClass:"mb-2 text-xl"},[t._v("\n                    "+t._s(desc)+"\n                ")])})),0)]):t._e()])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-5 lg:mb-10 flex items-center"},[e("h1",{staticClass:"text-3xl md:text-4xl font-bold whitespace-nowrap"},[t._v("\n                Buy\n            ")]),t._v(" "),e("span",{staticClass:"ml-4 h-px w-64 bg-gray-300 dark:bg-gray-600"})])}],!1,null,null,null);e.default=component.exports},313:function(t,e,r){"use strict";r.r(e);r(31),r(45);var n=r(9),l=(r(36),r(32),r(153),{name:"Sell",data:function(){return{sell:null}},computed:{description:function(){var t,e=this.sell;return null!==e&&(t=e.description.split("\n")),t}},created:function(){this.getSell()},methods:{getSell:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("sell").fetch();case 2:r=e.sent,t.sell=r;case 4:case"end":return e.stop()}}),e)})))()}}}),c=r(2),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"sell"}},[e("div",{staticClass:"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl"},[t._m(0),t._v(" "),t.sell?e("div",{staticClass:"lg:grid lg:grid-cols-1"},[e("div",t._l(t.description,(function(desc,r){return e("p",{key:(r+1)*Math.random(),staticClass:"mb-2 text-xl"},[t._v("\n                    "+t._s(desc)+"\n                ")])})),0)]):t._e()])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-5 lg:mb-10 flex items-center"},[e("h1",{staticClass:"text-3xl md:text-4xl font-bold whitespace-nowrap"},[t._v("\n                Sell\n            ")]),t._v(" "),e("span",{staticClass:"ml-4 h-px w-64 bg-gray-300 dark:bg-gray-600"})])}],!1,null,null,null);e.default=component.exports},314:function(t,e,r){"use strict";r.r(e);r(31),r(45);var n=r(9),l=(r(36),r(32),r(153),{name:"partner",data:function(){return{partner:null}},computed:{description:function(){var t,e=this.partner;return null!==e&&(t=e.description.split("\n")),t}},created:function(){this.getPartner()},methods:{getPartner:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("partner").fetch();case 2:r=e.sent,t.partner=r;case 4:case"end":return e.stop()}}),e)})))()}}}),c=r(2),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"partner"}},[e("div",{staticClass:"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl"},[t._m(0),t._v(" "),t.partner?e("div",{staticClass:"lg:grid lg:grid-cols-1"},[e("div",t._l(t.description,(function(desc,r){return e("p",{key:(r+1)*Math.random(),staticClass:"mb-2 text-xl"},[t._v("\n                    "+t._s(desc)+"\n                ")])})),0)]):t._e()])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-5 lg:mb-10 flex items-center"},[e("h1",{staticClass:"text-3xl md:text-4xl font-bold whitespace-nowrap"},[t._v("\n                Become a Partner\n            ")]),t._v(" "),e("span",{staticClass:"ml-4 h-px w-64 bg-gray-300 dark:bg-gray-600"})])}],!1,null,null,null);e.default=component.exports},315:function(t,e,r){"use strict";r.r(e);r(31),r(45);var n=r(9),l=(r(36),r(32),r(153),{name:"farms",data:function(){return{farms:null}},computed:{description:function(){var t,e=this.farms;return null!==e&&(t=e.description.split("\n")),t}},created:function(){this.getFarms()},methods:{getFarms:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("farms").fetch();case 2:r=e.sent,t.farms=r;case 4:case"end":return e.stop()}}),e)})))()}}}),c=r(2),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"farms"}},[e("div",{staticClass:"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl"},[t._m(0),t._v(" "),t.farms?e("div",{staticClass:"lg:grid lg:grid-cols-1"},[e("div",t._l(t.description,(function(desc,r){return e("p",{key:(r+1)*Math.random(),staticClass:"mb-2 text-xl"},[t._v("\n                    "+t._s(desc)+"\n                ")])})),0)]):t._e()])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-5 lg:mb-10 flex items-center"},[e("h1",{staticClass:"text-3xl md:text-4xl font-bold whitespace-nowrap"},[t._v("\n                Visit our Farms\n            ")]),t._v(" "),e("span",{staticClass:"ml-4 h-px w-64 bg-gray-300 dark:bg-gray-600"})])}],!1,null,null,null);e.default=component.exports},316:function(t,e,r){"use strict";r.r(e);r(28);var n=r(9),l=(r(36),{name:"Skill",data:function(){return{skills:null}},created:function(){this.getSkills()},methods:{getSkills:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("skills").fetch();case 2:r=e.sent,t.skills=r;case 4:case"end":return e.stop()}}),e)})))()}}}),c=r(2),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"skills"}},[e("div",{staticClass:"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl"},[e("h1",{staticClass:"mb-5 md:mb-10 text-3xl md:text-4xl font-bold text-center whitespace-nowrap"},[t._v("\n      Skills\n    ")]),t._v(" "),t.skills?e("div",[e("ul",{staticClass:"mx-auto flex items-center justify-center flex-wrap max-w-3xl"},t._l(t.skills.skills,(function(r,n){return e("li",{key:(n+1)*Math.random(),staticClass:"m-1 md:m-2 flex items-center border dark:border-gray-700 rounded-xl overflow-hidden"},[e("div",{staticClass:"p-4 h-14 w-14 overflow-hidden"},[e("img",{staticClass:"w-full h-full object-contain",attrs:{src:"/images/skills/".concat(r.icon),alt:r.name}})]),t._v(" "),e("p",{staticClass:"px-4 text-sm md:text-base"},[t._v("\n            "+t._s(r.name)+"\n          ")])])})),0)]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},317:function(t,e,r){"use strict";r.r(e);r(31),r(45);var n=r(9),l=(r(36),{name:"Experience",data:function(){return{experience:[],activeTab:null}},created:function(){var t=this;this.getAbout().then((function(){return t.setActiveTab()}))},methods:{getAbout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("experience").sortBy("updatedAt").fetch();case 2:r=e.sent,t.experience=r;case 4:case"end":return e.stop()}}),e)})))()},setActiveTab:function(){this.experience.length>0&&(this.activeTab=this.experience[0].company)}}}),c=r(2),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"experience"}},[e("div",{staticClass:"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl"},[t._m(0),t._v(" "),e("div",{staticClass:"md:flex"},[e("ul",{staticClass:"flex items-center overflow-x-auto md:overflow-visible md:block"},t._l(t.experience,(function(r,n){return e("li",{key:(n+1)*Math.random()},[e("button",{staticClass:"px-4 py-3 whitespace-nowrap text-left block w-full border-b-2 md:border-b-0 md:border-l-2 dark:border-gray-600 transition hover:text-blue-500 hover:bg-gray-100 dark:hover:text-cyan-400 dark:hover:bg-gray-800 focus:text-blue-500 focus:bg-gray-100 dark:focus:text-cyan-400 dark:focus:bg-gray-800 outline-none",class:{"text-gray-400 border-gray-300":t.activeTab!==r.company,"text-blue-500 dark:text-cyan-400 bg-gray-100 dark:bg-gray-800 border-blue-500 dark:border-cyan-400":t.activeTab===r.company},on:{click:function(e){t.activeTab=r.company}}},[t._v("\n                        "+t._s(r.company)+"\n                    ")])])})),0),t._v(" "),t._l(t.experience,(function(r,n){return e("div",{key:(n+1)*Math.random(),staticClass:"py-4 md:px-4 md:py-2",class:{hidden:t.activeTab!==r.company}},[e("div",{staticClass:"mb-2"},[e("h2",{staticClass:"text-xl md:text-2xl"},[t._v("\n                        "+t._s(r.role)+"\n                        "),e("a",{staticClass:"text-blue-500 dark:text-cyan-400",attrs:{href:r.company_website,target:"_blank",rel:"noreferrer"}},[t._v("@"+t._s(r.company))])]),t._v(" "),e("span",{staticClass:"text-sm text-gray-500 dark:text-gray-400"},[t._v("\n                        "+t._s(r.duration)+" ·\n                        "+t._s(r.contract.location)+"\n                    ")])]),t._v(" "),e("p",{staticClass:"mb-2"},[t._v("\n                    "+t._s(r.description)+"\n                    ")]),t._v(" "),e("ul",{staticClass:"px-4 list-disc"},t._l(r.tasks,(function(r,i){return e("li",{key:(i+1)*Math.random(),staticClass:"mb-2"},[t._v("\n                        "+t._s(r)+"\n                    ")])})),0)])}))],2)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-5 md:mb-10 flex items-center"},[e("h1",{staticClass:"text-3xl md:text-4xl font-bold whitespace-nowrap"},[t._v("\n                What We Do\n            ")]),t._v(" "),e("span",{staticClass:"ml-4 h-px w-64 bg-gray-300 dark:bg-gray-600"})])}],!1,null,null,null);e.default=component.exports},318:function(t,e,r){"use strict";r.r(e);r(28),r(31),r(45);var n=r(21),l=r(309),c=r(308),o=r(87),d={name:"Modal",components:{Times:l.default,GitHub:o.default,ExternalLink:c.default},computed:Object(n.c)({modal:"modal"}),methods:Object(n.b)({closeModal:"closeModal"})},m=r(2),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"fixed inset-0 bg-blur bg-gray-900 bg-opacity-50 transition-all duration-300 z-30",class:{"opacity-0 invisible":!t.modal.active,"opacity-100 visible":t.modal.active}},[t.modal.active?e("article",{staticClass:"bg-white dark:bg-gray-800 w-full max-w-4xl absolute top-0 md:top-1/2 left-0 md:left-1/2 bottom-0 md:bottom-auto md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-xl shadow-xl overflow-x-hidden overflow-y-auto"},[e("div",{staticClass:"px-8 py-4 bg-blur bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 sticky top-0 w-full flex items-center justify-between z-10"},[e("p",{staticClass:"text-xl"},[t._v("View project")]),t._v(" "),e("button",{staticClass:"h-8 w-8 grid place-items-center rounded-full transform transition text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-700 focus:bg-blue-100 dark:focus:bg-gray-700 outline-none",on:{click:t.closeModal}},[e("times",{staticClass:"h-2/3 w-2/3"})],1)]),t._v(" "),e("div",{staticClass:"px-8 py-4 md:pb-8 md:grid md:gap-8 md:grid-cols-2"},[e("div",{staticClass:"md:mb-0 h-60 md:h-80 rounded-xl overflow-hidden"},[e("img",{staticClass:"h-full w-full object-cover",attrs:{src:t.modal.content.cover_image,alt:"Project Name"}})]),t._v(" "),e("div",{staticClass:"py-4 md:py-0 relative md:max-h-96 overflow-x-hidden overflow-y-auto"},[e("h2",{staticClass:"mb-4 text-3xl font-bold"},[t._v(t._s(t.modal.content.name))]),t._v(" "),e("p",{staticClass:"leading-6"},[t._v("\n          "+t._s(t.modal.content.description)+"\n        ")]),t._v(" "),e("div",{staticClass:"mt-6 sticky top-full text-lg text-gray-600 dark:text-gray-400 flex items-center"},[e("a",{staticClass:"flex items-center transition hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400",attrs:{href:t.modal.content.github_link,target:"_blank",rel:"noreferrer"}},[e("div",{staticClass:"flex-shrink-0 h-8 w-8 grid place-items-center"},[e("git-hub",{staticClass:"h-2/3 w-2/3"})],1),t._v("\n            GitHub\n          ")]),t._v(" "),e("a",{staticClass:"ml-6 flex items-center transition hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400",attrs:{href:t.modal.content.live_link,target:"_blank",rel:"noreferrer"}},[e("div",{staticClass:"flex-shrink-0 h-8 w-8 grid place-items-center"},[e("external-link",{staticClass:"h-2/3 w-2/3"})],1),t._v("\n            Live\n          ")])])])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},319:function(t,e,r){"use strict";r.r(e);r(28),r(31),r(45),r(38),r(37),r(13),r(55),r(34),r(56);var n=r(9),l=r(25),c=(r(36),r(21)),o=r(308);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={name:"Project",components:{GitHub:r(87).default,ExternalLink:o.default},data:function(){return{projects:[]}},created:function(){this.getProjects()},methods:m(m({},Object(c.b)({openModal:"openModal"})),{},{getProjects:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("projects/featured").sortBy("createdAt").fetch();case 2:r=e.sent,t.projects=r;case 4:case"end":return e.stop()}}),e)})))()},trimDescription:function(t){return t.length>135?"".concat(t.substring(0,135),"..."):t}})},f=r(2),component=Object(f.a)(x,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"projects"}},[e("div",{staticClass:"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl"},[e("h1",{staticClass:"mb-5 md:mb-10 text-3xl md:text-4xl font-bold text-center whitespace-nowrap"},[t._v("\n      Projects\n    ")]),t._v(" "),t._l(t.projects,(function(r,n){return e("div",{key:(n+1)*Math.random(),staticClass:"mx-auto mb-10 md:mb-16 relative lg:flex lg:items-center rounded-xl overflow-hidden",class:{"text-right flex-row":n%2==0,"text-left flex-row-reverse":n%2!=0}},[e("div",{staticClass:"h-80 lg:max-w-xl relative rounded-xl overflow-hidden shadow-xl"},[e("div",{staticClass:"hidden lg:block absolute inset-0"}),t._v(" "),e("img",{staticClass:"h-full w-full object-cover",attrs:{src:r.cover_image,alt:r.name}})]),t._v(" "),e("div",{staticClass:"p-4 md:p-6 lg:p-0 flex items-center absolute text-gray-200 lg:text-gray-900 lg:dark:text-gray-200 bg-blue-900 bg-opacity-90 dark:bg-green-900 dark:bg-opacity-90 inset-0 lg:relative lg:bg-transparent lg:dark:bg-transparent z-10",class:{"lg:-ml-12 lg:-mr-0":n%2==0,"lg:-ml-0 lg:-mr-12":n%2!=0}},[e("div",[e("h2",{staticClass:"mb-2 md:mb-4 font-bold text-xl md:text-3xl tracking-tight"},[t._v("\n            "+t._s(r.name)+"\n          ")]),t._v(" "),e("div",{staticClass:"lg:p-4 lg:bg-gray-100 lg:dark:bg-gray-800 lg:shadow-xl lg:rounded-lg"},[e("p",[t._v("\n              "+t._s(t.trimDescription(r.description))+"\n              "),t.trimDescription(r.description).length>135?e("button",{staticClass:"text-blue-500 dark:text-cyan-400 underline",on:{click:function(e){return t.openModal(r)}}},[t._v("\n                Read more\n              ")]):t._e()])]),t._v(" "),e("p",{staticClass:"mt-2 md:mt-4 font-sourcecode text-gray-200 lg:text-gray-500 lg:dark:text-gray-400 rounded"},t._l(r.languages,(function(r,i){return e("span",{key:(i+1)*Math.random()},[t._v("\n              "+t._s(r)+"\n            ")])})),0),t._v(" "),e("div",{staticClass:"mt-2 md:mt-4 text-lg text-gray-200 lg:text-gray-500 lg:dark:text-gray-400 flex items-center",class:{"justify-end":n%2==0}},[e("a",{staticClass:"h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full",attrs:{href:r.github_link,target:"_blank",rel:"noreferrer"}},[e("git-hub",{staticClass:"h-2/3 w-2/3"})],1),t._v(" "),e("a",{staticClass:"ml-4 h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full",attrs:{href:r.live_link,target:"_blank",rel:"noreferrer"}},[e("external-link",{staticClass:"h-2/3 w-2/3"})],1)])])])])}))],2)])}),[],!1,null,null,null);e.default=component.exports},331:function(t,e,r){"use strict";r.r(e);var n=r(21),l=r(310),c=r(311),o=r(312),d=r(313),m=r(314),x=r(315),f=(r(316),r(317),r(318)),v=(r(319),{components:{Header:l.default,About:c.default,Buy:o.default,Sell:d.default,Partner:m.default,Farms:x.default,Modal:f.default},mounted:function(){this.closeMenu()},methods:Object(n.b)({closeMenu:"closeMenu"})}),h=r(2),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("Header"),t._v(" "),e("about"),t._v(" "),e("buy"),t._v(" "),e("sell"),t._v(" "),e("partner"),t._v(" "),e("farms"),t._v(" "),e("skill"),t._v(" "),e("experience"),t._v(" "),e("modal"),t._v(" "),e("project")],1)}),[],!1,null,null,null);e.default=component.exports}}]);