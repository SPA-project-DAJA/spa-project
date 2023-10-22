<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import "./assets/main.css";
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <div
          id="navbar"
          class="d-flex justify-content-between align-items-center"
        >
          <b-nav id="logo" class="d-flex align-items-center">
            <div>
              <b-navbar-brand to="/">
                <img src="logo.png" id="logo-img" alt="Logo" />
                Duolingo
              </b-navbar-brand>
            </div>
          </b-nav>
          <div>
            <b-nav id="menu">
              <RouterLink to="/dictionary" class="link">Dictionary</RouterLink>
              <RouterLink to="/offer" class="link">Offer</RouterLink>
              <RouterLink to="/account" class="link">Account</RouterLink>
              <RouterLink to="/cart" class="link">Cart</RouterLink>
              <RouterLink to="/contact" class="link">Contact</RouterLink>
            </b-nav>
          </div>
        </div>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
.link {
  text-decoration: none;
  margin: 20px;
  color: red;
}

#navbar {
  font-size: 20px;
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
  font-size: 18px;
  font-weight: bold;
}

header {
  line-height: 1.5;
  background-color: #aaa; /* Tło nagłówka */
  padding: 20px;
  color: white; /* Kolor tekstu w nagłówku */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

main {
  background-color: #f0f0f0; /* Tło głównej treści */
  padding: 20px;
  text-align: center;
}

.main-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: white; /* Tło bloku z treścią */
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
