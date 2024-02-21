<script setup lang="ts">
import { ref } from 'vue';
import ScoreCounter from '@/components/ScoreCounter.vue'

const props = defineProps<{
  coopertition: boolean,
  ampScores: number,
  ampMissed: number,
  speakerScore: number,
  speakerMissed: number,
  trapScored: number,
  foul: number
}>()

const form = {
  coopertition: props.coopertition,
  ampScores: props.ampScores,
  ampMissed: props.ampMissed,
  speakerScore: props.speakerScore,
  speakerMissed: props.speakerMissed,
  trapScored: props.trapScored,
  foul: props.foul
}

const emits = defineEmits<{
  (
    e: 'change', 
    coopertition: boolean,
    ampScores: number,
    ampMissed: number,
    speakerScore: number,
    speakerMissed: number,
    trapScored: number,
    foul: number
  ): void
}>()

const coopertitionRef = ref(form.coopertition)
const ampScoresRef = ref(form.ampScores)
const ampMissedRef = ref(form.ampMissed)
const speakerScoreRef = ref(form.speakerScore)
const speakerMissedRef = ref(form.speakerMissed)
const foulRef = ref(form.foul)
const trapScoredRef = ref(form.trapScored)

function onAmpScoreChange(score: number) {
  ampScoresRef.value = score
  onChange()
}

function onAmpMissedChange(score: number) {
  ampMissedRef.value = score
  onChange()
}

function onSpeakerScoreChange(score: number) {
  speakerScoreRef.value = score
  onChange()
}

function onSpeakerMissedChange(score: number) {
  speakerMissedRef.value = score
  onChange()
}

function onFoulChange(score: number) {
  foulRef.value = score
  onChange()
}

function onTrapScoreChange(score: number) {
  trapScoredRef.value = score
  onChange()
}

function onChange() {
  emits(
    'change', 
    coopertitionRef.value,
    ampScoresRef.value, 
    ampMissedRef.value, 
    speakerScoreRef.value, 
    speakerMissedRef.value, 
    trapScoredRef.value,
    foulRef.value
  )
}
</script>

<template>
  <v-container>
    <v-row>
      <v-sheet class="text-center" elevation="2" width="100%" rounded>
        <v-container>
          <h3>手动</h3>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="pt-0 pb-0">
          <v-checkbox label="Coopertition" @update:focused="onChange" v-model="coopertitionRef" hide-details></v-checkbox>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="mt-1">
          <v-row class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1">
            <h4>Amp 得分</h4>
          </v-row>
          <ScoreCounter :score="form.ampScores" @change="onAmpScoreChange"></ScoreCounter>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="mt-1">
          <v-row class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1">
            <h4>Amp 未投进</h4>
          </v-row>
          <ScoreCounter :score="form.ampMissed" @change="onAmpMissedChange"></ScoreCounter>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="mt-1">
          <v-row class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1">
            <h4>Speaker 得分</h4>
          </v-row>
          <ScoreCounter :score="form.speakerScore" @change="onSpeakerScoreChange"></ScoreCounter>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="mt-1">
          <v-row class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1">
            <h4>Speaker 未投进</h4>
          </v-row>
          <ScoreCounter :score="form.speakerMissed" @change="onSpeakerMissedChange"></ScoreCounter>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="mt-1">
          <v-row class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1">
            <h4>Trap 得分</h4>
          </v-row>
          <ScoreCounter :score="form.trapScored" @change="onTrapScoreChange"></ScoreCounter>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="mt-1">
          <v-row class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1">
            <h4>犯规</h4>
          </v-row>
          <ScoreCounter :score="form.foul" @change="onFoulChange"></ScoreCounter>
        </v-container>
      </v-sheet>
    </v-row>
  </v-container>
</template>