<template>
  <div>
    <q-card class="my-card">
      <q-card-section class="fecha text-right">{{ fecha_inicio }}</q-card-section>
      <q-card-section horizontal>
        <q-img
          class="col-5"
          :src="foto"
          :ratio="16/9"
        />
        <q-card-section vertical>
          <q-card-section horizontal>
            <div class="
          votos_">
              <q-card-section class="votos">
                <div class="votos_box">
                  <q-btn
                    class="Restar"
                    size="70%"
                    :color="this.color_negativo"
                    :disable="this.estado_disable"
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
                  >{{votos_evento}}</q-btn>
                  <q-btn
                    class="Sumar"
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
          <q-card-section class="titulo text-justify">{{ nombre_evento }}</q-card-section>
          <q-card-section class="ubicacion text-justify">{{ isla }}</q-card-section>
          <q-card-section class="precio text-justify">{{ precio }} €</q-card-section>
        </q-card-section>
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
                <img :src="this.foto_usuario" />
              </q-avatar>
              <q-btn
                size="70%"
                flat
              >{{usuario}}</q-btn>
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
              >{{comentarios}}</q-btn>
            </q-btn>
          </div>
          <div class="col-3 col-sm-3 text-center evento">
            <q-btn
              size="70%"
              unelevated
              rounded
              color="primary"
              :to="this.navegador"
            >{{$t('event')}}</q-btn>
          </div>
        </q-card-actions>
      </div>
    </q-card>
    <br />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Evento',
  data () {
    return {
      votar: false,
      color_positivo: '',
      color_negativo: '',
      estado_disable: false,
      votos_evento: this.votos,
      votantes: []
    }
  },
  props: {
    foto: {

    },
    nombre_evento: {
      // type: String,
      // required: true
    },
    localizacion: {
      // type: String,
      // required: true
    },
    precio: {
      // type: Number,
      // required: true
    },
    fecha_inicio: {
      // type: Date,
      // required: true
    },
    votos: {
      // type: Number,
      // required: true
    },
    comentarios: {
      // type: Number,
      // required: true
    },
    usuario: {
      // type: String,
      // required: true
    },
    foto_usuario: {
      // type: String,
      // required: true
    },
    isla: {
      // type: String,
      // required: true
    },
    id: {
      // type: String,
      // required: true
    },
    navegador: {
      // type: String,
      // required: true
    }
  },
  methods: {
    Operacion (tipo) {
      if (!this.votar) {
        // console.log(tipo, this.$store.state.store.datosUsuario.email, this.id, this.$store.state.store.token)
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
            this.datos_evento = response.data
          }).catch(function (error) {
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
    },
    Descripcion () {
      // Redirigir
      this.$router.push(this.navegador)
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
    // Cargar datos
    Mostrar () {
      axios({
        method: 'put',
        url: 'https://canarygo.herokuapp.com/eventos',
        data: {
          tipo: 'Buscar',
          navegador: this.nombre_evento.replace(/ /g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
          tipo_busqueda: 'navegador',
          token: String(this.$store.state.store.token)
        }
      })
        .then((response) => {
          // console.log('RESPUESTA DEL SERVER EVENTOS', response.data)
          const datos = response.data[0]
          this.votantes = datos.votantes

          // Comprobamos votos
          this.ComprobarVotos()
        }).catch(function (error) {
          console.log('EL ERROR ES', error)
        })
    },
    EnviarMaps () {
      // Establecemos el mapa
      const x = this.localizacion.split(',')[0] * 1
      const y = this.localizacion.split(',')[1] * 1

      window.open('https://www.google.es/maps/search/' + x + ',' + y)
    }

  },
  mounted () {
    this.Mostrar()
    // this.ComprobarVotos()
  }
}
</script>

<style>
.my-card {
  width: 100%;
  max-width: 90%;
  text-align: justify;
  left: 5%;
  /* font-size: calc(5px + 6 * ((100vw - 20px) / 680)); */
}

.votos_box {
  background-color: rgba(128, 128, 128, 0.164);
  border-radius: 25px;
  margin-left: 0%;
  /* margin-right: 50%; */
  text-align: left;
  /* font-size: calc(8px + 6 * ((100vw - 20px) / 680)); */
}

@import url("https://fonts.googleapis.com/css2?family=Bitter&display=swap");
.votos_evento {
  color: rgb(113, 138, 221);
  font-family: "Bitter", serif;
  font: bold;
  font-size: 120%;
}

.titulo {
  font-family: "PT Sans";
  font-size: calc(12px + 6 * ((100vw - 20px) / 680));
  font-weight: bold;
}

.ubicacion {
  font-family: "Helvetica";
  font-size: 130%;
}

.usuario {
  pointer-events: none;
}

/* .opciones {
  left: 20%;
  text-align: center;
} */

/* .maps {
  padding-left: 20%;
} */

.comentarios {
  padding-left: 2%;
  pointer-events: none;
}

/* .evento {
  padding-left: 20%;
} */

.precio {
  color: rgb(16, 153, 78);
  font-style: italic;
  font-size: 160%;
}

.fecha {
  color: rgb(23, 131, 219);
  font-style: italic;
}

@media only screen and (max-device-width: 640px) {
  .votos {
    font-size: calc(18px + 6 * ((100vw - 1200px) / 700));
  }
}
</style>
