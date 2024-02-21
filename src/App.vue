<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(false)
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Scout" to="/scouting" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Analyze" to="/analyze" value="about"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>2024 Crescendo Scouting</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <RouterView></RouterView>
    </v-main>
  </v-app>
</template>