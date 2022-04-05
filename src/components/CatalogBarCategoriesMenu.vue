<script setup lang="ts">
import { getCategories } from "@/store";
const categories = getCategories();
</script>

<template>
  <ul class="catalog-bar__categories-menu">
    <li
      class="catalog-bar__category"
      v-for="(category, index) in categories"
      :key="index"
    >
      {{ category }}
    </li>
  </ul>
</template>

<style>
.catalog-bar__categories-menu {
  display: inline-block;
  border-radius: 0.25em;
  line-height: 1.5em;
}

.catalog-bar__category {
  cursor: pointer;
}

.catalog-bar__category:hover {
  color: #f00;
}
</style>
