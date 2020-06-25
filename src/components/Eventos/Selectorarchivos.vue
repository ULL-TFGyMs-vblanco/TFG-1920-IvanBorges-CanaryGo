<template>
  <div class="selector">
    <picture-input
      ref="foto"
      id="foto"
      :crop="false"
      :width="this.anchura"
      :height="this.altura"
      margin="16"
      accept="image/*"
      size="25"
      radius="5"
      button-class="primary"
      :zIndex="this.index"
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
      info1: this.$t('select'),
      index: 1
    }
  },
  props: {
    anchura: {
      // type: Number,
      // required: true
    },
    altura: {
      // type: Number,
      // required: true
    }
  },
  components: {
    PictureInput
  },
  methods: {
    onChange (image) {
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
