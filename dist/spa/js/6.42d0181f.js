(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{1763:function(t,a,e){"use strict";var s=e("b14d"),o=e.n(s);o.a},"4e25":function(t,a,e){"use strict";var s=e("b163"),o=e.n(s);o.a},8578:function(t,a,e){"use strict";var s=e("d29d"),o=e.n(s);o.a},b14d:function(t,a,e){},b163:function(t,a,e){},d29d:function(t,a,e){},d7e1:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{attrs:{padding:""}},[e("Usuario",{key:t.$i18n.locale}),e("Filtro",{staticClass:"filtro",on:{clicked:t.DataChild}}),t._l(t.datos_evento,(function(a){return e("Evento",t._b({key:a.nombre_evento,staticClass:"evento"},"Evento",a,!1))})),e("q-btn",{staticClass:"boton_add",attrs:{round:"",color:"primary",icon:"add",size:"150%",to:"/new"}})],2)},o=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("q-card",{staticClass:"my-card"},[e("q-card-section",{staticClass:"fecha text-right"},[t._v(t._s(t.fecha_inicio))]),e("q-card-section",{attrs:{horizontal:""}},[e("q-img",{staticClass:"col-5",attrs:{src:t.foto}}),e("q-card-section",{attrs:{vertical:""}},[e("q-card-section",{attrs:{horizontal:""}},[e("div",{staticClass:"votos_"},[e("q-card-section",{staticClass:"votos"},[e("div",{staticClass:"votos_box"},[e("q-btn",{attrs:{size:"70%",flat:"",round:"",icon:"thumb_down"},on:{click:t.Restar}}),e("q-btn",{staticClass:"votos_evento",staticStyle:{"pointer-events":"none"},attrs:{size:"100%",flat:""}},[t._v(t._s(t.votos))]),e("q-btn",{attrs:{size:"70%",flat:"",round:"",icon:"thumb_up"},on:{click:t.Sumar}})],1)])],1)]),e("q-card-section",{staticClass:"titulo text-justify"},[t._v(t._s(t.nombre_evento))]),e("q-card-section",{staticClass:"ubicacion text-justify"},[t._v(t._s(t.isla))]),e("q-card-section",{staticClass:"precio text-justify"},[t._v(t._s(t.precio)+" €")])],1)],1),e("q-separator"),e("div",{staticClass:"opciones"},[e("q-card-actions",[e("div",{staticClass:"col-3 col-sm-3 text-center usuario"},[e("q-btn",{attrs:{size:"70%",flat:"",round:""}},[e("q-avatar",{attrs:{size:"200%"}},[e("img",{attrs:{src:this.foto_usuario}})]),e("q-btn",{attrs:{size:"70%",flat:""}},[t._v(t._s(t.usuario))])],1)],1),e("div",{staticClass:"col-3 col-sm-3 text-center calendario"},[e("q-btn",{attrs:{size:"70%",flat:"",round:"",icon:"save"}})],1),e("div",{staticClass:"col-3 col-sm-3 text-center comentarios"},[e("q-btn",{attrs:{size:"70%",flat:"",round:"",icon:"chat"}},[e("q-btn",{attrs:{size:"70%",flat:""}},[t._v(t._s(t.comentarios))])],1)],1),e("div",{staticClass:"col-3 col-sm-3 text-center evento"},[e("q-btn",{attrs:{size:"70%",unelevated:"",rounded:"",color:"primary"}},[t._v(t._s(t.$t("event")))])],1)])],1)],1),e("br")],1)},i=[],c=e("a13d"),r={name:"Evento",data:function(){return{}},props:{foto:{},nombre_evento:{},localizacion:{},precio:{},fecha_inicio:{},votos:{},comentarios:{},usuario:{},foto_usuario:{},isla:{},id:{}},methods:{Sumar:function(){var t=this,a=0;c["f"].collection("eventos").doc(this.id).get().then((function(e){a=e.data().votos,c["f"].collection("eventos").doc(t.id).update({votos:a+1})}))},Restar:function(){var t=this,a=0;c["f"].collection("eventos").doc(this.id).get().then((function(e){a=e.data().votos,c["f"].collection("eventos").doc(t.id).update({votos:a-1})}))}}},l=r,d=(e("4e25"),e("a6c2")),u=e("63c1"),v=e.n(u),m=e("5ce7"),f=e("7006"),b=e("0798"),p=e("ef9c"),h=e("3f5f"),_=e("84df"),q=e("d6e3"),C=Object(d["a"])(l,n,i,!1,null,null,null),g=C.exports;v()(C,"components",{QCard:m["a"],QCardSection:f["a"],QImg:b["a"],QBtn:p["a"],QSeparator:h["a"],QCardActions:_["a"],QAvatar:q["a"]});var x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-center saludo"},[e("q-toolbar",{},[e("div",{staticClass:".col-6 col-sm-6 negrita"},[e("div",{staticClass:"text-h6 q-mb-md text-center negrita saludo"},[t._v(t._s(t.saludo))]),e("div",{staticClass:"text-h6 q-mb-md text-center negrita saludo_2"},[t._v(t._s(t.saludo_2))])]),e("div",{staticClass:".col-4 col-sm-4"},[e("q-input",{staticClass:"q-ml-md bg-grey",attrs:{dark:"",dense:"",standout:"","input-class":"text-right"},scopedSlots:t._u([{key:"append",fn:function(){return[""===t.busqueda?e("q-icon",{attrs:{name:"search"}}):e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"clear"},on:{click:function(a){t.busqueda=""}}})]},proxy:!0}]),model:{value:t.busqueda,callback:function(a){t.busqueda=a},expression:"busqueda"}})],1),e("div",{staticClass:".col-2 col-sm-2 items-center foto"},[e("q-btn",{attrs:{round:""}},[e("q-avatar",{attrs:{size:"80px",label:"cuenta"}},[e("img",{attrs:{src:this.img}})]),e("q-menu",[e("div",{staticClass:"row no-wrap q-pa-md text-center"},[e("div",{staticClass:"column"},[e("div",{staticClass:"q-pa-md",attrs:{align:"center"}},[e("q-list",{staticClass:"asistencia"},[e("q-item",[e("q-item-section",{staticClass:"negrita"},[t._v(t._s(t.$t("settings")))])],1),e("q-separator",{staticStyle:{"max-width":"200px"},attrs:{inset:""}}),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[e("q-item-section",[e("q-item-label",[e("q-icon",{staticStyle:{"font-size":"2em"},attrs:{name:"person"}}),t._v("\n                        "+t._s(t.$t("profile"))+"\n                      ")],1)],1)],1),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[e("q-item-section",[e("q-item-label",[e("q-icon",{staticStyle:{"font-size":"2em"},attrs:{name:"alarm"}}),t._v("\n                        "+t._s(t.$t("alerts"))+"\n                      ")],1)],1)],1)],1)],1),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"primary",label:t.$t("signoff"),push:"",size:"sm"},on:{click:t.Salir}})],1)])])],1)],1)])],1)},Q=[],y=(e("6ac6"),{name:"Usuario",data:function(){return{saludo:this.$t("welcome")+" "+c["c"].currentUser.displayName.split(" ")[0],saludo_2:this.$t("mind"),busqueda:"",img:c["c"].currentUser.photoURL}},methods:{Salir:function(){var t=this;c["c"].signOut().then((function(){})).catch((function(t){console.log(t)})).then((function(){return t.$router.push("home")}))}}}),z=y,k=(e("8578"),e("66cf")),w=e("a3be"),$=e("19dc"),S=e("6496"),E=e("692f"),L=e("e0e9"),j=e("6c44"),B=e("dc7c"),I=e("a561"),O=e("f6b1"),U=Object(d["a"])(z,x,Q,!1,null,null,null),D=U.exports;v()(U,"components",{QToolbar:k["a"],QInput:w["a"],QIcon:$["a"],QBtn:p["a"],QAvatar:q["a"],QMenu:S["a"],QList:E["a"],QItem:L["a"],QItemSection:j["a"],QSeparator:h["a"],QItemLabel:B["a"]}),v()(U,"directives",{Ripple:I["a"],ClosePopup:O["a"]});var N=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[[e("div",{staticClass:"q-pa-md"},[e("q-toolbar",{staticClass:"bg-grey1 shadow-2 rounded-borders"},[e("q-tabs",{attrs:{shrink:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab",{attrs:{name:"tab1",label:t.$t("featured")}}),e("q-tab",{attrs:{name:"tab2",label:t.$t("new")}}),e("q-tab",{attrs:{name:"tab3",label:t.$t("location_user")}})],1),e("q-space"),e("q-select",{staticClass:"lugares",attrs:{color:"orange",outlined:"","label-color":"orange",options:t.options,label:t.$t("location")},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{attrs:{name:"place",color:"orange"}})]},proxy:!0}]),model:{value:t.model,callback:function(a){t.model=a},expression:"model"}})],1)],1)]],2)},R=[],T={name:"Filtro",data:function(){return{tab:"tab1",model:null,options:["Tenerife","Gran Canaria","La Palma","La Gomera","El Hierro","Lanzarote","Fuerteventura",""]}},updated:function(){this.$emit("clicked",this.tab,this.model)}},F=T,M=e("6471"),A=e("9ad2"),P=e("dc01"),G=e("f636"),J=Object(d["a"])(F,N,R,!1,null,null,null),H=J.exports;v()(J,"components",{QToolbar:k["a"],QBtn:p["a"],QTabs:M["a"],QTab:A["a"],QSpace:P["a"],QSelect:G["a"],QIcon:$["a"]});var Y={name:"Eventos",components:{Evento:g,Usuario:D,Filtro:H},data:function(){return{datos_evento:[],tab:"tab1",isla:""}},methods:{obtenerEvento:function(t){var a=this;this.datos_evento=[],t.get().then((function(t){t.forEach((function(t){var e={foto:"",nombre_evento:t.data().nombre_evento,localizacion:t.data().localizacion,precio:t.data().precio,fecha_inicio:t.data().fecha_inicio,votos:t.data().votos,comentarios:t.data().comentarios,usuario:t.data().usuario,isla:t.data().isla,id:t.id,foto_usuario:t.data().foto_usuario},s=c["g"].ref("eventos/"+t.id),o=s.child("foto");o.getDownloadURL().then((function(t){e.foto=t})),a.datos_evento.push(e)}))}))},DataChild:function(t,a){this.tab=t,this.isla=a,this.Mostrar()},Mostrar:function(){console.log("LEYENDO DOC");var t,a=c["f"].collection("eventos"),e=a.orderBy("votos","desc"),s=a.orderBy("fecha_creacion","desc"),o=a.orderBy("fecha_creacion","desc");"tab1"===this.tab?t=e:"tab2"===this.tab?t=s:"tab3"===this.tab&&(t=o),""!==this.isla&&(t=t.where("isla","==",this.isla)),this.obtenerEvento(t)}},mounted:function(){this.Mostrar()}},K=Y,V=(e("1763"),e("505d")),W=Object(d["a"])(K,s,o,!1,null,null,null);a["default"]=W.exports;v()(W,"components",{QPage:V["a"],QBtn:p["a"]})}}]);