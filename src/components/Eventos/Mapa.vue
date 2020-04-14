<template>
  <q-page class="col">
    <div id="mapa">
      <gmap-map
        :center="center"
        :zoom="zoom"
        :options="options"
        style="width: 100%; height: 450px;"
      >
        <gmap-marker v-for="(marker) in markers" :key="marker.key" :position="marker" :icon="icon"></gmap-marker>
      </gmap-map>
    </div>
  </q-page>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'api-key-google-maps'
  }
})

export default {
  name: 'Mapa',
  data () {
    return {
      center: {
        lat: 36.60338869729776,
        lng: -4.643738644531254
      },
      zoom: 7,
      markers: [
        { lat: 36.71395099999999, lng: -4.432000000000016 },
        { lat: 36.51007199999999, lng: -4.882447400000046 }
      ],
      options: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        fullscreenControl: true
      },
      icon: '/statics/marker.png'
    }
  }
}
</script>
