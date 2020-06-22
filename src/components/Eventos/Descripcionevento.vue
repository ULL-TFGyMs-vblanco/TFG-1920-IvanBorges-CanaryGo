<template>
  <div>
    <q-card class="my-card">
      <q-card-section class="fecha text-right">{{ this.datos_evento.fecha_inicio }}</q-card-section>
      <q-card-section horizontal>
        <q-img
          class="col-5"
          :src="this.datos_evento.foto"
        />
        <q-card-section vertical>
          <q-card-section horizontal>
            <div class="votos_">
              <q-card-section class="votos">
                <div class="votos_box">
                  <q-btn
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
                  >{{this.datos_evento.votos}}</q-btn>
                  <q-btn
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
          <q-card-section class="titulo text-justify">{{ this.datos_evento.nombre_evento }}</q-card-section>
          <q-card-section class="ubicacion text-justify">{{ this.datos_evento.isla }}</q-card-section>
          <q-card-section class="precio text-justify">{{ this.datos_evento.precio }} €</q-card-section>
        </q-card-section>
        <!-- <div class="comentarios_box">
          {{comentarios}}
        </div> -->
      </q-card-section>

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
                <img :src="this.datos_evento.foto_usuario" />
              </q-avatar>
              <q-btn
                size="70%"
                flat
              >{{this.datos_evento.usuario}}</q-btn>
            </q-btn>
          </div>
          <div class="col-3 col-sm-3 text-center calendario">
            <q-btn
              size="70%"
              flat
              round
              icon="save"
            />
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
              >{{this.datos_evento.comentarios}}</q-btn>
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
            <EditorTexto />
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
            v-for="comentario in comentarios"
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

export default {
  name: 'Descripcionevento',
  components: { EditorTexto, Comentario },
  data () {
    return {
      comentarios: [
        {
          nombre: 'Mark',
          avatar: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
          texto: 'Hola, buenas',
          hora: '12:33'
        },
        {
          nombre: 'IvanGamerCode',
          avatar: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
          texto: 'Hola que tal?',
          hora: '12:34'
        }
      ],
      sin_comentarios: false,
      datos_evento: [],
      foto: '',
      nombre_evento: '',
      localizacion: '',
      precio: '',
      fecha_inicio: '',
      votos: '',
      usuario: '',
      foto_usuario: '',
      isla: '',
      id: ''
    }
  },
  mounted () {
    console.log('MOUNTED LEIDO')
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
          tipo: tipo,
          id: this.id,
          token: this.$store.state.store.token
        }
      })
        .then((response) => {
          console.log('RESPUESTA DEL VOTO', response.data)
          this.datos_evento = response.data
        }, (error) => {
          console.log('EL ERROR ES', error)
        })

      // Voto positivo
      if (tipo === 'Sumar') {
        this.estado_disable = true
        this.color_positivo = 'blue'
        this.votos_evento += 1
      } else {
        // Voto negativo
        this.estado_disable = true
        this.color_negativo = 'red'
        this.votos_evento -= 1
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
          nombre: 'Actividades acuáticas en las Teresitas Post-Cuarentena',
          token: String(this.$store.state.store.token)
        }
      })
        .then((response) => {
          console.log('RESPUESTA DEL SERVER EVENTOS', response.data)
          this.datos_evento = response.data
        }, (error) => {
          console.log('EL ERROR ES', error)
        })
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
</style>
