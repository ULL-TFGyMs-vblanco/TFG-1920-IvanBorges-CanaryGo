<template>
  <div class="q-pa-md q-gutter-md">
    <div class="seccion-info1">
      <div class="text-center">
        <q-icon :name="icono" size="50px" />
        <br />
        <br />
        <p class="text-bold text-black-2 text-center" id="seccionh3">{{$t(titulo)}}</p>
        <p class="text-bold text-black-2 text-center" id="seccionh4">{{$t(descripcion)}}</p>
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
.seccion-info1 {
  /* padding-left: 5%;
  padding-right: 5%; */
  background-color: rgb(255, 255, 255);
  background-color: rgba(255, 255, 255, 0.6);
  color: black;

  /* background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);
  color: white; */

  font-weight: bold;
  border: 2px solid black;

  padding: 20px;
  text-align: center;
}

#seccionh3 {
  font-size: calc(16px + 6 * ((100vw - 20px) / 680));
  /* font-size: 33px; */
}
#seccionh4 {
  font-size: calc(10px + 6 * ((100vw - 20px) / 680));
  /* font-size: 22px; */
}
</style>
