import * as oauth from '@/services/oauth'

export default {
  namespaced: true,
  state: {
    token: null
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    }
  },
  actions: {
    getToken({commit}) {
      oauth.getToken()
        .then(({data}) => {
            commit('SET_TOKEN', data.access_token)
        })
        .catch(error => {
            commit('SET_TOKEN', null)
            console.log(`Error OAuth: ${error}`)
        })
        .finally(() => {
            console.log('Done!')
        })
    }
  }
}