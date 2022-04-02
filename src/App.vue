<script setup lang="ts">
import TopBar from "./components/TopBar.vue";
import CatalogBar from "./components/CatalogBar.vue";
</script>

<template>
  <header class="header">
    <top-bar />
    <catalog-bar />
  </header>
  <main class="main">
    <h1>Рекламные возможности akson.ru</h1>
    <h2>Аудитория сайта</h2>
    <b>173 млрд.</b>
    <p>Общее число просмотров</p>
    <b>999 млрд.</b>
    <p>Средняя ежемесячная посещаемость</p>
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
