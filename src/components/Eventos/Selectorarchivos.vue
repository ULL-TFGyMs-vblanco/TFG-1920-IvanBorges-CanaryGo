<template>
  <div class="selector">
    <picture-input
      ref="foto"
      id="foto"
      width="600"
      height="600"
      margin="16"
      accept="image/jpeg, image/png"
      size="50"
      radius="5"
      button-class="primary"
      :key="$i18n.locale"
      :custom-strings="{
        upload: this.$t('done'),
        drag: this.$t('select'),
        change: this.$t('change'),
      }"
      @change="onChange"
      @
    />
  </div>
</template>

<script>
import PictureInput from 'vue-picture-input'

export default {
  name: 'Selectorarchivos',
  data () {
    return {
      info1: this.$t('select')
    }
  },
  components: {
    PictureInput
  },
  methods: {
    onChange (image) {
      document.getElementsByClassName('picture-preview')[0].setAttribute('style', 'height: 578px; z-index: 0; background: none;')
      console.log('Nuevo archivo')
      if (image) {
        console.log('Archivo leído.')
        this.image = image
      } else {
        console.log('FileReader no soportado')
      }
    }
  }
}
</script>

<style>
#picture-input {
  height: 578px;
  z-index: 0;
  background: none;
}

</style>
