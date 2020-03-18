/* eslint-disable no-labels */

<template>
  <div class="q-pa-md q-gutter-md">
    <div class="row justify-between">
      <!-- CARGA DE IMAGENES ESTATICO -->
      <img src="../assets/images/index/beach1853939.jpg" style="display:none" />
      <img src="../assets/images/index/paddle-839814.jpg" style="display:none" />
      <img src="../assets/images/index/concert-768722.jpg" style="display:none" />
      <img src="../assets/images/index/yoga-2176668.jpg" style="display:none" />
      <img src="../assets/images/CanaryGo/Canary_Go_Icon.png" style="display:none" />
      <!-- CARGA DE IMAGENES ESTATICO -->

      <q-parallax
        id="seccionhtml"
        :height="900"
        :speed="0.8"
        v-for="seccion of secciones"
        v-bind:key="seccion"
        :src="seccion.foto"
      >
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
        <img v-for="icono2 of seccion.iconos2" v-bind:key="icono2" :src="icono2.origen" style="width: 150px; height: 150px; border-radius: 20%" :style="icono2.mostrar"/>
        <br />
        <br />
        <div class="text-h3 text-bold text-black text-center">{{seccion.introduccion}}</div>
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
            <div class="seccion-info1" v-for="info of seccion.infos" v-bind:key="info">
              <div class="text-center">
                <q-icon :name="info.icono" size="50px" />
                <br />
                <br />
                <p class="text-h3 text-bold text-black-2 text-center">{{info.titulo}}</p>
              </div>

              <p class="text-h5 text-bold text-black-2 text-center">{{info.descripcion}}</p>
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
      secciones: [
        {
          foto: '../assets/images/index/beach1853939.jpg',
          iconos2:
            [
              {
                origen: 'img/Canary_Go_Icon.png',
                mostrar: ''
              }
            ],
          introduccion: 'Encuentra los eventos que tanto buscas',
          infos:
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
            ]
        },
        {
          foto: 'img/paddle-839814.jpg',
          iconos2:
            [
              {
                origen: 'img/Canary_Go_Icon.png',
                mostrar: 'display:none'
              }
            ],
          introduccion: 'Organiza el calendario a tu manera',
          infos:
            [
              {
                icono: 'calendar_today',
                titulo: 'ORGANIZA TUS PRIORIDADES',
                descripcion: 'Puedes ordenar tus eventos según tus prioridades y preferencias: (Isla, Fecha, Novedades). De esta forma podrás encontrar siempre lo que buscas.'
              }
            ]
        },
        {
          foto: 'img/concert-768722.jpg',
          icono2:
            [
              {
                origen: 'img/Canary_Go_Icon.png',
                mostrar: 'display:none'
              }
            ],
          introduccion: 'Conoce gente nueva dentro de la comunidad',
          infos:
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
            ]
        },
        {
          foto: 'img/yoga-2176668.jpg',
          iconos2:
            [
              {
                origen: 'img/Canary_Go_Icon.png',
                mostrar: 'display:none'
              }
            ],
          introduccion: 'Mejora en la gestión de viajes',
          infos:
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
            ]
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
          var elem = document.getElementById('seccionhtml')
          elem.style.height = '900px'
        }, 500)
      } else {
        setTimeout(function () {
          var elem = document.getElementById('seccionhtml')
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
