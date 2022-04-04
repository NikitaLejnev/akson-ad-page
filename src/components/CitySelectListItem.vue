<script setup lang="ts">
import { computed, type ComputedRef } from "vue";
import { selectCity, isSelectedCity } from "../store";
import type { City } from "../types";

interface Props {
  cityObj: City;
}

const props: Readonly<Props> = defineProps<Props>();

const onClick: () => void = () => {
  selectCity(props.cityObj.id);
};

const isSelected: ComputedRef<
  " popup__city--selected" | ""
> = computed(() =>
  isSelectedCity(props.cityObj.id)
    ? " popup__city--selected"
    : ""
);
</script>

<template>
  <li
    class="popup__city"
    :class="isSelected"
    @click="onClick"
  >
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
