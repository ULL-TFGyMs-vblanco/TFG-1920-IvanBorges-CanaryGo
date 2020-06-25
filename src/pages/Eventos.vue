<template>
  <q-page padding>
    <!-- <Toolbar></Toolbar> -->
    <Usuario
      :key="$i18n.locale"
      v-bind:datos="this.datos_evento"
      @clicked="onClickChildSearch"
    ></Usuario>
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
      datos_evento_backup: [],
      tab: 'tab1',
      isla: ''
    }
  },
  methods: {
    Mostrar () {
      // console.log('LEYENDO DOC', this.$store.state.store)

      axios({
        method: 'put',
        url: 'https://canarygo.herokuapp.com/eventos',
        data: {
          tipo: 'Consultar',
          tab: this.tab,
          isla: this.isla,
          token: String(this.$store.state.store.token)
        }
      })
        .then((response) => {
          // console.log('RESPUESTA DEL SERVER EVENTOS', response.data)
          if (response.data === 'Error al verificar usuario en Evento') {
            // Borramos credenciales
            this.$store.dispatch('store/borrarUsuario')
            this.saludo = ''
            this.img = ''
            console.clear()
            this.$router.push('login')
          } else {
            this.datos_evento = response.data
            this.datos_evento_backup = response.data
          }
        }, (error) => {
          console.log('EL ERROR ES', error)
        })
    },
    onClickChild (tab, isla) {
      this.tab = tab
      this.isla = isla

      this.Mostrar()
    },
    onClickChildSearch (datosbusqueda) {
      if (datosbusqueda === '') {
        this.datos_evento = this.datos_evento_backup
      } else {
        this.datos_evento = datosbusqueda
      }
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
