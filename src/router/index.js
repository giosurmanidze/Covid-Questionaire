import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import PrivateInfo from '../pages/PrivateInfo.vue'
import CovidCondition from '../pages/CovidCondition.vue'
import Vaccination from '../pages/Vaccination.vue'
import Tips from '../pages/Tips.vue'
import Thanks from '../pages/Thanks.vue'

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
    {
      path: '/tips',
      name: 'tips',
      component: Tips
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: Thanks
    }
  ]
})

export default router
