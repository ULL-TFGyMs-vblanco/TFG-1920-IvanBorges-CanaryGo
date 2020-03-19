<template>
  <div class="q-pa-md q-gutter-md">
    <div class="seccion-info1">
      <div class="text-center">
        <q-icon :name="icono" size="50px" />
        <br />
        <br />
        <p class="text-h3 text-bold text-black-2 text-center">{{titulo}}</p>
        <p class="text-h5 text-bold text-black-2 text-center">{{descripcion}}</p>
      </div>

      <!-- <br /> -->
      <!-- <br /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Seccioninfo',
  props: {
    icono: {
      type: String,
      required: true
    },
    titulo: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
.seccion-info1{
padding-left: 5%;
padding-right: 5%;
/* padding-top: 1%; */
/* padding-bottom: 5%; */
}
</style>
