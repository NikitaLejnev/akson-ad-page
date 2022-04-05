<script setup lang="ts">
import { getElements } from "@/store";

const elements = getElements();
</script>

<template>
  <div class="catalog-bar__elements-bar">
    <a
      v-for="(element, index) in elements"
      :key="index"
      href="#"
      class="catalog-bar__element-link"
      >{{ element }}</a
    >
  </div>
</template>

<style>
.catalog-bar__elements-bar {
  overflow: auto;
  white-space: nowrap;
}

.catalog-bar__element-link {
  color: #000;
  font-size: 1.25em;
  text-decoration: none;
  padding: 1em 1em;
}

.catalog-bar__element-link:hover {
  color: #f00;
}
</style>
