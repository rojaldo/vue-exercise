
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
    },
    apod: {
      data: {}
    }
  },
  getters: {
    getRange: state => state.beers.range,
    getHeroes: state => state.heroes.list,
    getBeers: state => state.beers.beers,
    getApod: state => state.apod.data
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
    },
    setApod: (state, payload) => {
      console.log('setApod: ', payload);
      state.apod.data = payload
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
    },
    async fetchApod({ commit }, date = '') {
      let apod = this.getters.getApod

      console.log("Fetching apod...");
      const baseURL = "https://api.nasa.gov/planetary/apod";
      const apiKey = "tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6";
      const url = `${baseURL}?api_key=${apiKey}&date=${date}`;
      const response = await fetch(url)
      apod = await response.json()
      commit('setApod', apod)


      // return Promise
      return Promise.resolve(apod)
    }
  },
  modules: {
  }
})