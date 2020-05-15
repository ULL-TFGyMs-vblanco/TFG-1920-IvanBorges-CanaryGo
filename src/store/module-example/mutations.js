
const mutations = {
  anadirUsuario (state, payload) {
    state.datosUsuario = payload
    // console.log(state)
  },

  anadirToken (state, payload) {
    state.token = payload
    // console.log(state)
  },

  borrarUsuario (state) {
    state.datosUsuario = []
    // console.log(state.datosUsuario)
  }
}

export default mutations
