(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{265:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(35),{name:"Header",data:function(){return{about:{}}},created:function(){this.getAbout()},methods:{getAbout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("about").fetch();case 2:n=e.sent,t.about=n;case 4:case"end":return e.stop()}}),e)})))()}}}),c=n(2),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"\n      container\n      mx-auto\n      px-8\n      py-4\n      md:px-12 md:py-10\n      flex\n      items-center\n      min-h-screen\n      max-w-6xl\n    "},[t.about?n("main",[n("h1",{staticClass:"text-8xl text-center font-semibold md:text-7xl lg:text-8xl font-light"},[t._v("\n        "+t._s(t.about.name)+"\n      ")]),t._v(" "),n("h2",{staticClass:"\n          text-6xl\n          md:text-7xl\n          lg:text-8xl\n          font-bold\n          text-lime-700\n          text-center\n          hover:text-lime-500\n          dark:text-gray-400\n          dark:hover:text-gray-300\n        "},[t._v("\n        "+t._s(t.about.title)+"\n      ")]),t._v(" "),n("p",{staticClass:"text-2xl mt-4 text-gray-500 text-center dark:text-gray-400 leading-1"},[t._v("\n        "+t._s(t.about.bio)+"\n      ")])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports}}]);