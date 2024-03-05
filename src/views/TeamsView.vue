<script setup lang="ts">
import TeamPreviewCard from '@/components/TeamPreivewCard.vue'
import { apiBaseUrl } from '@/main';
import axios from 'axios';
import { type Ref, ref } from 'vue';

const teams: Ref<Array<number>> = ref([])

axios.get(apiBaseUrl + '/api/teams')
  .then(response => teams.value = response.data)
  .then(() => {teams.value = teams.value.sort((a, b) => a - b)})
  .catch(e => alert(e))
</script>

<template>
  <v-container>
    <v-row>
      <v-col
        v-for="team in teams"
        :key="team"
        cols="12" sm="6" lg="3"
      >
        <TeamPreviewCard 
          class="pa-2 ma-2" 
          :team="team"
        ></TeamPreviewCard>
      </v-col>
    </v-row>
  </v-container>
</template>