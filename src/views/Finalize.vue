<template>
  <div class="finalize-purchase">
    <h2>Finalize Purchase</h2>

    <!-- Formularz do wprowadzenia danych dostawy i płatności -->
    <form @submit.prevent="submitPurchase">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="deliveryData.name" required />
      </div>

      <div class="form-group">
        <label for="address"> Address:</label>
        <input
          type="text"
          id="address"
          v-model="deliveryData.address"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="deliveryData.email" required />
      </div>

      <div class="form-group">
        <label for="payment">Payment Method:</label>
        <select id="payment" v-model="deliveryData.paymentMethod" required>
          <option value="credit_card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <!-- Dodaj inne opcje płatności, jeśli to konieczne -->
        </select>
      </div>
      <button @click="finalize">Confirm Purchase</button>
    </form>

    <!-- Komunikat z podziękowaniem (wyświetlany po naciśnięciu przycisku) -->
    <div class="thank-you-message" v-if="purchaseCompleted">
      <p>Thank you for your purchase!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const deliveryData = ref({
  name: "",
  address: "",
  email: "",
  paymentMethod: "credit_card",
});

const purchaseCompleted = ref(false); // Początkowo zakup nie jest zakończony

const finalize = () => {
  // Logika finalizacji zakupów

  // Aktualizacja statusu koszyka
  store.commit("updateCartStatus", "Completed");

  // Ustawienie zakupu jako zakończony
  purchaseCompleted.value = true;

  // Przekierowanie na stronę potwierdzenia
  router.push("/confirmation");
};
</script>

<style scoped>
.finalize-purchase {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
