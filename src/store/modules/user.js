import { toLoginAPI } from '@/api'
export default {
  namespaced: true,
  state: {
    token: null,
    data: {}
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_DATA(state, data) {
      state.data = data
    }
  },
  actions: {
    async toLogin({ commit }, res) {
      const { data } = await toLoginAPI(res)
      commit('SET_TOKEN', data.token)
      commit('SET_DATA', data)
    }
  }
}
