<script setup lang="ts">
import chem from "../assets/work/chemistry.svg";
import code from "../assets/work/code.svg";
import math from "../assets/work/math.svg";
import pen from "../assets/work/pen.svg";
import teach from "../assets/work/teach.svg";
import vue from "../assets/work/vue.svg";
import rust from "../assets/work/rust.svg";
import r from "../assets/work/r.svg";
import git from "../assets/work/git.svg";
import db from "../assets/work/db.svg";
import eye from "../assets/work/eye.svg";
import volunteer from "../assets/work/volunteer.svg";

const icon = {
  chem,
  code,
  math,
  pen,
  teach,
  vue,
  rust,
  r,
  git,
  db,
  eye,
  volunteer,
};

const props = defineProps<{
  title: String;
  icon:
    | "chem"
    | "math"
    | "code"
    | "teach"
    | "pen"
    | "vue"
    | "rust"
    | "r"
    | "git"
    | "db"
    | "eye"
    | "volunteer";
  href?: String;
}>();

const href = props.href ? (props.href as string) : null;
</script>

<template>
  <a
    v-bind:href="href"
    v-if="href"
    class="
      card
      bg-gray-200
      dark:bg-gray-600
      hover:scale-105
      group
      hover:bg-yellow-300
      dark:hover:bg-yellow-300
      grow
    "
  >
    <div class="flex flex-row m-1 gap-2">
      <img
        v-bind:alt="$props.icon"
        v-bind:src="icon[$props.icon]"
        class="w-9 h-9 bg-blue-500 p-1 rounded-lg"
      />
      <span class="text-2xl font-bold group-hover:text-orange-500">{{
        $props.title
      }}</span>
    </div>
    <div class="text-lg group-hover:text-orange-500">
      <slot></slot>
    </div>
  </a>

  <div class="card bg-gray-200 dark:bg-gray-600 grow" v-else>
    <div class="flex flex-row m-1 gap-2">
      <img
        v-bind:alt="$props.icon"
        v-bind:src="icon[$props.icon]"
        class="w-9 h-9 bg-blue-500 p-1 rounded-lg"
      />
      <span class="text-2xl font-bold">{{ $props.title }}</span>
    </div>
    <div class="text-lg">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply m-2 p-3 max-w-lg rounded-2xl
  transition-all ease-linear duration-200;
}
</style>
