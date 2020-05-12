<template>
  <q-page padding>
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
            v-bind:anchura='550'
            v-bind:altura='550'
          />
          <br />
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

          <Mapa
            :key="$i18n.locale"
            @clicked="onClickChild"
          />

          <q-input
            ref="localizacion"
            class="localizacion"
            id="localizacion"
            readonly
            filled
            v-model="localizacion"
            :label="$t('event_location')"
            :hint="$t('event_location_hint')"
            type="text"
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
                    v-model="fecha_inicio"
                    @input="() => $refs.qDateProxy.hide()"
                  />
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
              <q-icon
                name="event"
                class="cursor-pointer"
              >
                <q-popup-proxy
                  ref="qDateProxy2"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date
                    v-model="fecha_fin"
                    @input="() => $refs.qDateProxy2.hide()"
                  />
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

          <q-item
            v-ripple
            class="text-left"
          >
            <q-item-section>
              <q-item-label>
                <q-avatar
                  size="40px"
                  label="cuenta"
                >
                  <img :src="this.img" />
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
            <q-checkbox
              class="Terms"
              name="sesion"
              v-model="sesion"
              :label="$t('event_terms')"
            />
            <br />
          </div>
          <div>
            <q-btn
              class="Compartir"
              :label="$t('share')"
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
  </q-page>
</template>

<script>

import Selectorarchivos from '../components/Eventos/Selectorarchivos'
import Mapa from '../components/Eventos/Mapa'
import axios from 'axios'

export default {
  name: 'NuevoEvento',
  components: { Selectorarchivos, Mapa },
  data () {
    return {
      imagenRef: '',
      nombre_evento: '',
      localizacion: '',
      fecha_inicio: '',
      fecha_fin: '',
      precio: '',
      descripcion: '',
      descuento: '',
      sesion: false,
      // usuario: firebaseAuth.currentUser.displayName,
      // img: firebaseAuth.currentUser.photoURL,
      id: '',
      isla: ''
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

      if (this.$refs.nombre_evento.hasError || this.$refs.localizacion.hasError || this.$refs.fecha_inicio.hasError || this.$refs.fecha_fin.hasError || this.$refs.precio.hasError || this.$refs.descripcion.hasError) {
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
        this.añadirEvento()
      }
    },
    añadirEvento () {
      // Subir informacion
      // const file = document.getElementById('foto').files[0]
      const router = this.$router

      axios({
        method: 'put',
        url: 'https://canarygo.herokuapp.com/eventos',
        data: {
          tipo: 'Crear',
          // foto: file[0],
          nombre_evento: this.nombre_evento,
          localizacion: this.localizacion,
          precio: this.precio,
          fecha_inicio: this.fecha_inicio,
          fecha_fin: this.fecha_fin,
          fecha_creacion: this.fecha_inicio,
          votos: this.votos,
          comentarios: this.comentarios,
          usuario: this.usuario,
          isla: this.isla,
          descuento: this.descuento
          // foto_usuario: this.foto_usuario
        }
      })
        .then((response) => {
          console.log('RESPUESTA DEL SERVER', response.data)
          if (response.data === 'Evento añadido') {
            this.$q.notify({
              icon: 'done',
              color: 'positive',
              message: this.$t('event_sucess'),
              position: 'bottom',
              timeout: 1000,
              progress: true
            })
            this.$router.push('events')
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

      router.push('events')
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
    },
    onClickChild (ubicacion, isla) {
      this.localizacion = String(ubicacion).slice(7, -1)
      this.isla = isla
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
  padding-right: 8%;
  padding-left: 8%;
  padding-top: 2%;
  padding-bottom: 10%;
}
</style>
