<script setup lang="ts">
import PreMatchCard from '@/components/PreMatchCard.vue';
import AutonomousCard from '@/components/AutonomousCard.vue'

const form = {
  scouter: '',
  matchNumber: '',
  teamNumber: '',
  allianceRobot: '',
  hpAtAmp: false,
  robotAbsent: false,
  autoAmpScores: 0,
  autoAmpMissed: 0,
  autoSpeakerScore: 0,
  autoSpeakerMissed: 0,
  autoFoul: 0
}

function onPreMatchChange(
  scouter: string,
  matchNumber: string,
  teamNumber: string,
  allianceRobot: string,
  hpAtAmp: boolean,
  robotAbsent: boolean
) {
  form.scouter = scouter
  form.matchNumber = matchNumber
  form.teamNumber = teamNumber
  form.allianceRobot = allianceRobot
  form.hpAtAmp = hpAtAmp
  form.robotAbsent = robotAbsent
}

function onAutonomousChange(
  ampScores: number, 
  ampMissed: number, 
  speakerScore: number, 
  speakerMissed: number, 
  foul: number
) {
  form.autoAmpScores = ampScores
  form.autoAmpMissed = ampMissed
  form.autoSpeakerScore = speakerScore
  form.autoSpeakerMissed = speakerMissed
  form.autoFoul = foul
}

</script>

<template>
  <v-row class="ml-6 mr-6 mt-1">
    <v-col>
      <PreMatchCard @change="onPreMatchChange"></PreMatchCard>
    </v-col>
    <v-col>
      <AutonomousCard @change="onAutonomousChange"></AutonomousCard>
    </v-col>
    <v-col>
      <PreMatchCard></PreMatchCard>
    </v-col>
    <v-col>
      <PreMatchCard></PreMatchCard>
    </v-col>
    <v-col>
      <PreMatchCard></PreMatchCard>
    </v-col>
  </v-row>
</template>
