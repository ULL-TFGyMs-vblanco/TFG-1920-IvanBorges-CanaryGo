<template>
  <div>
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img class="col-5" src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-card-section vertical>
          <div class="votos_">
            <q-card-section class="votos">
              <q-btn size="70%" flat round icon="chat" />
              <q-btn class="votos_evento" size="70%" flat style="pointer-events: none;">7</q-btn>
              <q-btn size="70%" flat round icon="chat" />
            </q-card-section>
            <!-- <q-card-section /> -->
          </div>
          <q-card-section class="titulo">{{ titulo }}</q-card-section>
          <q-card-section class="ubicacion">{{ ubicacion }}</q-card-section>
          <q-card-section class="precio">{{ precio }}</q-card-section>
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
      titulo: 'Fin de año en Venecia',
      ubicacion: 'La Palma',
      precio: 'Gratis'
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
  font-size: calc(8px + 6 * ((100vw - 20px) / 680));
}

.votos_ {
  background-color: rgba(128, 128, 128, 0.164);
  width: 90%;
  height: 28%;
  border-radius: 20%;
  text-align: center;
  font-size: calc(10px + 6 * ((100vw - 20px) / 680));
}
.votos{
top: 15%;
}

.votos_evento {
  color: rgb(113, 138, 221);
  font-family: "PT Serif";
  font: bold;
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

</style>
