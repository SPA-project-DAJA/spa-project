<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <div class="cart-item-info">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <p>Price: ${{ formatPrice(item.price) }}</p>
          <p>Quantity: {{ item.quantity }}</p>
        </div>
        <div class="cart-item-actions">
          <button @click="decreaseQuantity(item)">-</button>
          <button @click="increaseQuantity(item)">+</button>
          <button @click="removeFromCart(index)">Remove</button>
        </div>
      </li>
    </ul>
    <p class="total-price">Total Price: ${{ formatPrice(totalPrice) }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const cartItems = store.getters.cartItems;

const removeFromCart = (index) => {
  store.commit('removeFromCart', index);
}

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--;
  }
}

const increaseQuantity = (item) => {
  item.quantity++;
}

const formatPrice = (price) => {
  return price.toFixed(2);
}

const totalPrice = computed(() => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
});
</script>

<style scoped>
.cart {
  background-color: #ecf0f1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 30px auto;
}
.cart-item {
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  margin-bottom: 10px;
}

.cart-item-info {
  flex: 1;
}

.cart-item h3 {
  font-size: 20px;
  margin: 0;
}

.cart-item p {
  margin: 5px 0;
}

.cart-item-actions {
  display: flex;
  align-items: center;
}

.cart-item-actions button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin: 0 5px;
}

.cart-item-actions button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.total-price {
  font-size: 24px;
  text-align: right;
  margin-top: 20px;
}
</style>
