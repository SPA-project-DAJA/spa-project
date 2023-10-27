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
      <button type="submit">Confirm Purchase</button>
    </form>

    <!-- Komunikat z podziękaniem (wyświetlany po naciśnięciu przycisku) -->
    <div class="thank-you-message" v-if="showAlert">
      <p>Thank you for your purchase!</p>
      <p>In a moment you will be redirected to the home page</p>
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

const showAlert = ref(false); // Dodajmy flagę do kontrolowania wyświetlania alertu

const submitPurchase = () => {
  // Logika finalizacji zakupów

  // Aktualizacja statusu koszyka
  store.commit("updateCartStatus", "Completed");

  // Ustawienie zakupu jako zakończony
  showAlert.value = true;

  // Po kolejnych 3 sekundach przekieruj na stronę główną
  setTimeout(() => {
    router.push("/");
  }, 5000);
};
</script>

<style scoped>
.finalize-purchase {
  max-width: 800px;
  margin: 30px auto;
  padding: 20px;
  background-color: #ecf0f1; /* Jasnoszare tło */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left; /* Tekst dostosowany do lewej strony */
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  color: #333; /* Ciemny kolor tekstu */
}

input[type="text"],
input[type="email"],
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

select {
  background-color: #fff; /* Jasnoszare tło */
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

.thank-you-message {
  margin-top: 20px;
  text-align: left; /* Tekst dostosowany do lewej strony */
  font-weight: bold;
  color: #4CAF50; /* Jasnoniebieski kolor tekstu */
}
</style>
