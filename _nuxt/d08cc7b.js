(window.webpackJsonp=window.webpackJsonp||[]).push([[15,5,6,10],{511:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return v}));var o=n(130),r={text:"mdi-home",to:o.c.home.to},c={text:o.c.hobby.title,to:o.c.hobby.to},l={text:o.c.projects.title,to:o.c.projects.to},h={text:o.c.about.title,to:o.c.about.to};function v(t,e){return{text:t.title,to:Object(o.a)(t,e).path}}},512:function(t,e,n){var content=n(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("e998d72e",content,!0,{sourceMap:!1})},521:function(t,e,n){"use strict";n(512)},522:function(t,e,n){var o=n(16)(!1);o.push([t.i,".link-container{width:100%;display:flex;justify-content:space-between}.link-container a{display:flex;align-items:center;color:unset!important;font-size:clamp(1rem,2vw,1.25rem);font-weight:700;text-decoration:none}.link-container a .v-icon+span,.link-container a span+.v-icon{margin-left:.25rem}.link-container a:hover span{text-decoration:underline}",""]),t.exports=o},523:function(t,e,n){var content=n(528);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("7e6cd361",content,!0,{sourceMap:!1})},524:function(t,e,n){"use strict";n.r(e);var o=n(46),r=Object(o.defineComponent)({props:{prev:{type:Object,default:void 0},next:{type:Object,default:void 0}}}),c=(n(521),n(54)),l=n(60),h=n.n(l),v=n(211),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"link-container"},[t.prev?n("nuxt-link",{staticClass:"mr-4",attrs:{to:t.prev.path}},[n("v-icon",{domProps:{textContent:t._s("mdi-chevron-left")}}),t._v(" "),n("span",[t._v(t._s(t.prev.title))])],1):n("span"),t._v(" "),t.next?n("nuxt-link",{staticStyle:{"text-align":"right"},attrs:{to:t.next.path}},[n("span",[t._v(t._s(t.next.title))]),t._v(" "),n("v-icon",{domProps:{textContent:t._s("mdi-chevron-right")}})],1):n("span")],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VIcon:v.a})},527:function(t,e,n){"use strict";n(523)},528:function(t,e,n){var o=n(16)(!1);o.push([t.i,".program-chip-container[data-v-361e72ab]{margin-top:-.5rem}.program-chip[data-v-361e72ab]{margin-top:.5rem}.program-chip[data-v-361e72ab]:not(:last-child){margin-right:.5rem}",""]),t.exports=o},529:function(t,e,n){var content=n(530);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("197fcea4",content,!0,{sourceMap:!1})},530:function(t,e,n){var o=n(16)(!1);o.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=o},534:function(t,e,n){"use strict";n.r(e);var o=n(46),r=Object(o.defineComponent)({props:{elements:{type:Array,required:!0}}}),c=(n(527),n(54)),l=n(60),h=n.n(l),v=(n(9),n(7),n(12),n(8),n(13),n(15)),d=n(2),f=(n(11),n(529),n(4)),m=n(123),x=n(82),_=n(29),y=n(152),j=n(20),k=n(57),w=n(85),O=n(153),C=n(10);function $(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function z(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var B=Object(f.a)(_.a,O.a,w.a,j.a,Object(y.a)("chipGroup"),Object(k.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return z(z(z(z({"v-chip":!0},w.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(w.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var n=Object(v.a)(e,2),o=n[0],r=n[1];t.$attrs.hasOwnProperty(o)&&Object(C.a)(o,r,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(x.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(m.b,t)},genClose:function(){var t=this;return this.$createElement(x.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),o=n.tag,data=n.data;data.attrs=z(z({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var r=this.textColor||this.outlined&&this.color;return t(o,this.setTextColor(r,data),e)}}),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"program-chip-container"},t._l(t.elements,(function(element,e){return n("v-chip",{key:e,staticClass:"program-chip"},[t._v("\n    "+t._s(element)+"\n  ")])})),1)}),[],!1,null,"361e72ab",null);e.default=component.exports;h()(component,{VChip:B})},537:function(t,e,n){"use strict";n.r(e);var o=n(46),r=Object(o.defineComponent)({props:{document:{type:Object,required:!0}}}),c=n(54),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",[n("h2",[t._v("Content")]),t._v(" "),n("ul",t._l(t.document.toc,(function(link){return n("li",{key:link.id},[n("NuxtLink",{attrs:{to:"#"+link.id},domProps:{textContent:t._s(link.text)}})],1)})),0)]),t._v(" "),n("p")])}),[],!1,null,null,null);e.default=component.exports},557:function(t,e,n){"use strict";n.r(e);var o=n(15),r=n(19),c=(n(65),n(46)),l=n(130),h=n(511),v=Object(c.defineComponent)({asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,h,v,d,f,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.$content,c=t.params,e.next=3,r("".concat(n.i18n.locale,"/projects"),c.slug).fetch();case 3:return h=e.sent,e.next=6,r("".concat(n.i18n.locale,"/projects")).only(["title","path","createdAt"]).sortBy("createdAt","desc").surround(c.slug).fetch();case 6:return v=e.sent,d=Object(o.a)(v,2),f=d[0],m=d[1],e.abrupt("return",{project:h,prev:Object(l.a)(f,n.i18n.locale),next:Object(l.a)(m,n.i18n.locale)});case 11:case"end":return e.stop()}}),e)})))()},mounted:function(){this.$store.commit("setTitle",l.c.projects.title),this.$store.commit("setBreadcrumbs",[h.d,h.e,Object(h.b)(this.project,this.$i18n.locale)])}}),d=n(54),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-container"},[n("article",[n("h1",[t._v(t._s(t.project.title))]),t._v(" "),n("p",[t._v(t._s(t.project.date))]),t._v(" "),n("p",[n("chip-list",{attrs:{elements:t.project.programs}})],1),t._v(" "),n("table-of-contents",{directives:[{name:"show",rawName:"v-show",value:t.project.toc.length>0,expression:"project.toc.length > 0"}],attrs:{document:t.project}}),t._v(" "),n("nuxt-content",{attrs:{document:t.project}})],1),t._v(" "),n("document-switcher",{attrs:{prev:t.prev,next:t.next}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ChipList:n(534).default,TableOfContents:n(537).default,DocumentSwitcher:n(524).default})}}]);