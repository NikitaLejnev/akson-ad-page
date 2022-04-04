<script setup lang="ts">
import type { City } from "@/types";
import { onMounted, ref, type Ref } from "vue";
import store from "../store";
import { selectedCityName } from "../utils";
import CitySelectListItem from "./CitySelectListItem.vue";

interface State {
  cities: [] | City[];
  timer: number;
}

const state: Ref<State> = ref({
  cities: [],
  timer: 0,
});

const fetchCityList = () => {
  const cityList = store.getCities();
  if (typeof cityList !== undefined)
    state.value.cities = cityList;
};

onMounted(() => {
  state.value.timer = setTimeout(fetchCityList, 1000);
});
</script>

<template>
  <div class="popup">
    <b class="popup__heading"
      >Ваш город {{ selectedCityName }}</b
    >
    <ul
      class="popup__city-list"
      v-for="city of state.cities"
      :key="city.id"
    >
      <city-select-list-item :cityObj="city" />
    </ul>
  </div>
</template>

<style>
.popup {
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  display: block;
  width: 640px;
  padding: 32px 24px;
  border-radius: 0 0 8px 8px;
  box-sizing: border-box;
  box-shadow: 0 6px 9px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  z-index: 110;
}

.popup__heading {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.popup__city-list {
  display: inline-flex;
  color: rgba(0, 0, 0, 0.7);
  line-height: 2rem;
  cursor: pointer;
  margin-right: 1rem;
}
</style>
