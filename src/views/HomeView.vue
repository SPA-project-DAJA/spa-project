<script setup></script>

<template>
  <main>
    <div class="main-content">
      <h2>Learn a New Language</h2>
      <p>
        Start your language learning journey today with Duolingo. <br />
        Choose from a variety of languages and get started on your path to fluency.
      </p>
      <b-button id="getStarted" to="/offer">Get Started</b-button>
    </div>
  </main>
</template>

<style scoped>
 main {
  background-color: #ecf0f1; /* Jasnoszare tło */
  padding: 20px;
  text-align: center;
  max-width: 560px;
  margin: 30px auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

  .main-content {
    max-width: 800px;
    padding: 20px;
    background-color: #fff; /* Tło bloku z treścią */
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin: 0 auto;
    transition: transform 0.3s ease; /* Efekt powiększania */
  }

  .main-content:hover {
    transform: scale(1.05); /* Powiększenie bloku przy najechaniu */
  }
  

  h2 {
    font-size: 28px;
    margin-bottom: 10px;
    color: #333; /* Ciemny kolor tekstu */
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
    color: #555; /* Średni kolor tekstu */
  }

  #getStarted {
    background-color: #007bff;
    color: #fff; /* Biały kolor tekstu */
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease; /* Efekty przy najechaniu myszką */
  }

  #getStarted:hover {
    background-color: #0056b3;
    transform: scale(1.05); /* Powiększenie przycisku przy najechaniu */
  }
</style>


