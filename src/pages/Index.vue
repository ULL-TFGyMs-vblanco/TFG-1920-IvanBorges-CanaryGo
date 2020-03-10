
<template>
  <div class="q-pa-md q-gutter-md">
    <div class="row justify-between">
      <q-parallax :height="600" :speed="0.8" src="../assets/images/index/beach-1853939.jpg">
        <h1 class="text-white text-center">Encuentra los eventos que tanto buscas</h1>

        <q-card-actions>
          <q-btn
            color="black"
            label="Mas info"
            round
            flat
            dense
            :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded = !expanded"
          />
        </q-card-actions>

        <q-slide-transition>
          <div v-show="expanded">
            <q-separator />
            <q-card-section class="text-subitle2">
              <q-img class="my-card" src="https://cdn.quasar.dev/img/parallax2.jpg" />
              {{ info1}}
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-parallax>

      <div class="info1">
        <q-parallax :height="600" :speed="0.8" src="../assets/images/index/beach-1853939.jpg">
          <h1 class="text-white text-center">Encuentra los eventos que tanto buscas</h1>
        </q-parallax>
      </div>

      <q-parallax :height="600" :speed="0.5" src="../assets/images/index/paddle-839814.jpg">
        <h1 class="text-white text-center">Organiza el calendario a tu manera</h1>
      </q-parallax>

      <q-parallax :height="600" :speed="0.8" src="../assets/images/index/concert-768722.jpg">
        <h1 class="text-white text-center">Conoce gente nueva dentro de la comunidad</h1>
      </q-parallax>

      <q-parallax :height="600" :speed="0.6" src="../assets/images/index/yoga-2176668.jpg">
        <h1 class="text-white text-center">Basic</h1>
      </q-parallax>
    </div>
  </div>
</template>

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

<script>
export default {
  data () {
    return {
      open: false,
      expanded: false,
      tab: 'images'
    }
  },

  methods: {
    onClick () {
      console.log('Boton pulsado')
    }
  }

}
</script>

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

<style>

</style>
