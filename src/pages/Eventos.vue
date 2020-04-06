<template>
  <q-page padding>
    <!-- <Toolbar></Toolbar> -->
    <Usuario></Usuario>
    <Evento></Evento>
    <Evento></Evento>
  </q-page>
</template>

<script>
import Evento from 'components/Eventos/Evento'
import Usuario from 'components/Eventos/Usuario'
// import Toolbar from 'components/Toolbar'

export default {
  name: 'Eventos',
  components: {
    Evento, Usuario
    //  Toolbar
  }
}
</script>
