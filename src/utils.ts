import { computed } from "vue";
import {
  getSelectedCityStatistics,
  getSelectedCity,
} from "./store";
import type { City } from "./types";

const selectedCityName = computed(() => {
  const city: City | undefined = getSelectedCity();
  return city?.name;
});

const selectedCityStatistics = computed(() => {
  return getSelectedCityStatistics();
});

const timeoutDelay = 500;

export {
  selectedCityName,
  selectedCityStatistics,
  timeoutDelay,
};
