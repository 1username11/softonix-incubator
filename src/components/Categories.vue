<template>
  <section class="mt-[138px]">
    <div class="flex justify-between mt-6">
      <div><p class="font-inter text-[56px] font-semibold">Categories</p></div>
      <div class="flex space-x-3">
        <LeftArrowButton />
        <RightArrowButton />
      </div>
    </div>
    <div class="max-w-[370px]">
      <p class="font-inter font-normal text-[#5B5F62] leading-7">
        Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.
      </p>
    </div>
    <div class="flex justify-between mt-[60px]">
      <Category
        v-for="category in categories"
        :key="category.name"
        :category="category"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import Category from '@/components/Category.vue'
import { ref } from 'vue'
import LeftArrowButton from '@/components/LeftArrowButton.vue'
import RightArrowButton from '@/components/RightArrowButton.vue'

const categories = ref([
  {
    url: 'src/assets/staticResource/categories/Rectangle4406.png',
    name: 'Beach'
  },
  {
    url: 'src/assets/staticResource/categories/Rectangle4407.png',
    name: 'Desert'
  },
  {
    url: 'src/assets/staticResource/categories/Rectangle4408.png',
    name: 'Mountain'
  },
  {
    url: 'src/assets/staticResource/categories/Rectangle4409.png',
    name: 'Temple'
  },
  {
    url: 'src/assets/staticResource/categories/Rectangle4410.png',
    name: 'Tower'
  },
  {
    url: 'src/assets/staticResource/categories/Rectangle4411.png',
    name: 'Pyramid'
  }
])
</script>
