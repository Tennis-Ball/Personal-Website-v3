<script setup lang="ts">
import profile from "../assets/icons/profile.jpg";
</script>
<template>
  <div class="m-2 text-3xl font-extrabold sm:text-4xl">
    Welcome to Juni Kim's Personal Website!
  </div>
  <div class="flex flex-row flex-wrap justify-between m-2">
    <span class="max-w-2xl">
      <div class="text-xl font-extrabold sm:text-2xl">About Me</div>
      <p class="text-base sm:text-lg">
        I am a junior at Stanford Online High School who partakes in web
        development, contest math, and Linux ricing. Ever since my first
        programming experience preparing for the USACO, I have explored
        other fields in an attempt to find my niche.
        <br /><br />
        I am also a nationally ranked competitive fencer as well as a hobbyist
        of boxing and tennis.
      </p>
    </span>
    <div class="flex justify-center mx-auto mt-10 lg:mt-3">
      <img
        v-bind:src="profile"
        alt="Profile Picture"
        class="mx-auto w-36 h-36 rounded-2xl sm:w-48 sm:h-48"
      />
    </div>
  </div>
</template>
