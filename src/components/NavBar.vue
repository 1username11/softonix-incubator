<template>
  <nav class="bg-gray-300">
    <div class="mx-auto py-3">
      <ul class="flex space-x-3">
        <li v-for="navigationItem in navigation" :key="navigationItem.name">
          <router-link
            :to="{ name: navigationItem.to }"
            active-class="font-bold"
          >
            {{ navigationItem.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { routeNames } from '@/router'

const navigation = [
  {
    to: routeNames.contacts,
    name: 'Contacts'
  },
  {
    to: routeNames.jobOpenings,
    name: 'JobOpenings'
  }
]
</script>

<style scoped>

</style>
