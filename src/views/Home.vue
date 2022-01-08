<script setup lang="ts">
import profile from "../assets/icons/profile.jpg";
</script>
<template>
  <div class="m-2 text-3xl font-extrabold sm:text-4xl">
    Welcome to Juni Kim's Personal Website!
  </div>
  <div class="grid grid-cols-1 m-2 sm:grid-cols-4 sm:gap-3">
    <div class="sm:col-span-3">
      <div class="text-xl font-extrabold sm:text-2xl">About Me</div>
      <p class="text-lg">
        I am a sophomore at Stanford Online High School who partakes in web
        development, contest math, and linux ricing. Ever since my first
        programming experience preparing for the USACO, I have explored into
        other fields in an attempt to find my niche.
        <br /><br />
        I am also a nationally ranked competitive fencer as well as a hobbyist
        of boxing and basketball.
      </p>
    </div>
    <div class="flex justify-center mt-10 sm:col-span-1 sm:m-0">
      <img v-bind:src="profile" class="mx-auto w-36 rounded-full sm:w-48" />
    </div>
  </div>
</template>
