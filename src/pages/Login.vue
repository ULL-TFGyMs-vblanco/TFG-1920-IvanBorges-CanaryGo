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
          ref="email"
          filled
          v-model="email"
          :label="$t('email') "
          :hint="$t('email_hint')"
          type="email"
          lazy-rules
          :rules="[ val => val && val.length > 0 || $t('email_fail')]"
        />

        <q-input
          ref="contrasena"
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
          <q-checkbox name="sesion" v-model="sesion" :label="$t('remember')" />
          <br />

          <!-- to="/restore" -->
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label style="color: #ec9718">{{$t('password_reset')}}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div>
          <q-btn :label="$t('login')" type="submit" color="primary" />
          <q-btn :label="$t('clear')" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  email: 'Index',
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
        this.$q.notify({
          color: 'negative',
          message: this.$t('login_fail'),
          position: 'bottom',
          timeout: 2000,
          progress: true
        })
      } else {
        this.$q.notify({
          icon: 'done',
          color: 'positive',
          message: this.$t('login_sucess'),
          position: 'bottom',
          timeout: 1000,
          progress: true
        })
      }
    },

    onReset () {
      this.email = null
      this.contrasena = null

      this.$refs.email.resetValidation()
      this.$refs.contrasena.resetValidation()
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
