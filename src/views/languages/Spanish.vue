<script setup></script>

<template>
  <main>
    <h2>Spanish Training Course</h2>
    <div class="course-details">
      <h3>Course Overview</h3>
      <p>
        Our Spanish training program is designed for individuals looking to
        learn and master the Spanish language. Whether you are a beginner or
        have some prior knowledge, our courses cater to all levels.
      </p>
      <h3>Course Highlights</h3>
      <ul>
        <li>Comprehensive language instruction</li>
        <li>Native Spanish-speaking instructors</li>
        <li>Engaging and interactive lessons</li>
        <li>Cultural immersion and conversation practice</li>
        <li>Regular assessments to track your progress</li>
      </ul>
      <h3>Enrollment</h3>
      <p>
        To enroll in our Spanish training course, simply click the
        button below. We offer flexible schedules and a supportive learning
        environment.
      </p>
      <h3>Price: ${{ offer.price }}</h3>
      <button @click="addToCart(offer)" v-if="offer.quantity <1">Add to Cart</button>    </div>
    <TheWelcome />
  </main>
</template>

<style scoped>
h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333; /* Ciemny kolor tekstu */
}

.course-details {
  background-color: #f5f5f5; /* Jasnoszare tło */
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
  color: #4CAF50; /* Jasnoniebieski kolor tekstu */
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
import { ref } from 'vue';
import { useStore } from 'vuex';

const offer = ref({
  // Dodaj właściwości oferty, takie jak id, name, description, price itp.
  id: 1,
  name: 'Spanish Course',
  description: 'Our Spanish training program...',
  price: 19.99, // Cena kursu
  quantity: 0, // Inicjalizacja quantity
});
const store = useStore();

const addToCart = () => {
  if (offer.value.quantity < 1) {
    store.commit('addToCart', offer.value);
    offer.value.quantity = 1; // Zwiększ quantity po dodaniu do koszyka
  }
}
</script>