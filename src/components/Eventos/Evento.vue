<template>
  <div>
    <q-card class="my-card">
      <q-card-section class="fecha text-right">{{ fecha_inicio }}</q-card-section>
      <q-card-section horizontal>
        <q-img
          class="col-5"
          :src="foto"
        />
        <q-card-section vertical>
          <q-card-section horizontal>
            <div class="votos_">
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
              >{{comentarios}}</q-btn>
            </q-btn>
          </div>
          <div class="col-3 col-sm-3 text-center evento">
            <q-btn
              size="70%"
              unelevated
              rounded
              color="primary"
              @click="Descripcion"
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
      color_positivo: '',
      color_negativo: '',
      estado_disable: false,
      votos_evento: this.votos
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
      axios({
        method: 'post',
        url: 'https://canarygo.herokuapp.com/eventos',
        data: {
          tipo: tipo,
          email: this.$store.state.store.datosUsuario.email,
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
    Descripcion () {
      // Redirigir
      this.$router.push(this.navegador)
    }

  }
}
</script>

<style>
.my-card {
  width: 100%;
  max-width: 98%;
  text-align: justify;
  left: 1%;
  font-size: calc(5px + 6 * ((100vw - 20px) / 680));
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

/* .opciones {
  left: 20%;
  text-align: center;
} */

/* .calendario {
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
}

.fecha {
  color: rgb(23, 131, 219);
  font-style: italic;
}
</style>
