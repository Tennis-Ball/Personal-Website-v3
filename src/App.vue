<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from "./components/Navbar.vue";
import Content from "./Content.vue";
</script>

<template>
  <div class="flex flex-row dark:bg-gray-700 dark:text-white">
    <Navbar />
    <div class="m-2 p-3 w-full">
      <Content />
    </div>
  </div>
</template>
