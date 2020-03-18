/* eslint-disable no-labels */

<template>
  <div class="q-pa-md q-gutter-md">
    <div class="row justify-between">
      <q-parallax id="seccion" :height="600" :speed="0.8" src="../assets/images/index/beach1853939.jpg">
        <!-- <template v-slot:content="scope">
          <div
            class="absolute column items-center"
            :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
        >-->
        <img src="../assets/images/CanaryGo/Canary_Go_Icon.png" style="width: 150px; height: 150px" />
        <br />
        <br />
        <div class="text-h3 text-bold text-black text-center">Encuentra los eventos que tanto buscas</div>
        <br />

        <!-- ACCIONES -->
        <q-card-actions>
          <q-btn
            color="black"
            label="Mas info"
            round
            flat
            dense
            :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="onClick"
          />
        </q-card-actions>
        <!-- /ACCIONES -->

        <q-slide-transition :duration="2000">
          <div v-show="expanded">
            <div class="seccion-info1" v-for="info1 of infos1" v-bind:key="info1">
              <div class="text-center">
                <q-icon :name="info1.icono" size="50px" />
                <br />
                <br />
                <p class="text-h3 text-bold text-black-2 text-center">{{info1.titulo}}</p>
              </div>

              <p class="text-h5 text-bold text-black-2 text-center">{{info1.descripcion}}</p>
              <br />
              <br />
            </div>
          </div>
        </q-slide-transition>
        <!--
          </div>
        </template>-->
      </q-parallax>
    </div>
  </div>
</template>

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

<script>
export default {
  data () {
    return {
      foto: '../assets/images/index/beach1853939.jpg',
      infos1:
        [
          {
            icono: 'event',
            titulo: 'NO MAS EVENTOS OLVIDADOS',
            descripcion: 'Muchas veces debido a que el evento se hace de forma local o en otra isla, se desconoce de la existencia del mismo (por muy bueno que sea). Ahora olvídate de ese momento con CanaryGo'
          },
          {
            icono: 'people',
            titulo: 'OPINIONES DE GENTE COMO TÚ',
            descripcion: 'Gracias a las aportaciones de la gran comunidad que hay detrás podrás saber si el evento se adecua a lo que se está buscando, lo bueno y lo malo. Todo esto gracias al sistema de consejos, opiniones o experiencias de la comunidad.'
          }
        ],

      infos2:
        [
          {
            icono: 'calendar_today',
            titulo: 'ORGANIZA TUS PRIORIDADES',
            descripcion: 'Puedes ordenar tus eventos según tus prioridades y preferencias: (Isla, Fecha, Novedades).'
          },
          {
            icono: '',
            titulo: '',
            descripcion: 'De esta forma podrás encontrar siempre lo que buscas.'
          }
        ],

      infos3:
        [
          {
            icono: 'people_outline',
            titulo: 'CONTACTA CON GENTE NUEVA',
            descripcion: 'Conoce gente nueva dentro de la comunidad, mantén el contacto, mira recomendaciones basadas en tu perfil. Tú eliges.'
          },
          {
            icono: 'group',
            titulo: 'CREA TUS GRUPOS FAVORITOS',
            descripcion: 'Crea tus quedadas favoritas. Juntarse es un comienzo. Seguir juntos es un progreso. Trabajar juntos es un éxito'
          }
        ],

      infos4:
        [
          {
            icono: 'calendar_today',
            titulo: 'PLANIFICA MEJOR TU SEMANA',
            descripcion: 'Muchas veces debido al desconocimiento de los eventos o actividades que existen e incluso la poca información que existe, es difícil planificar. Ahora eso ha quedado en el olvido.'
          },
          {
            icono: 'alarm_on',
            titulo: 'AÑADE RECORDATORIOS',
            descripcion: 'Mantente al tanto de todos los eventos próximos a los que te has suscrito.'
          }
        ],

      open: false,
      expanded: false,
      tab: 'images'
    }
  },

  methods: {

    onClick () {
      if (this.expanded) {
        this.expanded = false
        this.Expandir()
      } else {
        this.expanded = true
        this.Expandir()
      }
    },

    Expandir () {
      if (this.expanded) {
        setTimeout(function () {
          var elem = document.getElementById('seccion')
          elem.style.height = '900px'
        }, 500)
      } else {
        setTimeout(function () {
          var elem = document.getElementById('seccion')
          elem.style.height = '600px'
        }, 1000)
      }
    }
  }

}
</script>

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

<style>
</style>
