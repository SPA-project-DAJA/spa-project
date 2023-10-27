<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import "./assets/main.css";
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <div>
          <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand to="/"
              ><img src="logo.png" id="logo-img" alt="Logo" />
              Duolingo</b-navbar-brand
            >

            <b-navbar-toggle target="menu"></b-navbar-toggle>

            <b-collapse id="menu" is-nav>
              <b-navbar-nav class="text-center">
                <RouterLink to="/dictionary" class="link"
                  >Flashcards</RouterLink
                >
                <RouterLink to="/offer" class="link">Offer</RouterLink>
                <RouterLink to="/account" class="link">Account</RouterLink>
                <RouterLink to="/cart" class="link">Cart</RouterLink>
                <RouterLink to="/contact" class="link">Contact</RouterLink>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
        <!--  -->
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
.link {
  text-decoration: none;
  margin: 20px;
  color: #333; /* Biały kolor tekstu */
  padding: 10px 20px;
  background-color: #4caf50; /* Zielone tło */
  border-radius: 20px;
  transition: background-color 0.3s ease, transform 0.2s ease; /* Efekty przy najechaniu myszką */
  display: inline-block; /* Dodatkowy styl dla prawidłowego działania transformacji */
}

.link:hover {
  background-color: #018108; /* Zmiana koloru tła po najechaniu myszą */
  transform: scale(1.1); /* Powiększenie przycisku przy najechaniu */
}

#navbar {
  font-size: 24px;
  max-height: 100px;
}

#logo {
  height: 100px;
}

#logo-img {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}

#menu {
  font-size: 20px;
  font-weight: bold;
}

header {
  line-height: 1.5;
  background-color: #2c3e50; /* Ciemne niebieskie tło nagłówka */
  padding: 0px;
  color: #fff; /* Biały kolor tekstu w nagłówku */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

main {
  background-color: #ecf0f1; /* Jasnoszary kolor tła głównej treści */
  padding: 20px;
  text-align: center;
}

.main-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff; /* Białe tło bloku z treścią */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 28px;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  margin-bottom: 20px;
}
</style>
