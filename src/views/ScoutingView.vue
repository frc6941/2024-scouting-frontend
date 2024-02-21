<script setup lang="ts">
import PreMatchCard from '@/components/PreMatchCard.vue';
import AutonomousCard from '@/components/AutonomousCard.vue'

const form = {
  autoAmpScores: 0,
  autoAmpMissed: 0,
  autoSpeakerScore: 0,
  autoSpeakerMissed: 0,
  autoFoul: 0
}

function onAutonomousChange(
  ampScores: number, 
  ampMissed: number, 
  speakerScore: number, 
  speakerMissed: number, 
  foul: number
) {
  form.autoAmpScores = ampScores
  form.autoAmpMissed = ampMissed
  form.autoSpeakerScore = speakerScore
  form.autoSpeakerMissed = speakerMissed
  form.autoFoul = foul
}

</script>

<template>
  <v-row class="ml-6 mr-6 mt-1">
    <v-col>
      <PreMatchCard></PreMatchCard>
    </v-col>
    <v-col>
      <AutonomousCard 
        :amp-scores="form.autoAmpScores"
        :amp-missed="form.autoAmpMissed"
        :speaker-score="form.autoSpeakerScore"
        :speaker-missed="form.autoSpeakerMissed"
        :foul="form.autoFoul"
        @change="onAutonomousChange"
      ></AutonomousCard>
    </v-col>
    <v-col>
      <PreMatchCard></PreMatchCard>
    </v-col>
    <v-col>
      <PreMatchCard></PreMatchCard>
    </v-col>
    <v-col>
      <PreMatchCard></PreMatchCard>
    </v-col>
  </v-row>
</template>
