<script setup lang="ts">
defineProps<{
  data: string,
  title: string
}>()
</script>

<template>
  <v-sheet class="pa-3" elevation="2" width="100%" rounded>
    <p class="mb-2">{{ title }}</p>

    <h1 class="mb-2">{{ data }}</h1>
  </v-sheet>
</template>