
const actions = {
  anadirUsuario2 (state, payload) {
    state.datosUsuario = payload
    console.log(state.datosUsuario)
  }
}

export default actions
