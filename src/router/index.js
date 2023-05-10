import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import PrivateInfo from '../pages/PrivateInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/private-info',
      name: 'private-info',
      component: PrivateInfo
    }
  ]
})

export default router
