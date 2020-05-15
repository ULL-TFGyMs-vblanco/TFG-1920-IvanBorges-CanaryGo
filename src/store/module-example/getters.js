// export function someGetter (/* state */) {
// }

import state from './state'

const getters = {
  infoUsuario () {
    console.log('Devolviendo')
    return state.datosUsuario
  }
}

export default getters
