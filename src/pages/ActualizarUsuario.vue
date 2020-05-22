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

          <!-- Selector -->
          <Selectorarchivos
            class="selectorarchivos"
            v-bind:anchura='500'
            v-bind:altura='500'
            v-bind:url="photoURL"
          />
          <br />

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

        <q-input
          ref="contrasena2"
          class="Contrasena2"
          filled
          v-model="contrasena2"
          :type="isPwd ? 'password' : 'text'"
          :label="$t('password')"
          :hint="$t('password_repeat')"
          lazy-rules
          :rules="[
          val => val !== null && val !== '' || $t('password_repeat_fail'),
          val => val === contrasena || $t('password_repeat_fail_2')
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
      nombre: this.$store.state.store.datosUsuario.name,
      usuario: this.$store.state.store.datosUsuario.displayName,
      photoURL: String(this.$store.state.store.datosUsuario.photoURL),
      genero: this.$store.state.store.datosUsuario.gender,
      opciones_genero: [this.$t('male'), this.$t('female')],
      email: this.$store.state.store.datosUsuario.email,
      fecha: this.$store.state.store.datosUsuario.date,
      contrasena: null,
      contrasena2: null,
      isPwd: true,
      sesion: false
    }
  },

  methods: {
    onSubmit () {
      this.$refs.nombre.validate()
      this.$refs.usuario.validate()
      this.$refs.email.validate()
      this.$refs.fecha.validate()
      this.$refs.contrasena.validate()
      this.$refs.contrasena2.validate()
      this.$refs.genero.validate()

      if (this.$refs.nombre.hasError || this.$refs.usuario.hasError || this.$refs.genero.hasError || this.$refs.email.hasError || this.$refs.fecha.hasError || this.$refs.contrasena.hasError || this.$refs.contrasena2.hasError) {
        this.formHasError = true
      } else if (this.sesion !== true) {
        this.$q.notify({
          color: 'negative',
          message: this.$t('register_fail'),
          position: 'bottom',
          timeout: 2000,
          progress: true
        })
      } else {
        this.Registrar()
      }
    },

    onReset () {
      this.nombre = null
      this.usuario = null
      this.fecha = null
      this.email = null
      this.contrasena = null
      this.contrasena2 = null
      this.genero = null

      this.$refs.nombre.resetValidation()
      this.$refs.usuario.resetValidation()
      this.$refs.fecha.resetValidation()
      this.$refs.email.resetValidation()
      this.$refs.contrasena.resetValidation()
      this.$refs.contrasena2.resetValidation()
      this.$refs.genero.resetValidation()
    },
    Registrar () {
      axios({
        method: 'put',
        url: 'https://canarygo.herokuapp.com/autorizar',
        data: {
          tipo: 'Obtener datos',
          correo: this.$store.state.store.datosUsuario.email
        }
      })
        .then((response) => {
          console.log('RESPUESTA DEL SERVER', response)

          if (response.data === 'Error al crear usuario') {
            this.Fail(this.$t('register_fail_2'))
          } else if (response.data.includes('Usuario creado')) {
            this.Success()
            this.alert = true
          }
        }, (error) => {
          console.log('EL ERROR ES', error)
        })
    },

    Success () {
      this.$q.notify({
        icon: 'done',
        color: 'positive',
        message: this.$t('register_sucess'),
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
    }
  },
  mounted () {
    document.getElementsByClassName('picture-preview')[0].setAttribute('prefill', 'https://ichef.bbci.co.uk/news/976/cpsprodpb/F403/production/_109476426_jheison3.png')
    document.getElementById('foto').setAttribute('prefill', 'https://ichef.bbci.co.uk/news/976/cpsprodpb/F403/production/_109476426_jheison3.png')
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
