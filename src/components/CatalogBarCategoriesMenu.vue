<script setup lang="ts">
const categories = [
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
</script>

<template>
  <ul class="catalog-bar__categories-menu">
    <li v-for="category in categories">
      {{ category }}
    </li>
  </ul>
</template>

<style>
.catalog-bar__categories-menu {
  display: inline-block;
  border: 1px solid #b6b6b6;
  border-radius: 0.25rem;
  margin: 0.5rem 0rem;
  padding: 0.5rem;
  line-height: 1.5rem;
}
</style>
