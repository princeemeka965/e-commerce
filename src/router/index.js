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
   {
      path: '/sign-up',
      name: 'signUp',
      component: () => import('@/views/authentication/SignUp.vue')
    }
  ]
})

export default router
