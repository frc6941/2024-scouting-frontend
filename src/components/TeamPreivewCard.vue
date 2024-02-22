<script setup lang="ts">
defineProps<{
  team: number
}>()
</script>

<template>
  <v-card elevation="3">
    <v-card-title>Team {{ team }}</v-card-title>
    <v-card-actions>
      <v-btn variant="tonal"><router-link :to="'/team/' + team">信息</router-link></v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style>