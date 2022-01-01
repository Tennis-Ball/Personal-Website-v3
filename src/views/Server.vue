<script setup lang="ts">
const links = [
  { href: "https://blog.junickim.me", text: "My Blog" },
  { href: "https://git.junickim.me", text: "My Git Server" },
];
</script>
<template>
  <div class="m-2 text-4xl font-extrabold">My Other Websites</div>
  <ol class="m-2 text-lg">
    <li v-for="link in links">
      <a
        v-bind:href="link.href"
        class="decoration-blue-300 underline underline-offset-1"
      >
        {{ link.text }}</a
      >
    </li>
  </ol>
</template>
