<script setup lang="ts">
const emit = defineEmits(["toggleMenu"]);
const toggleMenu: () => void = () => {
  emit("toggleMenu");
};
</script>

<template>
  <button
    class="catalog-bar__button--categories"
    @click="toggleMenu"
  >
    Каталог
  </button>
</template>

<style>
.catalog-bar__button--categories {
  display: block;
  background-color: #ffffff;
  margin-bottom: 1em;
  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: bold;
  border: 1px solid #b6b6b6;
  border-radius: 0.25em;
  cursor: pointer;
}
</style>
