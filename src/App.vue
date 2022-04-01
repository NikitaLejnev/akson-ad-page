<script setup lang="ts">
import AppTopBar from "./components/AppTopBar.vue";
</script>

<template>
  <header class="header">
    <app-top-bar />
  </header>
</template>

<style>
body {
  margin: 0;
  width: 100%;
}

.header {
  position: relative;
  user-select: none;
}
</style>
