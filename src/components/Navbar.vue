<script setup lang="ts">
import left from "../assets/icons/arrows/left.svg";
import Darkmode from "./Darkmode.vue";
import { ref } from "vue";
import links from "../links";

const open = ref(localStorage.getItem("navbar_open") !== "false");
const close = () => {
  open.value = !open.value;
  localStorage.setItem("navbar_open", open.value ? "true" : "false");
};

function is_touch_enabled() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}
</script>

<template>
  <div class="flex sticky top-0 flex-row h-screen items-top">
    <div
      v-bind:class="'flex flex-col justify-center h-full left-0 bg-c_darkblue navbar transition-all ease-linear duration-200 origin-left' +
        ' ' +
        (open ? 'scale-x-100 w-14 short:w-12' : 'scale-x-0 w-0')
      "
    >
      <div v-for="link in links" class="group">
        <router-link
          v-bind:to="link.to"
          v-bind:class="'button bg-c_beige' + ' ' + (open ? 'scale-100' : 'scale-0')
          "
        >
          <img v-bind:alt="link.desc" v-bind:src="link.src" class="w-8 h-8" />
        </router-link>
        <span
          v-if="!is_touch_enabled()"
          class="absolute left-16 p-1 w-auto font-bold rounded-lg transition-all duration-100 ease-linear origin-left scale-0 -translate-y-11 dark:bg-slate-100 dark:text-black bg-c_darkblue text-slate-100 group-hover:scale-100"
        >
          {{ link.desc }}
        </span>
      </div>
      <div class="group">
        <Darkmode
          v-bind:class="'button' + ' ' + (open ? 'scale-100' : 'scale-0')"
        />
        <span
          v-if="!is_touch_enabled()"
          class="absolute left-16 p-1 w-auto font-bold rounded-lg transition-all duration-100 ease-linear origin-left scale-0 -translate-y-11 dark:bg-slate-100 dark:text-black bg-c_darkblue text-slate-100 group-hover:scale-100"
        >
          Mode
        </span>
      </div>
    </div>
    <button
      class="p-1 mt-10 w-8 h-16 rounded-r-lg transition-all ease-linear bg-c_darkblue"
      @click="close()"
    >
      <img
        alt="Navbar Arrow (color changed from black to white)"
        v-bind:src="left"
        v-bind:class="
          (open ? '' : 'rotate-180') +
          ' ' +
          'transition-all ease-linear duration-200'
        "
      />
    </button>
  </div>
</template>

<style scoped>
.button {
  @apply transition-all ease-linear duration-300 
    rounded-lg hover:rounded-sm
    m-1 p-1 w-11 h-11  short:w-10 short:h-10
    items-center flex justify-center;
}
</style>
