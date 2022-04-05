<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { State } from "./CatalogBar.types";
import CatalogBarCategoriesMenu from "./CatalogBarCategoriesMenu.vue";
import CatalogBarElementsBar from "./CatalogBarElementsBar.vue";
import CatalogBarButton from "./CatalogBarButton.vue";

const state: Ref<State> = ref({ open: false });

const handleToggleMenu = () => {
  state.value.open = !state.value.open;
};
</script>

<template>
  <div class="catalog-bar">
    <div class="catalog-bar__wrapper">
      <catalog-bar-button @toggle-menu="handleToggleMenu" />
      <Transition>
        <catalog-bar-categories-menu v-if="state.open" />
        <catalog-bar-elements-bar v-else
      /></Transition>
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
</style>
