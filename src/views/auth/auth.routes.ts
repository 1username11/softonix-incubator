import type { RouteRecordRaw } from 'vue-router'
import Login from '@/views/auth/Login.vue'
import Registration from '@/views/auth/Registration.vue'

export const authRoutesNames = {
  login: 'login',
  registration: 'registration'
}

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: authRoutesNames.login,
    component: Login
  },
  {
    path: '/sign-up',
    name: authRoutesNames.registration,
    component: Registration
  }
]
