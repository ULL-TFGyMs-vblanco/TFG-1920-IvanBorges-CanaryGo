<template>
  <div>
    <div class="row no-wrap q-pa-md text-center">
      <div class="column negrita">
        <div class="text-h6 q-mb-md text-center negrita saludo">{{saludo}}</div>
        <div class="text-h6 q-mb-md text-center negrita saludo_2" >{{saludo_2}}</div>

      </div>

      <q-separator vertical inset class="q-mx-lg" />

      <div class="column items-center">
        <q-avatar size="72px" label="cuenta">
          <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
        </q-avatar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Usuario',
  data () {
    return {
      saludo: 'Bienvenido, Diego',
      saludo_2: '¿Qué tienes en mente?'
    }
  }
}
</script>

<style>
.negrita {
  font-weight: bold;
  font-size: 120%;
}

.saludo {
  font-weight: bold;
  font-size: 120%;
}

.saludo_2 {
  font-weight: bold;
  color: #ec9718;
}

</style>
