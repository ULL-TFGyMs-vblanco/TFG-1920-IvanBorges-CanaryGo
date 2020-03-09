
<template>

  <!-- <div class="q-pa-md q-gutter-md">
    <div class="row justify-between">

    <q-parallax :height="600" :speed="0.8"
      src="../assets/images/index/beach-1853939.jpg"
    >
      <h1 class="text-white text-center">Encuentra los eventos que tanto buscas</h1>

    </q-parallax>

    <q-parallax :height="600" :speed="0.5"
      src="../assets/images/index/paddle-839814.jpg"
    >
      <h1 class="text-white text-center">Organiza el calendario a tu manera</h1>
    </q-parallax>

    <q-parallax :height="600" :speed="0.8"
      src="../assets/images/index/concert-768722.jpg"
    >
      <h1 class="text-white text-center">Conoce gente nueva dentro de la comunidad</h1>
    </q-parallax>

    <q-parallax :height="600" :speed="0.6"
      src="../assets/images/index/yoga-2176668.jpg"
    >
      <h1 class="text-white text-center">Basic</h1>
    </q-parallax>

    </div>
  </div> -->

<div>
     <q-fab color="purple" icon="keyboard_arrow_down" direction="down">
        <q-fab-action color="primary" @click="onClick" icon="mail" />
        <q-fab-action color="secondary" @click="onClick" icon="alarm" />
      </q-fab>
  </div>

</template>

<script>
export default {
  data () {
    return {
      open: false
    }
  },

  methods: {
    onClick () {
      console.log('Boton pulsado')
    }
  }

}
</script>

<style>
</style>
