<script setup lang="ts">
const cities = [
  "Москва",
  "Владимир",
  "Вологда",
  "Дзержинск",
  "Иваново",
  "Калуга Болдина",
  "Калуга Московская",
  "Кинешма",
  "Кострома",
  "Нижний Новгород",
  "Рыбинск",
  "Смоленск",
  "Тамбов",
  "Череповец",
  "Ярославль Громова",
  "Ярославль Фрунзе",
];
</script>

<template>
  <div class="popup">
    <b class="popup__heading">Ваш город Кострома</b>
    <ul class="popup__city-list" v-for="city of cities">
      <li class="popup__city">{{ city }}</li>
    </ul>
  </div>
</template>

<style>
.popup {
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  display: block;
  width: 640px;
  padding: 32px 24px;
  border-radius: 0 0 8px 8px;
  box-sizing: border-box;
  box-shadow: 0 6px 9px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  z-index: 110;
}

.popup__heading {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.popup__city-list {
  display: inline-flex;
  color: rgba(0, 0, 0, 0.7);
  line-height: 2rem;
  cursor: pointer;
  margin-right: 1rem;
}
</style>
