<script setup lang="ts">
import Card from "../components/Card.vue";
import pixel from "../assets/logos/pixel.png";
</script>
<template>
  <div class="m-2 text-4xl font-extrabold">
    School
    <a href="https://ohs.stanford.edu">
      <img v-bind:src="pixel" class="h-10 inline" />
    </a>
  </div>
  <p class="m-2 text-lg">
    I currently attend Stanford Online High School, where I participate in a
    variety of classes and activities.
  </p>
  <div class="flex flex-row flex-wrap">
    <Card icon="teach" title="2020-21 AP Calculus BC TA">
      I prepared review sessions and held office hours as the TA of the AP
      Calculus BC class under Ms. Revathi Sundaresan.
    </Card>
    <Card icon="teach" title="OHS Peer Tutor">
      I serve as a peer tutor of mathematics and chemistry courses for the
      2021-22 year.
    </Card>
    <Card icon="math" title="OHS Math Competition Club">
      I participate in review sessions and take contests with the OHS Math
      Competition Club.
    </Card>
    <Card icon="chem" title="OHS Chemistry Olympiad Club">
      I participated in the OHS Chemistry Olympiad Club, which covers concepts
      that are tested in the USNCO.
    </Card>
  </div>
</template>
