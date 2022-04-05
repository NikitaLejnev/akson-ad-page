<script setup lang="ts">
import { getCategories } from "@/store";
const categories = getCategories();
</script>

<template>
  <div class="catalog-bar__categories-menu">
    <a
      href="#"
      class="catalog-bar__category"
      v-for="(category, index) in categories"
      :key="index"
    >
      {{ category }}
    </a>
  </div>
</template>

<style>
.catalog-bar__categories-menu {
  line-height: 1.5em;
}

.catalog-bar__category {
  color: #000;
  display: block;
  text-decoration: none;
  cursor: pointer;
}

.catalog-bar__category:hover {
  color: #f00;
}
</style>
