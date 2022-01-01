<script setup lang="ts">
import logo from "../assets/logos/logo.svg";
import achievements from "../assets/logos/achievements.svg";
import projects from "../assets/logos/projects.svg";
import school from "../assets/logos/school.svg";
import server from "../assets/logos/server.svg";
import left from "../assets/arrows/left.svg";
import Darkmode from "./Darkmode.vue";
import { ref } from "vue";

const links = [
  { to: "/", src: logo, desc: "Home" },
  { to: "/achievements", src: achievements, desc: "Achievements" },
  { to: "/projects", src: projects, desc: "Projects" },
  { to: "/school", src: school, desc: "School" },
  { to: "/other", src: server, desc: "Websites" },
];

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
  <div class="h-screen flex flex-row items-center sticky top-0">
    <div
      v-bind:class="
        'flex flex-col justify-center h-full left-0 bg-c_darkblue navbar transition-all ease-linear duration-200 origin-left' +
        ' ' +
        (open ? 'scale-x-100 w-14' : 'scale-x-0 w-0')
      "
    >
      <div v-for="link in links" class="group">
        <router-link
          v-bind:to="link.to"
          v-bind:class="
            'button bg-c_beige hover:bg-slate-300' +
            ' ' +
            (open ? 'scale-100' : 'scale-0')
          "
        >
          <img v-bind:alt="link.desc" v-bind:src="link.src" class="w-8 h-8" />
        </router-link>
        <span
          v-if="!is_touch_enabled()"
          class="
            absolute
            dark:bg-slate-100 dark:text-black
            bg-black
            text-slate-100
            font-bold
            p-1
            w-auto
            scale-0
            origin-left
            left-16
            -translate-y-11
            group-hover:scale-100
            transition-all
            ease-linear
            duration-100
            rounded-lg
          "
        >
          {{ link.desc }}
        </span>
      </div>
      <Darkmode
        v-bind:class="
          'button bg-slate-400' + ' ' + (open ? 'scale-100' : 'scale-0')
        "
      />
    </div>
    <button
      class="w-6 h-16 p-1 rounded-r-lg bg-c_darkblue transition-all ease-linear"
      @click="close()"
    >
      <img
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
    rounded-2xl hover:rounded-md
    m-1 p-1 w-11 h-11 
    items-center flex justify-center;
}
</style>
