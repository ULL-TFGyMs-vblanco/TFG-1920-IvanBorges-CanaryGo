<template>
  <q-page padding>
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
          <q-uploader
            ref="foto"
            class="foto"
            url="http://localhost:4444/upload"
            :label="$t('photo')"
            hide-upload-btn
          />

          <q-input
            ref="nombre_evento"
            class="nombre_evento"
            filled
            v-model="nombre_evento"
            :label="$t('event_name')"
            :hint="$t('event_name_hint')"
            type="name"
            lazy-rules
            :rules="[ val => val && val.length > 0 || $t('event_name_fail')]"
          />

          <q-input
            ref="localizacion"
            class="localizacion"
            filled
            v-model="localizacion"
            :label="$t('event_location')"
            :hint="$t('event_location_hint')"
            type="user"
            lazy-rules
            :rules="[ val => val && val.length > 0 || $t('event_location_fail')]"
          />

          <q-input
            ref="fecha_inicio"
            class="fecha_inicio"
            filled
            v-model="fecha_inicio"
            :label="$t('event_date')"
            :hint="$t('event_date_hint')"
            lazy-rules
            :rules="[
          val => val && val.length > 0 || $t('event_date_fail'),
          val => val.length === 10 || $t('event_date_fail_2'),
          'date',
          ]"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="fecha_inicio" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input
            ref="fecha_fin"
            class="fecha_fin"
            filled
            v-model="fecha_fin"
            :label="$t('event_date_end')"
            :hint="$t('event_date_hint_end')"
            lazy-rules
            :rules="[
          val => val && val.length > 0 || $t('event_date_fail_end'),
          val => val.length === 10 || $t('event_date_fail_2'),
          'date',
          ]"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy2" transition-show="scale" transition-hide="scale">
                  <q-date v-model="fecha_fin" @input="() => $refs.qDateProxy2.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input
            ref="precio"
            class="precio"
            filled
            v-model="precio"
            :label="$t('price')"
            :hint="$t('price_hint')"
            type="number"
            lazy-rules
            :rules="[ val => val && val.length > 0 || $t('price_fail')]"
          />

          <q-input
            ref="descuento"
            class="descuento"
            filled
            v-model="descuento"
            :label="$t('price_discount')"
            :hint="$t('price_discount_hint')"
            type="name"
          />

          <q-item v-ripple class="text-left">
            <q-item-section>
              <q-item-label>
                <q-avatar size="40px" label="cuenta">
                  <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                </q-avatar>
                {{usuario}}
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-input
            ref="descripcion"
            class="descripcion"
            v-model="descripcion"
            :label="$t('description')"
            :hint="$t('description_hint')"
            filled
            autogrow
            counter
            type="text"
            lazy-rules
            :rules="[ val => val && val.length > 0 || $t('description_fail')]"
          />

          <div class="text-center">
            <q-checkbox class="Terms" name="sesion" v-model="sesion" :label="$t('event_terms')" />
            <br />
          </div>
          <div>
            <q-btn class="Compartir" :label="$t('share')" type="submit" color="primary" />
            <q-btn class="Reset" :label="$t('clean')" type="reset" color="primary" flat />
          </div>
        </form>
      </div>
    </div>
  </q-page>
</template>

<script>

import { firebaseDb } from 'boot/firebase'

export default {
  name: 'NuevoEvento',
  data () {
    return {
      nombre_evento: '',
      localizacion: '',
      fecha_inicio: '',
      fecha_fin: '',
      precio: '',
      descripcion: '',
      descuento: '',
      sesion: false,
      usuario: 'Diego'
    }
  },
  methods: {
    onSubmit () {
      // this.$refs.foto.validate()
      this.$refs.nombre_evento.validate()
      this.$refs.localizacion.validate()
      this.$refs.fecha_inicio.validate()
      this.$refs.fecha_fin.validate()
      this.$refs.precio.validate()
      // this.$refs.descuento.validate()
      this.$refs.descripcion.validate()

      if (this.$refs.foto.hasError || this.$refs.nombre_evento.hasError || this.$refs.localizacion.hasError || this.$refs.fecha_inicio.hasError || this.$refs.fecha_fin.hasError || this.$refs.precio.hasError || this.$refs.descripcion.hasError) {
        this.formHasError = true
      } else if (this.sesion !== true) {
        this.$q.notify({
          color: 'negative',
          message: this.$t('event_fail'),
          position: 'bottom',
          timeout: 2000,
          progress: true
        })
      } else {
        this.$q.notify({
          icon: 'done',
          color: 'positive',
          message: this.$t('event_sucess'),
          position: 'bottom',
          timeout: 1000,
          progress: true
        })
        this.añadirEvento()
        this.$router.push('events')
      }
    },
    añadirEvento () {
      firebaseDb.collection('eventos').add({
        nombre_evento: this.nombre_evento,
        localizacion: this.localizacion,
        fecha_inicio: this.fecha_inicio,
        fecha_fin: this.fecha_fin,
        precio: this.precio,
        descuento: this.descuento,
        descripcion: this.descripcion
      })
        .then(function (docRef) {
          console.log('Evento con ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error añadiendo evento ', error)
        })
    },

    onReset () {
      this.nombre_evento = null
      this.localizacion = null
      this.fecha_inicio = null
      this.fecha_fin = null
      this.precio = null
      this.descuento = null
      this.descripcion = null

      // this.$refs.foto.resetValidation()
      this.$refs.nombre_evento.resetValidation()
      this.$refs.localizacion.resetValidation()
      this.$refs.fecha_inicio.resetValidation()
      this.$refs.fecha_fin.resetValidation()
      this.$refs.precio.resetValidation()
      this.$refs.descuento.resetValidation()
      this.$refs.descripcion.resetValidation()
    }
  }
}
</script>

<style>
.foto {
  display: block;
  text-align: center;
  width: auto;
  height: auto;
}

#formulario {
  max-width: 100%;
  /* padding-right: 20%;
  padding-left: 20%; */

  padding-right: 8%;
  padding-left: 8%;
  padding-top: 2%;
  padding-bottom: 10%;
}
</style>
