<template>
  <div class="relative inline-block w-[350px] text-gray-700">
    <select
      v-model="selectedDepartments"
      class="block w-full rounded-md bg-white border border-gray-400
        hover:border-gray-500 px-4 py-2 pr-8 focus:outline-none focus:shadow-outline-blue focus:border-blue-500"
      multiple
    >
      <option
        v-for="department in departments"
        :key="department"
        :value="department"
      >
        {{ department }}
      </option>
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path
          d="M9.293 11.707a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L10 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5z"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { jobOpenings } from '@/_homework/job-openings'

const selectedDepartments = ref<string[]>([])
const departments = computed(() => {
  const departments = new Set()
  jobOpenings.forEach((jobOpening) => {
    jobOpening.departments.forEach((department) => {
      departments.add(department)
    })
  })
  return Array.from(departments)
})
const filteredJobOpenings = computed(() => {
  if (selectedDepartments.value.length === 0) {
    return jobOpenings
  }
  return jobOpenings.filter((jobOpening) => {
    return jobOpening.departments.some((department) => {
      return selectedDepartments.value.includes(department)
    })
  })
})
</script>

<style scoped>

</style>
