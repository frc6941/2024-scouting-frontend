<script setup lang="ts">
import { ref } from 'vue';

const skills = [
  "不佳",
  "平均水平",
  "非常有效",
  "未观测"
]

const cards = [
  "无",
  "黄牌",
  "红牌"
]

const props = defineProps<{
  offenseSkill: string,
  defenseSkill: string,
  died: boolean,
  tippedOver: boolean,
  card: string,
  comments: string
}>()

const form = {
  offenseSkill: props.offenseSkill,
  defenseSkill: props.defenseSkill,
  died: props.died,
  tippedOver: props.tippedOver,
  card: props.card,
  comments: props.comments
}

const offenseSkillRef = ref(form.offenseSkill)
const defenseSkillRef = ref(form.defenseSkill)
const diedRef = ref(form.died)
const tippedOverRef = ref(form.tippedOver)
const cardRef = ref(form.card)
const commentsRef = ref(form.comments)

const emits = defineEmits<{
  (
    e: 'change', 
    offenseSkill: string, 
    defenseSkill: string, 
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
          <v-select label="攻击能力" @update:focused="onUpdate" :items="skills" v-model="offenseSkillRef"></v-select>
          <v-select label="防守能力" @update:focused="onUpdate" :items="skills" v-model="defenseSkillRef" hide-details></v-select>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container class="pt-0 pb-0">
          <v-checkbox label="失去移动能力" @update:focused="onUpdate" v-model="diedRef" hide-details></v-checkbox>
          <v-checkbox label="侧翻" @update:focused="onUpdate" v-model="tippedOverRef" hide-details></v-checkbox>
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