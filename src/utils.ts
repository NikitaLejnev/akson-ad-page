import { computed } from "vue";
import store from "./store";

const selectedCityName = computed(() => {
  const city = store.getSelectedCity();
  if (city) return city.name;
});

const selectedCityStatistics = computed(() => {
  const stats = store.getSelectedCityStatistics();
  if (stats) return stats;
});

export { selectedCityName, selectedCityStatistics };
