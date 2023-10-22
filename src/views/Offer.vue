<script setup></script>

<template>
  <main>
    <h2>Language Training Offers</h2>
    <div class="offer">
      <h3>English Training</h3>
      <p>
        Improve your English skills with our comprehensive training program.
        From beginners to advanced learners, we have courses for all levels.
      </p>

      <b-button to="/languages/English">Learn More</b-button>
    </div>
    <div class="offer">
      <h3>Spanish Training</h3>
      <p>
        Explore the beauty of the Spanish language. Our experienced instructors
        will guide you through your language journey.
      </p>
      <b-button to="/languages/Spanish">Learn More</b-button>
    </div>
    <div class="offer">
      <h3>French Training</h3>
      <p>
        Discover the charm of the French language. Enroll in our courses and
        embrace the culture of France.
      </p>
      <b-button to="/languages/French">Learn More</b-button>
    </div>
  </main>
</template>

<style scoped>
h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.offer {
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

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
