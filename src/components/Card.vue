<script setup lang="ts">
import chem from "../assets/icons/work/chemistry.svg";
import code from "../assets/icons/work/code.svg";
import math from "../assets/icons/work/math.svg";
import pen from "../assets/icons/work/pen.svg";
import teach from "../assets/icons/work/teach.svg";
import vue from "../assets/icons/work/vue.svg";
import rust from "../assets/icons/work/rust.svg";
import r from "../assets/icons/work/r.svg";
import git from "../assets/icons/work/git.svg";
import db from "../assets/icons/work/db.svg";
import eye from "../assets/icons/work/eye.svg";
import volunteer from "../assets/icons/work/volunteer.svg";
import doc from "../assets/icons/work/document.svg";
import cloud from "../assets/icons/work/cloud.svg";
import shell from "../assets/icons/work/shell.svg";
import docker from "../assets/icons/work/docker.svg";

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
  doc,
  cloud,
  shell,
  docker,
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
    | "volunteer"
    | "doc"
    | "cloud"
    | "shell"
    | "docker";
  href?: String;
}>();

const href = props.href ? (props.href as string) : null;
</script>

<template>
  <a
    v-bind:href="href"
    v-if="href"
    class="bg-gray-100 card dark:bg-gray-600 hover:scale-105 group grow"
  >
    <div class="flex flex-row gap-2 justify-between m-1">
      <div class="flex flex-row gap-2">
        <img
          v-bind:alt="$props.icon"
          v-bind:src="icon[$props.icon]"
          class="p-1 w-9 h-9 rounded-lg bg-c_beige"
        />
        <span
          class="text-xl font-bold underline sm:text-2xl underline-offset-1 decoration-2"
          v-html="$props.title"
        >
        </span>
      </div>
    </div>
    <div class="text-lg">
      <slot></slot>
    </div>
  </a>

  <div class="bg-gray-100 card dark:bg-gray-600 grow" v-else>
    <div class="flex flex-row gap-2 m-1">
      <img
        v-bind:alt="$props.icon"
        v-bind:src="icon[$props.icon]"
        class="p-1 w-9 h-9 rounded-lg bg-c_beige"
      />
      <span class="text-xl font-bold sm:text-2xl">{{ $props.title }}</span>
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
