
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

        <template v-slot:content="scope">
          <div
            class="absolute column items-center"
            :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
          >
            <img
              src="../assets/images/CanaryGo/Canary_Go_Icon.png"
              style="width: 150px; height: 150px"
            />
            <div class="text-h3 text-bold text-black text-center">Encuentra los eventos que tanto buscas</div>
            <div class="text-h6 text-grey-3 text-center">Mas info</div>
          </div>
        </template>
      </q-parallax>

      <q-parallax :height="600" :speed="0.5" src="../assets/images/index/paddle-839814.jpg">
        <h1 class="text-h3 text-bold text-white text-center">Organiza el calendario a tu manera</h1>
      </q-parallax>

      <q-parallax :height="600" :speed="0.8" src="../assets/images/index/concert-768722.jpg">
        <h1 class="text-h3 text-bold text-white text-center">Conoce gente nueva dentro de la comunidad</h1>
      </q-parallax>

      <q-parallax :height="600" :speed="0.6" src="../assets/images/index/yoga-2176668.jpg">
        <h1 class="text-h3 text-bold text-white text-center">Mejora en la gestión de viajes</h1>
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
