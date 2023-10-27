// store.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    cart: [], // Tablica przechowująca przedmioty w koszyku
  },
  mutations: {
    addToCart(state, offer) {
      state.cart.push(offer);
      localStorage.setItem('cart', JSON.stringify(state.cart)); // Zapisz koszyk w localStorage
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(state.cart)); // Zapisz koszyk w localStorage
    },
  },
  getters: {
    cartItems: (state) => state.cart,
    totalPrice: (state) => {
      return state.cart.reduce((total, item) => total + item.price, 0);
    },
  },
  mutations: {
    addToCart(state, offer) {
      const existingOffer = state.cart.find((item) => item.id === offer.id);
      if (existingOffer) {
        existingOffer.quantity++; // Zwiększ liczbę sztuk
      } else {
        offer.quantity = 1; // Ustaw początkową liczbę sztuk na 1
        state.cart.push(offer);
      }
      localStorage.setItem('cart', JSON.stringify(state.cart)); // Zapisz koszyk w localStorage
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(state.cart)); // Zapisz koszyk w localStorage
    },
  },

});

// Odczytaj koszyk z localStorage podczas inicjalizacji
const savedCart = localStorage.getItem('cart');
if (savedCart) {
  store.state.cart = JSON.parse(savedCart);
}




export default store;