import type { RouteRecordRaw } from 'vue-router'
import Registration from '@/views/registration/Registration.vue'

export const registrationRoutesNames = {
  registration: 'registration'
}

export const registrationRoutes: RouteRecordRaw[] = [
  {
    path: '/sign-up',
    name: registrationRoutesNames.registration,
    component: Registration
  }
]
