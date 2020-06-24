<template>
  <div>
    <q-layout view="lHh Lpr lFf">
      <q-header
        elevated
        class="header"
      >
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />
          <q-toolbar-title
            class="header-text"
            style="color: white; font-size: 17px"
          >Canary Go</q-toolbar-title>
          <LanguageSelector />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        toggle
        bordered
      >
        <q-list>
          <q-item-label
            header
            class="text-grey-8"
          >Menu</q-item-label>
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-list>

        <!-- /Modo oscuro/ -->
        <q-item
          clickable
          tag="a"
          @click="modooscuro()"
        >
          <q-item-section avatar>
            <q-toggle
              color="#ec9718"
              size="28px"
              v-model="dark"
              @input="modooscuro()"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{$t('dark_mode')}}</q-item-label>
            <q-item-label caption>{{$t('dark')}}</q-item-label>
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
import LanguageSelector from '../components/LanguageSelector.vue'

export default {
  name: 'MainLayout',
  dark: 'false',

  components: {
    EssentialLink,
    LanguageSelector
  },

  data () {
    return {
      dark: false,
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'introduction',
          caption: 'offer',
          icon: 'apps',
          link: '/home'
        },
        {
          title: 'login',
          caption: 'find',
          icon: 'person',
          link: './login'
        },
        {
          title: 'register',
          caption: 'adventure',
          icon: 'person_add_disabled',
          link: './signup'
        },
        {
          title: 'event_section',
          caption: 'event_caption',
          icon: 'event_available',
          link: './events'
        },
        {
          title: 'event_add',
          caption: 'event_add_caption',
          icon: 'event_note',
          link: './new'
        },
        {
          title: 'update_user',
          caption: 'user_caption',
          icon: 'account_circle',
          link: './update'
        }
      ]
    }
  },
  methods: {
    modooscuro () {
      this.$q.dark.toggle()
      // console.log('OSCURO')
      this.botonoscuro()
    },
    botonoscuro () {
      if (this.$q.dark.isActive) {
        this.dark = true
      } else {
        this.dark = false
      }
    },
    Redirigir () {
      console.log('Main layout', this.$store.state.store.datosUsuario, this.$route.fullPath)
      if (this.$store.state.store.datosUsuario.length === 0) {
        if ((this.$route.fullPath !== '/login') && (this.$route.fullPath !== '/signup') && (this.$route.fullPath !== '/home')) {
          this.$router.push('/login')
          this.$q.notify({
            message: this.$t('must_login_register'),
            color: 'red',
            textColor: 'white',
            icon: 'error'
          })
        }
      }
    }
  },
  mounted () {
    // this.Redirigir()
  },
  updated () {
    this.Redirigir()
  }
}
</script>

<style>
</style>
