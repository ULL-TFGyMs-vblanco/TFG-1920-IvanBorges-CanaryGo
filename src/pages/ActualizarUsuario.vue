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
        @submit.prevent.stop="onSubmit"
        @reset.prevent.stop="onReset"
        class="q-gutter-md"
      >

        <div class="q-pa-md q-gutter-md imagen_default">
          <q-chip
            outline
            size="20px"
            color="primary"
            text-color="white"
            icon-right="person"
          >
            {{$t('edit_profile')}}
          </q-chip>

          <q-space />
          <q-space />
          <!-- using v-if so you can see the effect -->
          <q-img
            v-if="url !== null"
            :src="this.photoURL"
            :ratio="1"
            class="q-mt-md"
            style="width: 350px"
            placeholder-src=""
          />
        </div>

        <div class="Selector">
          <Selectorarchivos
            class="selectorarchivos"
            v-bind:anchura='400'
            v-bind:altura='400'
          />
        </div>

        <!-- <br />
        <br />-->

        <q-input
          ref="nombre"
          class="Nombre"
          filled
          v-model="nombre"
          :label="$t('name')"
          :hint="$t('name_hint')"
          type="name"
          lazy-rules
          :rules="[ val => val && val.length > 0 || $t('name_fail')]"
        />

        <q-input
          ref="usuario"
          class="Usuario"
          filled
          v-model="usuario"
          :label="$t('user')"
          :hint="$t('user_hint')"
          type="user"
          lazy-rules
          :rules="[ val => val && val.length > 0 || $t('user_fail')]"
        />

        <q-select
          ref="genero"
          class="Genero"
          filled
          v-model="genero"
          :options="opciones_genero"
          :label="$t('gender')"
          :hint="$t('gender_hint')"
          lazy-rules
          :rules="[ val => val && val.length > 0 || $t('gender_fail')]"
        />

        <q-input
          ref="fecha"
          class="Fecha"
          filled
          v-model="fecha"
          :label="$t('date')"
          :hint="$t('date_hint')"
          lazy-rules
          :rules="[
          val => val && val.length > 0 || $t('date_fail'),
          val => val.length === 10 || $t('date_fail_2'),
          'date',
          ]"
        >
          <template v-slot:append>
            <q-icon
              name="event"
              class="cursor-pointer"
            >
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                  v-model="fecha"
                  @input="() => $refs.qDateProxy.hide()"
                />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input
          ref="email"
          class="Email"
          filled
          v-model="email"
          :label="$t('email')"
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

        <div>
          <q-btn
            class="Actualizar"
            :label="$t('update')"
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
      <div class="borrarperfil">
        <br />
        <br />
        <q-chip
          outline
          clickable
          size="20px"
          color="red"
          text-color="white"
          icon-right="person"
          @click="borrarUsuario"
        >
          {{$t('delete_user')}}
        </q-chip>

        <!-- CONFIRMACION-->
        <q-dialog v-model="alert">
          <q-card>
            <q-card-section>
              <div class="text-h6">{{$t('alert')}}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">{{$t('delete_verification')}}</q-card-section>

            <q-card-actions align="right">
              <q-btn
                flat
                label="NO"
                color="primary"
                v-close-popup
              />
              <q-btn
                flat
                label="OK"
                color="primary"
                v-close-popup
                @click="confirmar"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
        <!-- CONFIRMACION -->

      </div>
    </div>
  </div>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import { firebaseAuth, firebase, firebaseStg } from 'boot/firebase'
import Selectorarchivos from '../components/Eventos/Selectorarchivos'
import axios from 'axios'

export default {
  name: 'ActualizarUsuario',
  components: {
    Selectorarchivos
  },
  data () {
    return {
      alert: false,
      confirm: false,
      nombre: this.$store.state.store.datosUsuario.name,
      usuario: this.$store.state.store.datosUsuario.displayName,
      photoURL: String(this.$store.state.store.datosUsuario.photoURL),
      genero: this.$store.state.store.datosUsuario.gender,
      opciones_genero: [this.$t('male'), this.$t('female')],
      email: this.$store.state.store.datosUsuario.email,
      fecha: this.$store.state.store.datosUsuario.date,
      isPwd: true,
      sesion: false,
      url: '',
      new_url: '',
      contrasena: '',
      provider: this.$store.state.store.datosUsuario.provider
    }
  },

  methods: {
    onSubmit () {
      this.$refs.nombre.validate()
      this.$refs.usuario.validate()
      this.$refs.genero.validate()
      this.$refs.fecha.validate()

      if (this.provider === 'password') {
        this.$refs.email.validate()
        this.$refs.contrasena.validate()
      }

      if (this.$refs.nombre.hasError || this.$refs.usuario.hasError || this.$refs.genero.hasError || this.$refs.email.hasError || this.$refs.fecha.hasError | this.$refs.contrasena.hasError) {
        this.formHasError = true
      } else {
        this.subirImagen()
      }
    },

    onReset () {
      this.nombre = null
      this.usuario = null
      this.fecha = null
      this.email = null
      this.genero = null

      this.$refs.nombre.resetValidation()
      this.$refs.usuario.resetValidation()
      this.$refs.fecha.resetValidation()
      this.$refs.genero.resetValidation()

      if (this.provider === 'password') {
        this.$refs.contrasena.resetValidation()
        this.$refs.email.resetValidation()
      }
    },

    Success () {
      this.$q.notify({
        icon: 'done',
        color: 'positive',
        message: this.$t('updated'),
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
    subirImagen () {
      const file = document.getElementById('foto').files[0]

      if (file === undefined) {
        this.new_url = this.photoURL
        console.log('Caso no se sube foto')
        this.actualizarUsuario()
      } else {
        console.log('Caso se sube foto')
        const storageRef = firebaseStg.ref('avatares/usuarios/' + this.email)
        const thisRef = storageRef.child('foto')

        const that = this
        thisRef.put(file)
          .then(function (snapshot) {
            console.log('actualizando foto')
            thisRef.getDownloadURL().then((url) => {
              that.new_url = url
              that.actualizarUsuario()
            })
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    actualizarUsuario () {
      axios({
        method: 'post',
        url: 'https://canarygo.herokuapp.com/autorizar',
        data: {
          tipo: 'Actualizar perfil',
          nombre: this.nombre,
          usuario: this.usuario,
          genero: this.genero,
          fecha: this.fecha,
          correo: this.email,
          contrasena: this.contrasena,
          foto: this.new_url,
          token: this.$store.state.store.token
        }
      })
        .then((response) => {
          // console.log('RESPUESTA DEL SERVER', response.data)
          if (response.data.includes('Usuario actualizado')) {
            this.Success()
            console.log('actualizando datos')
            this.actualizarLocal()
          } else {
            this.$q.notify({
              color: 'negative',
              message: this.$t('update_error'),
              position: 'bottom',
              timeout: 2000,
              progress: true
            })
          }
        }, (error) => {
          console.log('EL ERROR ES', error)
        })
    },
    actualizarLocal () {
      const usuario = {
        name: this.nombre,
        date: this.fecha,
        gender: this.genero,
        photoURL: this.new_url,
        displayName: this.usuario,
        email: this.email,
        provider: this.$store.state.store.datosUsuario.provider
      }

      this.$store.dispatch('store/anadirUsuario', usuario).then(() => {
        setTimeout(() => {
          // this.Success()
          console.log('actualizando datos local')
          this.$router.push('events')
        }, 500)
      })
    },
    borrarUsuario () {
      this.alert = true
    },
    borrar () {
      if (this.confirm) {
        firebaseAuth.signOut()
        this.$store.dispatch('store/borrarUsuario')
        this.$router.push('home')
        // Borramos de la bbdd
        axios({
          method: 'delete',
          url: 'https://canarygo.herokuapp.com/autorizar',
          data: {
            token: this.$store.state.store.token
          }
        })
      }
    },
    confirmar () {
      this.confirm = true
    },
    ComprobarLogin () {
      // console.log('COMPROBANDO USUARIO')
      firebaseAuth.signInWithCustomToken(this.$store.state.store.token).then(() => {
        // console.log('AUTORIZADO', this.$store.state.store.token)
      }).catch(function () {
        this.$store.dispatch('store/borrarUsuario')
        this.saludo = ''
        this.img = ''
        console.clear()
        this.$router.push('login')
      })
    }
  },
  updated () {
    this.borrar()
    if (document.getElementById('foto').files[0] !== undefined) {
      document.getElementsByClassName('q-pa-md q-gutter-md imagen_default')[0].setAttribute('style', 'display: none;')
    }
  },
  mounted () {
    // Verificamos si esta logueado
    this.ComprobarLogin()

    // Comprobamos tipo de usuario
    if (this.provider !== 'password') {
      document.getElementsByClassName('Contrasena')[0].setAttribute('style', 'display:none')
      document.getElementsByClassName('Email')[0].setAttribute('style', 'display:none')
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
