<template>
  <div id="q-app">
    <router-view />
    <Piepagina></Piepagina>
  </div>
</template>

<script>

import Piepagina from './components/Interfaz/Piepagina'

export default {
  name: 'App',
  components: {
    Piepagina
  }
}
</script>
