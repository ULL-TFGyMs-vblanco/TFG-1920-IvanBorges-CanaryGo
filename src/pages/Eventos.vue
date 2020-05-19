<template>
  <q-page padding>
    <!-- <Toolbar></Toolbar> -->
    <Usuario :key="$i18n.locale"></Usuario>
    <Filtro
      class="filtro"
      @clicked="onClickChild"
    />
    <Evento
      class="evento"
      v-for="dato in datos_evento"
      :key="dato.nombre_evento"
      v-bind="dato"
    ></Evento>
    <q-btn
      class="boton_add"
      round
      color="primary"
      icon="add"
      size="150%"
      to="/new"
    />
  </q-page>
</template>

<script>
import Evento from 'components/Eventos/Evento'
import Usuario from 'components/Eventos/Usuario'
import Filtro from 'components/Eventos/Filtro'
// import Toolbar from 'components/Toolbar'
import axios from 'axios'

export default {
  name: 'Eventos',
  components: {

    Evento, Usuario, Filtro
    //  Toolbar
  },
  data () {
    return {
      datos_evento: [],
      tab: 'tab1',
      isla: ''
    }
  },
  methods: {
    Mostrar () {
      console.log('LEYENDO DOC', this.$store.state.store.token)

      axios({
        method: 'put',
        url: 'https://canarygo.herokuapp.com/eventos',
        data: {
          tipo: 'Consultar',
          tab: this.tab,
          isla: this.isla,
          token: this.$store.state.store.token
        }
      })
        .then((response) => {
          console.log('RESPUESTA DEL SERVER EVENTOS', response.data)
          this.datos_evento = response.data
        }, (error) => {
          console.log('EL ERROR ES', error)
        })
    },
    onClickChild (tab, isla) {
      this.tab = tab
      this.isla = isla

      this.Mostrar()
    }
  },
  mounted () {
    this.Mostrar()
  }
}
</script>

<style>
.evento {
  z-index: 0;
}

.boton_add {
  position: fixed;
  bottom: 10%;
  right: 16px;
  font-size: 18px;
  z-index: 1;
}
</style>
