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
      tab: 'tab1',
      isla: ''
    }
  },
  methods: {
    obtenerEvento (filtro) {
      this.datos_evento = []
      filtro.get().then((querySnapshot) => {
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
            isla: doc.data().isla,
            id: doc.id,
            foto_usuario: doc.data().foto_usuario
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
    DataChild (tab, isla) {
      this.tab = tab
      this.isla = isla
      this.Mostrar()
    },
    Mostrar () {
      console.log('LEYENDO DOC')
      // Consultas
      var eventos = firebaseDb.collection('eventos')
      var destacados = eventos.orderBy('votos', 'desc')
      var novedades = eventos.orderBy('fecha_creacion', 'desc')
      var zona = eventos.orderBy('fecha_creacion', 'desc')
      // var isla = eventos.where('isla', '==', 'Tenerife')

      // Gestión consultas
      var consulta
      if (this.tab === 'tab1') {
        consulta = destacados
      } else if (this.tab === 'tab2') {
        consulta = novedades
      } else if (this.tab === 'tab3') {
        consulta = zona
      }

      // Requerimos filtro por isla si es necesario
      if (this.isla !== '') {
        consulta = consulta.where('isla', '==', this.isla)
      }

      // Realizamos consulta final
      this.obtenerEvento(consulta)
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
