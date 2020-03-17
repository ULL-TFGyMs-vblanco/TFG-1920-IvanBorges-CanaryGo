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
</style>
