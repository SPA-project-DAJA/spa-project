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

  <li v-for="(item, index) in cartItems" :key="index">
  {{ item.description }} - {{ item.name }} - Price: ${{ item.price }}
  Quantity: {{ item.quantity }}
  <button @click="decreaseQuantity(item)">-</button>
  <button @click="increaseQuantity(item)">+</button>
  <button @click="removeFromCart(index)">Remove</button>
</li>


</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const cartItems = store.getters.cartItems;

const removeFromCart = (index) => {
  store.commit('removeFromCart', index);
}

// Oblicz total price na podstawie zawartości koszyka
const totalPrice = computed(() => {
  return cartItems.reduce((total, item) => total + item.price, 0);
});
</script>
