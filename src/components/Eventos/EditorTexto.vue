<template>
  <div>
    <!-- // Sección añadir comentarios -->
    <div class="q-pa-md q-gutter-sm">
      <q-editor
        v-model="comentario"
        id="editor"
        ref="inputval"
        min-height="6rem"
        @click="ResetearCursor"
        :definitions="{

        left: {
              tip: this.left_text
        },
        center: {
              tip: this.center_text
        },
        right: {
              tip: this.right_text
        },
        justify: {
              tip: this.justify_text
        },
        bold: {
              tip: this.bold_text
        },
        italic: {
              tip: this.italic_text
        },
        underline: {
              tip: this.underline_text
        },
        strike: {
              tip: this.strikethrough_text
        },
        emoji: {
          tip: this.emoji_text,
          icon: 'mood',
          label: 'Emojis',
          handler: CambiarEmoji
        },
        upload: {
          tip: this.upload_text,
          icon: 'cloud_upload',
          label: this.upload_label,
          handler: PublicarComentario
        }
      }"
        :toolbar="[
        ['left', 'center', 'right', 'justify'],
        ['bold', 'italic', 'strike', 'underline'],
        ['emoji', 'upload']
      ]"
      />
      <!-- ////////////////////////////////////// -->
      <!-- Emojis -->
      <div id="caretPos"></div>

      <picker
        class="selectoremojis"
        set='messenger'
        v-show="mostrar_emoji"
        v-model="comentario"
        :defaultSkin=3
        :title=this.title
        emoji="point_up"
        @select="SeleccionarEmoji"
        :i18n="{
        search: this.search_results,
        notfound: this.notfound,
        categories: {
          search: this.search,
          recent: this.recent,
          people: this.people,
          nature: this.nature,
          foods: this.foods,
          activity: this.activity,
          places: this.places,
          objects: this.objects,
          symbols: this.symbols,
          flags: this.flags
      } }"
      />
      <!--  -->
      <!-- ////////////////////////////////////// -->

    </div>

  </div>
</template>

<script>
import { Picker } from 'emoji-mart-vue'
import axios from 'axios'

export default {
  name: 'EditorTexto',
  components: { Picker },
  data () {
    return {
      comentario: '',
      // Traducciones editor
      upload_label: this.$t('upload_label'),
      upload_text: this.$t('comment_post'),
      bold_text: this.$t('bold'),
      italic_text: this.$t('italic'),
      underline_text: this.$t('underline'),
      strikethrough_text: this.$t('strikethrough'),
      left_text: this.$t('left'),
      center_text: this.$t('center'),
      right_text: this.$t('right'),
      justify_text: this.$t('justify'),
      emoji_text: this.$t('emoji_text'),
      mostrar_emoji: false,
      // Traducciones emojis
      title: this.$t('title'),
      search_results: this.$t('search'),
      notfound: this.$t('notfound'),
      search: this.$t('search_results'),
      recent: this.$t('recent'),
      people: this.$t('people'),
      nature: this.$t('nature'),
      foods: this.$t('foods'),
      activity: this.$t('activity'),
      places: this.$t('places'),
      objects: this.$t('objects'),
      symbols: this.$t('symbols'),
      flags: this.$t('flags'),
      cursor: 0,
      cantidad_letras: 0,
      cantidad_letras_extra: 0,
      diferencia_letra: 0,
      diferencia_cursor: 0,
      calcularcurso: true
    }
  },
  props: {
    id: {
      // type: String,
      // required: true
    }
  },
  updated () {
    // console.log('El comentario:', this.comentario)
  },
  mounted () {
    document.addEventListener('click', this.MostrarPosicion)
    document.addEventListener('keyup', this.MostrarPosicion)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.MostrarPosicion)
    document.addEventListener('keyup', this.MostrarPosicion)
  },
  methods: {

    // /////////////////////////////////
    // Editor
    CambiarEmoji () {
      this.mostrar_emoji = !this.mostrar_emoji
    },
    ResetearCursor () {
      // Posicion 0 del cursor
      if (this.calcularcurso) {
        var el = document.getElementById('editor')
        this.diferencia_cursor = this.ObtenerCursor(el)
        // console.log('DIFERENCIA', this.diferencia_cursor)
        this.calcularcurso = false
      }
    },
    // /////////////////////////////////
    // Emojis
    html2text (html) {
      // Transformamos a texto simple
      html = html.replace(new RegExp('&nbsp;', 'g'), ' ')
      html = html.replace(new RegExp('<div>', 'g'), '\n')
      html = html.replace(new RegExp('</div>', 'g'), '')
      html = html.replace(new RegExp('<div/>', 'g'), '\n')
      html = html.replace(new RegExp('<br>', 'g'), '\n')

      // Contamos los espacios de lineas que afectan al cursor y los añadimos (1 espacio equivale a 6 en HTML text)
      let contador = 0
      let htmlextra = false
      let i = 0
      let final = this.cursor

      while (i < final) {
        if (html[i] === ' ') {
          contador = contador + 1
          // console.log('ESPACIO DETECTADO')
        } else if ((html[i] === '<') || (html[i] === '>')) {
          final++
          htmlextra = !htmlextra
        } else if (htmlextra) {
          final++
        }
        i += 1
      }

      // console.log('espacios detectados -> ', contador)
      this.cursor += contador * 6

      // Calculamos longitud de solo texto
      this.cantidad_letras = html.length

      return html
    },
    text2HTML (text) {
      // Tranformamos a texto HTML
      // Espacios
      text = text.replace(new RegExp(' ', 'g'), '&nbsp;')

      // Saltos de línea
      text = text.replace(/\n/g, '<div/>')

      // ///////////////

      // Variables
      let i = 0
      let html = false
      let contador = 0
      let contador2 = 0

      while (this.cursor > contador2) {
        if (text[i] === '<') {
          html = true
          // console.log('html true')
          contador = contador + 1
        } else if (text[i] === '>') {
          html = false
          contador = contador + 1
          // console.log('html false')
        } else if (html) {
          contador = contador + 1
          // console.log('contador1++')
        } else if (text[i] === ' ') {
          // No se cuenta
        } else {
          contador2 = contador2 + 1
          contador = contador + 1
          // console.log('contador2++')
        }

        // Resultados
        // console.log('cursor, contador2, comentario', this.cursor, contador2, text[i])

        // Bucle
        i = i + 1
      }

      // Calculamos longitud
      this.cantidad_letras_extra = text.length
      this.diferencia_letra = contador - this.cursor
      if (this.diferencia_letra > 0) {
        this.cursor += this.diferencia_letra
      }
      // console.log(this.cantidad_letras, this.cantidad_letras_extra, this.diferencia_letra)

      return text
    },
    ObtenerCursor (element) {
      var caretOffset = 0
      var doc = element.ownerDocument || element.document
      var win = doc.defaultView || doc.parentWindow
      var sel
      if (typeof win.getSelection !== 'undefined') {
        sel = win.getSelection()
        if (sel.rangeCount > 0) {
          var range = win.getSelection().getRangeAt(0)
          var preCaretRange = range.cloneRange()
          preCaretRange.selectNodeContents(element)
          preCaretRange.setEnd(range.endContainer, range.endOffset)
          caretOffset = preCaretRange.toString().length
        }
      } else if ((sel = doc.selection) && sel.type !== 'Control') {
        var textRange = sel.createRange()
        var preCaretTextRange = doc.body.createTextRange()
        preCaretTextRange.moveToElementText(element)
        preCaretTextRange.setEndPoint('EndToEnd', textRange)
        caretOffset = preCaretTextRange.text.length
      }
      return caretOffset - this.diferencia_cursor
    },

    MostrarPosicion () {
      var el = document.getElementById('editor')
      // var caretPosEl = document.getElementById('caretPos')
      // caretPosEl.innerHTML = 'Caret position: ' + this.ObtenerCursor(el)
      this.cursor = this.ObtenerCursor(el)
    },
    SeleccionarEmoji (emoji) {
      // Transformar a texto plano para insertar
      this.comentario = this.html2text(this.comentario)

      // console.log('Nuevo Texto->', this.comentario)
      // console.log('Posicion cursor original -> ', this.cursor)

      // Devolver a rich html
      this.comentario = this.text2HTML(this.comentario)
      // console.log('Nuevo Texto 2->', this.comentario)

      const cursorPosition = this.cursor
      // console.log('Posicion cursor -> ', cursorPosition)

      const inicio = this.comentario.substr(0, cursorPosition)
      const fin = this.comentario.substring(cursorPosition, this.comentario.length)

      // console.log('inicio: ', inicio)
      // console.log('fin: ', fin)

      const text = inicio + emoji.native + fin
      this.comentario = text

      // this.$emit('clicked', text)
      // textarea.focus()
      // this.$nextTick(() => {
      //   textarea.selectionEnd = cursorPosition + emoji.native.length
      // })
      // console.log(cursorPosition)
    },
    // Publicar comentarios
    PublicarComentario () {
      // console.log('DATOS', this.id)
      if (this.comentario !== '') {
        axios({
          method: 'put',
          url: 'https://canarygo.herokuapp.com/eventos',
          data: {
            tipo: 'Comentario',
            nombre: this.$store.state.store.datosUsuario.displayName,
            avatar: this.$store.state.store.datosUsuario.photoURL,
            hora: new Date().getHours() + ':' + String(new Date().getMinutes()).padStart(2, '0'),
            dia: new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear(),
            texto: this.comentario,
            id: this.id,
            token: this.$store.state.store.token
          }
        })
          .then((response) => {
            // console.log('RESPUESTA DEL VOTO', response.data)
            // Nuevos datos
            this.$q.notify({
              message: this.$t('comment_success'),
              color: 'green-5',
              textColor: 'white',
              icon: 'cloud_done'
            })
            // Reseteamos y recargamos
            this.comentario = ''
            this.$emit('clicked')
          }).catch(function (error) {
            console.log('EL ERROR ES', error)
            this.$q.notify({
              message: this.$t('comment_error'),
              color: 'red',
              textColor: 'white',
              icon: 'error'
            })
          })
      }
    }
  }
}
</script>

<style>
.selectoremojis {
  font-size: calc(14px + 6 * ((100vw - 1400px) / 700));
}
</style>
