<template>
  <div>
    <q-chat-message
      class="comentario"
      :name="this.nombre"
      :avatar="this.avatar"
      :text="[this.texto]"
      :stamp="this.hora"
      text-color="black"
      bg-color="grey-4"
      :sent="this.tipo_mensaje"
    />
  </div>
</template>

<script>
export default {
  name: 'Comentario',
  data () {
    return {
      tipo_mensaje: false
    }
  },
  props: {
    nombre: {
      // type: String,
      // required: true
    },
    avatar: {
      // type: String,
      // required: true
    },
    texto: {
      // type: String,
      // required: true
    },
    hora: {
      // type: String,
      // required: true
    },
    dia: {
      // type: String,
      // required: true
    }
  },
  mounted () {
    if (this.$store.state.store.datosUsuario.displayName === this.nombre) {
      this.tipo_mensaje = true
    }
  }
}
</script>
