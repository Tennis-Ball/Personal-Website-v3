<script setup lang="ts">
import Card from "../components/Card.vue";
</script>
<template>
  <div class="m-2 text-3xl font-extrabold sm:text-4xl">Links</div>
  <div class="cardgrid">
    <Card href="https://blog.junickim.me" title="My Blog" icon="pen"
      >I occasionally write about programming and ad-hoc thoughts here.</Card
    >
    <Card href="https://git.junickim.me" title="My Git Server" icon="git">
      I usually put minor projects and scripts here so they don't pollute my
      github account.
    </Card>
    <Card href="/files/Resume.pdf" title="My Resume" icon="doc"
      >My Full Resume, last updated on April 26, 2022.</Card
    >
    <Card
      href="https://nextcloud.junickim.me"
      title="My NextCloud Server"
      icon="cloud"
    >
      I self-host NextCloud in an effort to give less control of my life to
      Google.
    </Card>
  </div>
</template>
