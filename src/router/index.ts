import { createRouter, createWebHistory } from 'vue-router'
import ScoutingView from '../views/ScoutingView.vue'
import AnalyzeView from '@/views/AnalyzeView.vue'

export const routes = [
  {
    path: '/scouting',
    name: 'Scouting',
    component: ScoutingView
  },
  {
    path: '/analyze',
    name: 'Analyze',
    component: AnalyzeView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
