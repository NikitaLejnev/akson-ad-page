<script setup lang="ts">
import TopBar from "./components/TopBar.vue";
import CatalogBar from "./components/CatalogBar.vue";
</script>

<template>
  <header class="header">
    <top-bar />
    <catalog-bar />
  </header>
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
</style>
