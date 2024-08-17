import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/authentication/Login.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
   /* {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    } */
  ]
})

export default router
