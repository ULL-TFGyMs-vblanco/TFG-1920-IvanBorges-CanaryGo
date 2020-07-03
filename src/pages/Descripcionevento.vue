<template>
  <div>
    <q-card class="my-card">
      <q-card-section class="fecha text-right">{{ this.fecha_inicio }} </q-card-section>
      <q-card-section horizontal>
        <q-img
          id="imagen"
          class="col-5"
          :ratio="16/9"
          :src="this.foto"
        >
          <!-- // Animacion carga -->
          <q-inner-loading :showing="cargando">
            <q-spinner
              size="50px"
              color="grey-3"
            />
          </q-inner-loading>
          <!--  -->
        </q-img>
        <q-card-section vertical>
          <q-card-section horizontal>
            <div
              class="votos_"
              id="votos"
            >
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
                    size="110%"
                    flat
                    :loading="this.cargando"
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
          <q-card-section
            class="titulo text-justify"
            id="titulo"
          >{{ this.nombre_evento }}
            <!-- // Animacion carga -->
            <q-inner-loading :showing="cargando">
              <q-spinner-dots
                size="40px"
                color="primary"
              />
            </q-inner-loading>
            <!--  -->
          </q-card-section>
          <q-card-section class="ubicacion text-justify">{{ this.isla }}
            <!-- // Animacion carga -->
            <q-inner-loading :showing="cargando">
              <q-spinner-dots
                size="30px"
                color="primary"
              />
            </q-inner-loading>
            <!--  -->
          </q-card-section>
          <q-card-section class="precio text-justify">{{ this.precio }} €
            <!-- // Animacion carga -->
            <q-inner-loading :showing="cargando">
              <q-spinner-dots
                size="30px"
                color="primary"
              />
            </q-inner-loading>
            <!--  -->
          </q-card-section>
        </q-card-section>
        <!-- <div class="comentarios_box">
          {{comentarios}}
        </div> -->
      </q-card-section>

      <!-- Descripcion -->
      <br>
      <q-separator />
      <q-card-section
        class="titulo text-justify"
        id="descripcion"
      >{{ $t('description') }}
        <!-- // Animacion carga -->
        <q-inner-loading :showing="cargando">
          <q-spinner-bars
            size="25px"
            color="primary"
          />
        </q-inner-loading>
        <!--  -->
      </q-card-section>
      <q-card-section
        class="descripcion text-justify descripcion_texto"
        id="descripcion_texto"
      >{{ descripcion }}

      </q-card-section>

      <!-- Descuento -->
      <q-card-section class="titulo text-justify descuento">{{ $t('price_discount') }}
        <!-- // Animacion carga -->
        <q-inner-loading :showing="cargando">
          <q-spinner-bars
            size="25px"
            color="primary"
          />
        </q-inner-loading>
        <!--  -->
      </q-card-section>

      <q-card-section
        v-show="this.mostrar_codigo"
        class="descripcion text-justify"
      >{{ $t('not_applicable') }}
      </q-card-section>
      <q-card-section
        v-show="!this.mostrar_codigo"
        class="descripcion text-justify descuento_codigo"
      >{{ descuento }}</q-card-section>

      <!-- Duracion -->
      <q-card-section class="titulo text-justify duracion">{{ $t('duration') }}
        <!-- // Animacion carga -->
        <q-inner-loading :showing="cargando">
          <q-spinner-bars
            size="25px"
            color="primary"
          />
        </q-inner-loading>
        <!--  -->
      </q-card-section>
      <q-card-section class="descripcion text-justify fechas">{{ fecha_inicio + ' - ' + fecha_fin }}

      </q-card-section>

      <!-- Mapa -->
      <q-separator /> <br>
      <q-card-section class="titulo text-justify localizacion">{{ $t('event_location') }}</q-card-section>
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
              color="primary"
              icon="navigation"
              @click="EnviarMaps"
            >MAPS</q-btn>
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
              id="link"
              size="70%"
              unelevated
              @click="RedirigirRegistro"
              :disable="this.link_activo"
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

      <div
        class="q-pa-md row justify-center seccion_comentarios"
        id="seccion_comentarios"
      >
        <div>
          {{$t('comment_post')}}

          <!-- // Sección añadir comentarios -->
          <div class="q-pa-md q-gutter-sm">

            <!-- Editor de texto -->
            <EditorTexto
              :key="$i18n.locale"
              v-bind:id='this.id'
              @clicked="onClickChild"
            />
            <!--  -->

          </div>
          <!-- // Fin Sección añadir comentarios -->

          <q-chat-message
            :label="$t('no_comments')"
            v-show="this.sin_comentarios"
          />

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
import EditorTexto from '../components/Descripcion/EditorTexto'
import Comentario from '../components/Descripcion/Comentario'
import MapaSimple from '../components/Descripcion/MapaSimple'
import L from 'leaflet'

export default {
  name: 'Descripcionevento',
  components: { EditorTexto, Comentario, MapaSimple },
  data () {
    return {
      // Datos evento
      comentarios_texto: [],
      sin_comentarios: false,
      comentarios: '',
      foto: '',
      nombre_evento: '',
      localizacion: '',
      precio: '',
      fecha_inicio: '',
      fecha_fin: '',
      votos: '',
      usuario: '',
      foto_usuario: '',
      isla: '',
      id: '',
      navegador: '',
      descripcion: '',
      descuento: '',
      link: '',
      link_activo: true,
      mostrar_codigo: false,
      votantes: [],
      cargando: true,
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
          // console.log('RESPUESTA DEL VOTO', response.data)
          // Nuevos datos
        }).catch(function (error) {
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
      // console.log('CARGANDO EVENTO')
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
          // console.log('RESPUESTA DEL SERVER EVENTOS', response.data)
          const datos = response.data[0]

          // Efecto cargando
          if (datos.nombre_evento !== undefined) {
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
            this.fecha_fin = datos.fecha_fin
            this.descuento = datos.descuento
            this.link = datos.link

            // Codigo descuento
            if (datos.descuento === '') {
              this.mostrar_codigo = true
            }

            // Sin comentarios
            if (datos.comentarios === 0) {
              this.sin_comentarios = true
            } else {
              this.sin_comentarios = false
            }

            // Link evento
            if (datos.link !== '') {
              this.link_activo = false
            }

            this.ComprobarVotos()
            this.CargarMapa()
            this.cargando = false
          } else {
            // this.$router.push('/error')
            this.$store.dispatch('store/borrarUsuario')
            this.saludo = ''
            this.img = ''
            this.$router.push('login')
          }
        }).catch(function (error) {
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
    RedirigirRegistro () {
      window.open(this.link)
    },
    EnviarMaps () {
      // window.open('https://www.google.es/maps/@' + this.x + ',' + this.y + ',16z')
      window.open('https://www.google.es/maps/search/' + this.x + ',' + this.y)
    },
    onClickChild () {
      this.Mostrar()
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
  font-size: calc(12px + 6 * ((100vw - 20px) / 680));
  font-weight: bold;
}

.descripcion {
  font-size: calc(14px + 6 * ((100vw - 1000px) / 680));
}

.ubicacion {
  font-family: "Helvetica";
  font-size: 130%;
}

.usuario {
  pointer-events: none;
}

.comentarios {
  padding-left: 2%;
  pointer-events: none;
  font-size: calc(14px + 6 * ((100vw - 1000px) / 700));
}

.precio {
  color: rgb(16, 153, 78);
  font-style: italic;
  font-size: 160%;
}

.fecha {
  color: rgb(23, 131, 219);
  font-style: italic;
}
/* // Movil */
@media only screen and (max-device-width: 640px) {
  .titulo {
    font-family: "PT Sans";
    font-size: calc(14px + 6 * ((100vw - 20px) / 680));
    font-weight: bold;
  }

  .descripcion {
    font-size: calc(18px + 6 * ((100vw - 1200px) / 680));
  }

  .ubicacion {
    font-family: "Helvetica";
    font-size: 140%;
  }

  .usuario {
    pointer-events: none;
  }

  .comentarios {
    padding-left: 2%;
    pointer-events: none;
    font-size: calc(18px + 6 * ((100vw - 1200px) / 700));
  }

  .votos {
    font-size: calc(18px + 6 * ((100vw - 1200px) / 700));
  }
}
</style>
