<script setup lang="ts">
import Card from "../components/Card.vue";
</script>
<template>
  <div class="text-4xl m-2 font-extrabold">Volunteering and Tutoring</div>
  <div class="flex flex-row flex-wrap">
    <Card title="Lend a Hand" href="https://lendahandtutor.com" icon="teach">
      I founded and am leading a non-profit organization of volunteer tutors for
      homework help and after-school office hours for students in underserved
      communities.
    </Card>
    <Card title="Personal Tutor" icon="teach">
      I currently do one-on-one tutoring with students preparing for math and
      computer science competitions.
    </Card>
    <Card title="AP Physics Class" icon="teach">
      In 2020, I taught a once per week summer-long course focused on
      derivations and conceptual understanding to students preparing for the AP
      Physics 1 class and exam.
    </Card>
  </div>
</template>
