(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{612:function(t,n,e){"use strict";e.r(n);var r=e(37),o=Object(r.b)({props:{href:{type:String,required:!0},icon:{type:String,required:!0},name:{type:String,required:!0},color:{type:String,default:void 0}}}),c=e(34),l=e(39),m=e.n(l),d=e(298),h=e(204),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-btn",{staticClass:"ma-0",attrs:{rel:"noopener",icon:"",large:"",height:"48",width:"48",target:"_blank","aria-label":t.name,color:t.color,href:t.href}},[e("v-icon",{class:{"text--primary":!t.color},attrs:{large:""},domProps:{textContent:t._s(t.icon)}})],1)}),[],!1,null,null,null);n.default=component.exports;m()(component,{VBtn:d.a,VIcon:h.a})},635:function(t,n,e){"use strict";e.r(n);var r=e(37),o=Object(r.b)({data:function(){return{accounts:[{name:"ArtStation",href:"https://www.artstation.com/keshyx",icon:"mdi-artstation",color:"#00AFEB"},{name:"DeviantArt",href:"https://www.deviantart.com/keshyx",icon:"mdi-deviantart",color:"#00E5A1"},{name:"Instagram",href:"https://www.instagram.com/keshyx_/",icon:"mdi-instagram",color:"#ED3651"},{name:"LinkedIn",href:"https://www.linkedin.com/in/magdalena-jirku-81bb16210/",icon:"mdi-linkedin",color:"#0077B0"},{name:"XING",href:"https://www.xing.com/profile/Magdalena_Jirku/cv",icon:"mdi-xing",color:"#006566"}]}}}),c=e(34),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"responsive-list"},t._l(t.accounts,(function(t,n){return e("account-link",{key:n,attrs:{name:t.name,icon:t.icon,href:t.href,color:t.color}})})),1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{AccountLink:e(612).default})}}]);