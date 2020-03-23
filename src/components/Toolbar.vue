<template>
  <div>
    <q-toolbar class="bg-orange">
      <q-btn flat dense round icon="menu" aria-label="Menu" />

      <q-toolbar-title class="header-text" style="color: white">Canary Go</q-toolbar-title>

      <q-toolbar class="col-4 bg-primary text-white">
        <!-- Busqueda -->
        <q-input dark dense standout v-model="busqueda" input-class="text-right" class="q-ml-md">
          <template v-slot:append>
            <q-icon v-if="busqueda === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="busqueda = ''" />
          </template>
        </q-input>
      </q-toolbar>

      <!-- Cuenta -->
      <q-toolbar class="col-4 bg-primary text-white">
        <q-btn round>
          <q-avatar size="45px">
            <img src="https://cdn.quasar.dev/app-icons/icon-128x128.png" />
          </q-avatar>
          <q-menu>
            <div class="row no-wrap q-pa-md text-center">
              <div class="column">
                <div class="text-h6 q-mb-md text-center negrita">Ajustes</div>

                <q-list class="usuario">
                  <q-item clickable v-ripple v-close-popup>
                    <q-item-section>
                      <q-item-label>
                        <q-icon name="person" style="font-size: 2em;" />     Perfil
                      </q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-ripple v-close-popup>
                    <q-item-section>
                      <q-item-label>
                        <q-icon name="alarm" style="font-size: 2em;" />     Alertas
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px" label="cuenta">
                  <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">Usuario</div>

                <q-btn color="primary" label="Cerrar sesión" push size="sm" v-close-popup />
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
      <!-- Final -->
    </q-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data () {
    return {
      busqueda: ''
    }
  }
}
</script>
