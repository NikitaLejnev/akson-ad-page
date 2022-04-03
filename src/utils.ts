import { computed } from "vue";
import store from "./store";

const selectedCityName = computed(() => {
  const city = store.getSelectedCity();
  if (city) return city.name;
});

export { selectedCityName };
