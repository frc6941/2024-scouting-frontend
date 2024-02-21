<script setup lang="ts">
import TeamPreviewCard from '@/components/TeamPreivewCard.vue'
</script>

<template>
  <v-container>
    <v-row justify="space-between">
      <v-col
        v-for="n in 24"
        :key="n"
        cols="3"
      >
        <TeamPreviewCard 
          class="pa-2 ma-2" 
          :team="6941"
          achievement="0-0-0"
        ></TeamPreviewCard>
      </v-col>
    </v-row>
  </v-container>
</template>