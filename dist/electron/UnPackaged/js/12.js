(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"713b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{staticClass:"header",attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),n("q-toolbar-title",{staticClass:"header-text",staticStyle:{color:"white","font-size":"17px"}},[t._v("Canary Go")]),n("LanguageSelector")],1)],1),n("q-drawer",{attrs:{toggle:"",bordered:""},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v("Menu")]),t._l(t.essentialLinks,(function(e){return n("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))}))],2),n("q-item",{attrs:{clickable:"",tag:"a"},on:{click:function(e){return t.modooscuro()}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-toggle",{attrs:{color:"#ec9718",size:"28px"},on:{input:function(e){return t.modooscuro()}},model:{value:t.dark,callback:function(e){t.dark=e},expression:"dark"}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(t.$t("dark_mode")))]),n("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.$t("dark")))])],1)],1)],1),n("q-page-container",[n("router-view")],1)],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-item",{attrs:{clickable:"",tag:"a",target:"",to:t.link}},[t.icon?n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:t.icon}})],1):t._e(),n("q-item-section",[n("q-item-label",[t._v(t._s(t.$t(t.title)))]),n("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.$t(t.caption)))])],1)],1)},l=[],r={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:""},icon:{type:String,default:""}}},s=r,c=n("2877"),u=n("66e5"),d=n("4074"),p=n("0016"),g=n("0170"),f=n("eebe"),m=n.n(f),h=Object(c["a"])(s,o,l,!1,null,null,null),b=h.exports;m()(h,"components",{QItem:u["a"],QItemSection:d["a"],QIcon:p["a"],QItemLabel:g["a"]});var k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language"},[n("q-select",{staticStyle:{"min-width":"150px"},attrs:{options:t.langOptions,label:t.$t("language"),dense:"",borderless:"","emit-value":"","map-options":"","options-dense":""},model:{value:t.lang,callback:function(e){t.lang=e},expression:"lang"}})],1)},v=[],_={data:function(){return{lang:this.$i18n.locale,langOptions:[{value:"es",label:"Español"},{value:"en",label:"English"}]}},watch:{lang:function(t){this.$i18n.locale=t}}},q=_,w=n("ddd8"),$=Object(c["a"])(q,k,v,!1,null,null,null),Q=$.exports;m()($,"components",{QSelect:w["a"]});var L={name:"MainLayout",dark:"false",components:{EssentialLink:b,LanguageSelector:Q},data:function(){return{dark:!1,leftDrawerOpen:!1,essentialLinks:[{title:"introduction",caption:"offer",icon:"apps",link:"/home"},{title:"login",caption:"find",icon:"person",link:"./login"},{title:"register",caption:"adventure",icon:"person_add_disabled",link:"./signup"},{title:"event_section",caption:"event_caption",icon:"event_available",link:"./events"},{title:"event_add",caption:"event_add_caption",icon:"event_note",link:"./new"},{title:"update_user",caption:"user_caption",icon:"account_circle",link:"./update"}]}},methods:{modooscuro:function(){this.$q.dark.toggle(),this.botonoscuro()},botonoscuro:function(){this.$q.dark.isActive?this.dark=!0:this.dark=!1},Redirigir:function(){0===this.$store.state.store.datosUsuario.length&&"/login"!==this.$route.fullPath&&"/signup"!==this.$route.fullPath&&"/home"!==this.$route.fullPath&&"/reset"!==this.$route.fullPath&&"/info"!==this.$route.fullPath&&(this.$router.push("/login"),this.$q.notify({message:this.$t("must_login_register"),color:"red",textColor:"white",icon:"error"}))}},mounted:function(){},updated:function(){this.Redirigir()}},y=L,x=n("4d5a"),O=n("e359"),S=n("65c6"),E=n("9c40"),C=n("6ac5"),D=n("9404"),I=n("1c1c"),P=n("9564"),T=n("09e3"),j=Object(c["a"])(y,a,i,!1,null,null,null);e["default"]=j.exports;m()(j,"components",{QLayout:x["a"],QHeader:O["a"],QToolbar:S["a"],QBtn:E["a"],QToolbarTitle:C["a"],QDrawer:D["a"],QList:I["a"],QItemLabel:g["a"],QItem:u["a"],QItemSection:d["a"],QToggle:P["a"],QPageContainer:T["a"]})}}]);