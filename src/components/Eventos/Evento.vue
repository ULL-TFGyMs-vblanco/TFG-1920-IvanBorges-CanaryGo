<template>
  <div>
    <q-card class="my-card">
      <q-card-section class="fecha text-right">{{ fecha_inicio }}</q-card-section>
      <q-card-section horizontal>
        <q-img class="col-5" :src="foto" />
        <q-card-section vertical>
          <q-card-section horizontal>
            <div class="votos_">
              <q-card-section class="votos">
                <div class="votos_box">
                  <q-btn size="70%" flat round icon="thumb_down" />
                  <q-btn class="votos_evento" size="100%" flat style="pointer-events: none;">7</q-btn>
                  <q-btn size="70%" flat round icon="thumb_up" />
                </div>
              </q-card-section>
            </div>
          </q-card-section>
          <q-card-section class="titulo text-justify">{{ nombre_evento }}</q-card-section>
          <q-card-section class="ubicacion text-justify">{{ localizacion }}</q-card-section>
          <q-card-section class="precio text-justify">{{ precio }} €</q-card-section>
        </q-card-section>
      </q-card-section>

      <q-separator />
      <div class="opciones">
        <q-card-actions>
          <div class="col-3 col-sm-3 text-center usuario">
            <q-btn size="70%" flat round icon="account_circle">
              <q-btn size="70%" flat>Usuario</q-btn>
            </q-btn>
          </div>
          <div class="col-3 col-sm-3 text-center calendario">
            <q-btn size="70%" flat round icon="save" />
          </div>
          <div class="col-3 col-sm-3 text-center comentarios">
            <q-btn size="70%" flat round icon="chat">
              <q-btn size="70%" flat>7</q-btn>
            </q-btn>
          </div>
          <div class="col-3 col-sm-3 text-center evento">
            <q-btn size="70%" unelevated rounded color="primary">{{$t('event')}}</q-btn>
          </div>
        </q-card-actions>
      </div>
    </q-card>
    <br />
  </div>
</template>

<script>

export default {
  name: 'Evento',
  data () {
    return {

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
    }
  },
  methods: {

  }
}
</script>

<style>
.my-card {
  width: 100%;
  max-width: 98%;
  text-align: justify;
  left: 1%;
  font-size: calc(8px + 6 * ((100vw - 20px) / 680));
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
