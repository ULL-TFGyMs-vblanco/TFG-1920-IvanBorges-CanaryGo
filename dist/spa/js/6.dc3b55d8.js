(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"0456":function(t,a,e){"use strict";var s=e("098b"),o=e.n(s);o.a},"098b":function(t,a,e){},"80f9":function(t,a,e){"use strict";var s=e("d870"),o=e.n(s);o.a},"98f2":function(t,a,e){},d7a8:function(t,a,e){"use strict";var s=e("98f2"),o=e.n(s);o.a},d870:function(t,a,e){},dab5:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{attrs:{padding:""}},[e("Usuario",{key:t.$i18n.locale}),e("Filtro",{staticClass:"filtro",on:{clicked:t.onClickChild}}),t._l(t.datos_evento,(function(a){return e("Evento",t._b({key:a.nombre_evento,staticClass:"evento"},"Evento",a,!1))})),e("q-btn",{staticClass:"boton_add",attrs:{round:"",color:"primary",icon:"add",size:"150%",to:"/new"}})],2)},o=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("q-card",{staticClass:"my-card"},[e("q-card-section",{staticClass:"fecha text-right"},[t._v(t._s(t.fecha_inicio))]),e("q-card-section",{attrs:{horizontal:""}},[e("q-img",{staticClass:"col-5",attrs:{src:t.foto}}),e("q-card-section",{attrs:{vertical:""}},[e("q-card-section",{attrs:{horizontal:""}},[e("div",{staticClass:"votos_"},[e("q-card-section",{staticClass:"votos"},[e("div",{staticClass:"votos_box"},[e("q-btn",{attrs:{size:"70%",flat:"",round:"",icon:"thumb_down"},on:{click:t.Restar}}),e("q-btn",{staticClass:"votos_evento",staticStyle:{"pointer-events":"none"},attrs:{size:"100%",flat:""}},[t._v(t._s(t.votos))]),e("q-btn",{attrs:{size:"70%",flat:"",round:"",icon:"thumb_up"},on:{click:t.Sumar}})],1)])],1)]),e("q-card-section",{staticClass:"titulo text-justify"},[t._v(t._s(t.nombre_evento))]),e("q-card-section",{staticClass:"ubicacion text-justify"},[t._v(t._s(t.isla))]),e("q-card-section",{staticClass:"precio text-justify"},[t._v(t._s(t.precio)+" €")])],1)],1),e("q-separator"),e("div",{staticClass:"opciones"},[e("q-card-actions",[e("div",{staticClass:"col-3 col-sm-3 text-center usuario"},[e("q-btn",{attrs:{size:"70%",flat:"",round:""}},[e("q-avatar",{attrs:{size:"200%"}},[e("img",{attrs:{src:this.foto_usuario}})]),e("q-btn",{attrs:{size:"70%",flat:""}},[t._v(t._s(t.usuario))])],1)],1),e("div",{staticClass:"col-3 col-sm-3 text-center calendario"},[e("q-btn",{attrs:{size:"70%",flat:"",round:"",icon:"save"}})],1),e("div",{staticClass:"col-3 col-sm-3 text-center comentarios"},[e("q-btn",{attrs:{size:"70%",flat:"",round:"",icon:"chat"}},[e("q-btn",{attrs:{size:"70%",flat:""}},[t._v(t._s(t.comentarios))])],1)],1),e("div",{staticClass:"col-3 col-sm-3 text-center evento"},[e("q-btn",{attrs:{size:"70%",unelevated:"",rounded:"",color:"primary"}},[t._v(t._s(t.$t("event")))])],1)])],1)],1),e("br")],1)},i=[],c=e("fc1b"),r={name:"Evento",data:function(){return{}},props:{foto:{},nombre_evento:{},localizacion:{},precio:{},fecha_inicio:{},votos:{},comentarios:{},usuario:{},foto_usuario:{},isla:{},id:{}},methods:{Sumar:function(){var t=this,a=0;c["e"].collection("eventos").doc(this.id).get().then((function(e){a=e.data().votos,c["e"].collection("eventos").doc(t.id).update({votos:a+1})}))},Restar:function(){var t=this,a=0;c["e"].collection("eventos").doc(this.id).get().then((function(e){a=e.data().votos,c["e"].collection("eventos").doc(t.id).update({votos:a-1})}))}}},l=r,u=(e("80f9"),e("2877")),d=e("eebe"),m=e.n(d),p=e("f09f"),v=e("a370"),b=e("068f"),f=e("9c40"),q=e("eb85"),h=e("4b7e"),_=e("cb32"),C=Object(u["a"])(l,n,i,!1,null,null,null),g=C.exports;m()(C,"components",{QCard:p["a"],QCardSection:v["a"],QImg:b["a"],QBtn:f["a"],QSeparator:q["a"],QCardActions:h["a"],QAvatar:_["a"]});var x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-center saludo"},[e("q-toolbar",{},[e("div",{staticClass:".col-6 col-sm-6 negrita"},[e("div",{staticClass:"text-h6 q-mb-md text-center negrita saludo"},[t._v(t._s(t.saludo))]),e("div",{staticClass:"text-h6 q-mb-md text-center negrita saludo_2"},[t._v(t._s(t.saludo_2))])]),e("div",{staticClass:".col-4 col-sm-4"},[e("q-input",{staticClass:"q-ml-md bg-grey",attrs:{dark:"",dense:"",standout:"","input-class":"text-right"},scopedSlots:t._u([{key:"append",fn:function(){return[""===t.busqueda?e("q-icon",{attrs:{name:"search"}}):e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"clear"},on:{click:function(a){t.busqueda=""}}})]},proxy:!0}]),model:{value:t.busqueda,callback:function(a){t.busqueda=a},expression:"busqueda"}})],1),e("div",{staticClass:".col-2 col-sm-2 items-center foto"},[e("q-btn",{attrs:{round:""}},[e("q-avatar",{attrs:{size:"80px",label:"cuenta"}},[e("img",{attrs:{src:this.img}})]),e("q-menu",[e("div",{staticClass:"row no-wrap q-pa-md text-center"},[e("div",{staticClass:"column"},[e("div",{staticClass:"q-pa-md",attrs:{align:"center"}},[e("q-list",{staticClass:"asistencia"},[e("q-item",[e("q-item-section",{staticClass:"negrita"},[t._v(t._s(t.$t("settings")))])],1),e("q-separator",{staticStyle:{"max-width":"200px"},attrs:{inset:""}}),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[e("q-item-section",[e("q-item-label",[e("q-icon",{staticStyle:{"font-size":"2em"},attrs:{name:"person"}}),t._v("\n                        "+t._s(t.$t("profile"))+"\n                      ")],1)],1)],1),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[e("q-item-section",[e("q-item-label",[e("q-icon",{staticStyle:{"font-size":"2em"},attrs:{name:"alarm"}}),t._v("\n                        "+t._s(t.$t("alerts"))+"\n                      ")],1)],1)],1)],1)],1),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"primary",label:t.$t("signoff"),push:"",size:"sm"},on:{click:t.Salir}})],1)])])],1)],1)])],1)},Q=[],E=(e("28a5"),e("bc3a")),k=e.n(E),S={name:"Usuario",data:function(){return{saludo:"",saludo_2:this.$t("mind"),busqueda:"",img:""}},methods:{Salir:function(){var t=this;k()({method:"delete",url:"https://canarygo.herokuapp.com/autorizar",data:{opcion:"Salir"}}).then((function(a){t.$router.push("home")}),(function(t){console.log("EL ERROR ES",t)}))}},mounted:function(){var t=this;k()({method:"get",url:"https://canarygo.herokuapp.com/autorizar"}).then((function(a){console.log("USUARIO PAGINA",a),t.saludo=t.$t("welcome")+" "+a.data.displayName.split(" ")[0],t.img=a.data.photoURL}),(function(t){console.log("EL ERROR ES",t)}))}},y=S,z=(e("d7a8"),e("65c6")),$=e("27f9"),w=e("0016"),R=e("4e73"),L=e("1c1c"),O=e("66e5"),I=e("4074"),j=e("0170"),A=e("714f"),U=e("7f67"),N=Object(u["a"])(y,x,Q,!1,null,null,null),T=N.exports;m()(N,"components",{QToolbar:z["a"],QInput:$["a"],QIcon:w["a"],QBtn:f["a"],QAvatar:_["a"],QMenu:R["a"],QList:L["a"],QItem:O["a"],QItemSection:I["a"],QSeparator:q["a"],QItemLabel:j["a"]}),m()(N,"directives",{Ripple:A["a"],ClosePopup:U["a"]});var P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[[e("div",{staticClass:"q-pa-md"},[e("q-toolbar",{staticClass:"bg-grey1 shadow-2 rounded-borders"},[e("q-tabs",{attrs:{shrink:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab",{attrs:{name:"tab1",label:t.$t("featured")}}),e("q-tab",{attrs:{name:"tab2",label:t.$t("new")}}),e("q-tab",{attrs:{name:"tab3",label:t.$t("location_user")}})],1),e("q-space"),e("q-select",{staticClass:"lugares",attrs:{color:"orange",outlined:"","label-color":"orange",options:t.options,label:t.$t("location")},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{attrs:{name:"place",color:"orange"}})]},proxy:!0}]),model:{value:t.model,callback:function(a){t.model=a},expression:"model"}})],1)],1)]],2)},B=[],F={name:"Filtro",data:function(){return{tab:"tab1",model:"",options:["Tenerife","Gran Canaria","La Palma","La Gomera","El Hierro","Lanzarote","Fuerteventura",""]}},updated:function(){this.$emit("clicked",this.tab,this.model)}},M=F,D=e("429b"),G=e("7460"),J=e("2c91"),H=e("ddd8"),V=Object(u["a"])(M,P,B,!1,null,null,null),Y=V.exports;m()(V,"components",{QToolbar:z["a"],QBtn:f["a"],QTabs:D["a"],QTab:G["a"],QSpace:J["a"],QSelect:H["a"],QIcon:w["a"]});var K={name:"Eventos",components:{Evento:g,Usuario:T,Filtro:Y},data:function(){return{datos_evento:[],tab:"tab1",isla:""}},methods:{Mostrar:function(){var t=this;console.log("LEYENDO DOC"),k()({method:"put",url:"https://canarygo.herokuapp.com/eventos",data:{tipo:"Consultar",tab:this.tab,isla:this.isla}}).then((function(a){console.log("RESPUESTA DEL SERVER",a.data),t.datos_evento=a.data}),(function(t){console.log("EL ERROR ES",t)}))},onClickChild:function(t,a){this.tab=t,this.isla=a,this.Mostrar()}},mounted:function(){this.Mostrar()}},W=K,X=(e("0456"),e("9989")),Z=Object(u["a"])(W,s,o,!1,null,null,null);a["default"]=Z.exports;m()(Z,"components",{QPage:X["a"],QBtn:f["a"]})}}]);