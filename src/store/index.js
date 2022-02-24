
import Vue from 'vue'
import Vuex from 'vuex'
import { Hero } from '../models/Hero'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers: {
      range: [2, 5],
      beers: []
    }, heroes: {
      list: [
        new Hero("Superman", "Clark Kent"),
        new Hero("Batman", "Bruce Wayne")],
    }
  },
  getters: {
    getRange: state => state.beers.range,
    getHeroes: state => state.heroes.list,
    getBeers: state => state.beers.beers
  },
  mutations: {
    setRange: (state, payload) => {
      state.beers.range = payload
    },
    setBeers: (state, payload) => {
      state.beers.beers = payload
    },
    addHero: (state, payload) => {
      state.heroes.list.push(payload)
    },
    updateListHeroes: (state, payload) => {
      state.heroes.list = payload
    }
  },
  actions: {
    async fetchBeers({ commit }) {
      let beers = []
      if (this.state.beers.beers.length > 0) {
        beers = this.getters.getBeers;
      }
      else if (this.state.beers.beers.length === 0) {
        console.log("Fetching beers...");
        const response = await fetch('https://api.punkapi.com/v2/beers')
        beers = await response.json()
        commit('setBeers', beers)
        // return Promise
      }
      return Promise.resolve(beers)
    }
  },
  modules: {
  }
})
