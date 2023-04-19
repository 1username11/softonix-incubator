<template>
  <div class="w-[166px] h-[178px] bg-white rounded-[14px] p-6">
    <div
      class="flex justify-center items-center align-middle h-1/2"
    >
      <p
        class="text-[#F66F4D] text-5xl font-bold"
      >
        {{ title }}
      </p>
    </div>
    <div>
      <p class="text-gray-400 text-xl h-1/2">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>
