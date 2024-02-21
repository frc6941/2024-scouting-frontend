<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  score: number
}>()

const emits = defineEmits<{
  (e: 'change', score: number): void
}>()

const score = ref(props.score)

function plus() {
  score.value += 1
  emits("change", score.value)
}

function minus() {
  if (score.value == 0) {
    return
  }
  score.value -= 1
  emits("change", score.value)
}
</script>

<template>
  <v-row class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1">
    <v-col>
      <v-btn icon="mdi-minus" @click="minus"></v-btn>
    </v-col>
    <v-col>
      <p>{{ score }}</p>
    </v-col>
    <v-col>
      <v-btn icon="mdi-plus" @click="plus"></v-btn>
    </v-col>
  </v-row>
</template>