<template>
  <div class="q-pa-md q-gutter-md">
    <div class="total">
      <div class="total1">
        <!-- SECCION1 -->
        <q-parallax
          id="seccionhtml"
          :height="1050"
          :speed="1"
          src="../assets/images/index/beach1853939.jpg"
        >
          <img
            src="../assets/images/CanaryGo/Canary_Go_Icon.png"
            style="width: 100px; height: 100px; border-radius: 20%;"
          />
          <br />

          <div id="seccionh3-index" class="text-bold text-center">{{ introduccion1 }}</div>
          <br />
          <!-- ACCIONES -->
          <q-card-actions>
            <q-btn
              color="black"
              :label="$t('more_info')"
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
        </q-parallax>
      </div>

      <!-- SECCION2 -->
      <q-parallax
        id="seccionhtml2"
        :height="1000"
        :speed="0.8"
        src="../assets/images/index/paddle-839814.jpg"
      >
        <br />
        <br />
        <div id="seccionh3-index2" class="text-h3 text-bold text-center">{{$t('introduction2')}}</div>
        <br />
        <!-- ACCIONES -->
        <q-card-actions>
          <q-btn
            color="black"
            :label="$t('more_info')"
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
      </q-parallax>

      <!-- SECCION3 -->
      <q-parallax
        id="seccionhtml3"
        :height="1000"
        :speed="0.8"
        src="../assets/images/index/concert-768722.jpg"
      >
        <br />
        <br />
        <div id="seccionh3-index3" class="text-h3 text-bold text-center">{{$t('introduction3')}}</div>
        <br />
        <!-- ACCIONES -->
        <q-card-actions>
          <q-btn
            color="black"
            :label="$t('more_info')"
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
        :height="1000"
        :speed="0.8"
        src="../assets/images/index/yoga-2176668.jpg"
      >
        <br />
        <br />
        <div id="seccionh3-index4" class="text-h3 text-bold text-center">{{$t('introduction4')}}</div>
        <br />
        <!-- ACCIONES -->
        <q-card-actions>
          <q-btn
            color="black"
            :label="$t('more_info')"
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
            <!-- <keep-alive> -->
            <Seccioninfo v-for="seccion in seccion4" v-bind:key="seccion.icono" v-bind="seccion" />
            <!-- </keep-alive> -->
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
      introduccion1: this.$t('introduction1'),
      seccion1: [
        {
          icono: 'event',
          titulo: this.$t('title1'),
          descripcion: this.$t('description1')
        },
        {
          icono: 'people',
          titulo: this.$t('title1_1'),
          descripcion: this.$t('description1_1')
        }

      ],
      introduccion2: this.$t('introduction2'),
      seccion2: [
        {
          icono: 'calendar_today',
          titulo: this.$t('title2'),
          descripcion: this.$t('description2')
        }

      ],
      introduccion3: this.$t('introduction3'),
      seccion3: [
        {
          icono: 'people_outline',
          titulo: this.$t('title3'),
          descripcion: this.$t('description3')
        },
        {
          icono: 'group',
          titulo: this.$t('title3_1'),
          descripcion: this.$t('description3_1')
        }

      ],
      introduccion4: this.$t('introduction4'),
      seccion4: [
        {
          icono: 'calendar_today',
          titulo: this.$t('title4'),
          descripcion: this.$t('description4')
        },
        {
          icono: 'alarm_on',
          titulo: this.$t('title4_1'),
          descripcion: this.$t('description4_1')
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
            this.Expandir('seccionhtml', 'seccionh3-index', 0)
          } else {
            this.expanded = true
            this.Expandir('seccionhtml', 'seccionh3-index', 1)
          }
          break

        case 2: if (this.expanded2) {
          this.expanded2 = false
          this.Expandir('seccionhtml2', 'seccionh3-index2', 0)
        } else {
          this.expanded2 = true
          this.Expandir('seccionhtml2', 'seccionh3-index2', 1)
        }
          break

        case 3: if (this.expanded3) {
          this.expanded3 = false
          this.Expandir('seccionhtml3', 'seccionh3-index3', 0)
        } else {
          this.expanded3 = true
          this.Expandir('seccionhtml3', 'seccionh3-index3', 1)
        }
          break

        case 4: if (this.expanded4) {
          this.expanded4 = false
          this.Expandir('seccionhtml4', 'seccionh3-index4', 0)
        } else {
          this.expanded4 = true
          this.Expandir('seccionhtml4', 'seccionh3-index4', 1)
        }
          break
      }
    },

    Expandir (id, id2, status) {
      // var elem = document.getElementById(id)
      var edit = document.getElementById(id2)
      if (status) {
        setTimeout(function () {
          // elem.style.height = '1000px'
          edit.style.filter = 'blur(2px)'
        }, 500)
      } else {
        setTimeout(function () {
          // elem.style.height = '1000px'
          edit.style.filter = 'none'
        }, 1800)
      }
    }
  }
}
</script>

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

<style>
#seccionh3-index {
  font-size: calc(38px + 6 * ((100vw - 20px) / 680));
  color: black;
}

#seccionh3-index2 {
  font-size: calc(38px + 6 * ((100vw - 20px) / 680));
  color: black;
}

#seccionh3-index3 {
  font-size: calc(38px + 6 * ((100vw - 20px) / 680));
  color: black;
}

#seccionh3-index4 {
  font-size: calc(38px + 6 * ((100vw - 20px) / 680));
  color: black;
}
</style>
