<script setup lang="ts">
import PreMatchCard from '@/components/PreMatchCard.vue';
import AutonomousCard from '@/components/AutonomousCard.vue'
import TeleopCard from '@/components/TeleopCard.vue'
import EndGameCard from '@/components/EndGameCard.vue';

const form = {
  scouter: '',
  matchNumber: '',
  teamNumber: '',
  allianceRobot: '',
  hpAtAmp: false,
  robotAbsent: false,
  
  mobile: false,
  autoAmpScores: 0,
  autoAmpMissed: 0,
  autoSpeakerScore: 0,
  autoSpeakerMissed: 0,
  autoFoul: 0,

  coopertition: false,
  teleopAmpScores: 0,
  teleopAmpMissed: 0,
  teleopSpeakerScore: 0,
  teleopSpeakerMissed: 0,
  teleopTrapScored: 0,
  teleopFoul: 0,

  endPosition: '',
  harmony: ''
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
  mobile: boolean,
  ampScores: number, 
  ampMissed: number, 
  speakerScore: number, 
  speakerMissed: number, 
  foul: number
) {
  form.mobile = mobile
  form.autoAmpScores = ampScores
  form.autoAmpMissed = ampMissed
  form.autoSpeakerScore = speakerScore
  form.autoSpeakerMissed = speakerMissed
  form.autoFoul = foul
}

function onTeleopChange(
  coopertition: boolean,
  ampScores: number, 
  ampMissed: number, 
  speakerScore: number, 
  speakerMissed: number, 
  trapScore: number,
  foul: number
) {
  form.coopertition = coopertition
  form.teleopAmpScores = ampScores
  form.teleopAmpMissed = ampMissed
  form.teleopSpeakerScore = speakerScore
  form.teleopSpeakerMissed = speakerMissed
  form.teleopTrapScored = trapScore
  form.teleopFoul = foul
}

function onEndGameChange(
  endPosition: string,
  harmony: string
) {
  form.endPosition = endPosition
  form.harmony = harmony
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
      <TeleopCard @change="onTeleopChange"></TeleopCard>
    </v-col>
    <v-col>
      <EndGameCard @change="onEndGameChange"></EndGameCard>
    </v-col>
    <v-col>
      <PreMatchCard></PreMatchCard>
    </v-col>
  </v-row>
</template>
