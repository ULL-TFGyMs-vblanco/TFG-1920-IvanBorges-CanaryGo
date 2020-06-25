(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"1f93":function(e,t,a){"use strict";var s=a("f76f"),i=a.n(s);i.a},"89a8":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row text-center"},[s("div",{staticClass:"q-pa-md",staticStyle:{width:"100%"},attrs:{id:"formulario"}},[s("img",{staticStyle:{width:"100px",height:"100px","border-radius":"20%"},attrs:{src:a("a7f7")}}),s("br"),s("br"),s("br"),s("form",{staticClass:"q-gutter-md",on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.onSubmit(t)},reset:function(t){return t.preventDefault(),t.stopPropagation(),e.onReset(t)}}},[s("q-input",{ref:"nombre",staticClass:"Nombre",attrs:{filled:"",label:e.$t("name"),hint:e.$t("name_hint"),type:"name","lazy-rules":"",rules:[function(t){return t&&t.length>0||e.$t("name_fail")}]},model:{value:e.nombre,callback:function(t){e.nombre=t},expression:"nombre"}}),s("q-input",{ref:"usuario",staticClass:"Usuario",attrs:{filled:"",label:e.$t("user"),hint:e.$t("user_hint"),type:"user","lazy-rules":"",rules:[function(t){return t&&t.length>0||e.$t("user_fail")}]},model:{value:e.usuario,callback:function(t){e.usuario=t},expression:"usuario"}}),s("q-select",{ref:"genero",staticClass:"Genero",attrs:{filled:"",options:e.opciones_genero,label:e.$t("gender"),hint:e.$t("gender_hint"),"lazy-rules":"",rules:[function(t){return t&&t.length>0||e.$t("gender_fail")}]},model:{value:e.genero,callback:function(t){e.genero=t},expression:"genero"}}),s("q-input",{ref:"fecha",staticClass:"Fecha",attrs:{filled:"",label:e.$t("date"),hint:e.$t("date_hint"),"lazy-rules":"",rules:[function(t){return t&&t.length>0||e.$t("date_fail")},function(t){return 10===t.length||e.$t("date_fail_2")},"date"]},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[s("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[s("q-date",{on:{input:function(){return e.$refs.qDateProxy.hide()}},model:{value:e.fecha,callback:function(t){e.fecha=t},expression:"fecha"}})],1)],1)]},proxy:!0}]),model:{value:e.fecha,callback:function(t){e.fecha=t},expression:"fecha"}}),s("q-input",{ref:"email",staticClass:"Email",attrs:{filled:"",label:e.$t("email"),hint:e.$t("email_hint"),type:"email","lazy-rules":"",rules:[function(t){return t&&t.length>0&&t.indexOf("@")>=0||e.$t("email_fail")}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),s("q-input",{ref:"contrasena",staticClass:"Contrasena",attrs:{filled:"",type:e.isPwd?"password":"text",label:e.$t("password"),hint:e.$t("password_hint"),"lazy-rules":"",rules:[function(t){return null!==t&&""!==t||e.$t("password_fail")}]},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.contrasena,callback:function(t){e.contrasena=t},expression:"contrasena"}}),s("q-input",{ref:"contrasena2",staticClass:"Contrasena2",attrs:{filled:"",type:e.isPwd?"password":"text",label:e.$t("password"),hint:e.$t("password_repeat"),"lazy-rules":"",rules:[function(t){return null!==t&&""!==t||e.$t("password_repeat_fail")},function(t){return t===e.contrasena||e.$t("password_repeat_fail_2")}]},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.contrasena2,callback:function(t){e.contrasena2=t},expression:"contrasena2"}}),s("div",{staticClass:"text-center"},[s("q-checkbox",{staticClass:"Terms",attrs:{name:"sesion",label:e.$t("terms")},model:{value:e.sesion,callback:function(t){e.sesion=t},expression:"sesion"}}),s("br"),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[s("q-item-section",[s("q-item-label",{staticStyle:{color:"#ec9718"}},[e._v(e._s(e.$t("terms2")))])],1)],1)],1),s("div",[s("q-btn",{staticClass:"Registro",attrs:{label:e.$t("register"),type:"submit",color:"primary"}}),s("q-btn",{staticClass:"Reset",attrs:{label:e.$t("clean"),type:"reset",color:"primary",flat:""}})],1)],1),s("LoginButtons",{key:e.$i18n.locale}),s("q-dialog",{model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[s("q-card",[s("q-card-section",[s("div",{staticClass:"text-h6"},[e._v(e._s(e.$t("alert")))])]),s("q-card-section",{staticClass:"q-pt-none"},[e._v(e._s(e.$t("email_verification")))]),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1)],1)],1)])},i=[],r=(a("6762"),a("2fdb"),a("fc1b"),a("1ff9")),n=a("bc3a"),o=a.n(n),l={name:"Signup",components:{LoginButtons:r["a"]},data:function(){return{alert:!1,confirm:!1,prompt:!1,nombre:null,usuario:null,genero:null,opciones_genero:[this.$t("male"),this.$t("female")],email:null,fecha:null,contrasena:null,contrasena2:null,isPwd:!0,sesion:!1}},methods:{onSubmit:function(){this.$refs.nombre.validate(),this.$refs.usuario.validate(),this.$refs.email.validate(),this.$refs.fecha.validate(),this.$refs.contrasena.validate(),this.$refs.contrasena2.validate(),this.$refs.genero.validate(),this.$refs.nombre.hasError||this.$refs.usuario.hasError||this.$refs.genero.hasError||this.$refs.email.hasError||this.$refs.fecha.hasError||this.$refs.contrasena.hasError||this.$refs.contrasena2.hasError?this.formHasError=!0:!0!==this.sesion?this.$q.notify({color:"negative",message:this.$t("register_fail"),position:"bottom",timeout:2e3,progress:!0}):this.Registrar()},onReset:function(){this.nombre=null,this.usuario=null,this.fecha=null,this.email=null,this.contrasena=null,this.contrasena2=null,this.genero=null,this.$refs.nombre.resetValidation(),this.$refs.usuario.resetValidation(),this.$refs.fecha.resetValidation(),this.$refs.email.resetValidation(),this.$refs.contrasena.resetValidation(),this.$refs.contrasena2.resetValidation(),this.$refs.genero.resetValidation()},Registrar:function(){var e=this;o()({method:"put",url:"https://canarygo.herokuapp.com/autorizar",data:{tipo:"Registro",correo:this.email,contrasena2:this.contrasena2,nombre:this.nombre,genero:this.genero,fecha:this.fecha,usuario:this.usuario}}).then((function(t){console.log("RESPUESTA DEL SERVER",t),"Error al crear usuario"===t.data?e.Fail(e.$t("register_fail_2")):t.data.includes("Usuario creado")&&(e.Success(),e.alert=!0)}),(function(e){console.log("EL ERROR ES",e)}))},Success:function(){this.$q.notify({icon:"done",color:"positive",message:this.$t("register_sucess"),position:"bottom",timeout:1e3,progress:!0})},Fail:function(e){this.$q.notify({color:"negative",message:e,position:"bottom",timeout:2e3,progress:!0})}}},c=l,u=(a("1f93"),a("2877")),f=a("27f9"),p=a("ddd8"),d=a("0016"),h=a("7cbe"),m=a("52ee"),b=a("8f8e"),$=a("66e5"),g=a("4074"),v=a("0170"),_=a("9c40"),y=a("24e8"),q=a("f09f"),w=a("a370"),x=a("4b7e"),C=a("714f"),k=a("7f67"),E=a("eebe"),S=a.n(E),P=Object(u["a"])(c,s,i,!1,null,null,null);t["default"]=P.exports;S()(P,"components",{QInput:f["a"],QSelect:p["a"],QIcon:d["a"],QPopupProxy:h["a"],QDate:m["a"],QCheckbox:b["a"],QItem:$["a"],QItemSection:g["a"],QItemLabel:v["a"],QBtn:_["a"],QDialog:y["a"],QCard:q["a"],QCardSection:w["a"],QCardActions:x["a"]}),S()(P,"directives",{Ripple:C["a"],ClosePopup:k["a"]})},f76f:function(e,t,a){}}]);