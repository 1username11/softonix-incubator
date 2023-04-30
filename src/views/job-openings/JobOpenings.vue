<template>
  <div>
    <Multiselect
      v-model="selectedDepartments"
      class="border border-gray-medium"
      :options="departments"
      :multiple="true"
      :close-on-select="true"
      placeholder="Pick some"
      label="name"
      track-by="name"
    />
    <div class="text-gray-700 ">
      <select
        v-model="selectedDepartments"
        class="block w-full rounded-md bg-white border border-gray-400 h-8
        hover:h-[500px] px-4 py-2 pr-8 focus:outline-none focus:shadow-outline-blue focus:border-blue-500"
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
      <div>
        {{ selectedDepartments }}
      </div>
    </div>
    <div class="flex flex-wrap">
      <JobOpeningCard
        v-for="jobOpening in filteredJobOpenings"
        :key="jobOpening.id"
        :title="jobOpening.title"
        :departments="jobOpening.departments.join(', ')"
        :url="jobOpening.url"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import JobOpeningCard from '@/views/job-openings/components/JobOpeningCard.vue'
import { jobOpenings } from '@/_homework/job-openings'
import Multiselect from '@vueform/multiselect'

const selectedDepartments = ref<string[]>([])
const departments = computed(() => {
  const departmentSet = new Set<string>()
  jobOpenings.forEach(jobOpening => {
    if (!jobOpening.isClosed) {
      jobOpening.departments.forEach(department => {
        departmentSet.add(department)
      })
    }
  })
  const departmentsWithOpenings = Array.from(departmentSet)
  return departmentsWithOpenings
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
