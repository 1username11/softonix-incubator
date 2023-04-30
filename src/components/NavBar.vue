<template>
  <nav class="bg-gray-300">
    <div class="mx-auto py-3">
      <ul class="flex space-x-3">
        <li v-for="navigationItem in navigation" :key="navigationItem.name" class="mr-6">
          <router-link
            :to="{ name: navigationItem.to }"
            class="text-gray-600"
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
