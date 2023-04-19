import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import AboutUs from '@/views/AboutUs.vue'
import Destinations from '@/views/Destinations.vue'
import Tours from '@/views/Tours.vue'
import Blog from '@/views/Blog.vue'

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
      components: Home
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      components: AboutUs
    },
    {
      path: '/destinations',
      name: 'Destinations',
      components: Destinations
    },
    {
      path: '/tours',
      name: 'Tours',
      components: Tours
    },
    {
      path: '/blog',
      name: 'Blog',
      components: Blog
    }
  ]
})
