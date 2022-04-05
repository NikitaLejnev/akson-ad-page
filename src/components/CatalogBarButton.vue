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
  color: rgb(27, 27, 27);
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid #b6b6b6;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>
