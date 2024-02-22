<script setup lang="ts">
import SingleNumberCard from '@/components/SingleNumberCard.vue';
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
    <v-row class="ml-6 mr-6 mt-1">
      <v-col>
        <SingleNumberCard
          data="100%"
          title="手动 Speaker 准确率"
        ></SingleNumberCard>
      </v-col>
    </v-row>
  </v-container>
</template>