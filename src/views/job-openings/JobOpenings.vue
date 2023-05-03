<template>
  <div class="flex flex-row justify-between">
    <Multiselect
      v-model="selectedDepartments"
      :options="preparedDepartments"
      @update:modelValue="jobOpeningsFilter"
    />
    <div v-if="!showMore" class="flex items-center">
      <AppButton @click="toggle = !toggle"> {{ toggle ? 'Show less' : 'Show more' }}</AppButton>
    </div>
    <div class="">Showing {{ jobOpeningView().length }} out of {{ preparedJobOpenings.length }} job openings</div>
  </div>

  <div class="flex flex-wrap">
    <JobOpeningCard
      v-for="jobOpening in jobOpeningView()"
      :key="jobOpening.id"
      :departments="jobOpening.departments.join(', ')"
      :title="jobOpening.title"
      :url="jobOpening.url"
    />
  </div>
</template>

<script lang="ts" setup>
import JobOpeningCard from '@/views/job-openings/components/JobOpeningCard.vue'
import Multiselect from '@/views/job-openings/components/Multiselect.vue'
import { useJobOpeningsStore } from '@/views/job-openings/job-openings.store'

const jobOpeningsStore = useJobOpeningsStore()
const { showMore, toggle, selectedDepartments, preparedJobOpenings, filteredJobOpenings } = storeToRefs(jobOpeningsStore)
const { preparedDepartments, jobOpeningsFilter, jobOpeningView } = jobOpeningsStore

</script>
