import { createRouter, createWebHistory } from 'vue-router'
import ScoutingView from '../views/ScoutingView.vue'

export const routes = [
  {
    path: '/',
    name: 'Scouting',
    component: ScoutingView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
