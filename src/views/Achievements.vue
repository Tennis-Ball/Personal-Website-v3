<script setup lang="ts">
import Card from "../components/Card.vue";
</script>
<template>
  <div class="text-4xl font-extrabold m-2">Achievements</div>
  <p class="m-2 text-lg">
    I have competed in numerous olympiads and contests during my high school
    career.
  </p>
  <div class="flex flex-row flex-wrap">
    <Card
      icon="math"
      title="2021 USAJMO Qualifier"
      href="https://www.maa.org/sites/default/files/pdf/AMC/usamo/2021/JMO%20List.pdf"
    >
      I qualified for the 2021 USAJMO by scoring 10/15 on the AIME I and 141 on
      the AMC 10A to qualify with a qualification index of 241. I also scored
      7/42 on the USAJMO.
    </Card>
    <Card icon="math" title="2021 Fall AMC 10A">
      I scored 144/150 on the Fall AMC 10A and placed sixth among all tenth
      graders.
    </Card>
    <Card
      icon="code"
      title="USACO Platinum Competitor"
      href="http://usaco.org/current/data/jan21_gold_results.html"
    >
      I was promoted to the USACO Platinum Division in the 2020-21 January
      Contest by scoring 917/1000.
    </Card>
    <Card icon="chem" title="2021 USNCO National Exam Qualifier">
      I qualified for the 2021 USNCO National Exam through the ACS Silicon
      Valley Chapter by scoring 51/60 on the local exam.
    </Card>
    <Card
      icon="code"
      title="2021 ACSL Gold Medalist"
      href="https://www.scores.acsl.org/legacy/finals/2021/i/"
    >
      I received a Gold Medal in the Intermediate Division of the 2021 ACSL
      Finals by receiving perfect scores in both the short answer and
      programming sections.
    </Card>
    <Card
      icon="code"
      title="2021 Canadian Computing Competition"
      href="https://cemc.uwaterloo.ca/contests/past_contests/2021/2021CCCResults.pdf"
    >
      I finished in the top 75 out of 2920 competitors in the Senior Division of
      the 2021 Canadian Computing Competition by scoring 58/75.
    </Card>
    <Card
      icon="pen"
      title="2021 National Latin Exam"
      href="https://cemc.uwaterloo.ca/contests/past_contests/2021/2021CCCResults.pdf"
    >
      I received a Summa Cum Laude Gold Medal in the 2021 National Latin Exam
      Beginning Latin Exam.
    </Card>
    <Card
      icon="code"
      title="2021 CS Mines HSPC"
      href="https://mines21.kattis.com/standings"
    >
      Our team of three students placed second out of 56 competitors.
    </Card>
  </div>
</template>
