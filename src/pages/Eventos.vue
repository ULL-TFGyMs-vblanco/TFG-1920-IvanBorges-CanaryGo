<template>
  <q-page padding>
    <Toolbar></Toolbar>
    <Evento></Evento>
  </q-page>
</template>

<script>
import Evento from 'components/Evento'
import Toolbar from 'components/Toolbar'

export default {
  name: 'Eventos',
  components: {
    Evento, Toolbar
  }
}
</script>
