import type { RouteRecordRaw } from 'vue-router'

import JobOpenings from '@/views/job-openings/JobOpenings.vue'

export const jobOpeningsRouteNames = {
  jobOpenings: 'JobOpenings'
}

export const jobOpeningsRoutes: RouteRecordRaw[] = [
  {
    path: '/job-openings',
    name: jobOpeningsRouteNames.jobOpenings,
    component: JobOpenings
  }
]
