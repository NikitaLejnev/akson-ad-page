<script setup lang="ts">
import { computed } from "vue";

interface City {
  code: number;
  name: string;
  selected: boolean;
}

interface Props {
  cityObj: City;
}

const props = defineProps<Props>();

const isCitySelected = computed(() =>
  props.cityObj.selected ? " popup__city--selected" : ""
);
</script>

<template>
  <li class="popup__city" :class="isCitySelected">
    {{ props.cityObj.name }}
  </li>
</template>

<style>
.popup__city {
  border: 1px rgba(1, 1, 1, 0.7) solid;
  padding: 0 0.5rem;
  margin-bottom: 4px;
  border-radius: 0.75rem;
}

.popup__city--selected,
.popup__city:hover {
  color: #f00;
}
</style>
