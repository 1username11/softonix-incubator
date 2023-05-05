<template>
  <div
    class="mt-3 p-5 w-[300px] rounded-lg bg-white shadow-blueGray-400 shadow-md text-sm mr-2 cursor-pointer"
    @click="openJobOpenings"
  >
    <div class="truncate font-bold text-lg">
      {{ jobOpening.title }}
    </div>
    <div class="truncate text-gray-medium">
      {{ jobOpening.departments.join(', ') }}
    </div>
    <div class="truncate text-gray-medium hover:underline text-blue-400">
      vacancy link
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  jobOpening: IJobOpening
}>()
function openJobOpenings () {
  window.open(props.jobOpening.url, '_blank')
}
</script>
