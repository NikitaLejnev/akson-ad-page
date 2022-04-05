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
    <catalog-bar-button @toggle-menu="handleToggleMenu" />
    <Transition>
      <catalog-bar-categories-menu v-if="state.open" />
    </Transition>
    <Transition>
      <catalog-bar-elements-bar v-if="!state.open"
    /></Transition>
  </div>
</template>

<style>
.catalog-bar {
  padding: 0 1em;
}
</style>
