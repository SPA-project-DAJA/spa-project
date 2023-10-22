<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import "./assets/main.css";
</script>

<template>
  <header>
    <div class="wrapper">
      <div
        id="navbar"
        class="d-flex justify-content-between align-items-center"
      >
        <!-- lewa część -->
        <b-nav id="logo" class="d-flex align-items-center">
          <div>
            <b-navbar-brand to="/">
              <!-- 'to' to link do strony głównej -->

              <img src="logo.png" id="logo" alt="Logo" />
              Duolingo
            </b-navbar-brand>
          </div>
        </b-nav>
        <!-- prawa część -->

        <div>
          <b-nav id="menu">
            <RouterLink to="/dictionary" class="link">Dictionary</RouterLink>
            <RouterLink to="/account" class="link">Account</RouterLink>
            <RouterLink to="/cart" class="link">Cart</RouterLink>
            <RouterLink to="/contact" class="link">Contact</RouterLink>
          </b-nav>
        </div>
      </div>
    </div>
  </header>
  <RouterView />
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
}
#menu {
}
#logo {
  height: 100px;
}
header {
  line-height: 1.5;
}
.wrapper {
  background-color: #aaa;
}
</style>
