<script setup lang="ts">
import { ref } from 'vue';

const cards = [
  "无",
  "黄牌",
  "红牌"
]

const props = defineProps<{
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
}>()

const form = {
  offenseSkill: props.offenseSkill,
  defenseSkill: props.defenseSkill,
  humanPlayerRating: props.humanPlayerRating,
  driverRating: props.driverRating,
  strategyRating: props.strategyRating,
  cycleTime: props.cycleTime,
  died: props.died,
  tippedOver: props.tippedOver,
  card: props.card,
  comments: props.comments
}

const offenseSkillRef = ref(form.offenseSkill)
const defenseSkillRef = ref(form.defenseSkill)
const humanPlayerRatingRef = ref(form.humanPlayerRating)
const driverRatingRef = ref(form.driverRating)
const strategyRatingRef = ref(form.strategyRating)
const cycleTimeRef = ref(form.cycleTime)
const diedRef = ref(form.died)
const tippedOverRef = ref(form.tippedOver)
const cardRef = ref(form.card)
const commentsRef = ref(form.comments)

const emits = defineEmits<{
  (
    e: 'change', 
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
  ): void
}>()

function onUpdate() {
  emits(
    'change', 
    offenseSkillRef.value, 
    defenseSkillRef.value,
    humanPlayerRatingRef.value,
    driverRatingRef.value,
    strategyRatingRef.value,
    cycleTimeRef.value,
    diedRef.value,
    tippedOverRef.value,
    cardRef.value,
    commentsRef.value
  )
}
</script>

<template>
  <v-container>
    <v-row>
      <v-sheet class="text-center" elevation="2" width="100%" rounded>
        <v-container>
          <h3>总结</h3>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container>
          <v-slider label="攻击能力" @end="onUpdate" :min="0" :max="10" :step="1" thumb-label v-model="offenseSkillRef"></v-slider>
          <v-slider label="防守能力" @end="onUpdate" :min="0" :max="10" :step="1" thumb-label v-model="defenseSkillRef" hide-details></v-slider>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container>
          <v-slider label="HP 评分" @end="onUpdate" :min="0" :max="10" :step="1" thumb-label v-model="humanPlayerRatingRef"></v-slider>
          <v-slider label="Driver 评分" @end="onUpdate" :min="0" :max="10" :step="1" thumb-label v-model="driverRatingRef"></v-slider>
          <v-slider label="战术评分" @end="onUpdate" :min="0" :max="10" :step="1" thumb-label v-model="strategyRatingRef" hide-details></v-slider>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container>
          <v-text-field label="Cycle 时间" @update:focused="onUpdate" v-model="cycleTimeRef" hide-details></v-text-field>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="pt-0 pb-0">
          <v-checkbox label="失去移动能力" @change="onUpdate" v-model="diedRef" hide-details></v-checkbox>
          <v-checkbox label="侧翻" @change="onUpdate" v-model="tippedOverRef" hide-details></v-checkbox>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container>
          <v-select label="黄牌 / 红牌" @update:focused="onUpdate" :items="cards" v-model="cardRef"></v-select>
          <v-text-field label="评论" v-model="commentsRef" @update:focused="onUpdate" hide-details></v-text-field>
        </v-container>
      </v-sheet>
    </v-row>
  </v-container>
</template>