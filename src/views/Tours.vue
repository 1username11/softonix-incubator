<template>
  <section>
    <div class="flex justify-between">
      <div class="max-w-[400px]">
        <p class="font-inter font-semibold text-[56px] leading-[66px]">
          Find Popular Destination
        </p>
      </div>
      <div class="space-x-[16px] flex">
        <LeftArrowButton />
        <RightArrowButton />
      </div>
    </div>
    <div class="mt-9 justify-between space-x-[30px]">
      <Tour
        v-for="tour in tours"
        :key="tour.name"
        :cost="tour.cost"
        :description="tour.description"
        :name="tour.name"
        :url="tour.url"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import LeftArrowButton from '@/components/LeftArrowButton.vue'
import RightArrowButton from '@/components/RightArrowButton.vue'
import Tour from '@/components/Tour.vue'
import { ref } from 'vue'

const tours = ref([
  {
    url: '',
    name: 'Mountain Hiking Tour',
    description: 'Mountain Hiking Tour',
    cost: '$89'
  },
  {
    url: '',
    name: 'Machu Picchu, Peru',
    description: 'Machu Picchu, Peru',
    cost: '$99'
  },
  {
    url: '',
    name: 'The Grand Canyon, Arizona',
    description: 'The Grand Canyon, Arizona',
    cost: '$70'
  }
])
</script>
