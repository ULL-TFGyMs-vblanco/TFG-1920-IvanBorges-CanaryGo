(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"443b":function(t,e,a){"use strict";var s=a("9eba"),r=a.n(s);r.a},"657d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row text-center"},[s("div",{staticClass:"q-pa-md",staticStyle:{width:"100%"},attrs:{id:"formulario"}},[s("img",{staticStyle:{width:"100px",height:"100px","border-radius":"20%"},attrs:{src:a("a7f7")}}),s("br"),s("br"),s("br"),s("form",{staticClass:"q-gutter-md",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.onSubmit(e)},reset:function(e){return e.preventDefault(),e.stopPropagation(),t.onReset(e)}}},[s("div",{staticClass:"q-pa-md q-gutter-md imagen_default"},[s("q-chip",{attrs:{outline:"",size:"20px",color:"primary","text-color":"white","icon-right":"person"}},[t._v("\n          "+t._s(t.$t("edit_profile"))+"\n        ")]),s("q-space"),s("q-space"),null!==t.url?s("q-img",{staticClass:"q-mt-md",attrs:{id:"imagen_perfil",src:this.photoURL,ratio:1,"placeholder-src":""}}):t._e()],1),s("div",{staticClass:"Selector"},[s("Selectorarchivos",{staticClass:"selectorarchivos",attrs:{anchura:400,altura:400}})],1),s("q-input",{ref:"nombre",staticClass:"Nombre",attrs:{filled:"",label:t.$t("name"),hint:t.$t("name_hint"),type:"name","lazy-rules":"",rules:[function(e){return e&&e.length>0||t.$t("name_fail")}]},model:{value:t.nombre,callback:function(e){t.nombre=e},expression:"nombre"}}),s("q-input",{ref:"usuario",staticClass:"Usuario",attrs:{filled:"",label:t.$t("user"),hint:t.$t("user_hint"),type:"user","lazy-rules":"",rules:[function(e){return e&&e.length>0||t.$t("user_fail")}]},model:{value:t.usuario,callback:function(e){t.usuario=e},expression:"usuario"}}),s("q-select",{ref:"genero",staticClass:"Genero",attrs:{filled:"",options:t.opciones_genero,label:t.$t("gender"),hint:t.$t("gender_hint"),"lazy-rules":"",rules:[function(e){return e&&e.length>0||t.$t("gender_fail")}]},model:{value:t.genero,callback:function(e){t.genero=e},expression:"genero"}}),s("q-input",{ref:"fecha",staticClass:"Fecha",attrs:{filled:"",label:t.$t("date"),hint:t.$t("date_hint"),"lazy-rules":"",rules:[function(e){return e&&e.length>0||t.$t("date_fail")},function(e){return 10===e.length||t.$t("date_fail_2")},"date"]},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[s("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[s("q-date",{on:{input:function(){return t.$refs.qDateProxy.hide()}},model:{value:t.fecha,callback:function(e){t.fecha=e},expression:"fecha"}})],1)],1)]},proxy:!0}]),model:{value:t.fecha,callback:function(e){t.fecha=e},expression:"fecha"}}),s("q-input",{ref:"email",staticClass:"Email",attrs:{filled:"",label:t.$t("email"),hint:t.$t("email_hint"),type:"email","lazy-rules":"",rules:[function(e){return e&&e.length>0&&e.indexOf("@")>=0||t.$t("email_fail")}]},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("q-input",{ref:"contrasena",staticClass:"Contrasena",attrs:{filled:"",type:t.isPwd?"password":"text",label:t.$t("password"),hint:t.$t("password_hint"),"lazy-rules":"",rules:[function(e){return null!==e&&""!==e||t.$t("password_fail")}]},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.contrasena,callback:function(e){t.contrasena=e},expression:"contrasena"}}),s("div",[s("q-btn",{staticClass:"Actualizar",attrs:{label:t.$t("update"),type:"submit",color:"primary"}}),s("q-btn",{staticClass:"Reset",attrs:{label:t.$t("clean"),type:"reset",color:"primary",flat:""}})],1)],1),s("div",{staticClass:"borrarperfil"},[s("br"),s("br"),s("q-chip",{attrs:{outline:"",clickable:"",size:"20px",color:"red","text-color":"white","icon-right":"person"},on:{click:t.borrarUsuario}},[t._v("\n        "+t._s(t.$t("delete_user"))+"\n      ")]),s("q-dialog",{model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[s("q-card",[s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("alert")))])]),s("q-card-section",{staticClass:"q-pt-none"},[t._v(t._s(t.$t("delete_verification")))]),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"NO",color:"primary"}}),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"},on:{click:t.confirmar}})],1)],1)],1)],1)])])},r=[],i=(a("6762"),a("2fdb"),a("7f7f"),a("fc1b")),o=a("2b46"),n=a("bc3a"),l=a.n(n),c={name:"ActualizarUsuario",components:{Selectorarchivos:o["a"]},data:function(){return{alert:!1,confirm:!1,nombre:this.$store.state.store.datosUsuario.name,usuario:this.$store.state.store.datosUsuario.displayName,photoURL:String(this.$store.state.store.datosUsuario.photoURL),genero:this.$store.state.store.datosUsuario.gender,opciones_genero:[this.$t("male"),this.$t("female")],email:this.$store.state.store.datosUsuario.email,fecha:this.$store.state.store.datosUsuario.date,isPwd:!0,sesion:!1,url:"",new_url:"",contrasena:"",provider:this.$store.state.store.datosUsuario.provider}},methods:{onSubmit:function(){this.$refs.nombre.validate(),this.$refs.usuario.validate(),this.$refs.genero.validate(),this.$refs.fecha.validate(),"password"===this.provider&&(this.$refs.email.validate(),this.$refs.contrasena.validate()),this.$refs.nombre.hasError||this.$refs.usuario.hasError||this.$refs.genero.hasError||this.$refs.email.hasError||this.$refs.fecha.hasError|this.$refs.contrasena.hasError?this.formHasError=!0:this.subirImagen()},onReset:function(){this.nombre=null,this.usuario=null,this.fecha=null,this.email=null,this.genero=null,this.$refs.nombre.resetValidation(),this.$refs.usuario.resetValidation(),this.$refs.fecha.resetValidation(),this.$refs.genero.resetValidation(),"password"===this.provider&&(this.$refs.contrasena.resetValidation(),this.$refs.email.resetValidation())},Success:function(){this.$q.notify({icon:"done",color:"positive",message:this.$t("updated"),position:"bottom",timeout:1e3,progress:!0})},Fail:function(t){this.$q.notify({color:"negative",message:t,position:"bottom",timeout:2e3,progress:!0})},subirImagen:function(){var t=document.getElementById("foto").files[0];if(void 0===t)this.new_url=this.photoURL,this.actualizarUsuario();else{var e=i["f"].ref("avatares/usuarios/"+this.email),a=e.child("foto"),s=this;a.put(t).then((function(t){a.getDownloadURL().then((function(t){s.new_url=t,s.actualizarUsuario()}))})).catch((function(t){console.log(t)}))}},actualizarUsuario:function(){var t=this;l()({method:"post",url:"https://canarygo.herokuapp.com/autorizar",data:{tipo:"Actualizar perfil",nombre:this.nombre,usuario:this.usuario,genero:this.genero,fecha:this.fecha,correo:this.email,contrasena:this.contrasena,foto:this.new_url,token:this.$store.state.store.token}}).then((function(e){e.data.includes("Usuario actualizado")?(t.Success(),t.actualizarLocal()):t.$q.notify({color:"negative",message:t.$t("update_error"),position:"bottom",timeout:2e3,progress:!0})}),(function(t){console.log("EL ERROR ES",t)}))},actualizarLocal:function(){var t=this,e={name:this.nombre,date:this.fecha,gender:this.genero,photoURL:this.new_url,displayName:this.usuario,email:this.email,provider:this.$store.state.store.datosUsuario.provider};this.$store.dispatch("store/anadirUsuario",e).then((function(){setTimeout((function(){t.$router.push("events")}),500)}))},borrarUsuario:function(){this.alert=!0},borrar:function(){this.confirm&&(i["b"].signOut(),this.$store.dispatch("store/borrarUsuario"),this.$router.push("home"),l()({method:"delete",url:"https://canarygo.herokuapp.com/autorizar",data:{email:this.$store.state.store.datosUsuario.email,token:this.$store.state.store.token}}))},confirmar:function(){this.confirm=!0},ComprobarLogin:function(){i["b"].signInWithCustomToken(this.$store.state.store.token).then((function(){})).catch((function(){this.$store.dispatch("store/borrarUsuario"),this.saludo="",this.img="",console.clear(),this.$router.push("login")}))}},updated:function(){this.borrar(),document.getElementById("foto").files[0]},mounted:function(){this.ComprobarLogin(),"password"!==this.provider&&(document.getElementsByClassName("Contrasena")[0].setAttribute("style","display:none"),document.getElementsByClassName("Email")[0].setAttribute("style","display:none"))}},u=c,h=(a("443b"),a("2877")),d=a("b047"),f=a("2c91"),p=a("068f"),m=a("27f9"),b=a("ddd8"),$=a("0016"),g=a("7cbe"),v=a("52ee"),y=a("9c40"),_=a("24e8"),q=a("f09f"),w=a("a370"),C=a("4b7e"),U=a("7f67"),x=a("eebe"),k=a.n(x),z=Object(h["a"])(u,s,r,!1,null,null,null);e["default"]=z.exports;k()(z,"components",{QChip:d["a"],QSpace:f["a"],QImg:p["a"],QInput:m["a"],QSelect:b["a"],QIcon:$["a"],QPopupProxy:g["a"],QDate:v["a"],QBtn:y["a"],QDialog:_["a"],QCard:q["a"],QCardSection:w["a"],QCardActions:C["a"]}),k()(z,"directives",{ClosePopup:U["a"]})},"9eba":function(t,e,a){}}]);