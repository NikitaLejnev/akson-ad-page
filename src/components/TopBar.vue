<script setup lang="ts">
import { ref, type Ref } from "vue";
import { selectedCityName } from "@/utils";
import CitySelectPopup from "./CitySelectPopup.vue";
import TopBarGeoIcon from "./TopBarGeoIcon.vue";
import type { Binding, El, State } from "./TopBar.types";

const state: Ref<State> = ref({
  citySelectOpened: false,
});

const openSelectCity: () => void = () => {
  state.value.citySelectOpened =
    !state.value.citySelectOpened;
};

const vClickOutside = {
  mounted: (el: El, binding: Binding) => {
    el.clickOutsideEvent = (event: MouseEvent) => {
      if (!el.contains(event.target as HTMLDivElement)) {
        binding.value();
      }
    };
    document.addEventListener(
      "click",
      el.clickOutsideEvent
    );
  },
  unmounted: (el: El) => {
    document.removeEventListener(
      "click",
      el.clickOutsideEvent
    );
  },
};
</script>

<template>
  <div class="top-bar">
    <div class="top-bar__wrapper">
      <div class="top-bar__content">
        <div class="top-bar__left">
          <div
            @click.stop="openSelectCity"
            class="top-bar__city-select"
          >
            <top-bar-geo-icon />
            <span class="top-bar__city-select-text">{{
              selectedCityName
            }}</span>
          </div>
          <Transition>
            <CitySelectPopup
              v-if="state.citySelectOpened"
              v-click-outside="openSelectCity"
          /></Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.top-bar {
  background: linear-gradient(
    90deg,
    #0099dc 0%,
    #9f1c6e 62.5%,
    #ff0803 100%
  );
}

.top-bar__wrapper {
  margin: 0 auto;
  width: 1200px;
}

.top-bar__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1rem;
  padding: 0.5rem;
}

.top-bar__left {
  display: flex;
  align-items: center;
  position: relative;
}

.top-bar__city-select {
  display: inline-flex;
  cursor: pointer;
}

.top-bar__city-select-text {
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #fff;
}
</style>
