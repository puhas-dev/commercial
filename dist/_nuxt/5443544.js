(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{271:function(t,n,e){"use strict";e.r(n);var l=e(7),r=(e(35),{name:"Skill",data:function(){return{skills:null}},created:function(){this.getSkills()},methods:{getSkills:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$content("skills").fetch();case 2:e=n.sent,t.skills=e;case 4:case"end":return n.stop()}}),n)})))()}}}),c=e(2),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{attrs:{id:"skills"}},[e("div",{staticClass:"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl"},[e("h1",{staticClass:"\n        mb-5\n        md:mb-10\n        text-3xl\n        md:text-4xl\n        font-bold\n        text-center\n        whitespace-nowrap\n      "},[t._v("\n      Skills\n    ")]),t._v(" "),t.skills?e("div",[e("ul",{staticClass:"mx-auto flex items-center justify-center flex-wrap max-w-3xl"},t._l(t.skills.skills,(function(n,l){return e("li",{key:(l+1)*Math.random(),staticClass:"\n            m-1\n            md:m-2\n            flex\n            items-center\n            border\n            dark:border-gray-700\n            rounded-xl\n            overflow-hidden\n          "},[e("div",{staticClass:"p-4 h-14 w-14 overflow-hidden"},[e("img",{staticClass:"w-full h-full object-contain",attrs:{src:"/images/skills/"+n.icon,alt:n.name}})]),t._v(" "),e("p",{staticClass:"px-4 text-sm md:text-base"},[t._v("\n            "+t._s(n.name)+"\n          ")])])})),0)]):t._e()])])}),[],!1,null,null,null);n.default=component.exports}}]);