(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{587:function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return h}));var r=n(140),c={text:"mdi-home",to:r.c.home.to},o={text:r.c.hobby.title,to:r.c.hobby.to},l={text:r.c.projects.title,to:r.c.projects.to},d={text:r.c.about.title,to:r.c.about.to};function h(t,e){var n;return{text:null!==(n=t.shortTitle)&&void 0!==n?n:t.title,to:Object(r.a)(t,e).path}}},602:function(t,e,n){"use strict";n.r(e);var r=n(17),c=n(18),o=(n(69),n(21)),l=n(140),d=n(587),h=Object(o.a)({asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,o,d,h,f,j,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,c=t.$content,o=t.params,e.next=3,c("".concat(n.i18n.locale,"/projects"),o.slug).fetch();case 3:return d=e.sent,e.next=6,c("".concat(n.i18n.locale,"/projects")).only(["title","shortTitle","path","createdAt"]).sortBy("createdAt","desc").surround(o.slug).fetch();case 6:return h=e.sent,f=Object(r.a)(h,2),j=f[0],m=f[1],e.abrupt("return",{project:d,prev:Object(l.a)(j,n.i18n.locale),next:Object(l.a)(m,n.i18n.locale)});case 11:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.$t(this.project.title)}},mounted:function(){this.$store.commit("setBreadcrumbs",[d.d,d.e,Object(d.b)(this.project,this.$i18n.locale)])}}),f=n(20),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%"}},[n("article",[n("h1",[t._v(t._s(t.project.title))]),t._v(" "),n("p",[t._v(t._s(t.project.subtitle))]),t._v(" "),n("chip-list",{attrs:{elements:t.project.programs}}),t._v(" "),n("nuxt-content",{attrs:{document:t.project}}),t._v(" "),n("document-switcher",{attrs:{prev:t.prev,next:t.next}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ChipList:n(244).default,DocumentSwitcher:n(239).default})}}]);