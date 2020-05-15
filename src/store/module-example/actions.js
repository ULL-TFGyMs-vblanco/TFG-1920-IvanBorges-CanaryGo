
const actions = {
  anadirUsuario (context, payload) {
    setTimeout(function () {
    //   console.log('accion crear')
      context.commit('anadirUsuario', payload)
    }, 500)
  },
  anadirToken (context, payload) {
    setTimeout(function () {
    //   console.log('accion crear')
      context.commit('anadirToken', payload)
    }, 500)
  },

  borrarUsuario (context) {
    setTimeout(function () {
      context.commit('borrarUsuario')
    }, 500)
  }

}

export default actions
