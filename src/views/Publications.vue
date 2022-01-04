<script setup lang="ts">
import Card from "../components/Card.vue";
</script>
<template>
  <div class="m-2 text-3xl sm:text-4xl font-extrabold">
    Research and Published Works
  </div>
  <div class="cardgrid">
    <Card
      title="Exposome Research Project"
      icon="db"
      href="https://docs.google.com/presentation/d/1ndBCn_KmioV4xbS5x3wMHrMLc59J34sv/view?usp=sharing&ouid=118332936074902675722&rtpof=true&sd=true"
    >
      My program, which identifies chlorinated clusters from GC-HRMS data, has
      been used by others to find correlations with other diseases. This project
      should be published around early to mid 2022.
    </Card>
    <Card
      title="An Analysis of Visual Subitization across Modes of Peripheral Vision"
      icon="eye"
    >
      This paper was presented at the 2021 IEOM (Industrial Engineering and
      Operations Management) Monterrey conference. The proceedings will be
      published in early to mid 2022.
    </Card>
    <Card
      href="https://www.earthplexmedia.com/2021/07/the-seaweed-threatening-atlantic.html"
      icon="pen"
      title="Earthplex Article"
    >
      I wrote an article in the New York Times sponsored blog about the
      sargassum blooms in the Caribbean, whose effects I had experienced while
      at the beaches there.
    </Card>
  </div>
</template>
