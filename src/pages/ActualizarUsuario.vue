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
      url: ''
    }
  },

  methods: {
    onSubmit () {
      this.$refs.nombre.validate()
      this.$refs.usuario.validate()
      this.$refs.email.validate()
      this.$refs.fecha.validate()
      this.$refs.genero.validate()

      if (this.$refs.nombre.hasError || this.$refs.usuario.hasError || this.$refs.genero.hasError || this.$refs.email.hasError || this.$refs.fecha.hasError) {
        this.formHasError = true
      } else {
        this.actualizarUsuario()
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
      this.$refs.email.resetValidation()
      this.$refs.genero.resetValidation()
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
    },
    actualizarUsuario () {
      // Subir informacion
      // const file = document.getElementById('foto').files[0]

      // if (file === undefined) {
      //   this.$q.notify({
      //     color: 'negative',
      //     message: this.$t('event_fail_3'),
      //     position: 'bottom',
      //     timeout: 2000,
      //     progress: true
      //   })
      // }
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
          token: this.$store.state.store.token
        }
      })
        .then((response) => {
          // console.log('RESPUESTA DEL SERVER', response.data)
          if (response.data.includes('Usuario actualizado')) {
            this.$q.notify({
              icon: 'done',
              color: 'positive',
              message: this.$t('event_sucess'),
              position: 'bottom',
              timeout: 1000,
              progress: true
            })
            // var id = response.data.split(':')
            this.$router.push('events')
            // this.subirImagen(id[1], file)
            // this.$router.push('events')
          } else {
            this.$q.notify({
              color: 'negative',
              message: this.$t('event_fail2'),
              position: 'bottom',
              timeout: 2000,
              progress: true
            })
          }
        }, (error) => {
          console.log('EL ERROR ES', error)
        })
    },
    subirImagen (id, image) {
      const storageRef = firebaseStg.ref('eventos/' + id)
      const thisRef = storageRef.child('foto')

      thisRef.put(image)
        .then(function (snapshot) {
          console.log('actualizando foto')
          thisRef.getDownloadURL().then(function (url) {
            // console.log('Datos fotito', id + ': ', url)
            axios({
              method: 'post',
              url: 'https://canarygo.herokuapp.com/eventos',
              data: {
                operacion: 'Evento',
                foto: url,
                id: id
              }
            })
          })
        })
        .catch(function (error) {
          console.log(error)
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
      }
    },
    confirmar () {
      this.confirm = true
    }
  },
  updated () {
    this.borrar()
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
