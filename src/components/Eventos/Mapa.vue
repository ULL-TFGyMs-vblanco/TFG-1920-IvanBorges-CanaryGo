<template>
  <div>
    <l-map
      id="mapa"
      style="height: 350px"
      cursor="enable"
      :zoom="zoom"
      :center="center"
      @click="addMarker"
      @change="Localizar_isla"
    >
      <l-control-layers position="topright"></l-control-layers>
      <l-tile-layer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        v-bind:name="tileProvider.name"
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
          name: this.$t('map0'),
          visible: true,
          attribution:
            '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        },
        {
          name: this.$t('map1'),
          visible: false,
          url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
          attribution:
            'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        }
      ],
      isla: '',
      // Lat y Lng islas
      // Lanzarote
      lnz_lat_min: 28.820834,
      lnz_lat_max: 29.463718,
      lnz_lng_min: -13.892249,
      lnz_lng_max: -13.354280,
      // Fuerteventura
      ftv_lat_min: 27.994879,
      ftv_lat_max: 28.780818,
      ftv_lng_min: -14.563415,
      ftv_lng_max: -13.761317,
      // Gran Canaria
      gcn_lat_min: 27.702862,
      gcn_lat_max: 28.231178,
      gcn_lng_min: -15.854814,
      gcn_lng_max: -15.314903,
      // Tenerife
      tnf_lat_min: 27.935335,
      tnf_lat_max: 28.646747,
      tnf_lng_min: -16.944341,
      tnf_lng_max: -16.089806,
      // La Gomera
      gmr_lat_min: 27.986798,
      gmr_lat_max: 28.243741,
      gmr_lng_min: -17.375494,
      gmr_lng_max: -17.068637,
      // La Palma
      plm_lat_min: 28.433482,
      plm_lat_max: 28.881690,
      plm_lng_min: -18.031932,
      plm_lng_max: -17.670697,
      // El Hierro
      hro_lat_min: 27.600233,
      hro_lat_max: 27.890715,
      hro_lng_min: -18.197013,
      hro_lng_max: -17.835778
    }
  },
  methods: {
    addMarker (event) {
      // Datos
      const busqueda = document.getElementsByClassName('leaflet-bar-part leaflet-bar-part-single')[0]
      const reset = document.getElementsByClassName('reset')[0]

      // Establecer idioma
      document.getElementsByClassName('leaflet-bar-part leaflet-bar-part-single')[0].setAttribute('title', this.$t('direction'))
      document.getElementsByClassName('glass')[0].setAttribute('placeholder', this.$t('direction'))

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
      this.Localizar_isla()
      this.$emit('clicked', this.markerLatLng, this.isla)
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
            this.markerinfo = this.$t('no_location')
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
    },
    Localizar_isla () {
      // console.log('Localizando isla')
      const coordenadas = String(this.markerLatLng).slice(7, -1).split(',')
      const lat = Number(coordenadas[0])
      const lng = Number(coordenadas[1])
      if ((this.Rango(this.lnz_lat_min, this.lnz_lat_max, lat)) && (this.Rango(this.lnz_lng_min, this.lnz_lng_max, lng))) {
        this.isla = 'Lanzarote'
      } else if ((this.Rango(this.ftv_lat_min, this.ftv_lat_max, lat)) && (this.Rango(this.ftv_lng_min, this.ftv_lng_max, lng))) {
        this.isla = 'Fuerteventura'
      } else if ((this.Rango(this.gcn_lat_min, this.gcn_lat_max, lat)) && (this.Rango(this.gcn_lng_min, this.gcn_lng_max, lng))) {
        this.isla = 'Gran Canaria'
      } else if ((this.Rango(this.tnf_lat_min, this.tnf_lat_max, lat)) && (this.Rango(this.tnf_lng_min, this.tnf_lng_max, lng))) {
        this.isla = 'Tenerife'
      } else if ((this.Rango(this.gmr_lat_min, this.gmr_lat_max, lat)) && (this.Rango(this.gmr_lng_min, this.gmr_lng_max, lng))) {
        this.isla = 'La Gomera'
      } else if ((this.Rango(this.plm_lat_min, this.plm_lat_max, lat)) && (this.Rango(this.plm_lng_min, this.plm_lng_max, lng))) {
        this.isla = 'La Palma'
      } else if ((this.Rango(this.hro_lat_min, this.hro_lat_max, lat)) && (this.Rango(this.hro_lng_min, this.hro_lng_max, lng))) {
        this.isla = 'El Hierro'
      }
      // console.log('La isla es ', this.isla)
    },
    Rango (min, max, num) {
      return num >= min && num <= max
    }
  },
  computed: {
    component () {
      return { ...this.$t('map1') }
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
