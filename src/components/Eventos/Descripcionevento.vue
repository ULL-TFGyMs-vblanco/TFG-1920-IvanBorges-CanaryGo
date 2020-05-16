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
                  <q-btn size="70%" flat round icon="thumb_down" @click="Restar" />
                  <q-btn
                    class="votos_evento"
                    size="100%"
                    flat
                    style="pointer-events: none;"
                  >{{votos}}</q-btn>
                  <q-btn size="70%" flat round icon="thumb_up" @click="Sumar" />
                </div>
              </q-card-section>
            </div>
          </q-card-section>
          <q-card-section class="titulo text-justify">{{ nombre_evento }}</q-card-section>
          <q-card-section class="ubicacion text-justify">{{ isla }}</q-card-section>
          <q-card-section class="precio text-justify">{{ precio }} €</q-card-section>
        </q-card-section>
              <div class="comentarios_box">
                {{comentarios}}
               </div>
      </q-card-section>

      <q-separator />
      <div class="opciones">
        <q-card-actions>
          <div class="col-3 col-sm-3 text-center usuario">
            <q-btn size="70%" flat round>
              <q-avatar size="200%">
                <img :src="this.foto_usuario" />
              </q-avatar>
              <q-btn size="70%" flat>{{usuario}}</q-btn>
            </q-btn>
          </div>
          <div class="col-3 col-sm-3 text-center calendario">
            <q-btn size="70%" flat round icon="save" />
          </div>
          <div class="col-3 col-sm-3 text-center comentarios">
            <q-btn size="70%" flat round icon="chat">
              <q-btn size="70%" flat>{{comentarios}}</q-btn>
            </q-btn>
          </div>
          <div class="col-3 col-sm-3 text-center evento">
            <q-btn size="70%" unelevated rounded color="primary">{{$t('event_register')}}</q-btn>
          </div>
        </q-card-actions>
      </div>
    </q-card>
    <br />
  </div>
</template>

<script>
export default {
  name: 'Descripcionevento',
  data () {
    return {}
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
</style>
