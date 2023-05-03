<template>
  <div
    v-if="!props.isClosed"
    class="mt-3 p-5 max-w-[350px] rounded-lg bg-white shadow-blueGray-400 shadow-md text-sm mr-2"
  >
    <div class="truncate font-bold text-lg">
      {{ props.title }}
    </div>
    <div class="truncate text-gray-medium">
      {{ props.departments }}
    </div>
    <div class="truncate text-gray-medium">
      {{ props.url }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string
  id?: string
  departments: string
  isClosed?: boolean
  url: string
}>()
</script>

<style scoped>

</style>
