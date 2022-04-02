<script setup lang="ts">
import { ref, computed } from "vue";

const items = [
  { name: "Готовые решения", elementDisplay: true },
  { name: "Строительные материалы", elementDisplay: true },
  { name: "Пиломатериалы" },
  { name: "Водоснабжение и отопление" },
  { name: "Вентиляция" },
  { name: "Электротовары" },
  { name: "Скобяные изделия" },
  { name: "Керамическая плитка", elementDisplay: true },
  { name: "Краски", elementDisplay: true },
  { name: "Инструменты для ремонта и строительства" },
  { name: "Сантехника", elementDisplay: true },
  { name: "Отделка стен и потолков" },
  { name: "Обои" },
  { name: "Напольные покрытия", elementDisplay: true },
  { name: "Двери и окна" },
  { name: "Системы" },
  { name: "Освещение" },
  { name: "Мебель" },
  { name: "Декор для интерьера" },
  { name: "Бытовая техника" },
  { name: "Автотовары" },
  { name: "Товары для отдыха и хобби" },
  { name: "Товары для дома", elementDisplay: true },
  { name: "Товары для сада" },
  { name: "Умный дом" },
];
const state = ref({ open: false });

const elements = computed(() =>
  items.filter((element) => element.elementDisplay)
);

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
          {{ item.name }}
        </li>
      </ul>
      <ul v-else class="catalog-bar__elements-bar">
        <li
          v-for="element in elements"
          class="catalog-bar__element"
        >
          <a href="#" class="catalog-bar__element-link">{{
            element.name
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
  justify-content: space-evenly;
  position: relative;
}

.catalog-bar__element {
  font-size: 1rem;
}
</style>
