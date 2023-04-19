<template>
  <button
    :class="{ 'bg-black': isClicked, 'bg-[#faf8ed]': !isClicked }"
    class="w-14 h-14 rounded-full border border-black flex justify-center items-center"
    @mousedown="isClicked = true" @mouseup="isClicked = false"
  >
    <template v-if="!isClicked">
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
        <path d="M7 13L1 7L7 1" stroke="#2D3134" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </template>
    <template v-else>
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L7 7L1 1" stroke="#FAF8ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </template>
  </button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isClicked = ref(false)
</script>
