<script setup lang="ts">
import { ref } from 'vue';

const positions = [
  "无爬升",
  "爬升失败",
  "停车",
  "Stage",
  "Spotlight"
]

const harmonies = [
  "未完成",
  "1 链",
  "2 链",
  "3 链"
]

const props = defineProps<{
  endPosition: string,
  harmony: string
}>()

const form = {
  endPosition: props.endPosition,
  harmony: props.harmony
}

const emits = defineEmits<{
  (e: 'change', endPosition: string, harmony: string): void
}>()

const endPositionRef = ref(form.endPosition)
const harmonyRef = ref(form.harmony)

function onUpdate() {
  emits('change', endPositionRef.value, harmonyRef.value)
}
</script>

<template>
  <v-container>
    <v-row>
      <v-sheet class="text-center" elevation="2" width="100%" rounded>
        <v-container>
          <h3>结束</h3>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container>
          <v-select label="结束位置" @update:focused="onUpdate" :items="positions" v-model="endPositionRef"></v-select>
          <v-select label="Harmony" @update:focused="onUpdate" :items="harmonies" v-model="harmonyRef" hide-details></v-select>
        </v-container>
      </v-sheet>
    </v-row>
  </v-container>
</template>