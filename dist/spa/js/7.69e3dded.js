(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"013f":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row text-center"},[s("div",{staticClass:"q-pa-md",staticStyle:{width:"100%"},attrs:{id:"formulario"}},[s("img",{staticStyle:{width:"100px",height:"100px","border-radius":"20%"},attrs:{src:i("a7f7")}}),s("br"),s("br"),s("br"),s("form",{staticClass:"q-gutter-md",attrs:{id:"Form"},on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.onSubmit(e)},reset:function(e){return e.preventDefault(),e.stopPropagation(),t.onReset(e)}}},[s("q-input",{ref:"email",staticClass:"Email",attrs:{filled:"",label:t.$t("email"),hint:t.$t("email_hint"),type:"email","lazy-rules":"",rules:[function(e){return e&&e.length>0&&e.indexOf("@")>=0||t.$t("email_fail")}]},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("q-input",{ref:"contrasena",staticClass:"Contrasena",attrs:{filled:"",type:t.isPwd?"password":"text",label:t.$t("password"),hint:t.$t("password_hint"),"lazy-rules":"",rules:[function(e){return null!==e&&""!==e||t.$t("password_fail")}]},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.contrasena,callback:function(e){t.contrasena=e},expression:"contrasena"}}),s("div",{staticClass:"text-center"},[s("q-checkbox",{attrs:{name:"sesion",label:t.$t("remember")},model:{value:t.sesion,callback:function(e){t.sesion=e},expression:"sesion"}}),s("br"),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[s("q-item-section",[s("q-item-label",{staticStyle:{color:"#ec9718"}},[t._v(t._s(t.$t("password_reset")))])],1)],1)],1),s("div",[s("q-btn",{staticClass:"Registro",attrs:{label:t.$t("login"),type:"submit",color:"primary"}}),s("q-btn",{staticClass:"Reset",attrs:{label:t.$t("clean"),type:"reset",color:"primary",flat:""}})],1)],1),s("LoginButtons",{key:t.$i18n.locale})],1)])},n=[],o=i("1ff9"),a=i("bc3a"),r=i.n(a),c={name:"Login",email:"Index",components:{LoginButtons:o["a"]},data:function(){return{email:null,contrasena:null,isPwd:!0,sesion:!1}},methods:{onSubmit:function(){this.$refs.email.validate(),this.$refs.contrasena.validate(),this.$refs.email.hasError||this.$refs.contrasena.hasError?this.formHasError=!0:this.sesion,this.IniciarSesion()},onReset:function(){this.email=null,this.contrasena=null,this.$refs.email.resetValidation(),this.$refs.contrasena.resetValidation()},IniciarSesion:function(){var t=this;r()({method:"put",url:"https://canarygo.herokuapp.com/autorizar",data:{tipo:"Login",correo:this.email,contrasena:this.contrasena}}).then((function(e){console.log("RESPUESTA DEL SERVER",e),"auth/user-not-found"===e.data?t.Fail(t.$t("login_fail_user")):"auth/wrong-password"===e.data?t.Fail(t.$t("login_fail_password")):"Usuario logueado"===e.data?(t.Success(),t.$router.push("events")):t.Fail(t.$t("login_fail_verify"))}),(function(t){console.log("EL ERROR ES",t)}))},Success:function(){this.$q.notify({icon:"done",color:"positive",message:this.$t("login_sucess"),position:"bottom",timeout:1e3,progress:!0})},Fail:function(t){this.$q.notify({color:"negative",message:t,position:"bottom",timeout:2e3,progress:!0})}}},l=c,u=(i("da41"),i("2877")),f=i("eebe"),m=i.n(f),p=i("27f9"),d=i("0016"),h=i("8f8e"),g=i("66e5"),b=i("4074"),v=i("0170"),$=i("9c40"),_=i("714f"),y=Object(u["a"])(l,s,n,!1,null,null,null);e["default"]=y.exports;m()(y,"components",{QInput:p["a"],QIcon:d["a"],QCheckbox:h["a"],QItem:g["a"],QItemSection:b["a"],QItemLabel:v["a"],QBtn:$["a"]}),m()(y,"directives",{Ripple:_["a"]})},"1ff9":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login-box"},[i("a",{staticClass:"social-button",attrs:{href:"#",id:"facebook-connect"},on:{click:t.IniciarSesionFacebook}},[i("span",[t._v(t._s(t.facebook))])]),i("a",{staticClass:"social-button",attrs:{href:"#",id:"google-connect"},on:{click:t.IniciarSesionGoogle}},[i("span",[t._v(t._s(t.google))])])])},n=[],o=i("fc1b"),a={name:"LoginButtons",data:function(){return{google:this.$t("google"),facebook:this.$t("facebook")}},methods:{IniciarSesionGoogle:function(){var t=this,e=o["d"];o["b"].useDeviceLanguage(),e.setCustomParameters({login_hint:"user@example.com"});var i=!1;o["b"].signInWithPopup(e).catch((function(t){t.code,t.message,t.email,t.credential;i=!0})).then((function(t){t.credential.accessToken,t.user})).then((function(){!0===i?t.Fail(t.$t("error_google")):t.Success()}))},IniciarSesionFacebook:function(){var t=this,e=o["c"];e.addScope("user_birthday"),o["b"].useDeviceLanguage(),e.setCustomParameters({login_hint:"user@example.com"});var i=!1;o["b"].signInWithPopup(e).catch((function(t){t.code,t.message,t.email,t.credential;i=!0})).then((function(t){t.credential.accessToken,t.user})).then((function(){!0===i?t.Fail(t.$t("error_facebook")):t.Success()}))},Success:function(){this.$q.notify({icon:"done",color:"positive",message:this.$t("login_sucess"),position:"bottom",timeout:1e3,progress:!0}),this.$router.push("./events")},Fail:function(t){this.$q.notify({color:"negative",message:t,position:"bottom",timeout:2e3,progress:!0})}}},r=a,c=(i("98d2"),i("2877")),l=Object(c["a"])(r,s,n,!1,null,null,null);e["a"]=l.exports},"7c73":function(t,e,i){},"98d2":function(t,e,i){"use strict";var s=i("a899"),n=i.n(s);n.a},a7f7:function(t,e,i){t.exports=i.p+"img/Canary_Go_Icon.3e7ab0e6.png"},a899:function(t,e,i){},da41:function(t,e,i){"use strict";var s=i("7c73"),n=i.n(s);n.a}}]);