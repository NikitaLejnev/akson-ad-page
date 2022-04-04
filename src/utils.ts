import { computed } from "vue";
import {
  getSelectedCityStatistics,
  getSelectedCity,
} from "./store";

const selectedCityName = computed(() => {
  const city = getSelectedCity();
  if (city) return city.name;
});

const selectedCityStatistics = computed(() => {
  const stats = getSelectedCityStatistics();
  if (stats) return stats;
});

export { selectedCityName, selectedCityStatistics };
