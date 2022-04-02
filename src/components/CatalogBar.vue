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
  "Краски",
  "Инструменты для ремонта и строительства",
  "Сантехника",
  "Отделка стен и потолков",
  "Обои",
  "Напольные покрытия",
  "Двери и окна",
  "Системы",
  "Освещение",
  "Мебель",
  "Декор для интерьера",
  "Бытовая техника",
  "Автотовары",
  "Товары для отдыха и хобби",
  "Товары для дома",
  "Товары для сада",
  "Умный дом",
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
      <ul v-else class="catalog-bar__elements-bar">
        <li
          v-for="item in items"
          class="catalog-bar__element"
        >
          <a href="#" class="catalog-bar__element-link">{{
            item
          }}</a>
        </li>
      </ul>
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
  margin-bottom: 1rem;
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

.catalog-bar__elements-bar {
  display: flex;
  align-items: center;
  position: relative;
  max-width: 1200px;
}

.catalog-bar__element {
  margin-right: 0.3rem;
  font-size: 1rem;
}
</style>
