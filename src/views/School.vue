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
    <Card icon="teach" title="2022-23 Multivariable Calculus TA">
      I am an incumbent TA for the Multivariable Calculus class under Dr. Maxim
      Gilula.
    </Card>
    <Card icon="teach" title="OHS Peer Tutor">
      I serve as a peer tutor of mathematics, chemistry, and biology courses.
    </Card>
    <Card
      icon="math"
      title="OHS Math Competition Club Leader/Webmaster"
      href="https://ohsmathc.club"
    >
      I am the incumbent leader of the OHS Math Competition Club, which
      participates in math contests and prepares students for relevant topics. I
      have also built custom software to facilitate its management.
    </Card>
    <Card icon="chem" title="OHS Chemistry Olympiad Club">
      I participate in the OHS Chemistry Olympiad Club, which covers concepts
      that are tested in the USNCO.
    </Card>
    <Card icon="code" title="OHS Competitive Programming Circle Leader">
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
    <List title="2022-2023 (11th grade)">
      <li>AP Physics C: Mechanics/Electricity and Magnetism (OP051/OP053)</li>
      <li>Linear Algebra/Differential Equations (UM51A/UM53A)</li>
      <li>
        Critical Theory: Canon &amp; Counter-Canon (Alternative to AP English
        Language and Composition) (OE020E)
      </li>
    </List>
    <List title="2021-2022 (10th grade)">
      <li>Multivariable Differential/Integral Calculus (UM52A/UM52B)</li>
      <li>AP Biology (OB010) (5 on AP Test)</li>
    </List>
    <List title="2020-2021 (9th grade)">
      <li>AP Chemistry (OC010) (5 on AP Test)</li>
      <li>AP Statistics (OM060) (5 on AP Test)</li>
      <li>AP Physics 1 (AP Test only) (5 on AP Test)</li>
      <li>AP Computer Science A (AP Test only) (5 on AP Test)</li>
    </List>
    <List title="2019-2020 (8th grade)">
      <li>AP Calculus BC (OM4BC) (5 on AP Test)</li>
    </List>
    <List title="2018-2019 (7th grade)">
      <li>AP Calculus AB (AP Test only) (5 on AP Test)</li>
    </List>
  </div>
</template>
