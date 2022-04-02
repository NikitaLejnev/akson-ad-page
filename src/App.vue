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
    <h1 class="main__heading">
      Рекламные возможности akson.ru
    </h1>
    <h2 class="main__heading">Аудитория сайта</h2>
    <div class="main__row">
      <div class="main__column--span-6">
        <b class="main__text main__text--bold">173 млрд.</b>
        <p class="main__text">Общее число просмотров</p>
      </div>
      <div class="main__column--span-6">
        <b class="main__text main__text--bold">999 млрд.</b>
        <p class="main__text">
          Средняя ежемесячная посещаемость
        </p>
      </div>
    </div>
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

.main__heading {
  font-size: 2rem;
  display: flex;
  justify-content: center;
  margin: 2rem auto;
}

.main__row {
  display: flex;
  flex-wrap: wrap;
}

.main__column--span-6 {
  flex: 1 0 0%;
  margin: 1rem;
}

.main__text {
  color: rgba(0, 0, 0, 0.7);
  padding: 0;
  margin: 0;
}

.main__text--bold {
  display: block;
  color: rgb(0, 0, 0);
  font-weight: bold;
  margin: 0.5rem 0.5rem;
}
</style>
