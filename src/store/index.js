import Vue from 'vue'
import Vuex from 'vuex'
import settings from './settings'
import products from '@/data/products.js'
import colors from '@/data/colors.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartProducts: JSON.parse(localStorage.getItem('cart')) || [],
  },
  mutations: {
    addProductToCart(state, payload){
      const item = state.cartProducts.find(item => item.productId === payload.productId && item.colorId === payload.colorId);
      if(item) {
          item.amount+=payload.amount;
      } else {
          state.cartProducts.push({
              productId: payload.productId,
              amount: payload.amount,
              colorId: payload.colorId
          })
      }
    },
    updateCartProductAmount(state, payload){
      if(payload.amount < 1) {
        return;
      } else {
        const item = state.cartProducts.find(item => item.productId === payload.productId && item.colorId === payload.colorId);
        if(item) {
          item.amount = payload.amount;
        }
      }
    },
    deleteCartProduct(state, payload){
      const item = state.cartProducts.find(item => item.productId === payload.productId && item.colorId === payload.colorId);
      if(item) {
        console.log(item)
        const arr = state.cartProducts.filter(product => (product.productId !== item.productId || product.colorId !== item.colorId));
        console.log(arr)
        state.cartProducts = arr;
      }
    }
  },
  getters: {
    cartProductsDetail(state) {
      const arr = state.cartProducts.map(item => {
        return {
          ...item,
          product: products.find(p => p.id === item.productId && p.colors.filter(c => c.id === item.id)),
          color: colors.find(color => color.id === item.colorId)}
      });
      localStorage.setItem('cart', JSON.stringify(arr));
      return arr
    }
  },
  modules: {
    settings
  }
})
