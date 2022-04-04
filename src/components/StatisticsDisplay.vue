<script setup lang="ts">
import store from "@/store";
import { onMounted, ref, type Ref } from "vue";

interface State {
  pageViews: number;
  visitsDaily: number;
  timer: number;
}

const state: Ref<State> = ref({
  pageViews: 0,
  visitsDaily: 0,
  timer: 0,
});

const fetchPageViews = () => {
  const { pageViews, visitsDaily } =
    store.getSelectedCityStatistics();
  if (
    typeof pageViews !== undefined &&
    typeof visitsDaily !== undefined
  ) {
    state.value.pageViews = pageViews;
    state.value.visitsDaily = visitsDaily;
  }
};

onMounted(() => {
  state.value.pageViews = 0;
  state.value.visitsDaily = 0;
  state.value.timer = setInterval(fetchPageViews, 1000);
});
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
  font-size: 2rem;
  display: flex;
  justify-content: center;
  margin: 2rem auto;
}

.main__row {
  display: flex;
  flex-wrap: wrap;
}

.main__column--span-6 {
  flex: 1 0 0%;
  margin: 1rem;
}

.main__text {
  color: rgba(0, 0, 0, 0.7);
  padding: 0;
  margin: 0;
}

.main__text--bold {
  display: block;
  color: rgb(0, 0, 0);
  font-weight: bold;
  margin: 0.5rem 0.5rem;
}
</style>
