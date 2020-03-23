<template>
  <div class="row text-center">
    <div class="q-pa-md" id="formulario" style="width: 100%;">
      <img
        src="../assets/images/CanaryGo/Canary_Go_Icon.png"
        style="width: 100px; height: 100px; border-radius: 20%;"
      />
      <br />
      <br />
      <br />
      <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">
        <q-input
          ref="nombre"
          filled
          v-model="nombre"
          label="Nombre *"
          hint="Escribe tu nombre"
          type="name"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Debes introducir un nombre']"
        />

        <q-input
          ref="usuario"
          filled
          v-model="usuario"
          label="Usuario *"
          hint="Elige tu usuario"
          type="user"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Debes introducir un usuario']"
        />

        <q-input
          ref="fecha"
          filled
          v-model="fecha"
          label="Fecha de nacimiento *"
          hint="Indica tu fecha de nacimiento"
          lazy-rules
          :rules="[
          val => val && val.length > 0 || 'Debes introducir una fecha',
          val => val.length === 10 || 'Introduce un formato correcto de fecha',
          'date',
          ]"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="fecha" @input="() => $refs.qDateProxy.hide()" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input
          ref="email"
          filled
          v-model="email"
          label="Email *"
          hint="Escribe tu email"
          type="email"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Debes introducir un email']"
        />

        <q-input
          ref="contrasena"
          filled
          v-model="contrasena"
          :type="isPwd ? 'password' : 'text'"
          label="Contraseña *"
          hint="Escribe tu contraseña"
          lazy-rules
          :rules="[
          val => val !== null && val !== '' || 'Debes introducir la contraseña',
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
          filled
          v-model="contrasena2"
          :type="isPwd ? 'password' : 'text'"
          label="Contraseña *"
          hint="Repite la contraseña"
          lazy-rules
          :rules="[
          val => val !== null && val !== '' || 'Debes repetir la contraseña',
          val => val === contrasena || 'Las contraseña no coincide'
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
            label="Acepto los términos y condiciones de privacidad"
          />
          <br />
          <!-- to="/terms" -->
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label style="color: #ec9718">Términos y condiciones</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div>
          <q-btn label="Registrarse" type="submit" color="primary" />
          <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import { firebaseAuth } from 'boot/firebase'

export default {
  email: 'Signup',
  data () {
    return {
      nombre: null,
      usuario: null,
      email: null,
      fecha: null,
      contrasena: null,
      contrasena2: null,
      isPwd: true,
      sesion: false
    }
  },

  methods: {
    onSubmit () {
      this.$refs.email.validate()
      this.$refs.contrasena.validate()
      this.$refs.nombre.validate()
      this.$refs.usuario.validate()
      this.$refs.email.validate()
      this.$refs.fecha.validate()
      this.$refs.contrasena.validate()
      this.$refs.contrasena2.validate()

      if (this.$refs.nombre.hasError || this.$refs.usuario.hasError || this.$refs.email.hasError || this.$refs.fecha.hasError || this.$refs.contrasena.hasError || this.$refs.contrasena2.hasError) {
        this.formHasError = true
      } else if (this.sesion !== true) {
        this.$q.notify({
          color: 'negative',
          message: 'Debes aceptar los términos y condiciones',
          position: 'bottom',
          timeout: 2000,
          progress: true
        })
      } else {
        this.$q.notify({
          icon: 'done',
          color: 'positive',
          message: 'Registro correcto',
          position: 'bottom',
          timeout: 1000,
          progress: true
        })
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

      this.$refs.nombre.resetValidation()
      this.$refs.usuario.resetValidation()
      this.$refs.fecha.resetValidation()
      this.$refs.email.resetValidation()
      this.$refs.contrasena.resetValidation()
      this.$refs.contrasena2.resetValidation()
    },
    Registrar () {
      const correo = this.email
      const password2 = this.contrasena

      console.log(this.email)
      console.log(this.contrasena)
      firebaseAuth.createUserWithEmailAndPassword(correo, password2).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
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
