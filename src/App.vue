<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const drawer = ref(false)

const theme = useTheme()

const icon = ref('mdi-white-balance-sunny')

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  icon.value = theme.global.current.value.dark
    ? 'mdi-moon-waning-crescent'
    : 'mdi-white-balance-sunny'
}
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-view-agenda"
          title="概要"
          to="/"
          value="overview"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-pen"
          title="Scouting"
          to="/scouting"
          value="scouting"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-pen"
          title="Pit Scouting"
          to="/scouting-pit"
          value="pit-scouting"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-multiple"
          title="队伍"
          to="/teams"
          value="about"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>2024 Crescendo Scouting</v-app-bar-title>
      <template v-slot:append>
        <v-btn :icon="icon" @click="toggleTheme"></v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <RouterView></RouterView>
    </v-main>
    <v-footer
    color="background"
    >
      <v-col class="text-center mt-4">
        © {{ new Date().getFullYear() }} — <strong>IronPulse 6941</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<style>
.v-footer {
  max-height: 60px;
}
</style>
