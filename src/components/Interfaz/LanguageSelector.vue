<template>
  <div class="language">
    <q-select
      v-model="lang"
      :options="langOptions"
      :label="$t('language')"
      dense
      borderless
      emit-value
      map-options
      options-dense
      style="min-width: 150px"
    />
  </div>
</template>

<script>

export default {
  data () {
    return {
      lang: this.$i18n.locale,
      langOptions: [
        { value: 'es', label: 'Español' },
        { value: 'en', label: 'English' }
      ]
    }
  },
  watch: {
    lang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style>
</style>
