<template>
  <div class="selector">
    <picture-input
      ref="foto"
      id="foto"
      :width="this.anchura"
      :height="this.altura"
      margin="16"
      accept="image/jpeg, image/png"
      size="5"
      radius="5"
      button-class="primary"
      prefill="https://firebasestorage.googleapis.com/v0/b/canarygo-f725d.appspot.com/o/avatares%2Fpredefinidos%2FAvatar_m.png?alt=media&token=f05ee5f6-ee21-4e32-b6e9-8812f282757f.jpg"
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
