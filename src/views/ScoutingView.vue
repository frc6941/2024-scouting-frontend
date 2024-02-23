<script setup lang="ts">
import PreMatchCard from '@/components/PreMatchCard.vue';
import AutonomousCard from '@/components/AutonomousCard.vue'
import TeleopCard from '@/components/TeleopCard.vue'
import EndGameCard from '@/components/EndGameCard.vue';
import PostMatchCard from '@/components/PostMatchCard.vue';

import axios from 'axios'

import queryString from 'query-string';

import { getCookie, setCookie, removeCookie } from 'typescript-cookie'
import { apiBaseUrl } from '@/main';

const savedForm = getCookie('form')

export interface ScoutingDataUploadForm {
  scouter: string,
  matchNumber: string,
  teamNumber: string,
  allianceRobot: string,
  hpAtAmp: boolean,
  robotAbsent: boolean,
  
  mobile: boolean,
  autoAmpScored: number,
  autoAmpMissed: number,
  autoSpeakerScored: number,
  autoSpeakerMissed: number,
  autoFoul: number,

  coopertition: boolean,
  teleopAmpScored: number,
  teleopAmpMissed: number,
  teleopSpeakerScored: number,
  teleopSpeakerMissed: number,
  teleopTrapScored: number,
  teleopFoul: number,

  endPosition: string,
  harmony: string,

  offenseSkill: number,
  defenseSkill: number,

  humanPlayerRating: number,
  driverRating: number,
  strategyRating: number,
  cycleTime: number,
  
  died: boolean,
  tippedOver: boolean,
  card: string,
  comments: string
}

let form: ScoutingDataUploadForm

if (savedForm == undefined) {
  form = {
    scouter: '',
    matchNumber: '',
    teamNumber: '',
    allianceRobot: '',
    hpAtAmp: false,
    robotAbsent: false,
  
    mobile: false,
    autoAmpScored: 0,
    autoAmpMissed: 0,
    autoSpeakerScored: 0,
    autoSpeakerMissed: 0,
    autoFoul: 0,

    coopertition: false,
    teleopAmpScored: 0,
    teleopAmpMissed: 0,
    teleopSpeakerScored: 0,
    teleopSpeakerMissed: 0,
    teleopTrapScored: 0,
    teleopFoul: 0,

    endPosition: '',
    harmony: '',

    offenseSkill: 0,
    defenseSkill: 0,

    humanPlayerRating: 0,
    driverRating: 0,
    strategyRating: 0,
    cycleTime: 0,

    died: false,
    tippedOver: false,
    card: '',
    comments: ''
  }
} else {
  form = JSON.parse(savedForm)
}

function onChange() {
  setCookie('form', JSON.stringify(form))
}

function onReset() {
  removeCookie('form')
  form = {
    scouter: '',
    matchNumber: '',
    teamNumber: '',
    allianceRobot: '',
    hpAtAmp: false,
    robotAbsent: false,
  
    mobile: false,
    autoAmpScored: 0,
    autoAmpMissed: 0,
    autoSpeakerScored: 0,
    autoSpeakerMissed: 0,
    autoFoul: 0,

    coopertition: false,
    teleopAmpScored: 0,
    teleopAmpMissed: 0,
    teleopSpeakerScored: 0,
    teleopSpeakerMissed: 0,
    teleopTrapScored: 0,
    teleopFoul: 0,

    endPosition: '',
    harmony: '',

    offenseSkill: 0,
    defenseSkill: 0,

    humanPlayerRating: 0,
    driverRating: 0,
    strategyRating: 0,
    cycleTime: 0,

    died: false,
    tippedOver: false,
    card: '',
    comments: ''
  }
  location.reload()
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
  onChange()
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
  form.autoAmpScored = ampScores
  form.autoAmpMissed = ampMissed
  form.autoSpeakerScored = speakerScore
  form.autoSpeakerMissed = speakerMissed
  form.autoFoul = foul
  onChange()
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
  form.teleopAmpScored = ampScores
  form.teleopAmpMissed = ampMissed
  form.teleopSpeakerScored = speakerScore
  form.teleopSpeakerMissed = speakerMissed
  form.teleopTrapScored = trapScore
  form.teleopFoul = foul
  onChange()
}

function onEndGameChange(
  endPosition: string,
  harmony: string
) {
  form.endPosition = endPosition
  form.harmony = harmony
  onChange()
}

function onPostMatchChange(
  offenseSkill: number, 
  defenseSkill: number,
  humanPlayerRating: number, 
  driverRating: number,
  strategyRating: number,
  cycleTime: number,
  died: boolean, 
  tippedOver: boolean, 
  card: string,
  comments: string
) {
  form.offenseSkill = offenseSkill
  form.defenseSkill = defenseSkill
  form.humanPlayerRating = humanPlayerRating
  form.driverRating = driverRating
  form.strategyRating = strategyRating
  form.cycleTime = cycleTime
  form.died = died
  form.tippedOver = tippedOver
  form.card = card,
  form.comments = comments
  onChange()
}

function onSubmit() {
  axios
    .post(apiBaseUrl + '/api/record', queryString.stringify(form))
    .then(() => {
      removeCookie('form')
      location.reload()
    })
    .catch(e => {
      console.log(e)
      alert(e)
    })
}
</script>

<template>
  <v-row class="ml-6 mr-6 mt-1">
    <v-col>
      <PreMatchCard
        :scouter="form.scouter"
        :match-number="form.matchNumber"
        :team-number="form.teamNumber"
        :alliance-robot="form.allianceRobot"
        :hp-at-amp="form.hpAtAmp"
        :robot-absent="form.robotAbsent"
        @change="onPreMatchChange"
      ></PreMatchCard>
    </v-col>
    <v-col>
      <AutonomousCard 
        :mobile="form.mobile"
        :ampScores="form.autoAmpScored"
        :amp-missed="form.autoAmpMissed"
        :speaker-score="form.autoSpeakerScored"
        :speaker-missed="form.autoSpeakerMissed"
        :foul="form.autoFoul"
        @change="onAutonomousChange"></AutonomousCard>
    </v-col>
    <v-col>
      <TeleopCard 
        :amp-scores="form.teleopAmpScored"
        :amp-missed="form.teleopAmpMissed"
        :speaker-score="form.teleopSpeakerScored"
        :speaker-missed="form.teleopSpeakerMissed"
        :foul="form.teleopFoul"
        :trap-scored="form.teleopTrapScored"
        :coopertition="form.coopertition"
        @change="onTeleopChange"></TeleopCard>
    </v-col>
    <v-col>
      <EndGameCard 
        :end-position="form.endPosition"
        :harmony="form.harmony"
        @change="onEndGameChange"></EndGameCard>
    </v-col>
    <v-col>
      <PostMatchCard 
        :offense-skill="form.offenseSkill"
        :defense-skill="form.defenseSkill"
        :human-player-rating="form.humanPlayerRating"
        :driver-rating="form.driverRating"
        :strategy-rating="form.strategyRating"
        :cycle-time="form.cycleTime"
        :died="form.died"
        :card="form.card"
        :comments="form.comments"
        :tipped-over="form.tippedOver"
        @change="onPostMatchChange"></PostMatchCard>
    </v-col>
  </v-row>
  <v-row class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1 mb-4">
    <v-btn size="x-large" @click="onSubmit">提交</v-btn>
    <v-btn size="x-large" class="ml-5" @click="onReset">重置</v-btn>
  </v-row>
</template>
