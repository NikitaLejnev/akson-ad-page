<script setup lang="ts">
import TopBar from "./components/TopBar.vue";
import CatalogBar from "./components/CatalogBar.vue";
import StatisticsDisplay from "./components/StatisticsDisplay.vue";
</script>

<template>
  <header class="header">
    <top-bar />
    <catalog-bar />
  </header>
  <main class="container">
    <statistics-display />
  </main>
</template>

<style>
#app {
  font-family: "Open Sans", sans-serif;
}

.container {
  margin: 0 2em;
}

.header {
  user-select: none;
}

a {
  text-decoration: none;
  cursor: pointer;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
