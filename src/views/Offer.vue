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

      <b-button class ="learnmore" to="/languages/English">Learn More</b-button>
    </div>
    <div class="offer">
      <h3>Spanish Training</h3>
      <p>
        Explore the beauty of the Spanish language. Our experienced instructors
        will guide you through your language journey.
      </p>
      <b-button class ="learnmore" to="/languages/Spanish">Learn More</b-button>
    </div>
    <div class="offer">
      <h3>French Training</h3>
      <p>
        Discover the charm of the French language. Enroll in our courses and
        embrace the culture of France.
      </p>
      <b-button class ="learnmore" to="/languages/French">Learn More</b-button>
    </div>
  </main>
</template>

<style scoped>
  h2 {
    font-size: 28px;
    margin-bottom: 20px;
    color: #333; /* Ciemny kolor tekstu */
  }

  .offer {
    background-color: #f5f5f5; /* Jasnoszare tło */
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 800px; /* Maksymalna szerokość bloku oferty */
    margin: 0 auto; /* Wyśrodkowanie bloku oferty */
    margin-bottom: 20px;
    transition: transform 0.3s ease;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #4CAF50; /* Jasnoniebieski kolor tekstu */
  }

  p {
    font-size: 16px;
    margin-bottom: 15px;
    color: #555; /* Średni kolor tekstu */
  }

  .learnmore {
    background-color: #007bff;
    color: #fff; /* Biały kolor tekstu */
    border: none;
    padding: 10px 15px; /* Mniejsza wielkość przycisku */
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease; /* Efekty przy najechaniu myszką */
  }

  .learnmore:hover {
    background-color: #0056b3;
    transform: scale(1.05); /* Powiększenie przycisku przy najechaniu */
  }
  .offer:hover {
    transform: scale(1.05);
  }
</style>


