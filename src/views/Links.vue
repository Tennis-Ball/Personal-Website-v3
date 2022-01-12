<script setup lang="ts">
import Card from "../components/Card.vue";
import Resume from "../assets/files/Resume.pdf";
const links = [
  {href: "https://blog.junickim.me", text: "My Blog"},
  {href: "https://git.junickim.me", text: "My Git Server"},
];
</script>
<template>
  <div class="m-2 text-3xl font-extrabold sm:text-4xl">Links</div>
  <div class="cardgrid">
    <Card
      href="https://blog.junickim.me"
      title="My Blog"
      icon="pen"
    >I occasionally write about programming and ad-hoc thoughts here.</Card>
    <Card href="https://git.junickim.me" title="My Git Server" icon="git">
      I usually put minor projects and scripts here so they don't pollute my
      github account.
    </Card>
    <Card
      v-bind:href="Resume"
      title="My Resume"
      icon="doc"
    >My Full Resume, last updated on January 12, 2022.</Card>
  </div>
</template>
