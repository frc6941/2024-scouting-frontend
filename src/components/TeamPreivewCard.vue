<script setup lang="ts">
defineProps<{
  team: number,
  achievement: string
}>()
</script>

<template>
  <v-card elevation="3">
    <v-card-title>{{ team }}</v-card-title>
    <v-card-text>
      战绩: {{ achievement }}
    </v-card-text>
    <v-card-actions>
      <v-btn variant="tonal">信息</v-btn>
    </v-card-actions>
  </v-card>
</template>