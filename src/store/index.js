import Vue from 'vue'
import Vuex from 'vuex'
import CreatePersistedstate from 'vuex-persistedstate'
import user from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user
  },
  plugins: [
    CreatePersistedstate({
      key: 'likede-project',
      path: ['user']
    })
  ]
})
