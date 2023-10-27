<!-- French.vue -->
<script setup></script>

<template>
  <main>
    <h2>French Training Course</h2>
    <div class="course-details">
      <h3>Course Overview</h3>
      <p>
        Our French training program is designed to introduce learners to the
        beauty of the French language and culture. Whether you are a beginner or
        have some prior knowledge, our courses will help you develop your French
        language skills.
      </p>
      <h3>Course Highlights</h3>
      <ul>
        <li>Immersive learning experience</li>
        <li>Native French-speaking instructors</li>
        <li>Cultural exploration and activities</li>
        <li>Interactive lessons and conversation practice</li>
        <li>Regular assessments to track your progress</li>
      </ul>
      <h3>Enrollment</h3>
      <p>
        To enroll in our French training course, click the button below. We
        offer flexible schedules and a variety of course options to suit your
        needs.
      </p>
      <h3>Price: ${{ offer.price }}</h3>
      <button @click="addToCart(offer)" v-if="!offer.purchased">Add to Cart</button>
      <button v-else disabled>Purchased</button>
    </div>
    <TheWelcome />
  </main>
</template>

<style scoped>
main {
  background-color: #ecf0f1; /* Jasnoszare tło */
  padding: 20px;
  text-align: center;
  max-width: 800px;
  margin: 30px auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333; /* Ciemny kolor tekstu */
}

.course-details {
  background-color: #fff; /* Jasnoszare tło */
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px; /* Maksymalna szerokość bloku oferty */
  margin: 0 auto; /* Wyśrodkowanie bloku oferty */
}

h3 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #4caf50; /* Jasnoniebieski kolor tekstu */
}

p {
  font-size: 18px;
  margin-bottom: 20px;
  color: #555; /* Średni kolor tekstu */
}

ul {
  list-style: inside disc; /* Tekst wewnątrz kropek */
  padding-left: 0;
}

button {
  background-color: #007bff;
  color: #fff; /* Biały kolor tekstu */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease; /* Efekty przy najechaniu myszką */
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05); /* Powiększenie przycisku przy najechaniu */
}
</style>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const offer = ref({
  // Dodaj właściwości oferty, takie jak id, name, description, price itp.
  id: 2,
  name: "French Course",
  description: "Our French training program...",
  price: 19.99, // Cena kursu
  quantity: 0, // Inicjalizacja quantity
  purchased: false, // Dodaj pole, które będzie śledzić zakup

});
const store = useStore();

const addToCart = () => {
  if (offer.value.quantity < 1) {
    store.commit('addToCart', offer.value);
    offer.value.quantity = 1; // Zwiększ quantity po dodaniu do koszyka
    offer.value.purchased = true; // Ustaw purchased na true po zakupie
  }
};
</script>
