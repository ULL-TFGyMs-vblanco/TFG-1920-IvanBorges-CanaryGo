<template>
  <div>
    <l-map
      id="mapa"
      style="height: 350px"
      cursor="enable"
      :zoom="zoom"
      :center="center"
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
      <l-marker
        id="marker"
        :lat-lng="markerLatLng"
      >
        <l-popup id="popup_marker">{{center}}</l-popup>
      </l-marker>
    </l-map>
    <br />
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet-geosearch@2.6.0/assets/css/leaflet.css"
    />
  </div>
</template>

<script>

import { LMap, LTileLayer, LControlLayers, LMarker, LPopup } from 'vue2-leaflet'
// import L, { Icon } from 'leaflet'
import 'leaflet-control-geocoder'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import { OpenStreetMapProvider } from 'leaflet-geosearch'

// esta parte resuelve un problema donde los marcadores no aparecían
delete Icon.Default.prototype._getIconUrl

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
  name: 'MapaSimple',
  components: {
    LMap,
    LTileLayer,
    LControlLayers,
    LMarker,
    LPopup
  },
  data () {
    return {
      index: 1,
      marker: true,
      geosearchOptions: {
        provider: new OpenStreetMapProvider()
      },
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 14,
      // center: [28.4682400, -16.2546200],
      // markerLatLng: L.latLng(27.8682400, -15.6546200),
      markerinfo: 'Evento',
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
      ]
    }
  },
  props: {
    center: {
      // type: String,
      // required: true
    },
    markerLatLng: {
      //   // type: String,
      //   // required: true
    }
  },
  mounted () {
    // Establecer idioma
    document.getElementsByClassName('leaflet-control-zoom-in')[0].setAttribute('title', this.$t('zoom_in'))
    document.getElementsByClassName('leaflet-control-zoom-out')[0].setAttribute('title', this.$t('zoom_out'))
  }
}
</script>
