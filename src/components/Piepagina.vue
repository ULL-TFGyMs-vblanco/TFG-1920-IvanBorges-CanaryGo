<template>
  <div>
    <!-- Footer -->
    <!-- <q-footer reveal class="bg-grey-3 text-dark"> -->
    <footer>
      <div class="row">
        <div class="col-6 col-sm-3">
          <div
            class="q-pa-md"
            align="center"
          >
            <q-list class="compania">
              <q-item>
                <q-item-section class="negrita">{{$t('company')}}</q-item-section>
              </q-item>
              <q-separator
                inset
                style="max-width: 200px "
              />

              <!-- <q-item
                clickable
                v-ripple
              >
                <q-item-section>
                  <q-item-label>{{$t('us')}}</q-item-label>
                </q-item-section>
              </q-item> -->

              <q-item
                clickable
                v-ripple
              >
                <q-item-section @click="EnviarEmail">
                  <q-item-label>{{$t('contact')}}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>

        <div class="col-6 col-sm-3">
          <div
            class="q-pa-md"
            align="center"
          >
            <q-list class="comunidad">
              <q-item>
                <q-item-section class="negrita">{{$t('community')}}</q-item-section>
              </q-item>
              <q-separator
                inset
                style="max-width: 200px "
              />

              <q-item
                clickable
                v-ripple
                to="/home"
              >
                <q-item-section>
                  <q-item-label>{{$t('works')}}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>

        <div class="col-6 col-sm-3">
          <div
            class="q-pa-md"
            align="center"
          >
            <q-list class="asistencia">
              <q-item>
                <q-item-section class="negrita">{{$t('assistance')}}</q-item-section>
              </q-item>
              <q-separator
                inset
                style="max-width: 200px "
              />

              <q-item
                clickable
                v-ripple
              >
                <q-item-section @click="EnviarEmail">
                  <q-item-label>{{$t('help')}}</q-item-label>
                </q-item-section>
              </q-item>

              <!-- <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label>{{$t('chat')}}</q-item-label>
                </q-item-section>
              </q-item> -->
            </q-list>
          </div>
        </div>

        <div class="col-6 col-sm-3">
          <div
            class="q-pa-md"
            align="center"
          >
            <q-list class="asistencia">
              <q-item>
                <q-item-section class="negrita">{{$t('app')}}</q-item-section>
              </q-item>
              <q-separator
                inset
                style="max-width: 200px "
              />

              <q-item
                clickable
                v-ripple
              >
                <q-item-section>
                  <img
                    class="absolute-center"
                    src="../assets/images/CanaryGo/android-app.svg"
                    style="max-width: 100px; width: 100%; height: auto; min-width: 60px;"
                  />
                </q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
              >
                <q-item-section>
                  <img
                    class="absolute-center"
                    src="../assets/images/CanaryGo/app-store.svg"
                    style="max-width: 100px; width: 100%; height: auto; min-width: 60px;"
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
    </footer>
    <!-- </q-footer> -->
  </div>
  <!-- !Footer -->
</template>

<script>
export default {
  name: 'Piepagina',
  data () {
    return {}
  },
  methods: {
    EnviarEmail () {
      window.open('mailto:alu0100880755@ull.edu.es')
    }
  }
}
</script>

<style>
div {
  display: block;
}

footer {
  display: block;
}

html,
body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, Sans-serif;
  background-color: #e7e6e65b;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #f0b30ada;
  color: rgb(48, 47, 47);
}

.header-text {
  font-weight: bold;
  font-size: 25px;
}

.negrita {
  font-weight: bold;
  font-size: 120%;
}
</style>
