import getToken from '@/api/oauth'

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
    async getToken({commit}) {
      commit('loading/SET_LOADING', true, { root: true })
      try {
        const { data } = await getToken()
        commit('SET_TOKEN', data.access_token)
      } catch (error) {
        commit('SET_TOKEN', null)
      }
      commit('loading/SET_LOADING', false, { root: true })
    }
  }
}