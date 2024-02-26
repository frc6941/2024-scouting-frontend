<script setup lang="ts">
import { apiBaseUrl } from '@/main';
import axios from 'axios';
import queryString from 'query-string';
import { ref } from 'vue';

const teamNumberRef = ref('')
const canAmpRef = ref(false)
const canSpeakerRef = ref(false)
const canTrapRef = ref(false)
const robotPictureRef = ref<File[] | undefined>()
const chassisTypeRef = ref('')
const cycleTimeRef = ref(0)
const autoTypeRef = ref('')

function onSubmit() {
  if (robotPictureRef.value === undefined) {
    axios.post(apiBaseUrl + '/api/pit/team', queryString.stringify({
      teamNumber: teamNumberRef.value,
      canAmp: canAmpRef.value,
      canSpeaker: canSpeakerRef.value,
      canTrap: canTrapRef.value,
      chassisType: chassisTypeRef.value,
      cycleTime: cycleTimeRef.value,
      autoType: autoTypeRef.value,
      pictureUrl: ''
    })).then(() => {
      location.reload()
    }).catch(e => {
      console.log(e)
      alert(e)
    })
    return
  }
  const form = new FormData()
  form.append("smfile", robotPictureRef.value[0])
  axios.post('/api/v2/upload', 
    form,
    {
      data: form,
      withCredentials: false,
      headers: {
        'Authorization': 'Basic T6C4ASy4q9HI7j8Cgyy0tvYsbpq0VRFF'
      }
    }
  ).then(response => {
    axios.post(apiBaseUrl + '/api/pit/team', queryString.stringify({
      teamNumber: teamNumberRef.value,
      canAmp: canAmpRef.value,
      canSpeaker: canSpeakerRef.value,
      canTrap: canTrapRef.value,
      chassisType: chassisTypeRef.value,
      cycleTime: cycleTimeRef.value,
      autoType: autoTypeRef.value,
      pictureUrl: response.data.message.url
    })).then(() => {
      location.reload()
    }).catch(e => {
      console.log(e)
      alert(e)
    })
  }).catch(e => {
    console.log(e)
    alert(e)
  })
}

function onReset() {
  location.reload()
}
</script>

<template>
  <v-container class="pl-10 pr-10 pt-6">
    <v-row>
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container>
          <v-text-field label="队伍号" v-model="teamNumberRef" hide-details></v-text-field>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="text-center" elevation="2" width="100%" rounded>
        <v-container>
          <v-file-input
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick a robot picture."
            prepend-icon="mdi-camera"
            label="机器图片"
            v-model="robotPictureRef"
            hide-details
          ></v-file-input>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="text-center" elevation="2" width="100%" rounded>
        <v-container class="pt-0 pb-0">
          <v-checkbox label="能放 Amp" v-model="canAmpRef" hide-details></v-checkbox>
          <v-checkbox label="能投 Speaker" v-model="canSpeakerRef" hide-details></v-checkbox>
          <v-checkbox label="能放 Trap" v-model="canTrapRef" hide-details></v-checkbox>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="mt-6">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1" elevation="2" width="100%" rounded>
        <v-container>
          <v-text-field label="底盘类型" v-model="chassisTypeRef"></v-text-field>
          <v-text-field label="Cycle 时间" v-model="cycleTimeRef"></v-text-field>
          <v-text-field label="自动类型" v-model="autoTypeRef" hide-details></v-text-field>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row class="d-flex align-center justify-center flex-wrap text-center mx-auto px-1 mb-4 mt-6">
      <v-btn size="x-large" @click="onSubmit">提交</v-btn>
      <v-btn size="x-large" class="ml-5" @click="onReset">重置</v-btn>
    </v-row>
  </v-container>
</template>