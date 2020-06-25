<template>
  <div>
    <template>
      <div class="q-pa-md">
        <q-toolbar class="bg-grey1 shadow-2 rounded-borders">
          <!-- <q-btn flat label="Homepage" /> -->

          <q-tabs v-model="tab" shrink>
            <q-tab name="tab1" :label="$t('featured')" />
            <q-tab name="tab2" :label="$t('new')" />
            <!-- <q-tab name="tab3" :label="$t('location_user')" /> -->
          </q-tabs>
          <q-space />

          <q-select
            class="lugares"
            color="orange"
            outlined
            label-color="orange"
            v-model="model"
            :options="options"
            :label="$t('location')"
          >
            <template v-slot:append>
              <q-icon name="place" color="orange" />
            </template>
          </q-select>
        </q-toolbar>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Filtro',
  data () {
    return {
      tab: 'tab1',
      model: '',
      options: [
        'Tenerife', 'Gran Canaria', 'La Palma', 'La Gomera', 'El Hierro', 'Lanzarote', 'Fuerteventura', ''
      ]
    }
  },
  updated () {
    this.$emit('clicked', this.tab, this.model)
  }
}

</script>

<style>
</style>
