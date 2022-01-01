<script setup lang="ts">
import { ref } from "vue";
import moon from "../assets/darkmode/moon.svg";
import sun from "../assets/darkmode/sun.svg";

defineProps<{ class: String }>();

const darkmode = ref(localStorage.getItem("darkmode") === "true");
if (darkmode.value) {
  document.body.classList.add("dark");
}
const flip = () => {
  darkmode.value = !darkmode.value;
  if (darkmode.value) {
    localStorage.setItem("darkmode", "true");
    document.body.classList.add("dark");
  } else {
    localStorage.setItem("darkmode", "false");
    document.body.classList.remove("dark");
  }
};
</script>

<template>
  <button v-bind:class="$props.class" @click="flip()">
    <img alt="logo" v-bind:src="darkmode ? moon : sun" />
  </button>
</template>
