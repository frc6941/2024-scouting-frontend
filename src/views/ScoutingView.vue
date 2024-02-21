<script setup lang="ts">
import PreMatchCard from '@/components/PreMatchCard.vue';
import AutonomousCard from '@/components/AutonomousCard.vue'
import TeleopCard from '@/components/TeleopCard.vue'
import EndGameCard from '@/components/EndGameCard.vue';
import PostMatchCard from '@/components/PostMatchCard.vue';

import { getCookie, setCookie, removeCookie } from 'typescript-cookie'

const savedForm = getCookie('form')

interface Form {
  scouter: string,
    matchNumber: string,
    teamNumber: string,
    allianceRobot: string,
    hpAtAmp: boolean,
    robotAbsent: boolean,
  
    mobile: boolean,
    autoAmpScores: number,
    autoAmpMissed: number,
    autoSpeakerScore: number,
    autoSpeakerMissed: number,
    autoFoul: number,

    coopertition: boolean,
    teleopAmpScores: number,
    teleopAmpMissed: number,
    teleopSpeakerScore: number,
    teleopSpeakerMissed: number,
    teleopTrapScored: number,
    teleopFoul: number,

    endPosition: string,
    harmony: string,

    offenseSkill: string,
    defenseSkill: string,
    died: boolean,
    tippedOver: boolean,
    card: string,
    comments: string
}

let form: Form

if (savedForm == undefined) {
  form = {
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
    harmony: '',

    offenseSkill: '',
    defenseSkill: '',
    died: false,
    tippedOver: false,
    card: '',
    comments: ''
  }
} else {
  form = JSON.parse(savedForm)
}

function onChange() {
  onSave()
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
  form.autoAmpScores = ampScores
  form.autoAmpMissed = ampMissed
  form.autoSpeakerScore = speakerScore
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
  form.teleopAmpScores = ampScores
  form.teleopAmpMissed = ampMissed
  form.teleopSpeakerScore = speakerScore
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
  offenseSkill: string, 
  defenseSkill: string, 
  died: boolean, 
  tippedOver: boolean, 
  card: string,
  comments: string
) {
  form.offenseSkill = offenseSkill
  form.defenseSkill = defenseSkill
  form.died = died
  form.tippedOver = tippedOver
  form.card = card,
  form.comments = comments
  onChange()
}

function onSave() {
  setCookie('form', JSON.stringify(form))
}

function onSubmit() {
  removeCookie('form')
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
        :ampScores="form.autoAmpScores"
        :amp-missed="form.autoAmpMissed"
        :speaker-score="form.autoSpeakerScore"
        :speaker-missed="form.autoSpeakerMissed"
        :foul="form.autoFoul"
        @change="onAutonomousChange"></AutonomousCard>
    </v-col>
    <v-col>
      <TeleopCard 
        :amp-scores="form.teleopAmpScores"
        :amp-missed="form.teleopAmpMissed"
        :speaker-score="form.teleopSpeakerScore"
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
        :died="form.died"
        :card="form.card"
        :comments="form.comments"
        :tipped-over="form.tippedOver"
        @change="onPostMatchChange"></PostMatchCard>
    </v-col>
  </v-row>
  <v-row class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1 mb-4">
    <v-btn size="x-large" @click="onSubmit">提交</v-btn>
    <v-btn size="x-large" class="ml-5" @click="onSave">保存</v-btn>
  </v-row>
</template>
