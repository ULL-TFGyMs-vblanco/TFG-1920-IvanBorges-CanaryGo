(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"1f93":function(e,t,a){"use strict";var o=a("f44a"),s=a.n(o);s.a},"1ff9":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-box"},[a("a",{staticClass:"social-button",attrs:{href:"#",id:"facebook-connect"},on:{click:e.IniciarSesionFacebook}},[a("span",[e._v(e._s(e.facebook))])]),a("a",{staticClass:"social-button",attrs:{href:"#",id:"google-connect"},on:{click:e.IniciarSesionGoogle}},[a("span",[e._v(e._s(e.google))])])])},s=[],n=a("bc3a"),i=a.n(n),r=a("fc1b"),l={name:"LoginButtons",data:function(){return{google:this.$t("google"),facebook:this.$t("facebook")}},methods:{IniciarSesionGoogle:function(){var e=this,t=r["c"];r["b"].useDeviceLanguage(),t.setCustomParameters({login_hint:"user@example.com"});var a=!1;r["b"].signInWithPopup(t).catch((function(e){e.code,e.message,e.email,e.credential;a=!0})).then((function(e){var t=e.credential.accessToken,a=e.credential.idToken;e.user;return console.log("Token1 -> ",t),console.log("Token2 -> ",e.credential.idToken),a})).then((function(t){!0===a?e.Fail(e.$t("error_google")):i()({method:"put",url:"https://canarygo.herokuapp.com/autorizar",data:{tipo:"Login",tipo2:"Google",token:t,id_client:r["d"].client_id}}).then((function(t){console.log("RESPUESTA DEL SERVER",t),"Usuario logueado"===t.data?(e.Success(),e.$router.push("events")):e.Fail(e.$t("error_google"))}),(function(e){console.log("EL ERROR ES",e)}))}))},IniciarSesionFacebook:function(){var e=this;i()({method:"put",url:"https://canarygo.herokuapp.com/autorizar",data:{tipo:"Login",tipo2:"Facebook"}}).then((function(t){console.log("RESPUESTA DEL SERVER",t),"Usuario logueado"===t.data?(e.Success(),e.$router.push("events")):e.Fail(e.$t("error_facebook"))}),(function(e){console.log("EL ERROR ES",e)}))},Success:function(){this.$q.notify({icon:"done",color:"positive",message:this.$t("login_sucess"),position:"bottom",timeout:1e3,progress:!0}),this.$router.push("./events")},Fail:function(e){this.$q.notify({color:"negative",message:e,position:"bottom",timeout:2e3,progress:!0})}}},c=l,u=(a("98d2"),a("2877")),f=Object(u["a"])(c,o,s,!1,null,null,null);t["a"]=f.exports},"2b46":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"selector"},[a("picture-input",{key:e.$i18n.locale,ref:"foto",attrs:{id:"foto",width:this.anchura,height:this.altura,margin:"16",accept:"image/jpeg, image/png",size:"5",radius:"5","button-class":"primary","custom-strings":{upload:this.$t("done"),drag:this.$t("select"),change:this.$t("change")}},on:{change:e.onChange,"":function(e){}}})],1)},s=[],n=a("e597"),i={name:"Selectorarchivos",data:function(){return{info1:this.$t("select")}},props:{anchura:{},altura:{}},components:{PictureInput:n["a"]},methods:{onChange:function(e){document.getElementsByClassName("picture-preview")[0].setAttribute("style","height: 578px; z-index: 0; background: none;"),console.log("Nuevo archivo"),e?(console.log("Archivo leído."),this.image=e):console.log("FileReader no soportado")}}},r=i,l=(a("3f53"),a("2877")),c=Object(l["a"])(r,o,s,!1,null,null,null);t["a"]=c.exports},"3f53":function(e,t,a){"use strict";var o=a("8568"),s=a.n(o);s.a},8568:function(e,t,a){},"89a8":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"row text-center"},[o("div",{staticClass:"q-pa-md",staticStyle:{width:"100%"},attrs:{id:"formulario"}},[o("img",{staticStyle:{width:"100px",height:"100px","border-radius":"20%"},attrs:{src:a("a7f7")}}),o("br"),o("br"),o("br"),o("form",{staticClass:"q-gutter-md",on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.onSubmit(t)},reset:function(t){return t.preventDefault(),t.stopPropagation(),e.onReset(t)}}},[o("q-item",[o("q-item-section",[o("q-item-label",{staticStyle:{color:"#ec9718"}},[e._v(e._s(e.$t("optional_photo")))])],1)],1),o("Selectorarchivos",{attrs:{anchura:500,altura:500}}),o("q-input",{ref:"nombre",staticClass:"Nombre",attrs:{filled:"",label:e.$t("name"),hint:e.$t("name_hint"),type:"name","lazy-rules":"",rules:[function(t){return t&&t.length>0||e.$t("name_fail")}]},model:{value:e.nombre,callback:function(t){e.nombre=t},expression:"nombre"}}),o("q-input",{ref:"usuario",staticClass:"Usuario",attrs:{filled:"",label:e.$t("user"),hint:e.$t("user_hint"),type:"user","lazy-rules":"",rules:[function(t){return t&&t.length>0||e.$t("user_fail")}]},model:{value:e.usuario,callback:function(t){e.usuario=t},expression:"usuario"}}),o("q-select",{ref:"genero",staticClass:"Genero",attrs:{filled:"",options:e.opciones_genero,label:e.$t("gender"),hint:e.$t("gender_hint"),"lazy-rules":"",rules:[function(t){return t&&t.length>0||e.$t("gender_fail")}]},model:{value:e.genero,callback:function(t){e.genero=t},expression:"genero"}}),o("q-input",{ref:"fecha",staticClass:"Fecha",attrs:{filled:"",label:e.$t("date"),hint:e.$t("date_hint"),"lazy-rules":"",rules:[function(t){return t&&t.length>0||e.$t("date_fail")},function(t){return 10===t.length||e.$t("date_fail_2")},"date"]},scopedSlots:e._u([{key:"append",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[o("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[o("q-date",{on:{input:function(){return e.$refs.qDateProxy.hide()}},model:{value:e.fecha,callback:function(t){e.fecha=t},expression:"fecha"}})],1)],1)]},proxy:!0}]),model:{value:e.fecha,callback:function(t){e.fecha=t},expression:"fecha"}}),o("q-input",{ref:"email",staticClass:"Email",attrs:{filled:"",label:e.$t("email"),hint:e.$t("email_hint"),type:"email","lazy-rules":"",rules:[function(t){return t&&t.length>0&&t.indexOf("@")>=0||e.$t("email_fail")}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),o("q-input",{ref:"contrasena",staticClass:"Contrasena",attrs:{filled:"",type:e.isPwd?"password":"text",label:e.$t("password"),hint:e.$t("password_hint"),"lazy-rules":"",rules:[function(t){return null!==t&&""!==t||e.$t("password_fail")}]},scopedSlots:e._u([{key:"append",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.contrasena,callback:function(t){e.contrasena=t},expression:"contrasena"}}),o("q-input",{ref:"contrasena2",staticClass:"Contrasena2",attrs:{filled:"",type:e.isPwd?"password":"text",label:e.$t("password"),hint:e.$t("password_repeat"),"lazy-rules":"",rules:[function(t){return null!==t&&""!==t||e.$t("password_repeat_fail")},function(t){return t===e.contrasena||e.$t("password_repeat_fail_2")}]},scopedSlots:e._u([{key:"append",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.contrasena2,callback:function(t){e.contrasena2=t},expression:"contrasena2"}}),o("div",{staticClass:"text-center"},[o("q-checkbox",{staticClass:"Terms",attrs:{name:"sesion",label:e.$t("terms")},model:{value:e.sesion,callback:function(t){e.sesion=t},expression:"sesion"}}),o("br"),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[o("q-item-section",[o("q-item-label",{staticStyle:{color:"#ec9718"}},[e._v(e._s(e.$t("terms2")))])],1)],1)],1),o("div",[o("q-btn",{staticClass:"Registro",attrs:{label:e.$t("register"),type:"submit",color:"primary"}}),o("q-btn",{staticClass:"Reset",attrs:{label:e.$t("clean"),type:"reset",color:"primary",flat:""}})],1)],1),o("LoginButtons",{key:e.$i18n.locale}),o("q-dialog",{model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[o("q-card",[o("q-card-section",[o("div",{staticClass:"text-h6"},[e._v(e._s(e.$t("alert")))])]),o("q-card-section",{staticClass:"q-pt-none"},[e._v(e._s(e.$t("email_verification")))]),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1)],1)],1)])},s=[],n=(a("fc1b"),a("2b46")),i=a("1ff9"),r=a("bc3a"),l=a.n(r),c={name:"Signup",components:{LoginButtons:i["a"],Selectorarchivos:n["a"]},data:function(){return{alert:!1,confirm:!1,prompt:!1,nombre:null,usuario:null,genero:null,opciones_genero:["Masculino","Femenino"],email:null,fecha:null,contrasena:null,contrasena2:null,isPwd:!0,sesion:!1}},methods:{onSubmit:function(){this.$refs.nombre.validate(),this.$refs.usuario.validate(),this.$refs.email.validate(),this.$refs.fecha.validate(),this.$refs.contrasena.validate(),this.$refs.contrasena2.validate(),this.$refs.genero.validate(),this.$refs.nombre.hasError||this.$refs.usuario.hasError||this.$refs.genero.hasError||this.$refs.email.hasError||this.$refs.fecha.hasError||this.$refs.contrasena.hasError||this.$refs.contrasena2.hasError?this.formHasError=!0:!0!==this.sesion?this.$q.notify({color:"negative",message:this.$t("register_fail"),position:"bottom",timeout:2e3,progress:!0}):this.Registrar()},onReset:function(){this.nombre=null,this.usuario=null,this.fecha=null,this.email=null,this.contrasena=null,this.contrasena2=null,this.genero=null,this.$refs.nombre.resetValidation(),this.$refs.usuario.resetValidation(),this.$refs.fecha.resetValidation(),this.$refs.email.resetValidation(),this.$refs.contrasena.resetValidation(),this.$refs.contrasena2.resetValidation(),this.$refs.genero.resetValidation()},Registrar:function(){var e=this;l()({method:"put",url:"https://canarygo.herokuapp.com/autorizar",data:{tipo:"Registro",correo:this.email,contrasena2:this.contrasena2,nombre:this.nombre,genero:this.genero,fecha:this.fecha,usuario:this.usuario}}).then((function(t){console.log("RESPUESTA DEL SERVER",t),"Error al crear usuario"===t.data?e.Fail(e.$t("register_fail_2")):"Usuario creado"===t.data&&(e.Success(),e.alert=!0)}),(function(e){console.log("EL ERROR ES",e)}))},Success:function(){this.$q.notify({icon:"done",color:"positive",message:this.$t("register_sucess"),position:"bottom",timeout:1e3,progress:!0})},Fail:function(e){this.$q.notify({color:"negative",message:e,position:"bottom",timeout:2e3,progress:!0})}}},u=c,f=(a("1f93"),a("2877")),h=a("eebe"),p=a.n(h),d=a("66e5"),m=a("4074"),g=a("0170"),b=a("27f9"),$=a("ddd8"),v=a("0016"),_=a("7cbe"),y=a("52ee"),k=a("8f8e"),E=a("9c40"),q=a("24e8"),S=a("f09f"),x=a("a370"),C=a("4b7e"),w=a("714f"),R=a("7f67"),P=Object(f["a"])(u,o,s,!1,null,null,null);t["default"]=P.exports;p()(P,"components",{QItem:d["a"],QItemSection:m["a"],QItemLabel:g["a"],QInput:b["a"],QSelect:$["a"],QIcon:v["a"],QPopupProxy:_["a"],QDate:y["a"],QCheckbox:k["a"],QBtn:E["a"],QDialog:q["a"],QCard:S["a"],QCardSection:x["a"],QCardActions:C["a"]}),p()(P,"directives",{Ripple:w["a"],ClosePopup:R["a"]})},"98d2":function(e,t,a){"use strict";var o=a("a899"),s=a.n(o);s.a},a7f7:function(e,t,a){e.exports=a.p+"img/Canary_Go_Icon.3e7ab0e6.png"},a899:function(e,t,a){},f44a:function(e,t,a){}}]);