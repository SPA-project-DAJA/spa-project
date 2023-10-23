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
        To enroll in our Spanish training course, simply click the "Enroll"
        button below. We offer flexible schedules and a supportive learning
        environment.
      </p>
      <button @click="addToCart(offer)">Add to Cart</button>
    </div>
    <TheWelcome />
  </main>
</template>

<style scoped>
h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.course-details {
  background-color: #f0f0f0;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  margin-bottom: 20px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

.enroll-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.enroll-button:hover {
  background-color: #0056b3;
}
</style>


<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const offer = ref({ 
  description: "Spanish language learning offer",
  price: 17.99, // Dodaj cenę oferty
});
const store = useStore();

const addToCart = (offer) => {
  store.commit('addToCart', offer);
}
</script>