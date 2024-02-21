import { createRouter, createWebHistory } from 'vue-router'
import ScoutingView from '../views/ScoutingView.vue'
import TeamsView from '@/views/TeamsView.vue'
import OverView from '@/views/OverView.vue'

export const routes = [
  {
    path: '/scouting',
    name: 'Scouting',
    component: ScoutingView
  },
  {
    path: '/teams',
    name: '队伍',
    component: TeamsView
  },
  {
    path: '/',
    name: '概要',
    component: OverView
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
