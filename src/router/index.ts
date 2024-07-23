import { createRouter, createWebHistory } from 'vue-router'
import Routes from './Routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Routes
})

export default router

