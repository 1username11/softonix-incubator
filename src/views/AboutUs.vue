<template>
  <section class="flex justify-between">
    <div class="max-w-[600px] max-h-[659px] min-w-[400px]">
      <img class="w-full h-full" src="@/static/Images.png" alt="">
    </div>
    <div class="max-w-[467px]">
      <p class="font-inter font-semibold text-[#F66F4D] text-[20px] mb-5">
        Our Experience
      </p>
      <p class="font-inter font-semibold text-[56px] leading-[66px] mb-5">
        Our Stories Have Adventures
      </p>
      <p class="font-inter font-normal text-gray-400 leading-6 mb-8">
        We are experienced in bringing adventures to stay their journey, with all outdoor destinations in the world
        as our specialties. Start your adventure now! Nature has already called you!
      </p>
      <div class="flex justify-between space-x-5">
        <AchivmentWrapper
          v-for="(achievement, idx) in achivements"
          :key="achievement.title + idx"
          :title="achievement.title"
          :description="achievement.description"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import AchivmentWrapper from '@/components/AchivmentWrapper.vue'
import { ref } from 'vue'

const achivements = ref([
  {
    title: '12K+',
    description: 'Success Journey'
  },
  {
    title: '16+',
    description: 'Awards Winning'
  },
  {
    title: '20+',
    description: 'Years Of Experience'
  }
])
</script>
