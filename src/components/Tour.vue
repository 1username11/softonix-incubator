<template>
  <div class="border-2 rounded-2xl w-[386px] h-[440px] border-white flex flex-col inline-flex p-3">
    <div class="mb-6">
      <img :src="url" alt="downloading image failed">
    </div>
    <div class="mb-4"><p class="font-inter font-semibold text-2xl leading-6">{{ name }}</p></div>
    <div class="mb-9"><p class="font-inter text-sm text-gray-400">{{ description }}</p></div>
    <div class="flex justify-between">
      <div class="flex items-center">
        <p class="text-xl font-extrabold mr-2">{{ cost }}</p>
        <p class="text-gray-400 font-inter text-sm">/person</p>
      </div>
      <DestinationButton city="Book Now" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import DestinationButton from '@/components/DestinationButton.vue'

defineProps<{
  url: string
  name: string
  description: string
  cost: string
}>()
</script>

<style scoped>

</style>
