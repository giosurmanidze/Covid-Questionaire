import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import PrivateInfo from '../pages/PrivateInfo.vue'
import CovidCondition from '../pages/CovidCondition.vue'
import Vaccination from '../pages/Vaccination.vue'

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
    },
    {
      path: '/covid-condition',
      name: 'covid-condition',
      component: CovidCondition
    },
    {
      path: '/vaccination',
      name: 'vaccination',
      component: Vaccination
    },
  ]
})

export default router
