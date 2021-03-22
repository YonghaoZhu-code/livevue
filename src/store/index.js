import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  mutations: {
    SETUSERINFO (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    setUserInfo ({ commit }, userInfo) {
      commit('SETUSERINFO', userInfo)
    }
  },
  modules: {
  }
})
