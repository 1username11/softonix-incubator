import { ref } from 'vue'
import { jobOpenings } from '@/_homework/job-openings'
import { departments } from '@/_homework/departments'

export const useJobOpeningsStore =
    defineStore('JobOpeningsStore', () => {
      const selectedDepartments = ref<IDepartment[]>([])
      const preparedJobOpenings = ref(jobOpenings.map(jobOpening => {
        if (jobOpening.departments.length === 0) {
          return {
            ...jobOpening,
            departments: ['other']
          }
        }
        return jobOpening
      }).filter((jobOpening: IJobOpening) => !jobOpening.isClosed))
      const preparedDepartments = [...departmentsFilter(preparedJobOpenings.value, departments),
        {
          name: 'Other',
          value: 'other'
        }
      ]

      function departmentsFilter (jobOpenings: IJobOpening[], departments: IDepartment[]): IDepartment[] {
        const allDepartments: string[] = jobOpenings
          .flatMap((jobOpening) => jobOpening.departments)
        return departments
          .filter((department) => allDepartments.includes(department.value))
          .sort((a, b) => a.name.localeCompare(b.name))
      }

      const filteredJobOpenings = ref<IJobOpening[]>(preparedJobOpenings.value)

      function jobOpeningsFilter () {
        if (selectedDepartments.value.length === 0) {
          filteredJobOpenings.value = preparedJobOpenings.value
          return
        }
        filteredJobOpenings.value = preparedJobOpenings.value.filter(jobOpening => {
          return jobOpening.departments.some(department => {
            return selectedDepartments.value.some(selectedDepartment => {
              return department === selectedDepartment.value
            })
          })
        })
      }

      const showMore = computed(() => {
        return !(filteredJobOpenings.value.length > 5)
      })
      const toggle = ref(false)

      function jobOpeningView () {
        if (toggle.value) {
          jobOpeningsFilter()
          return filteredJobOpenings.value.sort()
        } else {
          jobOpeningsFilter()
          return filteredJobOpenings.value.slice(0, 5).sort()
        }
      }

      return {
        showMore,
        toggle,
        jobOpeningView,
        preparedDepartments,
        selectedDepartments,
        jobOpeningsFilter,
        preparedJobOpenings
      }
    })
