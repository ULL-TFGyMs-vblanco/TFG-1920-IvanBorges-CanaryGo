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

          <q-toolbar-title class="header-text" style="color: white">Canary Go</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="leftDrawerOpen" toggle bordered >
        <q-list>
          <q-item-label header class="text-grey-8">Menu</q-item-label>
          <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
        </q-list>

        <!-- /Modo oscuro/ -->
        <q-item clickable tag="a" @click="modooscuro()">
          <q-item-section avatar>
            <q-toggle color="#ec9718" size="28px" v-model="dark" @click="modooscuro()" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Oscuro</q-item-label>
            <q-item-label caption>Activa o desactiva el modo oscuro</q-item-label>
          </q-item-section>
        </q-item>
      </q-drawer>

      <!-- //ESTILO INFERIOR DE LAYOUT  -->
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

//////////////////////////////////////////////////////////////////////

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',
  dark: 'false',

  components: {
    EssentialLink
  },

  data () {
    return {
      dark: false,
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
  },
  methods: {
    modooscuro () {
      this.$q.dark.toggle()
      this.botonoscuro()
    },
    botonoscuro () {
      if (this.$q.dark.isActive) {
        this.dark = true
      } else {
        this.dark = false
      }
    }

  }
}
</script>

<style>
</style>
