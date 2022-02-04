import Vue from 'vue'
import Vuex from 'vuex'
import settings from './settings'
import products from '@/data/products.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allProducts: products,
    cartProducts: []
  },
  mutations: {
  },
  actions: {
    
  },
  modules: {
    settings
  }
})
