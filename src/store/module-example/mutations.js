
const mutations = {
  anadirUsuario (state, payload) {
    state.datosUsuario = payload
    // console.log('Añadiendo usuario-> ', state)
  },

  anadirToken (state, payload) {
    state.token = payload
    // console.log('Añadiendo token-> ', state)
  },

  borrarUsuario (state) {
    state.datosUsuario = []
    state.token = []
    // console.log('Borrando', state)
  }
}

export default mutations
