<script setup lang="ts">
import {
  getSelectedCity,
  getSelectedCityStatistics,
} from "@/store";
import {
  computed,
  onMounted,
  ref,
  watch,
  type ComputedRef,
  type Ref,
} from "vue";
import { timeoutDelay } from "@/utils";
import type { CityStatistics } from "@/store.types";
import type { City } from "@/types";
import type { State } from "./StatisticsDisplay.types";

const selectedCity: ComputedRef<City | undefined> =
  computed(() => {
    return getSelectedCity();
  });

const state: Ref<State> = ref({
  pageViews: 0,
  visitsDaily: 0,
  timer: 0,
});

const fetchPageViews: () => void = () => {
  const stats: CityStatistics | undefined =
    getSelectedCityStatistics();
  if (stats && typeof stats !== "undefined") {
    state.value.pageViews = stats.pageViews;
    state.value.visitsDaily = stats.visitsDaily;
  }
};

onMounted(() => {
  state.value.timer = setTimeout(
    fetchPageViews,
    timeoutDelay
  );
});

watch(
  selectedCity,
  () =>
    (state.value.timer = setTimeout(
      fetchPageViews,
      timeoutDelay
    ))
);
</script>

<template>
  <h1 class="main__heading">
    Рекламные возможности akson.ru
  </h1>
  <h2 class="main__heading">Аудитория сайта</h2>
  <div class="main__row">
    <div class="main__column--span-6">
      <b class="main__text main__text--bold"
        >{{ state.pageViews }} млн</b
      >
      <p class="main__text">Общее число просмотров</p>
    </div>
    <div class="main__column--span-6">
      <b class="main__text main__text--bold"
        >{{ state.visitsDaily }} тыс.</b
      >
      <p class="main__text">
        Средняя ежемесячная посещаемость
      </p>
    </div>
  </div>
</template>

<style>
.main__heading {
  font-size: 2.5em;
  display: flex;
  justify-content: center;
  margin: 0.5em auto;
}

.main__row {
  display: flex;
  flex-wrap: wrap;
}

.main__column--span-6 {
  flex: 1 0 0%;
  margin: 1em;
}

.main__text {
  padding: 0;
  margin: 0;
}

.main__text--bold {
  display: block;
  font-weight: bold;
  margin: 0.5em 0.5em;
}
</style>
