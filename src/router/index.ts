import { createRouter, createWebHistory } from 'vue-router'
import ScoutingView from '../views/ScoutingView.vue'
import TeamsView from '@/views/TeamsView.vue'

export const routes = [
  {
    path: '/scouting',
    name: 'Scouting',
    component: ScoutingView
  },
  {
    path: '/teams',
    name: 'Teams',
    component: TeamsView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
