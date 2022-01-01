<script setup lang="ts">
import Card from "../components/Card.vue";
</script>
<template>
  <div class="text-3xl font-extrabold m-2">Portfolio</div>
  <div class="flex flex-row flex-wrap">
    <Card
      icon="math"
      title="The MAA Contest Tester"
      href="https://maatester.com"
    >
      An Integrated Testing Environment for practice testing AMC/AIME Contests.
    </Card>
    <Card icon="rust" title="Mt" href="https://github.com/junikimm717/mt">
      A Rust Program for opening online meetings based on a configured schedule
      and an alias system.
    </Card>
    <Card
      icon="vue"
      title="Problem Portal"
      href="https://github.com/junikimm717/problemportal"
    >
      An express-based application with Google OAuth that allows instructors to
      distribute math problem sets to students.
    </Card>
    <Card
      icon="code"
      title="Go-Stop Tools"
      href="https://gostoptools.github.io"
    >
      A series of projects that were developed to facilitate the recording of
      games of Go-Stop, a Korean card game.
    </Card>
    <Card
      icon="r"
      title="Patternmatch"
      href="https://git.junickim.me/junikimm717/Patternmatch"
    >
      I worked with Dr. Douglas Walker and Dr. Anna Robuck of the Icahn School
      of Medicine at Mount Sinai to create a function that could analyze GC-HRMS
      data and identify halogenated compounds.
    </Card>
    <Card icon="vue" title="Personal Website">
      This website, written in Vue and Tailwindcss.
    </Card>
  </div>
</template>
