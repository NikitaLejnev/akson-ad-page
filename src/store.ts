import { reactive } from "vue";
import { v4 as uuidv4 } from "uuid";

const store = reactive({
  cities: [
    {
      id: uuidv4(),
      code: 499,
      name: "Москва",
      selected: false,
    },
    {
      id: uuidv4(),
      code: 4922,
      name: "Владимир",
      selected: false,
    },
    {
      id: uuidv4(),
      code: 8172,
      name: "Вологда",
      selected: false,
    },
    {
      id: uuidv4(),
      code: 8313,
      name: "Дзержинск",
      selected: false,
    },
    {
      id: uuidv4(),
      code: 4932,
      name: "Иваново",
      selected: false,
    },
    {
      id: uuidv4(),
      code: 4842,
      name: "Калуга Болдина",
      selected: false,
    },
    {
      id: uuidv4(),
      code: 4842,
      name: "Калуга Московская",
      selected: false,
    },
    {
      id: uuidv4(),
      code: 4932,
      name: "Кинешма",
      selected: false,
    },
    {
      id: uuidv4(),
      code: 4942,
      name: "Кострома",
      selected: true,
    },
    {
      id: uuidv4(),
      code: 831,
      name: "Нижний Новгород",
      selected: false,
    },
    {
      id: uuidv4(),
      code: 4855,
      name: "Рыбинск",
      selected: false,
    },
    {
      id: uuidv4(),
      code: 4812,
      name: "Смоленск",
      selected: false,
    },
    {
      id: uuidv4(),
      code: 4752,
      name: "Тамбов",
      selected: false,
    },
    {
      id: uuidv4(),
      code: 8202,
      name: "Череповец",
      selected: false,
    },
    {
      id: uuidv4(),
      code: 4852,
      name: "Ярославль Громова",
      selected: false,
    },
    {
      id: uuidv4(),
      code: 4852,
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
