<script setup lang="ts">
import Card from "../components/Card.vue";
</script>
<template>
  <div class="m-2 text-3xl font-extrabold sm:text-4xl">Achievements</div>
  <p class="m-2 text-lg">
    I have competed in numerous olympiads and contests during my high school
    career.
  </p>
  <div class="mx-2 mt-10 mb-2 text-2xl font-bold sm:text-3xl">
    2021-2022 (10th grade)
  </div>
  <hr />
  <div class="cardgrid">
    <Card
      icon="math"
      title="2022 USAJMO Winner"
      href="https://www.maa.org/sites/default/files/pdf/AMC/usamo/2022/2022%20USAJMO%20Awardees.docx%20%281%29.pdf"
    >
      I was a 2022 USAJMO winner (scored 22/42, 22nd in the nation) after
      qualifying with a qualification index of 224.
    </Card>

    <Card icon="math" title="2022 AIME Qualifier">
      I qualified for the 2022 AIME (American Invitational Mathematics
      Examination) by scoring 144/150 on the Fall AMC (American Mathematics
      Competitions), in which I placed 6th among all 10th graders. I also scored
      118.5/150 on the AMC 12B and 8/15 on the 2022 AIME I.
    </Card>
    <Card
      icon="pen"
      title="2022 Scholastic Writing Regional Gold Key Recipient"
      href="/certs/Scholastic.pdf"
    >
      I received a Gold Key from the At-Large East Writing Region for my essay,
      <i>
        console.log(“The Web that Won&quot;t Hold”); Software Inefficiency and
        Electronic Waste
      </i>
    </Card>
    <Card icon="pen" title="2022 National Latin Exam Gold Medalist">
      I received a Summa Cum Laude Gold Medal in the 2022 National Latin Exam
      Intermediate Latin Exam.
    </Card>
    <!--Change this link later when scores get moved-->
    <Card
      icon="code"
      title="2022 ACSL Bronze Medalist"
      href="https://www.scores.acsl.org/leaderboard/finals/s/b/"
    >
      I had a perfect ACSL regular season and received a Bronze Medal in the
      Senior Division of the 2022 ACSL (American Computer Science League) Finals
      by scoring 29/40 points (37th overall).
    </Card>
  </div>

  <div class="mx-2 mt-10 mb-2 text-2xl font-bold sm:text-3xl">
    2020-21 (9th grade)
  </div>
  <hr />
  <div class="cardgrid">
    <Card
      icon="math"
      title="2021 USAJMO Qualifier"
      href="https://www.maa.org/sites/default/files/pdf/AMC/usamo/2021/JMO%20List.pdf"
    >
      I qualified for the 2021 USAJMO (USA Junior Mathematical Olympiad) with a
      qualification index of 241. I also scored 7/42 on the USAJMO.
    </Card>
    <Card
      icon="code"
      title="USACO Platinum Competitor"
      href="http://usaco.org/current/data/jan21_gold_results.html"
    >
      I was promoted to the Platinum Division of the USACO (USA Computing
      Olympiad) in the 2020-21 January Contest by scoring 917/1000.
    </Card>
    <Card
      icon="chem"
      title="2021 USNCO National Exam Qualifier <i>(Semi-Finalist)</i>"
      href="/certs/USNCO.pdf"
    >
      I qualified for the 2021 USNCO (USA National Chemistry Olympiad) National
      Exam through the ACS Silicon Valley Chapter by scoring 51/60 on the local
      exam.
    </Card>
    <Card
      icon="code"
      title="2021 ACSL Gold Medalist"
      href="https://www.scores.acsl.org/legacy/finals/2021/i/"
    >
      I received a Gold Medal in the Intermediate Division of the 2021 ACSL
      (American Computer Science League) Finals by receiving perfect scores in
      both the short answer and programming sections.
    </Card>
    <Card icon="math" title="2021 AIME Qualifier">
      I qualified for the 2021 AIME by scoring 141/150 on the AMC 10A and
      117/150 on the AMC 10B. I scored 10/15 on the 2021 AIME I.
    </Card>
    <Card
      icon="code"
      title="2021 Canadian Computing Competition"
      href="https://cemc.uwaterloo.ca/contests/past_contests/2021/2021CCCResults.pdf"
    >
      I finished in the top 75 out of 2920 competitors in the Senior Division of
      the 2021 Canadian Computing Competition by scoring 58/75.
    </Card>
    <Card icon="pen" title="2021 National Latin Exam Gold Medalist">
      I received a Summa Cum Laude Gold Medal in the 2021 National Latin Exam
      Beginning Latin Exam.
    </Card>
    <Card
      icon="code"
      title="2021 CS@Mines HSPC"
      href="https://mines21.kattis.com/standings"
    >
      I organized a team of three students and placed second out of 56
      competitors in the 2021 Colorado School of Mines High School Programming
      Competition.
    </Card>
  </div>
  <div class="mx-2 mt-10 mb-2 text-2xl font-bold sm:text-3xl">
    2019-20 (8th grade)
  </div>
  <hr />
  <div class="flex flex-row flex-wrap">
    <Card title="2020 AIME Qualifier" icon="math">
      I qualified for the 2020 AIME by scoring 109.5 on the 2020 AMC 10A. I also
      scored 7/15 on the AIME I.
    </Card>
  </div>
</template>
