<template>
  <div>
    <l-map
      id="mapa"
      style="height: 350px"
      cursor="enable"
      :zoom="zoom"
      :center="center"
      @click="addMarker"
    >
      <l-control-layers position="topright"></l-control-layers>
      <l-tile-layer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :name="tileProvider.name"
        :visible="tileProvider.visible"
        :url="tileProvider.url"
        :attribution="tileProvider.attribution"
        zoomAnimation="true"
        layer-type="base"
      ></l-tile-layer>
      <l-marker id="marker" :lat-lng="markerLatLng">
        <l-popup id="popup_marker">{{markerinfo}}</l-popup>
      </l-marker>
      <v-geosearch :options="geosearchOptions"></v-geosearch>
    </l-map>
    <br />
    <link rel="stylesheet" href="https://unpkg.com/leaflet-geosearch@2.6.0/assets/css/leaflet.css" />
  </div>
</template>

<script>

import { LMap, LTileLayer, LControlLayers, LMarker, LPopup } from 'vue2-leaflet'
import L, { Icon } from 'leaflet'
import 'leaflet-control-geocoder'
import 'leaflet/dist/leaflet.css'
import { OpenStreetMapProvider } from 'leaflet-geosearch'
import VGeosearch from 'vue2-leaflet-geosearch'
// import $ from 'jquery'

// esta parte resuelve un problema donde los marcadores no aparecían
delete Icon.Default.prototype._getIconUrl

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
  name: 'Mapa',
  components: {
    LMap,
    LTileLayer,
    LControlLayers,
    LMarker,
    LPopup,
    VGeosearch
  },
  data () {
    return {
      marker: true,
      geosearchOptions: {
        provider: new OpenStreetMapProvider()
      },
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [28.4682400, -16.2546200],
      markerLatLng: L.latLng(27.8682400, -15.6546200),
      markerLatLng_backup: '',
      cambiar: true,
      markerinfo: '',
      tileProviders: [
        {
          name: 'Mapa estándar',
          visible: true,
          attribution:
            '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        },
        {
          name: 'Mapa topográfico',
          visible: false,
          url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
          attribution:
            'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        }
      ]
    }
  },
  methods: {
    addMarker (event) {
      // Datos
      const busqueda = document.getElementsByClassName('leaflet-bar-part leaflet-bar-part-single')[0]
      // const busquedaactiva = document.getElementsByClassName('geosearch leaflet-bar leaflet-control leaflet-control-geosearch active')[0]
      const reset = document.getElementsByClassName('reset')[0]
      // const barra = document.getElementsByClassName('glass ')[0]
      // const resultadosactivos = document.getElementsByClassName('results active')[0]

      // Establecer idioma
      document.getElementsByClassName('leaflet-bar-part leaflet-bar-part-single')[0].setAttribute('title', 'Introduce una direccion')
      document.getElementsByClassName('glass')[0].setAttribute('placeholder', 'Introduce una dirección')

      if (document.getElementsByClassName('leaflet-marker-icon leaflet-zoom-animated leaflet-interactive')[1]) {
        document.getElementsByClassName('leaflet-marker-icon leaflet-zoom-animated leaflet-interactive')[1].click()
        const ubicacion = document.getElementsByClassName('leaflet-popup-content')[1].outerText
        this.Geocode(ubicacion)
        reset.click()
        document.getElementsByClassName('leaflet-marker-icon leaflet-zoom-animated leaflet-interactive')[0].click()
      }

      // Marcador
      this.markerLatLng = L.latLng(event.latlng.lat, event.latlng.lng)
      document.getElementsByClassName('leaflet-marker-icon leaflet-zoom-animated leaflet-interactive')[0].click()
      this.reverseGeocode()

      // Cerrar busqueda
      reset.onclick = function () {
        busqueda.click()
        if (document.getElementsByClassName('leaflet-marker-icon leaflet-zoom-animated leaflet-interactive')[1]) {
          document.getElementsByClassName('leaflet-marker-icon leaflet-zoom-animated leaflet-interactive')[1].removeChild()
        }
      }
      this.$emit('clicked', this.markerLatLng)
    },
    reverseGeocode () {
      const Nominatim = require('nominatim-geocoder')
      const geocoder = new Nominatim()
      const ubicacion = this.markerLatLng.lat + ', ' + this.markerLatLng.lng

      geocoder.search({ q: ubicacion })
        .then((response) => {
          if (response.length >= 1) {
            this.markerinfo = response[0].display_name
          } else {
            this.markerinfo = 'Sin ubicación'
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    Geocode (ubicacion) {
      const Nominatim = require('nominatim-geocoder')
      const geocoder = new Nominatim()

      geocoder.search({ q: ubicacion })
        .then((response) => {
          if (response.length >= 1) {
            this.markerLatLng = L.latLng(response[0].lat, response[0].lon)
            this.markerinfo = ubicacion
          } else {
            // No se cambia
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
#mapid {
  height: 360px;
}

.search-input {
  font-family: Courier;
}
.search-input,
.leaflet-control-search {
  max-width: 400px;
}
</style>
