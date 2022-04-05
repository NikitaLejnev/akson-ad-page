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
  display: inline-block;
  text-align: center;
  padding: 1em 1em;
}
</style>
