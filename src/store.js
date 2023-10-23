import { createStore } from 'vuex';

const store = createStore({
  state: {
    cart: [], // Tablica przechowująca przedmioty w koszyku
  },
  mutations: {
    addToCart(state, offer) {
      state.cart.push(offer);
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
    },
  },
  getters: {
    cartItems: (state) => state.cart,
  },
});

export default store;