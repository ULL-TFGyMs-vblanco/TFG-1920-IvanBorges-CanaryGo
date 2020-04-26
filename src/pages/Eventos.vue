<template>
  <q-page padding>
    <!-- <Toolbar></Toolbar> -->
    <Usuario :key="$i18n.locale"></Usuario>
    <Filtro class="filtro" @clicked="DataChild" />
    <Evento class="evento" v-for="dato in datos_evento" :key="dato.nombre_evento" v-bind="dato"></Evento>
    <q-btn class="boton_add" round color="primary" icon="add" size="150%" to="/new" />
  </q-page>
</template>

<script>
import Evento from 'components/Eventos/Evento'
import Usuario from 'components/Eventos/Usuario'
import Filtro from 'components/Eventos/Filtro'
// import Toolbar from 'components/Toolbar'
import { firebaseDb, firebaseStg } from 'boot/firebase'

export default {
  name: 'Eventos',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Evento, Usuario, Filtro
    //  Toolbar
  },
  data () {
    return {
      datos_evento: [],
      tab: 'tab1'
    }
  },
  methods: {
    obtenerEvento (filtro, isla) {
      this.datos_evento = []
      firebaseDb.collection('eventos').orderBy(filtro, 'desc').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // Leemos los datos
          const evento = {
            foto: '',
            nombre_evento: doc.data().nombre_evento,
            localizacion: doc.data().localizacion,
            precio: doc.data().precio,
            fecha_inicio: doc.data().fecha_inicio,
            votos: doc.data().votos,
            comentarios: doc.data().comentarios,
            usuario: doc.data().usuario,
            isla: doc.data().isla
          }

          const storageRef = firebaseStg.ref('eventos/' + doc.id)
          var fotoRef = storageRef.child('foto')
          // Obtener foto
          fotoRef.getDownloadURL().then(function (url) {
            evento.foto = url
          })

          this.datos_evento.push(evento)
        })
      })
    },
    DataChild (tab) {
      this.tab = tab
      this.Mostrar()
    },
    Mostrar () {
      console.log('LEYENDO DOC')
      if (this.tab === 'tab1') {
        this.obtenerEvento('votos')
      } else if (this.tab === 'tab2') {
        this.obtenerEvento('fecha_creacion')
      } else if (this.tab === 'tab3') {
        this.obtenerEvento('isla')
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
