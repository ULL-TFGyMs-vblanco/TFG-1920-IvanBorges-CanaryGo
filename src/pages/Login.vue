<template>
  <div class="row text-center">
    <div
      class="q-pa-md"
      id="formulario"
      style="width: 100%;"
    >
      <img
        src="../assets/images/CanaryGo/Canary_Go_Icon.png"
        style="width: 100px; height: 100px; border-radius: 20%;"
      />
      <br />
      <br />
      <br />
      <form
        id="Form"
        @submit.prevent.stop="onSubmit"
        @reset.prevent.stop="onReset"
        class="q-gutter-md"
      >
        <q-input
          ref="email"
          class="Email"
          filled
          v-model="email"
          :label="$t('email') "
          :hint="$t('email_hint')"
          type="email"
          lazy-rules
          :rules="[ val => val && val.length > 0 && val.indexOf('@') >= 0 || $t('email_fail')]"
        />
        <q-input
          ref="contrasena"
          class="Contrasena"
          filled
          v-model="contrasena"
          :type="isPwd ? 'password' : 'text'"
          :label="$t('password')"
          :hint="$t('password_hint')"
          lazy-rules
          :rules="[
          val => val !== null && val !== '' || $t('password_fail'),
        ]"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <div class="text-center">
          <q-checkbox
            name="sesion"
            v-model="sesion"
            :label="$t('remember')"
          />
          <br />

          <!-- to="/restore" -->
          <q-item
            clickable
            v-ripple
          >
            <q-item-section>
              <q-item-label style="color: #ec9718">{{$t('password_reset')}}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div>
          <q-btn
            class="Registro"
            :label="$t('login')"
            type="submit"
            color="primary"
          />
          <q-btn
            class="Reset"
            :label="$t('clean')"
            type="reset"
            color="primary"
            flat
          />
        </div>
      </form>
      <LoginButtons :key="$i18n.locale" />
    </div>
  </div>
</template>

<script>
import LoginButtons from 'components/Login/LoginButtons'
import axios from 'axios'
import { firebaseAuth } from 'boot/firebase'

export default {
  name: 'Login',
  email: 'Index',
  components: {
    LoginButtons
  },
  data () {
    return {
      email: null,
      contrasena: null,
      isPwd: true,
      sesion: false
    }
  },
  methods: {
    onSubmit () {
      this.$refs.email.validate()
      this.$refs.contrasena.validate()

      if (this.$refs.email.hasError || this.$refs.contrasena.hasError) {
        this.formHasError = true
      } else if (this.sesion !== true) {

      }
      this.IniciarSesion()
    },

    onReset () {
      this.email = null
      this.contrasena = null

      this.$refs.email.resetValidation()
      this.$refs.contrasena.resetValidation()
    },
    IniciarSesion () {
      axios({
        method: 'put',
        url: 'https://canarygo.herokuapp.com/autorizar',
        data: {
          tipo: 'Login',
          tipo2: 'Estandar',
          correo: this.email,
          contrasena: this.contrasena
        }
      })
        .then((response) => {
          console.log('RESPUESTA DEL SERVER', response)

          if (response.data === 'auth/user-not-found') {
            this.Fail(this.$t('login_fail_user'))
          } else if (response.data === 'auth/wrong-password') {
            this.Fail(this.$t('login_fail_password'))
          } else if (response.data === 'auth/too-many-requests') {
            this.Fail(this.$t('login_fail_attemps'))
          } else {
            if (response.data.includes('Usuario correcto:')) {
              const token = response.data.split(':')[1]

              firebaseAuth.signInWithCustomToken(token).then(() => {
                // Guardamos datos persistentes en state
                this.DatosExtraUsuario(token, firebaseAuth.currentUser.providerData[0]).then((response) => {
                  const usuario = {
                    name: response.data.name,
                    date: response.data.date,
                    gender: response.data.gender,
                    photoURL: firebaseAuth.currentUser.providerData[0].photoURL,
                    displayName: firebaseAuth.currentUser.providerData[0].displayName,
                    email: firebaseAuth.currentUser.providerData[0].email
                  }

                  this.$store.dispatch('store/anadirUsuario', usuario).then(() => {
                    this.$store.dispatch('store/anadirToken', token).then(() => {
                      setTimeout(() => {
                        this.Success()
                        this.$router.push('events')
                      }, 500)
                    })
                  })
                }).catch(function (error) {
                  console.log(error)
                })
              })
            } else {
              this.Fail(this.$t('login_fail_verify'))
            }
          }
        }, (error) => {
          console.log('EL ERROR ES', error)
        })
    },
    Success () {
      this.$q.notify({
        icon: 'done',
        color: 'positive',
        message: this.$t('login_sucess'),
        position: 'bottom',
        timeout: 1000,
        progress: true
      })
    },
    Fail (error) {
      this.$q.notify({
        color: 'negative',
        message: error,
        position: 'bottom',
        timeout: 2000,
        progress: true
      })
    },
    DatosExtraUsuario (token, user) {
      return axios({
        method: 'put',
        url: 'https://canarygo.herokuapp.com/autorizar',
        data: {
          tipo: 'Obtener Datos',
          token: token,
          correo: user.email
        }
      })
    }
  }
}
</script>

<style>
.negrita {
  font-weight: bold;
  font-size: 120%;
}

#formulario {
  max-width: 100%;
  /* padding-right: 20%;
  padding-left: 20%; */

  padding-right: 8%;
  padding-left: 8%;
  padding-top: 10%;
  padding-bottom: 10%;
}
</style>
