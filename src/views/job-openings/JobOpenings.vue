<template>
  <div class="flex flex-row justify-between">
    <Multiselect
      v-model="selectedDepartments"
      :options="preparedDepartments"
      @update:modelValue="jobOpeningsFilter"
    />
    <div v-if="filteredJobOpenings.length > 5" class="flex gap-0.5">
      <button
        class="border border-blue-400 px-2 py-1 rounded-lg text-blue-400 "
        @click="paginationStep += 5"
      >
        Show more
      </button>
      <div class="p-2   text-gray-medium text-sm">
        {{ filteredJobOpeningsPagination.length }} out of {{ filteredJobOpenings.length }}
      </div>
    </div>
  </div>

  <div class="flex flex-wrap">
    <JobOpeningCard
      v-for="jobOpening in filteredJobOpeningsPagination"
      :key="jobOpening.id"
      :jobOpening="jobOpening"
    />
  </div>
</template>

<script lang="ts" setup>
import JobOpeningCard from '@/views/job-openings/components/JobOpeningCard.vue'
import Multiselect from '@/views/job-openings/components/Multiselect.vue'
import { useJobOpeningsStore } from '@/views/job-openings/job-openings.store'

const jobOpeningsStore = useJobOpeningsStore()
const {
  selectedDepartments,
  filteredJobOpenings,
  filteredJobOpeningsPagination,
  paginationStep
} = storeToRefs(jobOpeningsStore)
const { preparedDepartments, jobOpeningsFilter } = jobOpeningsStore
</script>
