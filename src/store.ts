import { reactive } from "vue";

const store = reactive({
  cities: [
    { code: 499, name: "Москва", selected: false },
    { code: 4922, name: "Владимир", selected: false },
    { code: 8172, name: "Вологда", selected: false },
    { code: 8313, name: "Дзержинск", selected: false },
    { code: 4932, name: "Иваново", selected: false },
    { code: 4842, name: "Калуга Болдина", selected: false },
    {
      code: 4842,
      name: "Калуга Московская",
      selected: false,
    },
    { code: 4932, name: "Кинешма", selected: false },
    { code: 4942, name: "Кострома", selected: true },
    { code: 831, name: "Нижний Новгород", selected: false },
    { code: 4855, name: "Рыбинск", selected: false },
    { code: 4812, name: "Смоленск", selected: false },
    { code: 4752, name: "Тамбов", selected: false },
    { code: 8202, name: "Череповец", selected: false },
    {
      code: 4852,
      name: "Ярославль Громова",
      selected: false,
    },
    {
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

  selectCity(code: number) {
    this.deselectAllCities();
    const selectedCity = this.cities.find(
      (city) => city.code === code
    );
    if (selectedCity) selectedCity.selected = true;
  },

  deselectAllCities() {
    this.cities.map((city) => (city.selected = false));
  },
});

export default store;
