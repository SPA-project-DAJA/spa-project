<template>
  <div>
    <h2>Your Cart</h2>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        {{ item.description }} - {{ item.name }} - Price: ${{ item.price }}
        <button @click="removeFromCart(index)">Remove</button>
      </li>
    </ul>
    <p>Total Price: ${{ totalPrice }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const cartItems = store.getters.cartItems;
const totalPrice = store.getters.totalPrice;

const removeFromCart = (index) => {
  store.commit('removeFromCart', index);
}
</script>
