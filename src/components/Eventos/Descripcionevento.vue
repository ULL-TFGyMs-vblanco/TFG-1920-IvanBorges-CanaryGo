<template>
  <div>
    <q-card class="my-card">
      <q-card-section class="fecha text-right">{{ this.fecha_inicio }}</q-card-section>
      <q-card-section horizontal>
        <q-img
          class="col-5"
          :src="this.foto"
        />
        <q-card-section vertical>
          <q-card-section horizontal>
            <div class="votos_">
              <q-card-section class="votos">
                <div class="votos_box">
                  <q-btn
                    :color="this.color_negativo"
                    :disable="this.estado_disable"
                    size="70%"
                    flat
                    round
                    icon="thumb_down"
                    @click="Operacion('Restar')"
                  />
                  <q-btn
                    class="votos_evento"
                    size="100%"
                    flat
                    style="pointer-events: none;"
                  >{{this.votos}}</q-btn>
                  <q-btn
                    :color="this.color_positivo"
                    :disable="this.estado_disable"
                    size="70%"
                    flat
                    round
                    icon="thumb_up"
                    @click="Operacion('Sumar')"
                  />
                </div>
              </q-card-section>
            </div>
          </q-card-section>
          <q-card-section class="titulo text-justify">{{ this.nombre_evento }}</q-card-section>
          <q-card-section class="ubicacion text-justify">{{ this.isla }}</q-card-section>
          <q-card-section class="precio text-justify">{{ this.precio }} €</q-card-section>
        </q-card-section>
        <!-- <div class="comentarios_box">
          {{comentarios}}
        </div> -->
      </q-card-section>

      <!-- Descripcion -->
      <q-card-section class="titulo text-justify">{{ $t('description') }}</q-card-section>
      <q-card-section class="titulo text-justify">{{ this.descripcion }}</q-card-section>

      <!--  -->

      <!-- Mapa -->
      <q-separator />
      <MapaSimple
        :key="$i18n.locale"
        v-bind:center="this.ubicacion"
        v-bind:markerLatLng="this.ubicacion2"
      />
      <!--  -->

      <q-separator />
      <div class="opciones">
        <q-card-actions>
          <div class="col-3 col-sm-3 text-center usuario">
            <q-btn
              size="70%"
              flat
              round
            >
              <q-avatar size="200%">
                <img :src="this.foto_usuario" />
              </q-avatar>
              <q-btn
                size="70%"
                flat
              >{{this.usuario}}</q-btn>
            </q-btn>
          </div>
          <div class="col-3 col-sm-3 text-center maps">
            <!-- // Maps -->
            <q-btn
              id="Maps"
              size="70%"
              outline
              round
              color="primary"
              icon="navigation"
              @click="EnviarMaps"
            />
            <!--  -->
          </div>
          <div class="col-3 col-sm-3 text-center comentarios">
            <q-btn
              size="70%"
              flat
              round
              icon="chat"
            >
              <q-btn
                size="70%"
                flat
              >{{this.comentarios}}</q-btn>
            </q-btn>
          </div>
          <div class="col-3 col-sm-3 text-center evento">
            <q-btn
              size="70%"
              unelevated
              rounded
              color="primary"
            >{{$t('event_register')}}</q-btn>
          </div>
        </q-card-actions>
      </div>
    </q-card>
    <br />

    <q-card class="my-card">
      <div class="color_comentarios text-center">
        <!-- <br /> -->
        <!-- {{$t('comments')}} -->

        <q-item-section>
          <q-item-label>
            <q-icon
              name="comment"
              style="font-size: 2em;"
            />
            {{$t('comments')}}
          </q-item-label>
        </q-item-section>
        <!-- <br /> -->
      </div>

      <div class="q-pa-md row justify-center">
        <div
          class="comentarios"
          style="width: 100%; max-width: 80%"
        >
          {{$t('comment_post')}}

          <!-- // Sección añadir comentarios -->
          <div class="q-pa-md q-gutter-sm">

            <!-- Editor de texto -->
            <EditorTexto :key="$i18n.locale" />
            <!--  -->

          </div>
          <!-- // Fin Sección añadir comentarios -->

          <q-chat-message
            :label="$t('no_comments')"
            v-show="this.sin_comentarios"
          />

          <!-- <q-chat-message label="Domingo, 14" /> -->

          <Comentario
            class="comentarios"
            v-for="comentario in comentarios_texto"
            :key="comentario.nombre"
            v-bind="comentario"
          />

        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
import axios from 'axios'
import EditorTexto from '../Eventos/EditorTexto'
import Comentario from '../Eventos/Comentario'
import MapaSimple from '../Eventos/MapaSimple'
import L from 'leaflet'

export default {
  name: 'Descripcionevento',
  components: { EditorTexto, Comentario, MapaSimple },
  data () {
    return {
      comentarios_texto: [],
      sin_comentarios: false,
      comentarios: '',
      foto: '',
      nombre_evento: '',
      localizacion: '',
      precio: '',
      fecha_inicio: '',
      votos: '',
      usuario: '',
      foto_usuario: '',
      isla: '',
      id: '',
      navegador: '',
      votantes: [],
      // Votos
      votar: false,
      color_positivo: '',
      color_negativo: '',
      estado_disable: false,
      votos_evento: this.votos,
      // Mapa
      ubicacion: [0, 0],
      ubicacion2: [28.4682400, -16.2546200],
      x: 0,
      y: 0
    }
  },
  mounted () {
    this.Mostrar()
  },
  methods: {
    CambiarEmoji () {
      this.mostrar_emoji = !this.mostrar_emoji
    },
    CopiarEmoji (emoji) {
      this.editor = emoji
    },
    // Votos
    Operacion (tipo) {
      axios({
        method: 'post',
        url: 'https://canarygo.herokuapp.com/eventos',
        data: {
          operacion: tipo,
          email: this.$store.state.store.datosUsuario.email,
          id: this.id,
          token: this.$store.state.store.token
        }
      })
        .then((response) => {
          console.log('RESPUESTA DEL VOTO', response.data)
          // Nuevos datos
        }, (error) => {
          console.log('EL ERROR ES', error)
        })

      // Voto positivo
      if (tipo === 'Sumar') {
        this.estado_disable = true
        this.color_positivo = 'blue'
        this.votos += 1
      } else {
        // Voto negativo
        this.estado_disable = true
        this.color_negativo = 'red'
        this.votos -= 1
      }
    },
    // Cargar datos
    Mostrar () {
      console.log('CARGANDO EVENTO')
      axios({
        method: 'put',
        url: 'https://canarygo.herokuapp.com/eventos',
        data: {
          tipo: 'Buscar',
          navegador: this.$route.params.id,
          tipo_busqueda: 'navegador',
          token: String(this.$store.state.store.token)
        }
      })
        .then((response) => {
          console.log('RESPUESTA DEL SERVER EVENTOS', response.data)
          const datos = response.data[0]
          this.foto = datos.foto
          this.nombre_evento = datos.nombre_evento
          this.localizacion = datos.localizacion
          this.precio = datos.precio
          this.fecha_inicio = datos.fecha_inicio
          this.votos = datos.votos
          this.comentarios = datos.comentarios
          this.usuario = datos.usuario
          this.isla = datos.isla
          this.id = datos.id
          this.foto_usuario = datos.foto_usuario
          this.navegador = datos.navegador
          this.comentarios_texto = datos.comentarios_texto
          this.votantes = datos.votantes
          this.descripcion = datos.descripcion
          this.ComprobarVotos()
          this.CargarMapa()
        }, (error) => {
          console.log('EL ERROR ES', error)
        })
    },
    ComprobarVotos () {
      let tipo

      for (let i = 0; i < this.votantes.length; i++) {
        if (this.votantes[i].email === this.$store.state.store.datosUsuario.email) {
          this.votar = true
          tipo = this.votantes[i].tipo
          i = this.votantes.length
        }
      }
      // Bloqueamos si ya ha votado y marcamos el voto
      if (this.votar) {
        // Voto positivo
        if (tipo === 1) {
          this.estado_disable = true
          this.color_positivo = 'blue'
        } else {
          // Voto negativo
          this.estado_disable = true
          this.color_negativo = 'red'
        }
      }
    },
    CargarMapa () {
      // Establecemos el mapa
      this.x = this.localizacion.split(',')[0] * 1
      this.y = this.localizacion.split(',')[1] * 1
      this.ubicacion = [this.x, this.y]

      this.ubicacion2 = L.latLng(this.x, this.y)
    },
    EnviarMaps () {
      // window.open('https://www.google.es/maps/@' + this.x + ',' + this.y + ',16z')
      window.open('https://www.google.es/maps/search/' + this.x + ',' + this.y)
    }
  }
}
</script>

<style>
.my-card {
  width: 90%;
  max-width: 98%;
  text-align: justify;
  left: 5%;
  right: 5%;
  font-size: calc(4px + 6 * ((100vw - 20px) / 680));
}

.color_comentarios {
  background-color: black;
  color: white;
  font-size: calc(8px + 6 * ((100vw - 20px) / 680));
  font-weight: bold;
  padding-top: 15px;
  padding-bottom: 15px;
}

.comentarios {
  font-size: calc(6px + 6 * ((100vw - 20px) / 700));
}

.votos_box {
  background-color: rgba(128, 128, 128, 0.164);
  border-radius: 25px;
  margin-left: 0%;
  text-align: left;
}

@import url("https://fonts.googleapis.com/css2?family=Bitter&display=swap");
.votos_evento {
  color: rgb(113, 138, 221);
  font-family: "Bitter", serif;
  font: bold;
}

.titulo {
  font-family: "PT Sans";
  font-size: 140%;
  font-weight: bold;
}

.ubicacion {
  font-family: "Helvetica";
}

.usuario {
  pointer-events: none;
}

.comentarios {
  padding-left: 2%;
  pointer-events: none;
}

.precio {
  color: rgb(16, 153, 78);
  font-style: italic;
}

.fecha {
  color: rgb(23, 131, 219);
  font-style: italic;
}
</style>
