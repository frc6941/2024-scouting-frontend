<script setup lang="ts">
import { ref } from 'vue';

const robots = [
  "Red 1",
  "Red 2",
  "Red 3",
  "Blue 1",
  "Blue 2",
  "Blue 3",
]

const form = {
  scouter: '',
  matchNumber: '',
  teamNumber: '',
  allianceRobot: '',
  hpAtAmp: false,
  robotAbsent: false
}

const scouter = ref(form.scouter)
const matchNumber = ref(form.matchNumber)
const teamNumber = ref(form.teamNumber)
const allianceRobot = ref(form.allianceRobot)
const hpAtAmp = ref(form.hpAtAmp)
const robotAbsent = ref(form.robotAbsent)

const emits = defineEmits<{
  (
    e: 'change',
    scouter: string,
    matchNumber: string,
    teamNumber: string,
    allianceRobot: string,
    hpAtAmp: boolean,
    robotAbsent: boolean
  ): void
}>()

function onUpdate() {
  emits(
    'change', 
    scouter.value,
    matchNumber.value,
    teamNumber.value,
    allianceRobot.value,
    hpAtAmp.value,
    robotAbsent.value
  )
}
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
          <v-text-field label="Scouter" @update:model-value="onUpdate" v-model="scouter"></v-text-field>
          <v-text-field label="比赛编号" @update:model-value="onUpdate" v-model="matchNumber"></v-text-field>
          <v-text-field label="队号" @update:model-value="onUpdate" v-model="teamNumber"></v-text-field>
          <v-select label="联盟 & Robot" @update:model-value="onUpdate" :items="robots" v-model="allianceRobot" hide-details></v-select>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="pt-0 pb-0">
          <v-checkbox label="HP 是否在 Amp" v-model="hpAtAmp" hide-details></v-checkbox>
          <v-checkbox label="机器不在现场" v-model="robotAbsent" hide-details></v-checkbox>
        </v-container>
      </v-sheet>
    </v-row>
  </v-container>
</template>