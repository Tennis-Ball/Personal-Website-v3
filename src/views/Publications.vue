<script setup lang="ts">
import Card from "../components/Card.vue";
</script>
<template>
  <div class="m-2 text-3xl font-extrabold sm:text-4xl">
    Research and Published Works
  </div>
  <div class="cardgrid">
    <Card
      title="Exposome Research Project"
      icon="db"
      href="/files/GC_HRMS_Poster.pdf"
    >
      My program, which identifies chlorinated clusters from GC-HRMS data, has
      been used by others to find correlations with other diseases. This project
      should be published around early to mid 2022.
    </Card>
    <Card icon="chem" title="2022-23 Garcia Center Summer Research Program">
      I will be attending the High School Summer Research Program of the Garcia
      Center for Polymers at Engineered Interfaces taking place in Stony Brook
      University during the summer of 2022.
    </Card>
    <Card
      title="An Analysis of Visual Subitization across Modes of Peripheral Vision"
      icon="eye"
      href="http://ieomsociety.org/proceedings/2021monterrey/97.pdf"
    >
      This paper was presented at the 2021 IEOM (Industrial Engineering and
      Operations Management) Monterrey conference.
    </Card>
    <Card
      href="/files/Scholastic.pdf"
      icon="pen"
      title='console.log ("The Web that Won&apos;t Hold")'
    >
      I wrote an essay on the environmental repercussions of poor software
      development practices, particularly in regards to the web. I received a
      Gold Key from the At-Large-East Writing Region for this essay.
    </Card>
    <Card
      href="https://www.earthplexmedia.com/2021/07/the-seaweed-threatening-atlantic.html"
      icon="pen"
      title="Earthplex Article"
    >
      I wrote an article in the New York Times sponsored blog about the
      Sargassum blooms in the Caribbean, the effects of which I had experienced
      while at the beaches there.
    </Card>
  </div>
</template>
