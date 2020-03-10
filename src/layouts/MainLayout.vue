<template>
  <div>
    <q-layout view="lHh Lpr lFf">
      <q-header elevated class="header">
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />

          <q-toolbar-title class="header-text">Canary Go</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="leftDrawerOpen" toggle bordered content-class="bg-grey-1">
        <q-list>
          <q-item-label header class="text-grey-8">Menu</q-item-label>
          <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
        </q-list>
      </q-drawer>

      <!-- //ESTILO INFERIOR DE LAYOUT  -->
      <q-page-container>
        <router-view />
        <!-- Footer -->
        <!-- <q-footer reveal class="bg-grey-3 text-dark"> -->
        <footer>
          <div class="row">
            <div class="col-6 col-sm-3">
              <div class="q-pa-md" align="center">
                <q-list class="compania">
                  <q-item>
                    <q-item-section class="negrita">Compañía</q-item-section>
                  </q-item>
                  <q-separator inset style="max-width: 200px " />

                  <q-item clickable v-ripple>
                    <q-item-section>
                      <q-item-label>Sobre nosotros</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-ripple>
                    <q-item-section>
                      <q-item-label>Contacto</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>

            <div class="col-6 col-sm-3">
              <div class="q-pa-md" align="center">
                <q-list class="comunidad">
                  <q-item>
                    <q-item-section class="negrita">Comunidad</q-item-section>
                  </q-item>
                  <q-separator inset style="max-width: 200px " />

                  <q-item clickable v-ripple>
                    <q-item-section>
                      <q-item-label>Cómo funciona CanaryGo</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>

            <div class="col-6 col-sm-3">
              <div class="q-pa-md" align="center">
                <q-list class="asistencia">
                  <q-item>
                    <q-item-section class="negrita">Asistencia</q-item-section>
                  </q-item>
                  <q-separator inset style="max-width: 200px " />

                  <q-item clickable v-ripple>
                    <q-item-section>
                      <q-item-label>Ayuda</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-ripple>
                    <q-item-section>
                      <q-item-label>Chat</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>

            <div class="col-6 col-sm-3">
              <div class="q-pa-md" align="center">
                <q-list class="asistencia">
                  <q-item>
                    <q-item-section class="negrita">Descarga nuestra APP</q-item-section>
                  </q-item>
                  <q-separator inset style="max-width: 200px " />

                  <q-item clickable v-ripple>
                    <q-item-section>
                      <img
                        src="../assets/images/CanaryGo/android-app.svg"
                        style="max-width: 100px; width: 100%; height: auto; min-width: 60px;"
                      />
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-ripple>
                    <q-item-section>
                      <img
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

        <!-- !Footer -->
      </q-page-container>
    </q-layout>
  </div>
</template>

//////////////////////////////////////////////////////////////////////

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Inicio',
          caption: '¿Qué ofrecemos?',
          icon: 'apps',
          link: '/'
        },
        {
          title: 'Iniciar sesión',
          caption: 'Encuentra lo que buscas',
          icon: 'person',
          link: './login'
        },
        {
          title: 'Registro',
          caption: 'Comienza tu aventura',
          icon: 'person_add_disabled',
          link: './signup'
        }

      ]
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

footer {
}

.negrita {
  font-weight: bold;
  font-size: 120%;
}
</style>
