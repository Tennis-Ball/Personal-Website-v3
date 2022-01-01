<script setup lang="ts">
import Card from "../components/Card.vue";
const links = [
  { href: "https://blog.junickim.me", text: "My Blog" },
  { href: "https://git.junickim.me", text: "My Git Server" },
];
</script>
<template>
  <div class="m-2 text-4xl font-extrabold">My Other Websites</div>
  <div class="flex flex-row flex-wrap">
    <Card href="https://blog.junickim.me" title="My Blog" icon="pen">
      I occasionally write about programming and ad-hoc thoughts here.
    </Card>
    <Card href="https://git.junickim.me" title="My Git Server" icon="git">
      I usually put minor projects and scripts here so they don't pollute my
      github account.
    </Card>
  </div>
</template>
