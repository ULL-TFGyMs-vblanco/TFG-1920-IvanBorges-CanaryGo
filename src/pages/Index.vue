<template>
  <div class="q-pa-md q-gutter-md">
    <div class="total">
      <div class="total1">
        <!-- SECCION1 -->
        <q-parallax
          id="seccionhtml"
          :height="600"
          :speed="0.8"
          src="../assets/images/index/beach1853939.jpg"
        >
          <!-- <template v-slot:content="scope">
          <div
            class="absolute column items-center"
            :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 30) + '%',
            left: 100,
            right: 100
        }"
          >-->
          <img
            src="../assets/images/CanaryGo/Canary_Go_Icon.png"
            style="width: 150px; height: 150px; border-radius: 20%"
          />
          <br />
          <br />
          <div id="seccionh3-index" class="text-bold text-center">{{introduccion1}}</div>
          <br />
          <!-- ACCIONES -->
          <q-card-actions>
            <q-btn
              color="black"
              label="Mas info"
              round
              flat
              dense
              id="expanded1"
              :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="onClick(1)"
            />
          </q-card-actions>
          <!-- /ACCIONES -->
          <q-slide-transition :duration="2000">
            <div v-show="expanded">
              <Seccioninfo v-for="seccion in seccion1" :key="seccion.icono" v-bind="seccion" />
            </div>
          </q-slide-transition>
          <!-- </div>
          </template>-->
        </q-parallax>
      </div>

      <!-- SECCION2 -->
      <q-parallax
        id="seccionhtml2"
        :height="600"
        :speed="0.8"
        src="../assets/images/index/paddle-839814.jpg"
      >
        <!-- <template v-slot:content="scope">
          <div
            class="absolute column items-center"
            :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 30) + '%',
            left: 100,
            right: 100
          }"
        >-->

        <br />
        <br />
        <div id="seccionh3-index" class="text-h3 text-bold text-center">{{introduccion2}}</div>
        <br />
        <!-- ACCIONES -->
        <q-card-actions>
          <q-btn
            color="black"
            label="Mas info"
            round
            flat
            dense
            :icon="expanded2 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="onClick(2)"
          />
        </q-card-actions>
        <!-- /ACCIONES -->
        <q-slide-transition :duration="2000">
          <div v-show="expanded2">
            <Seccioninfo v-for="seccion in seccion2" :key="seccion.icono" v-bind="seccion" />
          </div>
        </q-slide-transition>
        <!-- </div>
        </template>-->
      </q-parallax>

      <!-- SECCION3 -->
      <q-parallax
        id="seccionhtml3"
        :height="600"
        :speed="0.8"
        src="../assets/images/index/concert-768722.jpg"
      >
        <!-- <template v-slot:content="scope">
          <div
            class="absolute column items-center"
            :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 30) + '%',
            left: 100,
            right: 100
          }"
        >-->

        <br />
        <br />
        <div id="seccionh3-index" class="text-h3 text-bold text-center">{{introduccion3}}</div>
        <br />
        <!-- ACCIONES -->
        <q-card-actions>
          <q-btn
            color="black"
            label="Mas info"
            round
            flat
            dense
            :icon="expanded3 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="onClick(3)"
          />
        </q-card-actions>
        <!-- /ACCIONES -->
        <q-slide-transition :duration="2000">
          <div v-show="expanded3">
            <Seccioninfo v-for="seccion in seccion3" :key="seccion.icono" v-bind="seccion" />
          </div>
        </q-slide-transition>
        <!-- </div>
        </template>-->
      </q-parallax>

      <!-- SECCION4 -->
      <q-parallax
        id="seccionhtml4"
        :height="600"
        :speed="0.8"
        src="../assets/images/index/yoga-2176668.jpg"
      >
        <!-- <template v-slot:content="scope">
          <div
            class="absolute column items-center"
            :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 30) + '%',
            left: 100,
            right: 100
          }"
        >-->

        <br />
        <br />
        <div id="seccionh3-index" class="text-h3 text-bold text-center">{{introduccion4}}</div>
        <br />
        <!-- ACCIONES -->
        <q-card-actions>
          <q-btn
            color="black"
            label="Mas info"
            round
            flat
            dense
            :icon="expanded4 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="onClick(4)"
          />
        </q-card-actions>
        <!-- /ACCIONES -->
        <q-slide-transition :duration="2000">
          <div v-show="expanded4">
            <Seccioninfo v-for="seccion in seccion4" :key="seccion.icono" v-bind="seccion" />
          </div>
        </q-slide-transition>
        <!-- </div>
        </template>-->
      </q-parallax>
    </div>
  </div>
</template>

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

<script>
import Seccioninfo from '../components/Seccioninfo.vue'

export default {

  name: 'Index',
  components: {
    Seccioninfo
  },
  data () {
    return {
      introduccion1: 'Encuentra los eventos que tanto buscas',
      seccion1: [
        {
          icono: 'event',
          titulo: 'NO MAS EVENTOS OLVIDADOS',
          descripcion: 'Muchas veces debido a que el evento se hace de forma local o en otra isla, se desconoce de la existencia del mismo (por muy bueno que sea). Ahora olvídate de ese momento con CanaryGo.'
        },
        {
          icono: 'people',
          titulo: 'OPINIONES DE GENTE COMO TÚ',
          descripcion: 'Gracias a las aportaciones de la gran comunidad podrás saber si el evento se adecua a lo que se está buscando, lo bueno y lo malo. Todo esto gracias al sistema de consejos, opiniones o experiencias de la comunidad.'
        }

      ],
      introduccion2: 'Organiza el calendario a tu manera',
      seccion2: [
        {
          icono: 'calendar_today',
          titulo: 'ORGANIZA TUS PRIORIDADES',
          descripcion: 'Puedes ordenar tus eventos según tus prioridades y preferencias: (Isla, Fecha, Novedades). De esta forma podrás encontrar siempre lo que buscas.'
        }

      ],
      introduccion3: 'Conoce gente nueva dentro de la comunidad',
      seccion3: [
        {
          icono: 'people_outline',
          titulo: 'CONTACTA CON GENTE NUEVA',
          descripcion: 'Conoce gente nueva dentro de la comunidad, mantén el contacto, mira recomendaciones basadas en tu perfil. Tú eliges.'
        },
        {
          icono: 'group',
          titulo: 'CREA TUS GRUPOS FAVORITOS',
          descripcion: 'Crea tus quedadas favoritas. Juntarse es un comienzo. Seguir juntos es un progreso. Trabajar juntos es un éxito.'
        }

      ],
      introduccion4: 'Mejora en la gestión de viajes',
      seccion4: [
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
      expanded2: false,
      expanded3: false,
      expanded4: false
    }
  },
  methods: {

    onClick (seccion) {
      switch (seccion) {
        case 1:
          if (this.expanded) {
            this.expanded = false
            this.Expandir('seccionhtml', 0)
          } else {
            this.expanded = true
            this.Expandir('seccionhtml', 1)
          }
          break

        case 2: if (this.expanded2) {
          this.expanded2 = false
          this.Expandir('seccionhtml2', 0)
        } else {
          this.expanded2 = true
          this.Expandir('seccionhtml2', 1)
        }
          break

        case 3: if (this.expanded3) {
          this.expanded3 = false
          this.Expandir('seccionhtml3', 0)
        } else {
          this.expanded3 = true
          this.Expandir('seccionhtml3', 1)
        }
          break

        case 4: if (this.expanded4) {
          this.expanded4 = false
          this.Expandir('seccionhtml4', 0)
        } else {
          this.expanded4 = true
          this.Expandir('seccionhtml4', 1)
        }
          break
      }
    },

    Expandir (id, status) {
      var elem = document.getElementById(id)
      if (status) {
        setTimeout(function () {
          elem.style.height = '1200px'
        }, 500)
      } else {
        setTimeout(function () {
          elem.style.height = '600px'
        }, 1800)
      }
    }
  }
}
</script>

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

<style>
#seccionh3-index {
  font-size: calc(34px + 6 * ((100vw - 20px) / 680));
  color: black;
}
</style>
