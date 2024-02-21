<script setup lang="ts">
import ScoreCounter from "@/components/ScoreCounter.vue"
import { ref } from "vue";

const props = defineProps<{
  ampScores: number,
  ampMissed: number,
  speakerScore: number,
  speakerMissed: number,
  foul: number
}>()

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

const ampScores = ref(props.ampScores)
const ampMissed = ref(props.ampMissed)
const speakerScore = ref(props.speakerScore)
const speakerMissed = ref(props.speakerMissed)
const foul = ref(props.foul)

function onAmpScoreChange(score: number) {
  ampScores.value = score
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
          <ScoreCounter :score="props.ampScores" @change="onAmpScoreChange"></ScoreCounter>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="mt-1">
          <v-row class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1">
            <h4>Amp 未投进</h4>
          </v-row>
          <ScoreCounter :score="props.ampMissed"></ScoreCounter>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="mt-1">
          <v-row class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1">
            <h4>Speaker 得分</h4>
          </v-row>
          <ScoreCounter :score="props.speakerScore"></ScoreCounter>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="mt-1">
          <v-row class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1">
            <h4>Speaker 未投进</h4>
          </v-row>
          <ScoreCounter :score="props.speakerMissed"></ScoreCounter>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="mt-1">
          <v-row class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1">
            <h4>犯规</h4>
          </v-row>
          <ScoreCounter :score="props.foul" ></ScoreCounter>
        </v-container>
      </v-sheet>
    </v-row>
  </v-container>
</template>