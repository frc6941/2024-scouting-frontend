<script setup lang="ts">
const robots = [
  "Red 1",
  "Red 2",
  "Red 3",
  "Blue 1",
  "Blue 2",
  "Blue 3",
]
</script>

<template>
  <v-container>
    <v-row>
      <v-sheet class="text-center" elevation="2" width="100%" rounded>
        <v-container>
          <h3>信息</h3>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container>
          <v-text-field label="Scouter"></v-text-field>
          <v-text-field label="比赛编号"></v-text-field>
          <v-text-field label="队号"></v-text-field>
          <v-select label="联盟 & Robot" :items="robots" hide-details></v-select>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="pt-0 pb-0">
          <v-checkbox label="HP 是否在 Amp" hide-details></v-checkbox>
          <v-checkbox label="机器不在现场" hide-details></v-checkbox>
        </v-container>
      </v-sheet>
    </v-row>
  </v-container>
</template>