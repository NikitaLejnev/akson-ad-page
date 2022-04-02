<script setup lang="ts">
import { ref } from "vue";

const items = [
  "Готовые решения",
  "Строительные материалы",
  "Пиломатериалы",
  "Водоснабжение и отопление",
  "Вентиляция",
  "Электротовары",
  "Скобяные изделия",
  "Керамическая плитка",
];
const state = ref({ open: false });

const openMenu = () => {
  state.value.open = !state.value.open;
};
</script>

<template>
  <div class="catalog-bar">
    <div class="catalog-bar__wrapper">
      <button
        class="catalog-bar__button--categories"
        @click="openMenu"
      >
        Каталог
      </button>
      <ul
        v-if="state.open"
        class="catalog-bar__categories-menu"
      >
        <li v-for="item in items">
          {{ item }}
        </li>
      </ul>
      <div v-else class=".catalog-bar__elements-bar"></div>
    </div>
  </div>
</template>

<style>
.catalog-bar {
  margin-top: 1rem;
  margin-left: 1rem;
}

.catalog-bar__wrapper {
  margin: 0 auto;
  width: 1200px;
}

.catalog-bar__button--categories {
  display: block;
  background-color: #ffffff;
  color: rgb(27, 27, 27);
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid #b6b6b6;
  border-radius: 0.25rem;
  cursor: pointer;
}

.catalog-bar__categories-menu {
  display: inline-block;
  border: 1px solid #b6b6b6;
  border-radius: 0.25rem;
  margin: 0.5rem 0rem;
  padding: 0.5rem;
  line-height: 1.5rem;
}
</style>
