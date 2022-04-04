<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { State } from "./CatalogBar.types";
import CatalogBarCategoriesMenu from "./CatalogBarCategoriesMenu.vue";
import CatalogBarElementsBar from "./CatalogBarElementsBar.vue";

const state: Ref<State> = ref({ open: false });

const openMenu: () => void = () => {
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
      <catalog-bar-categories-menu v-if="state.open" />
      <catalog-bar-elements-bar v-else />
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
</style>
