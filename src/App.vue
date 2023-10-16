<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- 
      <div>
        <b-nav>
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item>Another Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </div>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/maps">Maps</RouterLink>
        <RouterLink to="/images">Images</RouterLink>
      </nav> -->

      <b-container class="bg-primary">
        <b-row class="text-center">
          <b-col cols="4">1 of 3</b-col>
          <b-col cols="4">2 of 3</b-col>
          <b-col cols="4">3 of 3</b-col>
        </b-row>
      </b-container>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
