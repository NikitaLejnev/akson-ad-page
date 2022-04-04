<script setup lang="ts">
import store from "@/store";
const categories = store.getCategories();
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
