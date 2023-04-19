import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import AboutUs from '@/views/AboutUs.vue'
import Destinations from '@/views/Destinations.vue'
import Blog from '@/views/Blog.vue'
import Tours from '@/views/Tours.vue'

export const routerNames = {
  home: 'Home',
  aboutUs: 'AboutUs',
  destinations: 'Destinations',
  tours: 'Tours',
  blog: 'Blog'
}
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/destinations',
      name: 'Destinations',
      component: Destinations
    },
    {
      path: '/tours',
      name: 'Tours',
      component: Tours
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
  ]
})
