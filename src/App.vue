<template>
  <div id="q-app">
    <router-view />
    <Piepagina></Piepagina>
  </div>
</template>

<script>

import Piepagina from './components/Piepagina.vue'

export default {
  name: 'App',
  components: {
    Piepagina
  }
}
</script>
