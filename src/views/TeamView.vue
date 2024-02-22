<script setup lang="ts">
import SingleNumberCard from '@/components/SingleNumberCard.vue';
import TeamScore from '@/components/TeamScore.vue';
import TeamScorePercent from '@/components/TeamScorePercent.vue'
</script>

<template>
  <v-container>
    <v-row class="ml-6 mr-6 mt-1">
      <v-col>
        <SingleNumberCard
          data="6941"
          title="队伍号"
        ></SingleNumberCard>
      </v-col>
      <v-col>
        <SingleNumberCard
          data="100%"
          title="自动 Speaker 准确率"
        ></SingleNumberCard>
      </v-col>
      <v-col>
        <SingleNumberCard
          data="100%"
          title="自动 Amp 准确率"
        ></SingleNumberCard>
      </v-col>
      <v-col>
        <SingleNumberCard
          data="100%"
          title="手动 Speaker 准确率"
        ></SingleNumberCard>
      </v-col>
      <v-col>
        <SingleNumberCard
          data="100%"
          title="手动 Amp 准确率"
        ></SingleNumberCard>
      </v-col>
    </v-row>
    <v-row class="ml-9 mr-6 mt-1">
      <v-col cols="2">
        <v-row class="mt-1">
          <SingleNumberCard
            data="100"
            title="Driver 平均得分"
          ></SingleNumberCard>
        </v-row>
        <v-row class="mt-5">
          <SingleNumberCard
            data="100"
            title="HP 平均得分"
          ></SingleNumberCard>
        </v-row>
        <v-row class="mt-5">
          <SingleNumberCard
            data="100"
            title="战术平均得分"
          ></SingleNumberCard>
        </v-row>
      </v-col>
      <v-col>
        <TeamScore title="Speaker 命中数"></TeamScore>
      </v-col>
      <v-col>
        <TeamScorePercent title="Speaker 命中率"></TeamScorePercent>
      </v-col>
    </v-row>
    <v-row class="ml-6 mr-6 mt-1">
      <v-col>
        <TeamScore title="Amp 命中数"></TeamScore>
      </v-col>
      <v-col>
        <TeamScorePercent title="Amp 命中率"></TeamScorePercent>
      </v-col>
      <v-col>
        <TeamScorePercent title="Cycle 时间"></TeamScorePercent>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.chart {
  height: 100vh;
}
</style>
