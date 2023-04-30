<template>
  <section>
    <div class=" flex flex-col justify-center items-center align-middle">
      <div>
        <p class="text-[56px] font-bold font-inter">
          Top Destinations
        </p>
      </div>
      <div>
        <p class="text-gray-400 font-inter mt-4 mb-7">
          Sost Brilliant reasons Entrada should be your one-stop-shop!
        </p>
      </div>
      <div class="space-x-[14px]">
        <DestinationButton
          v-for="city in cities"
          :key="city.name"
          :city="city.name"
        />
      </div>
      <div class="flex mt-[51px]">
        <div class="flex">
          <div>
            <div class="mb-[26px] mr-[30px]">
              <img src="@/static/Card%2001.png" alt="">
            </div>
            <div>
              <img src="@/static/Card%2004.png" alt="">
            </div>
          </div>
          <div class="mr-[30px]">
            <img src="@/static/Card%2002.png" alt="">
          </div>
        </div>
        <div>
          <div>
            <img src="@/static/Card%2003.png" alt="">
          </div>
          <div class="flex">
            <div class="mt-[13px] mr-[30px]">
              <img src="@/static/Card%2005.png" alt="">
            </div>
            <div class="mt-[13px]">
              <img src="@/static/Card%2006.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import DestinationButton from '@/components/DestinationButton.vue'
import { ref } from 'vue'

const cities = ref([
  {
    name: 'London'
  },
  {
    name: 'Bangkok'
  },
  {
    name: 'England'
  },
  {
    name: 'Singapoore'
  },
  {
    name: 'Italy'
  }

])
</script>
