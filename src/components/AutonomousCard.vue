<script setup lang="ts">
import ScoreCounter from "@/components/ScoreCounter.vue"
import { ref } from "vue";

const form = {
  ampScores: 0,
  ampMissed: 0,
  speakerScore: 0,
  speakerMissed: 0,
  foul: 0
}

const emits = defineEmits<{
  (
    e: 'change', 
    ampScores: number,
    ampMissed: number,
    speakerScore: number,
    speakerMissed: number,
    foul: number
  ): void
}>()

const ampScores = ref(form.ampScores)
const ampMissed = ref(form.ampMissed)
const speakerScore = ref(form.speakerScore)
const speakerMissed = ref(form.speakerMissed)
const foul = ref(form.foul)

function onAmpScoreChange(score: number) {
  ampScores.value = score
  onChange()
}

function onAmpMissedChange(score: number) {
  ampMissed.value = score
  onChange()
}

function onSpeakerScoreChange(score: number) {
  speakerScore.value = score
  onChange()
}

function onSpeakerMissedChange(score: number) {
  speakerMissed.value = score
  onChange()
}

function onFoulChange(score: number) {
  foul.value = score
  onChange()
}

function onChange() {
  emits(
    'change', 
    ampScores.value, 
    ampMissed.value, 
    speakerScore.value, 
    speakerMissed.value, 
    foul.value
  )
}
</script>

<template>
  <v-container>
    <v-row>
      <v-sheet class="text-center" elevation="2" width="100%" rounded>
        <v-container>
          <h3>自动</h3>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="pt-0 pb-0">
          <v-checkbox label="可移动" hide-details></v-checkbox>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="mt-1">
          <v-row class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1">
            <h4>Amp 得分</h4>
          </v-row>
          <ScoreCounter @change="onAmpScoreChange"></ScoreCounter>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="mt-1">
          <v-row class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1">
            <h4>Amp 未投进</h4>
          </v-row>
          <ScoreCounter @change="onAmpMissedChange"></ScoreCounter>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="mt-1">
          <v-row class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1">
            <h4>Speaker 得分</h4>
          </v-row>
          <ScoreCounter @change="onSpeakerScoreChange"></ScoreCounter>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="mt-1">
          <v-row class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1">
            <h4>Speaker 未投进</h4>
          </v-row>
          <ScoreCounter @change="onSpeakerMissedChange"></ScoreCounter>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="mt-1">
          <v-row class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1">
            <h4>犯规</h4>
          </v-row>
          <ScoreCounter @change="onFoulChange"></ScoreCounter>
        </v-container>
      </v-sheet>
    </v-row>
  </v-container>
</template>