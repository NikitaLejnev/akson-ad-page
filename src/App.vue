<script setup lang="ts">
import { reactive } from "vue";
import TopBar from "./components/TopBar.vue";
import CatalogBar from "./components/CatalogBar.vue";
import StatisticsDisplay from "./components/StatisticsDisplay.vue";

const state = reactive({
  selectedCity: "Кострома",
});
</script>

<template>
  <header class="header">
    <top-bar :selectedCity="state.selectedCity" />
    <catalog-bar />
  </header>
  <main class="main">
    <statistics-display />
  </main>
</template>

<style>
#app {
  font-family: "Open Sans", sans-serif;
}

body {
  margin: 0;
  width: 100%;
}

.header {
  position: relative;
  user-select: none;
}

a {
  text-decoration: none;
  cursor: pointer;
}
</style>
