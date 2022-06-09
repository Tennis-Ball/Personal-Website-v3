<script setup lang="ts">
import Card from "../components/Card.vue";
</script>
<template>
  <div class="m-2 text-3xl font-extrabold sm:text-4xl">Portfolio</div>
  <div class="cardgrid">
    <Card
      icon="math"
      title="The MAA Contest Tester"
      href="https://maatester.com"
    >
      An Integrated Testing Environment for practicing past AMC/AIME contests.
    </Card>
    <Card icon="math" title="ohsmathc.club" href="https://ohsmathc.club">
      Wrote an extensible Python/Django site for easing the communication
      barrier in an online math competition club.
    </Card>
    <Card icon="rust" title="mt" href="https://github.com/junikimm717/mt">
      A Rust-based program for opening online meetings based on a configured
      schedule and an alias system.
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
      title="Pattern Match"
      href="https://git.junickim.me/junikimm717/Patternmatch"
    >
      I worked at the High Resolution Exposomics Laboratory at Mount Sinai to
      create a function that could analyze GC-HRMS data and identify halogenated
      compounds.
    </Card>
    <Card
      icon="shell"
      title="Mktex"
      href="https://github.com/junikimm717/Mktex"
    >
      A schoolwork templating and compiling system leveraging docker to manage
      pandoc, LaTeX, and pythontex dependencies.
    </Card>
    <Card
      icon="vue"
      title="Personal Website"
      href="https://github.com/junikimm717/Personal-Website-v3"
    >
      This website, written in Vue+Vite and Tailwindcss.
    </Card>
  </div>
</template>
