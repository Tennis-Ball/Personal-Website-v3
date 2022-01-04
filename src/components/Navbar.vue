<script setup lang="ts">
import logo from "../assets/icons/logos/logo.svg";
import achievements from "../assets/icons/logos/achievements.svg";
import projects from "../assets/icons/logos/projects.svg";
import school from "../assets/icons/logos/school.svg";
import link from "../assets/icons/logos/link.svg";
import book from "../assets/icons/logos/book.svg";
import left from "../assets/icons/arrows/left.svg";
import volunteer from "../assets/icons/logos/volunteer.svg";
import Darkmode from "./Darkmode.vue";
import { ref } from "vue";

const links = [
  { to: "/", src: logo, desc: "Home" },
  { to: "/achievements", src: achievements, desc: "Achievements" },
  { to: "/portfolio", src: projects, desc: "Portfolio" },
  { to: "/publications", src: book, desc: "Publications" },
  { to: "/school", src: school, desc: "School" },
  { to: "/volunteering", src: volunteer, desc: "Volunteering" },
  { to: "/links", src: link, desc: "Links" },
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
        (open ? 'scale-x-100 w-14 short:w-12' : 'scale-x-0 w-0')
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
          class="absolute dark:bg-slate-100 dark:text-black bg-black text-slate-100 font-bold p-1 w-auto scale-0 origin-left left-16 -translate-y-11 group-hover:scale-100 transition-all ease-linear duration-100 rounded-lg"
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
      class="w-8 h-20 p-1 rounded-r-lg bg-c_darkblue transition-all ease-linear"
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
    rounded-2xl hover:rounded-md
    m-1 p-1 w-11 h-11  short:w-10 short:h-10
    items-center flex justify-center;
}
</style>
