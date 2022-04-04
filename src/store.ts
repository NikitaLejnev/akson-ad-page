import { reactive } from "vue";
import { v4 as uuidv4 } from "uuid";
import type { CityStatistics } from "./store.types";

const store = reactive({
  cities: [
    {
      id: uuidv4(),
      pageViewsMillions: 17,
      visitsDailyThousands: 962,
      name: "Москва",
      selected: false,
    },
    {
      id: uuidv4(),
      pageViewsMillions: 53,
      visitsDailyThousands: 301,
      name: "Владимир",
      selected: false,
    },
    {
      id: uuidv4(),
      pageViewsMillions: 45,
      visitsDailyThousands: 330,
      name: "Вологда",
      selected: false,
    },
    {
      id: uuidv4(),
      pageViewsMillions: 14,
      visitsDailyThousands: 872,
      name: "Дзержинск",
      selected: false,
    },
    {
      id: uuidv4(),
      pageViewsMillions: 59,
      visitsDailyThousands: 936,
      name: "Иваново",
      selected: false,
    },
    {
      id: uuidv4(),
      pageViewsMillions: 24,
      visitsDailyThousands: 32,
      name: "Калуга Болдина",
      selected: false,
    },
    {
      id: uuidv4(),
      pageViewsMillions: 434,
      visitsDailyThousands: 348,
      name: "Калуга Московская",
      selected: false,
    },
    {
      id: uuidv4(),
      pageViewsMillions: 56,
      visitsDailyThousands: 898,
      name: "Кинешма",
      selected: false,
    },
    {
      id: uuidv4(),
      pageViewsMillions: 45,
      visitsDailyThousands: 966,
      name: "Кострома",
      selected: true,
    },
    {
      id: uuidv4(),
      pageViewsMillions: 1,
      visitsDailyThousands: 6,
      name: "Нижний Новгород",
      selected: false,
    },
    {
      id: uuidv4(),
      pageViewsMillions: 40,
      visitsDailyThousands: 686,
      name: "Рыбинск",
      selected: false,
    },
    {
      id: uuidv4(),
      pageViewsMillions: 47,
      visitsDailyThousands: 330,
      name: "Смоленск",
      selected: false,
    },
    {
      id: uuidv4(),
      pageViewsMillions: 62,
      visitsDailyThousands: 787,
      name: "Тамбов",
      selected: false,
    },
    {
      id: uuidv4(),
      pageViewsMillions: 68,
      visitsDailyThousands: 628,
      name: "Череповец",
      selected: false,
    },
    {
      id: uuidv4(),
      pageViewsMillions: 54,
      visitsDailyThousands: 859,
      name: "Ярославль Громова",
      selected: false,
    },
    {
      id: uuidv4(),
      pageViewsMillions: 18,
      visitsDailyThousands: 859,
      name: "Ярославль Фрунзе",
      selected: false,
    },
  ],

  getCities() {
    return this.cities;
  },

  getSelectedCity() {
    return this.cities.find((city) => city.selected);
  },

  getSelectedCityStatistics(): CityStatistics {
    const stats = { pageViews: 0, visitsDaily: 0 };
    const city = this.getSelectedCity();
    if (city && typeof city !== undefined) {
      stats.pageViews = city.pageViewsMillions;
      stats.visitsDaily = city.visitsDailyThousands;
    }
    return stats;
  },

  selectCity(id: string) {
    const previouslySelectedCity = this.getSelectedCity();
    if (previouslySelectedCity)
      previouslySelectedCity.selected = false;
    const cityToSelect = this.findCityById(id);
    if (cityToSelect) cityToSelect.selected = true;
  },

  findCityById(id: string) {
    return this.cities.find((city) => city.id === id);
  },
});

export default store;
