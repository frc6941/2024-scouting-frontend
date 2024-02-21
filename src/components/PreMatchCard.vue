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

const props = defineProps<{
  scouter: string,
  matchNumber: string,
  teamNumber: string,
  allianceRobot: string,
  hpAtAmp: boolean,
  robotAbsent: boolean
}>()

const form = {
  scouter: props.scouter,
  matchNumber: props.matchNumber,
  teamNumber: props.teamNumber,
  allianceRobot: props.allianceRobot,
  hpAtAmp: props.hpAtAmp,
  robotAbsent: props.robotAbsent
}

const scouterRef = ref(form.scouter)
const matchNumberRef = ref(form.matchNumber)
const teamNumberRef = ref(form.teamNumber)
const allianceRobotRef = ref(form.allianceRobot)
const hpAtAmpRef = ref(form.hpAtAmp)
const robotAbsentRef = ref(form.robotAbsent)

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
    scouterRef.value,
    matchNumberRef.value,
    teamNumberRef.value,
    allianceRobotRef.value,
    hpAtAmpRef.value,
    robotAbsentRef.value
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
          <v-text-field label="Scouter" @update:focused="onUpdate" v-model="scouterRef"></v-text-field>
          <v-text-field label="比赛编号" @update:focused="onUpdate" v-model="matchNumberRef"></v-text-field>
          <v-text-field label="队号" @update:focused="onUpdate" v-model="teamNumberRef"></v-text-field>
          <v-select label="联盟 & Robot" @update:focused="onUpdate" :items="robots" v-model="allianceRobotRef" hide-details></v-select>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="pt-0 pb-0">
          <v-checkbox label="HP 是否在 Amp" @update:focused="onUpdate" v-model="hpAtAmpRef" hide-details></v-checkbox>
          <v-checkbox label="机器不在现场" @update:focused="onUpdate" v-model="robotAbsentRef" hide-details></v-checkbox>
        </v-container>
      </v-sheet>
    </v-row>
  </v-container>
</template>