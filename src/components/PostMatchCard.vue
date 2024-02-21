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

const form = {
  offenseSkill: '',
  defenseSkill: '',
  died: false,
  tippedOver: false,
  card: '',
  comments: ''
}

const offenseSkillRef = ref(form.offenseSkill)
const defenseSkillRef = ref(form.defenseSkill)
const died = ref(form.died)
const tippedOver = ref(form.tippedOver)
const cardRef = ref(form.card)
const comments = ref(form.comments)

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
    died.value,
    tippedOver.value,
    cardRef.value,
    comments.value
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
          <v-select label="攻击能力" @update:model-value="onUpdate" :items="skills" v-model="offenseSkillRef"></v-select>
          <v-select label="防守能力" @update:model-value="onUpdate" :items="skills" v-model="defenseSkillRef" hide-details></v-select>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container>
          <v-checkbox label="失去移动能力" @update:focused="onUpdate" v-model="died" hide-details></v-checkbox>
          <v-checkbox label="侧翻" @update:focused="onUpdate" v-model="tippedOver" hide-details></v-checkbox>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container>
          <v-select label="黄牌 / 红牌" @update:model-value="onUpdate" :items="cards" v-model="cardRef"></v-select>
          <v-text-field label="评论" v-model="comments" @update:model-value="onUpdate" hide-details></v-text-field>
        </v-container>
      </v-sheet>
    </v-row>
  </v-container>
</template>