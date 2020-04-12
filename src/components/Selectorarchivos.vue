<template>
  <div id="app">
    <file-pond
      name="foto"
      ref="foto"
      id="foto"
      class-name="foto"
      label-idle="Selecciona o arrastra tu foto aquí"
      allow-multiple="false"
      accepted-file-types="image/jpeg, image/png"
      v-bind:files="myFiles"
      v-on:init="handleFilePondInit"
    />
    <q-btn color="white" text-color="black" label="SUBIR" @click="subirArchivo()" />
  </div>
</template>

<script>
// Import FilePond
import vueFilePond from 'vue-filepond'

// Import plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js'

// Import styles
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

// eslint-disable-next-line no-unused-vars
import { firebaseStg } from 'boot/firebase'

// Create FilePond component
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview)

export default {
  name: 'Selectorarchivos',
  data: function () {
    return { myFiles: [] }
  },
  methods: {
    handleFilePondInit: function () {
      console.log('FilePond has initialized')

      // example of instance method call on pond reference
      // this.$refs.pond.getFiles()
    },
    subirArchivo () {
      // var storageRef = firebaseStg.ref('eventos')

      var file = document.getElementById('foto').files
      console.log('ARCHIVITO LOCAL -> ', file)
      // var file = this.myFiles

      // console.log('ARCHIVITO -> ', file)

      // var thisRef = storageRef.child(file.name)

      // thisRef.put(file).then(function (snapshot) {
      //   alert('File Uploaded')
      //   console.log('Uploaded a blob or file!')
      // })
    }
  },

  components: {
    FilePond
  }
}
</script>
