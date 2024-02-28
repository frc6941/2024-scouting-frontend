<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'vuetify'

function isDarkTheme(): boolean {
  return useTheme().global.name.value === 'dark'
}

const props = defineProps<{
  score: number
}>()

const emits = defineEmits<{
  (e: 'change', score: number): void
}>()

const score = ref(props.score)

function plus() {
  score.value += 1
  emits('change', score.value)
}

function minus() {
  if (score.value == 0) {
    return
  }
  score.value -= 1
  emits('change', score.value)
}
</script>

<template>
  <v-row class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1">
    <v-col>
      <v-btn
        :style="{ backgroundColor: isDarkTheme() ? '#424242' : '#FFFFFF' }"
        icon="mdi-minus"
        @click="minus"
      ></v-btn>
    </v-col>
    <v-col>
      <p>{{ score }}</p>
    </v-col>
    <v-col>
      <v-btn
        color="button"
        :style="{ backgroundColor: isDarkTheme() ? '#424242' : '#FFFFFF' }"
        icon="mdi-plus"
        @click="plus"
      ></v-btn>
    </v-col>
  </v-row>
</template>

<style></style>
