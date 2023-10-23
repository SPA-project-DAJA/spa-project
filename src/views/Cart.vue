<template>
  <div>
    <h2>Your Cart</h2>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        {{ item.description }}
        <button @click="removeFromCart(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const cartItems = store.getters.cartItems;

const removeFromCart = (index) => {
  store.commit('removeFromCart', index);
}
</script>