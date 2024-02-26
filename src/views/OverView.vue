<script setup lang="ts">
import { apiBaseUrl } from '@/main'
import axios from 'axios'
import { type Ref, ref } from 'vue'
interface TotalTeamData {
  teamNumber: string
  numberOfRecords: number
  totalAutoScore: number
  totalTeleopScore: number
  totalEndGameScore: number
  totalDriverScore: number
}
export interface AverageTeamData {
  teamNumber: string
  numberOfRecords: number
  averageAutoScore: number
  averageTeleopScore: number
  averageEndGameScore: number
  averageDriverScore: number
}
const endGameScoreMap: Map<string, number> = new Map([
  ['无爬升', 0],
  ['爬升失败', 1],
  ['停车', 1],
  ['Stage', 3],
  ['Spotlight', 5]
])

const headers = [
  { title: "队伍", value: "teamNumber" },
  { title: "平均自动得分", key: "averageAutoScore" },
  { title: "平均手动得分", key: "averageTeleopScore" },
  { title: "平均结束得分", key: "averageEndGameScore" },
  { title: "平均Driver得分", key: "averageDriverScore" },
]
function roundToDecimal(num: number, decimalPlaces: number): number {
  const multiplier = Math.pow(10, decimalPlaces);
  return Math.round(num * multiplier) / multiplier;
}


const scoutingData: Ref<any[]> = ref([])
const totalTeamData: Ref<TotalTeamData[]> = ref([])
const averageTeamData: Ref<AverageTeamData[]> = ref([])

function calculateTotalTeamData(data: any) {
  const teamNumber = data.teamNumber
  const autoScore = data.autoAmpScored + data.autoSpeakerScored
  const teleopScore = data.teleopAmpScored + data.teleopSpeakerScored
  const endGameScore = endGameScoreMap.get(data.endPosition) + data.teleopTrap
  const driverScore = data.driverRating
  if (!totalTeamData.value[teamNumber]) {
    totalTeamData.value[teamNumber] = {
      teamNumber: teamNumber,
      totalDriverScore: driverScore,
      totalEndGameScore: endGameScore,
      totalAutoScore: autoScore,
      totalTeleopScore: teleopScore,
      numberOfRecords: 1
    }
  } else {
    totalTeamData.value[teamNumber].numberOfRecords += 1
    totalTeamData.value[teamNumber].totalAutoScore += autoScore
    totalTeamData.value[teamNumber].totalTeleopScore += teleopScore
    totalTeamData.value[teamNumber].totalEndGameScore += endGameScore
  }
}

function calculateAverageTeamData(totalTeamData: Ref<TotalTeamData[]>) {
  totalTeamData.value.forEach((teamData) => {
    const averageAutoScore = roundToDecimal(teamData.totalAutoScore / teamData.numberOfRecords, 2)
    const averageTeleopScore = roundToDecimal(teamData.totalTeleopScore / teamData.numberOfRecords, 2)
    const averageEndGameScore = roundToDecimal(teamData.totalEndGameScore / teamData.numberOfRecords, 2)
    const averageDriverScore = roundToDecimal(teamData.totalDriverScore / teamData.numberOfRecords, 2)

    const averageData: AverageTeamData = {
      teamNumber: teamData.teamNumber,
      numberOfRecords: teamData.numberOfRecords,
      averageAutoScore,
      averageTeleopScore,
      averageEndGameScore,
      averageDriverScore
    }
    averageTeamData.value.push(averageData)
  })
}

axios
  .get(apiBaseUrl + '/api/records')
  .then((response) => {
    scoutingData.value = response.data
    console.log(scoutingData.value)
    scoutingData.value.forEach((data: any) => {
      calculateTotalTeamData(data)
    })
  })
  .then(() => {
    calculateAverageTeamData(totalTeamData)
    console.log(averageTeamData.value)
  })
  .catch((e) => alert(e))

</script>

<template>
  <v-container>
    <v-row class="ml-6 mr-6 mt-1">
      <v-data-table :items="averageTeamData" :headers="headers">
      </v-data-table>
    </v-row>
  </v-container>
</template>
