import { ref, type Ref } from "vue";
import type { CityStatistics } from "./store.types";
import type { City } from "./types";

const selectedCityId: Ref<number> = ref(9);

const cities = [
  {
    id: 1,
    pageViewsMillions: 17,
    visitsDailyThousands: 962,
    name: "Москва",
  },
  {
    id: 2,
    pageViewsMillions: 53,
    visitsDailyThousands: 301,
    name: "Владимир",
  },
  {
    id: 3,
    pageViewsMillions: 45,
    visitsDailyThousands: 330,
    name: "Вологда",
  },
  {
    id: 4,
    pageViewsMillions: 14,
    visitsDailyThousands: 872,
    name: "Дзержинск",
  },
  {
    id: 5,
    pageViewsMillions: 59,
    visitsDailyThousands: 936,
    name: "Иваново",
  },
  {
    id: 6,
    pageViewsMillions: 24,
    visitsDailyThousands: 32,
    name: "Калуга Болдина",
  },
  {
    id: 7,
    pageViewsMillions: 434,
    visitsDailyThousands: 348,
    name: "Калуга Московская",
  },
  {
    id: 8,
    pageViewsMillions: 56,
    visitsDailyThousands: 898,
    name: "Кинешма",
  },
  {
    id: 9,
    pageViewsMillions: 45,
    visitsDailyThousands: 966,
    name: "Кострома",
  },
  {
    id: 10,
    pageViewsMillions: 1,
    visitsDailyThousands: 6,
    name: "Нижний Новгород",
  },
  {
    id: 11,
    pageViewsMillions: 40,
    visitsDailyThousands: 686,
    name: "Рыбинск",
  },
  {
    id: 12,
    pageViewsMillions: 47,
    visitsDailyThousands: 330,
    name: "Смоленск",
  },
  {
    id: 13,
    pageViewsMillions: 62,
    visitsDailyThousands: 787,
    name: "Тамбов",
  },
  {
    id: 14,
    pageViewsMillions: 68,
    visitsDailyThousands: 628,
    name: "Череповец",
  },
  {
    id: 15,
    pageViewsMillions: 54,
    visitsDailyThousands: 859,
    name: "Ярославль Громова",
  },
  {
    id: 16,
    pageViewsMillions: 18,
    visitsDailyThousands: 859,
    name: "Ярославль Фрунзе",
  },
];

const selectCity: (id: number) => void = (id) => {
  selectedCityId.value = id;
};

const isSelectedCity: (id: number) => boolean = (id) => {
  return id === selectedCityId.value;
};

const getSelectedCityStatistics: () =>
  | CityStatistics
  | undefined = () => {
  const city = findCityById(selectedCityId.value);
  if (city && typeof city !== undefined) {
    return {
      pageViews: city.pageViewsMillions,
      visitsDaily: city.visitsDailyThousands,
    };
  }
};

const findCityById: (id: number) => City | undefined = (
  id
) => {
  const city: City | undefined = cities.find(
    (city) => city.id === id
  );
  if (city && typeof city !== undefined) return city;
};

const getSelectedCity: () => City | undefined = () => {
  const city: City | undefined = findCityById(
    selectedCityId.value
  );
  if (city && typeof city !== undefined) return city;
};

const getCities = () => {
  return cities;
};

const categories = [
  "Готовые решения",
  "Строительные материалы",
  "Пиломатериалы",
  "Водоснабжение и отопление",
  "Вентиляция",
  "Электротовары",
  "Скобяные изделия",
  "Керамическая плитка",
  "Краски",
  "Инструменты для ремонта и строительства",
  "Сантехника",
  "Отделка стен и потолков",
  "Обои",
  "Напольные покрытия",
  "Двери и окна",
  "Системы",
  "Освещение",
  "Мебель",
  "Декор для интерьера",
  "Бытовая техника",
  "Автотовары",
  "Товары для отдыха и хобби",
  "Товары для дома",
  "Товары для сада",
  "Умный дом",
];

const getCategories = () => {
  return categories;
};

const elements = [
  "Готовые решения",
  "Строительные материалы",
  "Керамическая плитка",
  "Краски",
  "Сантехника",
  "Напольные покрытия",
  "Товары для дома",
];

const getElements = () => {
  return elements;
};

export {
  getSelectedCity,
  getSelectedCityStatistics,
  selectCity,
  isSelectedCity,
  getCities,
  getCategories,
  getElements,
};
