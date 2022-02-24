import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers: {
      range: [2,5],
    }
  },
  getters: {
    getRange: state => state.beers.range
  },
  mutations: {
    setRange: (state, payload) => {
      state.beers.range = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
