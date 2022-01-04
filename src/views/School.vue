<script setup lang="ts">
import Card from "../components/Card.vue";
import List from "../components/List.vue";
import pixel from "../assets/icons/logos/pixel.png";
</script>
<template>
  <div class="m-2 text-3xl sm:text-4xl font-extrabold">
    School
    <a href="https://ohs.stanford.edu">
      <img v-bind:src="pixel" class="h-10 inline" alt="Stanford OHS Pixel" />
    </a>
  </div>
  <p class="m-2 text-lg">I currently attend Stanford Online High School.</p>
  <div class="text-3xl font-bold mb-2 mt-10 mx-2">Activities and Clubs</div>
  <hr />
  <div class="cardgrid">
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
      I participate in the OHS Chemistry Olympiad Club, which covers concepts
      that are tested in the USNCO.
    </Card>
    <Card icon="code" title="OHS Competitive Programming Circle">
      I am the leader of the OHS Competitive Programming Circle since 9th grade,
      which holds review sessions for topics that are covered in the USA
      Computing Olympiad.
    </Card>
    <Card icon="volunteer" title="OHS UNICEF Club">
      I participate in the OHS UNICEF Club, which holds weekly meetings about
      various topics on children's issues.
    </Card>
  </div>
  <div class="text-3xl font-bold mb-2 mt-10 mx-2">AP/Post-AP Coursework</div>
  <hr />
  <div class="mx-2">
    <List title="10th Grade">
      <li>Multivariable Differential/Integral Calculus (UM52A/UM52B)</li>
      <li>AP Biology (OB010)</li>
    </List>
    <List title="9th Grade">
      <li>AP Chemistry (OC010) (5 on AP Test)</li>
      <li>AP Statistics (OM060) (5 on AP Test)</li>
      <li>AP Physics 1 (AP Test only) (5 on AP Test)</li>
      <li>AP Computer Science A (AP Test only) (5 on AP Test)</li>
    </List>
    <List title="8th Grade">
      <li>AP Calculus BC (OM4BC) (5 on AP Test)</li>
    </List>
    <List title="7th Grade">
      <li>AP Calculus AB (AP Test only) (5 on AP Test)</li>
    </List>
  </div>
</template>
