<template>
  <div>
    <q-card class="my-card">
      <q-card-section class="fecha text-right">{{ $route.params.fecha_inicio }}</q-card-section>
      <q-card-section horizontal>
        <q-img
          class="col-5"
          :src="$route.params.foto"
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
                  >{{$route.params.votos}}</q-btn>
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
          <q-card-section class="titulo text-justify">{{ $route.params.nombre_evento }}</q-card-section>
          <q-card-section class="ubicacion text-justify">{{ $route.params.isla }}</q-card-section>
          <q-card-section class="precio text-justify">{{ $route.params.precio }} €</q-card-section>
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
                <img :src="$route.params.foto_usuario" />
              </q-avatar>
              <q-btn
                size="70%"
                flat
              >{{$route.params.usuario}}</q-btn>
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
              >{{$route.params.comentarios}}</q-btn>
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
          <q-chat-message label="Domingo, 14" />

          <q-chat-message
            name="me"
            avatar="https://cdn.quasar.dev/img/avatar4.jpg"
            :text="['Eso ya depende de cada uno y lo que quiera invertir, aunque con esas tareas no lo vas a notar demasiado 😁, por cierto, no entiendo mucho de apple (el ultimo mio fue mbp mid 2011) pero verifica que son compatibles... ']"
            stamp="7 minutes ago"
            text-color="black"
            bg-color="amber"
          />
          <q-chat-message
            name="Jane"
            avatar="https://cdn.quasar.dev/img/avatar3.jpg"
            :text="['vale la pena pagar esos 30€ de mas para un usuario medio, que solo utiliza un macbook pro 13 early 2015 para Ofimatica, ver videos, y hacer retoques en photoshop?, tengo pensado cambiarle el ssd que trae de 128gb por uno de mayor capacidad']"
            stamp="4 minutes ago"
          />

          <q-chat-message
            name="Mark"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
            :text="['Esos 30€ quizas a la larga te van a hacer ahorrar bastante tiempo y creo que lo agradecerias. No es mucho dinero sinceramente.']"
            stamp="3 minutes ago"
            sent
          />

        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
import axios from 'axios'
import EditorTexto from '../Eventos/EditorTexto'

export default {
  name: 'Descripcionevento',
  components: { EditorTexto },
  data () {
    return {
      // foto: '',
      // nombre_evento: '',
      // localizacion: '',
      // precio: '',
      // fecha_inicio: '',
      // votos: '',
      // comentarios: '',
      // usuario: '',
      // foto_usuario: '',
      // isla: '',
      // id: ''
    }
  },
  methods: {
    CambiarEmoji () {
      this.mostrar_emoji = !this.mostrar_emoji
    },
    CopiarEmoji (emoji) {
      this.editor = emoji
    },
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
