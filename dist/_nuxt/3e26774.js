(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2,3,4,5,6,7,8,9],{263:function(t,e,n){"use strict";n.r(e);var r={name:"ExternalLink"},l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"100%",height:"100%",viewBox:"0 0 24 24"}},[n("g",{staticClass:"transition",attrs:{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("path",{attrs:{d:"M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5"}}),t._v(" "),n("path",{attrs:{d:"M10 14L20 4"}}),t._v(" "),n("path",{attrs:{d:"M15 4h5v5"}})])])}),[],!1,null,null,null);e.default=component.exports},264:function(t,e,n){"use strict";n.r(e);var r={name:"Times"},l=n(2),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"100%",height:"100%",viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"currentColor",d:"M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42z"}})])}),[],!1,null,null,null);e.default=component.exports},265:function(t,e,n){"use strict";n.r(e);var r=n(7),l=(n(35),{name:"Header",data:function(){return{about:{}}},created:function(){this.getAbout()},methods:{getAbout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("about").fetch();case 2:n=e.sent,t.about=n;case 4:case"end":return e.stop()}}),e)})))()}}}),o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"\n      container\n      mx-auto\n      px-8\n      py-4\n      md:px-12 md:py-10\n      flex\n      items-center\n      min-h-screen\n      max-w-6xl\n    "},[t.about?n("main",[n("h1",{staticClass:"text-6xl md:text-7xl lg:text-8xl font-light"},[t._v("\n        "+t._s(t.about.name)+"\n      ")]),t._v(" "),n("h2",{staticClass:"\n          text-6xl\n          md:text-7xl\n          lg:text-8xl\n          font-bold\n          text-gray-500\n          dark:text-gray-400\n        "},[t._v("\n        "+t._s(t.about.title)+"\n      ")]),t._v(" "),n("p",{staticClass:"mt-4 max-w-2xl text-gray-500 dark:text-gray-400 leading-1"},[t._v("\n        "+t._s(t.about.bio)+"\n      ")])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},266:function(t,e,n){"use strict";n.r(e);var r=n(7),l=(n(35),n(46),n(137),n(27),n(41),{name:"About",data:function(){return{about:null}},computed:{description:function(){var t,e=this.about;return null!==e&&(t=e.description.split("\n")),t}},created:function(){this.getAbout()},methods:{getAbout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("about").fetch();case 2:n=e.sent,t.about=n;case 4:case"end":return e.stop()}}),e)})))()}}}),o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"about"}},[n("div",{staticClass:"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl"},[t._m(0),t._v(" "),t.about?n("div",{staticClass:"lg:grid lg:grid-cols-2"},[n("div",t._l(t.description,(function(desc,e){return n("p",{key:(e+1)*Math.random(),staticClass:"mb-2"},[t._v("\n                    "+t._s(desc)+"\n                ")])})),0),t._v(" "),n("div",{staticClass:"mt-6 lg:mt-0"},[n("div",{staticClass:"\n                        mx-auto\n                        relative\n                        h-72\n                        w-full\n                        max-w-md\n                        lg:w-72 lg:max-w-full\n                        rounded-xl\n                        shadow-xl\n                        overflow-hidden\n                    "},[n("div",{staticClass:"absolute inset-0"}),t._v(" "),n("img",{staticClass:"h-full w-full object-cover",attrs:{src:"/images/profile/"+t.about.image,alt:t.about.name}})])])]):t._e()])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-5 lg:mb-10 flex items-center"},[n("h1",{staticClass:"text-3xl md:text-4xl font-bold whitespace-nowrap"},[t._v("\n                About Us\n            ")]),t._v(" "),n("span",{staticClass:"ml-4 h-px w-64 bg-gray-300 dark:bg-gray-600"})])}],!1,null,null,null);e.default=component.exports},267:function(t,e,n){"use strict";n.r(e);var r=n(7),l=(n(35),{name:"Skill",data:function(){return{skills:null}},created:function(){this.getSkills()},methods:{getSkills:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("skills").fetch();case 2:n=e.sent,t.skills=n;case 4:case"end":return e.stop()}}),e)})))()}}}),o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"skills"}},[n("div",{staticClass:"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl"},[n("h1",{staticClass:"\n        mb-5\n        md:mb-10\n        text-3xl\n        md:text-4xl\n        font-bold\n        text-center\n        whitespace-nowrap\n      "},[t._v("\n      Skills\n    ")]),t._v(" "),t.skills?n("div",[n("ul",{staticClass:"mx-auto flex items-center justify-center flex-wrap max-w-3xl"},t._l(t.skills.skills,(function(e,r){return n("li",{key:(r+1)*Math.random(),staticClass:"\n            m-1\n            md:m-2\n            flex\n            items-center\n            border\n            dark:border-gray-700\n            rounded-xl\n            overflow-hidden\n          "},[n("div",{staticClass:"p-4 h-14 w-14 overflow-hidden"},[n("img",{staticClass:"w-full h-full object-contain",attrs:{src:"/images/skills/"+e.icon,alt:e.name}})]),t._v(" "),n("p",{staticClass:"px-4 text-sm md:text-base"},[t._v("\n            "+t._s(e.name)+"\n          ")])])})),0)]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},268:function(t,e,n){"use strict";n.r(e);var r=n(7),l=(n(35),{name:"Experience",data:function(){return{experience:[],activeTab:null}},created:function(){var t=this;this.getAbout().then((function(){return t.setActiveTab()}))},methods:{getAbout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("experience").sortBy("updatedAt").fetch();case 2:n=e.sent,t.experience=n;case 4:case"end":return e.stop()}}),e)})))()},setActiveTab:function(){this.experience.length>0&&(this.activeTab=this.experience[0].company)}}}),o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"experience"}},[n("div",{staticClass:"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl"},[t._m(0),t._v(" "),n("div",{staticClass:"md:flex"},[n("ul",{staticClass:"flex items-center overflow-x-auto md:overflow-visible md:block"},t._l(t.experience,(function(e,r){return n("li",{key:(r+1)*Math.random()},[n("button",{staticClass:"\n              px-4\n              py-3\n              whitespace-nowrap\n              text-left\n              block\n              w-full\n              border-b-2\n              md:border-b-0 md:border-l-2\n              dark:border-gray-600\n              transition\n              hover:text-blue-500 hover:bg-gray-100\n              dark:hover:text-cyan-400 dark:hover:bg-gray-800\n              focus:text-blue-500 focus:bg-gray-100\n              dark:focus:text-cyan-400 dark:focus:bg-gray-800\n              outline-none\n            ",class:{"text-gray-400 border-gray-300":t.activeTab!==e.company,"text-blue-500 dark:text-cyan-400 bg-gray-100 dark:bg-gray-800 border-blue-500 dark:border-cyan-400":t.activeTab===e.company},on:{click:function(n){t.activeTab=e.company}}},[t._v("\n            "+t._s(e.company)+"\n          ")])])})),0),t._v(" "),t._l(t.experience,(function(e,r){return n("div",{key:(r+1)*Math.random(),staticClass:"py-4 md:px-4 md:py-2",class:{hidden:t.activeTab!==e.company}},[n("div",{staticClass:"mb-2"},[n("h2",{staticClass:"text-xl md:text-2xl"},[t._v("\n            "+t._s(e.role)+"\n            "),n("a",{staticClass:"text-blue-500 dark:text-cyan-400",attrs:{href:e.company_website,target:"_blank",rel:"noreferrer"}},[t._v("@"+t._s(e.company))])]),t._v(" "),n("span",{staticClass:"text-sm text-gray-500 dark:text-gray-400"},[t._v("\n            "+t._s(e.duration)+" · "+t._s(e.contract.location)+"\n          ")])]),t._v(" "),n("p",{staticClass:"mb-2"},[t._v("\n          "+t._s(e.description)+"\n          ")]),t._v(" "),n("ul",{staticClass:"px-4 list-disc"},t._l(e.tasks,(function(e,i){return n("li",{key:(i+1)*Math.random(),staticClass:"mb-2"},[t._v("\n            "+t._s(e)+"\n          ")])})),0)])}))],2)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-5 md:mb-10 flex items-center"},[n("h1",{staticClass:"text-3xl md:text-4xl font-bold whitespace-nowrap"},[t._v("\n        Experience\n      ")]),t._v(" "),n("span",{staticClass:"ml-4 h-px w-64 bg-gray-300 dark:bg-gray-600"})])}],!1,null,null,null);e.default=component.exports},269:function(t,e,n){"use strict";n.r(e);var r=n(15),l=n(264),o=n(263),c=n(69),d={name:"Modal",components:{Times:l.default,GitHub:c.default,ExternalLink:o.default},computed:Object(r.c)({modal:"modal"}),methods:Object(r.b)({closeModal:"closeModal"})},m=n(2),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    fixed\n    inset-0\n    bg-blur bg-gray-900 bg-opacity-50\n    transition-all\n    duration-300\n    z-30\n  ",class:{"opacity-0 invisible":!t.modal.active,"opacity-100 visible":t.modal.active}},[t.modal.active?n("article",{staticClass:"\n      bg-white\n      dark:bg-gray-800\n      w-full\n      max-w-4xl\n      absolute\n      top-0\n      md:top-1/2\n      left-0\n      md:left-1/2\n      bottom-0\n      md:bottom-auto\n      md:transform\n      md:-translate-x-1/2\n      md:-translate-y-1/2\n      md:rounded-xl\n      shadow-xl\n      overflow-x-hidden overflow-y-auto\n    "},[n("div",{staticClass:"\n        px-8\n        py-4\n        bg-blur bg-white bg-opacity-90\n        dark:bg-gray-800 dark:bg-opacity-90\n        sticky\n        top-0\n        w-full\n        flex\n        items-center\n        justify-between\n        z-10\n      "},[n("p",{staticClass:"text-xl"},[t._v("View project")]),t._v(" "),n("button",{staticClass:"\n          h-8\n          w-8\n          grid\n          place-items-center\n          rounded-full\n          transform\n          transition\n          text-gray-600\n          dark:text-gray-400\n          hover:bg-blue-100\n          dark:hover:bg-gray-700\n          focus:bg-blue-100\n          dark:focus:bg-gray-700\n          outline-none\n        ",on:{click:t.closeModal}},[n("times",{staticClass:"h-2/3 w-2/3"})],1)]),t._v(" "),n("div",{staticClass:"px-8 py-4 md:pb-8 md:grid md:gap-8 md:grid-cols-2"},[n("div",{staticClass:"md:mb-0 h-60 md:h-80 rounded-xl overflow-hidden"},[n("img",{staticClass:"h-full w-full object-cover",attrs:{src:t.modal.content.cover_image,alt:"Project Name"}})]),t._v(" "),n("div",{staticClass:"\n          py-4\n          md:py-0\n          relative\n          md:max-h-96\n          overflow-x-hidden overflow-y-auto\n        "},[n("h2",{staticClass:"mb-4 text-3xl font-bold"},[t._v(t._s(t.modal.content.name))]),t._v(" "),n("p",{staticClass:"leading-6"},[t._v("\n          "+t._s(t.modal.content.description)+"\n        ")]),t._v(" "),n("div",{staticClass:"\n            mt-6\n            sticky\n            top-full\n            text-lg text-gray-600\n            dark:text-gray-400\n            flex\n            items-center\n          "},[n("a",{staticClass:"\n              flex\n              items-center\n              transition\n              hover:text-blue-500\n              dark:hover:text-cyan-400\n              focus:text-blue-500\n              dark:focus:text-cyan-400\n            ",attrs:{href:t.modal.content.github_link,target:"_blank",rel:"noreferrer"}},[n("div",{staticClass:"flex-shrink-0 h-8 w-8 grid place-items-center"},[n("git-hub",{staticClass:"h-2/3 w-2/3"})],1),t._v("\n            GitHub\n          ")]),t._v(" "),n("a",{staticClass:"\n              ml-6\n              flex\n              items-center\n              transition\n              hover:text-blue-500\n              dark:hover:text-cyan-400\n              focus:text-blue-500\n              dark:focus:text-cyan-400\n            ",attrs:{href:t.modal.content.live_link,target:"_blank",rel:"noreferrer"}},[n("div",{staticClass:"flex-shrink-0 h-8 w-8 grid place-items-center"},[n("external-link",{staticClass:"h-2/3 w-2/3"})],1),t._v("\n            Live\n          ")])])])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},270:function(t,e,n){"use strict";n.r(e);n(37),n(27),n(36),n(47),n(30),n(48);var r=n(7),l=n(21),o=(n(35),n(15)),c=n(263);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={name:"Project",components:{GitHub:n(69).default,ExternalLink:c.default},data:function(){return{projects:[]}},created:function(){this.getProjects()},methods:m(m({},Object(o.b)({openModal:"openModal"})),{},{getProjects:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("projects/featured").sortBy("createdAt").fetch();case 2:n=e.sent,t.projects=n;case 4:case"end":return e.stop()}}),e)})))()},trimDescription:function(t){return t.length>135?"".concat(t.substring(0,135),"..."):t}})},f=n(2),component=Object(f.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"projects"}},[n("div",{staticClass:"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl"},[n("h1",{staticClass:"\n        mb-5\n        md:mb-10\n        text-3xl\n        md:text-4xl\n        font-bold\n        text-center\n        whitespace-nowrap\n      "},[t._v("\n      Projects\n    ")]),t._v(" "),t._l(t.projects,(function(e,r){return n("div",{key:(r+1)*Math.random(),staticClass:"\n        mx-auto\n        mb-10\n        md:mb-16\n        relative\n        lg:flex lg:items-center\n        rounded-xl\n        overflow-hidden\n      ",class:{"text-right flex-row":r%2==0,"text-left flex-row-reverse":r%2!=0}},[n("div",{staticClass:"h-80 lg:max-w-xl relative rounded-xl overflow-hidden shadow-xl"},[n("div",{staticClass:"hidden lg:block absolute inset-0"}),t._v(" "),n("img",{staticClass:"h-full w-full object-cover",attrs:{src:e.cover_image,alt:e.name}})]),t._v(" "),n("div",{staticClass:"\n          p-4\n          md:p-6\n          lg:p-0\n          flex\n          items-center\n          absolute\n          text-gray-200\n          lg:text-gray-900 lg:dark:text-gray-200\n          bg-blue-900 bg-opacity-90\n          dark:bg-green-900 dark:bg-opacity-90\n          inset-0\n          lg:relative lg:bg-transparent lg:dark:bg-transparent\n          z-10\n        ",class:{"lg:-ml-12 lg:-mr-0":r%2==0,"lg:-ml-0 lg:-mr-12":r%2!=0}},[n("div",[n("h2",{staticClass:"mb-2 md:mb-4 font-bold text-xl md:text-3xl tracking-tight"},[t._v("\n            "+t._s(e.name)+"\n          ")]),t._v(" "),n("div",{staticClass:"\n              lg:p-4\n              lg:bg-gray-100\n              lg:dark:bg-gray-800\n              lg:shadow-xl\n              lg:rounded-lg\n            "},[n("p",[t._v("\n              "+t._s(t.trimDescription(e.description))+"\n              "),t.trimDescription(e.description).length>135?n("button",{staticClass:"text-blue-500 dark:text-cyan-400 underline",on:{click:function(n){return t.openModal(e)}}},[t._v("\n                Read more\n              ")]):t._e()])]),t._v(" "),n("p",{staticClass:"\n              mt-2\n              md:mt-4\n              font-sourcecode\n              text-gray-200\n              lg:text-gray-500 lg:dark:text-gray-400\n              rounded\n            "},t._l(e.languages,(function(e,i){return n("span",{key:(i+1)*Math.random()},[t._v("\n              "+t._s(e)+"\n            ")])})),0),t._v(" "),n("div",{staticClass:"\n              mt-2\n              md:mt-4\n              text-lg text-gray-200\n              lg:text-gray-500 lg:dark:text-gray-400\n              flex\n              items-center\n            ",class:{"justify-end":r%2==0}},[n("a",{staticClass:"\n                h-8\n                w-8\n                grid\n                place-items-center\n                hover:text-blue-500\n                focus:text-blue-500\n                dark:hover:text-cyan-400 dark:focus:text-cyan-400\n                rounded-full\n              ",attrs:{href:e.github_link,target:"_blank",rel:"noreferrer"}},[n("git-hub",{staticClass:"h-2/3 w-2/3"})],1),t._v(" "),n("a",{staticClass:"\n                ml-4\n                h-8\n                w-8\n                grid\n                place-items-center\n                hover:text-blue-500\n                focus:text-blue-500\n                dark:hover:text-cyan-400 dark:focus:text-cyan-400\n                rounded-full\n              ",attrs:{href:e.live_link,target:"_blank",rel:"noreferrer"}},[n("external-link",{staticClass:"h-2/3 w-2/3"})],1)])])])])}))],2)])}),[],!1,null,null,null);e.default=component.exports},282:function(t,e,n){"use strict";n.r(e);var r=n(15),l=n(265),o=n(266),c=n(267),d=n(268),m=n(269),x=n(270),f={components:{Header:l.default,About:o.default,Skill:c.default,Experience:d.default,Modal:m.default,Project:x.default},mounted:function(){this.closeMenu()},methods:Object(r.b)({closeMenu:"closeMenu"})},v=n(2),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("about"),t._v(" "),n("skill"),t._v(" "),n("experience"),t._v(" "),n("modal"),t._v(" "),n("project")],1)}),[],!1,null,null,null);e.default=component.exports}}]);