<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import { getCities } from "../store";
import { timeoutDelay } from "../utils";
import CitySelectListItem from "./CitySelectListItem.vue";
import type { City } from "@/types";
import type { State } from "./CitySelectPopupBody.types";

const state: Ref<State> = ref({
  cities: [],
  timer: 0,
});

const fetchCityList: () => void = () => {
  const cityList: City[] = getCities();
  if (cityList && typeof cityList !== "undefined")
    state.value.cities = cityList;
};

onMounted(() => {
  state.value.timer = setTimeout(
    fetchCityList,
    timeoutDelay
  );
});
</script>

<template>
  <div
    class="popup__message--loading"
    v-if="state.cities.length === 0"
  >
    <p>Загружаем список городов ...</p>
  </div>
  <div v-else>
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
.popup__city-list {
  display: inline-flex;
  color: rgba(0, 0, 0, 0.7);
  line-height: 2rem;
  cursor: pointer;
  margin-right: 1rem;
  margin-bottom: 0.1em;
}
</style>
