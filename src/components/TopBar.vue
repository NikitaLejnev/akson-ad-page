<script setup lang="ts">
import { ref } from "vue";
import CitySelectPopup from "./CitySelectPopup.vue";

const props = defineProps(["selectedCity"]);

const state = ref({
  citySelectOpened: false,
});

const toggleCitySelect = () => {
  state.value.citySelectOpened =
    !state.value.citySelectOpened;
};
</script>

<template>
  <div class="top-bar">
    <div class="top-bar__wrapper">
      <div class="top-bar__content">
        <div class="top-bar__left">
          <div
            @click="toggleCitySelect"
            class="top-bar__city-select"
          >
            <i class="top-bar__icon--geo">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 17.5C10 17.5 16.5217 13.4091 16.5217 8.63636C16.5217 5.24734 13.6019 2.5 10 2.5C6.39815 2.5 3.47827 5.24734 3.47827 8.63636C3.47827 13.4091 10 17.5 10 17.5ZM13 9C13 10.6569 11.6569 12 10 12C8.34315 12 7 10.6569 7 9C7 7.34315 8.34315 6 10 6C11.6569 6 13 7.34315 13 9Z"
                  fill="#fff"
                ></path>
              </svg>
            </i>
            <span class="top-bar__city-select-text">{{
              props.selectedCity
            }}</span>
          </div>
          <CitySelectPopup
            v-if="state.citySelectOpened"
            :selectedCity="props.selectedCity"
          />
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

.top-bar__icon--geo {
  position: relative;
  margin-right: 1rem;
  width: 1rem;
  height: 1rem;
  left: 0.5rem;
}

.top-bar__city-select-text {
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #fff;
}
</style>
