<script setup lang="ts">
import store from "@/store";

const elements = store.getElements();
</script>

<template>
  <ul class="catalog-bar__elements-bar">
    <li
      v-for="element in elements"
      class="catalog-bar__element"
    >
      <a href="#" class="catalog-bar__element-link">{{
        element
      }}</a>
    </li>
  </ul>
</template>

<style>
.catalog-bar__elements-bar {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
}
</style>
