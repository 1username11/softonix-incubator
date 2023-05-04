import { ref } from 'vue'
import { jobOpenings } from '@/_homework/job-openings'
import { departments } from '@/_homework/departments'

export const useJobOpeningsStore =
defineStore('JobOpeningsStore', () => {
  const selectedDepartments = ref<IDepartment[]>([])
  const showMore = computed(() => {
    return !(filteredJobOpenings.value.length > 5)
  })
  const toggle = ref(false)

  const preparedJobOpenings = jobOpenings.reduce((acc: IJobOpening[], jobOpening: IJobOpening) => {
    if (!jobOpening.isClosed) {
      if (!jobOpening.departments.length) {
        jobOpening = { ...jobOpening, departments: ['other'] }
      }
      acc.push(jobOpening)
    }
    return acc
  }, []).filter((jobOpening) => {
    if (jobOpening.departments.includes('other')) {
      return true
    } else {
      return jobOpening.departments.every(department => {
        return departments.some(item => item.value === department)
      })
    }
  })

  const preparedDepartments = computed(() => {
    const jobOpeningsDepartments = new Set(preparedJobOpenings.flatMap((jobOpening) => jobOpening.departments))

    return [
      ...departments
        .filter((department) => jobOpeningsDepartments.has(department.value))
        .sort((a, b) => a.name.localeCompare(b.name)),
      jobOpeningsDepartments.has('other') ? { name: 'Other', value: 'other' } as IDepartment : {} as IDepartment
    ].filter((department) => Object.values(department).length)
  })

  const filteredJobOpenings = ref<IJobOpening[]>(preparedJobOpenings)

  function jobOpeningsFilter () {
    if (selectedDepartments.value.length === 0) {
      filteredJobOpenings.value = preparedJobOpenings
      return
    }
    filteredJobOpenings.value = preparedJobOpenings.filter(jobOpening => {
      return jobOpening.departments.some(jobOpeningDepartment => {
        return selectedDepartments.value.some(selectedDepartment => {
          return jobOpeningDepartment === selectedDepartment.value
        })
      })
    })
  }

  function jobOpeningView () {
    return toggle.value ? filteredJobOpenings.value : filteredJobOpenings.value.slice(0, 5)
  }

  return {
    jobOpeningView,
    jobOpeningsFilter,
    showMore,
    toggle,
    preparedDepartments,
    selectedDepartments,
    preparedJobOpenings,
    filteredJobOpenings
  }
})
