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

        <div>
          <q-btn
            class="Registro"
            :label="$t('reset_password')"
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
import { firebaseAuth } from 'boot/firebase'

export default {
  name: 'Restablecer',
  data () {
    return {
      email: null
    }
  },
  methods: {
    onSubmit () {
      this.$refs.email.validate()

      if (this.$refs.email.hasError) {
        this.formHasError = true
      } else if (this.sesion !== true) {

      }
      this.Reset()
    },

    onReset () {
      this.email = null
      this.$refs.email.resetValidation()
    },
    Reset () {
      var auth = firebaseAuth
      var that = this

      auth.sendPasswordResetEmail(this.email)
        .then(function () {
          // Correo enviado
          that.Success()
          that.$router.push('/login')
        })
        .catch(function (error) {
          console.log(error)
          that.Fail()
          that.$router.push('/login')
        })
    },
    Success () {
      this.$q.notify({
        icon: 'done',
        color: 'positive',
        message: this.$t('reset_verification'),
        position: 'bottom',
        timeout: 1000,
        progress: true
      })
    },
    Fail () {
      this.$q.notify({
        color: 'negative',
        message: this.$t('reset_error'),
        position: 'bottom',
        timeout: 2000,
        progress: true
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
