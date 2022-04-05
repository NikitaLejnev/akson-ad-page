<script setup lang="ts">
import { selectedCityName } from "../utils";
import CitySelectPopupBody from "./CitySelectPopupBody.vue";
</script>

<template>
  <div class="popup">
    <b class="popup__heading"
      >Ваш город {{ selectedCityName }}</b
    >
    <Transition><city-select-popup-body /></Transition>
  </div>
</template>

<style>
.popup {
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  display: block;
  width: 640px;
  padding: 1.5em 1.5em;
  border-radius: 1em;
  box-sizing: border-box;
  box-shadow: 0 6px 9px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  z-index: 110;
}

.popup__heading {
  display: block;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 1em;
}
</style>
