<template>
  <div class="text-center saludo">
    <q-toolbar class>
      <div class=".col-6 col-sm-6 negrita">
        <div class="text-h6 q-mb-md text-center negrita saludo">{{saludo}}</div>
        <div class="text-h6 q-mb-md text-center negrita saludo_2">{{saludo_2}}</div>
      </div>
      <!-- BUSQUEDA USUARIO -->
      <div class=".col-4 col-sm-4">
        <q-input
          dark
          dense
          standout
          v-model="busqueda"
          input-class="text-right"
          class="q-ml-md bg-grey"
        >
          <template v-slot:append>
            <q-icon
              v-if="busqueda === ''"
              name="search"
            />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="busqueda = ''"
            />
          </template>
        </q-input>
      </div>
      <!-- AJUSTES USUARIO -->
      <div class=".col-2 col-sm-2 items-center foto">
        <q-btn round>
          <q-avatar
            size="80px"
            label="cuenta"
          >
            <img :src=this.img />
          </q-avatar>
          <q-menu>
            <div class="row no-wrap q-pa-md text-center">
              <div class="column">
                <!-- AJUSTES -->
                <div
                  class="q-pa-md"
                  align="center"
                >
                  <q-list class="asistencia">
                    <q-item>
                      <q-item-section class="negrita">{{$t('settings')}}</q-item-section>
                    </q-item>
                    <q-separator
                      inset
                      style="max-width: 200px "
                    />

                    <q-item
                      clickable
                      v-ripple
                    >
                      <q-item-section @click="$router.push('update')">
                        <q-item-label>
                          <q-icon
                            name="person"
                            style="font-size: 2em;"
                          />
                          {{$t('profile')}}
                        </q-item-label>
                      </q-item-section>
                    </q-item>

                    <!-- <q-item
                      clickable
                      v-ripple
                    >
                      <q-item-section>
                        <q-item-label>
                          <q-icon
                            name="alarm"
                            style="font-size: 2em;"
                          />
                          {{$t('alerts')}}
                        </q-item-label>
                      </q-item-section>
                    </q-item> -->
                  </q-list>
                </div>
                <q-btn
                  color="primary"
                  :label="$t('signoff')"
                  push
                  size="sm"
                  v-close-popup
                  @click="Salir"
                />
              </div>
            </div>
          </q-menu>
        </q-btn>
      </div>
    </q-toolbar>
  </div>
</template>

<script>
import { firebaseAuth } from '../../boot/firebase'

export default {
  name: 'Usuario',
  data () {
    return {
      saludo: '',
      saludo_2: this.$t('mind'),
      busqueda: '',
      img: ''
    }
  },
  methods: {
    Salir () {
      firebaseAuth.signOut()
      this.$store.dispatch('store/borrarUsuario')
      this.saludo = ''
      this.img = ''
      this.$router.push('login')
    }
  },
  mounted () {
    // console.log('USUARIO GENERAL', this.$store.state.store.datosUsuario)
    this.saludo = this.$t('welcome') + ' ' + this.$store.state.store.datosUsuario.displayName.split(' ')[0]
    this.img = this.$store.state.store.datosUsuario.photoURL
    // console.log('El token-> ', this.$store.state.store.token)
  }
}
</script>

<style>
.negrita {
  font-weight: bold;
  font-size: 100%;
}

.saludo {
  font-weight: bold;
  font-size: 130%;
}

.saludo_2 {
  font-weight: bold;
  color: #ec9718;
  font-size: 90%;
}

/* .foto {
} */
</style>
