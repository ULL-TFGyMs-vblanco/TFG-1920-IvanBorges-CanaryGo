(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"18e8":function(e,t,i){e.exports=i.p+"img/Canary_Go_Icon.3e7ab0e6.png"},"3fea":function(e,t,i){},"6c74":function(e,t,i){},bc00:function(e,t,i){"use strict";var s=i("6c74"),n=i.n(s);n.a},e36e:function(e,t,i){"use strict";var s=i("3fea"),n=i.n(s);n.a},e3a8:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row text-center"},[s("div",{staticClass:"q-pa-md",staticStyle:{width:"100%"},attrs:{id:"formulario"}},[s("img",{staticStyle:{width:"100px",height:"100px","border-radius":"20%"},attrs:{src:i("18e8")}}),s("br"),s("br"),s("br"),s("form",{staticClass:"q-gutter-md",attrs:{id:"Form"},on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.onSubmit(t)},reset:function(t){return t.preventDefault(),t.stopPropagation(),e.onReset(t)}}},[s("q-input",{ref:"email",staticClass:"Email",attrs:{filled:"",label:e.$t("email"),hint:e.$t("email_hint"),type:"email","lazy-rules":"",rules:[function(t){return t&&t.length>0&&t.indexOf("@")>=0||e.$t("email_fail")}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),s("q-input",{ref:"contrasena",staticClass:"Contrasena",attrs:{filled:"",type:e.isPwd?"password":"text",label:e.$t("password"),hint:e.$t("password_hint"),"lazy-rules":"",rules:[function(t){return null!==t&&""!==t||e.$t("password_fail")}]},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.contrasena,callback:function(t){e.contrasena=t},expression:"contrasena"}}),s("div",{staticClass:"text-center"},[s("q-checkbox",{attrs:{name:"sesion",label:e.$t("remember")},model:{value:e.sesion,callback:function(t){e.sesion=t},expression:"sesion"}}),s("br"),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[s("q-item-section",[s("q-item-label",{staticStyle:{color:"#ec9718"}},[e._v(e._s(e.$t("password_reset")))])],1)],1)],1),s("div",[s("q-btn",{staticClass:"Registro",attrs:{label:e.$t("login"),type:"submit",color:"primary"}}),s("q-btn",{staticClass:"Reset",attrs:{label:e.$t("clean"),type:"reset",color:"primary",flat:""}})],1)],1),s("LoginButtons",{key:e.$i18n.locale})],1)])},n=[],o=i("a13d"),a=i("fa04"),r={name:"Login",email:"Index",components:{LoginButtons:a["a"]},data:function(){return{email:null,contrasena:null,isPwd:!0,sesion:!1}},mounted:function(){this.Observador()},methods:{onSubmit:function(){this.$refs.email.validate(),this.$refs.contrasena.validate(),this.$refs.email.hasError||this.$refs.contrasena.hasError?this.formHasError=!0:this.sesion,this.IniciarSesion()},onReset:function(){this.email=null,this.contrasena=null,this.$refs.email.resetValidation(),this.$refs.contrasena.resetValidation()},IniciarSesion:function(){var e=this,t="";o["c"].signInWithEmailAndPassword(this.email,this.contrasena).catch((function(e){var i=e.code,s=e.message;console.log(i),console.log(s),t=i})).then((function(){"auth/user-not-found"===t?e.Fail(e.$t("login_fail_user")):"auth/wrong-password"===t?e.Fail(e.$t("login_fail_password")):!0===o["b"].auth().currentUser.emailVerified?(e.Success(),e.$router.push("events")):e.Fail(e.$t("login_fail_verify"))}))},Observador:function(){console.log("Dentro"),o["c"].onAuthStateChanged((function(e){if(e){e.displayName,e.email,e.emailVerified,e.photoURL,e.isAnonymous,e.uid,e.providerData;console.log("Usuario logueado")}else console.log("Ningun usuario logueado")}))},Success:function(){this.$q.notify({icon:"done",color:"positive",message:this.$t("login_sucess"),position:"bottom",timeout:1e3,progress:!0})},Fail:function(e){this.$q.notify({color:"negative",message:e,position:"bottom",timeout:2e3,progress:!0})}}},c=r,l=(i("e36e"),i("a6c2")),u=i("63c1"),f=i.n(u),m=i("a3be"),d=i("19dc"),p=i("d376"),h=i("e0e9"),g=i("6c44"),b=i("dc7c"),v=i("ef9c"),$=i("a561"),_=Object(l["a"])(c,s,n,!1,null,null,null);t["default"]=_.exports;f()(_,"components",{QInput:m["a"],QIcon:d["a"],QCheckbox:p["a"],QItem:h["a"],QItemSection:g["a"],QItemLabel:b["a"],QBtn:v["a"]}),f()(_,"directives",{Ripple:$["a"]})},fa04:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login-box"},[i("a",{staticClass:"social-button",attrs:{href:"#",id:"facebook-connect"},on:{click:e.IniciarSesionFacebook}},[i("span",[e._v(e._s(e.facebook))])]),i("a",{staticClass:"social-button",attrs:{href:"#",id:"google-connect"},on:{click:e.IniciarSesionGoogle}},[i("span",[e._v(e._s(e.google))])])])},n=[],o=i("a13d"),a={name:"LoginButtons",data:function(){return{google:this.$t("google"),facebook:this.$t("facebook")}},methods:{IniciarSesionGoogle:function(){var e=this,t=o["e"];o["c"].useDeviceLanguage(),t.setCustomParameters({login_hint:"user@example.com"});var i=!1;o["c"].signInWithPopup(t).catch((function(e){e.code,e.message,e.email,e.credential;i=!0})).then((function(e){e.credential.accessToken,e.user})).then((function(){!0===i?e.Fail(e.$t("error_google")):e.Success()}))},IniciarSesionFacebook:function(){var e=this,t=o["d"];t.addScope("user_birthday"),o["c"].useDeviceLanguage(),t.setCustomParameters({login_hint:"user@example.com"});var i=!1;o["c"].signInWithPopup(t).catch((function(e){e.code,e.message,e.email,e.credential;i=!0})).then((function(e){e.credential.accessToken,e.user})).then((function(){!0===i?e.Fail(e.$t("error_facebook")):e.Success()}))},Success:function(){this.$q.notify({icon:"done",color:"positive",message:this.$t("login_sucess"),position:"bottom",timeout:1e3,progress:!0}),this.$router.push("./events")},Fail:function(e){this.$q.notify({color:"negative",message:e,position:"bottom",timeout:2e3,progress:!0})}}},r=a,c=(i("bc00"),i("a6c2")),l=Object(c["a"])(r,s,n,!1,null,null,null);t["a"]=l.exports}}]);