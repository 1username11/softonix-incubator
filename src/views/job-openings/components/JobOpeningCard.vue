<template>
  <div
    class="mt-3 p-5 max-w-[350px] rounded-lg bg-white shadow-blueGray-400 shadow-md text-sm mr-2"
  >
    <div class="truncate font-bold text-lg">
      {{ jobOpening.title }}
    </div>
    <div class="truncate text-gray-medium">
      {{ jobOpening.departments.join(', ') }}
    </div>
    <div class="truncate text-gray-medium">
      {{ jobOpening.url }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  jobOpening: IJobOpening
}>()
</script>
